/*
export const fieldCreator = (informationObj) =>{
    const todoEl = document.createElement('div')
    todoEl.setAttribute('class', 'fieldElement')

  
    const fieldElements = document.querySelectorAll("#fieldContainer>*")
    //change active class from one to another project when clicking on it
    for(let field of fieldElements){
        const todoSection = document.getElementById('todoSection')
        field.onclick= function(){
            for(let field of fieldElements){
                field.classList.remove('active')
                todoSection.textContent = " "
            }
            this.classList.add('active')
            
            //todoSection.textContent = this.textContent
        }
    }
    
  

    const todoTitle = document.createElement('h1')
    todoTitle.textContent = informationObj.title
    
    todoEl.appendChild(todoTitle)
    return{
        createTodo: ()=> todoEl,
    }

}
*/