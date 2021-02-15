const btn = document.querySelectorAll('.drum');
let audio;
for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {
    let btnInnerHtml = this.innerHTML;
    keyClick(btnInnerHtml);
    btnAnimate(btnInnerHtml);
  });
}

document.addEventListener('keydown', (event) => {
  keyPressed(event.key);
  btnAnimate(event.key);
});

keyPressed = (key) => {
  (key === 'w') ?
    audio = new Audio('sounds/crash.mp3'):
    audio.play();
  (key === 'a') ?
    audio = new Audio('sounds/kick-bass.mp3'):
    audio.play();
  (key === 's') ?
    audio = new Audio('sounds/snare.mp3'):
    audio.play();
  (key === 'd') ?
    audio = new Audio('sounds/tom-1.mp3'):
    audio.play();
  (key === 'j') ?
    audio = new Audio('sounds/tom-2.mp3'):
    audio.play();
  (key === 'k') ?
    audio = new Audio('sounds/tom-3.mp3'):
    audio.play();
  (key === 'l') ?
      audio = new Audio('sounds/tom-4.mp3'):
      audio.play();
}

keyClick = (btnInnerHtml) => {
  (btnInnerHtml === 'w') ?
    audio = new Audio('sounds/crash.mp3'):
    audio.play();
  (btnInnerHtml === 'a') ?
    audio = new Audio('sounds/kick-bass.mp3'):
    audio.play();
  (btnInnerHtml === 's') ?
    audio = new Audio('sounds/snare.mp3'):
    audio.play();
  (btnInnerHtml === 'd') ?
    audio = new Audio('sounds/tom-1.mp3'):
    audio.play();
  (btnInnerHtml === 'j') ?
    audio = new Audio('sounds/tom-2.mp3'):
    audio.play();
  (btnInnerHtml === 'k') ?
    audio = new Audio('sounds/tom-3.mp3'):
    audio.play();
  (btnInnerHtml === 'l') ?
    audio = new Audio('sounds/tom-4.mp3'):
    audio.play();
}


btnAnimate = (currentKey) => {
  let btnActive = document.querySelector('.' + currentKey);
  btnActive.classList.add('active');
  setTimeout(function () {
    btnActive.classList.remove('active');
  }, 100);
}
