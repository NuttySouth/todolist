import {toDoFactory} from "./TodoItem";
import {toDoItemDOMFactory} from "./TodoDOMManipulator";
import { collectionFactory } from "./toDoCollection";
import './style.css'


const main = document.querySelector('.main-container');

let testDate = toDoFactory("Test ToDO", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", "high", '11/23/2021');
let testToDo = toDoFactory("Test ToDO Number 2", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", "high", '11/23/2021');

const coll = collectionFactory();

coll.addItem(testDate);
coll.addItem(testToDo);

function refreshItems(){
    while(main.firstChild){
        main.removeChild(main.firstChild);
    }

    coll.arr.forEach(item =>{
        let toDo = toDoItemDOMFactory(item);
        main.appendChild(toDo);
    });

}