$("document").ready(function() {

    // AUTO SLIDER (EVERY 1 SEC)
    var auto;
    auto = setInterval(moveToR, 3000);

    // STOP AUTO IF I ENTER AND RESTART IF I LEAVE
    $(".carousel").mouseenter(function() {
        clearInterval(auto);
    });

    $(".carousel").mouseleave(function() {
        auto = setInterval(moveToR, 3000);
    });


    // CAROUSEL MOOVER

    // NEXT IMG VERS 1.0
    $(".next").click(moveToR);
    // NEXT IMG VERS 2.0
    // $(".next").click(function() {
    //     var dotsNumber = $(".dots > .dot").length;
    //     var currentDot = $(".dot.active");
    //     var currentIndex = currentDot.index();
    //     var index = currentIndex + 1;
    //     if (index == dotsNumber) {
    //         index -= dotsNumber;
    //     }
    //
    //     carouselActIndex(index);
    // });

    // PREV IMG
    $(".prev").click(moveToL);

    // DOT MOV
    $(".dot").click(moveToClick);
});

// move img to r
function moveToR() {
    // VAR ASSIGNMENT: IMG AND DOT
    var currentImg = $("img.active");
    var currentDot = $(".dot.active");
    // remove class .active in the current img and in the current dot
    currentImg.removeClass("active");
    currentDot.removeClass("active");

    // MOVE TO R img and dot, if it's not the last-one
    if (currentImg.next("img").length) {
        // it's not the last-right-one --> .active in the next img and dot
        currentImg.next("img").addClass("active");
        currentDot.next(".dot").addClass("active");
    } else {
        // it's the last-right-one --> .active to the first img and dot
        $(".carousel > img:first-of-type").addClass("active");
        $(".carousel > .dots > .dot:first-of-type").addClass("active");
    }
};

// move img to l
function moveToL() {
    // VAR ASSIGNMENT: IMG AND DOT
    var currentImg = $("img.active");
    var currentDot = $(".dot.active");
    // remove class .active in the current img and dot
    currentImg.removeClass("active");
    currentDot.removeClass("active");
    if (currentImg.prev("img").length) {
        // prev.next() it's not empty
        // --> add class .active in the prev img and dot
        currentImg.prev("img").addClass("active");
        currentDot.prev(".dot").addClass("active");
    } else {
        // prev.next() it's empty
        // --> add class .active in the last img and dot
        $(".carousel > img:last-of-type").addClass("active");
        $(".carousel > .dots > .dot:last-of-type").addClass("active");
    }
};

// move to index --> MOVE WITH DOTS
function moveToClick() {
    // VAR ASSIGMENT current img and dot
    var currentImg = $("img.active");
    var currentDot = $(".dot.active");
    // VAR ASSIGNMENT clicked dot + index
    var clickedDot = $(this);
    var isActive = clickedDot.hasClass("active"); // return "true" if it's already active
    var clickedIndex = clickedDot.index();
    // VAR ASSIGNMENT img associate with clicked dot
    // var imgToActivate = $(".carousel > img:eq("+clickedIndex+")");
    var imgToActivate = $(".carousel > img").eq(clickedIndex);

    // if it's not active
    if (!isActive) {
        // remove active class from current img and dot
        currentImg.removeClass("active");
        currentDot.removeClass("active");
        // add active to clicked dot and associated-img
        clickedDot.addClass("active");
        imgToActivate.addClass("active");
    }
};

// move to index
function carouselActIndex(Index) {
    // VAR ASSIGMENT all img and dot
    var allImg = $(".carousel > img");
    var allDot = $(".carousel .dot");
    // VAR ASSIGNMENT dot+index and img+index
    var dotToActivate = $(".carousel .dot:eq("+Index+")");
    var imgToActivate = $(".carousel > img:eq("+Index+")");

    // remove active class from all img and dot
    allImg.removeClass("active");
    allDot.removeClass("active");

    // add active class img-with-index and dot-with-index
    dotToActivate.addClass("active");
    imgToActivate.addClass("active");
};
