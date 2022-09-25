import { addTodoToFieldDOM } from "./addTodoToField"
export const fieldCreator = (informationObj) =>{
    const todoEl = document.createElement('div')
    todoEl.setAttribute('class', 'fieldElement')

    const notesEl = document.createElement('h1')
    notesEl.textContent = "Notes"
    const fieldElements = document.querySelectorAll("#fieldContainer>*")
    //change active class from one to another project when clicking on it
    for(let field of fieldElements){
        field.onclick= function(){
            for(let field of fieldElements){
                field.classList.remove('active')
            }
            this.classList.add('active')
            document.getElementById('todoSection').textContent = this.textContent
        }
    }
    
  

    const todoTitle = document.createElement('h1')
    todoTitle.textContent = informationObj.title
    
    todoEl.appendChild(todoTitle)
    return{
        createTodo: ()=> todoEl,
    }

}