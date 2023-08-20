/**
 * Etch-a-sketch
 */

const gameScreen = document.querySelector(".gameScreen");

let dimensions = 8;

runGame();

function runGame() {
    gameScreen.innerHTML = "";
    let blockwidth = 800 / dimensions
    for (let i = 0; i < dimensions * dimensions; i++) {

        const block = document.createElement("div");
        block.classList.toggle("empty");
        block.style.cssText = `color: black; background-color: white; width: ${blockwidth}px; height: ${blockwidth}px;`;
        gameScreen.appendChild(block);
    }

    const emptyBlocks = document.querySelectorAll(".empty");
    emptyBlocks.forEach(emptyBlock => emptyBlock.addEventListener("mouseover", () => {
        emptyBlock.style.cssText = `color: white; background-color: black; width: ${blockwidth}px; height: ${blockwidth}px;`;
    }))
}
const size = document.querySelector('.size');
size.addEventListener("click", () => {
    do {
        dimensions = prompt("Enter Dimension (Between 2-100):", "8");
    } while (dimensions > 100 && dimensions < 2);
    runGame();
});




