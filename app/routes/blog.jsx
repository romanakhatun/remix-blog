import { Outlet } from "remix";

const Blog = () => {
  return (
    <>
      <h1 className="text-4xl">This is blog page</h1>
      <Outlet />
    </>
  );
};

export default Blog;
