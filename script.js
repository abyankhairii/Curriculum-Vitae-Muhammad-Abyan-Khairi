const txtElement = ['Student of USU', 'Gamers', 'Newbie Programmer'];
let count = 0;
let txtIndex = 0;
let currenTxt = '';
let words = '';

(function ngetik(){

    if(count == txtElement.length){
        count = 0;
    }

    currenTxt = txtElement[count];

    words = currenTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == currenTxt.length){
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 500);

})();

document.addEventListener("DOMContentLoaded", function() {
    // Get the navbar element
    var navbar = document.querySelector(".sidebar");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position
    window.onscroll = function() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    };
});


