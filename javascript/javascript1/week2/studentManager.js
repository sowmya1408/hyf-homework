const class07Students = [];

const addStudentToClass = (studentName) => {
    if (class07Students.includes(studentName)) {
        return `Student ${studentName} is already in the class`;
    } else if (studentName === "Queen") {
        return class07Students.push("Queen");
    } else if (class07Students.length > 6) {
        return "Cannot add more students to class07";
    } else if (studentName === "") {
        return "Please enter Student name";
    } else {
        return class07Students.push(studentName);
    }
}

const getNumberOfStudents = () => {
    return class07Students.length;
}
addStudentToClass("Sowmya");
addStudentToClass("Chandra");
addStudentToClass("Shekar");
addStudentToClass("Nithesh");
addStudentToClass("Lavanya");
addStudentToClass("Driti");
addStudentToClass("Queen");
// console.log(addStudentToClass("Sowmya"));
// console.log(addStudentToClass("Sanvi"));
console.log(class07Students);
console.log(getNumberOfStudents());