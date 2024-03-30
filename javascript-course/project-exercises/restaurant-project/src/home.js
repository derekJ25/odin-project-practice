function loadHome() {
  const contentPage = document.querySelector("#content");
  const homeTitle = document.createElement("h1");
  homeTitle.innerHTML = "Restaurant Name";

  const homeDivOne = document.createElement("div");
  const homeDivOneHeading = document.createElement("h2");
  homeDivOneHeading.innerHTML = "Location";
  const homeDivOneContent = document.createElement("p");
  homeDivOneContent.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo laudantium repellat odio non, officiis, atque consequuntur voluptatem fugit facilis vitae! Minima ad magnam iusto. Alias praesentium obcaecati neque expedita?";
  homeDivOne.append(homeDivOneHeading, homeDivOneContent);

  const homeDivTwo = document.createElement("div");
  const homeDivTwoHeading = document.createElement("h2");
  homeDivTwoHeading.innerHTML = "Opening hours";
  const homeDivTwoContent = document.createElement("p");
  homeDivTwoContent.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo laudantium repellat odio non, officiis, atque consequuntur voluptatem fugit facilis vitae! Minima ad magnam iusto. Alias praesentium obcaecati neque expedita?";
  homeDivTwo.append(homeDivTwoHeading, homeDivTwoContent);

  contentPage.append(homeTitle, homeDivOne, homeDivTwo);
}

export default loadHome;
