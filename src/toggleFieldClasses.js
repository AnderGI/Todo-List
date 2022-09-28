//import { setLocalStorage } from "./setLocalStorage"
export const toggleFieldClasses= ()=>{
    const addTodoPopUpBtn = document.getElementById('addTodoDialogBtn')
    const fieldContainer = document.querySelectorAll('#fieldContainer>*')
    for(let field of fieldContainer){
        field.onclick = function (){
        for(let field of fieldContainer){
            field.classList.remove('active')
        }
        if(this.classList.add('active')){
            addTodoPopUpBtn.addEventListener('click', ()=>{
                todoPopUp.close() 
                todoDOMrenderer(todoCreator(todoTitleInput.value))        
            })   
        }
            
        }
    }
   
}