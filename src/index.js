import { indexOf, join, remove, set, uniqueId } from 'lodash';
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
let todoContainer = document.querySelector('[data-todo-container]')
let fieldArray = []
let todoArray = [] 

addFieldPopUpBtn.addEventListener('click', ()=>{

    /**
     * when clicked on the add field btn it should create a field object, add it to array, render it to the dom, save it on lacal storage
     * and retreive taht array everytime to change new features
     
    addToArray(fieldCreator(fieldTitleInput.value))
    DOMrenderer(fieldCreator(fieldTitleInput.value))
    setFiedlToLocaleStorage()
    getField()
    fieldTitleInput.value = ""*/
  
    if(JSON.parse(localStorage.getItem('fields'))){
        fieldArray = JSON.parse(localStorage.getItem('fields'))
        fieldArray.push(fieldCreator(fieldTitleInput.value))
        DOMrenderer(fieldCreator(fieldTitleInput.value))
        console.log(fieldArray)
        localStorage.setItem('fields', JSON.stringify(fieldArray))
        //addActiveTOFieldObject()
        //removeFieldBtn()
    }else{
        fieldArray = []
        fieldArray.push(fieldCreator(fieldTitleInput.value))
        console.log(fieldArray)
        DOMrenderer(fieldCreator(fieldTitleInput.value))
        localStorage.setItem('fields', JSON.stringify(fieldArray))
        //addActiveTOFieldObject()
        //removeFieldBtn()
    }
        addActiveTOFieldObject()
        removeFieldBtn()
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


const toggleActiveProperty = ()=>{ //si consiguo que los todos se vean con el que tiene la clase active no me hara falta
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
            todoSection.style.cssText = `
            display: grid;
            grid-template-rows: 0.5fr 0.5fr 4fr;
            padding: 0.5em;
            `
            addTodoLabel.style.cssText = `
            display: default;
            `
            for(let field of document.querySelectorAll('#fieldContainer>*')){
                field.classList.remove('active')
            }
        
            this.classList.add('active')
      

            //giveFieldTodoTitleAValue()
            //changeTodoDisplay(this)  //all the todos related with the field will be only visible (display default)
        }
       // if(field.classList.contains('active')){
            //changeTodoDisplay(field)
        //}
    }
    
}

const removeFieldBtn = () =>{
    // get the array to change it
    for(let removeBtn of document.querySelectorAll('#fieldContainer>div>button')){
        removeBtn.onclick = () =>{
                fieldArray = JSON.parse(localStorage.getItem('fields'))
                fieldArray.forEach(field => {
                    if(field.id === removeBtn.parentNode.getAttribute('id')){
                        fieldArray.splice(fieldArray.indexOf(field), 1)
                        //everytime a field is remove the text content of the field todoTitle
                        //where you see the title of the active field, should be empty
                        removeBtn.parentNode.remove()
                        if(JSON.parse(localStorage.getItem('todos'))){
                            todoArray = JSON.parse(localStorage.getItem('todos'))
                            todoArray.forEach(todo=>{
                                if(todo.id === field.id){
                                    todoArray.splice(todoArray.indexOf(todo),1)
                                    document.getElementById(todo.uniqueId).remove()
                                }
                            })
                            localStorage.setItem('todos', JSON.stringify(todoArray))                            
                        }
                        fieldTodoTitle.textContent = "Field deleted. Please, select another field to add new todos."
                    }
    
                })
               
                localStorage.setItem('fields', JSON.stringify(fieldArray))
        }
    }
}

