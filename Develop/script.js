// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword());

// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}


/*This is redundant but it helped me break the code up mentally so I'm leaving it in
Calls the passSelect method to prompt the user to select what type of method they are choosing
Returns none*/
function generatePassword() {
    return passSelect();
}

/*Function prompts the user to choose what type of password they want
TODO: Comment this add returns etc
*/
function passSelect() {
    /*Sets the pass word length to 0 and then prompts the user to give a length*/
    var passLength = 0;
    while (passLength < 8 || passLength > 128) {
        passLength = parseInt(prompt("How long would you like your password to be?"));
    }


    /*This set of if/else will propmpt the user on what they want included in the final password lower->upper->nums->symbols*/
    var lower = confirm("Would you like lower case letters in your password?");
    if (lower === true) {
        var upper = confirm("Would you like uppercase letters in your password?");
        if (upper === true) {
            var num = confirm("Would you like numbers in your password?");
            if (num === true) {
                var symbols = confirm("Would you like symbols in your password?");
                if (symbols === true) {
                    /*Calls the Symbol Password Generator*/
                    return generateSymbolPassword(passLength);
                } else {
                    /*Calls the number Password Generator*/
                    return generateNumPassword(passLength);
                }
            } else {
                /*Calls the Both Case Password Generator*/
                return generateBothCasePassword(passLength);
            }
        } else {
            /*Calls the lower case Password Generator*/
            return generateLowerCasePassword(passLength);
        }
    }
}

/*
This function will generate a password with only lower case letters
Returns the lower case only password as a string
*/
function generateLowerCasePassword(passLength) {
    var passwd = '';
    var chars = 'abcdefghijklmnopqrstuvwxyz';

    for (i = 0; i < passLength; i++) {
        var c = Math.floor(Math.random() * chars.length + 1);
        passwd += chars.charAt(c)
    }
    return passwd;
}

/*
This function will generate a password with both cases of letters
Returns the both cases password as a string
*/
function generateBothCasePassword(passLength) {

    var passwd = '';
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (i = 0; i < passLength; i++) {
        var c = Math.floor(Math.random() * chars.length + 1);
        passwd += chars.charAt(c)
    }

    return passwd;

}

/*
This function will generate a password with numbers and letters
Returns the generated password as a string
*/
function generateNumPassword(passLength) {
    var passwd = '';
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (i = 0; i < 8; i++) {
        var c = Math.floor(Math.random() * chars.length + 1);
        passwd += chars.charAt(c)
    }
    return passwd;

}

/*
This function will generate a password with numbers letters and symbols
Returns the generated password as a string
*/
function generateSymbolPassword(passLength) {
    var passwd = '';
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*~';
    for (i = 0; i < 8; i++) {
        var c = Math.floor(Math.random() * chars.length + 1);
        passwd += chars.charAt(c)
    }
    return passwd;

}

/*This is supposed to be a method that ensures that all the characters requested by the user are in the final password but I couldn't quite figure it out.*/

// function checkPass(chars, passwd, passLength) {
//     if (passLength !== passwd.length) {
//         return false;
//     } else {
//         for (var i = 0; i < chars.length; i++) {
//             if (passwd.search(chars.charAt(i)) !== -1) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// Add event listener to generate button