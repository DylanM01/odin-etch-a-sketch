function makeGrid(width, height) {
    const main = document.getElementById("main");

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            main.appendChild(cell);
        }
    }
}

makeGrid(16, 16); // Example: create a 16x16 grid