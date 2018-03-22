// MAIN MENU
var i = 1;
$("#menu").click(function(e) {
    i++;
    var idClick = e.target.id;
    if (i % 2 !== 0 && idClick === "menu-exit") {
        $("#menu-items").fadeTo(1500, 0);
        $("#menu-img").delay(1000).fadeTo(1000, 1);
        $("#contacts-block").slideUp(1000);
    } else {
        $("#menu-img").fadeTo(1000, 0);
        $("#menu-items").delay(500).fadeTo(1500, 1);
    }
});

/*var i = 1;
$("#menu").click(function() {
    i++;
    if (i % 2 == 0) {
        $("#menu-img").fadeTo(1000, 0);
        $("#menu-items").delay(500).fadeTo(1500, 1);

    } else {
        $("#menu-items").fadeTo(1500, 0);
        $("#menu-img").delay(1000).fadeTo(1000, 1);
    }
})*/


//CONTACTS
$("#social-phone").click(function() {
    $("#contacts-block").slideToggle(1000);
});


//COURSES BLOCK
$(".ticket-dream-active").click(function () {
    $("#courses-choice").toggle();
    $("#user-info").toggle();
});


var k = 1;
$("#courses-choice").click(function () {
    $("#courses-list").toggle();
    $("#courses-description").hide();
    k++;
    if (k % 2 == 0) {
        $("#user-info").css("top", "-100%");
    } else {
        $("#user-info").css("top", "-200%");
    }

});

$("ul li").click(function () {
    $("#courses-description").fadeOut();
    $("#courses-description").fadeIn();
});

$("#close").click(function () {
    $("#courses-description").hide();
})



// BLINKING OF TICKET DREAM
setInterval(changeTicketLight(),500);

function changeTicketLight () {
    $("#ticket-dream-blink").toggle();
};

setInterval(changeTicketLight,500);


// PASSENGERS ANIMATION


