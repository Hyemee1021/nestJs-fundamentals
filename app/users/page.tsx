const UserPage = async () => {
  interface User {
    id: number;
    name: string;
  }

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  //check every 10 s
  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //   cache: "no-store",
  //});- we can fresh data every time
  const users: User[] = await res.json();
  //user can be anything
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UserPage;
