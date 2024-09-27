import * as MODEL from "../model/model.js";

// Variables

// Functions

function initListeners() {
  //   $("#random").on("click", function (e) {
  //     // console.log("Clicked", e.currentTarget.id);
  //     let btnID = e.currentTarget.id;
  //     let recipeURL = "https://www.themealdb.com/api/json/v1/1/random.php";

  //     if (btnID == "random") {
  //       //   MODEL.getRandomRecipe();
  //     }
  //   });
  $("button").on("click", function (e) {
    // console.log("Clicked", e.currentTarget.id);
    let btnID = e.currentTarget.id;
    let recipeURL = `https://www.themealdb.com/api/json/v1/1/${btnID}.php`;

    MODEL.getRecipe(recipeURL);
  });

  $("#search").on("click", function (e) {
    // console.log($("#cats").val());
    let catName = $("#cats").val();
    if (catName != "") {
      MODEL.getCategoryRecipes(catName, addRecipeListener);
      //   let addRecipeListener = MODEL.getCategoryRecipes(catName);
      //   console.log(addRecipeListener);
    } else {
      alert("Please select a category.");
    }
  });
}

function addRecipeListener() {
  //   console.log("add it here");
  $(".recipeCard").on("click", function (e) {
    let recipeID = e.currentTarget.id;
    MODEL.getRecipeByID(recipeID);
  });
}

function initCats() {
  MODEL.getCategories();
}

$(document).ready(function () {
  initCats();
  initListeners();
});
