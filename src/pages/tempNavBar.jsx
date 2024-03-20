import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="flex gap-4 justify-center text-yellow-300 ">
          <li className="flex hover:text-orange-300">
            <Link to="/">Landing</Link>
          </li>
          <li className="flex hover:text-orange-300">
            <Link to="/questions-page">Questions Page</Link>
          </li>
          <li className="flex hover:text-orange-300">
            <Link to="/results-page">Results Page</Link>
          </li>
          <li className="flex hover:text-orange-300">
            <Link to="/high-scores-page">Highscores Page</Link>
          </li>
          <li className="flex hover:text-orange-300">
            <Link to="/user-form">User Form Page</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
