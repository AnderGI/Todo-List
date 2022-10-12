import { indexOf, remove, set, uniqueId } from 'lodash';
import { format, formatDistance, subDays } from 'date-fns'

import './style.css';
const addFieldPopUpBtn = document.getElementById('addFieldDialogBtn')
const fieldTitleInput = document.getElementById('fieldTitle') 
const fieldTodoTitle = document.querySelector('[data-field-title]')
const fieldContainer = document.getElementById('fieldContainer')
const todoDialog = document.getElementById('todoDialog')
const todoDialogBtn = document.getElementById('todoDialogBtn')
const todoPriority = document.getElementById('todoPriority')
const todoDescription = document.getElementById('todoDescription')
const addTodoInfoDialog = document.getElementById('showTodoInfo')
const closeTodoInfoDialog = document.querySelector('button[data-closeInfoDialog]')

const addTodoPopUpBtn = document.getElementById('addTodoDialogBtn')
const todoTitleInput = document.getElementById('todoTitle')
const addTodoLabel = document.getElementById('addTodoLabel')
const todoSection = document.getElementById('todoSection')
const todoDate = document.getElementById('todoDate')
let fieldArray = []
let todoArray = [] 

addFieldPopUpBtn.addEventListener('click', ()=>{
    /**
     * when clicked on the add field btn it should create a field object, add it to array, render it to the dom, save it on lacal storage
     * and retreive taht array everytime to change new features
     */
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
    localStorage.setItem('fields', JSON.stringify(fieldArray))
}

const setFiedlToLocaleStorage = ()=>{
    let field = JSON.stringify(fieldArray)
    localStorage.setItem('fields', field)
}


const giveFieldTodoTitleAValue = () =>{
    //Once a div is active the name of the object (field) associated to it
    //should appear in the field title text
    for(let field of document.querySelectorAll('#fieldContainer>*')){
        fieldArray.some(object=>{
            if(field.classList.contains('active') && field.getAttribute('id') === object.id){
                fieldTodoTitle.innerHTML = object.name
            }
        })
    }
}

const changeTodoDisplay = (field) =>{
    /**
     * this function will add default or none display depending if the field has an active classlist
     * ,a.k.a, is active
     */
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
    fieldArray = JSON.parse(localStorage.getItem('fields')) || []
    //if no field has active class it should not be able to add fields
    addTodoLabel.style.cssText = `
    display: none;
    `
    //change the grid layout if it has no add field input
    todoSection.style.cssText = `
    display: grid;
    grid-template-rows: 0.5fr 4fr;
    padding: 0.5em;
    `
    for(let field of document.querySelectorAll('#fieldContainer>*')){
        field.onclick = function(){
            //everytime a field is clicked the layout of the todosection should change 
            // and the add todo input should be visible (display default)
            todoSection.style.cssText = `
            display: grid;
            grid-template-rows: 0.5fr 0.5fr 4fr;
            padding: 0.5em;
            `
            addTodoLabel.style.cssText = `
            display: default;
            `
            /**
             * everytime a fied is clicked active class should only be on that field. Hence, every
             * other one should have its class active remove
             */
            for(let field of document.querySelectorAll('#fieldContainer>*')){
                field.classList.remove('active')
            }
            //change the info of the todo array from localstorage
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
            changeTodoDisplay(this)  //all the todos related with the field will be only visible (display default)
        }
        if(field.classList.contains('active')){
            changeTodoDisplay(field)
        }
    }
    localStorage.setItem('fields', JSON.stringify(fieldArray))
}


const giveActiveStatusReload = ()=>{
    /**
     * this funciton will make sure everytime the page is reloaded that the active class
     * of the las element still keeps it
     */
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
        /**
         * the array will have new values everytime the user interact with either the fields or the todos
         */
        fieldArray = JSON.parse(localStorage.getItem('fields')) 
        toggleActiveProperty()
        giveActiveStatusReload()
        giveFieldTodoTitleAValue() 
    }
    
}

getField()

