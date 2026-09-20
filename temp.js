$(document).ready(function () {

    let selectedRecipient = "";
    let selectedMessage = "";
    let selectedTraits = [];

    let urlParams = new URLSearchParams(window.location.search);
    let flowerMode = urlParams.get("mode");

    $(".question-box").hide();

    if (flowerMode === "traits") {
        $("#t1").show();
    } else {
        $("#m1").show();
    }


    $(".recipient-options .option, .trait-recipient .option").click(function () {

        $(this).siblings(".option").removeClass("selected");
        $(this).addClass("selected");

    });


    $(".message-options .option").click(function () {

        $(this).siblings(".option").removeClass("selected");
        $(this).addClass("selected");

    });


    $("#mNext1").click(function () {

        let selected = $(".recipient-options .selected");

        if (selected.length === 0) {
            alert("Please select who you are buying this flower for.");
            return;
        }

        selectedRecipient = selected.data("value");

        $("#m1").hide();
        $("#m2").fadeIn(300);

    });


    $("#finishMessage").click(function () {

        let selected = $(".message-options .selected");

        if (selected.length === 0) {
            alert("Please select the message you want to convey.");
            return;
        }

        selectedMessage = selected.data("value");

        let answers = {

            mode: "message",
            receiver: selectedRecipient,
            message: selectedMessage,
            traits: [],
            customMessage: ""

        };

        localStorage.setItem(
            "bloomSenseAnswers",
            JSON.stringify(answers)
        );

        localStorage.setItem("flowerMode", "message");
        localStorage.setItem("recipient", selectedRecipient);
        localStorage.setItem("message", selectedMessage);
        localStorage.removeItem("customMessage");

        window.location.href = "matches.html";

    });


    $("#tNext1").click(function () {

        let selected = $(".trait-recipient .selected");

        if (selected.length === 0) {
            alert("Please select who you are buying this flower for.");
            return;
        }

        selectedRecipient = selected.data("value");

        $("#t1").hide();
        $("#t2").fadeIn(300);

    });


    $(".trait-options .option").click(function () {

        let button = $(this);
        let trait = button.text().trim();

        if (button.hasClass("selected")) {

            button.removeClass("selected");

            selectedTraits = selectedTraits.filter(
                item => item !== trait
            );

            return;
        }

        if (selectedTraits.length >= 3) {

            alert("Please select up to 3 traits.");
            return;

        }

        button.addClass("selected");
        selectedTraits.push(trait);

    });


    $("#finishTraits").click(function () {

        if (selectedTraits.length === 0) {

            alert("Please select at least one personality trait.");
            return;

        }

        let answers = {

            mode: "traits",
            receiver: selectedRecipient,
            message: "",
            traits: selectedTraits,
            customMessage: ""

        };

        localStorage.setItem(
            "bloomSenseAnswers",
            JSON.stringify(answers)
        );

        localStorage.setItem("flowerMode", "traits");
        localStorage.setItem("recipient", selectedRecipient);

        localStorage.setItem(
            "traits",
            JSON.stringify(selectedTraits)
        );

        window.location.href = "matches.html";

    });

});