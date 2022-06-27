const { expect } = require('expect')
const Intern = require('../lib/Intern')

test('testing to see if Employee class is present', () => {
    const e = new Intern();
    expect(typeof (e)).toBe("object");
})

test('Can set name via constructor arguments', () => {
    const name = "Mateo";
    const e = new Intern(name);
    expect(typeof (e.name)).toContain("string");
})

test('Can set id via constructor arguments ', () => {
    const testValue = 27;
    const e = new Intern("YO", testValue);
    expect(e.id).toBe(testValue);
})

