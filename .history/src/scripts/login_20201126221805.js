window.addEventListener('load', () =>{
//    init action to load page 

if(sessionStorage.getItem('token')){
    console.log('connecté')
}else {
    console.log('non connecté')

}
});


function login() {
    document.getElementById('error-login').style.display = 'none';

        
        $.ajax({
               type: "POST",
               url: 'http://localhost:3000/users/login',
               data: $('#form-login').serialize(), // serializes the form's elements.
               success: (data) =>
               {
                //    set token in session storage
                   sessionStorage.setItem('token', data.token);
               },
               error: () =>
               {    
                   document.getElementById('error-login').style.display = 'block';
                }
            });
            
        resetForm();
        
}
function resetForm() {
    document.getElementById("form-login").reset();
}