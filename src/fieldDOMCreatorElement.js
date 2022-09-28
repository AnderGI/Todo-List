import { toggleFieldClasses } from "./toggleFieldClasses"

export const fieldDOMCreatorElement = (object) => {
    let fieldElement = document.createElement('div')
    fieldElement.setAttribute('class', 'fieldElement')
    

    let fieldTitle = document.createElement('h1')

    fieldTitle.textContent = object.title

    fieldElement.appendChild(fieldTitle)

    const fieldContainer = document.getElementById('fieldContainer')
    fieldContainer.appendChild(fieldElement)

    toggleFieldClasses()
    
}