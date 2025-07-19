const container = document.getElementById("container");

container.style.height = "100vh";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "flex-start";
container.style.alignItems = "center";

// container.style.justifyContent = "center";
// container.style.alignItems = "center";
container.style.backgroundColor = "#f7c9c9ff";

const navbar = document.getElementById("navbar");

navbar.style.padding = "1rem 5%";
navbar.style.width = "100%";
navbar.style.height = "auto";
navbar.style.minHeight = "60px";
navbar.style.display = "flex";
navbar.style.justifyContent = "space-evenly";
navbar.style.alignItems = "center";
navbar.style.flexWrap = "wrap";
navbar.style.gap = "1rem";
navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
navbar.style.backgroundColor = "#fc8686ff";
navbar.style.position = "fixed";
navbar.style.top = "0";
navbar.style.zIndex = "1";

const companyData = document.getElementById("companyData");

companyData.style.display = "flex";
companyData.style.justifyContent = "center";
companyData.style.alignItems = "center";
companyData.style.flexWrap = "wrap";
companyData.style.gap = "1rem";

const companyLogo = document.getElementById("companyLogo");

companyLogo.style.backgroundColor = "#ffffff";
companyLogo.style.width = "50px";
companyLogo.style.height = "aut";
companyLogo.style.borderRadius = "50%";
companyLogo.style.objectFit = "cover";
companyLogo.style.textAlign = "center";
companyLogo.style.lineHeight = "50px";
companyLogo.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
companyLogo.style.marginRight = "10px";
companyLogo.style.cursor = "pointer";

const companyName = document.getElementById("companyName");

companyName.style.fontSize = "1.5rem";
companyName.style.fontWeight = "bold";
companyName.style.textTransform = "uppercase";
companyName.style.letterSpacing = "1px";
companyName.style.color = "#070707ff";

const navList = document.getElementById("navList");

navList.style.width = "50%";

const navItems = document.getElementById("navItems");

navItems.style.display = "flex";
navItems.style.justifyContent = "center";
navItems.style.alignItems = "center";
navItems.style.flexWrap = "wrap";
navItems.style.gap = "1rem";
navItems.style.listStyle = "none";

const navItem = document.querySelectorAll(".navItem");

navItem.forEach((item) => {
  item.style.fontSize = "1.2rem";
  item.style.textAlign = "center";
  item.style.padding = "0.5rem 1rem";
  item.style.cursor = "pointer";
  item.classList.toggle("onHover");
  item.classList.toggle("onHover");
});

const headerSection = document.getElementById("headerSection");

headerSection.style.height = "800px";
headerSection.style.width = "100%";

const carousal = document.getElementById("carousal");

carousal.style.width = "100%";
carousal.style.height = "100%";
carousal.style.display = "flex";
carousal.style.justifyContent = "center";
carousal.style.alignItems = "center";

const carousalImages = document.getElementsByClassName("carousalImage");

for (let i = 0; i < carousalImages.length; i++) {
  carousalImages[i].style.width = "100%";
  carousalImages[i].style.height = "100%";
  carousalImages[i].style.objectFit = "cover";
}

const mainSection = document.getElementById("mainSection");

mainSection.style.width = "100%";
mainSection.style.height = "500px";
mainSection.style.display = "flex";
mainSection.style.justifyContent = "center";
mainSection.style.alignItems = "center";
mainSection.style.backgroundColor = "#f78c8cff";

const mainContent = document.getElementById("mainContent");

mainContent.style.width = "50%";
mainContent.style.height = "100%";
mainContent.style.display = "flex";
mainContent.style.flexDirection = "column";
mainContent.style.justifyContent = "center";
mainContent.style.alignItems = "center";
mainContent.style.textAlign = "center";
mainContent.style.color = "#750909ff";

const mainPara = document.getElementById("mainPara");

mainPara.innerHTML = `<h3 class='mainPara'>Para Heading</h3><p class='mainContent'>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>`;
