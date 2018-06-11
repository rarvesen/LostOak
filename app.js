$(document).ready(function () {
    // detect apple mobile broswers, break out of forwarding frame,
    // this can be removed if domain forwarding is not used
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (agentID) {
    if (self != top) {
        if (document.images)
            top.location.replace(window.location.href);
        else
            top.location.href = window.location.href;
        }
    }

    //console.log("number of photos - " + photoListLeft.length + ", " + photoListRight.length);
    var maxItems = Math.max(photoListLeft.length, photoListRight.length);

    for (var i = 0; i < maxItems; i++) {
        if (i < photoListLeft.length) {
            $("#photosLeft").append("<img class='thumbnail' src='images/photoHolder.png' data-src='" + photoListLeft[i][0] +
                "' alt='" + photoListLeft[i][1] + "' title='" + photoListLeft[i][1] + "' />");
        }

        if (i < photoListRight.length) {
            $("#photosRight").append("<img class='thumbnail' src='images/photoHolder.png' data-src='" + photoListRight[i][0] + 
                "' alt='" + photoListRight[i][1] + "' title='" + photoListRight[i][1] + "' />");
        }

        UpdatePhotos();
    }
});

$(window).scroll(function () {
    UpdatePhotos();
});


function UpdatePhotos() {
    // calculate the index into the image arrays,
    // change the avgImageHeight number, lower will load images sooner, higher will delay loading images
    // before had 150 and all images were loaded when only scrolled half way
    // don't want to be exact (only load image when comes into view), want to preload images that are not visible
    var avgImageHeight = 250;
    var position = $(window).scrollTop();
    var index = Math.floor((position + 400) / avgImageHeight);

    //console.log("update photos - " + position + ", " + index);

    if (index >= 0) {
        ShowPhoto($("#photosLeft"), index);
        ShowPhoto($("#photosRight"), index);
    }
}

function ShowPhoto(container, photoIndex) {
    for (var i = 0; i < container.children().length && i <= photoIndex; i++)
    {
        var e = container.children()[i];
        if (e != null) {
            var current = e.getAttribute("data-src");
            if (current != "") {
                var source = e.getAttribute("data-src");
                e.setAttribute("src", source);
                e.setAttribute("data-src", "");
            }
        }
    }
}



