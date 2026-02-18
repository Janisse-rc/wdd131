const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapter');
const list = document.querySelector('#list');    //you need to fill in the blank to reference the HTML element that is a unordered list element.


//Handling DOM Events
button.addEventListener('click', function () {
    // Code to execute when the button is clicked

    const chapter = input.value.trim();

    if (chapter !== '') {
        //buttom

        //Create list item
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.textContent = chapter

        //Delete button
        const deleteButton = document.createElement('button');

        //Populate the button textContent with a X
        deleteButton.textContent = '✖️';

        //Add delete functionality
        deleteButton.addEventListener('click', function () {
            li.remove();
            input.focus();
        });

        li.append(span);
        
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

