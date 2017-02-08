"use strict";

// MY NOTES:
// --variables are set up within each section to improve readability
// --Section 3 needs to be refactored
// --Section 4 needs to be refactored
// --Section 4.b This section was refactored using other developers code --> My orginal code worked however was 25 lines compared to 6 
// -- 

//1. Give focus to the first text field
$("#name").focus();

//2. Reveal textfield if other option is selected from check box
// a) create empty textfield with placeholder text --> hide textfield
 $("#title").parent().append('<input type="text" id="other-field" placeholder="Your job title">');
 $("#other-field").hide();

// b) When 'other' is clicked, it will reveal the text field
$("#title").change(function() {
	if($("select#title").val() === "other"){
		$("#other-field").show();
	}else{
		$("#other-field").hide();
	}
});

//3. create an empty selction value --> hide section
$("#color").prepend('<option value="selectColor" selected>Select T-Shirt Color</option>');
$("#colors-js-puns").hide()

// a)If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
$("#design").change(function() {
	if($("select#design").val() === "js puns"){	
		$("#colors-js-puns").show();	
		$( "#color option[value='tomato']").hide();
		$( "#color option[value='steelblue']").hide();
		$( "#color option[value='dimgrey']").hide();
		$( "#color option[value='gold']").show();
		$( "#color option[value='cornflowerblue']").show();
		$( "#color option[value='darkslategrey']").show();
	}

// b)If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."
	if($("select#design").val() === "heart js"){
		$("#colors-js-puns").show();
		$( "#color option[value='gold']").hide();
		$( "#color option[value='cornflowerblue']").hide();
		$( "#color option[value='darkslategrey']").hide();
		$( "#color option[value='tomato']").show();
		$( "#color option[value='steelblue']").show();
		$( "#color option[value='dimgrey']").show();
	}
});

//4.  Disable conflicting time slots and calulate the total amount based on users input
// a) Setup variables
var mainConference = $("input[name='all']");
var jsFrameworks = $("input[name='js-frameworks']");
var jsLibs = $("input[name='js-libs']");
var express = $("input[name='express']");
var node = $("input[name='node']");
var buildTools = $("input[name='build-tools']");
var npm = $("input[name='npm']");

// b) create functions that will disable all other conflicting time's based on user's selection
jsFrameworks.change( function () {
    if($(this).prop("checked")){
    	express.prop( "disabled", true );
    	buildTools.prop( "disabled", true );
    }else{
    	express.prop( "disabled", false );
    	buildTools.prop( "disabled", false );   	
    } 
});

jsLibs.change( function () {
    //If JS Libraries  is Selected
    if($(this).prop("checked")){
    	node.prop( "disabled", true );
    	npm.prop( "disabled", true );
    }else{
    	node.prop( "disabled", false );
    	npm.prop( "disabled", false );
    }
 }); 

express.change( function () {
    //If Express  is Selected
    if($(this).prop("checked")){
    	jsFrameworks.prop( "disabled", true );
    	buildTools.prop( "disabled", true );
    }else{
    	jsFrameworks.prop( "disabled", false );
    	buildTools.prop( "disabled", false );
    }   
});

node.change( function () {
    //If Node  is Selected
    if($(this).prop("checked")){
    	jsLibs.prop( "disabled", true );
    	npm.prop( "disabled", true );
    }else{
    	jsLibs.prop( "disabled", false );
    	npm.prop( "disabled", false );
    }  
});

buildTools.change( function () {
    //If Build Tools  is Selected
    if($(this).prop("checked")){
    	jsFrameworks.prop( "disabled", true );
    	express.prop( "disabled", true );
    }else{
    	jsFrameworks.prop( "disabled", false );
    	express.prop( "disabled", false );
    }  
});

npm.change( function () {
    //If NPM  is Selected
    if($(this).prop("checked")){
    	jsLibs.prop( "disabled", true );
    	node.prop( "disabled", true );
    }else{
    	jsLibs.prop( "disabled", false );
    	node.prop( "disabled", false );
    } 
});

// d) calculate final price based on users selection
$(".activities").append('<div class ="totalPrice"><h2></h2></div>');
$(".activities input:checkbox").click(function() {
     // declare the amount value to sum up total cost
    	var totalAmount = 0;
      // if is not equal
    	$(".activities input[name!='all']:checked").each(function() {
    		totalAmount += 100;
      });
    	$(".activities input[name ='all']:checked").each(function() {
    		totalAmount += 200;
    	});

    	$(".totalPrice").text("Total $" + totalAmount);
    });


 