const addActiveTOFieldObject = () =>{
    if(JSON.parse(localStorage.getItem('fields'))){
        for(let field of document.querySelectorAll('#fieldContainer>*')){
            field.onclick = function(){
                todoSection.style.cssText = `
                display: grid;
                grid-template-rows: 0.5fr 0.5fr 4fr;
                padding: 0.5em;
                `
                addTodoLabel.style.cssText = `
                display: flex;
                `
                fieldArray = JSON.parse(localStorage.getItem('fields'))
                    for(let field of document.querySelectorAll('#fieldContainer>*')){
                        field.classList.remove('active')
                    }
                    fieldArray.forEach(object =>{
                        if(this.getAttribute('id') === object.id){
                            object.active = true
                            console.log(object)
                            this.classList.add('active')
                            fieldTodoTitle.textContent = object.name
                        }else{
                            object.active = false
                        }
                    })                        
                localStorage.setItem('fields', JSON.stringify(fieldArray))

                if(JSON.parse(localStorage.getItem('todos'))){
                    todoArray = JSON.parse(localStorage.getItem('todos'))
                    todoArray.forEach(todo=>{
                        if(this.classList.contains('active') && this.getAttribute('id') === todo.id){
                            todo.active = true
                        }else{
                            todo.active = false
                        }
                    })
                    localStorage.setItem('todos', JSON.stringify(todoArray))
                }
                if(document.querySelectorAll('[data-todo-container]>*')){
                    document.querySelectorAll('[data-todo-container]>*').forEach(div =>{
                        if(div.getAttribute('class') === this.getAttribute('id')){
                            div.classList.add('active')
                        }else{
                            div.classList.remove('active')
                        }
                    })
                }
            }
        }
    }else{
        for(let field of document.querySelectorAll('#fieldContainer>*')){
            field.onclick = function(){
                todoSection.style.cssText = `
                display: grid;
                grid-template-rows: 0.5fr 0.5fr 4fr;
                padding: 0.5em;
                `
                addTodoLabel.style.cssText = `
                display: flex;
                `
                for(let field of document.querySelectorAll('#fieldContainer>*')){
                    field.classList.remove('active')
                }
                fieldArray.forEach(object =>{
                    if(this.getAttribute('id') === object.id){
                        object.active = true
                        console.log(object)
                        this.classList.add('active')
                        fieldTodoTitle.textContent = object.name
                    }else{
                        object.active = false
                    }
                })

                if(JSON.parse(localStorage.getItem('todos'))){
                    todoArray = JSON.parse(localStorage.getItem('todos'))
                    todoArray.forEach(todo=>{
                        if(this.classList.contains('active') && this.getAttribute('id') === todo.id){
                            todo.active = true
                        }else{
                            todo.active = false
                        }
                    })
                    localStorage.setItem('todos', JSON.stringify(todoArray))
                }
            }
        }
    }

}


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
    //toggleActiveProperty()
    //toggleActiveProperty()
    //removeFieldBtn()
    removeFieldBtn()
    addActiveTOFieldObject()
}


const DOMrendererFromArray = () =>{
    if(JSON.parse(localStorage.getItem('fields'))){
        fieldArray = JSON.parse(localStorage.getItem('fields'))
        fieldArray.forEach(element=>{
            DOMrenderer(element)
            if(element.active === true){
                document.getElementById(element.id).classList.add('active')
                todoSection.style.cssText = `
                display: grid;
                grid-template-rows: 0.5fr 0.5fr 4fr;
                padding: 0.5em;
                `
                addTodoLabel.style.cssText = `
                display: flex;
                `
                fieldTodoTitle.textContent = element.name
            }
            
        })
        //toggleActiveProperty()
        //giveActiveStatusReload()
        //giveFieldTodoTitleAValue()
        //removeFieldBtn()
        //toggleActiveProperty()
        localStorage.setItem('fields', JSON.stringify(fieldArray))
        //toggleActiveProperty()
        removeFieldBtn()
        addActiveTOFieldObject()
    }
}
DOMrendererFromArray()


addTodoPopUpBtn.addEventListener('click', ()=>{
    
    //addTodoToActiveField()
    //todoTitleInput.value = ""
    if(JSON.parse(localStorage.getItem('todos'))){
        todoArray = JSON.parse(localStorage.getItem('todos'))
        addTodoToActiveField()
        console.log(todoArray)
        localStorage.setItem('todos', JSON.stringify(todoArray))
        todoDomRenderer()
        removeBtn()
    }else{
        todoArray = []
        addTodoToActiveField()
        console.log(todoArray)
        localStorage.setItem('todos', JSON.stringify(todoArray))
        todoDomRenderer()
        removeBtn()
    }
    checkTodo()
    todoTitleInput.value = ""
   
})

