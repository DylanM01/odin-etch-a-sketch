let isDrawing = false;

function createGrid(size) {
    const main = document.getElementById("main");
    main.innerHTML = ''; // Clear the existing grid

    main.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    main.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        main.appendChild(cell);
    }
}

function addHoverEffect() {
    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) => {
        cell.addEventListener("mousedown", () => {
            isDrawing = true;
            cell.style.background = "black";
        });

        cell.addEventListener("mouseover", () => {
            if (isDrawing) {
                cell.style.background = "black";
            }
        });

        cell.addEventListener("mouseup", () => {
            isDrawing = false;
        });
    });
}

function promptGridSize() {
    let newSize = prompt("Enter the number of squares per side (max: 100):");
    newSize = parseInt(newSize);

    if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
        addHoverEffect();
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
}

document.getElementById("newGridButton").addEventListener("click", promptGridSize);

// Initial grid creation
createGrid(16); // Example: create a 16x16 grid
addHoverEffect();