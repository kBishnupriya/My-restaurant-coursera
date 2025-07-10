(function (global) {
  var dc = {};

  var homeHtmlUrl = "snippets/home-snippet.html";
  var allCategoriesUrl = "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json";

  var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };

  var showLoading = function (selector) {
    var html = "<div class='text-center'><img src='images/ajax-loader.gif'></div>";
    insertHtml(selector, html);
  };

  var insertProperty = function (string, propName, propValue) {
    var propToReplace = "{{" + propName + "}}";
    return string.replace(new RegExp(propToReplace, "g"), propValue);
  };

  document.addEventListener("DOMContentLoaded", function() {
  const mainContent = document.getElementById('main-content');

  // Create image element
  const img = document.createElement('img');
  img.src = 'images/restaurant.jpg';
  img.alt = 'Restaurant Image';
  img.style.width = '100%';
  img.style.maxWidth = '600px';
  img.style.display = 'block';
  img.style.margin = 'auto';

  // Add image to main content
  mainContent.appendChild(img);
});


  dc.loadMenuItems = function (categoryShort) {
    console.log("Loading category:", categoryShort);
    // Here you'd implement actual category loading logic
    alert("Would load menu items for: " + categoryShort);
  };

  // STEP 0: Get categories and pick one at random
  $ajaxUtils.sendGetRequest(allCategoriesUrl, function (categories) {
    var randomIndex = Math.floor(Math.random() * categories.length);
    var randomCategoryShortName = "'" + categories[randomIndex].short_name + "'";

    // Update the specials link dynamically
    var specialsLink = document.getElementById("specials-link");
    specialsLink.setAttribute("onclick", "$dc.loadMenuItems(" + randomCategoryShortName + ");");
  });

  global.$dc = dc;

})(window);
