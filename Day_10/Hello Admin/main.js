"use strict";
let usernames = ["eric", "sofia", "anderson", "admin", "andrew"];
usernames.forEach((currentUsername) => {
    if (currentUsername.toLowerCase() == "admin") {
        console.log("Hello admin , all pending tasks are done.");
    }
    else {
        console.log(`Hello ${currentUsername},thank you for logging in again in our website.`);
    }
});
