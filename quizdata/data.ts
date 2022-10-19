import { Question } from '../types/type';

export const india: Question[] = [
    {
        id: '1',
        title: 'What Indian city is the capital of two states?',
        choices: [
            { choice: 'kolkatta', correct: false },
            { choice: 'chennai', correct: false },
            { choice: 'chandigargh', correct: true },
            { choice: 'mumbai', correct: false },
        ],
    },
    {
        id: '2',
        title: 'How many countries border India?',
        choices: [
            { choice: '14', correct: false },
            { choice: '6', correct: true },
            { choice: '2', correct: false },
            { choice: '9', correct: false },
        ],
    },
    {
        id: '3',
        title: 'What is the capital of Gujarat?',
        choices: [
            { choice: 'mumbai', correct: false },
            { choice: 'bophal', correct: false },
            { choice: 'gandhinagar', correct: true },
            { choice: 'lucknow', correct: false },
        ],
    },
    {
        id: '4',
        title: "India's Populous city is.",
        choices: [
            { choice: 'Mumbai', correct: false },
            { choice: 'Kolkatta', correct: false },
            { choice: 'Delhi', correct: true },
            { choice: 'Bengaluru', correct: false },
        ],
    },
    {
        id: '5',
        title: 'What, approximately, is the area of India, in square kilometers?',
        choices: [
            { choice: '1,500,000', correct: false },
            { choice: '4,000,000', correct: false },
            { choice: '2,000,000', correct: false },
            { choice: '3,000,000', correct: true },
        ],
    },
    {
        id: '6',
        title: 'Who was the president of India in 2009?',
        choices: [
            { choice: 'indira gandhi', correct: false },
            { choice: 'jawaharlal nehru', correct: false },
            { choice: 'govind singh', correct: false },
            { choice: 'prathiba patil', correct: true },
        ],
    },
    {
        id: '7',
        title: 'What is India’s smallest state by area?',
        choices: [
            { choice: 'goa', correct: true },
            { choice: 'kerala', correct: false },
            { choice: 'pudhucherry', correct: false },
            { choice: 'uttar pradesh', correct: false },
        ],
    },
    {
        id: '8',
        title: 'Which of these bodies of water does not border India?',
        choices: [
            { choice: 'red sea', correct: true },
            { choice: 'indian ocean', correct: false },
            { choice: 'bay of bengal', correct: false },
            { choice: 'arabian sea', correct: false },
        ],
    },
    {
        id: '9',
        title: 'Delhi is located along what river?',
        choices: [
            { choice: 'the nile', correct: false },
            { choice: 'the ganga', correct: false },
            { choice: 'the brahmaputhra', correct: false },
            { choice: 'the yamuna', correct: true },
        ],
    },
    {
        id: '10',
        title: 'When is India’s Independence Day?',
        choices: [
            { choice: 'august 14', correct: false },
            { choice: 'august 13', correct: false },
            { choice: 'august 15', correct: true },
            { choice: 'august 16', correct: false },
        ],
    },
    {
        id: '11',
        title: 'What body of water lies to the west of India?',
        choices: [
            { choice: 'andaman sea', correct: false },
            { choice: 'arabian sea', correct: true },
            { choice: 'celebes sea', correct: false },
            { choice: 'coral sea', correct: false },
        ],
    },
    {
        id: '12',
        title: 'In what state is Bengaluru located?',
        choices: [
            { choice: 'kerala', correct: false },
            { choice: 'tamil nadu', correct: false },
            { choice: 'bihar', correct: false },
            { choice: 'karnataka', correct: true },
        ],
    },
];

