$("#collapseNavbar").on("click", () => {
	let navBar = $("nav")
	let body = $("body")
	if (navBar.hasClass("show-navbar-collapse")) {
		setTimeout(() => {
			navBar.toggleClass("show-navbar-collapse")
			body.toggleClass("overflow-hidden")
		}, 400)
	}
	else {
		navBar.toggleClass("show-navbar-collapse")
		body.toggleClass("overflow-hidden")
	}
})

$("#contactUs").on("submit", (e) => {
	e.preventDefault()
	if (validateForm("#contactUs"))
		clearForm("#contactUs")
})

function validateForm(form) {
	let checker = true
	$(`${form} *`).filter(":input").each(function() {
		if ($(this).prop('required')) {
			if (!$(this).val()) {
				$(this).addClass('is-invalid')
				let feedback = $(this).attr('aria-describedby')
				$(`#${feedback}`).html('This field is required.')
				checker = false
			}
			else if ($(this).attr('id') == 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($(this).val())) {
				$(this).addClass('is-invalid')
				let feedback = $(this).attr('aria-describedby')
				$(`#${feedback}`).html('Enter a valid email address.')
				checker = false
			}
			else if ($(this).attr('id') == 'contactNumber' && !/^[0-9]+$/.test($(this).val())) {
				$(this).addClass('is-invalid')
				let feedback = $(this).attr('aria-describedby')
				$(`#${feedback}`).html('Enter a valid contact number.')
				checker = false
			}
			else {
				if ($(this).hasClass('is-invalid'))
					$(this).removeClass('is-invalid')
			}
		}
	})

	return checker
}

function clearForm(form) {
	$(`${form} *`).filter(":input").each(function() {
		if ($(this).attr("id") == "contactTime")
			$(this).val("9:00am")
		else if ($(this).attr("id") == "topic")
			$(this).val("Kiwisaver")
		else
			$(this).val("");
	})
}