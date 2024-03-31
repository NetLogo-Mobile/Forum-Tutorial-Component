import loadScript from "discourse/lib/load-script";
import { apiInitializer } from "discourse/lib/api";
// Load the tutorial driver script
async function loadTutorial(api) {
	// Load the config
	window.tutorialLocale = (key) => I18n.t(themePrefix(key));
	window.testTutorial = showTutorial;
	await loadScript(settings.theme_uploads_local.physics_lab);
	const config = window.discourseTutorial;
	// Load the status
	loadStatus();
	// Stop it if the user closed too many times
	if (status.Cancelled >= 3) return;
	// Try to decide if we should show a tutorial
	const logged = api.getCurrentUser() !== null;
	const mappings = logged ? config.loggedMappings : config.unloggedMappings;
	console.log("Login status: " + logged);
	console.log("Finding tutorial: " + window.location.pathname);
	var Tutorial = mappings[window.location.pathname];
	if (Tutorial === undefined) return;
	console.log("Preparing for the tutorial: " + Tutorial);
	if (status.Showed[Tutorial] !== undefined) return;
	console.log("Showing the tutorial: " + Tutorial);
	// Save the status
	status.Showed[Tutorial] = true;
	saveStatus();
	// Show the tutorial
	await showTutorial(config.tutorials[Tutorial]);
}

// Show the tutorial
async function showTutorial(steps) {
	// Load the driver
	await loadScript(settings.theme_uploads_local.driver_js);
	const driver = window.driver.js.driver;
	// Async Tour
	let newsteps = steps.map( (step) => {
	  if(step.popover.hasOwnProperty("nextClick")){
	   const hopeElement = step.popover?.hopeElement;
	   if (hopeElement == undefined) return step
	   step.popover.onNextClick = function(){
	     document.querySelector(step.popover.nextClick).click()
	     myDriver.moveNext()
	   }
	  }
	  return step
	})
	console.log(newsteps)
	// Show the tutorial
	const driverConfig = {
		doneBtnText: locale("done"),
		nextBtnText: locale("next"),
		prevBtnText: locale("prev"),
		allowClose: false,
		allowKeyboardControl: true,
		steps: newsteps,
		onCloseClick: () => {
			status.Cancelled++;
			saveStatus();
		}
	};
	console.log(driverConfig);
	const myDriver = driver(driverConfig)
	myDriver.drive();
}

// Tutorial statuses
const status = {
	Cancelled: 0, // How often did the user cancel?
	Showed: {}, // Pages shown for the user.
}

// Load the status from local storage
function loadStatus() {
	try {
		status = JSON.parse(localStorage.getItem("tutorialStatus"));
	} catch (e) {}
}

// Save the status to local storage
function saveStatus() {
	localStorage.setItem("tutorialStatus", JSON.stringify(status));
}

// Register the initializer
export default apiInitializer("1.13.0", (api) => {
	loadTutorial(api);
});