export const fieldDOMRenderer = (object)=>{
    const fieldContainer = document.getElementById('fieldContainer')

    let div = document.createElement('div')
    div.setAttribute('class', 'fieldElement')
    div.setAttribute('id', object.id)

    let title = document.createElement('h1')
    title.innerHTML = object.name

    div.appendChild(title)

    fieldContainer.appendChild(div)

}