// Get the comment form and comment box elements
const commentForm = document.getElementById("add-comment");
const commentBox = document.getElementById("commentBox");

// Load comments from localStorage on page load
window.addEventListener("DOMContentLoaded", function() {
  loadComments();
});

// Add event listener to the comment form
commentForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the comment text
  const commentText = document.getElementById("comment-text").value;

  // Get the current user name and date
  const userName = "{{swap.user.name}}";
  const currentDate = "{{format_date swap.date_created}}";

  // Create a new comment object
  const comment = {
    userName: userName,
    date: currentDate,
    text: commentText
  };

  // Save the comment to localStorage
  saveComment(comment);

  // Render the comment
  renderComment(comment);

  // Clear the comment textarea
  document.getElementById("comment-text").value = "";
});

// Function to save comment to localStorage
function saveComment(comment) {
  let comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.push(comment);
  localStorage.setItem("comments", JSON.stringify(comments));
}

// Function to load comments from localStorage
function loadComments() {
  let comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.forEach(function(comment) {
    renderComment(comment);
  });
}

// Function to render a comment
function renderComment(comment) {
  // Create a new comment element
  const newComment = document.createElement("div");
  newComment.classList.add("comment");

  // Create elements for user name, date, and comment text
  const userNameElement = document.createElement("div");
  userNameElement.classList.add("comment-username");
  userNameElement.textContent = comment.userName;

  const dateElement = document.createElement("div");
  dateElement.classList.add("comment-date");
  dateElement.textContent = comment.date;

  const commentTextElement = document.createElement("div");
  commentTextElement.classList.add("comment-text");
  commentTextElement.textContent = comment.text;

  // Append user name, date, and comment text to the new comment element
  newComment.appendChild(userNameElement);
  newComment.appendChild(dateElement);
  newComment.appendChild(commentTextElement);

  // Append the new comment to the comment box
  commentBox.appendChild(newComment);
}




// // Get the comment form and comment box elements
// const commentForm = document.getElementById("add-comment");
// const commentBox = document.getElementById("commentBox");

// // Add event listener to the comment form
// commentForm.addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevent form submission

//   // Get the comment text
//   const commentText = document.getElementById("comment-text").value;

//   // Create a new comment element
//   const newComment = document.createElement("div");
//   newComment.classList.add("comment");
//   newComment.textContent = commentText;

//   // Append the new comment to the comment box
//   commentBox.appendChild(newComment);

//   // Clear the comment textarea
//   document.getElementById("comment-text").value = "";
// });


// // const commentInput = getElementById('comment-text');
// const commentInput = getElementsByName('add-comment');
// // const commentButton = getElementById('commentBtn');
// const commentBox = getElementById('commentBox');

// commentButton.addEventListener("click", async function (event) {
//     event.preventDefault();
    
//     const comment = commentInput.value;
//     console.log(comment);
//     try {
//         const response = await fetch(`/api/swaps/${results}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ comment })
//         });

//         if (response.ok) {
//             const newComment = await response.json();
//             const commentElement = document.createElement('div');
//             commentElement.textContent = newComment.comment
//             commentBox.appendChild(commentElement);
//             // document.location.replace('/');
//         } else {
//             alert('Failed to post comment');
//         }
//     } catch (error) {
//         console.error('Error occurred while commenting the post', error);
//     }
// });



// function addComment() {
//     const commentButton = document.getElementById("#commentBtn");

// commentButton.addEventListener("click", async function(event) {
//   event.preventDefault();

//   const swapId = document.location.pathname.split('/')[2];

//   try {
//     const response = await fetch(`/api/swaps/${swapId}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ comment })
//     });

//     if (response.ok) {
//       document.location.replace('/'); 
//     } else {
//       alert('Failed to post comment');
//     }
//   } catch (error) {
//     console.error('Error occurred while commenting the post', error);
//   }
// })
// };

// const cancelButton = document.getElementById("#cancel-button");

// cancelButton.addEventListener("click", async function(event) {
//   event.preventDefault();

//   const swapId = document.location.pathname.split('/')[2];

//   try {
//     const response = await fetch(`/api/swaps/${swapId}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/your-swaps');
//     } else {
//       alert('Failed to cancel post');
//     }
//   } catch (error) {
//     console.error('Error occurred while cancelling the post', error);
//   }
// });

