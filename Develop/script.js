// // Assignment Code
// let generateBtn = document.querySelector("#generate");
// generateBtn.addEventListener("click", writePassword());

// // Write password to the #password input
// function writePassword() {

//     let password = generatePassword();
//     let passwordText = document.querySelector("#password");

//     passwordText.value = password;

// }


// /*This is redundant but it helped me break the code up mentally so I'm leaving it in
// Calls the passSelect method to prompt the user to select what type of method they are choosing
// Returns none*/
// function generatePassword() {
//     return passSelect();
// }

// /*Function prompts the user to choose what type of password they want
// TODO: Comment this add returns etc
// */
// function passSelect() {
//     /*Sets the pass word length to 0 and then prompts the user to give a length*/
//     let passLength = 0;
//     while (passLength < 8 || passLength > 128) {
//         passLength = parseInt(prompt("How long would you like your password to be?"));
//     }


//     /*This set of if/else will propmpt the user on what they want included in the final password lower->upper->nums->symbols*/
//     let lower = confirm("Would you like lower case letters in your password?");
//     if (lower === true) {
//         let upper = confirm("Would you like uppercase letters in your password?");
//         if (upper === true) {
//             let num = confirm("Would you like numbers in your password?");
//             if (num === true) {
//                 let symbols = confirm("Would you like symbols in your password?");
//                 if (symbols === true) {
//                     /*Calls the Symbol Password Generator*/
//                     return generateSymbolPassword(passLength);
//                 } else {
//                     /*Calls the number Password Generator*/
//                     return generateNumPassword(passLength);
//                 }
//             } else {
//                 /*Calls the Both Case Password Generator*/
//                 return generateBothCasePassword(passLength);
//             }
//         } else {
//             /*Calls the lower case Password Generator*/
//             return generateLowerCasePassword(passLength);
//         }
//     }
// }

// /*
// This function will generate a password with only lower case letters
// Returns the lower case only password as a string
// */
// function generateLowerCasePassword(passLength) {
//     let passwd = '';
//     let chars = 'abcdefghijklmnopqrstuvwxyz';

//     for (i = 0; i < passLength; i++) {
//         let c = Math.floor(Math.random() * chars.length + 1);
//         passwd += chars.charAt(c)
//     }
//     return passwd;
// }

// /*
// This function will generate a password with both cases of letters
// Returns the both cases password as a string
// */
// function generateBothCasePassword(passLength) {

//     let passwd = '';
//     let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     for (i = 0; i < passLength; i++) {
//         let c = Math.floor(Math.random() * chars.length + 1);
//         passwd += chars.charAt(c)
//     }

//     return passwd;

// }

// /*
// This function will generate a password with numbers and letters
// Returns the generated password as a string
// */
// function generateNumPassword(passLength) {
//     let passwd = '';
//     let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//     for (i = 0; i < 8; i++) {
//         let c = Math.floor(Math.random() * chars.length + 1);
//         passwd += chars.charAt(c)
//     }
//     return passwd;

// }

// /*
// This function will generate a password with numbers letters and symbols
// Returns the generated password as a string
// */
// function generateSymbolPassword(passLength) {
//     let passwd = '';
//     let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*~';
//     for (i = 0; i < 8; i++) {
//         let c = Math.floor(Math.random() * chars.length + 1);
//         passwd += chars.charAt(c)
//     }
//     return passwd;

// }

// /*This is supposed to be a method that ensures that all the characters requested by the user are in the final password but I couldn't quite figure it out.*/

// // function checkPass(chars, passwd, passLength) {
// //     if (passLength !== passwd.length) {
// //         return false;
// //     } else {
// //         for (let i = 0; i < chars.length; i++) {
// //             if (passwd.search(chars.charAt(i)) !== -1) {
// //                 return true;
// //             }
// //         }
// //     }
// //     return false;
// // }

// // Add event listener to generate button



//Started over

let generateBtn = document.querySelector("#generate");

/**
 * Calls generate password and then writes a password and uses jquery to pass it back to the html file as long as that file has field named password
 *
 * @param {none}
 * @return Returns a password to the index.html doc
 */
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;
}

/**
 * Function promps the user to specify characters used to create a randomized password for them
 *
 * @param {none}
 * @return {password} A password that contains characters specified by the user
 */
function generatePassword() {
    //Options for different levels of passwords.
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let number = "0123456789";
    let specialCharacters = "@%+\/'!#$^?:,)(}{][~-_.";
    let characters = ""

    //Options for different confirmation boxes, the variables will booleans
    let confirmationLower = confirm("Would you like to include lowercase characters in your password?");
    let confirmationUpper = confirm("Would you like to include uppercase characters in your password?");
    let confirmationNumber = confirm("Would you like to include numbers in your password?");
    let confirmationSpecial = confirm("Would you like to include special characters in your password?");

    //If this is all false then the alert will trigger saying you need to have at least one character type
    if (cLower === false && cUpper === false && cNumber === false & cSpecial === false) {
        alert("You must select at least one character type.");
        confirmationLower = confirm("Would you like to include lowercase characters in your password?");
        confirmationUpper = confirm("Would you like to include uppercase characters in your password?");
        confirmationNumber = confirm("Would you like to include numbers in your password?");
        confirmationSpecial = confirm("Would you like to include special characters in your password?");
    }

    // Requires the user to add some sort of 
    let length = parseInt(prompt("How long would you like your password to be? (Must be between 8 and 128 characters"));
    if (length > 128 || length < 8) {
        alert("Password must be between 8 and 128 characters.");
        length = parseInt(prompt("How long would you like your password to be?"));
    }

    if (confirmationLower) {
        characters += lowerCase
    }
    if (confirmationUpper) {
        characters += upperCase
    }
    if (confirmationNumber) {
        characters += number
    }
    if (confirmationSpecial) {
        characters += specialCharacters
    }
    let password = ""
    for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    return password;
}
generateBtn.addEventListener("click", writePassword);