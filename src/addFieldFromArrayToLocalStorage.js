export const addFieldFromArrayToLocalStorage = (array) =>{
     let fields = JSON.stringify(array)
      localStorage.setItem('fields', fields)
     
}