import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full absolute top-0 bg-[#8257e5]">
      <nav>
        <ul className="flex h-16 items-center justify-center gap-5 text-white">
          <Link to="/">Generator</Link>
          <Link to="/payment">Payment</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;