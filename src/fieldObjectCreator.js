export const fieldObjectCreator = (titleValue)=>{
    let field = {
        title: titleValue,
    }
    return Object.assign(
        { title: field.title },
    )
    
}