
let username=prompt("Please enter your name");
let membership = prompt("Please enter your membership (student or regular)");


function membership(membershipType){
while (membership !== "student" && membership !== "regular") {

    prompt("Invalid input. Please enter 'student' or 'regular' for your membership type.");

    membership = prompt("Please enter your membership (student or regular)");
}

let bookGenre = prompt("Please enter the genre of the book you want to borrow (fiction, non-fiction, or mystery)");
let bookTitle = prompt("Please enter the title of the book you want to borrow");
}

function arraydata() {
    let userData = [username, membership, bookGenre, bookTitle];

    return userData;
}

let userData = arraydata();
console.log(userData);

