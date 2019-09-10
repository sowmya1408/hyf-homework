function getFullname(firstname, surname, useFormalName) {
    if (firstname === "") {
        return "please enter your firstname ";
    } else if (surname === "") {
        return firstname + "!" + " Please enter your surname ";
    } else if (useFormalName) {
        return "Lord" + " " + firstname + " " + surname;
    } else {
        return firstname + " " + surname;
      }

    }
const fullname1 = getFullname("Sowmya", "",);
const fullname2 = getFullname("Chandra", "Chityala", true);

console.log(fullname1);
console.log(fullname2);

