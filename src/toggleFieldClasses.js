//import { setLocalStorage } from "./setLocalStorage"
export const toggleFieldClasses= ()=>{
  
    const fieldContainer = document.querySelectorAll('#fieldContainer>*')
    const todoSection = document.querySelectorAll('#todoSection>*')
    for(let field of fieldContainer){
        field.onclick = function (){
        for(let field of fieldContainer){
            field.classList.remove('active')
        }
        this.classList.add('active')
        const todoSection = document.querySelectorAll('#todoSection>*')
   
      
        
        }
    }
   
}