import { fieldCreator } from "./fieldCreator";
 export const fieldIndoAdder = () =>{
    const fieldObject = fieldCreator({ title: "Objeto Field" })
    return{
        infoAddedToField: () => fieldObject.createTodo(),
    }
}