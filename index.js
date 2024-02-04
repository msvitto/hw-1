const checkBoxes = document.querySelectorAll('.cursor-point');
checkBoxes.forEach(checkBox => {
    checkBox.addEventListener('click', function () {
        this.classList.toggle('active');
        console.log(this);
    })
})