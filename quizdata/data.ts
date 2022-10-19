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
