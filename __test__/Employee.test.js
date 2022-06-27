const { expect } = require('expect')
const Employee = require('../lib/Employee')

test('testing to see if Employee class is present', ()=>{
    const e = new Employee();
   expect(typeof(e)).toBe("object");
})

test('Can set name via constructor arguments', ()=>{
    const name ="Mateo";
    const e = new Employee(name);
   expect(typeof(e.name)).toContain("string");
})

test('Can set id via constructor arguments ', ()=>{
    const testValue =27;
    const e = new Employee("YO",testValue);
   expect(e.id).toBe(testValue);
})


test('Can set email via constructor arguments ', ()=>{
    const testValue ="test@test.com" ;
    const e = new Employee("YO",1,testValue);
   expect(e.email).toBe(testValue);
})