export const todoDOMrenderer = (object)=>{
    let todoItem = document.createElement('div')

    let todoTitle = document.createElement('h1')
    todoTitle.textContent = object.title
    todoItem.appendChild(todoTitle)

    const todoSection = document.getElementById('todoSection')
    todoSection.appendChild(todoItem)
}