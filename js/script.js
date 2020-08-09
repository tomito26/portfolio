$(document).ready(function(){
    $("form#input").submit(function(event){
        event.preventDefault()
        let name  =  $('input#name').val()
        let email = $('input#email').val()
        let message = $("textarea#message").val()
      
        alert('Hello, ' + name + ' ,we have received your message, thank you for reaching out')
      
        
        
        

    })
})
// alert('')