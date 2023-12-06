// Author: Chaye Novak
// Original Date: 06/12/2023 - Updated Date: 06/12/2023
// Version 1.0.0
// Checks if the current user has the specified roles. Returns a true or false value.

// PrimaryControl is the parameter passed if command ribbon is used, else use ExecutionContext - useful for any additional functionality.
function checkSecurityRole(PrimaryControl) {

    // Access the global context, allowing us to retrieve user information.
    var userSettings = Xrm.Utility.getGlobalContext().userSettings;

    // Create an array of user's current roles.
    var currentUserRoles = userSettings.securityRoles;

    var roleName = "Name of Role"; // Make sure this matches the actual role name and case.

     // Iterate through current user's security roles
    for (var i = 0; i < currentUserRoles.length; i++) {
        // Assign current index item for checking
        var userRoleId = currentUserRoles[i];
        
        // Get name of the current index item's security role.
        var userRoleName = userSettings.roles.get(userRoleId).name;

        // Compare name specified to the currently iterated role's name (alternatively, add '.toLowerCase()' to ignore casing).
        if (userRoleName === roleName) {
            console.log("Security Role Check Successful") // Debugging
             
           // Returns a true value, that can be used as part of a condition or within Ribbon Workbench as a custom rule
           return true;
        }
    }
    return false;
}
