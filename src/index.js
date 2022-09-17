import './style.css';
import { log } from './dialogShower';
import { addTodoToDOM } from './DOMdisplayer';

(function(){
    const obj = log()

    const addBTn = document.getElementById('addTodo')
    addBTn.addEventListener('click', obj.setInputValuesToDefault)
    addBTn.addEventListener('click', obj.logOut)
    const formBtn = document.getElementById('add') //DIALOG BTN
    
    let array = []
    formBtn.addEventListener('click', ()=>{
        let obj1 = addTodoToDOM()
        obj1.append()
        array.push(obj1.returnNode())
        console.log(array)
    })
})();

