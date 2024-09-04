export async function fetchUser(id: number): Promise<{id: number; name: string}> {
    const users = [
        {id: 1, name: "Alice"},
        {id: 2, name: "Bob"},
    ];

    const user = users.find(user => user.id === id);

    if(!user) {
        throw new Error("User not found");
    }

    return user;
}