// Put your JS here
/*
 * Don't forget to comment code
*/
// je commence par faire mes variable
const PopUp = document.getElementById('modalToggler');
const ContenuModal = document.getElementById('modal');
const ChangeColor = document.getElementById('NouvelleCouleur');
const CroixModal = document.getElementById('close');
//function
document.getElementById('modalToggler').addEventListener("click", function () {
    ContenuModal.style.display = "block";
    ChangeColor.style.display = "block";
})

document.getElementById('close').addEventListener('click', function () {
    ContenuModal.style.display = "none";
    ChangeColor.style.display = "none";
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