export function addMarkerToTodoNode(array, todoObj){
    return  todoObj.setAttribute('id', array.indexOf(todoObj))
}