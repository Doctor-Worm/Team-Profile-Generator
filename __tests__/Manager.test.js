const Manager = require('../lib/Manager');

jest.mock('../lib/Manager.js');

test('creates a new Manager', () => {
    const manager = new Manager();

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.position).toBe('Manager');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
});