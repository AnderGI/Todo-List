import { todoCreator } from "./todoCreator"

export const addTodoToDOM = ()=>{
    const todo = todoCreator() //create an object from the todoCreator factory

    const TitleDateAndDescription = document.createElement('div')
    TitleDateAndDescription.style.cssText =`
    display:flex;
    flex-flow: column wrap;
    `
   
        const TitleAndDateContainer = document.createElement('div')
        TitleAndDateContainer.style.cssText = `
        display:flex;
        flex-flow:row wrap;
        `
            const title = document.createElement('h1')
            title.textContent = todo.setTitle()
            TitleAndDateContainer.appendChild(title)

            const dueDate = document.createElement('p')
            dueDate.textContent = todo.setDate()
            TitleAndDateContainer.appendChild(dueDate)


        TitleDateAndDescription.appendChild(TitleAndDateContainer)

        const description = document.createElement('p')
        description.textContent = todo.setDescription()
        TitleDateAndDescription.appendChild(description)
        
    const todoSection = document.getElementById('todoSection')

    return{
        append: ()=> todoSection.appendChild(TitleDateAndDescription)
    }
}