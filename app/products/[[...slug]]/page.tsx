import UserTable from "@/app/users/UserTable";
import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: {
    sortOrder?: string;
  };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder = "default" },
}: Props) => {
  return (
    <div>
      ProductPage {slug.join("/")} - sortOrer: {sortOrder}
    </div>
  );
};

export default ProductPage;
