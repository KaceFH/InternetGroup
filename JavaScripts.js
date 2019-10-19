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
