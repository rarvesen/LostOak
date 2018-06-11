function WriteContent(page) {
    WriteHeader();
    WriteMenu(page);
    WriteBody();
}

function WriteMenu(page) {
    var menuConcerts = page == "concerts" ? "<span class='menuTextSelected'>concerts</span>" :  "<span class='menuText'><a href='index.html'>concerts</a></span>";
    var menuBands = page == "bands" ? "<span class='menuTextSelected'>events</span>" :  "<span class='menuText'><a href='eventlist.html'>events</a></span>";
    var menuSports = page == "sports" ? "<span class='menuTextSelected'>sports</span>" :  "<span class='menuText'><a href='sports.html'>sports</a></span>";
    var menuOther = page == "other" ? "<span class='menuTextSelected'>other</span>" :  "<span class='menuText'><a href='other.html'>other</a></span>";

    $("#snippetMenu").append("<span class='mainMenu'>" +
        menuConcerts + menuSports + menuOther + menuBands +
        "</span>");
}

function WriteHeader() {
    $("#snippetHeader").append(" \
        <span class='title'>Lost Oak Photography</span><br /> \
        <h1 class='subTitle'>concert, sports, nature, and event photography, austin, san antonio, texas</h1><br /><br /> \
        ");
}

function WriteBody() {
    // ralph.arvesen@gmail.com
    //'&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#114;&#97;&#108;&#112;&#104;&#46;&#97;&#114;&#118;&#101;&#115;&#101;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;'>&#114;&#97;&#108;&#112;&#104;&#46;&#97;&#114;&#118;&#101;&#115;&#101;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
    $("#snippetMain").append(" \
    <img class='cameraImage' src='images/camera.png' alt='camera' /> \
    <h2 class='mainText'> \
        Capturing live music, sports, nature, and other events in the Austin and San Antonio, Texas areas. \
        Photos have been published on websites and magazines such as Rolling Stone, Rockstar, Performer, National Rock Review, MSN, Popular Science, \
        Smithsonian, Country Living, Texas Monthly, Texas Standard, Vox, Texas Sports Monthly, Texas Review, and other various newspapers, news, and musician sites. \
        <p></p> \
        Contact:<br /> \
        Ralph Arvesen<br /> \
        <a href='&#x6D;&#x61;&#x69;&#x6C;&#x74;&#x6F;&#x3A;&#x72;&#x61;&#x6C;&#x70;&#x68;&#x40;&#x6C;&#x6F;&#x73;&#x74;&#x6F;&#x61;&#x6B;&#x2E;&#x63;&#x6F;&#x6D;'>&#x72;&#x61;&#x6C;&#x70;&#x68;&#x40;&#x6C;&#x6F;&#x73;&#x74;&#x6F;&#x61;&#x6B;&#x2E;&#x63;&#x6F;&#x6D;</a> \
        <p></p> \
        <div class='smContainer'> \
            <a href='https://www.instagram.com/ralpharvesen' target='_parent'><img src='images/social-instagram.png' title='instagram' class='smImages' /></a> \
            <a href='https://www.facebook.com/ralpharvesen' target='_parent'><img src='images/social-facebook.png' title='facebook' class='smImages' /></a> \
            <a href='https://www.twitter.com/ralpharvesen' target='_parent'><img src='images/social-twitter.png' title='twitter' class='smImages' /></a> \
            <a href='https://www.flickr.com/photos/rarvesen/sets' target='_parent'><img src='images/social-flickr.png' title='flickr' class='smImages' /></a> \
            <a href='&#x6D;&#x61;&#x69;&#x6C;&#x74;&#x6F;&#x3A;&#x72;&#x61;&#x6C;&#x70;&#x68;&#x40;&#x6C;&#x6F;&#x73;&#x74;&#x6F;&#x61;&#x6B;&#x2E;&#x63;&#x6F;&#x6D;' ' target='_parent'><img src='images/social-mail.png' title='email' class='smImages' /></a> \
        </div> \
    </h2> \
    <div class='email'></div> \
    ");
}

// other magazines / sites:
// Glide