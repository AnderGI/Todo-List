import './style.css';
import { fieldIndoAdder } from './fieldInfoAdder';
import { addFieldToList } from './addFieldToList';
import { fieldDOMRenderer } from './fieldDOM';
import { toggleFieldActiveStatus } from './toggleFieldActiveStatus';
import { addFieldFromArrayToLocalStorage } from './addFieldFromArrayToLocalStorage';
import { localStorageGetter } from './localStorageIterator';

(function(){
    //localStorage.clear()
    const addFielBtn = document.getElementById('addField')
    const fieldPopUp = document.getElementById('fieldPopUp')
    const addFieldPopUpBtn = document.getElementById('addFieldDialogBtn')
    const fieldTitleInput = document.getElementById('fieldTitle')
    let fieldList = []

    addFielBtn.addEventListener('click',()=>{
       fieldTitleInput.value=""
       fieldPopUp.showModal()
    })
    addFieldPopUpBtn.addEventListener('click', ()=>{
        fieldPopUp.close()
        fieldIndoAdder()
        addFieldToList(fieldList, fieldIndoAdder())
        fieldDOMRenderer(fieldIndoAdder())
        toggleFieldActiveStatus(fieldList) //maybe connect it with the array?
        addFieldFromArrayToLocalStorage(fieldList)
        
    })
    localStorageGetter()
  
})();


/** ESTO PARA TODOS
 *   const addTodoBtn = document.getElementById('addTodo')
    const todoPopUp = document.getElementById('todoPopUp')
    const addTodoPopUpBtn = document.getElementById('addTodoDialogBtn')
    const todoTitleInput = document.getElementById('todoTitle')

    addTodoBtn.addEventListener('click', ()=>{
        todoTitleInput.value= ''
        todoPopUp.showModal()
    })
    addTodoPopUpBtn.addEventListener('click', ()=>{
        todoPopUp.close() 
             
    })  
 * 
 * 
 */