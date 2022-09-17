import { todoCreator } from "./todoCreator"
export const addTodoToDOM = ()=>{
    const ti = todoCreator()
    const container = document.createElement('div')
    const title = document.createElement('h1')
    title.textContent = ti.createTodo()
    container.appendChild(title)

    const todoSection = document.getElementById('todoSection')
    return{
        append: ()=> todoSection.appendChild(container)
    }
}