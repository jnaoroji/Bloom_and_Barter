document.getElementById('edit-swap-form').onsubmit = async (event) => {
  event.preventDefault();

  const swapId = document.location.pathname.split('/')[2];

  const title = document.getElementById('swap-title').value;
  const type = document.getElementById('swap-type').value;
  const description = document.getElementById('swap-description').value;

  await fetch(`/api/swaps/${swapId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      type,
      description,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/your-swaps');

};


// const commentButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/swaps/${id}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   },

//   const addCommentHandler = async (event) => {
//     event.preventDefault();
//     const commentInput = document.getElementById(‘comment-text’);
//     const comment = commentInput.value.trim();
//     if (comment !== ‘’) {
//       const postId = event.target.getAttribute(‘data-id’);
//       try {
//         const response = await fetch(`/api/swaps/${id}/comments`, {
//           method: ‘POST’,
//           headers: {
//             ‘Content-Type’: ‘application/json’
//           },
//           body: JSON.stringify({ comment })
//         });
//         if (response.ok) {
//           // Comment added successfully, perform necessary actions (e.g., update UI)
//           commentInput.value = ‘’;
//           // Additional code here if needed
//         } else {
//           // Handle error response from the server
//           const errorData = await response.json();
//           console.error(‘Failed to add comment:’, errorData.message);
//         }
//       } catch (error) {
//         // Handle any network or other errors
//         console.error(‘Failed to add comment:’, error);
//       }
//     }
//   };
// };

// document
//   .querySelector('#post-button')
//   .addEventListener('onClick', commentButtonHandler);


