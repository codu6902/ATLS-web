let meals = ["lunch", "dinner", "brunch"];
let images = ["lunch.jpg", "dinner.jpg", "brunch.jpg"];
let prevmeal;

for(i=0; i<document.getElementsByClassName("meal").length; i++){
  document.getElementsByClassName("meal")[i].innerHTML = "<h2>" + meals[i]; + "<h2>";

  document.getElementsByClassName("meal")[i].addEventListener("click", setActive, false);

  document.getElementsByClassName("meal")[i].id = meals[i];

  // document.getElementById("one").addEventListener("click", setActiveButton, false);
  // document.getElementById("two").addEventListener("click", setActiveButton, false);

}

function setActive(e){


  prevmeal = document.getElementsByClassName("active")[0].id;
  if(prevmeal != undefined){
    document.getElementById(prevmeal).classList.toggle("active");
  }
  // console.log("previous meal: " + prevmeal);
  // prevmeal.classList.toggle("active");

  console.log(e.target.innerHTML);

  if(e.target.tagName == "H2"){
    console.log("h2 clicked");
    e.target.parentNode.classList.toggle("active");
  }else{
    console.log("div clicked");
    e.target.classList.toggle("active");
  }

}


// function setActiveButton(e){
//   e.target.classList.toggle("active");
// }
