const container = document.querySelector('#container');
const gridSize = 16;
const changeBtn = document.querySelector('#change-size');
const resetBtn = document.querySelector('#reset');

const colorPicker = 'blue';

for (let i = 0; i < gridSize* gridSize; i++){
    let div = document.createElement("div");
    div.classList.add('square');
    div.style.width = `40px`;
    div.style.height = `40px`;
    container.appendChild(div);
}

let divSqurs = document.querySelectorAll('.square');
divSqurs.forEach((square) =>{
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = colorPicker;
    });
});

resetBtn.addEventListener('click', () =>{
    divSqurs.forEach((square) => {
        square.style.backgroundColor = 'unset';
    })
});

changeBtn.addEventListener('click', () =>{
    let numPerSide =  prompt("Please enter the number per side:");
    numPerSide = Number(numPerSide); //typecast numPerSide from string to number
    let totalWidth = parseInt(getComputedStyle(container).width); //convert to int
    if (Number.isInteger(numPerSide) && numPerSide > 0 && numPerSide <= 100){
        //removing existing squares
        container.innerHTML = '';

        for (let i = 0; i < numPerSide * numPerSide; i++){
            let div = document.createElement("div");
            let widthPerSquare = totalWidth/ numPerSide;
            div.classList.add('square');
            div.style.width = `${widthPerSquare}px`;
            div.style.height = `${widthPerSquare}px`;
            
            container.appendChild(div);
        }

        let divSqurs = document.querySelectorAll('.square');
        divSqurs.forEach((square) =>{
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = colorPicker;
            });
        });

        resetBtn.addEventListener('click', () =>{
            divSqurs.forEach((square) => {
                square.style.backgroundColor = 'unset';
            })
        });
    } else {
        alert("Please enter a positive integer number that is smaller than 100!");
    }

    
});

