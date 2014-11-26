//top menu --> add Issues
$( document ).ready(function() {

	$('#top-menu>ul li:eq(2)').after(
			$('<li>').append(
				$('<a>').attr({href:'/issues', class:'issues'}).append(
					$('<span>').append("Issues")
	)));  
});

