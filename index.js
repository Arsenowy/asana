window.onscroll = function() {
  myFunction();
};

var header = document.getElementById('nav');

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('box-shadow');
  } else {
    header.classList.remove('box-shadow');
  }
}

function switching1() {
  document
    .getElementById('animation-text-1')
    .classList.add('animation-text-active');
  document
    .getElementById('animation-text-0')
    .classList.remove('animation-text-active');
  document
    .getElementById('animation-text-2')
    .classList.remove('animation-text-active');
  document.getElementById('video-1').classList.add('video-active');
  document.getElementById('video-0').classList.remove('video-active');
  document.getElementById('video-2').classList.remove('video-active');
}
function switching0() {
  document
    .getElementById('animation-text-0')
    .classList.add('animation-text-active');
  document
    .getElementById('animation-text-1')
    .classList.remove('animation-text-active');
  document
    .getElementById('animation-text-2')
    .classList.remove('animation-text-active');
  document.getElementById('video-0').classList.add('video-active');
  document.getElementById('video-1').classList.remove('video-active');
  document.getElementById('video-2').classList.remove('video-active');
}
function switching2() {
  document
    .getElementById('animation-text-2')
    .classList.add('animation-text-active');
  document
    .getElementById('animation-text-0')
    .classList.remove('animation-text-active');
  document
    .getElementById('animation-text-1')
    .classList.remove('animation-text-active');
  document.getElementById('video-2').classList.add('video-active');
  document.getElementById('video-0').classList.remove('video-active');
  document.getElementById('video-1').classList.remove('video-active');
}
