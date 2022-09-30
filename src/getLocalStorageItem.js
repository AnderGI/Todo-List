export const getLocalStorageItem = (array) =>{
  let fields = localStorage.getItem('fields')
  array = JSON.parse(fields)
  if(!array){
    array = []
  }else{
    return array
  }
}