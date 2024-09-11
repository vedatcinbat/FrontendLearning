"use client"

import { useEffect, useState } from "react";
//import Greeting from "./components/Greeting";

interface User {
  id: number;
  name: number;
}

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("/api/users");
      const data: User[] = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      {/* <h1>Welcome to the Home Page</h1>
      <p>This is the main landing page of the application.</p>
      <Greeting name="Vedat" age={23} /> */}
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
