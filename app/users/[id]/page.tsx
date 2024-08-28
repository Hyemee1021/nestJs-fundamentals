import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
}
// i detructuure the props
const UserDetailPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return <div> {id}</div>;
};

export default UserDetailPage;
