 
 export const log = ()=>{
    const dialog = document.getElementById('popUp')
    let title = document.getElementById('title')
    let dueDate = document.getElementById('dueDate')
    let description = document.getElementById('description')
    return {
        logOut: ()=> popUp.showModal(),
        setInputValuesToDefault: ()=>{
            title.value = ""
            dueDate.value = ""
            description.value = ""
        }
    }
}