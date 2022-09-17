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
        TitleDateAndDescription.setAttribute('id', todo.setTitle())
            const title = document.createElement('h1')
            title.innerHTML = todo.setTitle()
            TitleAndDateContainer.appendChild(title)

            const dueDate = document.createElement('p')
            dueDate.innerHTML = todo.setDate()
            TitleAndDateContainer.appendChild(dueDate)


        TitleDateAndDescription.appendChild(TitleAndDateContainer)

        const description = document.createElement('p')
        description.innerHTML = todo.setDescription()
        TitleDateAndDescription.appendChild(description)

        const removeBtn = document.createElement('button')
        removeBtn.setAttribute('id', 'removerBtn')
        TitleDateAndDescription.appendChild(removeBtn)

    const todoSection = document.getElementById('todoSection')

    return{
        append: ()=> todoSection.appendChild(TitleDateAndDescription),
        returnNode: ()=> TitleDateAndDescription
    }
}