

const checkBoxes = document.querySelectorAll('.cursor-point');
checkBoxes.forEach(checkBox=>{
    checkBox.addEventListener('click', function (){
        this.classList.toggle('active');
        console.log(this);
    })
});
const checkBoxesText = document.querySelectorAll('.cursor-point-text');

checkBoxesText.forEach(function(checkBoxText) {
    checkBoxText.addEventListener('click', function() {
        const checkBox = this.previousElementSibling; // Get the previous sibling, which is the checkbox
        checkBox.style.backgroundColor = 'black';
    });
});