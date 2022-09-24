import { fieldCreator } from "./fieldCreator";

 export const fieldIndoAdder = () =>{
    const fieldTitleInput = document.getElementById('fieldTitle')
    
    const addFieldPopUpBtn = document.getElementById('addFieldDialogBtn') //repetition should not happen
    let fieldObject = fieldCreator({ title: fieldTitleInput.value })
    addFieldPopUpBtn.addEventListener('click',()=>{
         fieldObject = fieldCreator({ title: fieldTitleInput.value })
    })
   
    return{
        infoAddedToField: () => fieldObject.createTodo(),
    }
}