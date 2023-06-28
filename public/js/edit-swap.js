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


