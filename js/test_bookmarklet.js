const script = document.createElement('script');
script.src = 'any.js';
script.async = true;
script.type = 'module';
script.onload = () => {
  console.log('Script loaded successfuly');
};
script.onerror = () => {
  console.log('Error occurred while loading script');
};
document.body.appendChild(script);