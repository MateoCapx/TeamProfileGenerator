const { expect } = require('expect')
const Manager = require('../lib/Manager')

test('testing to see if Employee class is present', () => {
    const e = new Manager();
    expect(typeof (e)).toBe("object");
})

test('Can set name via constructor arguments', () => {
    const name = "Mateo";
    const e = new Manager(name);
    expect(typeof (e.name)).toContain("string");
})

test('Can set id via constructor arguments ', () => {
    const testValue = 27;
    const e = new Manager("YO", testValue);
    expect(e.id).toBe(testValue);
})


