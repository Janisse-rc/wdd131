const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');    //you need to fill in the blank to reference the HTML element that is a unordered list element.


//Handling DOM Events
button.addEventListener('click', function () {
    // Code to execute when the button is clicked

    if (input.value.trim() !== '') {
        //buttom

        //Create list item
        const li = document.createElement('li');
        //We identified this variable as li(that is next to const), howerver, that was just
        // for simplicity. The variable identifier/name did not have
        // to be named the same as the element being created.
        li.textContent = input.value;
        
        //Delete button
        const deleteButton = document.createElement('button');
        
        //Populate the button textContent with a X
        deleteButton.textContent = '✖️';
        
        //Append the li element variable with the delete button.
        li.append(deleteButton);

        //Append li element variable to the unordered list in your HTML.
        list.append(li);

        //Clear input
        input.value = '';
    }
    //Whether or not a list item was created, the focus (active cursor) should be sent to the input element.
    input.focus();
});

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.value = '';
    input.focus();
});