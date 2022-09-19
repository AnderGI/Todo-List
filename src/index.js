import './style.css';
import { log } from './dialogShower';
import { addTodoToDOM } from './DOMdisplayer';
import {addTodoToArray} from './addTodoToArray.js';
import {addMarkerToTodoNode} from './addMarkerToTodoNode.js';
import{FieldDOMdisplayer} from './FieldDOMdisplayer.js';

(function(){
    let arrayOfTodos = []
    const obj = log()

    const addBTn = document.getElementById('addTodo')
    addBTn.addEventListener('click', obj.setInputValuesToDefault)
    addBTn.addEventListener('click', obj.logOut)
    const formBtn = document.getElementById('add') //DIALOG BTN
    
    formBtn.addEventListener('click', ()=>{
        let obj1 = addTodoToDOM()
        obj1.append()
        addTodoToArray(arrayOfTodos, obj1.returnNode())
        addMarkerToTodoNode(arrayOfTodos, obj1.returnNode())
    })

    
    const addFieldBtn = document.getElementById('addField')
    addFieldBtn.addEventListener('click', ()=>{
        const fieldObj = FieldDOMdisplayer()
        fieldObj.appendFieldToDOM()
    })
})();

