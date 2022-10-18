/** ========BASIC TYPE========  */

/** -----string----- */
let firstName = 'Hoang';
let lastName:string = 'David';
lastName = 'Viet';
// let fullName:string = firstName+" "+lastName;
let fullName:string = `${firstName} ${lastName}`


/** -----number----- */
// let age = 30;
let age:number = 30;


/** -----boolean----- */
let isValid = true;
isValid = false;


/** -----undefined, null----- */
let  k:undefined;
let n:null;


/** -----any type----- */
let anyType:any;
anyType = 30;
anyType = 'Becker';
anyType = false;


/** -----Union type dùng với type----- */
// Union type allows us to use more than one data types for a variable or a funtion parameter

// Syntac: (type1 | type2 | type3 | ... | typeN)

let code: (string | number | boolean);
code = 'Java';
code = 12;
code = true;


/** -----Enum type----- */
/**
 * Enum tập hợp các giá trị cùng nhóm
 * Giúp dễ dàng quản lý và truy xuất
 * Sử dụng cho data một chiều
 */

/** Number enum */ 
enum Status {
    PENDING,     // 0
    IN_PROGRESS, // 1
    DONE,        // 2
    CANCELLED    // 3
}

enum Status1 {
    PENDING = 4,     // 4
    IN_PROGRESS,     // 5
    DONE,            // 6
    CANCELLED        // 7
}

enum Status2 {
    PENDING = 6,     // 6
    IN_PROGRESS = 8, // 8
    DONE,            // 9
    CANCELLED = 12   // 12
}
// can assign any number to your enum variable 
const stats1: Status1 = Status1.DONE;
const stats2: Status = 10;

// number enum -> support reverse mapping
console.log(Status[0]); // 'PENDING'
console.log(Status['CANCELLED']); // 3

/** string enum */
// Don't have reverse mapping for string enum
enum Colors {
    RED = 'red',
    BLUE = 'blue',
    YELLOW = 'yellow'
}
const hat = Colors.BLUE;


/** -----object type----- */
import {IPerson} from './interface_type';
let singer: IPerson;
singer = {
    name: 'B-ray'
}
// singer.name = 'Den Vau' // Error
singer.name = 'MPT';

let song:{name: string , singer?: string} = {name: 'Tieng phao tien nguoi'};
song.singer = 'Hung Quan';


type Song = {
    name: string;
    singer?: string;
    year: number
}

let songs:Song = {
    name: '',
    singer: '',
    year: 0,
}

songs.name = 'Cao oc 20';
songs.singer = ' Bray';
songs.year = 2016;
console.log(songs)


/** -----array type----- */
// Cách 1:
let myArr : string[] = [ 'dog', 'cat', 'rabbit'];
myArr.push('chicken')
let nums: number[] = [1,2,3,4,5,6,7];
let values: (number | string | boolean)[] = [1.2, 34 , 'Candy', true];
// Cách 2:
let fruits: Array <string>;
fruits = ['apple', 'orange', 'banana'];
let values1: Array<string | number> = ['apple', 2, 'oranger', 3, 4];

// accessing array elements:
fruits[0]; // returns apple;
fruits[1]; // returns orange
fruits[2]; // returns banana
fruits[3]; // return undefined

// object array
let blogs:{title: string, body: string}[] = [{title:'',body:''}];
blogs.push({title:'hello',body:'world'});
console.log(blogs);


/** -----Tuple----- */
/** Tuple can contain more than two value of different data types */
let employee: [number, string] = [1,"Steve"];
// let employee: [number, string] = [1,"Steve" , 2 , "bill"]; // error
employee.push(2,"bill");
console.log(employee); // returns [1,"Steve" , 2 , "bill"];


let person:[number, string, boolean] = [1, "Steve", false];
person[0] // returns 1
person[1] // returns "Steve"
person[1] = person[1].concat(" Jobs")
console.log(person); // returns [1, "Steve Jobs", false]


let employees: [number,string][];
employees=[[1,"Hary"],[2,'Bill']];
employees.push([3,'Jeff']);

console.log(employees)


/** ========Function======== */

// function return value

// const sum = (num1, num2) => {
//     return num1 + num2
// }

const sum = (num1: number, num2: number, name: string) => {
    return `${name}: ${num1+num2} points`
}
sum (20,22,'Vex')

// có thể dùng "type" để quy định kiểu dữ liệu cho function
type Total = (num1: number, num2: number) =>  number;
const total: Total = (num1, num2) => {
    return num1 + num2 
}
total (2, 3)

// function not return value
const sayHi = ():void => {
    console.log('Hello');
    
}

// There is no meaning to assign void to a variable, as only null or undefined is assignable to void
let nothing:void = undefined;
// let num: void = 1 // Error


/** -----Never----- */
// Cho biết giá trị đó không bao giờ xảy ra
// Điểm khác nhau giữa never và void: void có thể là undefined hoặc null còn never sẽ không trả ra bất cứ giá trị nào








