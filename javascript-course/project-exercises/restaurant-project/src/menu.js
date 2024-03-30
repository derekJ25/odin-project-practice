function loadMenu() {
  const contentPage = document.querySelector("#content");
  const menuTitle = document.createElement("h1");
  menuTitle.innerHTML = "MENU";

  const menuItemOne = document.createElement("div");
  const menuItemOneTitle = document.createElement("h3");
  menuItemOneTitle.innerHTML = "Item 1";
  const menuItemOneDescription = document.createElement("p");
  menuItemOneDescription.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo laudantium repellat odio non, officiis, atque consequuntur voluptatem fugit facilis vitae! Minima ad magnam iusto. Alias praesentium obcaecati neque expedita?";
  menuItemOne.append(menuItemOneTitle, menuItemOneDescription);

  const menuItemTwo = document.createElement("div");
  const menuItemTwoTitle = document.createElement("h3");
  menuItemTwoTitle.innerHTML = "Item 2";
  const menuItemTwoDescription = document.createElement("p");
  menuItemTwoDescription.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo laudantium repellat odio non, officiis, atque consequuntur voluptatem fugit facilis vitae! Minima ad magnam iusto. Alias praesentium obcaecati neque expedita?";
  menuItemTwo.append(menuItemTwoTitle, menuItemTwoDescription);

  const menuItemThree = document.createElement("div");
  const menuItemThreeTitle = document.createElement("h3");
  menuItemThreeTitle.innerHTML = "Item 1";
  const menuItemThreeDescription = document.createElement("p");
  menuItemThreeDescription.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo laudantium repellat odio non, officiis, atque consequuntur voluptatem fugit facilis vitae! Minima ad magnam iusto. Alias praesentium obcaecati neque expedita?";
  menuItemThree.append(menuItemThreeTitle, menuItemThreeDescription);

  contentPage.append(menuTitle, menuItemOne, menuItemTwo, menuItemThree);
}

export default loadMenu;
