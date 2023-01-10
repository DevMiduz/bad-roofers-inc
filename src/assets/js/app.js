function showOrHideMenu(x) {
    $(x).toggleClass("change");

    const menuDrawer = $("#left-content");
    if (menuDrawer.is(":visible")) {
        menuDrawer.fadeOut("fast");
    } else {
        menuDrawer.fadeIn("fast");
    }

}