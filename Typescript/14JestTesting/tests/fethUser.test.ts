import { fetchUser } from "../functions/fetchUser";

describe('fetchUser function', () => {
    test('resolves with user data for valid ID', async () => {
        const user = await fetchUser(1);
        expect(user).toEqual({id: 1, name: 'Alice'});
    })

    test('rejects with an error for invalid ID', async () => {
        await expect(fetchUser(3)).rejects.toThrow('User not found');
    })
})