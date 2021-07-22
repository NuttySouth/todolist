
export const toDoItemDOMFactory = (toDoObject, id) =>{
    const toDoItem = document.createElement('div');
    const title = document.createElement('p');
    const desc = document.createElement('p');
    const prio = document.createElement('p');
    const remainTime = document.createElement('p');
    const check = document.createElement('input');
    const deleteBtn = document.createElement('button');


    title.textContent = toDoObject.getName;
    desc.textContent = toDoObject.getDescription;
    prio.textContent = `Priority: ${toDoObject.getPriority}`;
    remainTime.textContent = `Remaining Time: ${toDoObject.timeToDate}`;
    deleteBtn.textContent = "Delete";
    deleteBtn.value = toDoObject.getName;


    check.type = 'checkbox';
    deleteBtn.classList.add('delete-btn');
    toDoItem.classList.add('item');
    toDoItem.setAttribute('id', id);
    title.classList.add('item-title');
    desc.classList.add('item-desc');
    prio.classList.add('item-prio');
    remainTime.classList.add('item-remain');
    check.classList.add('item-checkbox');

    toDoItem.appendChild(title);
    toDoItem.appendChild(check);
    toDoItem.appendChild(prio);
    toDoItem.appendChild(desc);
    toDoItem.appendChild(deleteBtn);
    toDoItem.appendChild(remainTime);

    return toDoItem;
}