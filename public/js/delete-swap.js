const postId = "{{swap.id}}"; 

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const swapId = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/swaps/${swapId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/your-swaps');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  
  document
    .querySelector(`${swapId}`)
    .addEventListener('click', delButtonHandler);
  
  