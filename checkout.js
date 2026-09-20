$(function(){

let order=JSON.parse(
    localStorage.getItem("bloomSenseCheckout")
);

if(!order || !order.items || !order.items.length){

    $("#orderItems").html(
        "<p>No flower has been selected.</p>"
    );

    $("#orderTotal").text("₹0");

    return;
}


let total=0;

let totalQuantity=0;

$("#orderItems").empty();


order.items.forEach(function(item){

    let price=Number(item.price)||199;

    let quantity=Number(item.quantity)||1;

    let itemTotal=price*quantity;

    total+=itemTotal;

    totalQuantity+=quantity;


    let itemBox=$("<div>")
        .addClass("order-item");


    let image=$("<img>")
        .attr({
            src:item.image,
            alt:item.name
        });


    let details=$("<div>")
        .addClass("order-item-details");


    $("<h3>")
        .text(item.name)
        .appendTo(details);


    $("<p>")
        .text("Price: ₹"+price)
        .appendTo(details);


    $("<p>")
        .text("Quantity: "+quantity)
        .appendTo(details);


    $("<p>")
        .text("Item Total: ₹"+itemTotal)
        .appendTo(details);


    itemBox.append(
        image,
        details
    );


    $("#orderItems").append(itemBox);

});


if(order.type==="bouquet"){

    $("#orderSummary")
        .text("1 bouquet selected");

}else if(totalQuantity===1){

    $("#orderSummary")
        .text("1 flower selected");

}else{

    $("#orderSummary")
        .text(totalQuantity+" flowers selected");

}


$("#orderTotal").text("₹"+total);


if(order.message){

    $("#personalMessage")
        .text(order.message);

}else{

    $("#personalMessage")
        .text("No personal message added.");

}


/* PHONE */

$("#phone").on("input",function(){

    this.value=this.value
        .replace(/\D/g,"")
        .slice(0,10);

});


/* PINCODE */

$("#pincode").on("input",function(){

    this.value=this.value
        .replace(/\D/g,"")
        .slice(0,6);

});


/* FORM */

$("#checkoutForm").submit(function(e){

    e.preventDefault();


    let name=$("#name").val().trim();

    let email=$("#email").val().trim();

    let phone=$("#phone").val().trim();

    let address=$("#address").val().trim();

    let city=$("#city").val().trim();

    let pincode=$("#pincode").val().trim();

    let payment=$("#payment").val();


    if(
        !name ||
        !email ||
        !phone ||
        !address ||
        !city ||
        !pincode ||
        !payment
    ){

        alert("Please fill all delivery details.");

        return;
    }


    if(phone.length!==10){

        alert(
            "Please enter a valid 10 digit phone number."
        );

        return;
    }


    if(pincode.length!==6){

        alert(
            "Please enter a valid 6 digit pincode."
        );

        return;
    }


    let customerOrder={

        name:name,

        email:email,

        phone:phone,

        address:address,

        city:city,

        pincode:pincode,

        payment:payment,

        items:order.items,

        message:order.message,

        total:total

    };


    localStorage.setItem(

        "bloomSenseCustomerOrder",

        JSON.stringify(customerOrder)

    );


    $(".heading").fadeOut(400);


    $("#checkoutSection").fadeOut(
        500,
        function(){

            $("#confirmation")

                .css("display","flex")

                .hide()

                .fadeIn(700);

        }

    );

});


/* BACK TO HOME */

$("#backToHome").click(function(e){

    e.preventDefault();

    window.location.href="home.html";

});

});