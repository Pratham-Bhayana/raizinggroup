(function () {
	"use strict";

	var LOADER_ID = "rg-preloader";
	var MIN_VISIBLE_MS = 3500;
	var MAX_VISIBLE_MS = 7500;
	var EXIT_MS = 1200;

	function now() {
		return (window.performance && performance.now && performance.now()) || Date.now();
	}

	function $(selector) {
		return document.querySelector(selector);
	}

	function hideLoader(reason) {
		var loader = document.getElementById(LOADER_ID);
		if (!loader || loader.getAttribute("aria-hidden") === "true") return;
		if (loader.getAttribute("data-rg-state") === "exiting") return;
		loader.setAttribute("data-rg-state", "exiting");

		loader.setAttribute("data-hide-reason", reason || "auto");
		loader.classList.add("rg-preloader--exit");

		var skipBtn = loader.querySelector("[data-rg-skip]");
		if (skipBtn) skipBtn.disabled = true;

		window.setTimeout(function () {
			loader.setAttribute("aria-hidden", "true");
			document.documentElement.classList.remove("rg-is-loading");
			document.body.classList.remove("rg-is-loading");
		}, EXIT_MS);

		// Remove from the DOM after the fade-out and dispatch completion event
		window.setTimeout(function () {
			if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
			
			// Dispatch event to signal preloader is fully complete
			try {
				var event = new CustomEvent("rg-preloader-complete");
				window.dispatchEvent(event);
			} catch (e) {
				// Fallback for older browsers
				var evt = document.createEvent("Event");
				evt.initEvent("rg-preloader-complete", true, true);
				window.dispatchEvent(evt);
			}
		}, EXIT_MS + 250);
	}

	function init() {
		var loader = document.getElementById(LOADER_ID);
		if (!loader) return;

		var start = now();

		document.documentElement.classList.add("rg-is-loading");
		document.body.classList.add("rg-is-loading");

		var skipBtn = $("#" + LOADER_ID + " [data-rg-skip]");
		if (skipBtn) {
			skipBtn.addEventListener("click", function () {
				hideLoader("skip");
			});
		}

		// Ensure the loader stays up briefly (prevents flash), but never longer than MAX.
		function maybeHideOnLoad() {
			var elapsed = now() - start;
			var remainingToMin = Math.max(0, MIN_VISIBLE_MS - elapsed);
			window.setTimeout(function () {
				hideLoader("load");
			}, remainingToMin);
		}

		if (document.readyState === "complete") {
			maybeHideOnLoad();
		} else {
			window.addEventListener("load", maybeHideOnLoad, { once: true });
		}

		window.setTimeout(function () {
			hideLoader("timeout");
		}, MAX_VISIBLE_MS);
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init, { once: true });
	} else {
		init();
	}
})();
