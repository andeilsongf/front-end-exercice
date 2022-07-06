import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">Generator</Link>
          <Link to="/payment">Payment</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;