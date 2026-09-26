$(function () {

const flowers = [

{name:"Carnation",aliases:["carnation","carnations"],image:"carnation.jpg.jpeg",birthMonth:"January",meaning:"Love • Admiration • Fascination • Connection",personality:"Just like carnations thrive in a garden and enhance the beauty of their surroundings, those born in January have a natural ability to bring people together.",symbolism:"Carnations have traditionally been associated with love, admiration and fascination.",message:"You bring people together and make the world around you more beautiful."},

{name:"Violet",aliases:["violet","violets"],image:"violet.jpg",birthMonth:"February",meaning:"Modesty • Faithfulness • Everlasting Love • Innocence",personality:"Those born in February have a unique charm and charisma. Their presence inspires admiration, while they carry themselves with confidence and humility.",symbolism:"Violets traditionally symbolize modesty, faithfulness, everlasting love, innocence and remembrance.",message:"Your quiet charm leaves a lasting impression."},

{name:"Daffodil",aliases:["daffodil","daffodils"],image:"daffodil.jpg",birthMonth:"March",meaning:"Hope • New Beginnings • Happiness • Good Fortune",personality:"Like the daffodil welcoming spring, those born in March often brighten the mood of others and bring a feeling of hope.",symbolism:"Daffodils are traditionally associated with rebirth, new beginnings, hope and good fortune.",message:"You bring the feeling of a new beginning wherever you go."},

{name:"Daisy",aliases:["daisy","daisies"],image:"daisy.jpg",birthMonth:"April",meaning:"Innocence • Purity • True Love • Friendship",personality:"Those born in April are associated with a genuine and warm nature. Their openness and sincerity make people feel comfortable around them.",symbolism:"Daisies traditionally represent innocence, purity and true love.",message:"Your sincerity makes people feel safe, seen and understood."},

{name:"Lily of the Valley",aliases:["lily of the valley","lilyofthevalley","lilies of the valley"],image:"lilyofthevalley.jpg",birthMonth:"May",meaning:"Happiness • Renewal • Grace • Good Luck",personality:"Like the delicate Lily of the Valley, those born in May have a graceful presence that naturally captivates others.",symbolism:"Lily of the Valley is traditionally associated with happiness, renewal and good luck.",message:"Your gentle presence makes ordinary moments feel special."},

{name:"Rose",aliases:["rose","roses"],image:"rose.jpg",birthMonth:"June",meaning:"Love • Beauty • Affection • Admiration",personality:"Like the rose bringing calm beauty to a garden, those born in June often bring a calming and comforting presence to others.",symbolism:"Roses traditionally symbolize love, beauty and affection.",message:"You bring warmth, calm and a beauty people remember."},

{name:"Water Lily",aliases:["water lily","waterlily","water lilies"],image:"waterlily.jpg.jpeg",birthMonth:"July",meaning:"Purity • Innocence • Joy • Rebirth • Wisdom",personality:"Like the water lily rising beautifully above the water, those born in July have a natural affinity for beauty and elegance.",symbolism:"Water lilies can represent purity, innocence, joy, friendship, wisdom and rebirth.",message:"Like a flower rising from the water, your beauty comes with depth."},

{name:"Poppy",aliases:["poppy","poppies"],image:"poppy.jpg.jpeg",birthMonth:"August",meaning:"Remembrance • Strength • Confidence • Passion",personality:"Like the poppy standing tall, those born in August are associated with confidence, leadership and a strong passion for what they believe in.",symbolism:"Poppies are strongly associated with remembrance and honoring loved ones.",message:"You stand tall, follow your passion and inspire others."},

{name:"Aster",aliases:["aster","asters"],image:"aster.jpg",birthMonth:"September",meaning:"Love • Wisdom • Patience • Faith • Friendship",personality:"Those born in September are associated with patience, wisdom and thoughtfulness, combining a gentle nature with inner strength.",symbolism:"Asters traditionally symbolize love, wisdom, patience, beauty, faith and friendship.",message:"Your patience and wisdom make you someone people can rely on."},

{name:"Marigold",aliases:["marigold","marigolds"],image:"marigold.jpg.jpeg",birthMonth:"October",meaning:"Warmth • Positivity • Friendship • Creativity",personality:"Like the marigold radiating brilliant shades of orange and yellow, those born in October bring warmth and positivity wherever they go.",symbolism:"Marigolds are strongly connected with friendship, celebration and cultural traditions.",message:"You carry your own sunshine and bring warmth wherever you go."},

{name:"Chrysanthemum",aliases:["chrysanthemum","chrysanthemums"],image:"chrysanthemum.jpg.jpeg",birthMonth:"November",meaning:"Loyalty • Friendship • Joy • Longevity",personality:"Those born in November can have many sides to their personality, combining loyalty and warmth with a strong and dependable nature.",symbolism:"Chrysanthemums can symbolize loyalty, friendship, joy and longevity.",message:"Your loyalty runs deep, and the people you love can count on you."},

{name:"Narcissus",aliases:["narcissus"],image:"narcissus.jpg.jpeg",birthMonth:"December",meaning:"Love • Devotion • Hope • Uniqueness",personality:"Like the distinctive narcissus, those born in December are associated with individuality, confidence and a memorable presence.",symbolism:"In Victorian flower language, giving a narcissus could express the message 'you are the only one.'",message:"You have a presence that is uniquely your own."},

{name:"Sunflower",aliases:["sunflower","sunflowers"],image:"sunflower.jpg",meaning:"Warmth, happiness, loyalty and positivity.",message:"You are the light I need.",traits:["Cheerful","Warm","Confident","Friendly","Fun","Adventurous"],messages:["Happy Birthday","Congratulations"]},

{name:"Dahlia",aliases:["dahlia","dahlias"],image:"dahlia.jpg",meaning:"Elegance, confidence, individuality and inner strength.",message:"You are remarkable and wonderfully unique.",traits:["Elegant","Sophisticated","Confident","Unique","Ambitious"],messages:["Happy Birthday","You Are Special to Me"]},

{name:"Baby's Breath",aliases:["baby's breath","babys breath","babysbreath"],image:"babysbreath.jpg",meaning:"Lasting love, gentleness and everlasting affection.",message:"My affection for you will always remain.",traits:["Gentle","Caring","Romantic","Calm","Kind","Thoughtful","Loyal","Warm"],messages:["I Love You","You Are Special to Me","I'm Always Here for You"]},

{name:"Forget-me-not",aliases:["forget-me-not","forget me not","forgetmenot"],image:"forgetmenot.jpg",meaning:"Remembrance, loyalty and lasting affection.",message:"Please don't forget me.",traits:["Loyal","Romantic","Thoughtful","Caring","Gentle","Dependable"],messages:["I Miss You","Don't Forget Me"]},

{name:"Hydrangea",aliases:["hydrangea","hydrangeas"],image:"hydrangea.jpg",meaning:"Gratitude, understanding and heartfelt appreciation.",message:"Thank you for understanding me.",traits:["Thoughtful","Caring","Kind","Gentle","Warm","Calm"],messages:["Thank You"]},

{name:"Pink Carnation",aliases:["pink carnation","pink carnations"],image:"pinkcarnation.jpg",meaning:"Remembrance, affection and gratitude.",message:"I will always remember and appreciate you.",traits:["Loyal","Thoughtful","Caring","Dependable","Gentle"],messages:["Thank You","I Miss You"]},

{name:"Rosemary",aliases:["rosemary"],image:"rosemary.jpg",meaning:"Remembrance, loyalty and devotion.",message:"I will remember you always.",traits:["Loyal","Dependable","Thoughtful","Calm","Caring","Gentle"],messages:["I Miss You"]},

{name:"Lily",aliases:["lily","lilies"],image:"lily.jpg",meaning:"True love, purity and elegance.",message:"You are precious to me, and my love for you is true.",traits:["Elegant","Sophisticated","Romantic","Gentle","Loyal","Calm"],messages:["I Love You","You Are Special to Me"]},

{name:"Red Rose",aliases:["red rose","red roses"],image:"redrose.jpg",meaning:"Love, romance and deep affection.",message:"I love you.",traits:["Romantic","Confident","Elegant","Sophisticated"],messages:["I Love You"]},

{name:"Pink Rose",aliases:["pink rose","pink roses"],image:"pinkrose.jpg",meaning:"Admiration, care and gentle affection.",message:"I admire you, and I'll always be there for you.",traits:["Gentle","Caring","Elegant","Romantic","Thoughtful","Warm"],messages:["Thank You","You Are Special to Me","I'm Always Here for You"]},

{name:"White Rose",aliases:["white rose","white roses"],image:"whiterose.jpg",meaning:"Innocence, purity, elegance and calmness.",message:"You are precious and pure.",traits:["Gentle","Elegant","Sophisticated","Calm","Kind"],messages:["Thank You","You Are Special to Me"]},

{name:"Orange Rose",aliases:["orange rose","orange roses"],image:"orangerose.jpg",meaning:"Confidence, excitement and enthusiasm.",message:"You inspire excitement and energy.",traits:["Confident","Adventurous","Fun","Unique","Cheerful"],messages:["Congratulations","Happy Birthday","You Are Special to Me"]},

{name:"Azalea",aliases:["azalea","azaleas"],image:"azalea.jpg",meaning:"Care, thoughtfulness and concern.",message:"Please take care of yourself.",traits:["Caring","Gentle","Thoughtful","Kind","Warm"],messages:["Get Well Soon","I'm Always Here for You"]},

{name:"Begonia",aliases:["begonia","begonias"],image:"begonia.jpg",meaning:"Remembrance and constant thoughts.",message:"You are always on my mind.",traits:["Thoughtful","Romantic","Caring","Loyal"],messages:["I Miss You","You Are Special to Me"]},

{name:"Holly",aliases:["holly"],image:"holly.jpg",meaning:"Good luck, happiness and protection.",message:"May good luck always be with you.",traits:["Cheerful","Kind","Warm","Confident","Unique"],messages:["Best of Luck","Congratulations","Happy Birthday"]},

{name:"Peach Blossom",aliases:["peach blossom","peach blossoms"],image:"peachblossom.jpg",meaning:"Charm, admiration and beauty.",message:"Your charm is truly special.",traits:["Elegant","Romantic","Confident","Unique","Sophisticated"],messages:["Happy Birthday","You Are Special to Me"]},

{name:"Snowdrop",aliases:["snowdrop","snowdrops"],image:"snowdrop.jpg",meaning:"Celebration, hope and happiness.",message:"Let us celebrate this beautiful moment.",traits:["Cheerful","Fun","Friendly","Warm","Gentle","Kind"],messages:["Congratulations","Happy Birthday"]},

{name:"Stephanotis",aliases:["stephanotis"],image:"stephanotis.jpg",meaning:"Lasting happiness, love and commitment.",message:"May you have lasting happiness and love.",traits:["Romantic","Elegant","Sophisticated","Loyal","Dependable"],messages:["I Love You","You Are Special to Me","Congratulations","Best of Luck"]},

{name:"Sweet Pea",aliases:["sweet pea","sweet peas"],image:"sweetpea.jpg",meaning:"Kindness, gratitude and gentle affection.",message:"Thank you for the lovely time. I wish you well.",traits:["Gentle","Kind","Thoughtful","Calm","Friendly","Caring"],messages:["Thank You","I'm Always Here for You"]},

{name:"Gerberas",aliases:["gerbera","gerberas"],image:"",meaning:"Joy & friendship"},
{name:"Bright Dahlias",aliases:["bright dahlia","bright dahlias"],image:"",meaning:"Strength & elegance"},
{name:"Yellow Roses",aliases:["yellow rose","yellow roses"],image:"",meaning:"Friendship & happiness"},
{name:"Freesias",aliases:["freesia","freesias"],image:"",meaning:"Friendship & innocence"},
{name:"Ranunculus",aliases:["ranunculus"],image:"",meaning:"Charm & attraction"},
{name:"Zinnias",aliases:["zinnia","zinnias"],image:"",meaning:"Lasting friendship"},
{name:"Cosmos",aliases:["cosmos"],image:"",meaning:"Peace & harmony"},
{name:"Peonies",aliases:["peony","peonies"],image:"",meaning:"Romance & prosperity"},
{name:"Orchids",aliases:["orchid","orchids"],image:"",meaning:"Luxury & admiration"},
{name:"Tulips",aliases:["tulip","tulips"],image:"",meaning:"Perfect love"},
{name:"Garden Roses",aliases:["garden rose","garden roses"],image:"",meaning:"Romantic love"},
{name:"Calla Lilies",aliases:["calla lily","calla lilies"],image:"",meaning:"Elegance & beauty"},
{name:"Alstroemeria",aliases:["alstroemeria"],image:"",meaning:"Devotion & friendship"},
{name:"Stargazer Lilies",aliases:["stargazer lily","stargazer lilies"],image:"",meaning:"Success & ambition"},
{name:"Birds of Paradise",aliases:["bird of paradise","birds of paradise"],image:"",meaning:"Freedom & celebration"},
{name:"Delphinium",aliases:["delphinium"],image:"",meaning:"New possibilities"},
{name:"Gladiolus",aliases:["gladiolus"],image:"",meaning:"Strength & victory"},
{name:"Anthuriums",aliases:["anthurium","anthuriums"],image:"",meaning:"Hospitality & happiness"},
{name:"Pink Lilies",aliases:["pink lily","pink lilies"],image:"",meaning:"Prosperity & affection"},
{name:"Irises",aliases:["iris","irises"],image:"",meaning:"Hope & courage"},
{name:"Protea",aliases:["protea"],image:"",meaning:"Transformation"},
{name:"White Lilies",aliases:["white lily","white lilies"],image:"",meaning:"Purity & renewal"},
{name:"Blue Hyacinths",aliases:["blue hyacinth","blue hyacinths"],image:"",meaning:"Sincerity & forgiveness"},
{name:"White Tulips",aliases:["white tulip","white tulips"],image:"",meaning:"Forgiveness & peace"},
{name:"Camellias",aliases:["camellia","camellias"],image:"",meaning:"Admiration & care"},
{name:"White Orchids",aliases:["white orchid","white orchids"],image:"",meaning:"Respect & elegance"},
{name:"Lisianthus",aliases:["lisianthus"],image:"",meaning:"Appreciation & calm"},
{name:"Peach Roses",aliases:["peach rose","peach roses"],image:"",meaning:"Gratitude & appreciation"},
{name:"Pink Tulips",aliases:["pink tulip","pink tulips"],image:"",meaning:"Care & affection"},
{name:"Campanula",aliases:["campanula"],image:"",meaning:"Gratitude"},
{name:"Chamomile",aliases:["chamomile"],image:"",meaning:"Calm & comfort"},
{name:"Snapdragons",aliases:["snapdragon","snapdragons"],image:"",meaning:"Strength"},
{name:"Yellow Tulips",aliases:["yellow tulip","yellow tulips"],image:"",meaning:"Cheerfulness"},
{name:"Mixed Roses",aliases:["mixed rose","mixed roses"],image:"",meaning:"Love & appreciation"},
{name:"Mixed Tulips",aliases:["mixed tulip","mixed tulips"],image:"",meaning:"Joy & freshness"},
{name:"Mixed Lilies",aliases:["mixed lily","mixed lilies"],image:"",meaning:"Grace & beauty"},
{name:"Wildflowers",aliases:["wildflower","wildflowers"],image:"",meaning:"Freedom & happiness"},
{name:"Pastel Bouquet",aliases:["pastel bouquet"],image:"",meaning:"Gentleness & care"},
{name:"Spring Mix",aliases:["spring mix"],image:"",meaning:"Fresh beginnings"},
{name:"Garden Mix",aliases:["garden mix"],image:"",meaning:"Natural beauty"},
{name:"Colorful Gerberas",aliases:["colorful gerbera","colorful gerberas"],image:"",meaning:"Happiness"},
{name:"Elegant Orchids",aliases:["elegant orchid","elegant orchids"],image:"",meaning:"Luxury"},
{name:"Classic Bouquet",aliases:["classic bouquet"],image:"",meaning:"Thoughtfulness"}

];


/* SEARCH */

function normalize(x) {
    return x.trim().toLowerCase().replace(/[’']/g,"").replace(/\s+/g," ");
}

function findFlower(input) {
    let x = normalize(input);

    return flowers.find(f =>
        normalize(f.name) === x ||
        f.aliases.some(a => normalize(a) === x)
    );
}


/* DISPLAY */

function addDetail(title,text) {
    $("#resultDetails").append(
        $("<div>").addClass("detail-block")
        .append($("<div>").addClass("detail-title").text(title))
        .append($("<div>").text(text))
    );
}


function showFlower(f) {

    $("#resultName").text(f.name);

    if (f.image) {
        $("#resultImage").attr({
            src:f.image,
            alt:f.name
        }).show();
    } else {
        $("#resultImage").hide();
    }


    let categories=[];

    if (f.birthMonth) categories.push("Birth Flower");
    if (f.meaning) categories.push("Flower Meaning");
    if (f.traits) categories.push("Personality Traits");
    if (f.message) categories.push("Message");

    $("#resultCategory").text(categories.join(" • "));


    $("#resultTags").empty();

    if (f.meaning) {
        f.meaning.split(/[•&,]/)
        .map(x=>x.trim())
        .filter(Boolean)
        .forEach(x =>
            $("<span>").text(x).appendTo("#resultTags")
        );
    }


    $("#resultDetails").empty();

    if (f.birthMonth)
        addDetail("Birth Flower",f.name+" is the birth flower of "+f.birthMonth+".");

    if (f.meaning)
        addDetail("Meaning",f.meaning);

    if (f.personality)
        addDetail("Personality",f.personality);

    if (f.symbolism)
        addDetail("Symbolism",f.symbolism);

    if (f.traits)
        addDetail("Traits",f.traits.join(" • "));

    if (f.messages)
        addDetail("Messages",f.messages.join(" • "));


    if (f.message)
        $("#resultMessage").text("“"+f.message+"”").show();
    else
        $("#resultMessage").hide().text("");


    $("#notFound").stop(true,true).fadeOut(300);

    $("#flowerResult")
        .stop(true,true)
        .fadeOut(400,function(){
            $(this).css("display","grid").hide().fadeIn(700);
        });

    $("html,body").animate({
        scrollTop:$("#flowerResult").offset().top-25
    },500);
}


/* CONFIRM */

$("#confirmFlower").click(function(){

    let input=$("#flowerInput").val().trim();

    if (!input) {
        alert("Please enter the name of a flower.");
        $("#flowerInput").focus();
        return;
    }

    let flower=findFlower(input);

    if (!flower) {

        $("#flowerResult").stop(true,true).fadeOut(400,function(){
            $("#notFound").hide().fadeIn(600);
        });

        return;
    }


    if (!confirm(
        "Are you sure?\n\nDo you want to see the meaning of \""+
        flower.name+"\"?"
    )) return;


    showFlower(flower);
});


/* SEARCH AGAIN */

$("#searchAgain").click(function(){

    $("#flowerResult").fadeOut(500,function(){
        $("#flowerInput").val("").focus();
    });

});


/* TRY AGAIN */

$("#tryAgain").click(function(){

    $("#notFound").fadeOut(500,function(){
        $("#flowerInput").val("").focus();
    });

});


/* ENTER KEY */

$("#flowerInput").keypress(function(e){

    if(e.which===13)
        $("#confirmFlower").click();

});

});
