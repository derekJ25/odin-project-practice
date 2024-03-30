function loadHome() {
  const contentPage = document.querySelector("#content");
  const restaurantTitleDiv = document.createElement("div");
  const restaurantTitle = document.createElement("h1");
  restaurantTitle.innerHTML = "Resturant Title";
  restaurantTitleDiv.appendChild(restaurantTitle);
  contentPage.appendChild(restaurantTitleDiv);

  const contentPageDivOne = document.createElement("div");
  const restaurantImage = document.createElement("img");
  const restaurantDescription = document.createElement("div");
  restaurantDescription.innerHTML = "some temp stuff";
  contentPageDivOne.append(restaurantImage, restaurantDescription);
  contentPage.appendChild(contentPageDivOne);

  const contentPageDivTwo = document.createElement("div");
  const contentOurStoryDiv = document.createElement("div");
  const contentOurStoryTitle = document.createElement("h1");
  const contentOurStoryContent = document.createElement("p");
  contentOurStoryTitle.innerHTML = "Our story";
  contentOurStoryContent.innerHTML =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi veritatis enim voluptatibus, quis, consequuntur, minima a nisi ratione veniam earum deleniti unde eum consectetur dolorem velit? Consequuntur, culpa commodi? Nulla!";
  contentOurStoryDiv.append(contentOurStoryTitle, contentOurStoryContent);
  const contentViewMenu = document.createElement("div");
  const contentViewMenuTitle = document.createElement("h1");
  contentViewMenuTitle.innerHTML = "View Menu";
  contentViewMenu.appendChild(contentViewMenuTitle);
  const contentAboutUs = document.createElement("div");
  const contentAboutUsTitle = document.createElement("h1");
  contentAboutUsTitle.innerHTML = "About us";
  contentAboutUs.appendChild(contentAboutUsTitle);

  contentPageDivTwo.append(contentOurStoryDiv, contentViewMenu, contentAboutUs);
  contentPage.appendChild(contentPageDivTwo);
}

export default loadHome;
