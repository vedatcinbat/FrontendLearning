interface Params {
    params: {
        username: string;
    }
}

export default function UserProfilePage({params}: Params) {
    const { username } = params;

    return (
        <div>
            <h1>User Profile</h1>
            <p>Username: {username}</p>
        </div>
    )
}