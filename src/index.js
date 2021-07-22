import {toDoFactory} from "./TodoItem";
import {toDoItemDOMFactory} from "./TodoDOMManipulator";
import { collectionFactory } from "./toDoCollection";
import './style.css'


const main = document.querySelector('.main-container');
const form = document.querySelector('.add-items');
const data = [];

let testDate = toDoFactory("Test ToDO", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", "high", '11/23/2021');
let testToDo = toDoFactory("Test ToDO Number 2", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", "high", '11/23/2021');
data.push(testToDo);
data.push(testDate);

main.addEventListener('click', deleteItem);
form.addEventListener('submit', addItem);

function populateCollection (){
    data.map((item, index) =>{
        const toDo = toDoItemDOMFactory(item, index);
        main.appendChild(toDo);
    })
}


function deleteItem(e){
    if(!e.target.matches('button')) return; // if the object selected is not a button skip
    data.splice(this.id, 1);
    console.log('removed');
    removeAllChildren();
    populateCollection();    
}

function addItem(e){
    e.preventDefault();
    const item = toDoFactory(this.title.value, this.description.value, this.priority.value, this.date.value);
    data.push(item);
    removeAllChildren();
    populateCollection();
}

function removeAllChildren(){
    while(main.firstChild){
        main.removeChild(main.firstChild);
    }
}

populateCollection();