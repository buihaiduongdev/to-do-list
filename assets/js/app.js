let myNotes = JSON.parse(localStorage.getItem('myNotesSave'))
    || [{ content: 'Your job', isDone: false }];

const noteBtn = document.getElementById('note-btn');
const noteInput = document.getElementById('input-to-do');
const toDoList = document.getElementById('to-do-list');

function createNoteItem(element, index) {
    const noteItem = document.createElement('li');

    const noteContent = document.createElement('label');
    noteContent.setAttribute('for', `task-${index}`);
    noteContent.innerText = element.content;

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', `checkbox`);
    checkBox.setAttribute('id', `task-${index}`);

    const removeNote = () => {
        myNotes.splice(index, 1);
        //update to localStorage
        localStorage.setItem('myNotesSave', JSON.stringify(myNotes));
        noteItem.remove();
    }

    noteContent.addEventListener('click', removeNote)
    checkBox.addEventListener('click', removeNote)
    noteItem.appendChild(noteContent);
    noteItem.appendChild(checkBox);
    noteItem.classList.add('to-do-item');

    return noteItem;
}

function loadNotes() {
    toDoList.innerHTML = '';
    myNotes.forEach((element, index) => {
        toDoList.appendChild(createNoteItem(element, index));
    });
}

function takeNote() {
    const noteText = noteInput.value.trim();

    if (!isInvalid(noteText)) return;

    myNotes.push({ content: noteText, isDone: false });
    const index = myNotes.length - 1;
    toDoList.appendChild(createNoteItem(myNotes[index], index));

    //update to localStorage
    localStorage.setItem('myNotesSave', JSON.stringify(myNotes));

    noteInput.value = '';
    noteInput.focus();
}

const isInvalid = function (noteText) {
    if (!noteText) {
        noteInput.classList.add('invalid');
        noteInput.setAttribute('placeholder', 'Vui lòng nhập ghi chú');
        return false;
    }
    noteInput.classList.remove('invalid');
    noteInput.setAttribute('placeholder', '');

    return true;
}

noteBtn.addEventListener('click', () => { takeNote() });

noteInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        takeNote();
    }
});

loadNotes();
