const { expect } = require('expect')
const Employee = require('../lib/Employee')

test('testing to see if Employee class is present', ()=>{
    const e = new Employee();
   expect(typeof(e)).toBe("object");
})

test('Can set name via customer arguments', ()=>{
    const name ="Mateo";
    const e = new Employee(name);
   expect(typeof(e.name)).toBe(name);
})

test('Can set id via constructor arguments ', ()=>{
    const name ="Mateo";
    const e = new Employee(name);
   expect(typeof(e.name)).toBe(name);
})
