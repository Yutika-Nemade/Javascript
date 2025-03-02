const day = 4

switch (day) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        console.log("Invalid input")
        break;
}

//break will end the control flow
// if we don't specify break then it will not match any case and execute all the statement except default case statement

//like numbers we can also check for string in switch statement

const days = "Thu"

switch (days) {
    case "sun":
        console.log("Sunday")
        break;
    case "mon":
        console.log("Monday")
        break;
    case "tue":
        console.log("Tuesday")
        break;
    case "wed":
        console.log("Wednesday")
        break;
    case "thu":
        console.log("Thursday")
        break;
    case "fri":
        console.log("Friday")
        break;
    case "sat":
        console.log("Saturday")
        break;
    default:
        console.log("Invalid input")
        break;
}

