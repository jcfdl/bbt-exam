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