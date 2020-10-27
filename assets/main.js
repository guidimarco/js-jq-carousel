$("document").ready(function() {

    // CAROUSEL MOOVER
    // button for moving next
    $(".next").click(function() {
        // VAR ASSIGNMENT: IMG AND DOT
        var currentImg = $("img.active");
        var currentDot = $(".dot.active");
        // remove class .active in the current img and in the current dot
        currentImg.removeClass("active");
        currentDot.removeClass("active");
        if (currentImg.next("img").length) {
            // current.next() it's not empty
            // --> add class .active in the next img and dot
            currentImg.next("img").addClass("active");
            currentDot.next(".dot").addClass("active");
        } else {
            // current.next() it's empty
            // --> add class .active in the first img and dot
            $(".carousel > img:first-of-type").addClass("active");
            $(".carousel > .dots > .dot:first-of-type").addClass("active");
        }
    });
    // button for moving prev
    $(".prev").click(function() {
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
    });
});
