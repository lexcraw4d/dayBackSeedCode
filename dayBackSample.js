// Displays a timezone selector in DayBack's Settings sidebar
// and changes timezone when you select a resource sub folder
// with the name of the sub folders
// Action Type: Custom App Action - After Filter Selection
// Prevent Default Action: No
// More info on custom app actions here:
// https://docs.dayback.com/article/140-custom-app-actions

let initialItem = params.data.item;
let isSelected = initialItem.status.selected;

// console.log('tagArr', tagArr)

if (isSelected === true) {
  showModal();
}
//Personalized DayBack Calendar based on filtering through family/co-workers and their given timezones
function showModal() {
  //Message displayed in modal
  const title = "Time Zone Confirmation";
  //Template literal added for customization in presenting the selected filters name
  var message = `Would you like to change to the selected timezone?`;
  const cancelButtonText = "No";
  const confirmButtonText = "Yes";
  //Modal display method and callbacks
  //if user selects no then null is used as the cancelFunction
  utilities.showModal(
    title,
    message,
    cancelButtonText,
    null,
    confirmButtonText,
    confirmFunction
  );
}
function confirmFunction() {
  //Custimization based on sub-folder/ sub-filter's name
  //Optional to set to your own needs

  var data = params.data.item.tags;
  if (data) {
    for (let i = 0; i < data.length; i++) {
      let tagName = data[i].name;
      //convert to lowercase
      //add switch case statement if eastern || est : Eastern
      getTimeZone(tagName);
    }
    function getTimeZone(tagName) {
      var personalTimezones = {
        Eastern : "America/New_York",
        Central: "America/Chicago",
        Mountain: "America/Denver",
        Los_Angeles: "America/Los_Angeles",
        Pacific : "Pacific/Honolulu"
      };
      //here get calandar based on selected person's timezone
      if (tagName) {
        var config = seedcodeCalendar.get("config");
        var timeZone = personalTimezones[tagName];
        config.clientTimezone = timeZone;
        seedcodeCalendar.init("initCalendar");
      }
    }
  }
}
