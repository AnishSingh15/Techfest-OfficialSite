$(document).ready(function () {
	// Users can skip the loading process if they want.
	$(".skip").click(function () {
		$(".overlay, body").addClass("loaded");
	});

	// Will wait for everything on the page to load.
	$(window).bind("load", function () {
		$(".overlay, body").addClass("loaded");
		setTimeout(function () {
			$(".overlay").css({ display: "none" });
		}, 3000);
	});

	// Will remove overlay after 1min for users cannnot load properly.
	setTimeout(function () {
		$(".overlay, body").addClass("loaded");
	}, 5000);

	$(window).load(function() {
		setInterval(function() {
		  $(".loader").fadeOut("slow")
		}, 3000);
	  });
});
