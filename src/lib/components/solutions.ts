interface Solutions{
    id:number;
    code:string;
}

export const Solutions:Solutions[] = [
    // the solution id refers to the corresponding problem id
    {
        id: 1,
        code: `#include <stdio.h>
int main(){
    printf("hello world");
    return 0;
}
        `
    },
    {
        id: 2,
        code: `#include <stdio.h>
int main(){
    int a,b;
    scanf("%d %d", &a, &b);
    printf("%d %d", a+b, a-b);
    return 0;
}`
    },
    {
        id: 3,
        code: `#include <stdio.h>

int main(){
    int a;
    printf("enter a number");
    scanf("%d", &a);
    if(a % 2 == 0){
        printf("even");
    } else {
        printf("odd");
    }
    return 0;
}`
    },
    {
        id: 4,
        code: `#include <stdio.h>

int main(){
    int a, fact = 1;
    printf("enter a number");
    scanf("%d", &a);
    for(int i = 1; i <= a; i++){
        fact = fact * i;
    }
    printf("%d", fact);
    return 0;
}
        `
    },
    {
        id: 5,
        code: `#include <stdio.h>
        
int main(){
    int a,b,c;
    float root1, root2;
    printf("enter coefficients a, b, c");
    scanf("%d %d %d", &a, &b, &c);
    root1 = (-b + sqrt(b*b - 4*a*c))/(2*a);
    root2 = (-b - sqrt(b*b - 4*a*c))/(2*a);
    printf("roots: %f, %f", root1, root2);
    return 0;
}        
        `
    },
    {
        id: 6,
        code: `#include <stdio.h>

int main(){
    int a, b, c, d, e, sum = 0;
    printf("enter 5 numbers");
    scanf("%d %d %d %d %d", &a, &b, &c, &d, &e);
    if(a % 2 != 0){
        sum = sum + a;
    }
    if(b % 2 != 0){
        sum = sum + b;
    }
    if(c % 2 != 0){
        sum = sum + c;
    }
    if(d % 2 != 0){
        sum = sum + d;
    }
    if(e % 2 != 0){
        sum = sum + e;
    }
    printf("%d", sum);
}  
        `
    },
    {
        id: 7,
        code: `#include <stdio.h>

int main(){
    char str[100];
    int count = 0;
    printf("enter a string");
    scanf("%s", str);
    for(int i = 0; str[i] != '\0'; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o'|| str[i] == 'u'){
            count++;
        }
    }
    printf("%d", count);
}
        `
    },
    {
        id: 8,
        code: `#include <stdio.h>

int main(){
    int arr[5], sum = 0;
    printf("enter 5 numbers");
    for(int i = 0; i < 5; i++){
        scanf("%d", &arr[i]);
    }
    for(int i = 0; i < 5; i++){
        if(arr[i] % 2 != 0){
            sum = sum + arr[i];
        }
    }
    printf("%d", sum);
}
        `
    },
    {
        id: 9,
        code: `#include <stdio.h>

int main(){
    int num, rev = 0, temp;
    printf("enter a number");
    scanf("%d", &num);
    temp = num;
    while(temp != 0){
        rev = rev * 10 + temp % 10;
        temp = temp / 10;
    }
    if(rev == num){
        printf("palindrome");
    } else {
        printf("not palindrome");
    }
    return 0;
}
    `
    },
    {
        id: 10,
        code: `#include <stdio.h>

int main(){
    char str[100];
    int count = 0;
    printf("enter a sentence");
    scanf("%[^\n]", str);
    for(int i = 0; str[i] != '\0'; i++){
        if(str[i] == ' '){
            count++;
        }
    }
    printf("%d", count+1);
    return 0;
}`
    },
    {
        id: 11,
        code: `#include <stdio.h>
        
int main(){
    //A program that will take 5 digit number as input and output it\'s sum of digits.
    int n;
    printf("enter a 5 digit number");
    scanf("%d", &n);
    int rem,sum=0;
    while(n!=0){
        rem=n%10;
        sum=sum+rem;
        n=n/10;
    }
    printf("%d",sum);
    return 0;

}        
        `
    }
]