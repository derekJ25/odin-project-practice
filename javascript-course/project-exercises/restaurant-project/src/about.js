function loadAbout() {
  const contentPage = document.querySelector("#content");
  const aboutTitle = document.createElement("h1");
  aboutTitle.innerHTML = "About us";

  contentPage.appendChild(aboutTitle);
}

export default loadAbout;
