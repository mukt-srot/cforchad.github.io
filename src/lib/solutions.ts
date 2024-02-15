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
    },
    {
        id: 12,
        code: `#include <stdio.h>
        
int main(){
    int n;
    printf("enter a number");
    scanf("%d", &n);
    int flag = 0;
    for(int i = 2; i < n; i++){
        if(n % i == 0){
            flag = 1;
            break;
        }
    }
    if(flag == 0){
        printf("prime");
    } else {
        printf("not prime");
    }
    return 0;

}        
        `
    },
    {
        id: 13,
        code: `#include <stdio.h>
float kelvin(float);
float fahrenheit(float);

int main() {
    int option;
    float temperature;
    puts("Enter 1 to convert Celcius to Kelvin and 2 to convert Celcius to Farenheit");
    scanf("%d", &option);
    puts("enter temperature: ");
    scanf("%f", &temperature);

    switch (option) {
        case 1:
            kelvin(temperature);
            break;
        case 2:
            fahrenheit(temperature);
            break;
        default:
            break;
    }

}

float kelvin(float temperature){
    temperature = temperature + 273.15;
    printf("temperature in Kelvin: %.2f", temperature);
}

float fahrenheit(float temperature){
    temperature = (temperature) * 9 /5 + 32;
    printf("temperature in Fahrenheit: %.2f", temperature);
}        
`
    },
    {
        id: 14,
        code: `#include <stdio.h>
#define ANSI_COLOR_RED     "\x1b[31m"
#define ANSI_COLOR_GREEN   "\x1b[32m"
#define ANSI_COLOR_YELLOW  "\x1b[33m"
#define ANSI_COLOR_BLUE    "\x1b[34m"
#define ANSI_COLOR_RESET   "\x1b[0m"

int main() {
    int color;
    char string[20];

    puts("enter a string");
    scanf("%s", string);
    puts("enter color (1 for red, 2 for green, 3 for yellow, 4 for blue): ");
    scanf("%d", &color);
    switch (color) {
        case 1:
            printf(ANSI_COLOR_RED "%s" ANSI_COLOR_RESET, string);
            break;
        case 2:
            printf(ANSI_COLOR_GREEN "%s" ANSI_COLOR_RESET, string);
            break;
        case 3:
            printf(ANSI_COLOR_YELLOW "%s" ANSI_COLOR_RESET, string);
            break;
        case 4:
            printf(ANSI_COLOR_BLUE "%s" ANSI_COLOR_RESET, string);
            break;
        default:
            puts("enter a valid option.");
            break;
    }
}              
        `
    },
    {
        id: 15,
        code: `#include <stdio.h>
        
int main() {
    char str[40];
    puts("enter a string: ");
    scanf("%s", str);

    for (int i = 0;str[i] != '\0' ; ++i) {
        if(str[i] >= 'a' && str[i] <= 'z'){
            str[i] -= 32;
        }
    }
    printf("the upper case string is: %s  \n", str);
    return 0;
}        
        `
    },
    {
        id: 16,
        code: `#include <stdio.h>
        
int main(){
  int num, count;
  printf("enter a number: ");
  scanf("%d", &num);

  for (int i = 1; i <= num; ++i) {
    count = 0;
    for (int j = 2; j <= i / 2; ++j) {
      if(i % j == 0){
        count++;
        break;
      }
    }
    if(count == 0 && i != 1){
      printf("%d ", i);
    }
  }
  return 0;
}        
        `
    },
]