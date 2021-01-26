$(document).ready(function() {
    //navbar toggle button
    $("#toggle-button").click(() => {
            $("div.navbar-links").toggleClass("active");
    });

    $("img-link").click(() => {
        $("project-img").toggleClass("active");
    });

    $(".nav-link-wrapper").click(() => {
        $("div.navbar-links").toggleClass("active");
    });
});

