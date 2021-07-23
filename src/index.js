import {toDoFactory} from "./TodoItem";
import {toDoItemDOMFactory} from "./TodoDOMManipulator";
import { collectionFactory } from "./toDoCollection";
import './style.css'


const main = document.querySelector('.main-container');
const form = document.querySelector('.add-items');
const toggleForm = document.querySelector('.form-toggle');
const data = [];

let testDate = toDoFactory("Test ToDO", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", "high", '11/23/2021');
let errorTest = toDoFactory("This is the error tester", "the description will match the error jk jk", "high", "11/23/2025");
let testToDo = toDoFactory("Test ToDO Number 2", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", "high", '11/23/2021');
data.push(testToDo);
data.push(testDate);
data.push(errorTest);

main.addEventListener('click', deleteItem);
main.addEventListener('click', checkItem);
form.addEventListener('submit', addItem);
toggleForm.addEventListener('click',displayForm);

function checkItem(e){
    if(!e.target.matches('input')) return; // if item is not an item skip
    let title = e.target.parentNode.getElementsByClassName('item-title')[0]; //select the first element of the parent node, which is the only element in nodelist
    if(!e.target.checked){ //is checkbox checked?
        title.style.removeProperty('text-decoration');
    }else{
        title.style.cssText = "text-decoration: line-through;";
    }
}

function populateCollection (){
    data.map((item, index) =>{
        const toDo = toDoItemDOMFactory(item, index);
        main.appendChild(toDo);
    });
}

function displayForm(){
    document.querySelector('.form-container').style.display ="block";
}
function closeForm(e){      
    document.querySelector('.form-container').style.display ="none";
}

function deleteItem(e){
    if(!e.target.matches('button')) return; // if the object selected is not a button skip
    let index = e.target.parentNode.id; // get the ID from the Item element
    data.splice(index,1);
    removeAllChildren();
    populateCollection();    
}

function addItem(e){
    e.preventDefault();// avoid the form from resetting the page
    const item = toDoFactory(this.title.value, this.description.value, this.priority.value, this.date.value);
    data.push(item);
    this.reset(); // reset the contents of the form
    closeForm();
    removeAllChildren();
    populateCollection();
}

function removeAllChildren(){
    while(main.firstChild){
        main.removeChild(main.firstChild);
    }
}

populateCollection();