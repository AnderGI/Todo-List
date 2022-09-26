export const toggleFieldClasses= ()=>{
  
    const fieldContainer = document.querySelectorAll('#fieldContainer>*')
    for(let field of fieldContainer){
        field.onclick = function (){
        for(let field of fieldContainer){
            field.classList.remove('active')
        }
        this.classList.add('active')
        }
    }
   
}