const todoCreator = (name,id,active)=>{
    let todo ={
        name: name,
        id: id,
        active: active,
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
    /**
     * get the field array and todos array from local storage and add true to checked property to todos
     * then retrive both todos and fields arrays to localStorage
     */
        fieldArray = JSON.parse(localStorage.getItem('fields'))
       
        fieldArray.forEach(object=>{
            if(object.active === true){
                if(JSON.parse(localStorage.getItem('todos'))){
                    todoArray = JSON.parse(localStorage.getItem('todos'))
                    todoArray.push(todoCreator(todoTitleInput.value, object.id, object.active))
                    localStorage.setItem('todos', JSON.stringify(todoArray))
                }else{
                    todoArray.push(todoCreator(todoTitleInput.value, object.id, object.active))
                    console.log(todoArray)
                }

                    //todoDomRenderer(todoCreator(todoTitleInput.value, object.id))
                
                
            }
        })
       
        localStorage.setItem('fields', JSON.stringify(fieldArray))
}

/**
 * Create the todo object once the add todo btn is selected and keep the rendering every time there is 
 * a reload
 */
const setInfoToTodo = (array) =>{
    let todoDiv = document.createElement('div')
    todoDiv.setAttribute('class', array[array.length - 1].id)
    todoDiv.setAttribute('id',array[array.length - 1].uniqueId)
    todoDiv.setAttribute('data-checked', array[array.length - 1].checked)

    let todoTitle = document.createElement('p')
    todoTitle.innerHTML = array[array.length - 1].name
 
    let checkboxInput = document.createElement('input')
    checkboxInput.setAttribute('type','checkbox')
    checkboxInput.setAttribute('name','todoCheckbox')
 
    let addInfoBtn = document.createElement('button')
    addInfoBtn.innerHTML = 'add info'
    addInfoBtn.setAttribute('class','addTodoInfoBtn')
 /*addInfoBtn.onclick = () =>{
     todoDialog.showModal()
     todoDialogBtn.onclick = () =>{
         todoArray = JSON.parse(localStorage.getItem('todos'))
         todoArray.forEach(object =>{
             if(object.uniqueId === addInfoBtn.parentNode.getAttribute('id')){
                 object.priority = todoPriority.value
                 object.description = todoDescription.value
                 object["current date"] = new Date()
                 object["submission date"] = todoDate.value
             }
         localStorage.setItem('todos', JSON.stringify(todoArray))
         })
     }
       
 }*/


    let showInfoBtn = document.createElement('button')
    showInfoBtn.innerHTML = 'show info'
    showInfoBtn.setAttribute('class','showTodoInfoBtn')
 /*showInfoBtn.onclick = () =>{
     addTodoInfoDialog.showModal()
     todoArray = JSON.parse(localStorage.getItem('todos'))
     todoArray.forEach(object => {
         if(object.uniqueId === showInfoBtn.parentNode.getAttribute('id')){
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

     localStorage.setItem('todos', JSON.stringify(todoArray))
 }*/

    let removeBtnTodo = document.createElement('button')
    removeBtnTodo.setAttribute('class', array[array.length - 1].uniqueId)
    removeBtnTodo.innerHTML = 'remove'
 
    todoDiv.appendChild(todoTitle)
    todoDiv.appendChild(checkboxInput)
    todoDiv.appendChild(showInfoBtn)
    todoDiv.appendChild(addInfoBtn)
    todoDiv.appendChild(removeBtnTodo)

    todoContainer.appendChild(todoDiv)
    if(array[array.length - 1].active === true){
        todoDiv.classList.add('active')
    }else{
        todoDiv.classList.remove('active')
    }
}

const todoItemRenderer = (obj) =>{
    let todoDiv = document.createElement('div')
    todoDiv.setAttribute('class', obj.id)
    todoDiv.setAttribute('id',obj.uniqueId)
    todoDiv.setAttribute('data-checked', obj.checked)

    let todoTitle = document.createElement('p')
    todoTitle.innerHTML = obj.name
 
    let checkboxInput = document.createElement('input')
    checkboxInput.setAttribute('type','checkbox')
    checkboxInput.setAttribute('name','todoCheckbox')
 
    let addInfoBtn = document.createElement('button')
    addInfoBtn.innerHTML = 'add info'
    addInfoBtn.setAttribute('class','addTodoInfoBtn')
 /*addInfoBtn.onclick = () =>{
     todoDialog.showModal()
     todoDialogBtn.onclick = () =>{
         todoArray = JSON.parse(localStorage.getItem('todos'))
         todoArray.forEach(object =>{
             if(object.uniqueId === addInfoBtn.parentNode.getAttribute('id')){
                 object.priority = todoPriority.value
                 object.description = todoDescription.value
                 object["current date"] = new Date()
                 object["submission date"] = todoDate.value
             }
         localStorage.setItem('todos', JSON.stringify(todoArray))
         })
     }
       
 }*/


    let showInfoBtn = document.createElement('button')
    showInfoBtn.innerHTML = 'show info'
    showInfoBtn.setAttribute('class','showTodoInfoBtn')
 /*showInfoBtn.onclick = () =>{
     addTodoInfoDialog.showModal()
     todoArray = JSON.parse(localStorage.getItem('todos'))
     todoArray.forEach(object => {
         if(object.uniqueId === showInfoBtn.parentNode.getAttribute('id')){
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

     localStorage.setItem('todos', JSON.stringify(todoArray))
 }*/

    let removeBtnTodo = document.createElement('button')
    removeBtnTodo.setAttribute('class', obj.uniqueId)
    removeBtnTodo.innerHTML = 'remove'
 
    todoDiv.appendChild(todoTitle)
    todoDiv.appendChild(checkboxInput)
    todoDiv.appendChild(showInfoBtn)
    todoDiv.appendChild(addInfoBtn)
    todoDiv.appendChild(removeBtnTodo)

    todoContainer.appendChild(todoDiv)
    if(obj.active === true){
        todoDiv.classList.add('active')
    }else{
        todoDiv.classList.remove('active')
    }
}

const todoDomRenderer = ()=>{
 //let todoDiv = document.createElement('div')
    if(JSON.parse(localStorage.getItem('todos'))){
        todoArray = JSON.parse(localStorage.getItem('todos'))
        setInfoToTodo(todoArray)
        localStorage.setItem('todos', JSON.stringify(todoArray))
    }else{
        setInfoToTodo(todoArray)
    }
  
}


const todoDomRendererFromLocalStorage = () =>{
 if(JSON.parse(localStorage.getItem('todos'))){
    todoArray = JSON.parse(localStorage.getItem('todos'))
    todoArray.forEach(object =>{
        todoItemRenderer(object)
    })
    localStorage.setItem('todos', JSON.stringify(todoArray))
 }
         
}
todoDomRendererFromLocalStorage()



/*
const addActiveClassToField = () =>{
    if(JSON.parse(localStorage.getItem('fields'))){
        fieldArray = JSON.parse(localStorage.getItem('fields'))
        fieldArray.forEach(object =>{
            for(let field of document.querySelectorAll('#fieldContainer>*')){
                if(object.active = true && object.id === field.getAttribute('id')){
                    field.classList.add('active')
                }else{
                    field.classList.remove('active')
                }
            }
        })
        localStorage.setItem('fields', JSON.stringify(fieldArray))
    }
}
addActiveClassToField()*/

/*
const addToArray = (obj) => {
    fieldArray.push(obj)
    localStorage.setItem('fields', JSON.stringify(fieldArray))
}

const setFiedlToLocaleStorage = ()=>{
    let field = JSON.stringify(fieldArray)
    localStorage.setItem('fields', field)
}*/

/*
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
}*/

//const changeTodoDisplay = (field) =>{
    /**
     * this function will add default or none display depending if the field has an active classlist
     * ,a.k.a, is active
     *//*
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
            
        }*/


//Toggle active property from false to treu every time an div with it's object (connected by id) is clicked
/*
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
            /*
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

            //giveFieldTodoTitleAValue()
            //changeTodoDisplay(this)  //all the todos related with the field will be only visible (display default)
        }
        if(field.classList.contains('active')){
            //changeTodoDisplay(field)
        }
    }
    localStorage.setItem('fields', JSON.stringify(fieldArray))
}
*/

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
        //toggleActiveProperty()
        //giveActiveStatusReload()
        //giveFieldTodoTitleAValue() 
    }
    
}

