import './style.css';
import { log } from './dialogShower';

import { addTodoToDOM } from './DOMdisplayer';

const obj = log()

const addBTn = document.getElementById('addTodo')
addBTn.addEventListener('click', obj.logOut)
const formBtn = document.getElementById('add') //DIALOG BTN


formBtn.addEventListener('click', ()=>{
    const obj1 = addTodoToDOM()
    obj1.append()
})


