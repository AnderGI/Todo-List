import { set } from 'lodash';
import './style.css';
const addFielBtn = document.getElementById('addField')
const fieldPopUp = document.getElementById('fieldPopUp')
const addFieldPopUpBtn = document.getElementById('addFieldDialogBtn')
const fieldTitleInput = document.getElementById('fieldTitle') 
let fieldArray = []   
addFielBtn.addEventListener('click', ()=>{
    fieldTitleInput.value = ""
    fieldPopUp.showModal()
})
addFieldPopUpBtn.addEventListener('click', ()=>{
    addToArray(fieldCreator(fieldTitleInput.value))
    DOMrenderer(fieldCreator(fieldTitleInput.value))
    setFiedlToLocaleStorage()
    getField()
    fieldPopUp.close()
})

const fieldCreator = (name)=>{
    let field ={
        name:name,
        active: false,
        id: Date.now().toString(),
    }
    return Object.assign(
        {},
        field,
    )
}

const addToArray = (obj) => {
    fieldArray.push(obj)
}

const setFiedlToLocaleStorage = ()=>{
    let field = JSON.stringify(fieldArray)
    localStorage.setItem('fields', field)
}

//Toggle active property from false to treu every time an div with it's object (connected by id) is clicked
const toggleActiveProperty = ()=>{
    for(let field of document.querySelectorAll('#fieldContainer>*')){
        field.onclick = function(){
            for(let field of document.querySelectorAll('#fieldContainer>*')){
                field.classList.remove('active')
            }
            fieldArray.forEach(item=>{
                if(this.getAttribute('id') === item.id){
                    item.active = true
                    this.classList.add('active')
                } else{
                    item.active = false
                }
                setFiedlToLocaleStorage()
            })
        }
    }
}
const giveActiveStatusReload = ()=>{
    fieldArray.some(element =>{
        if(element.active === true){
            console.log(`This ${element.name} has an active status of ${element.active}`)
            for(let field of document.querySelectorAll('#fieldContainer>*')){
                if(field.id === element.id && element.active === true){
                    field.classList.add('active')
                }
            }
        }
    })
}

const getField = ()=>{
    if(JSON.parse(localStorage.getItem('fields'))){
        fieldArray = JSON.parse(localStorage.getItem('fields')) //el array cada vez tiene nuevos valores
        console.log(fieldArray)
        toggleActiveProperty()
        giveActiveStatusReload()
    }
    
}

getField()

const fieldContainer = document.getElementById('fieldContainer')
const DOMrendererFromArray = (array) =>{
    array.forEach(element=>{
        let div = document.createElement('div')
        div.setAttribute('class', 'fieldElement')
        div.setAttribute('id', element.id)
        div.textContent = element.name

        fieldContainer.appendChild(div)
    })
    toggleActiveProperty()
    giveActiveStatusReload()
}
DOMrendererFromArray(fieldArray)


const DOMrenderer = (obj)=>{
    let div = document.createElement('div')
    div.setAttribute('class', 'fieldElement')
    div.setAttribute('id', obj.id)
    div.textContent = obj.name

    fieldContainer.appendChild(div)
    toggleActiveProperty()
}



/*
fieldArray.some(element =>{
            if(element.active === true){
                console.log(`This ${element.name} has an active status of ${element.active}`)
            }
        })
*/