//getField()
/*
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
    
}*/
//removeFieldBtn()


/**
 * these two functions should render it everytime a field is added and everytime there is a
 * reload
 */
/*
const DOMrendererFromArray = (array) =>{
    if(JSON.parse(localStorage.getItem('fields'))){
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
        })*/
        //toggleActiveProperty()
        //giveActiveStatusReload()
        //giveFieldTodoTitleAValue()
        //removeFieldBtn()
    //}
//}
//DOMrendererFromArray(fieldArray)

/*
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

    fieldContainer.appendChild(div)*/
    //toggleActiveProperty()
    //removeFieldBtn()
//}

/*
addTodoPopUpBtn.addEventListener('click', ()=>{
    
    //addTodoToActiveField()
    todoTitleInput.value = ""
   
})*/


//const addTodoToActiveField = () =>{
    /**
     * get the field array and todos array from local storage and add true to checked property to todos
     * then retrive both todos and fields arrays to localStorage
     */
   /* fieldArray = JSON.parse(localStorage.getItem('fields'))
    todoArray = JSON.parse(localStorage.getItem('todos')) || []
    fieldArray.forEach(object=>{
        if(object.active === true){
            
                todoArray.push(todoCreator(todoTitleInput.value, object.id))
                console.log(todoArray)
                //todoDomRenderer(todoCreator(todoTitleInput.value, object.id))
            
            
        }
        localStorage.setItem('todos', JSON.stringify(todoArray))
    })
    localStorage.setItem('fields', JSON.stringify(fieldArray))
}*/
/*
const getTodoFromLocalStorage = () =>{
    if(JSON.parse(localStorage.getItem('todos'))){
        todoArray = JSON.parse(localStorage.getItem('todos'))
    }
}
//getTodoFromLocalStorage()
*/


   //let todoContainer = document.querySelector('[data-todo-container]')
   /**
    * Create the todo object once the add todo btn is selected and keep the rendering every time there is 
    * a reload
    */
