import './style.css';
import { fieldDisplayer } from './fieldDisplayer';
import { fieldClassListToggler } from './fieldClassListToggler';

(function(){
    const addFielBtn = document.getElementById('addField')
    addFielBtn.addEventListener('click',()=>{
        const fieldObj = fieldDisplayer()
        fieldObj.displayField()
    })


    
    
})();


