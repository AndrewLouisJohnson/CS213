'use strict';

// declaration for object that holds costs, with constructor
function CostObject(taxCA, taxME, shipping, price_shad,
                    price_crank, price_tate, price_dog)
{
    this.shipping = shipping;
    this.taxCA = taxCA;
    this.taxME = taxME;
    this.price_shad = price_shad;
    this.price_crank = price_crank;
    this.price_tate = price_tate;
    this.price_dog = price_dog;
}

// declaration for object that holds quantities, with constructor
function QuantityObject(q_shad, q_crank, q_tate, q_dog){
    this.q_shad = q_shad;
    this.q_crank = q_crank;
    this.q_tate = q_tate;
    this.q_dog = q_dog;
}

function initializeCost() {
    "use strict";
    window.Cost = new CostObject(0.075, 0.055, 15, 65, 25, 45, 17);
}

function initializeQuantity() {
    window.Quantity = new QuantityObject(0, 0, 0, 0);
}

function setQuantity(quantity, lureType) {
    'use strict';
    if (lureType == 'shad') window.Quantity.q_shad = quantity;
    else if (lureType == 'crank') {
        window.Quantity.q_crank = quantity;
    } else if (lureType == 'tate') window.Quantity.q_tate = quantity;
    else if (lureType == 'dog') window.Quantity.q_dog = quantity;
}

