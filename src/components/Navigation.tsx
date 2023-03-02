import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/useRef">useRef</Link>
        </li>

        <li>
          <Link to="/memo">React.memo</Link>
        </li>
        <li>
          <Link to="/callback">useCallback</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
