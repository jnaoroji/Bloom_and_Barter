const deleteButton = document.getElementById("delete-button");

deleteButton.addEventListener("click", async function(event) {
  event.preventDefault();

  const swapId = document.location.pathname.split('/')[2];

  try {
    const response = await fetch(`/api/swaps/${swapId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/your-swaps');
    } else {
      alert('Failed to delete post');
    }
  } catch (error) {
    console.error('Error occurred while deleting the post', error);
  }
});
