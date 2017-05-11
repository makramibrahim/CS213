var toggleShippingAddress = function () {
    var shippingInfo = document.getElementById("shipping");
    if (document.getElementById("shippingCheckBox").checked === false) {
        shippingInfo.style.display = "none";
    } else {
        shippingInfo.style.display = "inherit";
    }
};

var togglePurchases = function () {
    document.getElementById("purchases").style.display = "inherit";
    document.getElementById("paymentAndShipping").style.display = "none";
    document.getElementById("confirm").style.display = "none";
};

var togglePayment = function () {
    document.getElementById("purchases").style.display = "none";
    document.getElementById("paymentAndShipping").style.display = "inherit";
    document.getElementById("confirm").style.display = "none";
};

var toggleConfirm = function () {
    var package = document.querySelector('input[name="package"]:checked').value;
    switch(package)
    {
        case "standard":
            var price = 65.95;
            break;
        case "premium":
            var price = 92.29;
            break;
        case "professional":
            var price = 1980.95;
            break;
        default:
            var price = 0;
            break;
    };
    
    document.getElementById("price").innerHTML = "$" + price.toFixed(2);
    document.getElementById("shippingCost").innerHTML = "$15.00";
    document.getElementById("tax").innerHTML = "$" + ((price + 15.00) * .08).toFixed(2);
    document.getElementById("total").innerHTML = "$" + (price + 15.00 + ((price + 15.00) * .08)).toFixed(2);

    document.getElementById("purchases").style.display = "none";
    document.getElementById("paymentAndShipping").style.display = "none";
    document.getElementById("confirm").style.display = "inherit";
};

var toggleStandard = function () {
    document.getElementById("standard").style.display = "inherit";
    document.getElementById("premium").style.display = "none";
    document.getElementById("professional").style.display = "none";
};

var togglePremium = function () {
    document.getElementById("standard").style.display = "none";
    document.getElementById("premium").style.display = "inherit";
    document.getElementById("professional").style.display = "none";
};

var toggleProfessional = function () {
    document.getElementById("standard").style.display = "none";
    document.getElementById("premium").style.display = "none";
    document.getElementById("professional").style.display = "inherit";
};

var validateField = function (value, displayEl) {
    if (value == "") {
        displayEl.innerHTML = "This field is required";
    } else {
        displayEl.innerHTML = "";
    }
}

var validateMonth = function (value, displayEl) {
    if (/(0[1-9]|1[0-2]|^[1-9]$)/.test(value)) {
        displayEl.innerHTML = "";
    } else {
        displayEl.innerHTML = "Invalid Month";
    }
}

var validateYear = function (value, displayEl) {
    if (value > 14 && value < 100) {
        displayEl.innerHTML = "";
    } else {
        displayEl.innerHTML = "Invalid Year";
    }
}

var validateStates = function (value, displayEl) {
    if (/^\s*(A[KLRZ]|C[AOT]|DE|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])\s*$/i.test(value)) {
        displayEl.innerHTML = "";
    } else {
        displayEl.innerHTML = "Invalid State";
    }
}

var validateZip = function (value, displayEl) {
    if (/^\s*\d{5}(-\d{4})?\s*$/.test(value)) {
        displayEl.innerHTML = "";
    } else {
        displayEl.innerHTML = "Invalid Zip";
    }
}

var validateCard = function (value, displayEl) {
    if (/^\s*((\d{4}\s){3}\d{4}|\d{16})\s*$/.test(value)) {
        displayEl.innerHTML = "";
    } else {
        displayEl.innerHTML = "Invalid Card";
    }
}

var validatePhone = function (value, displayEl) {
    if (/^\s*(\(\d{3}\) ?\d{3}-\d{4}|\d{10})\s*$/.test(value)) {
        displayEl.innerHTML = "";
    } else {
        displayEl.innerHTML = "Invalid Number";
    }
}