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
        name: string;
        url: string;
    }
    tags: string;
    solution: string;
    learn: string;
}

export const    Problems: Problem[] = [
    {
        id: 1,
        title: 'Hello World',
        description: {
            text: 'This problem requires you to print Print Hello World',
            output: 'hello world'
        },
        difficulty: 'easy',
        source: {
            name: 'hacker rank',
            url: 'https://www.hackerrank.com/challenges/hello-world-c/problem?isFullScreen=true'
        },
        tags: 'introduction',
        solution: `#include <stdio.h>
int main(){
    printf("hello world");
    return 0;
}`,
        learn: 'www.example.com'
    },
    {
    id: 2,
    title: 'Two Sum',
    description: {
        text: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
        output: 'hello world'
    },
    difficulty: 'easy',
    source: {
        name: 'leetcode',
        url: 'https://leetcode.com/problems/two-sum/'
    },
    tags: 'array',
    solution: `#include <stdio.h> 
    code here bla bla bla
    printf("hello world");`,
    learn: 'www.example.com',
}
]