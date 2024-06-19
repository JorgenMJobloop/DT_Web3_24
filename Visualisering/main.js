document.addEventListener("DOMContentLoaded", () => {
    const arrayContainer = document.getElementById("array-container");
    const startButton = document.getElementById("start-button");

    let array = [5, 3, 8, 4, 2, 1, 7, 9, 11, 10, 15, 16, 20, 25]

    // funksjonen som fjerner de eksiterende barene!
    function createBars(array) {
        while (arrayContainer.firstChild) {
            arrayContainer.removeChild(arrayContainer.firstChild);
        }

        // funksjonen som lager de nye barene
        array.forEach(value => {
            const bar = document.createElement("div");
            bar.classList.add("bar");
            bar.style.height = `${value * 20}px`;
            bar.textContent = value;
            arrayContainer.appendChild(bar);
        });
    }

    async function bubbleSort(array) {
        let bars = document.querySelectorAll(".bar");
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - 1; j++) {
                if (array[j] > array[j + 1]) {
                    // her bytter vi plass på elementene i arrayet
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];

                    // oppdatere de visuelle elementene
                    bars[j].style.height = `${array[j] * 20}px`;
                    bars[j].textContent = array[j];
                    bars[j + 1].style.height = `${array[j + 1] * 20}px`;
                    bars[j + 1].textContent = array[j + 1];

                    // markering av de byttede elementene
                    bars[j].style.backgroundColor = "red";
                    bars[j + 1].style.backgroundColor = "red";
                    await new Promise(resolve => setTimeout(resolve, 300));
                    bars[j].style.backgroundColor = "cyan";
                    bars[j + 1].style.backgroundColor = "cyan";
                }
            }
            // fargelegg de sorterte elementene
            bars[array.length - i - 1].classList.add("sorted");
        }
        bars[0].classList.add("sorted");
    };

    startButton.addEventListener("click", () => {
        createBars(array);
        bubbleSort(array);
    }),
        createBars(array)

})
