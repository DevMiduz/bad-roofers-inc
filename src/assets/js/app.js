function showOrHideMenu(x) {
    $(x).toggleClass("change");

    const menuDrawer = $(".main-header");
    if ($(x).hasClass("change")) {
        $("html").css("overflow", "hidden");
        menuDrawer.fadeIn("fast");
    } else {
        $("html").css("overflow", "auto");
        menuDrawer.fadeOut("fast");

    }

}

ScrollReveal().reveal(".cards-row .col");
ScrollReveal().reveal(".image-card")