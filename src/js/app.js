window.onload = () => {
  window.setTimeout('redirect()', 5000);
};

const redirect = () => {
  window.location = '../src/views/view.html';
};