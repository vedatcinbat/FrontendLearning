export default async function UsersPage() {

  const res = await fetch("http:/localhost:3001/api/users");
  const users = await res.json();

  if(users.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome to the Users Page</h1>
      <p>This is the page where users are displayed.</p>
      <ul>
        {users.map((user: {id: number, name: string}) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
