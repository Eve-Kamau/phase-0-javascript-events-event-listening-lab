
//const input = document.getElementById('input');
//input.addEventListener('click',addingEventListener);
/*
const = document.querySelector('#input').addEventListener('click', addingEventListener);
function addingEventListener() {
  alert('I was clicked!');
};

input.addEventListener('click', clickAlert);
*/

const input = document.getElementById('input');
input.addEventListener('click', function() {
  alert('I was clicked!');
});



function addingEventListener() {
  alert('I was clicked!');
}

input.addEventListener('click', addingEventListener);