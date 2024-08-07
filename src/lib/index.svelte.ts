/**
 * Initializes and manages the theme of the application.
 *
 * @return {object} An object containing the theme's state and methods to toggle the theme.
 */
function theme() {
	let dark = $state(false);
	let animating = $state(false);
	const timeout = 300;
	if (typeof window !== "undefined") {
		initialize();
	}

	/**
	 * Initializes the theme of the application based on the user's preferred color scheme.
	 *
	 * @return {() => void} A function to remove the event listener when the component is destroyed.
	 */
	function initialize() {
		const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
		mediaQueryList.addEventListener("change", (e) => {
			dark = e.matches;
		});
		dark = true;
		changeCSS();
		return () => {
			mediaQueryList.removeEventListener("change", (e) => {
				dark = e.matches;
			});
		};
	}

	/**
	 * Updates the CSS properties of the root element based on the current theme.
	 *
	 * This function retrieves the root element of the document and sets the CSS properties
	 * for the different theme variables. The properties are determined based on the
	 * current value of the `dark` variable.
	 *
	 * @return {void} This function does not return a value.
	 */
	function changeCSS() {
		const root = document.documentElement;
		const properties = {
			"--txt-clr": !dark ? "var(--dark)" : "var(--lite)",
			"--less-clr": !dark ? "var(--lite-less)" : "var(--dark-less)",
			"--more-clr": !dark ? "var(--lite-more)" : "var(--dark-more)",
			"--bg-clr": !dark ? "var(--grad-lite)" : "var(--grad-dark)",
			"--bg-footer": !dark ? "var(--footer-lite)" : "var(--footer-dark)",
			"--pri-more": !dark ? "var(--pri-lite)" : "var(--pri-dark)",
			"--txt-neg": !dark ? "var(--lite)" : "var(--dark)",
			"--hero-p-bg": !dark ? "var(--p-bg-lite)" : "var(--p-bg-dark)",
		};
		for (const [key, value] of Object.entries(properties)) {
			root.style.setProperty(key, value);
		}
	}
	/**
	 * Toggles the theme of the application.
	 *
	 * @return {Promise<void>} A promise that resolves when the theme has been toggled.
	 */
	async function toggle() {
		if (animating) return;
		animating = true;
		dark = !dark;
		changeCSS();

		const iconElement = document.querySelector(".mode-icon") as HTMLElement;
		if (iconElement) {
			iconElement.style.animationDirection = dark ? "normal" : "reverse";

			await new Promise((resolve) => setTimeout(resolve, timeout));

			animating = false;
		}
	}

	return {
		get dark() {
			return dark;
		},
		get animating() {
			return animating;
		},
		get timeout() {
			return timeout;
		},
		toggle,
	};
}

export const currentTheme = theme();
