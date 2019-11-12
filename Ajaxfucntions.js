

// User info for address//


var userInfo = {
    name: "",
    addr: ["", ""],
    city: "",
    state: "",
    zip: ""
}

var cartField = {
    item: ["", "", "", ""],
    price: ["", "", "", ""]
}


// Shopping cart info and calculations
var cart = {
    cartAmt: 0,
    taxAmt: 0,
    shipAmt: 0,
    totalAmt: 0,
    calc: function(qty, price) {
        this.cartAmt += qty * price;
        this.taxAmt = this.cartAmt * 0.08 * 1.0;
        this.shipAmt = this.cartAmt * 0.03;
        this.totalAmt = this.cartAmt + this.taxAmt + this.shipAmt;
    }
}

var sumCart = {
    sumCartItem: "",
    sumCartPrice: "",
    calc: function(itemSelected, price) {
        this.sumCartItem = itemSelected;
        this.sumCartPrice = price;
    }
}

var iframe, partSelect, qtySelect, qty, price, unitPrice, totalPrice, physicalAddr, itemSelected, myTable, row, data, dataText, HTMLTable;
var newCell1, newCell2, newRow, tablePrice;

// Ensure Iframe element is available
document.addEventListener('DOMContentLoaded', function(){
    loadIframeContents();
    iframe.addEventListener('load', loadIframeContents);

});


// Loads iframe contents into object
function loadIframeContents(){

    // Reset values
    var submitButton = null;
    var submitFunc = null;
    var form = null;

    // Grab new page in iframe
    iframe = document.getElementById("main-frm");

    // Sets up functions and listeners for pages


    // USER INFO
    if(!submitButton){

        submitButton = iframe.contentWindow.document.getElementById("user-info-submit");
        submitFunc = userInfoSubmit;

        // Populate user info with saved values if there is any
        if(submitButton){
            iframe.contentWindow.document.querySelector('[name="fullname"]').value = userInfo.name;
            iframe.contentWindow.document.querySelector('[name="addr1"]').value = userInfo.addr[0];
            iframe.contentWindow.document.querySelector('[name="addr2"]').value = userInfo.addr[1];
            iframe.contentWindow.document.querySelector('[name="city"]').value = userInfo.city;
            iframe.contentWindow.document.querySelector('[name="state"]').value = userInfo.state;
            iframe.contentWindow.document.querySelector('[name="zip"]').value =  userInfo.zip;
        }
    }

    // Grabs form element of iframe page and changes submit button function
    if(submitButton){
        form = iframe.contentWindow.document.querySelector("form");
        form.addEventListener('submit', submitFunc);
    }
}



function userInfoSubmit(){

    // Save user info in object
    userInfo.name = iframe.contentWindow.document.querySelector('[name="FullName"]').value;
    userInfo.addr[0] = iframe.contentWindow.document.querySelector('[name="addr1"]').value;
    userInfo.addr[1] = iframe.contentWindow.document.querySelector('[name="addr2"]').value;
    userInfo.city = iframe.contentWindow.document.querySelector('[name="city"]').value;
    userInfo.state = iframe.contentWindow.document.querySelector('[name="state"]').value;
    userInfo.zip = iframe.contentWindow.document.querySelector('[name="zip"]').value;

}


function usePhysicalAddr(){
    if(physicalAddr.checked){
        // Change address to the one in user info if checked
        iframe.contentWindow.document.querySelector('[name="addr1"]').value = userInfo.addr[0];
        iframe.contentWindow.document.querySelector('[name="addr2"]').value = userInfo.addr[1];
        iframe.contentWindow.document.querySelector('[name="city"]').value = userInfo.city;
        iframe.contentWindow.document.querySelector('[name="state"]').value = userInfo.state;
        iframe.contentWindow.document.querySelector('[name="zip"]').value =  userInfo.zip;
    }
    else{
        // If unchecking the box, reset all values to empty
        iframe.contentWindow.document.querySelector('[name="addr1"]').value = "";
        iframe.contentWindow.document.querySelector('[name="addr2"]').value = "";
        iframe.contentWindow.document.querySelector('[name="city"]').value = "";
        iframe.contentWindow.document.querySelector('[name="state"]').value = "";
        iframe.contentWindow.document.querySelector('[name="zip"]').value =  "";
    }
}

function shipSubmit(){

}

function checkoutSubmit(){
    cart.cartAmt = iframe.contentWindow.document.getElementById("cart-amount").value; // Derek stuff
    cart.taxAmt = iframe.contentWindow.document.querySelector('[name="taxAmt"]').value;// Derek stuff
    cart.shipAmt = iframe.contentWindow.document.querySelector('[name="shipAmt"]').value;// Derek stuff
    cart.totalAmt = iframe.contentWindow.document.querySelector('[name="totalAmt"]').value;// Derek stuff
}

function row() {
    myTable = iframe.contentWindow.document.getElementById("addTable");
    // insert new row.
    newRow = myTable.insertRow(1);
    newCell1 = newRow.insertCell(0);
    newCell2 = newRow.insertCell(1);
    newCell1.innerHTML = "Placement";
    newCell2.innerHTML = "Sudo Placement";
}

// AJAX - get states from database
function showStates(str) {
    var xhttp;
    if (str == "") {
        document.getElementById("state").innerHTML = "";
        return;
    }xhttp = new XMLHttpRequest(); xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("state").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "getstates.php?q="+str, true);
    xhttp.send();
}