export const javascript: Question[] = [
    {
        id: '1',
        title: 'Which of the following is correct about features of JavaScript?',
        choices: [
            {
                choice: 'JavaScript is a lightweight, interpreted programming language.',
                correct: false,
            },
            {
                choice: 'JavaScript is designed for creating network-centric applications.',
                correct: false,
            },
            {
                choice: 'JavaScript is complementary to and integrated with Java.',
                correct: false,
            },
            { choice: 'All of the above.', correct: true },
        ],
    },
    {
        id: '2',
        title: 'Can you pass a anonymous function as an argument to another function?',
        choices: [
            { choice: 'true', correct: true },
            { choice: 'false', correct: false },
        ],
    },
    {
        id: '3',
        title: 'Which built-in method adds one or more elements to the end of an array and returns the new length of the array?',
        choices: [
            { choice: 'last()', correct: false },
            { choice: 'put()', correct: false },
            { choice: 'push()', correct: true },
            { choice: 'none of the above', correct: false },
        ],
    },
    {
        id: '4',
        title: "Which of the following function of Boolean object returns a string of either 'true' or 'false' depending upon the value of the object?",
        choices: [
            { choice: 'toSource()', correct: false },
            { choice: 'valueOf()', correct: false },
            { choice: 'toString()', correct: false },
            { choice: 'none of the above', correct: true },
        ],
    },
    {
        id: '5',
        title: 'Which of the following function of String object returns the index within the calling String object of the first occurrence of the specified value?',
        choices: [
            { choice: 'subStr()', correct: false },
            { choice: 'search()', correct: false },
            { choice: 'lastindexOf()', correct: false },
            { choice: 'indexOf()', correct: true },
        ],
    },
    {
        id: '6',
        title: 'Which of the following function of String object causes a string to be displayed in fixed-pitch font as if it were in a <tt> tag?',
        choices: [
            { choice: 'fixed()', correct: true },
            { choice: 'big()', correct: false },
            { choice: 'blink()', correct: false },
            { choice: 'bold()', correct: false },
        ],
    },
    {
        id: '7',
        title: 'Which of the following function of Array object returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found?',
        choices: [
            { choice: 'indexOf()', correct: true },
            { choice: 'join()', correct: false },
            { choice: 'lastIndexOf()', correct: false },
            { choice: 'map()', correct: false },
        ],
    },
    {
        id: '8',
        title: 'Which of the following function of Array object extracts a section of an array and returns a new array?',
        choices: [
            { choice: 'reverse()', correct: false },
            { choice: 'shift()', correct: false },
            { choice: 'slice()', correct: true },
            { choice: 'some()', correct: false },
        ],
    },
    {
        id: '9',
        title: 'Evaluate the following: undefined + 2',
        choices: [
            { choice: 'Type Error', correct: false },
            { choice: 'NaN', correct: true },
            { choice: 'Undefined', correct: false },
            { choice: '2', correct: false },
        ],
    },
    {
        id: '10',
        title: 'You need to update the content of a <div> using the following code, complete the missing part <div id="myDiv"></div> <script> document.getElementById(\'myDiv\').MISSING_PART = "new content" </script>',
        choices: [
            { choice: 'Innerhtml', correct: false },
            { choice: 'InnerHtml', correct: false },
            { choice: 'InnterHtml', correct: false },
            { choice: 'InnerHTML', correct: true },
        ],
    },
    {
        id: '11',
        title: 'How to access the current element using DOM <input type="radio" name="gender" value="Male">',
        choices: [
            { choice: 'document.getElementById', correct: true },
            { choice: 'document.getElementByName', correct: false },
            { choice: 'document.getElementsByName', correct: false },
            { choice: 'document.getElement', correct: false },
        ],
    },
    {
        id: '12',
        title: 'How do you use JavaScript via an external file ?',
        choices: [
            {
                choice: '< script url = "filename.js" > < / script >',
                correct: false,
            },
            {
                choice: '< script rel = "filename.js" > < / script >',
                correct: false,
            },
            {
                choice: '< script src = "filename.js" > < / script >',
                correct: true,
            },
            {
                choice: '< script href = "filename.js" > < / script >',
                correct: false,
            },
        ],
    },
];

