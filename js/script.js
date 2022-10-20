
document.addEventListener("readystatechange", function(event) {
	if(event.target.readyState == "interactive") {

		// Adding a "JavaScript is Enabled" Body Class

		document.querySelector("body").classList.add("js");
		// Or this shorter version: document.body.classList.add("js");

		let page_title = document.title
		console.log(page_title);

		//Interaction in page Activities
		if(page_title == "Activities") {
				//click show info button interaction
			let show_info_button = document.querySelectorAll("#Activities article .more");
			for(let button of show_info_button) {
				button.addEventListener("click", function() {
					this.innerHTML="";
					this.parentElement.classList.add("more_info")
				});
			}

			//click book button interaction of ski
			let skibook_button = document.querySelector("#Activities .Activity1 .book");
			skibook_button.addEventListener("click", function() {
				this.parentElement.parentElement.classList.toggle("show-skibooking");
			});

			//click book button interaction of beach
			let beachbook_button = document.querySelector("#Activities .Activity2 .book");
			beachbook_button.addEventListener("click", function() {
				this.parentElement.parentElement.classList.toggle("show-beachbooking");
			});
			
			//Book an activity page from submission for ski booking.
			const formButton = document.querySelector("#Activities #skibook button");

			document.querySelector("#skibook").addEventListener("submit", function(event){

				event.preventDefault();
				
				// get the value from the form.
				let firstName = document.querySelector("#form-first-name").value;
				let lastName = document.querySelector("#form-last-name").value;
				let skillLevel = document.querySelector("#form-skill-level").value;
				let complete = false;

				//check the value on the console.
				console.log(firstName);
				console.log(lastName);
				console.log(skillLevel);

				//check if there are blank input.
				if(firstName != "" && lastName != "") {
					complete = true;
				}

				//firstname input blank alert.
				if(firstName == "") {
					alert("Please enter your first name.")
				}

				//lastname input blank alert.
				if(lastName == "") {
					alert("Please enter your last name.")
				}

				if(complete) {
					//change the pattern of the button.
					formButton.innerHTML = "Done";
					formButton.setAttribute("disabled", "true");
					//change the content in the popup window.
					let namespan = document.querySelector(".lastname");
					namespan.innerHTML = lastName;

					let level = document.querySelector(".skill-level");
					level.innerHTML = skillLevel;
					//show the popup window.
					document.body.classList.toggle("show-ski-book-popup");
					//add event to the close button.
					document.querySelector("#ski-book-popup div").addEventListener("click", function(event) {
						document.body.classList.toggle("show-ski-book-popup");
						event.preventDefault();
					})
				}

				else {
					formButton.innerHTML = "Try again"
				}

			});

			//Book an activity page from submission for beach booking.
			const formButtonb = document.querySelector("#Activities #beachbook button");
			// basically same as above.
			document.querySelector("#beachbook").addEventListener("submit", function(event){

				event.preventDefault();

				let firstName = document.querySelector("#form-first-name-b").value;
				let lastName = document.querySelector("#form-last-name-b").value;
				let beachFacility = document.querySelector("#form-beach-facility").value;
				let complete = false;

				console.log(firstName);
				console.log(lastName);

				if(firstName != "" && lastName != "") {
					complete = true;
				}

				if(firstName == "") {
					alert("Please enter your first name.")
				}

				if(lastName == "") {
					alert("Please enter your last name.")
				}

				if(complete) {
					formButtonb.innerHTML = "Done";
					formButtonb.setAttribute("disabled", "true");

					let namespan = document.querySelector(".lastname-b");
					namespan.innerHTML = lastName;

					let facility = document.querySelector(".seat-facility");
					facility.innerHTML = beachFacility;

					document.body.classList.toggle("show-beach-book-popup");

					document.querySelector("#beach-book-popup .close-button").addEventListener("click", function(event) {
						document.body.classList.toggle("show-beach-book-popup");
						event.preventDefault();
					})
				}

				else {
					formButtonb.innerHTML = "Try again"
				}

			});
		}
		



		//Interaction in our architecture page.
		if(page_title == "Our Architectures"){
			//Initialise the parallax plugin
			AOS.init();
		}
        

		//Interaction in book your room page.
		if(page_title == "Book Your room"){
			//Initialise the tiny-slider plugin
			let slider_M = tns({
				container: ".tiny-slider",
				controlsPosition: "bottom",
				nav: false,
				autoplayButtonOutput: false,
				items: 1,
				slideBy: "page",
				autoplay: true
			});
	
			let slider_T = tns({
				container: ".tiny-slider-1",
				controlsPosition: "bottom",
				nav: false,
				autoplayButtonOutput: false,
				items: 1,
				slideBy: "page",
				autoplay: true
			});
			//
			// //book mordern suite room interaction.
			// const formButtonms = document.querySelector("#slideshow #ms_book button");
			//
			// document.querySelector("#ms_book").addEventListener("submit", function(event){
			//
			// 	event.preventDefault();
			// 	//get the value from the form.
			// 	let lastName = document.querySelector("#form-last-name-ms").value;
			// 	let number = document.querySelector("#form-phone-number-ms").value;
			// 	let checkin = document.querySelector("#form-date-in-ms").value;
			// 	let checkout = document.querySelector("#form-date-out-ms").value;
			// 	let complete = false;
			// 	//calculate the days between two days and the cost will spend in these days.
			// 	let date1 = Date.parse(new Date(checkin));
			// 	let date2 = Date.parse(new Date(checkout));
			// 	let days = parseInt((date2 - date1) / (1000 * 60 * 60 * 24));
			// 	let price = days * 7000;
			// 	//check the value on the console.
			// 	console.log(number);
			// 	console.log(lastName);
			// 	console.log(checkin);
			// 	console.log(checkout);
			// 	console.log(days);
			// 	console.log(price);
			// 	//check for the completed input.
			// 	if(number != "" && lastName != "" && checkout != "" && checkin != "" && days > 0) {
			// 		complete = true;
			// 	}
			//
			// 	if(number == "") {
			// 		alert("Please enter your phone number.")
			// 	}
			//
			// 	if(lastName == "") {
			// 		alert("Please enter your last name.")
			// 	}
			//
			// 	if(checkin == "") {
			// 		alert("Please choose a check in date.")
			// 	}
			//
			// 	if(checkout =="") {
			// 		alert("Please choose a check out date.")
			// 	}
			//
			// 	if(days <= 0) {
			// 		alert("Check in date should be earlier than check out date.")
			// 	}
			//
			// 	if(complete) {
			// 		//change the pattern of the button.
			// 		formButtonms.innerHTML = "Done";
			// 		formButtonms.setAttribute("disabled", "true");
			// 		//set the value of the content in the popup window.
			// 		let namespan = document.querySelector("#ms-book-popup .lastname");
			// 		namespan.innerHTML = lastName;
			//
			// 		let dayin = document.querySelector("#ms-book-popup .day-in");
			// 		dayin.innerHTML = checkin;
			//
			// 		let dayout = document.querySelector("#ms-book-popup .day-out");
			// 		dayout.innerHTML = checkout;
			//
			// 		let bookprice = document.querySelector("#ms-book-popup .price");
			// 		bookprice.innerHTML = price;
			//
			// 		//show the popup window.
			// 		document.body.classList.toggle("show-ms-book-popup");
			// 		//set the event of the close button.
			// 		document.querySelector("#ms-book-popup .close-button").addEventListener("click", function(event) {
			// 			document.body.classList.toggle("show-ms-book-popup");
			// 			event.preventDefault();
			// 		})
			// 	}
			//
			// 	else {
			// 		formButtonb.innerHTML = "Try again"
			// 	}
			//
			// });

			//book Traditional Cabin room interaction.
			const formButtontc = document.querySelector("#slideshow #tc_book button");

			document.querySelector("#tc_book").addEventListener("submit", function(event){
				//basically same as above.
				event.preventDefault();

				let lastName = document.querySelector("#form-last-name-tc").value;
				let number = document.querySelector("#form-phone-number-tc").value;
				let checkin = document.querySelector("#form-date-in-tc").value;
				let checkout = document.querySelector("#form-date-out-tc").value;
				let complete = false;
				let date1 = Date.parse(new Date(checkin));
				let date2 = Date.parse(new Date(checkout));
				let days = parseInt((date2 - date1) / (1000 * 60 * 60 * 24));
				// the price for a single day is different.
				let price = days * 15000;

				console.log(number);
				console.log(lastName);
				console.log(checkin);
				console.log(checkout);
				console.log(days);
				console.log(price);

				if(number != "" && lastName != "" && checkout != "" && checkin != "" && days > 0) {
					complete = true;
				}

				if(number == "") {
					alert("Please enter your phone number.")
				}

				if(lastName == "") {
					alert("Please enter your last name.")
				}

				if(checkin == "") {
					alert("Please choose a check in date.")
				}

				if(checkout =="") {
					alert("Please choose a check out date.")
				}

				//check if the checkin date is before the check out date.
				if(days <= 0) {
					alert("Check in date should be earlier than check out date.")
				}

				if(complete) {
					formButtontc.innerHTML = "Done";
					formButtontc.setAttribute("disabled", "true");

					let names = document.querySelector("#tc-book-popup .lastname-tc");
					names.innerHTML = lastName;

					let dayin = document.querySelector("#tc-book-popup .day-in");
					dayin.innerHTML = checkin;

					let dayout = document.querySelector("#tc-book-popup .day-out");
					dayout.innerHTML = checkout;
					
					let bookprice = document.querySelector("#tc-book-popup .price");
					bookprice.innerHTML = price;
					

					document.body.classList.toggle("show-tc-book-popup");

					document.querySelector("#tc-book-popup .close-button").addEventListener("click", function(event) {
						document.body.classList.toggle("show-tc-book-popup");
						event.preventDefault();
					})
				}

				else {
					formButtonb.innerHTML = "Try again"
				}

			});
		}

		//Interaction in cafe page.
		if(page_title == "Cafe"){
			//click the menu button to show the popup menu.
			document.querySelector("#cafe .cafe-1 button").addEventListener("click", function(){
				document.body.classList.toggle("show-cafe-1-book-popup");
			})
	
			document.querySelector("#cafe .cafe-2 button").addEventListener("click", function(){
				document.body.classList.toggle("show-cafe-2-book-popup");
			})
			//set the event on the close button.
			document.querySelector("#cafe-1-popup .close-button").addEventListener("click", function(event) {
				event.preventDefault();
				document.body.classList.toggle("show-cafe-1-book-popup");
			})

			document.querySelector("#cafe-2-popup .close-button").addEventListener("click", function(event) {
				event.preventDefault();
				document.body.classList.toggle("show-cafe-2-book-popup");
			})
			//get the value from the menu from.
			document.querySelector("#cafe-1-popup").addEventListener("submit", function(event){

				event.preventDefault();

				let orders = document.getElementsByName("c-1-order");

				check_value = [];

				total = 0;
				//calculate the total price ordered by the customers.
				for(order in orders) {
					if(orders[order].checked)
						total = total + parseInt(orders[order].value);
				}

				alert("Total: " + total);


			});
			
			document.querySelector("#cafe-2-popup").addEventListener("submit", function(event){

				event.preventDefault();

				let orders = document.getElementsByName("c-2-order");

				check_value = [];

				total = 0;

				for(order in orders) {
					if(orders[order].checked)
						total = total + parseInt(orders[order].value);
				}

				alert("Total: " + total);


			});
		}

		


        



	}
});