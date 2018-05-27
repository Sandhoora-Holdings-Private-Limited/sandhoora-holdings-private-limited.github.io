$(document).ready(function() {
    // process the form
    $('#contact-form').submit(function(event) {
    	console.log(3);
    	$('input[name=name]').attr("disabled", true);
    	$('input[name=surname]').attr("disabled", true);
    	$('input[name=email]').attr("disabled", true);
    	$('input[name=message]').attr("disabled", true);
    	$('input[name=submit]').attr("disabled", true);
    	$('input[name=submit]').css("display", "none");
    	$("#contact_form_loading").css("display", "block");
    	$("#contact_form_fail_message").css("display", "none");
    	$("#contact_form_success_message").css("display", "none");

    	// stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'name'              : $('input[name=name]').val(),
            'surname'              : $('input[name=surname]').val(),
            'email'             : $('input[name=email]').val(),
            'message'    : $('textarea[name=message]').val()
        };

        var emailData = {
				"name": formData['name'],
				"surname": formData['surname'],
				"email": formData['email'],
				"message": formData['message']
			}
        var settings = {
		  	"async": true,
			  "crossDomain": true,
			  "url": "https://aws.sandhooraholdings.lk:3000/",
			  "method": "POST",
			  "dataType": "json",
			  "headers": {
				"Access-Control-Allow-Origin" : "*",
				"Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept",
				"Access-Control-Allow-Methods" : "GET,PUT,POST,DELETE",
				"Content-Type": "application/json",
				"Cache-Control": "no-cache",
			  },
		  	"processData": false,
		  	"crossDomain":true,
		  	"timeout": 30000,
		  	"data": JSON.stringify(emailData)
		}

		$.ajax(settings)
		.done(function (response) {
		  if(response.success){
		  	$('input[name=name]').attr("disabled", true);
	    	$('input[name=surname]').attr("disabled", true);
	    	$('input[name=email]').attr("disabled", true);
	    	$('input[name=message]').attr("disabled", true);
	    	$('input[name=submit]').attr("disabled", true);
	    	$('input[name=submit]').css("display", "block");
	    	$("#contact_form_loading").css("display", "none");
	    	$("#contact_form_fail_message").css("display", "none");
	    	$("#contact_form_success_message").css("display", "block");
		  }
		  else{
		  	$('input[name=name]').attr("disabled", false);
	    	$('input[name=surname]').attr("disabled", false);
	    	$('input[name=email]').attr("disabled", false);
	    	$('input[name=message]').attr("disabled", false);
	    	$('input[name=submit]').attr("disabled", false);
	    	$('input[name=submit]').css("display", "block");
	    	$("#contact_form_loading").css("display", "none");
	    	$("#contact_form_fail_message").css("display", "block");
	    	$("#contact_form_success_message").css("display", "none");
		  }
		})
		.fail(function(data) {
	        $('input[name=name]').attr("disabled", false);
	    	$('input[name=surname]').attr("disabled", false);
	    	$('input[name=email]').attr("disabled", false);
	    	$('input[name=message]').attr("disabled", false);
	    	$('input[name=submit]').attr("disabled", false);
	    	$('input[name=submit]').css("display", "block");
	    	$("#contact_form_loading").css("display", "none");
	    	$("#contact_form_fail_message").css("display", "block");
	    	$("#contact_form_success_message").css("display", "none");
    	});
    });

});
