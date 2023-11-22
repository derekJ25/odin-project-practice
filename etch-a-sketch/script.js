const GRID_COLUMN = 16;
const GRID_ROW = 16;
const LAST_GRID_COLUMN = GRID_COLUMN - 1;
const LAST_GRID_ROW = GRID_ROW - 1;

const container = document.querySelector(".container");

const generateGrid = () => {
  for (let column = 0; column < GRID_COLUMN; column++) {
    let gridRow = document.createElement("div");
    gridRow.className = "grid-row";
    if (column == LAST_GRID_COLUMN) {
      gridRow.style = "border-right: 1px solid black";
    }

    for (let row = 0; row < GRID_ROW; row++) {
      let gridCell = document.createElement("div");
      gridCell.className = "grid-item neutral";
      if (row == LAST_GRID_ROW) {
        gridCell.style = "border-bottom: 1px solid black";
      }

      // up to this
      gridCell.addEventListener("mouseleave", flipCell);

      gridRow.appendChild(gridCell);
      container.appendChild(gridRow);
    }
  }
};

// up to this
const flipCell = (cell) => {
  if (cell.className == "grid-item neutral") {
    console.log("inverse");
    cell.className = "grid-item inverse";
  } else {
    console.log("neutral");
    cell.className = "grid-item neutral";
  }
  console.log("flip cell");
};

generateGrid();
