export const questions_4 = [
    {
      question: "Which keyword is used to declare a block-scoped variable in JavaScript?",
      answers: [
        { text: "let", correct: true },
        { text: "var", correct: false },
        { text: "function", correct: false },
        { text: "const", correct: false }
      ]
    },
    {
      question: "Which operator checks both value and type in JavaScript?",
      answers: [
        { text: "==", correct: false },
        { text: "===", correct: true },
        { text: "!=", correct: false },
        { text: "!==", correct: false }
      ]
    },
    {
      question: "How can you convert a string into an integer in JavaScript?",
      answers: [
        { text: "parseInt()", correct: true },
        { text: "toString()", correct: false },
        { text: "Number()", correct: false },
        { text: "parseFloat()", correct: false }
      ]
    },
    {
      question: "What is the purpose of the `finally` block in a try-catch-finally statement?",
      answers: [
        { text: "Executes regardless of whether an error was thrown or not", correct: true },
        { text: "Executes only when there is no error", correct: false },
        { text: "Catches any error that wasn’t caught by catch", correct: false },
        { text: "Throws an error if no error was caught", correct: false }
      ]
    },
    {
      question: "Which method is used to remove the first element from an array?",
      answers: [
        { text: "shift()", correct: true },
        { text: "pop()", correct: false },
        { text: "unshift()", correct: false },
        { text: "splice()", correct: false }
      ]
    },
    {
      question: "Which method adds a new element to the beginning of an array?",
      answers: [
        { text: "unshift()", correct: true },
        { text: "push()", correct: false },
        { text: "shift()", correct: false },
        { text: "splice()", correct: false }
      ]
    },
    {
      question: "What is the difference between `null` and `undefined`?",
      answers: [
        { text: "`null` is an assigned value, `undefined` means a variable has been declared but not yet assigned a value", correct: true },
        { text: "`undefined` means the variable is not declared", correct: false },
        { text: "`null` means the variable is declared but not assigned", correct: false },
        { text: "Both are equivalent", correct: false }
      ]
    },
    {
      question: "What will `typeof []` return in JavaScript?",
      answers: [
        { text: "'object'", correct: true },
        { text: "'array'", correct: false },
        { text: "'undefined'", correct: false },
        { text: "'null'", correct: false }
      ]
    },
    {
      question: "Which function can be used to execute a block of code once after a specified time delay?",
      answers: [
        { text: "setTimeout()", correct: true },
        { text: "setInterval()", correct: false },
        { text: "clearTimeout()", correct: false },
        { text: "wait()", correct: false }
      ]
    },
    {
      question: "What does `JSON.stringify()` do in JavaScript?",
      answers: [
        { text: "Converts an object or array into a JSON string", correct: true },
        { text: "Parses a JSON string into an object", correct: false },
        { text: "Converts an array into a string", correct: false },
        { text: "Converts a string into an object", correct: false }
      ]
    },
    {
      question: "How do you declare a default parameter in a JavaScript function?",
      answers: [
        { text: "function myFunc(param = 'default') {}", correct: true },
        { text: "function myFunc(param) { param = 'default'; }", correct: false },
        { text: "let param = 'default';", correct: false },
        { text: "param || 'default'", correct: false }
      ]
    },
    {
      question: "Which of the following methods creates a new array with all elements that pass a test?",
      answers: [
        { text: "filter()", correct: true },
        { text: "map()", correct: false },
        { text: "forEach()", correct: false },
        { text: "reduce()", correct: false }
      ]
    },
    {
      question: "Which method is used to combine two or more arrays?",
      answers: [
        { text: "concat()", correct: true },
        { text: "push()", correct: false },
        { text: "unshift()", correct: false },
        { text: "join()", correct: false }
      ]
    },
    {
      question: "What is the purpose of the `Promise.all()` method?",
      answers: [
        { text: "Waits for all promises to resolve before continuing", correct: true },
        { text: "Waits for one promise to resolve", correct: false },
        { text: "Resolves only the fastest promise", correct: false },
        { text: "Converts multiple promises into an array", correct: false }
      ]
    },
    {
      question: "What is the purpose of the `bind()` method in JavaScript?",
      answers: [
        { text: "Creates a new function with a specific `this` context", correct: true },
        { text: "Immediately invokes a function", correct: false },
        { text: "Attaches a function to an event", correct: false },
        { text: "Creates an event listener", correct: false }
      ]
    },
    {
      question: "What does the `reduce()` method do?",
      answers: [
        { text: "Applies a function to each array element and reduces it to a single value", correct: true },
        { text: "Filters array elements based on a condition", correct: false },
        { text: "Creates a shallow copy of an array", correct: false },
        { text: "Removes elements from the array", correct: false }
      ]
    },
    {
      question: "Which of the following will return `false`?",
      answers: [
        { text: "`Boolean('')`", correct: true },
        { text: "`Boolean('false')`", correct: false },
        { text: "`Boolean([])`", correct: false },
        { text: "`Boolean('0')`", correct: false }
      ]
    },
    {
      question: "What will the `typeof` operator return for a function?",
      answers: [
        { text: "'function'", correct: true },
        { text: "'object'", correct: false },
        { text: "'undefined'", correct: false },
        { text: "'string'", correct: false }
      ]
    },
    {
      question: "What is the default return value of a function in JavaScript if no return statement is provided?",
      answers: [
        { text: "undefined", correct: true },
        { text: "null", correct: false },
        { text: "0", correct: false },
        { text: "'undefined'", correct: false }
      ]
    },
    {
      question: "What does the `===` operator compare in JavaScript?",
      answers: [
        { text: "Both value and type", correct: true },
        { text: "Only value", correct: false },
        { text: "Only type", correct: false },
        { text: "Objects and arrays", correct: false }
      ]
    }
]; 