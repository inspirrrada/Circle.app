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


//COURSES BLOCK - appearing

$(".ticket-dream-active").click(function () {
    $("#courses-choice").toggle();
    $("#user-info").toggle();

});

// if ( $("#courses-choice").hide() ) {
//     $("#courses-list").hide();
// }


//COURSES CHOICE - adaptive position
var coursesInfoBottom = ( $(window).height() * 0.67 );

$("#courses-info").css("bottom", coursesInfoBottom);
console.log($(window).height());


var userInfoBottom = $("#courses-info").position().top + $("#courses-info").height();
$("#user-info").css("top", userInfoBottom);

//COURSES LIST - appearing/disappearing
var k = 1;

$("#courses-choice").click(function () {
    $("#courses-list").toggle();
    $("#courses-description").hide();

    k++;

    if ($(window).width() >= "1400") {
        var topDown = $("#user-info").position().top + $("#courses-list").height() + 70;
        var topUp = $("#user-info").position().top - $("#courses-list").height() - 70;
    } else if ( $(window).width() >= "1100" && $(window).width() < "1400" ) {
        var topDown = $("#user-info").position().top + $("#courses-list").height() + 40;
        var topUp = $("#user-info").position().top - $("#courses-list").height() - 40;
    } else {
        var topDown = $("#user-info").position().top + $("#courses-list").height() + 35;
        var topUp = $("#user-info").position().top - $("#courses-list").height() - 35;
    }

    console.log("topDown: " + topDown);
    console.log("topUp: " + topUp);

    if (k % 2 == 0) {
        $("#user-info").css("top", topDown);
    } else {
        $("#user-info").css("top", topUp);
    }
});

//COURSES DESCRIPTION - appearing/disappearing
$("ul li").click(function () {

    if ($(window).width() < "400") {
        $("#courses-description").hide();
    } else {
        $("#courses-description").fadeOut();
        $("#courses-description").fadeIn();
    }
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


