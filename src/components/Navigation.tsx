import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/useRef">useRef</Link>
        </li>

        <li>
          <Link to="/Rmemo">React.memo</Link>
        </li>
        <li>
          <Link to="/callback">useCallback</Link>
        </li>
        <li>
          <Link to="/memo">useMemo</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
