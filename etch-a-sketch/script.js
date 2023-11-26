const DELIMITER = " ";
const EXPECTED_ROW_COL_VALUES = 2;
const RGB_MIN = 0;
const RGB_MAX = 255;

const container = document.querySelector(".container");

const askUserAmountOfGrid = () => {
  const gridSize = prompt("Enter column and row size: (x y)", "5 5");
  if (gridSize == null || gridSize == "") {
    console.log("Cancelled");
  } else {
    const size = gridSize.trim().split(DELIMITER);
    if (size.length == EXPECTED_ROW_COL_VALUES) {
      if (isNaN(Number(size[0])) || isNaN(Number(size[1]))) {
        console.log("Please enter two numbers.");
      } else {
        if (size[0] <= 0 || size[0] > 100 || size[1] <= 0 || size[1] > 100) {
          console.log("Please enter number between 1 and 100.");
        } else {
          clearGrid();
          updateValues(size[0], size[1]);
          generateGrid();
        }
      }
    } else {
      console.log("Invalid size input. Please try again.");
    }
  }
};

const updateValues = (col, row) => {
  GRID_COLUMN = col;
  GRID_ROW = row;
  LAST_GRID_COLUMN = GRID_COLUMN - 1;
  LAST_GRID_ROW = GRID_ROW - 1;
};

const clearGrid = () => {
  const gridContainer = document.querySelector(".grid-container");
  if (gridContainer != null) {
    container.removeChild(gridContainer);
  }
};

const generateGrid = () => {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  container.appendChild(gridContainer);
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

      // // for black and white cells
      // gridCell.addEventListener("mouseenter", () => {
      //   if (gridCell.classList.contains("inverse")) {
      //     gridCell.classList.remove("inverse");
      //   } else {
      //     gridCell.classList.add("inverse");
      //   }
      // });

      // // for random generated colour cells
      // gridCell.addEventListener("mouseenter", () => {
      //   const red = generateRandomNumber();
      //   const green = generateRandomNumber();
      //   const blue = generateRandomNumber();
      //   gridCell.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      // });

      // for opacity increase 10% every time enter
      gridCell.addEventListener("mouseenter", () => {
        gridCell.style.opacity = Number(gridCell.style.opacity) + 0.1;
      });

      gridRow.appendChild(gridCell);
      gridContainer.appendChild(gridRow);
    }
  }
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * (RGB_MAX - RGB_MIN + 1)) + RGB_MIN;
};

const button = document.createElement("button");
button.textContent = "Click here ";
button.classList.add("noOfGrid");
button.addEventListener("click", askUserAmountOfGrid);
container.appendChild(button);
