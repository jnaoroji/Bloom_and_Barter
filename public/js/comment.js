// Get the comment form and comment box elements
const commentForm = document.getElementById("add-comment");
const commentBox = document.getElementById("comment-box");

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
  const userName = commentForm.dataset.username;
  const currentDate = commentForm.dataset.date;

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
  const userNameElement = document.createElement("span");
  userNameElement.classList.add("comment-username");
  userNameElement.textContent = comment.userName + ' - ';

  const dateElement = document.createElement("span");
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