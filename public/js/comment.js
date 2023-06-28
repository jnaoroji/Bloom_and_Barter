function addComment() {
    const commentButton = document.getElementById("#commentBtn");

commentButton.addEventListener("click", async function(event) {
  event.preventDefault();

  const swapId = document.location.pathname.split('/')[2];

  try {
    const response = await fetch(`/api/swaps/${swapId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ comment })
    });

    if (response.ok) {
      document.location.replace('/'); 
    } else {
      alert('Failed to post comment');
    }
  } catch (error) {
    console.error('Error occurred while commenting the post', error);
  }
})
};

const cancelButton = document.getElementById("#cancel-button");

cancelButton.addEventListener("click", async function(event) {
  event.preventDefault();

  const swapId = document.location.pathname.split('/')[2];

  try {
    const response = await fetch(`/api/swaps/${swapId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/your-swaps');
    } else {
      alert('Failed to cancel post');
    }
  } catch (error) {
    console.error('Error occurred while cancelling the post', error);
  }
});