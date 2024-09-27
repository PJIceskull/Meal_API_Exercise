export function getRandomRecipe() {
  let recipeURL = "https://www.themealdb.com/api/json/v1/1/random.php";

  $.getJSON(recipeURL, function (data) {
    console.log(data); // Print out Data from API.
  }).fail(function (error) {
    console.log("error", error.message);
  });
}

export function getCategories() {
  let catURL = "https://www.themealdb.com/api/json/v1/1/categories.php";

  $.getJSON(catURL, function (data) {
    console.log(data); // Print out Data from API.
    $.each(data.categories, function (index, category) {
      console.log(category.strCategory);
      $("#cats").append(
        `<option value="${category.strCategory}">${category.strCategory}</option>`
      );
    });
  }).fail(function (error) {
    console.log("error", error.message);
  });
}

export function getCategoryRecipes(catName, callback) {
  let catURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`;

  $.getJSON(catURL, function (data) {
    console.log(data); // Print out Data from API.

    $(".recipeHolder").html("");
    $.each(data.meals, function (index, meal) {
      $(".recipeHolder").append(`<div id="${meal.idMeal}" class="recipeCard">
            <h1>${meal.strMeal}</h1>
            <img src="${meal.strMealThumb}" alt="Image of ${meal.strMeal}" />
        </div>`);
    });

    callback();
    // return true;
  }).fail(function (error) {
    console.log("error", error.message);
  });
}

export function getRecipeByID(recipeID) {
  let idURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`;

  $.getJSON(idURL, function (data) {
    // console.log(data);
    console.log(data.meals[0]);
    let meal = data.meals[0];
    $(".recipeHolder").html(`
        <h1>${meal.strMeal}</h1><div><img src="${meal.strMealThumb}" /></div>`);
  });
}

// Getting Recipe API Url using button ID
export function getRecipe(url) {
  $.getJSON(url, function (data) {
    console.log(data); // Print out Data from API.
  }).fail(function (error) {
    console.log("error", error.message);
  });
}

export function getRecipebyFirstLetter() {}
