export const addTodoToDOM = ()=>{
    const container = document.createElement('div')
    const title = document.createElement('h1')
    title.textContent = `This is a title`
    container.appendChild(title)

    const todoSection = document.getElementById('todoSection')
    return{
        append: ()=> todoSection.appendChild(container)
    }
}