const a = {
    firstName: "Viet"
}
const b = {
    lastName: "Henry"
};
// Object.assign() -> gộp các object
// Syntax: Object.assign(target, ...sources)
const c = Object.assign(a, b);
console.log(c);
// một cách khác để gộp các object
const d = {...a, ...b };
console.log(d);