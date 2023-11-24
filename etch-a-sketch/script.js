const GRID_COLUMN = 16;
const GRID_ROW = 16;
const LAST_GRID_COLUMN = GRID_COLUMN - 1;
const LAST_GRID_ROW = GRID_ROW - 1;
const DELIMITER = " ";
const EXPECTED_ROW_COL_VALUES = 2;

const container = document.querySelector(".container");

const askUserAmountOfGrid = () => {
  const gridSize = prompt("Enter column and row size: (x y)", "3 5");
  if (gridSize == null || gridSize == "") {
    console.log("Cancelled");
  } else {
    const size = gridSize.trim().split(DELIMITER);
    if (size.length == EXPECTED_ROW_COL_VALUES) {
      // upto: test if two values are both numbers
    } else {
      console.log("Invalid size input. Please try again.");
    }
  }

  // check if empty or null - user cancelled
  // check if values are greater than 100 or below 0
  // check if two values are numbers
  // check if input format is correct
  // check only containers numbers and a whitespace

  // if values are valid, generate grid
};

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

      gridRow.appendChild(gridCell);
      container.appendChild(gridRow);
    }
  }
};

const button = document.createElement("button");
button.textContent = "Click here ";
button.classList.add("noOfGrid");
button.addEventListener("click", askUserAmountOfGrid);
container.appendChild(button);

generateGrid();
