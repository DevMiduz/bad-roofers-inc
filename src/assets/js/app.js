function showOrHideMenu(x) {
    $(x).toggleClass("change");

    const menuDrawer = $("header");
    if (menuDrawer.is(":visible")) {
        menuDrawer.fadeOut("fast");
        $("html").css("overflow", "auto");
    } else {
        menuDrawer.fadeIn("fast");
        $("html").css("overflow", "hidden");
    }

}

ScrollReveal().reveal(".cards-row .col")