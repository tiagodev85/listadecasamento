import { Link } from "react-router-dom";
import CheckDevice from "../CheckDevice/checkDevice";
import "./seta.css";

function Seta({ link }) {
  const isMobile = CheckDevice();  

  if (isMobile) {
    return (
      <div className="smartphone:link-sm">
        <Link to={link}>Acesse nossa lista de presentes</Link>
      </div>
    );
  } else {
    return (
      <div className="desktop:link-lg">
        <Link to={link}>Acesse nossa lista de presentes</Link>
      </div>
    );
  }
}

export default Seta;
