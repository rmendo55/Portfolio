$(document).ready(function() {
    //navbar toggle button
    myFunction = (x) => {
        x.classList.toggle("change");
        $("div.navbar-links").toggleClass("active");
    }

    $("img-link").click(() => {
        $("project-img").toggleClass("active");
    });

    $(".nav-link-wrapper").click(() => {
        $("div.navbar-links").toggleClass("active");
    });
});

