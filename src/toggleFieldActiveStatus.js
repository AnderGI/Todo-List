export const toggleFieldActiveStatus = (array)=>{
    const fieldContainer = document.querySelectorAll('#fieldContainer>*')
    for(let field of fieldContainer){
        field.onclick = function(){
            for(let field of fieldContainer){
                field.classList.remove('active')
            }
           array.forEach(object =>{ 
            object.active = false
            if(object.id === this.getAttribute('id')){
                this.classList.add('active')
                object.active = true
            }
        })
        console.log(array)
        }
    }
   
}