
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].word.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].word.substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].word.substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i].word + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
          else{

          var vv=0;
          for(searching=0; searching<arr.length; searching++){
         if (document.getElementById("searchInput").value.toUpperCase()===arr[searching].word.toUpperCase()){
           vv++;
        location.replace(arr[searching].site);
        }
          }
          if (vv===0){
            alert("Input invalid. Please try again")
         //location.replace("https://www.w3schools.com");
          }
          }
}
        else{
          var ww=0;

        for(searching=0; searching<arr.length; searching++){
       if (document.getElementById("searchInput").value.toUpperCase()===arr[searching].word.toUpperCase()){
         ww++;
        location.replace(arr[searching].site);
      }
        }
        if (ww===0){
          alert("Input invalid. Please try again")
          //location.replace("https://www.youtube.com")
        }
        }
     }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
var searchlist = [{word: "history",site: "./aboutus.html"}, {word: "organic", site: "./aboutus.html"},{word: "gluten free", site: "./aboutus.html"},{word: "vegan",site: "./aboutus.html"},{word: "locally sourced",site: "./aboutus.html"},{word: "fair trade",site: "./aboutus.html"},
{word: "coffee beans",site: "./aboutus.html"}, {word: "quality",site: "./aboutus.html"}, {word: "cappucino",site: "./menucoffee.html"},{word: "americano",site: "./menucoffee.html"},{word: "mocha",site: "./menucoffee.html"},{word: "latte",site: "./menucoffee.html"},
{word: "brewed coffee",site: "./menucoffee.html"}, {word: "espresso",site: "./menucoffee.html"}, {word: "coffee",site: "./menucoffee.html"},{word: "iced cappucino",site: "./menucoffee.html"}, {word: "iced americano",site: "./menucoffee.html"}, {word: "iced mocha",site: "./menucoffee.html"},
{word: "iced latte",site: "./menucoffee.html"},
{word: "tea",site: "./menutea.html"},{word: "green tea",site: "./menutea.html"},{word: "black tea",site: "./menutea.html"}, {word: "chai tea",site: "./menutea.html"},{word: "london fog",site: "./menutea.html"},{word: "matcha latte",site: "./menutea.html"},
{word: "iced matcha latte",site: "./menutea.html"},
{word: "iced earl grey latte",site: "./menutea.html"},{word: "iced chai tea latte",site: "./menutea.html"}, {word: "iced tea",site: "./menutea.html"},{word: "cake",site: "./menudesserts.html"},{word: "ice cream",site: "./menudesserts.html"},{word: "dessert",site: "./menudesserts.html"},
{word: "tiramisu",site: "./menudesserts.html"}, {word: "cheese cake",site: "./menudesserts.html"},{word: "red velvet",site: "./menudesserts.html"},
{word: "black forest",site: "./menudesserts.html"}, {word: "vanilla",site: "./menudesserts.html"}, {word: "chocolate",site: "./menudesserts.html"}, {word: "strawberry",site: "./menudesserts.html"}, {word: "coffee ice cream",site: "./menudesserts.html"}, {word: "sandwich",site: "./menusandwich.html"},
{word: "club sandwich",site: "./menusandwich.html"},
{word: "BLT sandwich",site: "./menusandwich.html"}, {word: "tuna sandwich",site: "./menusandwich.html"}, {word: "chicken sandwich",site: "./menusandwich.html"}, {word: "coquitlam",site: "./locations.html"},{word: "burnaby",site: "./locations.html"},{word: "richmond",site: "./locations.html"},
{word: "inquiry",site: "./contactus.html"},{word: "contact",site: "./contactus.html"}];

/*initiate the autocomplete function on the "searchInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("searchInput"), searchlist);
