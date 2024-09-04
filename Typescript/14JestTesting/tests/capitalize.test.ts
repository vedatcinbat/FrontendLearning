import { capitalize } from "../functions/capitalize";


describe('capitalize function', () => {
    test('capitalize the first letter of a string', () => {
        expect(capitalize('hello')).toBe('Hello')
        console.info('Test passed: capitalize the first letter of a string');
    })

    test('capitalizes the first letter and lowercases the rest', () => {
        expect(capitalize('hELLO')).toBe('Hello');
    })

    test('returns an empty string if given an empty string', () => {
        expect(capitalize('')).toBe('');
    })
})