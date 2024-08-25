import UserTable from "./UserTable";

interface Props {
  searchParams: {
    sortOrder: string;
  };
}
const UserPage = ({ searchParams: { sortOrder } }: Props) => {
  //check every 10 s
  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //   cache: "no-store",
  //});- we can fresh data every time

  //user can be anything

  return (
    <>
      <h1>Users</h1>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UserPage;
