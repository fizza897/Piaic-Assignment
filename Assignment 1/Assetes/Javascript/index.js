 // store the person's name in a variable, and print a message to that the person
var a="Fizza Azam";
console.log(a);


 // store a person's name in a variable, and then print the person's name in lowercase,uppercase and titlecase
var b="Fizza Azam"
var c=b.toLowerCase()
console.log(c)

var d="fizza azam"
var e=d.toUpperCase()
console.log(e)

// Find a quote from a famous person you admire. print the quote and the name of the authother
console.log("albert elinstein once said,\"A person who never made a mistake never tired anything news.\"")


// Use a variable to represent your favorite number. Then, using that variable, create a message that reveals your favorite number.
var f=("albert elinstein once said, A person who never made a mistake never tired anything news.")
console.log(f)


// Use a variable to represent a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, “\t” and “\n”, at least once
var g="Fizza"
var h="Azam"
console.log(" " + g +"\n" + h)

// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
console.log("4+4=", "4+4")
console.log("4*4=", "4*4")
console.log("4/4=", "4/4")
console.log("4-4=", "4-4")

// You should create four lines that look like this:
console.log(4+4)
console.log(4-4)
console.log(4*4)
console.log(4/4)

// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var i=10
console.log("my favourite number is:" )
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
var username ="Fizza Azam "
var date =new Date()
console.log(username)
console.log(date)


 // Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var arr=["Fizza","Sumayya","Maryam","Menahil","Affaf"]
console.log(arr +"\n")

 // Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var k=["Fizza Azam","ifrah", "sabhat"]
for(n=0; n<k.length; n++){
    console.log("Hello," +k[i] )
}

 //Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var models=[
    {
         1: "Honda motorycle",
                          2: "Yamaha motorycle",
                3: "BMW motorycle",
           },
 {
    
                1: "Civic Car",
                2: "Fornature Car",
                3: "City Car",
        
}
]
for (var i = 0; i < models.length; i++) {
    for (var j = 1; j < models.length; j++) {
        console.log("I would like to own a " + models[i][j]);
    }
}

// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var list = ['"fatima"', '"Ayesha"', '"HAZRAT ALI R.A"'];
for (var i = 0; i < list.length; i++) {
  var message = `DEAR, ${list[i]}, I would like to invite to dinner.`;
  console.log(message);
}


// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var invitation = ["Arisha", "Komal"];
console.log(invitation[0] + " I Would like to invite on dinner at 8:00pm clock")
console.log("I found  a bigger dinner table that's why i invited more guest")

// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests
var invitation = ["Arisha", "Komal"];
invitation.unshift("Sumayya")
invitation.splice(2, 0, "Sulmana")
invitation.push("zubia")
console.log(invitation[0] + " I Would like to invite on dinner at 8:00pm clock")
console.log("I invite only two people for dinner.")
console.log(invitation.shift(), "sorry you can’t invite them to dinner.")
console.log(invitation.pop(), "sorry you can’t invite them to dinner.")
console.log(invitation.pop(), "sorry you can’t invite them to dinner.")
console.log(invitation[0], invitation[1], "you are still invited")
invitation.pop()
invitation.shift()
console.log(invitation)

// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
var car = "grey";
console.log(car == car)
console.log(car == "black")
console.log("grey" == car)
console.log("silver" != car)
console.log(car != "blue")

console.log(car != car)
console.log(car == "blue")
console.log("blue" == car)
console.log(car != "black")
console.log("black" != car)


// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
