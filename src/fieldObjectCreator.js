export const fieldObject = (name)=>{
    let field ={
        name: name,
        active: false,
        id: Date.now().toString(),
    }
    return Object.assign(
        {},
        field,
    )
}