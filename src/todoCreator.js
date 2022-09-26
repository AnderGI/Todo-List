export const todoCreator = (titleValue) =>{
   let todo = {
    title: titleValue,
   }
   return Object.assign(
    { title:todo.title }
   )
}