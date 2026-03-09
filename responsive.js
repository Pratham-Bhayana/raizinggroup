(function () {
	"use strict";

	function setExpanded(button, expanded) {
		if (!button) return;
		button.setAttribute("aria-expanded", expanded ? "true" : "false");
		button.setAttribute("aria-label", expanded ? "Close menu" : "Open menu");
	}

	function openMenu() {
		document.body.classList.add("menu-open");
		setExpanded(document.querySelector("[data-menu-button]"), true);
	}

	function closeMenu() {
		document.body.classList.remove("menu-open");
		setExpanded(document.querySelector("[data-menu-button]"), false);
	}

	function toggleMenu() {
		if (document.body.classList.contains("menu-open")) {
			closeMenu();
		} else {
			openMenu();
		}
	}

	function onKeyDown(e) {
		if (e.key === "Escape") closeMenu();
	}

	function onResize() {
		// If we return to desktop, ensure the menu isn't stuck open.
		if (window.matchMedia("(min-width: 981px)").matches) {
			closeMenu();
		}
	}

	document.addEventListener("click", function (e) {
		var button = e.target.closest("[data-menu-button]");
		if (button) {
			e.preventDefault();
			toggleMenu();
			return;
		}

		// If a link inside the drawer is tapped, close the menu.
		var drawerLink = e.target.closest(".sidebar a");
		if (drawerLink && document.body.classList.contains("menu-open")) {
			closeMenu();
		}

		var overlay = e.target.closest("[data-menu-overlay]");
		if (overlay) {
			closeMenu();
		}

		var closeEl = e.target.closest("[data-menu-close]");
		if (closeEl) {
			closeMenu();
		}
	});

	window.addEventListener("keydown", onKeyDown);
	window.addEventListener("resize", onResize, { passive: true });

	// Ensure a consistent initial state.
	closeMenu();
})();
