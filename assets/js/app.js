
let index = 0;
const noteBtn = document.getElementById('note-btn');
const noteInput = document.getElementById('input-to-do');
const takeNote = function () {
    const noteText = noteInput.value;

    if (!isInvalid()) return;
    const toDoList = document.getElementById('to-do-list');
    const liChildOf_toDoList = document.createElement('li');

    const labelChildOf_li = document.createElement('label');
    labelChildOf_li.setAttribute('for', `task-${index}`);
    labelChildOf_li.innerText = noteText;

    const inputChildOf_li = document.createElement('input');
    inputChildOf_li.setAttribute('type', `checkbox`);
    inputChildOf_li.setAttribute('id', `task-${index++}`);

    liChildOf_toDoList.appendChild(labelChildOf_li);
    liChildOf_toDoList.appendChild(inputChildOf_li);

    liChildOf_toDoList.classList.add('to-do-item');
    toDoList.appendChild(liChildOf_toDoList);
    noteInput.value = '';
    noteInput.focus();
}

const isInvalid = function () {
    const noteText = noteInput.value.trim();
    if (!noteText) {
        noteInput.classList.add('invalid');
        noteInput.setAttribute('placeholder', 'Vui lòng nhập ghi chú');
        return false;
    }
    noteInput.classList.remove('invalid');
    noteInput.setAttribute('placeholder', '');

    return true;
}
noteBtn.addEventListener('click', takeNote);

noteInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        takeNote();
    }
});