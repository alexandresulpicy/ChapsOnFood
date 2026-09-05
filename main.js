/* ================================================
   main.js — Shared JavaScript (all 3 pages)
   Chap's OnFood | LCU Cafeteria Pre-Order System
   ================================================ */


/* ===== OBJECT: cafeteria =====
   Represents the organization.
   Has multiple properties and one method. */

var cafeteria = {
  name:     "Chap's OnFood",
  location: "LCU Cafeteria Front Counter",
  email:    "chapsonline@lcu.edu",

  /* Method: returns the hours for a given meal period */
  getHours: function(period) {
    if (period == "breakfast") {
      return "7:00 AM to 10:30 AM";
    } else if (period == "lunch") {
      return "11:00 AM to 2:30 PM";
    } else if (period == "dinner") {
      return "4:30 PM to 7:00 PM";
    } else {
      return "not available";
    }
  }
};


/* ===== ARRAY: menuItems =====
   Stores all menu item objects.
   Accessed by index in menu.js. */

var menuItems = [
  { name: "Classic Breakfast Plate", category: "breakfast", price: 4.50 },
  { name: "Buttermilk Pancakes",     category: "breakfast", price: 3.75 },
  { name: "Chap's Classic Burger",   category: "lunch",     price: 6.25 },
  { name: "Garden Fresh Salad",      category: "lunch",     price: 5.00 },
  { name: "Penne Marinara",          category: "lunch",     price: 5.50 },
  { name: "Grilled Chicken Plate",   category: "dinner",    price: 7.50 },
  { name: "Taco Night Special",      category: "dinner",    price: 6.75 }
];


/* ------------------------------------------------
   FUNCTION 1: showGreeting
   Sets a welcome message in the header.
   Called on all 3 pages — this is the reused feature.
   Uses: getElementById(), .innerHTML, .style
------------------------------------------------ */
function showGreeting() {
  var el = document.getElementById("greeting-msg");
  el.innerHTML = "Welcome to " + cafeteria.name + " — skip the line, enjoy the food!";
  el.style.color      = "#E8E4DF";
  el.style.fontWeight = "bold";
  el.style.fontSize   = "0.85em";
}


/* ------------------------------------------------
   FUNCTION 2: checkCafeteriaStatus
   Called by onclick on the Home page.
   Uses prompt() to ask which meal period,
   then calls cafeteria.getHours() to display hours.
   Uses: prompt(), object + method (dot notation),
         if/else if/else, getElementById(),
         .innerHTML, .style (multiple elements)
------------------------------------------------ */
function checkCafeteriaStatus() {
  var period    = prompt("Which meal are you looking for?\nType: breakfast, lunch, or dinner");
  var statusBox = document.getElementById("status-box");
  var statusMsg = document.getElementById("status-msg");

  /* Show the box */
  statusBox.style.display = "block";

  /* if / else if / else */
  if (period == "breakfast") {
    statusMsg.innerHTML            = "Breakfast is served from " + cafeteria.getHours("breakfast") + " at the " + cafeteria.location + ".";
    statusBox.style.backgroundColor = "#d4edda";
    statusBox.style.borderLeft      = "5px solid #27ae60";

  } else if (period == "lunch") {
    statusMsg.innerHTML            = "Lunch is served from " + cafeteria.getHours("lunch") + " at the " + cafeteria.location + ".";
    statusBox.style.backgroundColor = "#d4edda";
    statusBox.style.borderLeft      = "5px solid #27ae60";

  } else if (period == "dinner") {
    statusMsg.innerHTML            = "Dinner is served from " + cafeteria.getHours("dinner") + " at the " + cafeteria.location + ".";
    statusBox.style.backgroundColor = "#d4edda";
    statusBox.style.borderLeft      = "5px solid #27ae60";

  } else {
    statusMsg.innerHTML            = "Please type breakfast, lunch, or dinner.";
    statusBox.style.backgroundColor = "#fff3cd";
    statusBox.style.borderLeft      = "5px solid #e67e22";
  }
}
