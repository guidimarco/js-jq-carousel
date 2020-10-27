$("document").ready(function() {

    // CAROUSEL MOOVER
    // button for moving next
    $(".next").click(function() {
        // current img assignment
        var currentImg = $("img.active");
        // remove class .active in the current img
        currentImg.removeClass("active");
        if (currentImg.next("img").length) {
            // current.next() it's not empty
            // --> add class .active in the next
            currentImg.next("img").addClass("active");
        } else {
            // current.next() it's empty
            // --> add class .active in the first
            $(".carousel > img:first-of-type").addClass("active");
        }
    });
    // button for moving prev
    $(".prev").click(function() {
        // current img assignment
        var currentImg = $("img.active");
        // remove class .active in the current img
        currentImg.removeClass("active");
        if (currentImg.prev("img").length) {
            // prev.next() it's not empty
            // --> add class .active in the prev
            currentImg.prev("img").addClass("active");
        } else {
            // prev.next() it's empty
            // --> add class .active in the last
            $(".carousel > img:last-of-type").addClass("active");
        }
    });
});
