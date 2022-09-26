import './style.css';

import { todoInfoAdder } from './todoInfoAdder';
import { fieldObjectCreator } from './fieldObjectCreator';
import { fieldDOMCreatorElement } from './fieldDOMCreatorElement';

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
        //const fieldObj = fieldDisplayer()
        //fieldObj.displayField()
        //console.log(fieldObjectCreator(fieldTitleInput.value).title)
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
        const todoSection = document.getElementById('todoSection')
        const todoObj = todoInfoAdder()
        //document.getElementById('todoSection').appendChild(todoObj.infoAddedToTodo())
        localStorage.setItem('objeto', JSON.stringify(todoObj))
        todoSection.textContent = localStorage.getItem('objeto')
    })    
    
})();


