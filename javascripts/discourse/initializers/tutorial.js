import loadScript from "discourse/lib/load-script";
import { apiInitializer } from "discourse/lib/api";

// Load the tutorial driver script
async function loadTutorial() {
	await loadScript(settings.theme_uploads_local.driver_js);
}

// Register the initializer
export default apiInitializer("1.13.0", (api) => {
	loadTutorial();
});