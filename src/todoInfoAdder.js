import { todoCreator } from "./todoCreator";
export const todoInfoAdder = ()=>{
    const addTodoPopUpBtn = document.getElementById('addTodoDialogBtn')
    const todoTitleInput = document.getElementById('todoTitle')
    let todoWithInfoEl = todoCreator({ title: todoTitleInput.value })
    addTodoPopUpBtn.addEventListener('click', ()=>{
        todoWithInfoEl = todoCreator({ title: todoTitleInput.value })
    })
    return{
        infoAddedToTodo: ()=> todoWithInfoEl.todoCreated(),
    }
}