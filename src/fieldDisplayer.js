import { fieldIndoAdder } from "./fieldInfoAdder"
export const fieldDisplayer = () => {
    const fieldContainer = document.getElementById('fieldContainer')
    const fieldItem = fieldIndoAdder()
    return{
        displayField: ()=>fieldContainer.appendChild(fieldItem.infoAddedToField()),
    }
    
    
}