const { expect } = require('expect')
const Engineer = require('../lib/Engineer')

test('testing to see if Employee class is present', ()=>{
    const e = new Engineer();
   expect(typeof(e)).toBe("object");
})

test('Can set name via constructor arguments', ()=>{
    const name ="Mateo";
    const e = new Engineer(name);
   expect(typeof(e.name)).toContain("string");
})

test('Can set id via constructor arguments ', ()=>{
    const testValue =27;
    const e = new Engineer("YO",testValue);
   expect(e.id).toBe(testValue);
})


test('Can set email via constructor arguments ', ()=>{
    const testValue ="test@test.com" ;
    const e = new Engineer("YO",1,testValue);
   expect(e.email).toBe(testValue);
})

test('Can set gitHub via constructor arguments ', ()=>{
    const testValue ="test.com" ;
    const e = new Engineer("YO",1,testValue);
   expect(e.email).toBe(testValue);
})