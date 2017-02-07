"use strict";

//1. When the page loads, give focus to the first text field
$("#name").focus();

//2.  A text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
//a) Crete a text field
 $("#title").parent().append('<input type="text" id="other-field" placeholder="Your job title">');
 $("#other-field").hide();

//b) When 'other' is clicked, it will reveal Text Field
$("#title").change(function() {
	if($("#title option:selected").val() === "other"){
		$("#other-field").show();
	}else{
		$("#other-field").hide();
	}
});





