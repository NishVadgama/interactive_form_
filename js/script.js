"use strict";

//1. When the page loads, give focus to the first text field
$("#name").focus();

//2.  A text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
//a) Crete a text field
 $("#title").parent().append('<input type="text" id="other-field" placeholder="Your job title">');
 $("#other-field").hide();

//b) When 'other' is clicked, it will reveal Text Field
$("#title").change(function() {
	if($("select#title").val() === "other"){
		$("#other-field").show();
	}else{
		$("#other-field").hide();
	}
});

//3.  T-Shirt Info” section of the form:
// If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."

// If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."

$("#color").prepend('<option value="selectColor" selected>Select T-Shirt Color</option>');

$("#design").change(function() {
	if($("select#design").val() === "js puns"){		
		$( "#color option[value='tomato']").hide();
		$( "#color option[value='steelblue']").hide();
		$( "#color option[value='dimgrey']").hide();
		$( "#color option[value='gold']").show();
		$( "#color option[value='cornflowerblue']").show();
		$( "#color option[value='darkslategrey']").show();
	}
	if($("select#design").val() === "heart js"){
		$( "#color option[value='gold']").hide();
		$( "#color option[value='cornflowerblue']").hide();
		$( "#color option[value='darkslategrey']").hide();
		$( "#color option[value='tomato']").show();
		$( "#color option[value='steelblue']").show();
		$( "#color option[value='dimgrey']").show();

	}

});
