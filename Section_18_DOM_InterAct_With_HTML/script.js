// & QUERY SELECTOR SINGLE ELEMENT

const h1Selector = document.querySelector("h1");

// h1Selector.innerHTML = "Hello, <span style='color: red;'>World!</span>";
// h1Selector.style.color = "purple";
h1Selector.style.fontSize = "2rem";

// CHANGE H1 TEXT AND STYLE
const allP_Elements = document.querySelectorAll("p");

// console.log(allP_Elements);

// allP_Elements.forEach((p) => {
//   p.style.color = "green";
// });

for (let i = 0; i < allP_Elements.length; i++) {
  allP_Elements[i].style.lineHeight = "2";
  if (i % 2 === 0) {
    allP_Elements[i].style.color = "red";
  } else {
    allP_Elements[i].style.color = "blue";
  }
}

// CHANGE BG COLOR BY INTERVAL OF 1 SECOND
let colors = ["red", "green", "blue", "yellow", "purple"];
let currentIndex = 0;
// setInterval(() => {
//   document.body.style.backgroundColor = colors[currentIndex];
//   currentIndex = (currentIndex + 1) % colors.length;
// }, 1000);

// $ GET ELEMENT BY ID
const companyName = document.getElementById("cName");
companyName.style.color = "#FFC300";
companyName.style.textAlign = "center";
companyName.style.textTransform = "uppercase";
companyName.style.backgroundColor = "#000";
companyName.style.padding = "1rem";
companyName.style.fontSize = "3rem";

const tagLine = document.getElementsByClassName("tagLine");

tagLine[0].style.color = "#cf2e0aff";
tagLine[0].style.textAlign = "center";
tagLine[0].style.fontSize = "1.5rem";
tagLine[0].style.fontStyle = "italic";
tagLine[0].style.fontWeight = "bold";
tagLine[0].style.marginTop = "0.5rem";
tagLine[0].style.marginBottom = "1rem";
tagLine[0].style.backgroundColor = "#b9b9b9ff";
