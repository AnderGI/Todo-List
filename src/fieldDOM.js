export const fieldDOMRenderer = ()=>{
    const fieldContainer = document.getElementById('fieldContainer')
    let array = JSON.parse(localStorage.getItem('fields'))
   
    
    if(localStorage.getItem('fields') !== null){
        
            let div = document.createElement('div')
            div.setAttribute('class', 'fieldElement')
            div.setAttribute('id', array[array.length-1].id)
        
            let title = document.createElement('h1')
            title.innerHTML = array[array.length-1].name
        
            div.appendChild(title)
        
            fieldContainer.appendChild(div)
            
    }
    


}

