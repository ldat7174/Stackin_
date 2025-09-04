import { Link } from "react-router-dom";
import "./App.css";

export default function Logo() {
  return (
    <Link to="/home" className="logo">
      STACKIN
    </Link>
  );
}
