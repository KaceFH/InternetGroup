function paymentTotal(ShoppingAmount, Tax, ShippingCharges) {
	var Total = ShoppingAmount + Tax + ShippingCharges;

	return Total;
}
function paymentTotalTax(ShoppingAmount) {
	var TotalTax = ShoppingAmount * .08;

	return TotalTax;
}
function paymentShipping(ShoppingAmount) {
	var  TotalShipping = ShoppingAmount * .03;

	return TotalShipping;
}


function validatePhone(phoneNumber){
	var phoneNumber = document.getElementById(phone).value;

	var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

	var phoneResult = phoneRGEX.test(phoneNumber);

	if(phoneResult == false)
	{
		alert('Please enter a valid phone number');
		return false;
	}}

function calculateShoppingCart(text) {
	var selection = document.getElementById("UnitsPrice");
	var price = selection.value;
	var amount = parseInt(text);
	var TotalPrice = price * amount;

	document.getElementById("Total").value = TotalPrice;
}

function setUnitsPrice() {
	var selection = document.getElementById("products");
	var text = selection.options[selection.selectedIndex].text
	var price = document.getElementById("UnitsPrice");
	if (text == "") {
		price.value = "";
	}
	else {
		var split = text.split("$");
		var final = split[1];
		final = final.slice(0, -1);
		price.value = final;
	}

}

function ValidateEmail(Email)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(inputText.value.match(mailformat))
	{
		document.form1.text1.focus();
		return true;
	}
	else
	{
		alert("You have entered an invalid email address!");
		document.form1.text1.focus();
		return false;
	}
}
