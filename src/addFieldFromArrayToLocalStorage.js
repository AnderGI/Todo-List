export const addFieldFromArrayToLocalStorage = (array) =>{
     array.forEach(object=>{
        localStorage.setItem(JSON.stringify(object.id), JSON.stringify(object.id))
     })
}