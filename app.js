/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];

console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array


1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

foods.push('pizza')
foods.push('cheeseburger')

console.log('Exercise 2 result:', foods);

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

foods.unshift('taco')

console.log('Exercise 3 result:', foods);

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

const favFood = foods[0]

console.log('Exercise 4 result:', favFood);

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/

foods.splice(2, 0, 'tofu')

console.log('Exercise 5 result:', foods);

//! 2 = the index to start changing the array; 0-the number of elements to remove; last index is to add 'tofu'

/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

foods.splice(1, 1, 'sushi', 'cupcake')

console.log('Exercise 6 result:', foods);

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

const yummy = foods.slice(1, 3)

console.log('Exercise 7 result:', yummy);

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

const soyIdx = foods.indexOf('tofu')

console.log('Exercise 8 result:', soyIdx);

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

const allFoods = foods.join(' -> ')

console.log('Exercise 9 result:', allFoods);

/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

const hasSoup = foods.includes('soup')

console.log('Exercise 10 result:', hasSoup);

/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const odds = []

for (let index = 0; index < nums.length; index++) {
    if (nums[index] % 2 !== 0) {
        odds.push(nums[index])
    }

}

console.log('Exercise 11 result:', odds);


/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/


/* 
Nick's Feedback: 
For question 12: Let's look at the if else inside your Fizzbuzz with arrays. 
if (num % 3 === 0) { fizz.push(num) } else if (num % 5 === 0) { buzz.push(num) } else if (num % 3 === 0 && num % 5 === 0) { fizzbuzz.push(num) } 
A couple of things about this. - Firstly, whenever you're writing an if else, the most specific conditions should go at the top. 
In this case, your fizzbuzz condition is the most specific, so it should come first. 
If you don't do this, this condition will actually never run (as the fizz condition is always true when fizzbuzz is), and you'll end up with an empty fizzbuzz array! 
If you switch the order, fizzbuzz array will contain 15, 45, 90. - 
Secondly, the question would look you to push numbers to all the relevant arrays, not just the most specific one. 
For example, 15 should go in fizz, buzz, and fizzbuzz arrays. You can't achieve this with an if else, because it only ever runs one branch at a time. 
You need 3 separate if statements, like the below: 
if (num % 3 === 0 && num % 5 === 0) { fizzbuzz.push(num) } if (num % 3 === 0) { fizz.push(num) } if (num % 5 === 0) { buzz.push(num) } 
*/

const fizz = []
const buzz = []
const fizzbuzz = []

for (let index = 0; index < nums.length; index++) {
    const num = nums[index]

    if (num % 3 === 0 && num % 5 === 0) {
        fizzbuzz.push(num)
    } if (num % 5 === 0) {
        buzz.push(num)
    } if (num % 3 === 0) {
        fizz.push(num)
    }
}

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
];

const numList = numArrays[numArrays.length - 1]

console.log('Exercise 13 result:', numList);

/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/

const num = numArrays[2][1]

console.log('Exercise 14 result:', num);

/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/

// !!!cannot use const because the total variable will change, use let instead 

/*
Nick's Feedback: You're correct that in this situation, you need to use let, because you need to reassign the total as you're looping. 
In general, you want to prefer const over let, as it's more predictable to understand for developers (as you can't reassign it). 
However, sometimes you won't be able to avoid reassigning, such as in this situation where you need to update a sum. 
And so that's when you want to use let, just like you did here. 
*/

let total = 0

for (let index = 0; index < numArrays.length; index++) {
    for (let i = 0; i < numArrays[index].length; i++) {
        total += numArrays[index][i]
    }
}

console.log('Exercise 15 result:\n', total);

//Exercise 16:
/* Write a function checkExists that checks if an element exists in an array. It should return true if the element exists, and false otherwise
e.g. checkExists(10, [1, 3, 6, 10, 11]) -> returns true
e.g. checkExists("hello", ["bye", "cya", "so long"]) -> returns false*/


function checkExists(element, array) {
    return array.includes(element)
}

console.log('Exercise 16 result:', checkExists(10, [1, 3, 6, 10, 11]));
console.log('Exercise 16 result:', checkExists("hello", ["bye", "cya", "so long"]));

//Exercise 17:
/* Write a function reverseString, that reverses the string provided and returns it:
e.g. reverseString("hello").-> olleh*/

// split('') - splits the string into an array of individual characters
// reverse() - reverse the order of element in the array 
// join('') - joins the elements of the array back into a single string  

function reverseString(a) {
    return a.split('').reverse().join('')
}

console.log('Exercise 17 result:', reverseString('hello'));

//Exercise 18:
// Write a function isPalindrome that returns true if the given string is a palindrome, false otherwise. A palindrome is a string, that when reversed, is the same string.
// e.g. reverseString('radar') -> true
// e.g. reverseString('sos') -> true
// e.g. reverseString('zombie') -> false 

function isPalindrome(string) {
    const reverseString = string.split('').reverse().join('')
    return string === reverseString
}

console.log('Exercise 18 result:', isPalindrome('radar'));
console.log('Exercise 18 result:', isPalindrome('sos'));
console.log('Exercise 18 result:', isPalindrome('zombie'));


