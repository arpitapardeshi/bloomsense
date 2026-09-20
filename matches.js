
$(function(){

const flowers=[

{name:"Sunflower",image:"sunflower.jpg",bouquetImage:"sunflower-bouquet.jpg",
meaning:"Warmth, happiness, loyalty and positivity.",
message:"You are the light I need.",
traits:["Cheerful","Warm","Confident","Friendly","Fun","Adventurous"],
messages:["Happy Birthday","Congratulations"],
receivers:["Friend","Family Member","Classmate / Colleague","Teacher / Mentor"]},

{name:"Daisy",image:"daisy.jpg",bouquetImage:"daisy-bouquet.jpg",
meaning:"Innocence, friendship and happiness.",
message:"Your friendship means so much to me.",
traits:["Gentle","Friendly","Cheerful","Fun","Kind","Warm","Thoughtful"],
messages:["Happy Birthday","Thank You"],
receivers:["Friend","Family Member","Classmate / Colleague"]},

{name:"Daffodil",image:"daffodil.jpg",bouquetImage:"daffodil-bouquet.jpg",
meaning:"New beginnings, good luck and unequalled love.",
message:"May this be the beginning of something wonderful.",
traits:["Confident","Adventurous","Cheerful","Independent","Ambitious","Unique","Fun"],
messages:["Happy Birthday","Congratulations","Best of Luck"],
receivers:["Friend","Family Member","Classmate / Colleague","Teacher / Mentor"]},

{name:"Dahlia",image:"dahlia.jpg",bouquetImage:"dahlia-bouquet.jpg",
meaning:"Elegance, confidence, individuality and inner strength.",
message:"You are remarkable and wonderfully unique.",
traits:["Elegant","Sophisticated","Confident","Unique","Ambitious"],
messages:["Happy Birthday","You Are Special to Me"],
receivers:["Friend","Family Member","Classmate / Colleague"]},

{name:"Violet",image:"violet.jpg",bouquetImage:"violet-bouquet.jpg",
meaning:"Faithfulness, loyalty and everlasting affection.",
message:"I will always be there for you.",
traits:["Gentle","Caring","Elegant","Calm","Thoughtful","Loyal","Dependable","Warm"],
messages:["I Miss You","I'm Always Here for You","You Are Special to Me"],
receivers:["Partner","Friend","Family Member"]},

{name:"Baby's Breath",image:"babysbreath.jpg",bouquetImage:"babysbreath-bouquet.jpg",
meaning:"Lasting love, gentleness and everlasting affection.",
message:"My affection for you will always remain.",
traits:["Gentle","Caring","Romantic","Calm","Kind","Thoughtful","Loyal","Warm"],
messages:["I Love You","You Are Special to Me","I'm Always Here for You"],
receivers:["Partner","Friend","Family Member"]},

{name:"Forget-me-not",image:"forgetmenot.jpg",bouquetImage:"forgetmenot-bouquet.jpg",
meaning:"Remembrance, loyalty and lasting affection.",
message:"Please don't forget me.",
traits:["Loyal","Romantic","Thoughtful","Caring","Gentle","Dependable"],
messages:["I Miss You","Don't Forget Me"],
receivers:["Partner","Friend","Family Member"]},

{name:"Hydrangea",image:"hydrangea.jpg",bouquetImage:"hydrangea-bouquet.jpg",
meaning:"Gratitude, understanding and heartfelt appreciation.",
message:"Thank you for understanding me.",
traits:["Thoughtful","Caring","Kind","Gentle","Warm","Calm"],
messages:["Thank You"],
receivers:["Friend","Family Member","Classmate / Colleague","Teacher / Mentor"]},

{name:"Pink Carnation",image:"pinkcarnation.jpg",bouquetImage:"pinkcarnation-bouquet.jpg",
meaning:"Remembrance, affection and gratitude.",
message:"I will always remember and appreciate you.",
traits:["Loyal","Thoughtful","Caring","Dependable","Gentle"],
messages:["Thank You","I Miss You"],
receivers:["Partner","Friend","Family Member"]},

{name:"Rosemary",image:"rosemary.jpg",bouquetImage:"rosemary-bouquet.jpg",
meaning:"Remembrance, loyalty and devotion.",
message:"I will remember you always.",
traits:["Loyal","Dependable","Thoughtful","Calm","Caring","Gentle"],
messages:["I Miss You"],
receivers:["Partner","Friend","Family Member"]},

{name:"Lily",image:"lily.jpg",bouquetImage:"lily-bouquet.jpg",
meaning:"True love, purity and elegance.",
message:"You are precious to me, and my love for you is true.",
traits:["Elegant","Sophisticated","Romantic","Gentle","Loyal","Calm"],
messages:["I Love You","You Are Special to Me"],
receivers:["Partner","Family Member","Friend"]},

{name:"Red Rose",image:"redrose.jpg",bouquetImage:"redrose-bouquet.jpg",
meaning:"Love, romance and deep affection.",
message:"I love you.",
traits:["Romantic","Confident","Elegant","Sophisticated"],
messages:["I Love You"],
receivers:["Partner"]},

{name:"Pink Rose",image:"pinkrose.jpg",bouquetImage:"pinkrose-bouquet.jpg",
meaning:"Admiration, care and gentle affection.",
message:"I admire you, and I'll always be there for you.",
traits:["Gentle","Caring","Elegant","Romantic","Thoughtful","Warm"],
messages:["Thank You","You Are Special to Me","I'm Always Here for You"],
receivers:["Partner","Friend","Family Member"]},

{name:"White Rose",image:"whiterose.jpg",bouquetImage:"whiterose-bouquet.jpg",
meaning:"Innocence, purity, elegance and calmness.",
message:"You are precious and pure.",
traits:["Gentle","Elegant","Sophisticated","Calm","Kind"],
messages:["Thank You","You Are Special to Me"],
receivers:["Partner","Friend","Family Member"]},

{name:"Orange Rose",image:"orangerose.jpg",bouquetImage:"orangerose-bouquet.jpg",
meaning:"Confidence, excitement and enthusiasm.",
message:"You inspire excitement and energy.",
traits:["Confident","Adventurous","Fun","Unique","Cheerful"],
messages:["Congratulations","Happy Birthday","You Are Special to Me"],
receivers:["Partner","Friend","Classmate / Colleague"]},

{name:"Aster",image:"aster.jpg",bouquetImage:"aster-bouquet.jpg",
meaning:"Love, admiration and lasting affection.",
message:"My admiration for you endures.",
traits:["Elegant","Romantic","Thoughtful","Loyal"],
messages:["Thank You","You Are Special to Me","I Love You"],
receivers:["Partner","Friend","Family Member"]},

{name:"Azalea",image:"azalea.jpg",bouquetImage:"azalea-bouquet.jpg",
meaning:"Care, thoughtfulness and concern.",
message:"Please take care of yourself.",
traits:["Caring","Gentle","Thoughtful","Kind","Warm"],
messages:["Get Well Soon","I'm Always Here for You"],
receivers:["Friend","Family Member","Partner"]},

{name:"Begonia",image:"begonia.jpg",bouquetImage:"begonia-bouquet.jpg",
meaning:"Remembrance and constant thoughts.",
message:"You are always on my mind.",
traits:["Thoughtful","Romantic","Caring","Loyal"],
messages:["I Miss You","You Are Special to Me"],
receivers:["Partner","Friend","Family Member"]},

{name:"Chrysanthemum",image:"chrysanthemum.jpg.",bouquetImage:"chrysanthemum-bouquet.jpg",
meaning:"Long life, health and well-being.",
message:"May you have a long and healthy life.",
traits:["Caring","Kind","Warm","Thoughtful","Gentle"],
messages:["Get Well Soon","Happy Birthday","Thank You"],
receivers:["Family Member","Friend","Teacher / Mentor"]},

{name:"Holly",image:"holly.jpg",bouquetImage:"holly-bouquet.jpg",
meaning:"Good luck, happiness and protection.",
message:"May good luck always be with you.",
traits:["Cheerful","Kind","Warm","Confident","Unique"],
messages:["Best of Luck","Congratulations","Happy Birthday"],
receivers:["Friend","Family Member","Classmate / Colleague","Teacher / Mentor"]},

{name:"Lily of the Valley",image:"lilyofthevalley.jpg.",bouquetImage:"lilyofthevalley-bouquet.jpg",
meaning:"Happiness, good luck and lasting affection.",
message:"May happiness and good luck follow you.",
traits:["Gentle","Elegant","Romantic","Loyal","Calm"],
messages:["You Are Special to Me"],
receivers:["Partner","Family Member","Friend"]},

{name:"Peach Blossom",image:"peachblossom.jpg",bouquetImage:"peachblossom-bouquet.jpg",
meaning:"Charm, admiration and beauty.",
message:"Your charm is truly special.",
traits:["Elegant","Romantic","Confident","Unique","Sophisticated"],
messages:["Happy Birthday","You Are Special to Me"],
receivers:["Partner","Friend"]},

{name:"Snowdrop",image:"snowdrop.jpg",bouquetImage:"snowdrop-bouquet.jpg",
meaning:"Celebration, hope and happiness.",
message:"Let us celebrate this beautiful moment.",
traits:["Cheerful","Fun","Friendly","Warm","Gentle","Kind"],
messages:["Congratulations","Happy Birthday"],
receivers:["Friend","Family Member","Classmate / Colleague"]},

{name:"Stephanotis",image:"stephanotis.jpg",bouquetImage:"stephanotis-bouquet.jpg",
meaning:"Lasting happiness, love and commitment.",
message:"May you have lasting happiness and love.",
traits:["Romantic","Elegant","Sophisticated","Loyal","Dependable"],
messages:["I Love You","You Are Special to Me","Congratulations","Best of Luck"],
receivers:["Partner","Family Member","Friend"]},

{name:"Sweet Pea",image:"sweetpea.jpg",bouquetImage:"sweetpea-bouquet.jpg",
meaning:"Kindness, gratitude and gentle affection.",
message:"Thank you for the lovely time. I wish you well.",
traits:["Gentle","Kind","Thoughtful","Calm","Friendly","Caring"],
messages:["Thank You","I'm Always Here for You"],
receivers:["Friend","Classmate / Colleague","Teacher / Mentor"]}

];


/* FLOWERS USING MINI + STANDARD BOUQUET BUTTONS */

const bouquetOnlyFlowers=[
"Snowdrop",
"Daffodil",
"Peach Blossom",
"Hydrangea",
"Lily of the Valley",
"Violet",
"Baby's Breath",
"Forget-me-not",
"Rosemary",
"Aster",
"Azalea",
"Begonia",
"Holly",
"Stephanotis",
"Sweet Pea"
];


/* MESSAGE PRIORITY */

const messagePriority={

"Happy Birthday":["Daffodil","Sunflower","Chrysanthemum"],

"I Miss You":["Forget-me-not","Rosemary"],

"Congratulations":["Snowdrop","Daffodil","Stephanotis"],

"Get Well Soon":["Azalea","Chrysanthemum"],

"Thank You":["Hydrangea"],

"Best of Luck":["Holly","Daffodil","Stephanotis"],

"You Are Special to Me":["Dahlia"],

"I'm Always Here for You":["Pink Rose","Baby's Breath","Violet"]

};


const data=localStorage.getItem("bloomSenseAnswers");

if(!data){

alert("Please answer the questions first.");

location.href="Temp.html";

return;

}

const answers=JSON.parse(data);


function score(f){

let s=0;

if(answers.mode==="message"){

let priority=messagePriority[answers.message]||[];

let place=priority.indexOf(f.name);

if(place>=0){

s+=30-place*5;

}else if(f.messages.includes(answers.message)){

s+=5;

}

if(f.receivers.includes(answers.receiver)){

s+=2;

}

}else{

answers.traits.forEach(function(t){

if(f.traits.includes(t)){

s+=20;

}

});

if(f.receivers.includes(answers.receiver)){

s+=2;

}

}

return s;

}


let results=flowers

.map(function(f,i){

return{
f:f,
s:score(f),
i:i
};

})

.sort(function(a,b){

return b.s-a.s||a.i-b.i;

})

.slice(0,3);


if(!results.length){

results=flowers.slice(0,3)

.map(function(f,i){

return{
f:f,
s:1,
i:i
};

});

}


const shownScores=[98,86,75];


results.forEach(function(r,i){

let card=$("<div>").addClass("match-card");

let left=$("<div>").addClass("match-left");


$("<img>")

.attr({
src:r.f.image,
alt:r.f.name
})

.addClass("match-image")

.appendTo(left);


$("<div>")

.append(

$("<div>")
.addClass("match-number")
.text("MATCH 0"+(i+1))

)

.append(

$("<h3>")
.text(r.f.name)

)

.append(

$("<p>")
.addClass("match-reason")
.text(

answers.mode==="message"

?"This flower closely matches the message you selected."

:"This flower closely matches the personality traits you selected."

)

)

.appendTo(left);


let right=$("<div>").addClass("match-right");


$("<div>")

.addClass("match-score")

.text(shownScores[i]+"% Match")

.appendTo(right);


$("<button>")

.addClass("explore-button")

.attr("type","button")

.text("Explore Flower →")

.data("flower",r.f)

.appendTo(right);


card.append(left,right);

$("#matchList").append(card);

});


/* BACK TO QUESTIONS */

let backText=$("<a>")

.attr(
"href",
"t.html"+(answers.mode==="traits"?"?mode=traits":"")
)

.addClass("back-questions")

.text("← Back to Questions");


$("#matchList").before(backText);


let selectedFlower=null;

let purchaseType=null;


function showFlower(f){

selectedFlower=f;

$("#detailImage").attr({

src:f.image,

alt:f.name

});

$("#detailName").text(f.name);


if(answers.mode==="message"){

$("#messageHeading").text("What message does it convey?");

$("#detailMessage").text(f.message);

}else{

$("#messageHeading").text("Personality traits");

$("#detailMessage").text(f.traits.join(" • "));

}


$("#detailMeaning").text(f.meaning);

$(".buy-button").removeClass("selected");

$("#personalMessage").val("");

purchaseType=null;


/* BUTTON TEXT */

if(bouquetOnlyFlowers.includes(f.name)){

$("#singleButton").text("Buy Mini Bouquet");

$("#bouquetButton").text("Buy Standard Bouquet");

$("#singlePrice").text("Mini Bouquet: ₹199");

}else{

$("#singleButton").text("Buy Single Flower");

$("#bouquetButton").text("Buy as a Bouquet");

$("#singlePrice").text("Single Flower: ₹199");

}


$("#flowerDetail")

.hide()

.fadeIn(500);


$("html,body").animate({

scrollTop:$("#flowerDetail").offset().top-30

},500);

}


/* EXPLORE FLOWER */

$("#matchList").on(

"click",

".explore-button",

function(){

showFlower($(this).data("flower"));

});


/* FIRST PURCHASE BUTTON */

$("#singleButton").click(function(){

if(bouquetOnlyFlowers.includes(selectedFlower.name)){

purchaseType="mini";

$("#singleButton").addClass("selected");

$("#bouquetButton").removeClass("selected");

$("#detailImage").attr({

src:selectedFlower.image,

alt:selectedFlower.name+" Mini Bouquet"

});

$("#singlePrice").text("Mini Bouquet: ₹199");

}else{

purchaseType="single";

$("#singleButton").addClass("selected");

$("#bouquetButton").removeClass("selected");

$("#detailImage").attr({

src:selectedFlower.image,

alt:selectedFlower.name

});

$("#singlePrice").text("Single Flower: ₹199");

}

});


/* SECOND PURCHASE BUTTON */

$("#bouquetButton").click(function(){

purchaseType="bouquet";

$("#bouquetButton").addClass("selected");

$("#singleButton").removeClass("selected");

$("#detailImage").attr({

src:selectedFlower.bouquetImage,

alt:selectedFlower.name+" Bouquet"

});

if(bouquetOnlyFlowers.includes(selectedFlower.name)){

$("#singlePrice").text("Standard Bouquet: ₹999");

}else{

$("#singlePrice").text("Bouquet: ₹999");

}

});


/* CHECKOUT */

$("#checkoutButton").click(function(){

if(!selectedFlower){

return alert("Please select a flower first.");

}


if(!purchaseType){

return alert("Please choose a purchase option first.");

}


let personalMessage=$("#personalMessage")
.val()
.trim();


let checkout={

type:purchaseType,

items:[],

message:personalMessage

};


/* SINGLE FLOWER */

if(purchaseType==="single"){

checkout.items.push({

name:selectedFlower.name,

image:selectedFlower.image,

quantity:1,

price:199

});

}


/* MINI BOUQUET */

if(purchaseType==="mini"){

checkout.items.push({

name:selectedFlower.name+" Mini Bouquet",

image:selectedFlower.image,

quantity:1,

price:199

});

}


/* STANDARD BOUQUET / NORMAL BOUQUET */

if(purchaseType==="bouquet"){

checkout.items.push({

name:selectedFlower.name+" Bouquet",

image:selectedFlower.bouquetImage,

quantity:1,

price:999

});

}


checkout.total=checkout.items.reduce(

function(total,item){

return total+(item.price*item.quantity);

},

0

);


localStorage.setItem(

"bloomSenseCheckout",

JSON.stringify(checkout)

);


location.href="checkout.html";

});

});
