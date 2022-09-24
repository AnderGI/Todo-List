import './style.css';
import { fieldDisplayer } from './fieldDisplayer';


(function(){
    const addFielBtn = document.getElementById('addField')
    const fieldPopUp = document.getElementById('fieldPopUp')
    const addFieldPopUpBtn = document.getElementById('addFieldDialogBtn')
    addFielBtn.addEventListener('click',()=>{
     //   const fieldObj = fieldDisplayer()
       // fieldObj.displayField()
       fieldPopUp.showModal()
    })
    addFieldPopUpBtn.addEventListener('click', ()=>{
        fieldPopUp.close()
        const fieldObj = fieldDisplayer()
       fieldObj.displayField()
    })





    
    
})();


