1.
let num = [1,2,3,4,5]
num.forEach((a,b,c)=>{
    console.log(a);
});

2.
let names = ["Krishna","Aravinth","Karthi","Alex","Santhosh"]
names.forEach((a,b,c) => {
    console.log("Hello,",a);
    
});

3.
let num2 = [1,2,3,4,5]
let num3 = num2.map((a,b,c) => {
    return a*2
    
});
console.log(num3);

4.
let price = [100,200,300,400,500]
let newprice = price.map((a,b,c)=>{
    return a + 100
})
console.log(newprice);

5.
let num4 = [1,2,3,4,5,6,7,8,9,10]
let num5 = num4.filter((a,b,c)=>{
    return a % 2 ===0
})
console.log(num5);

6.
let age = [34,13,26,18,12,10,25,19,45]
let qualifiedage = age.filter((a,b,c)=>{
    return a >= 18 
})
console.log(qualifiedage);

7.
let num6 = [24,51,36,64,89,76,12,04]
let num7 = num6.find((a,b,c)=>{
    return a > 50
})
console.log(num7);

8.
let students = [
    { student1: "Krishna", Mark: 80},
    { student2: "Aravinth", Mark: 54},
    { student3: "Abi", Mark: 86},
    { student4: "Alex", Mark: 98},
    { student5: "Santhosh", Mark: 79}
]

let highmark = students.find((a,b,c)=>{
    return a.Mark>80
})
console.log(highmark);

9.
let num8 = [10,20,30,40,50,60,70,80,90,100]
let num9 = num8.reduce((a,b,c,d)=>{
    return a + b
},0)
console.log(num9);

10.
let price1 = [100,200,300,400,500]
let newprice1 = price1.reduce((a,b,c,d)=>{
    return a + b
},0)
console.log(newprice1);

11.
let num10 = [34,26,78,120,186,54,204]
let num11 = num10.some((a,b,c)=>{
    return a > 100
})
console.log(num11);

12.
let num12 = [36,40,45,50,60,25,100]
let num13 = num12.every((a,b,c)=>{
    return a > 35
})
console.log(num13);

13.
let num14 = [24,36,78,10,2,64,41]
let num15 = num14.sort((a,b,c)=>{
    return a-b
})
console.log(num15);

14.
let num16 = [24,36,78,10,2,64,41]
let num17 = num16.sort((a,b,c)=>{
    return b-a
})
console.log(num17);

15.
let num18 = ["Krishna","Aravinth","Karthi","Alex","Santhosh"]
console.log(num18.toString());

16.
let num19 = ["Krishna","Aravinth","Karthi","Alex","Santhosh"]
console.log(num19.join("-"));

17.
let products = ["Laptop", "Phone", "Headphones", "Keyboard"]
let newproducts  = products.join(", ")
console.log(newproducts);

18.
let string = "Javascript"
console.log(string.charAt(4));

19.
let string1 = "Javascript"
console.log(string1.charCodeAt(0));

20.
let string2 = "Hello Javascript"
console.log(string2.length);

21.
let string3 = "Javascript Developer"
console.log(string3.slice(0,11));

22.
let string4 = "javascript"
console.log(string4.toUpperCase());

23.
let string5 = "JAVASCRIPT"
console.log(string5.toLowerCase());

24.
let string6 = " Javascript "
console.log(string6.trim());

25.
let sentence = prompt("What is your name? ")
console.log( sentence.includes("Krishna"));
console.log( sentence.indexOf("Krishna"));
console.log( sentence.startsWith("K"));
console.log( sentence.endsWith("a"))

26.
let date0 =new Date()
console.log(date0);
console.log("Year:",date0.getFullYear());
console.log("Month:",date0.getMonth()+1);
console.log("Date:",date0.getDate());
console.log("Day:",date0.getDay());

27.
let date1 =new Date()
console.log("Hours :", date1.getHours());
console.log("Minutes :", date1.getMinutes());
console.log("Seconds :", date1.getSeconds());

28.
let date2 = new Date()
console.log("Before:", date2);
date2.setFullYear(2030);
console.log("After:", date2);

29.
let date3 = new Date()
console.log("Before:", date3);
date3.setMonth(5)
date3.setDate(15)
console.log("After:", date3);

30.
let dob = prompt("Enter your date of birth (YYYY-MM-DD):")
let date = new Date(dob)
let day = date.getDay()
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log( days[day]);