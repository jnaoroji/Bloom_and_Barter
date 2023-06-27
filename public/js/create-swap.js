document.getElementById('create-swap-form').onsubmit = async (event) => {
  event.preventDefault();

  const title = document.getElementById('swap-title').value;
  const type = document.getElementById('swap-type').value;
  const description = document.getElementById('swap-description').value;

  await fetch('/api/swaps', {
    method: 'POST',
    body: JSON.stringify({
      title,
      type,
      description,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/');
};
