// Put your JS here
/*
 * Don't forget to comment code
*/
// je commence par faire mes variable
//id: modalToggler; close; modal

const ContenuModal = document.getElementById('modal');
const changeColor = document.createElement('div');
changeColor.setAttribute('id','overlay');
const btn = document.getElementById('modalToggler');
const ferme = document.getElementById('close');
//function
btn.addEventListener("click", function () {
    ContenuModal.style.display = "block";
    document.body.appendChild(changeColor);
})
ferme.addEventListener('click', function () {
    ContenuModal.style.display = "none";
    document.body.removeChild(changeColor);

})
changeColor.addEventListener('click', function(){
    ContenuModal.style.display = "none";
    document.body.removeChild(changeColor);
})









// Set, in a variable, the button that controls the display of the modal box  (#modal-toggler)

// Set, in a variable, the modal box (#modal).

// Set, in a variable, the button that closes the modal box (#modal-toggler)

// Create a new div element
// Set the id for this new div element
// Create a function named addOverlay which inserts a div, colored and lightly translucent in the page (#overlay).

// Hook a lambda function to the click event on the button #modal-toggler.
// Set a condition to the insertion of the colored div (#overlay), then show the modal box.

// Hook a lambda function to the click event on the closing button #ferme.