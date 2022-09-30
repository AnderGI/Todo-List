export const addFieldFromArrayToLocalStorage = (array) =>{
     array.forEach(object=>{
        localStorage.setItem(object.id, JSON.stringify(object))
     })
}