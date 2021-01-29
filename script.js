$(document).ready(function() {
    //navbar toggle button
    myFunction = (x) => {
        x.classList.toggle("change");
        $("div.navbar-links").toggleClass("active");
    }

    $("img-link").click(() => {
        $("project-img").toggleClass("active");
    });

    // When the user clicks on home link, scroll to the top of the document
    topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }
});

