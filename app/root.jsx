import { Link, Links, LiveReload, Outlet } from "remix";
import tailwind from "./tailwind.css";

export const links = () => {
  return [{ rel: "stylesheet", href: tailwind }];
};

const App = () => {
  return (
    <Document>
      <Navbar>
        <Outlet />
      </Navbar>
    </Document>
  );
};
export default App;

export const Document = ({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <title>{title ? title : "First Remix Blog"}</title>
        <Links />
      </head>
      <body className="bg-[#212121] text-[#fff]">
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
};

export const Navbar = ({ children }) => {
  return (
    <>
      <nav className="flex justify-between px-5 py-5 shadow-[0_0.5rem_3rem_13px_rgba(0,0,0,0.3)] ">
        <Link className="text-2xl uppercase" to="/">
          Remix
        </Link>
        <ul>
          <li className="uppercase">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>

      <div className="px-5 pt-10 ">{children}</div>
    </>
  );
};
