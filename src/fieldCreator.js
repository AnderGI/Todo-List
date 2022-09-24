
export const fieldCreator = (informationObj) =>{
    const todoEl = document.createElement('div')
    todoEl.setAttribute('class', 'fieldElement')

    const notesEl = document.createElement('h1')
    notesEl.textContent = "Notes"
    todoEl.onclick = function(){
        todoEl.classList.toggle('active')
   
    }

    const todoTitle = document.createElement('h1')
    todoTitle.textContent = informationObj.title
    
    todoEl.appendChild(todoTitle)
    return{
        createTodo: ()=> todoEl,
    }

}