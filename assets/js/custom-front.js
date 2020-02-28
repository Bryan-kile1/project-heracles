// File for your custom JavaScript

// Click to Add/Remove Close on Home Page Accordion Section

$('#boxFrequency').click(function(){
	// Add/Remove Active Classes on Accordion Text
	$(this).addClass('active');
	$('#boxSpend').removeClass('active');
	$('#boxMotivate').removeClass('active');
	// Display/Hide Images Based on Selected Accordion Text
	$('#imgSpend').addClass('fadeOut animated');
	$('#imgSpend').css({
		'display': 'none',
	});
	$('#imgMotivate').addClass('fadeOut animated');
	$('#imgMotivate').css({
		'display': 'none',
	});
	$('#imgFrequency').css({
		'display': 'block',
	});
	$('#imgFrequency').removeClass('fadeOut animated');
	$('#imgFrequency').addClass('fadeIn animated');
});

$('#boxSpend').click(function(){
	// Add/Remove Active Classes on Accordion Text
	$(this).addClass('active');
	$('#boxFrequency').removeClass('active');
	$('#boxMotivate').removeClass('active');
	// Display/Hide Image Based on Selected Accordion Text
	$('#imgFrequency').addClass('fadeOut animated');
	$('#imgFrequency').css({
		'display': 'none',
	});
	$('#imgMotivate').addClass('fadeOut animated');
	$('#imgMotivate').css({
		'display': 'none',
	});
	$('#imgSpend').css({
		'display': 'block',
	});
	$('#imgSpend').removeClass('fadeOut animated');
	$('#imgSpend').addClass('fadeIn animated');
});

$('#boxMotivate').click(function(){
	// Add/Remove Active Classes on Accordion Text
	$(this).addClass('active');
	$('#boxFrequency').removeClass('active');
	$('#boxSpend').removeClass('active');
	// Display/Hide Image Based on Selected Accordion Text
	$('#imgFrequency').addClass('fadeOut animated');
	$('#imgFrequency').css({
		'display': 'none',
	});
	$('#imgSpend').addClass('fadeOut animated');
	$('#imgSpend').css({
		'display': 'none',
	});
	$('#imgMotivate').css({
		'display': 'block',
	});
	$('#imgMotivate').removeClass('fadeOut animated');
	$('#imgMotivate').addClass('fadeIn animated');
});

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Capture UTM Parameters for Pardot Forms

// Parse the URL

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Give the URL parameters variable names

var source = getParameterByName('utm_source');
var medium = getParameterByName('utm_medium');
var campaign = getParameterByName('utm_campaign');
 
// Put the variable names into the hidden fields in the form. selector should be "p.YOURFIELDNAME input"

document.querySelector("p.source input").value = source;
document.querySelector("p.utm_medium input").value = medium;
document.querySelector("p.utm_campaign input").value = campaign;