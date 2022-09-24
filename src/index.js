import './style.css';
import { fieldDisplayer } from './fieldDisplayer';

(function(){
    const addFielBtn = document.getElementById('addField')
    const fieldPopUp = document.getElementById('fieldPopUp')
    const addFieldPopUpBtn = document.getElementById('addFieldDialogBtn')
    const fieldTitleInput = document.getElementById('fieldTitle')

    addFielBtn.addEventListener('click',()=>{
       fieldTitleInput.value=""
       fieldPopUp.showModal()
    })
    addFieldPopUpBtn.addEventListener('click', ()=>{
        fieldPopUp.close()
        const fieldObj = fieldDisplayer()
       fieldObj.displayField()
    })





    
    
})();


