"use strict";

//To jest do pwa nie edytuj tutaj nic ...

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// Saving without button

// const note = document.querySelector('.note__about--textarea-js');

// note.addEventListener('keyup', (e) =>{
//   localStorage.setItem('note', e.target.value);
// })
// if (localStorage.getItem('note')){
//   note.value = localStorage.getItem('note');
// }

// Saving with button

const note = document.querySelector('.note__about--textarea-js');
const save = document.querySelector('.end__box--icon-js');

save.addEventListener('click', (e) =>{
  localStorage.setItem('note', note.value);
})

if (localStorage.getItem('note')){
  note.value = localStorage.getItem('note');
}
