export const localStorageGetter = ()=>{
    let element = Object.keys(localStorage)
    element.forEach(item=>{
        console.log(JSON.parse(localStorage.getItem(item)))
    })
   
}   