/* ================================================
   order.js — Order page JavaScript
   Chap's OnFood | LCU Cafeteria Pre-Order System
   ================================================ */


/* ------------------------------------------------
   FUNCTION 4: validateOrder
   Called by onclick on the Submit button.
   Reads all required form fields and checks
   that none are empty. Shows an error message
   if any field is missing, or calls
   showConfirmation() if everything is filled.
   Uses: getElementById(), .value, .innerHTML,
         .style, if/else (multiple elements)
------------------------------------------------ */
function validateOrder() {
  /* Read all required field values */
  var name     = document.getElementById("full-name").value;
  var id       = document.getElementById("student-id").value;
  var email    = document.getElementById("email").value;
  var pickup   = document.getElementById("pickup-time").value;
  var payment  = document.getElementById("payment").value;

  /* Get the result box */
  var resultBox = document.getElementById("order-result");

  /* Build error message if any field is empty */
  var errorMsg = "";

  if (name == "") {
    errorMsg = errorMsg + "- Full Name is required.<br />";
  }
  if (id == "") {
    errorMsg = errorMsg + "- Student ID is required.<br />";
  }
  if (email == "") {
    errorMsg = errorMsg + "- LCU Email is required.<br />";
  }
  if (pickup == "") {
    errorMsg = errorMsg + "- Please select a pickup time.<br />";
  }
  if (payment == "") {
    errorMsg = errorMsg + "- Please select a payment method.<br />";
  }

  /* Show the result box and fill it */
  resultBox.style.display = "block";

  if (errorMsg != "") {
    /* Show errors in red */
    resultBox.innerHTML            = "<strong>Please fix the following:</strong><br />" + errorMsg;
    resultBox.style.backgroundColor = "#f8d7da";
    resultBox.style.borderLeft      = "5px solid #c0392b";
    resultBox.style.color           = "#1A1A1A";
  } else {
    /* All fields filled — show confirmation */
    showConfirmation(name, pickup);
  }
}


/* ------------------------------------------------
   FUNCTION 5: showConfirmation
   Called by validateOrder() when all fields pass.
   Displays a personalized confirmation message
   using the student's name and pickup time.
   Uses the cafeteria object's properties.
   Uses: getElementById(), .innerHTML, .style
------------------------------------------------ */
function showConfirmation(studentName, pickupValue) {
  /* Get the selected pickup time label */
  var pickupEl   = document.getElementById("pickup-time");
  var pickupText = pickupEl.options[pickupEl.selectedIndex].text;

  /* Get the result box */
  var resultBox = document.getElementById("order-result");

  /* Display the confirmation message */
  resultBox.innerHTML = "<strong>Order confirmed, " + studentName + "!</strong> "
    + "Your meal will be ready at <strong>" + pickupText + "</strong>. "
    + "Come to the " + cafeteria.location + " and show your student ID. "
    + "Questions? Email " + cafeteria.email + ".";

  resultBox.style.backgroundColor = "#d4edda";
  resultBox.style.borderLeft      = "5px solid #27ae60";
  resultBox.style.color           = "#1A1A1A";
}
