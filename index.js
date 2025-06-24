
// contact form functions 

function validateForm(event) {
    event.preventDefault(); 
    const name = document.getElementById("name");
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const comments = document.getElementById("comments");
    let errorsDiv = document.getElementById('errorsDiv'); 
    let thankYouDiv = document.getElementById('thankYouDiv');
    let validated = true; 

}