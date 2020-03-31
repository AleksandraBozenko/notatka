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

// Save without button

// const note = document.querySelector('.note__about--textarea-js');

// note.addEventListener('keyup', (e) =>{
//   localStorage.setItem('note', e.target.value);
// })
// if (localStorage.getItem('note')){
//   note.value = localStorage.getItem('note');
// }

// Save & remove with button

const note = document.querySelector('.note__about--textarea-js');
const save = document.querySelector('.end__box--save-js');
const remove = document.querySelector('.end__box--delete-js');


save.addEventListener('click', (e) =>{
  localStorage.setItem('note', note.value);
  save.classList.toggle('end__box--save-js');
})

remove.addEventListener('click', (e) =>{
  localStorage.removeItem('note', note.value);
  remove.classList.toggle('end__box--delete-js');
  note.value ='';
})

if (localStorage.getItem('note')){
  note.value = localStorage.getItem('note');
}
