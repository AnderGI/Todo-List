
export const todoCreator = ()=>{
const title = document.getElementById('title') //INPUT TEXT 
const dueDate = document.getElementById('dueDate')
const description = document.getElementById('description')
return{
    setTitle: ()=>{
            return title.value
    },
    setDate: ()=>{
        return dueDate.value
    },
    setDescription: ()=>{
        return description.value
    }
}

}
