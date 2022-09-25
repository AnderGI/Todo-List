export const todoCreator = (informationObject) =>{
    const todoEl = document.createElement('div')
    const todoTitle = document.createElement('h1')
    todoTitle.textContent = informationObject.title
    todoEl.appendChild(todoTitle)
    return {
        todoCreated: ()=> todoEl,
    }
}