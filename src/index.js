import './style.css';
import { fieldDisplayer } from './fieldDisplayer';
import { todoInfoAdder } from './todoInfoAdder';

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
        const fieldObj = fieldDisplayer()
        fieldObj.displayField()
       
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
        const fieldContainer = document.querySelectorAll('#fieldContainer>*')
        for(let field of fieldContainer){

            if(field.classList.contains('active')){
                const todoObj = todoInfoAdder()
                document.getElementById('todoSection').appendChild(todoObj.infoAddedToTodo())
            }
        }
        //const todoObj = todoInfoAdder()
        //document.getElementById('todoSection').appendChild(todoObj.infoAddedToTodo())
    })    
    
})();


