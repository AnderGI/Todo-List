import './style.css';
import { fieldIndoAdder } from './fieldInfoAdder';
import { addFieldToList } from './addFieldToList';
import { fieldDOMRenderer } from './fieldDOM';
import { toggleFieldActiveStatus } from './toggleFieldActiveStatus';
import { addFieldFromArrayToLocalStorage } from './addFieldFromArrayToLocalStorage';
import { getLocalStorageItem } from './getLocalStorageItem';


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
       //coje obj field y añade info al clickar 
       fieldIndoAdder() 

        //añade a array 
        addFieldToList(fieldList, fieldIndoAdder()) 

         //coje el fieldContainer html y cada vez que se clicka añade a un active class
         // ademas compara el id del elemento clickado con el objeto que tenga ese id en el array para cambiar active a true
        toggleFieldActiveStatus(fieldList)

        //añade desde field a localStorage
        addFieldFromArrayToLocalStorage(fieldList)

        //desde array cojer info y pasarla al DOM
        getLocalStorageItem()

        fieldDOMRenderer(fieldIndoAdder())
    })
    
  
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