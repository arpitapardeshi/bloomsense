$(function(){

    /* ================= LOAD ORDER ================= */

    let order = JSON.parse(
        localStorage.getItem("bloomSenseCheckout")
    );


    /* ================= ADD MORE FLOWERS ================= */

    $("#addMoreButton").click(function(){

        if(window.history.length > 1){

            window.history.back();

        }else{

            window.location.href = "home.html";

        }

    });


    /* ================= DISPLAY ORDER ================= */

    function displayOrder(){

        order = JSON.parse(
            localStorage.getItem("bloomSenseCheckout")
        );


        $("#orderItems").empty();


        if(!order || !order.items || !order.items.length){

            $("#orderItems").html(
                "<p>No flower has been selected.</p>"
            );

            $("#orderSummary").text(
                "No flowers selected"
            );

            $("#orderTotal").text("₹0");

            $("#personalMessage").text(
                "No personal message added."
            );

            return;
        }


        let total = 0;

        let totalQuantity = 0;


        order.items.forEach(function(item){

            let price = Number(item.price) || 199;

            let quantity = Number(item.quantity) || 1;

            let itemTotal = price * quantity;


            total += itemTotal;

            totalQuantity += quantity;


            let itemBox = $("<div>")
                .addClass("order-item");


            let image = $("<img>")
                .attr({
                    src:item.image,
                    alt:item.name
                });


            let details = $("<div>")
                .addClass("order-item-details");


            $("<h3>")
                .text(item.name)
                .appendTo(details);


            $("<p>")
                .text("Price: ₹" + price)
                .appendTo(details);


            $("<p>")
                .text("Quantity: " + quantity)
                .appendTo(details);


            $("<p>")
                .text("Item Total: ₹" + itemTotal)
                .appendTo(details);


            itemBox.append(
                image,
                details
            );


            $("#orderItems").append(itemBox);

        });


        $("#orderSummary").text(
            totalQuantity === 1
                ? "1 flower selected"
                : totalQuantity + " flowers selected"
        );


        $("#orderTotal").text(
            "₹" + total
        );


        if(order.message){

            $("#personalMessage")
                .text(order.message);

        }else{

            $("#personalMessage")
                .text(
                    "No personal message added."
                );

        }

    }


    displayOrder();


    /* ================= DELETE ORDER ================= */

    $("#deleteOrderButton").click(function(){

        let confirmDelete = confirm(
            "Are you sure you want to delete this order?"
        );


        if(!confirmDelete){
            return;
        }


        localStorage.removeItem(
            "bloomSenseCheckout"
        );


        localStorage.removeItem(
            "bloomSenseCustomerOrder"
        );


        order = null;


        displayOrder();

    });


    /* ================= PHONE ================= */

    $("#phone").on("input",function(){

        this.value = this.value
            .replace(/\D/g,"")
            .slice(0,10);

    });


    /* ================= PINCODE ================= */

    $("#pincode").on("input",function(){

        this.value = this.value
            .replace(/\D/g,"")
            .slice(0,6);

    });


    /* ================= FORM ================= */

    $("#checkoutForm").submit(function(e){

        e.preventDefault();


        order = JSON.parse(
            localStorage.getItem(
                "bloomSenseCheckout"
            )
        );


        if(!order || !order.items || !order.items.length){

            alert(
                "Please add at least one flower before placing your order."
            );

            return;
        }


        let name = $("#name").val().trim();

        let email = $("#email").val().trim();

        let phone = $("#phone").val().trim();

        let address = $("#address").val().trim();

        let city = $("#city").val().trim();

        let pincode = $("#pincode").val().trim();

        let payment = $("#payment").val();


        if(
            !name ||
            !email ||
            !phone ||
            !address ||
            !city ||
            !pincode ||
            !payment
        ){

            alert(
                "Please fill all delivery details."
            );

            return;
        }


        if(phone.length !== 10){

            alert(
                "Please enter a valid 10 digit phone number."
            );

            return;
        }


        if(pincode.length !== 6){

            alert(
                "Please enter a valid 6 digit pincode."
            );

            return;
        }


        let total = 0;


        order.items.forEach(function(item){

            let price = Number(item.price) || 199;

            let quantity = Number(item.quantity) || 1;

            total += price * quantity;

        });


        let customerOrder = {

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


    /* ================= BACK TO HOME ================= */

    $("#backToHome").click(function(e){

        e.preventDefault();

        window.location.href =
            "home.html";

    });

});
