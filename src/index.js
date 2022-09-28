import './style.css';

import { fieldObjectCreator } from './fieldObjectCreator';
import { fieldDOMCreatorElement } from './fieldDOMCreatorElement';
import { todoCreator } from './todoCreator';
import { todoDOMrenderer } from './todoDOMCreatorElement';


(function(){
    const addFielBtn = document.getElementById('addField')
    const fieldPopUp = document.getElementById('fieldPopUp')
    const addFieldPopUpBtn = document.getElementById('addFieldDialogBtn')
    const fieldTitleInput = document.getElementById('fieldTitle')
    

    addFielBtn.addEventListener('click',()=>{
       fieldTitleInput.value=""
       fieldPopUp.showModal()
    })
    addFieldPopUpBtn.addEventListener('click', ()=>{
        fieldPopUp.close()
        fieldDOMCreatorElement(fieldObjectCreator(fieldTitleInput.value))
       
    })

    const addTodoBtn = document.getElementById('addTodo')
    const todoPopUp = document.getElementById('todoPopUp')
    const addTodoPopUpBtn = document.getElementById('addTodoDialogBtn')
    const todoTitleInput = document.getElementById('todoTitle')

    addTodoBtn.addEventListener('click', ()=>{
        todoTitleInput.value= ''
        todoPopUp.showModal()
    })
    addTodoPopUpBtn.addEventListener('click', ()=>{
        todoPopUp.close() 
        todoDOMrenderer(todoCreator(todoTitleInput.value))
        //localStorage.setItem(fieldObjectCreator(fieldTitleInput.value).title,todoCreator(todoTitleInput.value).title)

    })    
    
})();


