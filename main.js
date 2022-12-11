const newGame = () => {
    const root = document.getElementById("root");
    const max = 300;
    const guess = Math.floor(Math.random() * max);
    const button = document.getElementById("button");
    let count = 0;

    root.innerText = "";
    text.innerText = "";
    for (let i = 1; i <= max; i++) {
        const item = document.createElement("span");
        item.classList.add("item")
        item.innerText = i;
        root.append(item);

        item.addEventListener("click", function () {
            count++; 

            if (count >= 9) {
                button.classList.add("show");
            }

            if (+item.innerText === guess) {
                const items = document.getElementsByClassName("item");

                for (let i = 0; i < items.length; i++) {
                    items[i].classList.add("gameOver");
                }

                button.classList.add("show");
                item.classList.add("guess");
                text.innerText = "Ուռաաաա, դուք գուշակեցիք թիվը";
            } else if (item.innerText > guess) {
                const items = document.getElementsByClassName("item");

                for (let i = item.innerText; i < items.length; i++) {
                    items[i].classList.add("detected");
                }
                item.classList.add("target");
                text.innerText = `Թիվը փոքր է ${item.innerText}-ից`
            } else if (item.innerText < guess) {
                const items = document.getElementsByClassName("item");

                for (let i = 0; i < +item.innerText - 1; i++) {
                    items[i].classList.add("detected");
                }
                item.classList.add("target");
                text.innerText = `Թիվը մեծ է ${item.innerText}-ից`
            }
        })
    }

    button.addEventListener("click", function() {
        button.classList.remove("show");
        newGame();
    })
}

newGame()