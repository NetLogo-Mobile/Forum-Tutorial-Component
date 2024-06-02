import loadScript from "discourse/lib/load-script";
import { apiInitializer } from "discourse/lib/api";
import Ember from 'ember';

const DELAY_TIME = 300;  //How many milliseconds should we wait after an async tutorial click operation?

// Load the tutorial driver script
async function loadTutorial(api) {
  console.log('Current URL:', window.location.href);
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
  console.log("username: " + api.getCurrentUser().username_lower);
  console.log("Finding tutorial: " + window.location.pathname);
  let Tutorial;
  for(let key in mappings){
    if(mappings.hasOwnProperty(key)){
      if (key.startsWith("-")) {
        let path = `/u/${api.getCurrentUser().username_lower}/${key.slice(1)}`;
        if (path == window.location.pathname) {
          Tutorial = mappings[key];
          break;
        }
      }
      if(new RegExp(key).test(window.location.pathname)){
        Tutorial = mappings[key];
        break;
      }
    }
    Tutorial = undefined;
  }
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
  let newsteps = steps.map((step) => {
    if (step.popover.hasOwnProperty("nextClick")) {
      const hopeElement = step.popover?.hopeElement;
      if (hopeElement === undefined) return step
      step.popover.onNextClick = function() {
        try {
          if (document.querySelector(step.popover.hopeElement)!= null) {
            window.myDriver.moveNext()
            return;
          }
          document.querySelector(step.popover.nextClick).click();
          setTimeout(() => window.myDriver.moveNext() ,DELAY_TIME) // wait for loading
        } catch (e) {
          myDriver.destroy();
          console.error(e);
        }
      }
    }
    return step;
  })
  console.log(newsteps)
  // Show the tutorial
  const driverConfig = {
    overlayColor: 'rgba(31, 31, 34, 0.73)',
    doneBtnText: locale("done"),
    showProgress: true,
    nextBtnText: locale("next"),
    prevBtnText: locale("prev"),
    showButtons: ['next','previous','close'],
    allowClose: false,
    allowKeyboardControl: true,
    steps: newsteps,
    onCloseClick: () => {
      status.Cancelled++;
      saveStatus();
    },
    onHighlighted: (element,step, options) => {
      console.log(options)
      document.querySelector("body > div.driver-popover > div.driver-popover-footer > span.driver-popover-navigation-btns").innerHTML += '<button class="close">关闭</button>'
    }
  };
  console.log(driverConfig);
  window.myDriver = driver(driverConfig)
  window.myDriver.drive();
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
  
  api.onPageChange((url) => {
    loadTutorial(api);
  });
  
})
