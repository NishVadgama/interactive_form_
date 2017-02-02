var $getRole = $("#title option:last").val();

//1. When the page loads, give focus to the first text field
$("#name").focus();

//2.  A text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.

$("#title option:last").click(function() {
  
  var textArea = $('<textarea style="padding-left:100px" />'); 
  $getRole.append(textArea);
});

