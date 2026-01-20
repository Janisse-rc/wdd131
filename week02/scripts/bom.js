const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('________');

const li = document.createElement('li');
//We identified this variable as li(that is next to const), howerver, that was just
// for simplicity. The variable identifier/name did not have
// to be named the same as the element being created.

const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '✖️'
li.append(deleteButton);
list.append(i);