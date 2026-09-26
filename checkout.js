$(function () {

    // Add More Flowers button click handler
    $("#addMoreButton").click(function () {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "categories.html";
        }
    });
    function renderOrder() {
        // Read order from 'bloomSenseCheckout', or fallback to 'cart' from buy page
        let storedData = localStorage.getItem("bloomSenseCheckout") || localStorage.getItem("cart");
        let order = null;

        if (storedData) {
            try {
                order = JSON.parse(storedData);
            } catch (e) {
                order = null;
            }
        }

        // Standardize structure if data came directly from buy page cart array
        if (Array.isArray(order)) {
            order = { items: order, type: "bouquet", message: "" };
        }

        if (!order || !order.items || !order.items.length) {
            $("#orderItems").html(
                "<p style='padding:15px 0; color:#817777;'>No flower has been selected.</p>"
            );
            $("#orderTotal").text("₹0");
            $("#orderSummary").text("0 items selected");
            $("#personalMessage").text("Write a message to send with a bouquet.");
            return;
        }

        let total = 0;
        let totalQuantity = 0;

        $("#orderItems").empty();

        order.items.forEach(function (item, index) {
            let name = item.name || item.title || "Fresh Bouquet";
            let price = Number(item.price) || 199;
            let quantity = Number(item.quantity) || 1;
            let itemTotal = price * quantity;

            total += itemTotal;
            totalQuantity += quantity;

            let itemBox = $("<div>").addClass("order-item");

            let image = $("<img>").attr({
                src: item.image || "logoo.png.png",
                alt: name
            });

            let details = $("<div>").addClass("order-item-details");

            $("<h3>").text(name).appendTo(details);

            $("<p>").text("Price: ₹" + price).appendTo(details);

            // Quantity & Controls Row (Trash icon removed)
            let qtyContainer = $("<p>").css({
                "display": "flex",
                "align-items": "center",
                "gap": "8px",
                "margin-top": "6px"
            });

            let minusBtn = $("<button>")
                .text("-")
                .attr("type", "button")
                .css({
                    "padding": "2px 8px",
                    "border": "1px solid #d1c7c1",
                    "background": "#FBF8F3",
                    "cursor": "pointer",
                    "border-radius": "4px",
                    "font-size": "12px"
                })
                .click(function () {
                    updateQuantity(index, -1);
                });

            let qtySpan = $("<span>")
                .text("Qty: " + quantity)
                .css({ "font-weight": "600", "color": "#2B2525" });

            let plusBtn = $("<button>")
                .text("+")
                .attr("type", "button")
                .css({
                    "padding": "2px 8px",
                    "border": "1px solid #d1c7c1",
                    "background": "#FBF8F3",
                    "cursor": "pointer",
                    "border-radius": "4px",
                    "font-size": "12px"
                })
                .click(function () {
                    updateQuantity(index, 1);
                });

            qtyContainer.append(minusBtn, qtySpan, plusBtn);
            details.append(qtyContainer);

            $("<p>")
                .text("Item Total: ₹" + itemTotal)
                .css({ "font-weight": "600", "margin-top": "4px", "color": "#2B2525" })
                .appendTo(details);

            itemBox.append(image, details);
            $("#orderItems").append(itemBox);
        });

        // Summary Label
        if (order.type === "bouquet" && order.items.length === 1) {
            $("#orderSummary").text(totalQuantity + " bouquet" + (totalQuantity > 1 ? "s" : "") + " selected");
        } else if (totalQuantity === 1) {
            $("#orderSummary").text("1 flower selected");
        } else {
            $("#orderSummary").text(totalQuantity + " flowers selected");
        }

        $("#orderTotal").text("₹" + total);

        if (order.message && order.message.trim() !== "") {
            $("#personalMessage").text(order.message);
        } else {
            $("#personalMessage").text("No personal message added.");
        }
    }

    // Helper function to safely read active order data
    function getActiveOrder() {
        let isCheckout = !!localStorage.getItem("bloomSenseCheckout");
        let storedKey = isCheckout ? "bloomSenseCheckout" : "cart";
        let rawData = localStorage.getItem(storedKey);
        
        if (!rawData) return { order: null, key: storedKey };

        let parsed = JSON.parse(rawData);

        if (Array.isArray(parsed)) {
            parsed = { items: parsed, type: "bouquet", message: "" };
        }

        return { order: parsed, key: storedKey };
    }

    // Function to update quantity (+ or -). Reaching 0 quantity removes the item automatically.
    function updateQuantity(index, change) {
        let { order, key } = getActiveOrder();

        if (!order || !order.items || !order.items[index]) return;

        order.items[index].quantity = (Number(order.items[index].quantity) || 1) + change;

        if (order.items[index].quantity <= 0) {
            order.items.splice(index, 1);
        }

        if (key === "cart" && !localStorage.getItem("bloomSenseCheckout")) {
            localStorage.setItem("cart", JSON.stringify(order.items));
        } else {
            localStorage.setItem("bloomSenseCheckout", JSON.stringify(order));
        }

        renderOrder();
    }
    // Initial Render
    renderOrder();

    /* INPUT RESTRICTIONS */

    $("#phone").on("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 10);
    });

    $("#pincode").on("input", function () {
        this.value = this.value.replace(/\D/g, "").slice(0, 6);
    });

    /* FORM SUBMISSION */

    $("#checkoutForm").submit(function (e) {
        e.preventDefault();

        let storedData = localStorage.getItem("bloomSenseCheckout") || localStorage.getItem("cart");
        let rawOrder = storedData ? JSON.parse(storedData) : null;
        let order = Array.isArray(rawOrder) ? { items: rawOrder } : rawOrder;

        if (!order || !order.items || !order.items.length) {
            alert("Your cart is empty. Please add a product before checking out.");
            return;
        }

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let phone = $("#phone").val().trim();
        let address = $("#address").val().trim();
        let city = $("#city").val().trim();
        let pincode = $("#pincode").val().trim();
        let payment = $("#payment").val();

        if (!name || !email || !phone || !address || !city || !pincode || !payment) {
            alert("Please fill all delivery details.");
            return;
        }

        if (phone.length !== 10) {
            alert("Please enter a valid 10 digit phone number.");
            return;
        }

        if (pincode.length !== 6) {
            alert("Please enter a valid 6 digit pincode.");
            return;
        }

        let customerOrder = {
            name: name,
            email: email,
            phone: phone,
            address: address,
            city: city,
            pincode: pincode,
            payment: payment,
            items: order.items,
            message: order.message || "",
            total: $("#orderTotal").text()
        };

        localStorage.setItem("bloomSenseCustomerOrder", JSON.stringify(customerOrder));
        localStorage.removeItem("bloomSenseCheckout");
        localStorage.removeItem("cart");
        $(".heading").fadeOut(400);
        $("#checkoutSection").fadeOut(500, function () {
            $("#confirmation").css("display", "flex").hide().fadeIn(700);
        });
    });

    /* BACK TO HOME */
    $("#backToHome").click(function (e) {
        e.preventDefault();
        window.location.href = "index.html";
    });

});