/*const todoDomRenderer = (object)=>{
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
    addInfoBtn.onclick = () =>{
        todoDialog.showModal()
        todoDialogBtn.onclick = () =>{
            todoArray = JSON.parse(localStorage.getItem('todos'))
            todoArray.forEach(object =>{
                if(object.uniqueId === addInfoBtn.parentNode.getAttribute('id')){
                    object.priority = todoPriority.value
                    object.description = todoDescription.value
                    object["current date"] = new Date()
                    object["submission date"] = todoDate.value
                }
            localStorage.setItem('todos', JSON.stringify(todoArray))
            })
        }
          
    }


    let showInfoBtn = document.createElement('button')
    showInfoBtn.innerHTML = 'show info'
    showInfoBtn.setAttribute('class','showTodoInfoBtn')
    showInfoBtn.onclick = () =>{
        addTodoInfoDialog.showModal()
        todoArray = JSON.parse(localStorage.getItem('todos'))
        todoArray.forEach(object => {
            if(object.uniqueId === showInfoBtn.parentNode.getAttribute('id')){
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
   
        localStorage.setItem('todos', JSON.stringify(todoArray))
    }

    let removeBtnTodo = document.createElement('button')
    removeBtnTodo.setAttribute('class', object.uniqueId)
    removeBtnTodo.innerHTML = 'remove'
    
    todoDiv.appendChild(todoTitle)
    todoDiv.appendChild(checkboxInput)
    todoDiv.appendChild(showInfoBtn)
    todoDiv.appendChild(addInfoBtn)
    todoDiv.appendChild(removeBtnTodo)
 
    todoContainer.appendChild(todoDiv)

    
}

const todoDomRendererFromLocalStorage = () =>{
    if(JSON.parse(localStorage.getItem('todos'))){
        todoArray.forEach(item=>{
            todoDomRenderer(item)

    })
    }
            
}*/

