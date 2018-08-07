window.onload = () => {
  window.setTimeout('redirect()', 3000);
};

const redirect = () => {
  window.location = '../src/views/view.html';
};