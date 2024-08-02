function theme() {
	let dark = $state(false);
	let animating = $state(false);
	if (typeof window !== "undefined") {
		initialize();
	}

	function initialize() {
		const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
		mediaQueryList.addEventListener("change", (e) => {
			dark = e.matches;
		});
		changeCSS();
		return () => {
			mediaQueryList.removeEventListener("change", (e) => {
				dark = e.matches;
			});
		};
	}

	function changeCSS() {
		const root = document.documentElement;
		const properties = {
			"--txt-clr": dark ? "var(--dark)" : "var(--lite)",
			"--less-clr": dark ? "var(--lite-less)" : "var(--dark-less)",
			"--more-clr": dark ? "var(--lite-more)" : "var(--dark-more)",
			"--bg-clr": dark
				? "linear-gradient(to top, var(--lite), var(--lite-more))"
				: "linear-gradient(to top, var(--dark-more), var(--dark-less))",
			"--bg-footer": dark ? "var(--footer-lite)" : "var(--footer-dark)",
			"--pri-more": dark ? "var(--pri-lite)" : "var(--pri-dark)",
			"--txt-neg": dark ? "var(--lite)" : "var(--dark)",
		};
		for (const [key, value] of Object.entries(properties)) {
			root.style.setProperty(key, value);
		}
	}

	async function toggle() {
		if (animating) return;
		animating = true;
		dark = !dark;
		changeCSS();

		const iconElement = document.querySelector(".mode-icon") as HTMLElement;
		if (iconElement) {
			iconElement.style.animationDirection = dark ? "normal" : "reverse";

			await new Promise((resolve) => setTimeout(resolve, 1000));

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
		toggle,
	};
}

export const currentTheme = theme();