const removeFieldBtn = () =>{
    // get the array to change it
    fieldArray = JSON.parse(localStorage.getItem('fields'))
    for(let removeFieldBtn of document.querySelectorAll('#fieldContainer>div>button')){
        removeFieldBtn.onclick = () => {
            fieldArray.forEach(field => {
                if(field.id === removeFieldBtn.parentNode.getAttribute('id')){
                    fieldArray.splice(fieldArray.indexOf(field), 1)
                    //everytime a field is remove the text content of the field todoTitle
                    //where you see the title of the active field, should be empty
                    removeFieldBtn.parentNode.remove()
                    fieldTodoTitle.textContent = ""
                }
                todoArray = JSON.parse(localStorage.getItem('todos'))
                todoArray.forEach(todoObj=>{
                    if(todoObj.id === removeFieldBtn.getAttribute('id')){
                        todoArray.splice(todoArray.indexOf(todoObj), 1)
                        for(let todo of document.querySelectorAll('[data-todo-container]>*')){
                            if(todo.getAttribute('id') === todoObj.uniqueId){
                                todo.remove()
                            }
                        }
                    }
                })
                localStorage.setItem('todos', JSON.stringify(todoArray))
            })
        }
        localStorage.setItem('fields', JSON.stringify(fieldArray))
        //set it back with the new changes
    }
    
}
removeFieldBtn()


/**
 * these two functions should render it everytime a field is added and everytime there is a
 * reload
 */
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
        checked: false,
        priority: "none",
        description: "none",
        "current date": "none",
        "submission date": "none",
      
    }
    return Object.assign(
        {},
        todo,
    )
}

const addTodoToActiveField = () =>{
    fieldArray = JSON.parse(localStorage.getItem('fields'))
    todoArray = JSON.parse(localStorage.getItem('todos')) || []
    fieldArray.forEach(object=>{
        if(object.active === true){
            
                todoArray.push(todoCreator(todoTitleInput.value, object.id))
                console.log(todoArray)
                todoDomRenderer(todoCreator(todoTitleInput.value, object.id))
            
            
        }
        localStorage.setItem('todos', JSON.stringify(todoArray))
    })
    localStorage.setItem('fields', JSON.stringify(fieldArray))
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
    todoDiv.setAttribute('data-checked', object.checked)

    let todoTitle = document.createElement('p')
    todoTitle.innerHTML = object.name
    
    let checkboxInput = document.createElement('input')
    checkboxInput.setAttribute('type','checkbox')
    checkboxInput.setAttribute('name','todoCheckbox')
    
    let addInfoBtn = document.createElement('button')
    addInfoBtn.innerHTML = 'add info'
    addInfoBtn.setAttribute('class','addTodoInfoBtn')

    let showInfoBtn = document.createElement('button')
    showInfoBtn.innerHTML = 'show info'
    showInfoBtn.setAttribute('class','showTodoInfoBtn')

    let removeBtnTodo = document.createElement('button')
    removeBtnTodo.setAttribute('class', object.uniqueId)
    removeBtnTodo.innerHTML = 'remove'
    
    todoDiv.appendChild(todoTitle)
    todoDiv.appendChild(checkboxInput)
    todoDiv.appendChild(showInfoBtn)
    todoDiv.appendChild(addInfoBtn)
    todoDiv.appendChild(removeBtnTodo)
 
    todoContainer.appendChild(todoDiv)

   // removeTodo()
}

const todoDomRendererFromLocalStorage = () =>{
    if(JSON.parse(localStorage.getItem('todos'))){
        todoArray.forEach(item=>{
            todoDomRenderer(item)

    })
    }
            
 
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
            todoArray = JSON.parse(localStorage.getItem('todos'))
            todoArray.forEach(object=>{
                if(inputCheckbox.checked){
                    if(inputCheckbox.parentNode.getAttribute('id') === object.uniqueId){
                        object.checked = true
                        inputCheckbox.parentNode.setAttribute('data-checked', true)
                    }
                 }else{
                    if(inputCheckbox.parentNode.getAttribute('id') === object.uniqueId){
                        object.checked = false
                        inputCheckbox.parentNode.removeAttribute('data-checked')
                    }
                 }
            })
            localStorage.setItem('todos', JSON.stringify(todoArray))
        }
    }
}

