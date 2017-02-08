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

//4.  Some events are at the same time as others. If the user selects a workshop, don't allow selection of a workshop at the same date and 
//time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
var jsFrameworks = $("input[name='js-frameworks'");
var jsLibs = $("input[name='js-libs']");
var express = $("input[name='express']");
var node = $("input[name='node']");
var buildTools = $("input[name='build-tools']");
var npm = $("input[name='npm']");


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


//  $(".activities").append('<div class = "Total price"><h2>Total:  </h2></div>');