import loadScript from "discourse/lib/load-script";
import { apiInitializer } from "discourse/lib/api";

const AsyncDelay = 300; //How many milliseconds should we wait after an async tutorial click operation?
let Tutorial;
  
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
  console.log("Finding tutorial: " + window.location.pathname);
  for (let key in mappings) {
    if (mappings.hasOwnProperty(key)) {
      if (key.startsWith("-")) {
        let path = `/u/${encodeURIComponent(api.getCurrentUser().username_lower)}/${key.slice(1)}`;
        if (path == window.location.pathname) {
          Tutorial = mappings[key];
          break;
        }
      }
      if (new RegExp(key).test(window.location.pathname)) {
        Tutorial = mappings[key];
        break;
      }
    }
    Tutorial = undefined;
  }
  if (Tutorial === undefined) return;
  // Check if the tutorial was closed within the last 30 minutes
  const thirtyMinutesAgo = new Date().getTime() - 30 * 60 * 1000;
  if (
    status.ClosedAt[Tutorial] !== undefined &&
    status.ClosedAt[Tutorial] > thirtyMinutesAgo
  )
    return;
  console.log("Preparing for the tutorial: " + Tutorial);
  if (status?.Showed?.[Tutorial] === true) return;
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
  // Async Tour
  let newsteps = steps.map((step) => {
    if (step.popover.hasOwnProperty("nextClick")) {
      const hopeElement = step.popover?.hopeElement;
      if (hopeElement === undefined) return step;
      step.popover.onNextClick = function () {
        try {
          if (document.querySelector(step.popover.hopeElement) != null) {
            Driver.moveNext();
            return;
          }
          document.querySelector(step.popover.nextClick).click();
          setTimeout(() => Driver.moveNext(), AsyncDelay); // wait for loading
        } catch (e) {
          Driver.destroy();
          console.error(e);
        }
      };
    }
    return step;
  });
  console.log(newsteps);

  // Show the tutorial
  const driverConfig = {
    overlayColor: "rgba(31, 31, 34, 0.73)",

    allowClose: false,
    showProgress: true,
    allowKeyboardControl: true,

    doneBtnText: locale("done"),
    nextBtnText: locale("next"),
    prevBtnText: locale("prev"),

    steps: newsteps,

    onHighlighted: (element, step, options) => {
      function _createCloseButton() {
        const popoverContent = document.getElementById(
          "driver-popover-content"
        );
        const closeButton = document.createElement("button");
        closeButton.textContent = "╳";
        closeButton.classList.add("driver-custom-popover-close-btn");
        popoverContent.appendChild(closeButton);
        closeButton.addEventListener("click", () => {
          // Check if the tutorial has been closed twice
          if (status.ClosedAt[Tutorial] !== undefined) status.Cancelled++;
          status.ClosedAt[Tutorial] = new Date().getTime(); // Record close timestamp
          status.Showed[Tutorial] = false;
          saveStatus();
          Driver.destroy();
        });
      }

      Driver.hasNextStep() && _createCloseButton();
    },
  };

  console.log(driverConfig);
  var Driver = driver.js.driver(driverConfig);
  Driver.drive();
}

// Tutorial statuses
let status = {
  Cancelled: 0, // How often did the user cancel?
  Showed: {}, // Pages shown for the user.
  ClosedAt: {}, // Timestamp when each tutorial was last closed.
};

// Load the status from local storage
function loadStatus() {
  try {
    status = JSON.parse(localStorage.getItem("tutorialStatus")) || status;
  } catch (e) {}
}

// Save the status to local storage
function saveStatus() {
  localStorage.setItem("tutorialStatus", JSON.stringify(status));
}

// Register the initializer
export default apiInitializer("1.13.0", (api) => {
  api.onPageChange((url) => {
    loadTutorial(api);
  });
});