checkTodo()

const maintainCheckProperty = () =>{
   
    for(let todo of document.querySelectorAll('[data-todo-container]>*')){
        if(todo.getAttribute('data-checked') === "true"){
            todo.querySelector('input').checked = true
        }else{
            todo.querySelector('input').checked = false
        }
    }
}

maintainCheckProperty()

const todoDialogShower = () =>{
    for(let addInfoBtn of document.querySelectorAll('.addTodoInfoBtn')){
        addInfoBtn.onclick = () =>{
            todoDialog.showModal()
            todoDialogCloser(addInfoBtn)
        }
    }
}
todoDialogShower()

const todoDialogCloser = (el) => {
    todoDialogBtn.onclick = () =>{
        todoDialog.close()
        passPriorityValueFromDialogToTodo(el)
    }
}


const passPriorityValueFromDialogToTodo = (element) =>{
    todoArray = JSON.parse(localStorage.getItem('todos'))
    todoArray.forEach(object=>{
        if(object.uniqueId === element.parentNode.getAttribute('id')){
            object.priority = todoPriority.value
            object.description = todoDescription.value
            object["current date"] = new Date()
            object["submission date"] = todoDate.value
        }
    })
    localStorage.setItem('todos', JSON.stringify(todoArray))
}

const showTodoInfoDialog = () =>{
    todoArray = JSON.parse(localStorage.getItem('todos'))
    for(let showTodoInfoBtn of document.querySelectorAll('.showTodoInfoBtn')){
        showTodoInfoBtn.onclick = () =>{
            addTodoInfoDialog.showModal()
            todoArray.forEach(object => {
                if(object.uniqueId === showTodoInfoBtn.parentNode.getAttribute('id')){
                    if(object.priority !== "none" && object.description !== "none" && object["submission date"] !== "none" && object["current date"] !== "None"){
                        document.querySelector('[data-todo-priority]').innerHTML = object.priority
                        document.querySelector('[data-todo-description]').innerHTML = object.description    
                        const result = formatDistance(
                            new Date(object["submission date"]),
                            new Date(object["current date"]),
                            {addSuffix: true}
                          )
                          document.querySelector('[data-todo-date]').innerHTML = result
                        
                    }else{
                        document.querySelector('[data-todo-priority]').innerHTML = "No priority has been added"
                        document.querySelector('[data-todo-description]').innerHTML = "No description has been added"
                        document.querySelector('[data-todo-date]').innerHTML = "No submission date has been added"
                    }

                }
            })
        }
    }
    localStorage.setItem('todos', JSON.stringify(todoArray))
}

showTodoInfoDialog()

const todoInfoDialogCloser = (el) =>{

    closeTodoInfoDialog.onclick = () =>{
        addTodoInfoDialog.close()  
        
    } 
}
todoInfoDialogCloser()

const renderColorToTodoDependignOnPriority = () =>{
    todoArray = JSON.parse(localStorage.getItem('todos'))
    todoArray.forEach(object =>{
        for(let todo of document.querySelectorAll('[data-todo-container]>*')){
            if(todo.getAttribute('id') === object.uniqueId){
                switch(object.priority){
                    case "It Can Wait":
                        todo.style.cssText = `
                        box-shadow: -0.25em 0.025em 0.125em 0.0625em green;
                        `
                        break;
                    case "Do Not Procastinate":
                        todo.style.cssText = `
                        box-shadow: -0.25em 0.025em 0.125em 0.0625em yellow;
                        `                       
                        break;
                    case "Hurry Up!":
                        todo.style.cssText = `
                        box-shadow: -0.25em 0.025em 0.125em 0.0625em red;
                        `
                        break;
                    default:
                        todo.style.cssText = `
                        box-shadow: -0.25em 0.025em 0.125em 0.0625em snow;
                        `
                }
            }
        }
    })
    localStorage.setItem('todos', JSON.stringify(todoArray))
}
renderColorToTodoDependignOnPriority()


    
   

  