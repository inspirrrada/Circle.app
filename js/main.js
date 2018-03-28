// MAIN MENU
var isMenuOpen = false;
$("#menu img").click(function(e) {
    var idClick = e.target.id;
    if (isMenuOpen === true && idClick === "menu-exit") {
        $("#menu-items").fadeTo(1500, 0);
        $("#menu-img").delay(1000).fadeTo(1000, 1);
        $("#contacts-block").slideUp(1000);
        isMenuOpen = false;
    } else {
        $("#menu-img").fadeTo(1000, 0);
        $("#menu-items").delay(500).fadeTo(1500, 1);
        isMenuOpen = true;
    }
});


//CONTACTS
$("#social-phone").click(function() {
    $("#contacts-block").slideToggle(1000);
});


//COURSES BLOCK - appearing
var i = 1;
var isFormOpen = false;
var isListOpen = false;
var topDown;
var topUp;

$(".ticket-dream-active").click(function () {
    // $("#courses-choice").toggle();
    // $("#user-info").toggle();

    i++;

    if (isFormOpen === false) {
        $("#courses-choice").show();
        $("#user-info").show();
        isFormOpen = true;
    }   else {
        $("#courses-choice").hide();
        $("#user-info").hide();
        isFormOpen = false;

        $("#courses-list").hide();
        $("#courses-description").hide();
        // $("#user-info").css("top", topDown);
        // isListOpen = true;
    }

});


//COURSES CHOICE - adaptive position
var coursesInfoBottom = ( $(window).height() * 0.67 );

$("#courses-info").css("bottom", coursesInfoBottom);
console.log($(window).height());

var userInfoBottom = $("#courses-info").position().top + $("#courses-info").height();
$("#user-info").css("top", userInfoBottom);


//COURSES LIST - appearing/disappearing
$("#courses-choice").click(function () {
    $("#courses-description").hide();

    if ($(window).width() >= "1400") {
        topDown = $("#user-info").position().top + $("#courses-list").height() + 70;
        topUp = $("#user-info").position().top - $("#courses-list").height() - 70;
    } else if ( $(window).width() >= "1100" && $(window).width() < "1400" ) {
        topDown = $("#user-info").position().top + $("#courses-list").height() + 40;
        topUp = $("#user-info").position().top - $("#courses-list").height() - 40;
    } else {
        topDown = $("#user-info").position().top + $("#courses-list").height() + 35;
        topUp = $("#user-info").position().top - $("#courses-list").height() - 35;
    }

    console.log("topDown: " + topDown);
    console.log("topUp: " + topUp);

    if (isListOpen === true) {
        $("#courses-list").hide();
        $("#user-info").css("top", topUp);
        isListOpen = false;
    } else {
        $("#courses-list").show();
        $("#user-info").css("top", topDown);
        isListOpen = true;
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


$(".wrapper").parallax({imageSrc: "../img/background-2.jpg"});

//DIALOGUE
/*var text1 = "Вітаю!"; // Ваш текст
var delay = 100; // Скорость печатания
var elem1 = $("#comment-1");
var elem2 = $("#comment-2") // id элемента для вывода результата*/

/*var print_text1 = function(text1, elem1, delay){
    if(text1.length > 0) {
        elem1.append(text1[0]);
        setTimeout(
            function(){
                print_text1(text1.slice(1), elem1, delay);
            }, delay
        );
    } else {
        setTimeout( elem1.hide(), 7000 );
        text1 = "Привіт! Як сам?";
        setTimeout( elem2.show(), 8000 );
        setTimeout( print_text2(text1, elem2, delay), 15000 );
        // text2 = "Як там навчання?";
        // setTimeout( print_text2(text2, elem2, delay), 20000 );
    }
}*/

/*var text = ""; // Ваш текст
var delay = 100; // Скорость печатания
var elem1 = $("#comment-1");
var elem2 = $("#comment-2") // id элемента для вывода результата


var print_text = function(text, elem, delay){
    if(text.length > 0) {
        elem.append(text[0]);
        setTimeout(
            function(){
                print_text(text.slice(1), elem, delay);
            }, delay
        );
    }
};

var text1 = "Вітаю!";
var text2 = "Привіт! Як сам?";
var text3 = "Дякую. Все добре.";
var text4 = "Як там навчання?";
var text5 = "Розібрався.";
var text6 = "Що порадиш?";
var text7 = "Спочатку HTML, CSS.";
var text8 = "Чому саме?";
var text9 = "Це дасть базу для пізнання інших мов.";
var text10 = "Дякую.";

var dialogue = [
    print_text(text1, elem1, delay),
    print_text(text2, elem2, delay),
    print_text(text3, elem1, delay),
    print_text(text4, elem2, delay),
    print_text(text5, elem1, delay),
    print_text(text6, elem2, delay),
    print_text(text7, elem1, delay),
    print_text(text8, elem2, delay),
    print_text(text9, elem1, delay),
    print_text(text10, elem2, delay)
];
console.log(dialogue);

var delayDialogue = 1000;
for (var i = 0; i < dialogue.length; i++) {
    delayDialogue += 1000;
    setTimeout(dialogue[i], delayDialogue);
    if (i % 2 === 0) {
        elem2.hide();
        elem1.show();
    } else {
        elem1.hide();
        elem2.show();
    }
    console.log(dialogue[i]);
};*/












