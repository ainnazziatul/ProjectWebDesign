function mySubmit() {
	//declaring variables
	var Name = document.getElementById("name").value;
	var phoneNumber = document.getElementById("phoneNum").value;
	var Address = document.getElementById("address").value;
	var Email = document.getElementById("email").value;
	var Payment = document.getElementById("payment").value;
	var e = document.getElementById("payment");
	var result = e.options[e.selectedIndex].text;
	//to confirm the submit form,
	document.getElementById("fname").innerText = Name;
	document.getElementById("phone").innerText = phoneNumber;
	document.getElementById("addr").innerText = Address;
	document.getElementById("mail").innerText = Email;
	document.getElementById("payment").innerText = Payment;
	document.getElementById("result").innerHTML = result;
	//to check whether user fills up the form or not
	if (Name && phoneNumber && Address && Email) {
		if (confirm("Do you confirm your purchase?")) {
			alert("Successfully purchased. ");
			window.location.href = "#detail";
		} else {
			//if user do not confirm, return to form
			alert("Return to order page.");
			return false;
		}
	} else {
		//if form is not complete, this alert will be display
		alert("The Form is Incomplete, please fill in the required information");
		return false;
	}
}
var total_items = 12;
//function to calculate the total price of games
function CalculateItemsValue() {
	var total = 0;
	//for loop to check whether item ID is defined or null
	for (i = 1; i <= total_items; i++) {
		itemID = document.getElementById("qnt_" + i);
		if (typeof itemID === 'undefined' || itemID === null) {
			alert("No such item - " + "qnt_" + i);
		} else {
			total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
		}
	}
	document.getElementById("ItemsTotal").innerHTML = "RM" + total;
	document.getElementById("GrandTotal").innerHTML = "RM" + total;
	document.getElementById("displayTotal").innerText = CalculateItemsValue.total;
}
var slideIndex = 1;
showSlides(slideIndex);
//function to go to the next slide
function plusSlides(n) {
	showSlides(slideIndex += n);
}
//function for current slide
function currentSlide(n) {
	showSlides(slideIndex = n);
}
var slideIndex = 0;
showSlides();
//function to make slide auto change
function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) { slideIndex = 1 }
	slides[slideIndex - 1].style.display = "block";
	setTimeout(showSlides, 4000); // Change image every 2 seconds
}
function GetSelectedText() {
	var e = document.getElementById("payment");
	var result = e.options[e.selectedIndex].text;
	//display the slide result
	document.getElementById("result").innerHTML = result;
}