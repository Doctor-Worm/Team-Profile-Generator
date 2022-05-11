const Engineer = require('../lib/Engineer');

jest.mock('../lib/Engineer.js');

test('creates a new Engineer', () => {
    const engineer = new Engineer();

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.position).toBe('Engineer');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));

    expect(engineer.github).toEqual(expect.any(String));
});