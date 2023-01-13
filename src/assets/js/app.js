function showOrHideMenu(x) {
    $(x).toggleClass("change");

    const menuDrawer = $("header");
    if (menuDrawer.is(":visible")) {
        menuDrawer.fadeOut("fast");
    } else {
        menuDrawer.fadeIn("fast");
    }

}

ScrollReveal().reveal(".cards-row .col")