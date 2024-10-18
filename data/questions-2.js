export const questions_2 = [
    {
      question: "What is the difference between `let` and `var` in JavaScript?",
      answers: [
        { text: "`let` has block scope, `var` has function scope", correct: true },
        { text: "`var` is block-scoped", correct: false },
        { text: "`let` is hoisted", correct: false },
        { text: "`let` is a global variable", correct: false }
      ]
    },
    {
      question: "Which method is used to convert a JavaScript object into a JSON string?",
      answers: [
        { text: "JSON.stringify()", correct: true },
        { text: "JSON.parse()", correct: false },
        { text: "Object.toString()", correct: false },
        { text: "JSON.convert()", correct: false }
      ]
    },
    {
      question: "How can you create an array in JavaScript?",
      answers: [
        { text: "let arr = [];", correct: true },
        { text: "let arr = {}", correct: false },
        { text: "let arr = ()", correct: false },
        { text: "let arr = ''", correct: false }
      ]
    },
    {
      question: "What is the purpose of the `Array.prototype.map()` method?",
      answers: [
        { text: "To iterate through an array and modify each element", correct: true },
        { text: "To filter elements from an array", correct: false },
        { text: "To find the index of an element in an array", correct: false },
        { text: "To sort elements in an array", correct: false }
      ]
    },
    {
      question: "What is the value of `this` inside a regular function?",
      answers: [
        { text: "It refers to the global object", correct: true },
        { text: "It refers to the function itself", correct: false },
        { text: "It refers to the parent object", correct: false },
        { text: "It refers to the last called object", correct: false }
      ]
    },
    {
      question: "Which of the following is NOT a primitive data type in JavaScript?",
      answers: [
        { text: "Boolean", correct: false },
        { text: "Null", correct: false },
        { text: "Object", correct: true },
        { text: "Undefined", correct: false }
      ]
    },
    {
      question: "What is the output of `console.log(2 + '2')` in JavaScript?",
      answers: [
        { text: "'22'", correct: true },
        { text: "4", correct: false },
        { text: "undefined", correct: false },
        { text: "'NaN'", correct: false }
      ]
    },
    {
      question: "Which keyword is used to declare a constant in JavaScript?",
      answers: [
        { text: "let", correct: false },
        { text: "const", correct: true },
        { text: "var", correct: false },
        { text: "constant", correct: false }
      ]
    },
    {
      question: "What does the `Array.prototype.filter()` method return?",
      answers: [
        { text: "An array with elements that pass the test provided by a function", correct: true },
        { text: "An array with modified elements", correct: false },
        { text: "The length of the original array", correct: false },
        { text: "A new object", correct: false }
      ]
    },
    {
      question: "Which function is used to execute a block of code after a specified period of time?",
      answers: [
        { text: "setTimeout()", correct: true },
        { text: "setInterval()", correct: false },
        { text: "delay()", correct: false },
        { text: "wait()", correct: false }
      ]
    },
    {
      question: "How do you declare an arrow function in JavaScript?",
      answers: [
        { text: "let func = () => {}", correct: true },
        { text: "function() => {}", correct: false },
        { text: "let func() {}", correct: false },
        { text: "arrow function() {}", correct: false }
      ]
    },
    {
      question: "What is the use of `Promise.all()` in JavaScript?",
      answers: [
        { text: "To wait for multiple promises to resolve", correct: true },
        { text: "To create a new promise", correct: false },
        { text: "To execute all functions in an array", correct: false },
        { text: "To loop through promises", correct: false }
      ]
    },
    {
      question: "What is the result of `typeof null` in JavaScript?",
      answers: [
        { text: "'object'", correct: true },
        { text: "'null'", correct: false },
        { text: "'undefined'", correct: false },
        { text: "'string'", correct: false }
      ]
    },
    {
      question: "What does the `forEach()` method do?",
      answers: [
        { text: "Executes a function on each element of an array", correct: true },
        { text: "Executes a function only on odd-indexed elements", correct: false },
        { text: "Filters elements of an array", correct: false },
        { text: "Maps elements of an array", correct: false }
      ]
    },
    {
      question: "What is the purpose of the `finally` block in a try-catch statement?",
      answers: [
        { text: "To execute code after the try and catch blocks, regardless of the outcome", correct: true },
        { text: "To catch any additional errors", correct: false },
        { text: "To execute if there are no errors", correct: false },
        { text: "To end the try-catch block", correct: false }
      ]
    },
    {
      question: "Which statement is true about `null` and `undefined`?",
      answers: [
        { text: "They are equal but of different types", correct: true },
        { text: "They are the same", correct: false },
        { text: "They are both objects", correct: false },
        { text: "They both represent a number", correct: false }
      ]
    },
    {
      question: "What does the `bind()` method do in JavaScript?",
      answers: [
        { text: "Creates a new function with a specific `this` context", correct: true },
        { text: "Calls a function immediately", correct: false },
        { text: "Creates a promise", correct: false },
        { text: "Binds two variables together", correct: false }
      ]
    },
    {
      question: "Which method is used to add elements to the end of an array?",
      answers: [
        { text: "push()", correct: true },
        { text: "pop()", correct: false },
        { text: "unshift()", correct: false },
        { text: "shift()", correct: false }
      ]
    },
    {
      question: "How do you stop an interval timer in JavaScript?",
      answers: [
        { text: "clearInterval()", correct: true },
        { text: "stopInterval()", correct: false },
        { text: "cancelInterval()", correct: false },
        { text: "endInterval()", correct: false }
      ]
    },
    {
      question: "Which of the following is a falsy value in JavaScript?",
      answers: [
        { text: "'false'", correct: false },
        { text: "0", correct: true },
        { text: "'0'", correct: false },
        { text: "[]", correct: false }
      ]
    }
];