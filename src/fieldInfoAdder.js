import { fieldObject } from "./fieldObjectCreator";
export const fieldIndoAdder = ()=>{
    const fieldTitleInput = document.getElementById('fieldTitle')
    return fieldObject(fieldTitleInput.value)
}