const Employee = require('../lib/Employee');

test('creates a new Employee', () => {
    const employee = new Employee('Janet');

    expect(employee.name).toBe('Janet');
    expect(employee.position).toBe(expect.anything());
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.anything());
});