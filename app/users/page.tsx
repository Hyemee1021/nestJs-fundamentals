import UserTable from "./UserTable";

const UserPage = () => {
  //check every 10 s
  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //   cache: "no-store",
  //});- we can fresh data every time

  //user can be anything
  return (
    <>
      <h1>Users</h1>
      <UserTable />
    </>
  );
};

export default UserPage;
