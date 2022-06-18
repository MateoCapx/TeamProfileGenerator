const { expect } = require('expect')
const { number } = require('yargs')
const Employee = require('../lib/Employee')

test('testing to see if Employee class is present'), ()=>{
    const employee = new Employee('Mateo')

    expect(employee.getId()).toEqual(expect.any(Number))

} 