function setName(name) {
    "use strict";
    if (/[&;'%#@\^$!"?<>_*()+\=]/.test(name) == true) {
        document.getElementById("name").innerHTML =
            "Special character(s) entered.";
        if (/[0-9]/.test(name) == true)
            document.getElementById("name").innerHTML =
                "Numbers and special character(s) entered.";
    }
    else if (/[[0-9]/.test(name) == true) {
        document.getElementById("name").innerHTML = "Numbers entered.";
        if (/[&;'%#@\^$!"?<>_*()+\=]/.test(name) == true)
            document.getElementById("name").innerHTML =
                "Numbers and special character(s) entered.";
    }
    else
        document.getElementById("name").innerHTML = "";
}

function setAddressLine1(addressLine) {
    "use strict";
    if (/[~!@$%\^&*()_+\=;]/.test(addressLine) == true)
        document.getElementById("addressLine1").innerHTML =
            "Invalid special character(s) entered.";
    else document.getElementById("addressLine1").innerHTML = "";
}

function setAddressLine2(addressLine) {
    "use strict";
    if (/[~$%\^*_+\=;]/.test(addressLine) == true)
        document.getElementById("addressLine2").innerHTML =
            "Invalid special character(s) entered.";
    else document.getElementById("addressLine2").innerHTML = "";
}

function setZIP(zip) {
    "use strict";
    if (zip.match(/\d{5}/) == null) {
        document.getElementById("ZIP1").innerHTML = "Invalid ZIP code entered.";

        if (/[&;'%#@\^$!"?<->_*()+\=]/.test(zip) == true)
            document.getElementById("ZIP2").innerHTML =
                "Invalid special character(s) entered.";
        else
            document.getElementById("ZIP2").innerHTML = "";

        if (/[A-Za-z]/.test(zip) == true)
            document.getElementById("ZIP3").innerHTML =
                "Alphabetic character(s) entered.";
        else
            document.getElementById("ZIP3").innerHTML = "";
    }
    else
        document.getElementById("ZIP1").innerHTML = "";
}

function setState(abbrev) {
    if (/[A-Z]{2}/.test(abbrev) == false)
        document.getElementById("state").innerHTML = "Invalid state abbreviation.";
    else {
        document.getElementById("state").innerHTML = "";
        var state = abbrev;
    }
}

function setPhone(phone) {
    "use strict";
    if (/[A-Za-z]/.test(phone) == true) {
        document.getElementById("phone").innerHTML =
            "Alphabetic character(s) entered.";
        if (/[~!@$%\^&*=#]/.test(phone) == true)
            document.getElementById("phone").innerHTML =
                "Alphabetic and invalid special character(s) entered.";
    }
    else if (/[~!@$%\^&*=#]/.test(phone) == true)
        document.getElementById("phone").innerHTML =
            "Invalid special character(s) entered.";
    else
        document.getElementById("phone").innerHTML = "";
}

function setCreditCard(card) {
    "use strict";
    if (card.match(/\d{4}-\d{4}-\d{4}-\d{4}/) == null && card.match(/\d{16}/) == null) {
        document.getElementById("card1").innerHTML =
            "Invalid card number entered.";
        if (/[&;'%#@\^$!"?<>_*()+\=]/.test(card) == true)
            document.getElementById("card2").innerHTML =
                "Invalid special character(s) entered.";
        else
            document.getElementById("card2").innerHTML = "";
        if (/[A-Za-z]/.test(card) == true)
            document.getElementById("card3").innerHTML =
                "Alphabetic character(s) entered.";
        else
            document.getElementById("card3").innerHTML = "";
    }
    else {
        document.getElementById("card1").innerHTML = "";
        document.getElementById("card2").innerHTML = "";
        document.getElementById("card3").innerHTML = "";
    }
}

function calculateTax() {
    "use strict";
    var tax = 0;
    if (window.state == 'ME') {
        tax = window.Cost.taxME;
    }
    if (window.state == 'CA') {
        tax = window.Cost.taxCA;
    }
    return tax;
}

function calculateTotal() {
    var salesTax = calculateTax();
    var subtotal1 = window.Quantity.q_crank * window.Cost.price_crank;
    var subtotal2 = window.Quantity.q_shad * window.Cost.price_shad;
    var subtotal3 = window.Quantity.q_tate * window.Cost.price_tate;
    var subtotal4 = window.Quantity.q_dog * window.Cost.price_dog;
    var total = subtotal1 + subtotal2 + subtotal3 + subtotal4 +
        window.Cost.shipping + salesTax;
    return total;
}

function isCartEmpty() {
    "use strict";
    if (window.Quantity.q_crank <= 0 && window.Quantity.q_shad <=
        0 && window.Quantity.q_tate <= 0 && window.Quantity.q_dog <=
        0) return true;
    else return false;
}

function updateCart() {
    var total = calculateTotal();
    if (isCartEmpty() == false) {
        if (window.Quantity.q_crank > 0) {
            var str1 = "Rapala Ultra Light Crank: " + window.Quantity.q_crank;
            document.getElementById("cart1").innerHTML = str1;
        }
        if (window.Quantity.q_shad > 0) {
            var str2 = "Strike King Red Eye Shad: " + window.Quantity.q_shad;
            document.getElementById("cart2").innerHTML = str2;
        }
        if (window.Quantity.q_tate > 0) {
            var str3 = "Gary Yamamoto Tate’ Pencil Bait: " + window.Quantity.q_tate;
            document.getElementById("cart3").innerHTML = str3;
        }
        if (window.Quantity.q_dog > 0) {
            var str4 = "Southern Lure Scum Dog: " + window.Quantity.q_dog;
            document.getElementById("cart4").innerHTML = str4;
        }
        document.getElementById('shippingCharge').innerHTML =
            "Overnight Shipping: $" + window.Cost.shipping + ".00";
        document.getElementById('total').innerHTML = "Total: $" + total + ".00";
        document.getElementById('empty').innerHTML = "";
    }
    else {
        document.getElementById('empty').innerHTML =
            "Let me lure you to the Shop tab.";
    }
}

function show(shown, hiddenPage1, hiddenPage2, hiddenPage3) {
    document.getElementById(shown).style.display = 'block';
    document.getElementById(hiddenPage1).style.display = 'none';
    document.getElementById(hiddenPage2).style.display = 'none';
    document.getElementById(hiddenPage3).style.display = 'none';
}

function showButton(button) {
    document.getElementById(button).style.visibility = 'visible';
}
