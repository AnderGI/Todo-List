export const toggleFieldClasses= ()=>{
  
    const fieldContainer = document.querySelectorAll('#fieldContainer>*')
    for(let field of fieldContainer){
        field.onclick = function (){
        for(let field of fieldContainer){
            field.classList.remove('active')
        }
        this.classList.add('active')
        let title = this.getElementsByTagName('h1')
        console.log(title.item(0).innerText)
        }
    }
   
}