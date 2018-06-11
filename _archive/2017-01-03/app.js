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

    var maxItems = Math.max(photoListLeft.length, photoListRight.length);

    for (var i = 0; i < maxItems; i++) {
        if (i < photoListLeft.length) {
            $("#photosLeft").append("<img class='thumbnail' src='images/photoHolder.png' data-src='" + photoListLeft[i] + "' />");
        }

        if (i < photoListRight.length) {
            $("#photosRight").append("<img class='thumbnail' src='images/photoHolder.png' data-src='" + photoListRight[i] + "' />");
        }

        UpdatePhotos();
    }
});

$(window).scroll(function () {
    UpdatePhotos();
});

function UpdatePhotos() {
    var position = $(window).scrollTop();
    var index = Math.floor((position + 400) / 150);
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



