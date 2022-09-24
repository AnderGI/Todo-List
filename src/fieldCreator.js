
export const fieldCreator = (informationObj) =>{
    const todoEl = document.createElement('div')
    todoEl.setAttribute('class', 'fieldElement')

    const notesEl = document.createElement('h1')
    notesEl.textContent = "Notes"
    //ejemplo
    const fieldElements = document.querySelectorAll("#fieldContainer>*")
    for (let field of fieldElements){
        field.onclick= function(){
            for(let field of fieldElements){
                field.classList.remove('active')
            }
            this.classList.add('active')
        }
    }
    //ejemplo

    const todoTitle = document.createElement('h1')
    todoTitle.textContent = informationObj.title
    
    todoEl.appendChild(todoTitle)
    return{
        createTodo: ()=> todoEl,
    }

}