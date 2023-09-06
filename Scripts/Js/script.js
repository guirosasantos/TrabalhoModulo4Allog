let item = document.querySelectorAll('.lateral-menu__list-iterm__wrapper');
let itemsTabela = document.querySelectorAll('.table-elements-line');


let currentItem = null;
let currentRotatedItem = null;

function clicarLateral(item) {
    return function () {
        var display = item.lastElementChild;
        var rotate = item.getElementsByTagName('i');

        if (display.style.display === 'none' || display.style.display === '') {
            if (currentItem !== null) {
                var previousDisplay = currentItem.lastElementChild;
                previousDisplay.style.display = 'none';
            }

            if (currentRotatedItem !== null) {
                var previousrotated = currentRotatedItem;
                previousrotated.style.transform = 'rotate(0deg)';
            }

            display.style.display = 'flex';
            display.style.justifyContent = 'flex-start';
            display.style.alignItems = 'left';
            display.style.width = '55%';
            display.style.listStyle = 'none';
            display.style.flexDirection = 'column';

            rotate[1].style.transform = 'rotate(90deg)';

            currentItem = item;
            currentRotatedItem = rotate[1];
        }
        else {
            display.style.display = 'none';
            currentItem = null;
            rotate[1].style.transform = 'rotate(0deg)';
            currentRotatedItem = null;
        }
    }
}

function clicarTabela(item) {
    return function () {
        var display = document.querySelector('.content');
        var editscreen = document.querySelector('.Edit-screen');
        editscreen.style.display = "flex";
        display.style.transition = "opacity 0.5s";
        display.lastElementChild.style.filter = "blur(4px)";
    }
}

item.forEach((item) => {
    item.addEventListener('click', clicarLateral(item));
});


itemsTabela.forEach((item) => {
    item.addEventListener('click', clicarTabela(item));
});

function fecharModal() {
    var display = document.querySelector('.content');
    var editscreen = document.querySelector('.Edit-screen');
    editscreen.style.display = "none";
    display.style.opacity = 1;
    display.lastElementChild.style.filter = "none";
}

function save () {
    alert("Você salvou suas mudanças com sucesso!");
}