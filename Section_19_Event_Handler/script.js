const myButton = document.getElementById("myButton");
const message = document.getElementById("message");

myButton.addEventListener("click", function () {
  message.innerHTML = `
    <div class='modal'>
      <h1 class='modalHeading'>Welcome To Stacodev</h1>
      <div id='divider'></div>
      <div class='modalContent'>
        <p class='modelHeader'>Stack Code Developer</p>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A eveniet doloribus aperiam expedita ab mollitia exercitationem id obcaecati ea quibusdam? Excepturi non, adipisci porro nemo sequi corporis officiis quas eum!</p>
      </div>
      <div id='divider'></div>
      <button class='close' id='closeBtn'>Close</button>
    </div>`;

  // Apply styles directly
  message.style.color = "blue";
  message.style.fontSize = "20px";

  // Add the 'show' class to display the modal
  message.classList.add("show");
});

// Use event delegation to handle clicks on the close button
message.addEventListener("click", function (event) {
  // Check if the clicked element has the ID 'closeBtn'
  if (event.target.id === "closeBtn") {
    message.classList.remove("show");
    // Optionally, clear the innerHTML if you want to completely remove the modal content
    // message.innerHTML = "";
  }
});

// You don't need this second click listener for myButton as it's redundant
// myButton.addEventListener("click", function () {
//   message.classList.add("show");
// });

const homeNavItem = document.getElementById("home");
const aboutNavItem = document.getElementById("about");
const contactNavItem = document.getElementById("contact");

homeNavItem.addEventListener("click", function () {
  this.classList.add("active");
});
aboutNavItem.addEventListener("mouseover", function () {
  this.classList.toggle("active");
});
contactNavItem.addEventListener("focusin", function () {
  this.classList.add("active");
});

const toDoItems = document.querySelectorAll(".toDoItem");
toDoItems.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

const eleventhToDoItem = document.getElementById("eleventhToDoItem");

eleventhToDoItem.addEventListener("mouseover", function () {
  this.classList.toggle("active");
});
