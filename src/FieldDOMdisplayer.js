export const FieldDOMdisplayer = ()=>{
    const fieldEl = document.createElement('div')
    const textFieldEl = document.createElement('p')
    textFieldEl.innerHTML = `This is a field`
    fieldEl.appendChild(textFieldEl)

    const fieldContainer = document.getElementById('fieldContainer')
    return {
        appendFieldToDOM : ()=> fieldContainer.appendChild(fieldEl)
    }
}