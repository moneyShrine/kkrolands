$(document).ready(function(){
	$("#formid").submit(function (event) {
		event.preventDefault(); // Prevent form submission

		// Serialize form data
		var formData = $(this).serialize();

		// Send data using Ajax
		$.ajax({
			type: "POST",
			url: "https://kkrolands.com/assets/js/send_email.php", // Replace with the actual path
			data: formData,		
			success: function (response) {
				alertify.alert(response).setHeader('<em> Message sent </em> ');					
				location.reload();
				// Handle the response from the PHP script
				alert(response); // You can customize this based on your requirements
			},
			error : function (e) {	
				console.log(e);
				//alertify.alert(e).setHeader('<em> Registration Successful </em> ');		
			}
		});
	})

});