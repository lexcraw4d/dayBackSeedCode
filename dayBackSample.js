// Displays a timezone selector in DayBack's Settings sidebar
// and changes timezone when you select a resource sub folder
// with the name of the sub foldere
// Action Type: Custom App Action - After Filter Selection
// Prevent Default Action: No

// More info on custom app actions here:
// https://docs.dayback.com/article/140-custom-app-actions


function showModal() {
    const title = "Time Zone Confirmation"
    const message = "Would you like to change to xxx timezone?"
    const cancelButtonText = "No"
    const confirmButtonText = "Yes"

    utilities.showModal(title, message, cancelButtonText, cancelFunction, confirmButtonText, confirmFunction)
    
}
     function confirmFunction() {
        debugger
        //Is action.callbacks.confirm() needed
        action.callbacks.confirm()
                var stateTimezones = {
                    "Gilliams": "America/New_York",
                    "Les": "America/New_York",
                    "Mom/Dad": "America/Chicago",
                    "Chad/Beth": "America/Chicago",
                    "Lex/Sam": "America/New_York",
                    "John": "America/Denver",
                    "KC": "America/Los_Angeles"
                }
    
    
                var item = params.data.item
                var name = item.name
                // console.log('name is:', name)
                var status = item.status.selected
                var resources = seedcodeCalendar.get('resources')
                if (status) {
                    var config = seedcodeCalendar.get('config')
                    //selection on, deselect anything not in this folder
                    for (var i = 0; i < resources.length; i++) {
                        // console.log("resources[i].name is:", resources[i].name)
                        if (resources[i].name !== name && resources[i].status && resources[i].status.selected) {
                            resources[i].status.selected = false
                        }
                    }
                    var timeZone = stateTimezones[name]
                    config.clientTimezone = timeZone
                    seedcodeCalendar.init('initCalendar')
                }
              
            }
        
    

    function cancelFunction() {
        // debugger
        // cancelTimeoutCheck();
        console.log('action is:', action)
        action.callbacks.cancel();
    }


    showModal()
 