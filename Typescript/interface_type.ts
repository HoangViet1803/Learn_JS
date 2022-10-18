/** Interface và Type thuộc loại User defined type */


/** ======== INTERFACE TYPE ======== **/
// Khai báo:
// interface Shape {
//     name: string;
//     color: string
// }
interface contact {
    email: string;
    phone: string
}

// export để dùng cho nhiều file
export interface IPerson {
    name: string;
    age?: number;
}

let actor: IPerson;
let singer1: IPerson;
actor = {name:"MTP", age: 28}

// interface có thể merge
interface Shape {
    name: string;
}
interface Shape {
    color: string;
}
const circle: Shape = {
    name: 'circle',
    color: 'red'
}

// Add 'readonly' to not allow updating value of a props (NOTE: still able to set on creation)
interface Student {
    readonly id: number;
    name: string;
    age?: number;
}




/** ======== Type ======== **/
// Khai báo
// type Pen = {
//     name: string;
//     color: string;
// }

// Type không thể merge --> chúng ta sẽ nhận được lỗi "Duplicate indetifier 'name-type'"



/** Intersection type **/
interface BusinessPartner {
    name: string;
    credit: number;
};
interface Identity {
    id: number;
    name: string
}
interface Contact {
    email: string;
    phone: string;
}

// type:
type Employee = Identity & Contact;

// Interface 
interface Customer extends BusinessPartner, Contact {}