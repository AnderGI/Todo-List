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
const getField = ()=>{
    let field = JSON.parse(localStorage.getItem('fields'))
    console.log(field)
}
if(JSON.parse(localStorage.getItem('fields'))){
    fieldArray = JSON.parse(localStorage.getItem('fields'))
    console.log(fieldArray)
}