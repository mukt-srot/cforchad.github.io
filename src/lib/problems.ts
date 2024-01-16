import { Solutions } from "./solutions";
interface Problem {
    id: number;
    title: string;
    description: {
        text: string;
        input?: string;
        output?: string;
    };
    difficulty: 'easy' | 'mid' | 'hard';
    source: {
        name?: string;
        url?: string;
    }
    tags: string;
    solution: {
        code: string;
    };
    learn?: string;
}

export const Problems: Problem[] = [
    {
        id: 1,
        title: 'Hello World',
        description: {
            text: 'This problem requires you to print Hello World',
            output: 'hello world'
        },
        difficulty: 'easy',
        source: {
            name: 'hackerrank',
            url: 'https://www.hackerrank.com/challenges/hello-world-c/problem?isFullScreen=true'
        },
        tags: 'introduction',
        solution: {
            code: Solutions[0].code
        },
        learn: 'https://www.learn-c.org/en/Hello%2C_World%21'
        
    },
    {
        id: 2,
        title: "Sum and difference of two numbers",
        description: {
          text: "A program to take two numbers as input and output their sum and difference.",
          input: "10 4",
          output: "14, 6"
        },
        difficulty: "easy",
        source: {
          name: "hackerrank",
          url: "https://www.hackerrank.com/challenges/sum-numbers-c/problem?isFullScreen=true"
        },
        tags: "introduction",
        solution: {
          code: Solutions[1].code
        },
        learn: ""
      },
    {
        id: 3,
        title: 'Check if a number is even or odd',
        description: {
            text: 'A program that will take an integer as input and output whether it is even or odd',
            input: '4',
            output: 'even'
        },
        source: {
            name: 'cforchad',
            url: '/'
        },
        tags: 'conditionals',
        difficulty: 'easy',
        solution: {
            code: Solutions[2].code
        },
        learn: 'https://www.learn-c.org/en/Conditions',
    },
    {
        id: 4,
        title: 'Factorial of a number',
        description: {
            text: 'A program that will take an integer as input and output it\'s factorial',
            input: '5',
            output: '120'
        },
        source: {
            name: 'cforchad',
            url: '/'
        },
        tags: 'loops',
        difficulty: 'easy',
        solution: {
            code: Solutions[3].code
        },
        learn: 'https://www.learn-c.org/en/For_loops',
    },
    {
        id: 5,
        title: 'Root of a quadratic equation using Bhaskara\'s formula',
        description: {
            text: 'A program that will take 3 numbers as coefficients of a quadratic equation and output the roots of the equation',
            input: '1 5 4',
            output: 'roots: -1, -4'
        },
        source: {
            name: 'cforchad',
            url: '/'
        },
        tags: 'arithmetics',
        difficulty: 'easy',
        solution: {
            code: Solutions[4].code
        },
        learn: 'https://www.geeksforgeeks.org/arithmetic-operators-in-c/',
    },
    {
        id: 6,
        title: 'Sum of odd numbers from input of 5 numbers (without arrays)',
        description: {
            text: 'A program that will take 5 numbers and output the sum of the odd numbers among them.',
            input: '1 2 4 5 9',
            output: '15'
        },
        source: {
            name: 'cforchad',
            url: '/'
        },
        tags: 'arithmetics',
        difficulty: 'easy',
        solution: {
            code: Solutions[5].code
        },
        learn: 'https://www.learn-c.org/en/Conditions',
    },
    {
        id: 7,
        title: 'A program to count the number of vowels in a string',
        description: {
            text: 'A program that will take a string as input and count number of vowels in it.',
            input: 'Orange',
            output: '3'
        },
        source: {
            name: 'cforchad',
            url: '/'
        },
        tags: 'strings',
        difficulty: 'easy',
        solution: {
            code: Solutions[6].code
        },
        learn: 'https://www.learn-c.org/en/Arrays',
    },
    {
        id: 8,
        title: 'Sum of odd numbers out of 5 numbers',
        description: {
            text: 'A program that will take 5 numbers and output the sum of the odd numbers among them.',
            input: '1 2 4 5 9',
            output: '15'
        },
        source: {
            name: 'cforchad',
            url: '/'
        },
        tags: 'arithmetics',
        difficulty: 'easy',
        solution: {
            code: Solutions[7].code
        },
        learn: 'https://www.learn-c.org/en/Arrays',
    },
    {
        id: 9,
        title: 'Palindrome Number',
        description: {
            text: 'A program that will take a number as input and output whether it is a palindrome or not. A palindrome number is a number that is same after reverse.(e.g. 242 reversed is 242 so it is a palindrome.) ',
            input: '121',
            output: 'true'
        },
        source: {
            name: 'leetcode',
            url: 'https://leetcode.com/problems/palindrome-number/'
        },
        tags: `loops, arithmetics`,
        difficulty: 'easy',
        solution: {
            code: Solutions[8].code
        },
        learn: 'https://www.geeksforgeeks.org/c-program-to-check-whether-a-number-is-a-palindrome-or-not/',
    },
    {
        id: 10,
        title: 'Number of words in a sentence',
        description: {
            text: 'A program that will take a sentence as input and output the number of words in it.',
            input: 'This is a sentence',
            output: '4'
        },
        source: {
            name: 'K&R',
            url: 'https://www.amazon.in/C-Programming-Language-2Nd-Edn-dp-B0744YCG2K/dp/B0744YCG2K/ref=dp_ob_title_bk'
        },
        tags: `loops, arithmetics`,
        difficulty: 'easy',
        solution: {
            code: Solutions[9].code
        },
        learn: 'https://www.geeksforgeeks.org/count-words-in-a-given-string/',
    },
    {
        id: 11,
        title: 'Sum of digits of a 5 digit number',
        description: {
            text: 'A program that will take 5 digit number as input and output it\'s sum of digits.',
            input: '42268',
            output: '22'
        },
        source: {
            name: 'hackerrank',
            url: 'https://www.hackerrank.com/challenges/sum-of-digits-of-a-five-digit-number/problem?isFullScreen=true'
        },
        tags: `loops, arithmetics`,
        difficulty: 'easy',
        solution: {
            code: Solutions[10].code
        },
        learn: 'https://www.sanfoundry.com/c-program-sum-all-digits-integer/#:~:text=Sum%20of%20digits%20in%20a,number%20%E2%80%9C14892%E2%80%9D%20is%2024.',
    },
    {
        id: 12,
        title: 'Check if a number is prime or not',
        description: {
            text: 'A program that will take a number as input and output whether it is prime or not.',
            input: '29',
            output: 'prime'
        },
        source: {
            name: 'cforchad',
            url: '/'
        },
        tags: `loops, arithmetics`,
        difficulty: 'easy',
        solution: {
            code: Solutions[11].code
        },
        learn: 'https://www.geeksforgeeks.org/c-program-to-check-whether-a-number-is-prime-or-not/',
    },
    {
        id: 13,
        title: 'Temperature Conversion',
        description: {
            text: 'A program with user defined functions that will convert Celcius to Kelvin or Farenheit according to user input. Use switch case is preferred.',
            input: `Enter 1 to convert Celcius to Kelvin and 2 to convert Celcius to Farenheit
1
enter temperature in celcius: 100`,
            output: 'temperature in Kelvin: 373.15'
        },
        source: {
            name: 'cforchad',
            url: '/'
        },
        tags: `functions, switch case`,
        difficulty: 'easy',
        solution: {
            code: Solutions[12].code
        },
        learn: 'https://www.prepbytes.com/blog/c-programming/c-program-to-convert-celsius-to-fahrenheit/#:~:text=Algorithm%20for%20C%20Program%20to,Print%20the%20temperature%20in%20Fahrenheit.',
    },
    {
        id: 14,
        title: 'Print Custom Colored Text',
        description: {
            text: 'A program that will print a string with custom color using ANSI color escape codes. (e.g. \\x1b[31m will print the text in red color)',
            input: `enter a string: Hello World
enter color (1 for red, 2 for green, 3 for yellow, 4 for blue): 1`,
            output: 'Hello World in red color(We can\t show the exact color here cause we are using a syntax highlighter that doesn\t support custom colors)'
        },
        source: {
            name: 'cforchad',
            url: '/'
        },
        tags: `graphics, strings`,
        difficulty: 'easy',
        solution: {
            code: Solutions[13].code
        },
        learn: 'https://www.theurbanpenguin.com/4184-2/',
    },
    {
        id: 15,
        title: 'Convert lowercase string to uppercase',
        description: {
            text: 'A program that will take a string as input and convert it to uppercase.',
            input: `enter a string: lolXD`,
            output: 'LOLXD'
        },
        source: {
            name: 'cforchad',
            url: '/'
        },
        tags: `graphics, strings`,
        difficulty: 'easy',
        solution: {
            code: Solutions[14].code
        },
        learn: 'https://codeforwin.org/c-programming/c-program-convert-lower-case-string-to-upper',
    },
]