export const python: Question[] = [
    {
        id: '1',
        title: 'Which type of Programming does Python support?',
        choices: [
            { choice: 'object-oriented programming', correct: false },
            { choice: 'structured programming', correct: false },
            { choice: 'functional programming', correct: false },
            { choice: 'all of the mentioned', correct: true },
        ],
    },
    {
        id: '2',
        title: 'Is Python case sensitive when dealing with identifiers?',
        choices: [
            { choice: 'no', correct: true },
            { choice: 'yes', correct: false },
            { choice: 'machine dependent', correct: false },
            { choice: 'none of the mentioned', correct: false },
        ],
    },
    {
        id: '3',
        title: 'All keywords in Python are in _________',
        choices: [
            { choice: 'Capitalized', correct: false },
            { choice: 'lower case', correct: false },
            { choice: 'UPPER CASE', correct: false },
            { choice: 'None of the mentioned', correct: true },
        ],
    },
    {
        id: '4',
        title: 'Which of the following is used to define a block of code in Python language?',
        choices: [
            { choice: 'Indentation', correct: true },
            { choice: 'Key', correct: false },
            { choice: 'Brackets', correct: false },
            { choice: 'All of the mentioned', correct: false },
        ],
    },
    {
        id: '5',
        title: 'Which keyword is used for function in Python language?',
        choices: [
            { choice: 'function', correct: false },
            { choice: 'def', correct: true },
            { choice: 'fun', correct: false },
            { choice: 'define', correct: false },
        ],
    },
    {
        id: '6',
        title: 'Which of the following character is used to give single-line comments in Python?',
        choices: [
            { choice: '//', correct: false },
            { choice: '#', correct: true },
            { choice: '/*', correct: false },
            { choice: '<--', correct: false },
        ],
    },
    {
        id: '7',
        title: `
            i = 1
            while True:
                if i%3 == 0:
                    break
                print(i)
            
                i + = 1
        `,
        choices: [
            { choice: '1 2 3', correct: false },
            { choice: 'error', correct: true },
            { choice: '1 2', correct: false },
            { choice: 'none of the mentioned', correct: false },
        ],
    },
    {
        id: '8',
        title: 'Which of the following functions can help us to find the version of python that we are currently working on?',
        choices: [
            { choice: 'sys.version(1)', correct: true },
            { choice: 'sys.version(0)', correct: false },
            { choice: 'sys.version()', correct: false },
            { choice: 'sys.version', correct: false },
        ],
    },
    {
        id: '9',
        title: 'Python supports the creation of anonymous functions at runtime, using a construct called __________',
        choices: [
            { choice: 'pi', correct: false },
            { choice: 'anonymous', correct: false },
            { choice: 'lambda', correct: true },
            { choice: 'none of the mentioned', correct: false },
        ],
    },
    {
        id: '10',
        title: 'Which of the following is the truncation division operator in Python?',
        choices: [
            { choice: '|', correct: false },
            { choice: '//', correct: true },
            { choice: '/', correct: false },
            { choice: '%', correct: false },
        ],
    },
    {
        id: '11',
        title: 'What is the order of precedence in python?',
        choices: [
            {
                choice: 'Exponential, Parentheses, Multiplication, Division, Addition, Subtraction',
                correct: false,
            },
            {
                choice: 'Exponential, Parentheses, Division, Multiplication, Addition, Subtraction',
                correct: false,
            },
            {
                choice: 'Parentheses, Exponential, Multiplication, Division, Subtraction, Addition',
                correct: false,
            },
            {
                choice: 'Parentheses, Exponential, Multiplication, Division, Addition, Subtraction',
                correct: true,
            },
        ],
    },
    {
        id: '12',
        title: 'Which of the following is true for variable names in Python?',
        choices: [
            {
                choice: 'underscore and ampersand are the only two special characters allowed',
                correct: false,
            },
            { choice: 'unlimited length', correct: true },
            {
                choice: 'all private members must have leading and trailing underscores',
                correct: false,
            },
            { choice: 'none of the mentioned', correct: false },
        ],
    },
];