//todoDomRendererFromLocalStorage()

const DefaultStart = () =>{
    /**
     * when there is no field select (with active class) all todos will be seen with the all todos title
     */
    fieldTodoTitle.innerHTML = 'All todos'
    for(let fields of document.querySelectorAll('#fieldContainer>*')){
        fields.classList.remove('active')
    }
  }
  //DefaultStart()

//Delete
const removeBtn = () =>{
    for(let removeBtn of document.querySelectorAll('[data-todo-container]>*>button')){
        /**
         * select every remove btn. Onec one is clicked the todo will be removed (splice with no other element removed) from the
         * array and the dom
         */
        removeBtn.onclick = () =>{
            todoArray = JSON.parse(localStorage.getItem('todos'))
            todoArray.forEach(object=>{
                if(object.uniqueId === removeBtn.getAttribute('class')){
                    todoArray.splice(todoArray.indexOf(object),1)
                    removeBtn.parentNode.remove()
                }
            })
            localStorage.setItem('todos', JSON.stringify(todoArray))
        }
    }
}
removeBtn()

const checkTodo = () =>{
    /**
     * add a data-checked attribute to every todo and a true or false checked property depending on if the id of the todo dom element
     * is the same as the uniqueId of the object
     */
    for(let checkbox of document.querySelectorAll('[data-todo-container]>*>input[type="checkbox"]')){
        checkbox.onclick = () =>{
            todoArray = JSON.parse(localStorage.getItem('todos'))
            todoArray.forEach(object=>{
                if(checkbox.checked){
                    if(checkbox.parentNode.getAttribute('id') === object.uniqueId){
                        object.checked = true
                        checkbox.parentNode.setAttribute('data-checked', true)
                    }
                 }else{
                    if(checkbox.parentNode.getAttribute('id') === object.uniqueId){
                        object.checked = false
                        checkbox.parentNode.removeAttribute('data-checked')
                        checkbox.parentNode.setAttribute('data-checked', false)
                    }
                 }
            })
            localStorage.setItem('todos', JSON.stringify(todoArray))
        }
    }
}

checkTodo()

const maintainCheckProperty = () =>{
   /**
    * this will keep the check property on the input type checkbox
    */
    for(let todo of document.querySelectorAll('[data-todo-container]>*')){
        if(todo.getAttribute('data-checked') === "true"){
            todo.querySelector('input').checked = true
        }else{
            todo.querySelector('input').checked = false
        }
    }
}

//maintainCheckProperty()

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
    /*todoDialogBtn.onclick = () =>{
        todoDialog.close()
        //passPriorityValueFromDialogToTodo(el)
    }*/
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
        /**
         * get each btn that sghows the info from all the nodelist of showtodoinfobtn 
         * everytime is clicked it will show the info every todo has. if it doesnt "no [x] has been added" will appear
         */
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

//showTodoInfoDialog()

const todoInfoDialogCloser = (el) =>{

    closeTodoInfoDialog.onclick = () =>{
        addTodoInfoDialog.close()  
        
    } 
}
//todoInfoDialogCloser()

const renderColorToTodoDependignOnPriority = () =>{
    /**
     * this will change the color of every todo DOM element depending on it priority (the priority the user selected)
     * if there is no priority it will have a snow color
     */
    if(JSON.parse(localStorage.getItem('todos'))){
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

}
//renderColorToTodoDependignOnPriority()





