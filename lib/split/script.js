let text = document.querySelector('#text');

text.setAttribute('data-text',text.innerHTML);

var lr = document.querySelector('html');
window.addEventListener('click',()=>{
  var newone = lr.cloneNode(true);
  lr.parentNode.replaceChild(newone, lr);
  lr = newone;
});