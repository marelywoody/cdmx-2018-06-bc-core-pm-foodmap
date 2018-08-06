window.onload = () => {
  window.setTimeout('redirect()', 2000);
};

const redirect = () => {
  window.location = '../src/views/view.html';
};