$(document).ready(function(){
    $("form#input").submit(function(event){
        event.preventDefault()
        let name  =  $('input#name').val()
        let email = $('input#email').val()
        let message = $("textarea#message").val()
        // alert(message)
    
        alert(name + ' We have received your message ,thank you for reaching out')
        
        

    })
})