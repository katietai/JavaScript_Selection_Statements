console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
let number = 12;
let userInput= window.prompt("Enter a number between 1 and 50");

if(userInput === number){
alert("Congratulations");
} 

else if(userInput > number);{
    alert("Too High!");
}
 {
    alert(" Too Low!");
}

// Exercise 2
let userInput2 = window.prompt("What is your favorite candy bar");

switich( userInput2.toLocaleLowerCase()) {
    case "kitkat":
         console.log( "Give me a break");
         break;
    case "crunch":
        console.log("Crispy and Crunchy");
        break;
    case "hershey":
        console.log("Yummy and rich");
        break;
    case "milkyway":
        console.log("Mellow and creamy");
        break;
    case "mrgoodbar":
        console.log("My favorite too!");
        break;
        default:
            console.log("I just like sugar");
}