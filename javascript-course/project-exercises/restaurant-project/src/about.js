function loadAbout() {
  const contentPage = document.querySelector("#content");
  const aboutTitle = document.createElement("h1");
  aboutTitle.innerHTML = "About us";

  const aboutDivOne = document.createElement("div");
  const aboutDivOneHeading = document.createElement("h2");
  aboutDivOneHeading.innerHTML = "Store manager - X";
  const aboutDivOneContent = document.createElement("p");
  aboutDivOneContent.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo laudantium repellat odio non, officiis, atque consequuntur voluptatem fugit facilis vitae! Minima ad magnam iusto. Alias praesentium obcaecati neque expedita?";
  aboutDivOne.append(aboutDivOneHeading, aboutDivOneContent);

  const aboutDivTwo = document.createElement("div");
  const aboutDivTwoHeading = document.createElement("h2");
  aboutDivTwoHeading.innerHTML = "Chef - Y";
  const aboutDivTwoContent = document.createElement("p");
  aboutDivTwoContent.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo laudantium repellat odio non, officiis, atque consequuntur voluptatem fugit facilis vitae! Minima ad magnam iusto. Alias praesentium obcaecati neque expedita?";
  aboutDivTwo.append(aboutDivTwoHeading, aboutDivTwoContent);

  const aboutDivThree = document.createElement("div");
  const aboutDivThreeHeading = document.createElement("h2");
  aboutDivThreeHeading.innerHTML = "Waiter - Z";
  const aboutDivThreeContent = document.createElement("p");
  aboutDivThreeContent.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo laudantium repellat odio non, officiis, atque consequuntur voluptatem fugit facilis vitae! Minima ad magnam iusto. Alias praesentium obcaecati neque expedita?";
  aboutDivThree.append(aboutDivThreeHeading, aboutDivThreeContent);

  contentPage.append(aboutTitle, aboutDivOne, aboutDivTwo, aboutDivThree);
}

export default loadAbout;
