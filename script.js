
var navigateToPaymentPage = document.querySelectorAll(".btn");

navigateToPaymentPage.forEach(function(button) {
    button.addEventListener('click', function() {
        window.location.href = "payment.html";
    });
});


var images = document.querySelectorAll(".image");

images.forEach(function(image){
    image.addEventListener("mouseover", function(){
        this.style.height = "90vh";
    });
    image.addEventListener("mouseout", function(){
        this.style.height = "80vh";
    
    });
});
