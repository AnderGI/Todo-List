import { indexOf, remove, set, uniqueId } from 'lodash';
import './style.css';
const addFielBtn = document.getElementById('addField')
const fieldPopUp = document.getElementById('fieldPopUp')
const addFieldPopUpBtn = document.getElementById('addFieldDialogBtn')
const fieldTitleInput = document.getElementById('fieldTitle') 
const fieldTodoTitle = document.querySelector('[data-field-title]')
const fieldContainer = document.getElementById('fieldContainer')


const addTodoPopUpBtn = document.getElementById('addTodoDialogBtn')
const todoTitleInput = document.getElementById('todoTitle')
let fieldArray = []
let todoArray = [] 

addFieldPopUpBtn.addEventListener('click', ()=>{
    addToArray(fieldCreator(fieldTitleInput.value))
    DOMrenderer(fieldCreator(fieldTitleInput.value))
    setFiedlToLocaleStorage()
    getField()
    fieldTitleInput.value = ""
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

//Once a div is active the name of thje object associated to it shold 
//should appear in the field title text
const giveFieldTodoTitleAValue = () =>{
    for(let field of document.querySelectorAll('#fieldContainer>*')){
        fieldArray.some(object=>{
            if(field.classList.contains('active') && field.getAttribute('id') === object.id){
                fieldTodoTitle.innerHTML = object.name
            }
        })
    }
}

const changeTodoDisplay = (field) =>{
            if(document.querySelectorAll('[data-todo-container]>*')){
                for(let todo of document.querySelectorAll('[data-todo-container]>*')){
                    todo.classList.remove('visible')
                    todo.style.cssText = `
                    display:none;
                    `
                    if(field.id === todo.getAttribute('class')){
                        todo.classList.add('visible')
                        todo.style.cssText = `
                        display: default;
                        `
                    }
                }
            }
            
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

            giveFieldTodoTitleAValue()
            changeTodoDisplay(this)  
        }
        if(field.classList.contains('active')){
            changeTodoDisplay(field)
        }
    }
}

const giveActiveStatusReload = ()=>{
    fieldArray.some(element =>{
        if(element.active === true){
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
        giveFieldTodoTitleAValue() 
    }
    
}

getField()

const removeFieldBtn = () =>{
    for(let removeFieldBtn of document.querySelectorAll('#fieldContainer>div>button')){
        removeFieldBtn.onclick = function (){
                    fieldArray.map(object => {
                        if(object.id === removeFieldBtn.getAttribute('id')){
                            fieldArray.splice(fieldArray.indexOf(object), 1)
                            for(let field of document.querySelectorAll('#fieldContainer>*')){
                                if(field.getAttribute('id') === removeFieldBtn.getAttribute('id')){
                                    field.remove()
                                    fieldTodoTitle.textContent = ""
                                }
                            }
                        }
                    })
                
            
        }
    }
}


const DOMrendererFromArray = (array) =>{
    array.forEach(element=>{
        let div = document.createElement('div')
        div.setAttribute('class', 'fieldElement')
        div.setAttribute('id', element.id)
        div.textContent = element.name
        let removeButton = document.createElement('button')
        removeButton.setAttribute('class','removeButton')
        removeButton.setAttribute('id', element.id)
        removeButton.textContent = 'remove'
        div.appendChild(removeButton)
        fieldContainer.appendChild(div)
    })
    toggleActiveProperty()
    giveActiveStatusReload()
    giveFieldTodoTitleAValue()
    removeFieldBtn()
}
DOMrendererFromArray(fieldArray)


const DOMrenderer = (obj)=>{
    let div = document.createElement('div')
    div.setAttribute('class', 'fieldElement')
    div.setAttribute('id', obj.id)
    div.textContent = obj.name

    let removeButton = document.createElement('button')
    removeButton.setAttribute('class','removeButton')
    removeButton.textContent = 'remove'
    removeButton.setAttribute('id', obj.id)
    div.appendChild(removeButton)

    fieldContainer.appendChild(div)
    toggleActiveProperty()
    removeFieldBtn()
}


addTodoPopUpBtn.addEventListener('click', ()=>{
    
    addTodoToActiveField()
    todoTitleInput.value = ""
   
})
const todoCreator = (name,id)=>{
    let todo ={
        name: name,
        id: id,
        uniqueId: Date.now().toString(),
      
    }
    return Object.assign(
        {},
        todo,
    )
}

const addTodoToActiveField = () =>{
    fieldArray.map(object=>{
        if(object.active === true){
            todoArray.push(todoCreator(todoTitleInput.value, object.id))
            todoDomRenderer(todoCreator(todoTitleInput.value, object.id))
            console.log(todoArray)
        }
        localStorage.setItem('todos', JSON.stringify(todoArray))
    })
}

const getTodoFromLocalStorage = () =>{
    if(JSON.parse(localStorage.getItem('todos'))){
        todoArray = JSON.parse(localStorage.getItem('todos'))
    }
}
getTodoFromLocalStorage()



   let todoContainer = document.querySelector('[data-todo-container]')
const todoDomRenderer = (object)=>{
    let todoDiv = document.createElement('div')
    todoDiv.setAttribute('class', object.id)
    todoDiv.setAttribute('id',object.uniqueId)
    let todoTitle = document.createElement('p')
    todoTitle.innerHTML = object.name
    let checkboxInput = document.createElement('input')
    checkboxInput.setAttribute('type','checkbox')
    checkboxInput.setAttribute('name','todoCheckbox')
    let removeBtnTodo = document.createElement('button')
    removeBtnTodo.setAttribute('class', object.uniqueId)
    removeBtnTodo.innerHTML = 'remove'
    
    todoDiv.appendChild(todoTitle)
    todoDiv.appendChild(checkboxInput)
    todoDiv.appendChild(removeBtnTodo)
 
    todoContainer.appendChild(todoDiv)

   // removeTodo()
}

const todoDomRendererFromLocalStorage = () =>{

             todoArray.forEach(item=>{
                    todoDomRenderer(item)

            })
 
   //removeTodo()
}

todoDomRendererFromLocalStorage()

const DefaultStart = () =>{
    fieldTodoTitle.innerHTML = 'All todos'
    for(let fields of document.querySelectorAll('#fieldContainer>*')){
        fields.classList.remove('active')
    }
  }
  DefaultStart()
  
const removeBtn = () =>{
    for(let removeBtn of document.querySelectorAll('[data-todo-container]>*>button')){
        removeBtn.onclick = (e) =>{
            let btn = e.target
            todoArray = JSON.parse(localStorage.getItem('todos'))
            todoArray.forEach(object=>{
                if(object.uniqueId === btn.getAttribute('class')){
                    todoArray.splice(todoArray.indexOf(object),1)
                    btn.parentNode.remove()
                }
            })
            localStorage.setItem('todos', JSON.stringify(todoArray))
        }
    }
}
removeBtn()

const checkTodo = () =>{
    for(let checkbox of document.querySelectorAll('[data-todo-container]>*>input[type="checkbox"]')){
        checkbox.onclick = (e) =>{
            let inputCheckbox = e.target
            if(inputCheckbox.checked){
               console.log(inputCheckbox)
               inputCheckbox.parentNode.style.cssText = `
               text-decoration: line-through;
               `
            }
        }
    }
}

checkTodo()