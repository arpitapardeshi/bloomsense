const flowers = {

    January: {
        name: "Carnation",
        image: "carnation.jpg.jpeg",
        meaning: "Love • Admiration • Fascination • Connection",
        personality: "Just like carnations thrive in a garden and enhance the beauty of their surroundings, those born in January have a natural ability to bring people together.",
        symbolism: "Carnations have traditionally been associated with love, admiration and fascination.",
        message: "You bring people together and make the world around you more beautiful."
    },

    February: {
        name: "Violet",
        image: "violet.jpg.jpeg",
        meaning: "Modesty • Faithfulness • Everlasting Love • Innocence",
        personality: "Those born in February have a unique charm and charisma. Their presence inspires admiration, while they carry themselves with confidence and humility.",
        symbolism: "Violets traditionally symbolize modesty, faithfulness, everlasting love, innocence and remembrance.",
        message: "Your quiet charm leaves a lasting impression."
    },

    March: {
        name: "Daffodil",
        image: "daffodil.jpg.jpeg",
        meaning: "Hope • New Beginnings • Happiness • Good Fortune",
        personality: "Like the daffodil welcoming spring, those born in March often brighten the mood of others and bring a feeling of hope.",
        symbolism: "Daffodils are traditionally associated with rebirth, new beginnings, hope and good fortune.",
        message: "You bring the feeling of a new beginning wherever you go."
    },

    April: {
        name: "Daisy",
        image: "daisy.jpg.jpeg",
        meaning: "Innocence • Purity • True Love • Friendship",
        personality: "Those born in April are associated with a genuine and warm nature. Their openness and sincerity make people feel comfortable around them.",
        symbolism: "Daisies traditionally represent innocence, purity and true love.",
        message: "Your sincerity makes people feel safe, seen and understood."
    },

    May: {
        name: "Lily of the Valley",
        image: "lilyofthevalley.jpg.jpeg",
        meaning: "Happiness • Renewal • Grace • Good Luck",
        personality: "Like the delicate Lily of the Valley, those born in May have a graceful presence that naturally captivates others.",
        symbolism: "Lily of the Valley is traditionally associated with happiness, renewal and good luck.",
        message: "Your gentle presence makes ordinary moments feel special."
    },

    June: {
        name: "Rose",
        image: "rose.jpg.jpeg",
        meaning: "Love • Beauty • Affection • Admiration",
        personality: "Like the rose bringing calm beauty to a garden, those born in June often bring a calming and comforting presence to others.",
        symbolism: "Roses traditionally symbolize love, beauty and affection.",
        message: "You bring warmth, calm and a beauty people remember."
    },

    July: {
        name: "Water Lily",
        image: "waterlily.jpg.jpeg",
        meaning: "Purity • Innocence • Joy • Rebirth • Wisdom",
        personality: "Like the water lily rising beautifully above the water, those born in July have a natural affinity for beauty and elegance.",
        symbolism: "Water lilies can represent purity, innocence, joy, friendship, wisdom and rebirth.",
        message: "Like a flower rising from the water, your beauty comes with depth."
    },

    August: {
        name: "Poppy",
        image: "poppy.jpg.jpeg",
        meaning: "Remembrance • Strength • Confidence • Passion",
        personality: "Like the poppy standing tall, those born in August are associated with confidence, leadership and a strong passion for what they believe in.",
        symbolism: "Poppies are strongly associated with remembrance and honoring loved ones.",
        message: "You stand tall, follow your passion and inspire others."
    },

    September: {
        name: "Aster",
        image: "aster.jpg.jpeg",
        meaning: "Love • Wisdom • Patience • Faith • Friendship",
        personality: "Those born in September are associated with patience, wisdom and thoughtfulness, combining a gentle nature with inner strength.",
        symbolism: "Asters traditionally symbolize love, wisdom, patience, beauty, faith and friendship.",
        message: "Your patience and wisdom make you someone people can rely on."
    },

    October: {
        name: "Marigold",
        image: "marigold.jpg.jpeg",
        meaning: "Warmth • Positivity • Friendship • Creativity",
        personality: "Like the marigold radiating brilliant shades of orange and yellow, those born in October bring warmth and positivity wherever they go.",
        symbolism: "Marigolds are strongly connected with friendship, celebration and cultural traditions.",
        message: "You carry your own sunshine and bring warmth wherever you go."
    },

    November: {
        name: "Chrysanthemum",
        image: "chrysanthemum.jpg.jpeg",
        meaning: "Loyalty • Friendship • Joy • Longevity",
        personality: "Those born in November can have many sides to their personality, combining loyalty and warmth with a strong and dependable nature.",
        symbolism: "Chrysanthemums can symbolize loyalty, friendship, joy and longevity.",
        message: "Your loyalty runs deep, and the people you love can count on you."
    },

    December: {
        name: "Narcissus",
        image: "narcissus.jpg.jpeg",
        meaning: "Love • Devotion • Hope • Uniqueness",
        personality: "Like the distinctive narcissus, those born in December are associated with individuality, confidence and a memorable presence.",
        symbolism: "In Victorian flower language, giving a narcissus could express the message 'you are the only one.'",
        message: "You have a presence that is uniquely your own."
    }

};


/* =================================
   SELECT BIRTH MONTH
================================= */

$("#month").change(function () {

    let month = $(this).val();

    if (month === "") {
        return;
    }

    let flower = flowers[month];


    /* Show month */

    $("#birthMonth").text(
        month + " Birth Flower"
    );


    /* Show flower name */

    $("#flowerName").text(
        flower.name
    );


    /* Show meaning */

    $("#flowerMeaning").text(
        flower.meaning
    );


    /* Show personality */

    $("#personality").text(
        flower.personality
    );


    /* Show symbolism */

    $("#symbolism").text(
        flower.symbolism
    );


    /* Show BloomSense message */

    $("#bloomMessage").text(
        flower.message
    );


    /* Show flower image */

    $("#flowerImage")
        .off("error")
        .attr("src", flower.image)
        .attr("alt", flower.name);


    /* jQuery fade out */

    $("#monthScreen").fadeOut(500, function () {

        $("#flowerResult").fadeIn(500);

    });

});


/* =================================
   BUY THIS FLOWER
================================= */

function showCheckout() {

    let flowerName = $("#flowerName").text();

    $("#checkoutFlower").text(
        flowerName
    );


    $("#flowerResult").fadeOut(500, function () {

        $("#checkout").fadeIn(500);

    });

}


/* =================================
   CHECKOUT
================================= */

$("#checkoutForm").submit(function (event) {

    event.preventDefault();


    let name =
        $("#customerName").val().trim();

    let email =
        $("#customerEmail").val().trim();

    let address =
        $("#customerAddress").val().trim();

    let quantity =
        $("#quantity").val();

    let payment =
        $("#payment").val();


    /* Check empty fields */

    if (
        name === "" ||
        email === "" ||
        address === "" ||
        quantity === "" ||
        payment === ""
    ) {

        alert(
            "Please fill in all the details."
        );

        return;

    }


    /* Check email format */

    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        alert(
            "Please enter a valid email address."
        );

        return;

    }


    /* Show success message */

    let flowerName =
        $("#flowerName").text();


    $("#successFlower").text(
        "Your " +
        flowerName +
        " has been ordered successfully."
    );


    $("#checkout").fadeOut(500, function () {

        $("#success").fadeIn(500);

    });

});