export const react: Question[] = [
    {
        id: '1',
        title: 'Everything in React is a _____________',
        choices: [
            { choice: 'module', correct: false },
            { choice: 'component', correct: true },
            { choice: 'package', correct: false },
            { choice: 'class', correct: false },
        ],
    },
    {
        id: '2',
        title: 'In which directory React Components are saved?',
        choices: [
            { choice: 'Inside js/components/', correct: true },
            { choice: 'Inside vendor/components/', correct: false },
            { choice: 'Inside vendor/components/', correct: false },
            { choice: 'Inside vendor/', correct: false },
        ],
    },
    {
        id: '3',
        title: 'What is Babel?',
        choices: [
            { choice: 'A transpiler', correct: false },
            { choice: 'An interpreter', correct: false },
            { choice: 'A Compiler', correct: false },
            { choice: 'Both Compiler and Transpilar', correct: true },
        ],
    },
    {
        id: '4',
        title: 'What is ReactJS?',
        choices: [
            { choice: 'Server-side Framework', correct: false },
            { choice: 'User-interface framework', correct: false },
            {
                choice: 'A Library for building interactive interfaces',
                correct: true,
            },
            { choice: 'None of the Above', correct: false },
        ],
    },
    {
        id: '5',
        title: 'Props are __________ into other components',
        choices: [
            { choice: 'Injected', correct: false },
            { choice: 'Methods', correct: true },
            { choice: 'Both A and B', correct: false },
            { choice: 'All of these', correct: false },
        ],
    },
    {
        id: '6',
        title: 'Which of the following API is a MUST for every ReactJS component?',
        choices: [
            { choice: 'getInitialState', correct: false },
            { choice: 'render', correct: false },
            { choice: 'renderComponent', correct: true },
            { choice: 'None of the Above', correct: false },
        ],
    },
    {
        id: '7',
        title: 'In React what is used to pass data to a component from outside?',
        choices: [
            { choice: 'setState', correct: false },
            { choice: 'props', correct: true },
            { choice: 'PropsTypes', correct: false },
            { choice: 'render with arguments', correct: false },
        ],
    },
    {
        id: '8',
        title: 'ReactJS uses _____ to increase performance',
        choices: [
            { choice: 'Virtual DOM', correct: true },
            { choice: 'Original DOM', correct: false },
            { choice: 'Both 1 & 2', correct: false },
            { choice: 'None of the above', correct: false },
        ],
    },
    {
        id: '9',
        title: 'Keys are given to a list of elements in react. These keys should be -',
        choices: [
            { choice: 'Unique in the DOM', correct: false },
            { choice: 'Do not requires to be unique', correct: false },
            { choice: 'Unique among the siblings only', correct: true },
            { choice: 'All of the above', correct: false },
        ],
    },
    {
        id: '10',
        title: 'If a function component should always render the same way given the same props, what is a simple performance optimization available for it?',
        choices: [
            {
                choice: 'Wrap it in the React.memo higher-order component',
                correct: true,
            },
            { choice: 'Implement the useReducer Hook', correct: false },
            {
                choice: 'Implement the shouldComponentUpdate lifecycle method',
                correct: false,
            },
            { choice: 'Implement the useMemo Hook', correct: false },
        ],
    },
    {
        id: '11',
        title: `
            How do you fix the syntax error that results from running this code?

            const person =(firstName, lastName) =>
            {
                first: firstName,
                last: lastName
            }
            console.log(person("Light", "Yagami"))

        `,
        choices: [
            { choice: 'Wrap the object in parentheses', correct: true },
            { choice: 'Call the function from another file', correct: false },
            { choice: 'Replace the with an array', correct: false },
            {
                choice: 'Add a return statement before the first curly brace',
                correct: false,
            },
        ],
    },
    {
        id: '12',
        title: 'How do you access a function fetch() from a h1 element in JSX?',
        choices: [
            { choice: '<h1>{fetch()}</h1>', correct: true },
            { choice: '<h1>${fetch()}</h1>', correct: false },
            { choice: '<h1>{fetch}</h1>', correct: false },
            { choice: '<h1>${fetch}</h1>', correct: false },
        ],
    },
];
