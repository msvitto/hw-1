

const checkBoxes = document.querySelectorAll('.cursor-point');
checkBoxes.forEach(checkBox=>{
    checkBox.addEventListener('click', function (){
        this.classList.toggle('active');
        console.log(this);
    })
});
// const checkBoxesText = document.querySelectorAll('.cursor-point-text');

// checkBoxesText.forEach(function(checkBoxText) {
//     checkBoxText.addEventListener('click', function() {
//         const checkBox = this.previousElementSibling;
//         checkBox.style.backgroundColor = 'black';
//     });
// });

let a = $("p.cursor-point-text");
let b = $("input.cursor-point");

a.click(function (){
    b.addClass("click-agreement");
});
a.click(function (){
    b.toggleClass("click-disagreement");
});

