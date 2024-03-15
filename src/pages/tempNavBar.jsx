import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Landing</Link>
          </li>
          <li>
            <Link to="/questions-page">Questions Page</Link>
          </li>
          <li>
            <Link to="/results-page">Results Page</Link>
          </li>
          <li>
            <Link to="/high-scores-page">Highscores Page</Link>
          </li>
          <li>
            <Link to="/user-form">User Form Page</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;