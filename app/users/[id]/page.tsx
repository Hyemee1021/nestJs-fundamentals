import React from "react";

interface Props {
  params: { id: number };
}
// i detructuure the props
const UserDetailPage = ({ params: { id } }: Props) => {
  return <div> {id}</div>;
};

export default UserDetailPage;
