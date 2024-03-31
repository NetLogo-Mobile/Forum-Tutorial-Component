import loadScript from "discourse/lib/load-script";
import { apiInitializer } from "discourse/lib/api";

// Load the tutorial driver script
async function loadTutorial() {
	// Load the driver
	await loadScript(settings.theme_uploads_local.driver_js);
	const driver = window.driver.js.driver;
	// Load the config
	await loadScript(settings.theme_uploads_local.physics_lab);
	const config = window.discourseTutorial;
	console.log(config);
}

// Register the initializer
export default apiInitializer("1.13.0", (api) => {
	loadTutorial();
});