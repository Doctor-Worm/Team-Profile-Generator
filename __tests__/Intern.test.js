const Intern = require('../lib/Intern');

jest.mock('../lib/Intern.js');

test('creates a new Intern', () => {
    const intern = new Intern();

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.position).toBe('Intern');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});