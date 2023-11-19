 document.addEventListener("DOMContentLoaded", ()=>{
    let formcomponent = document.forms.main
    formcomponent.addEventListener("submit", async (e)=>{
        e.preventDefault
        let response = await fetch('', {
            method: 'POST',
            body: new FormData(formcomponent)
          });
        let result = await response.json();
        alert(result.message);
        
    })


    
   
    
  
   


 })
