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

      gridCell.addEventListener("mouseenter", () => {
        if (gridCell.classList.contains("inverse")) {
          gridCell.classList.remove("inverse");
        } else {
          gridCell.classList.add("inverse");
        }
      });

      // // Figure how to make this into its own seperate function to call
      // gridCell.addEventListener("mouseenter", flipCell);

      gridRow.appendChild(gridCell);
      container.appendChild(gridRow);
    }
  }
};

generateGrid();
