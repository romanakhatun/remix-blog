import { useParams } from "remix";

const Blog = () => {
  const params = useParams();
  return <h1 className="text-3xl"> Blog Id: {params.blogId} </h1>;
};

export default Blog;
