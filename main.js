$(document).ready(function () {
	const total_budget = parseFloat($(".total_budget").find("span").text());

	$("body").on("change", "input[type='checkbox']", function (e) {
		let remaining = total_budget;

		$("input[type='checkbox']:checked").each(function () {
			const $this_checkbox = $(this);
			const value = parseFloat($this_checkbox.val());

			remaining = remaining - value;
		});

		console.log(remaining);
		$(".total_budget").find("span").text(remaining);

		if (remaining < 0) {
			//make the text red //
			$(".total_budget").addClass("active");

		} else {
			//make the text unred //
			$(".total_budget").removeClass("active");
		}


	});
});