import { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: {
    sortOrder?: string;
    // Optional, as it might not be provided
  };
}
const UserPage = async ({ searchParams }: Props) => {
  const sortOrder = "email" || "name";
  //check every 10 s
  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //   cache: "no-store",
  //});- we can fresh data every time

  //user can be anything

  return (
    <>
      <h1>Users</h1>
      <Link className="btn" href="/users/new">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UserPage;
