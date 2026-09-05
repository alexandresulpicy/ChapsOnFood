/* ================================================
   menu.js — Menu page JavaScript
   Chap's OnFood | LCU Cafeteria Pre-Order System
   ================================================ */


/* ------------------------------------------------
   FUNCTION 3: showMenuItems
   Called by onclick on the Menu page.
   Uses prompt() to ask which meal period,
   then accesses the menuItems array by index
   to display the matching items and their prices.
   Uses: prompt(), array access by index,
         dot notation (.name .price), object method,
         getElementById(), .innerHTML, .style,
         if/else if/else
------------------------------------------------ */
function showMenuItems() {
  var period    = prompt("Which meal period?\nType: breakfast, lunch, or dinner");
  var resultBox = document.getElementById("menu-result");
  var resultMsg = document.getElementById("menu-msg");

  /* Show the result box */
  resultBox.style.display = "block";

  /*
     menuItems array index layout (defined in main.js):
     [0] Classic Breakfast Plate  — breakfast
     [1] Buttermilk Pancakes      — breakfast
     [2] Chap's Classic Burger    — lunch
     [3] Garden Fresh Salad       — lunch
     [4] Penne Marinara           — lunch
     [5] Grilled Chicken Plate    — dinner
     [6] Taco Night Special       — dinner
  */

  if (period == "breakfast") {
    resultMsg.innerHTML = "<strong>Breakfast</strong> — served " + cafeteria.getHours("breakfast")
      + "<ul>"
      + "<li>" + menuItems[0].name + " — $" + menuItems[0].price + "</li>"
      + "<li>" + menuItems[1].name + " — $" + menuItems[1].price + "</li>"
      + "</ul>";
    resultBox.style.backgroundColor = "#d4edda";
    resultBox.style.borderLeft      = "5px solid #27ae60";

  } else if (period == "lunch") {
    resultMsg.innerHTML = "<strong>Lunch</strong> — served " + cafeteria.getHours("lunch")
      + "<ul>"
      + "<li>" + menuItems[2].name + " — $" + menuItems[2].price + "</li>"
      + "<li>" + menuItems[3].name + " — $" + menuItems[3].price + "</li>"
      + "<li>" + menuItems[4].name + " — $" + menuItems[4].price + "</li>"
      + "</ul>";
    resultBox.style.backgroundColor = "#d4edda";
    resultBox.style.borderLeft      = "5px solid #27ae60";

  } else if (period == "dinner") {
    resultMsg.innerHTML = "<strong>Dinner</strong> — served " + cafeteria.getHours("dinner")
      + "<ul>"
      + "<li>" + menuItems[5].name + " — $" + menuItems[5].price + "</li>"
      + "<li>" + menuItems[6].name + " — $" + menuItems[6].price + "</li>"
      + "</ul>";
    resultBox.style.backgroundColor = "#d4edda";
    resultBox.style.borderLeft      = "5px solid #27ae60";

  } else {
    resultMsg.innerHTML             = "Please type breakfast, lunch, or dinner.";
    resultBox.style.backgroundColor = "#fff3cd";
    resultBox.style.borderLeft      = "5px solid #e67e22";
  }
}
