const GRID_COLUMN = 16;
const GRID_ROW = 16;

const container = document.querySelector(".container");

const generateGrid = () => {
  for (let row = 0; row < GRID_ROW; row++) {
    let gridRow = document.createElement("div");
    gridRow.className = "grid-row";

    for (let column = 0; column < GRID_COLUMN; column++) {
      let gridColumn = document.createElement("div");
      gridColumn.className = "grid-item";
      gridColumn.textContent = "o";
      gridRow.appendChild(gridColumn);
      container.appendChild(gridRow);
    }
  }
};

generateGrid();
