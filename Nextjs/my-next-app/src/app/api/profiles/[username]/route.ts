interface User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
}

const users: User[] = [
    {id: 1, username: "Alice", firstName: "Alice", lastName: "Smith"},
    {id: 2, username: "Bob", firstName: "Bob", lastName: "Smith"},
    {id: 3, username: "Charlie", firstName: "Charlie", lastName: "Smith"},
    {id: 4, username: "David", firstName: "David", lastName: "Smith"},
]

const getUserProfile = async (username: string) => {
    const user: User | undefined = users.find(user => user.username.toLowerCase() === username.toLowerCase());

    if(user === null) {
        return null;
    }
    
    return {
        id: user?.id,
        username: user?.username,
        firstName: user?.firstName,
        lastName: user?.lastName
    };
}


export async function GET(request: Request, { params }: {params: {username: string}}) {
    const {username} = params;
    const userProfile = await getUserProfile(username);
    return new Response(JSON.stringify(userProfile), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}