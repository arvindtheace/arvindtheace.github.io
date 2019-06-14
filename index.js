// inspired from https://g-liu.com/blog/2013/08/tutorial-basic-carouselslideshow-with-javascript/

// direction = boolean value: true or false. If true, go to NEXT slide; otherwise go to PREV slide
function toggleSlide(direction, async = false) {
    var elements = document.getElementsByClassName("hideable"); // gets all the "slides" in our slideshow
    // Find the LI that's currently displayed
    var visibleID = getVisible(elements);
    if(async && direction && visibleID == elements.length-1) return;
    elements[visibleID].style.display = "none"; // hide the currently visible LI

    if(!direction) {
        var makeVisible = prev(visibleID, elements.length); // get the previous slide
    } else {
        var makeVisible = next(visibleID, elements.length); // get the next slide
    }
    elements[makeVisible].style.display = "block"; // show the previous or next slide
}
function getVisible(elements) {
    var visibleID = -1;
    for(var i = 0; i < elements.length; i++) {
        if(elements[i].style.display == "block") {
            visibleID = i;
        }
    }
    return visibleID;
}
function prev(num, arrayLength) {
    if(num == 0) return arrayLength-1;
    else return num-1;
}
function next(num, arrayLength) {
    if(num == arrayLength-1) return 0;
    else return num+1;
}
var switching;
function loopInfite() {
    if(switching) {
        clearInterval(switching);
    }
    document.getElementById('mode').innerHTML = 'infinite loop mode'
    
    var interval = 3000;
    switching = setInterval("toggleSlide(true)", interval);
}

function async() {
    if(switching) {
        clearInterval(switching);
    }
    document.getElementById('mode').innerHTML = 'async mode'
    var interval = 3000;
    switching = setInterval("toggleSlide(true, true)", interval);
}

loopInfite();
