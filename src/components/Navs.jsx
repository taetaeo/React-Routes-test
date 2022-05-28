import { Link } from "react-router-dom";

export default function Navs() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/about?name=tk">About?name=tk</Link>
      </li>
    </ul>
  );
}
