import "./start.css";
import Messages from "../Messages";
import CheckDevice from "../../Components/CheckDevice/checkDevice";
import Seta from "../../Components/Seta";
import { Link } from "react-router-dom";

function Start() {
  const isMobile = CheckDevice();

  if (isMobile) {
    return <Mobile />;
  } else {
    return <Desktop />;
  }
}

function Mobile() {
  return (
    <div className="smartphone:content-sm">
      <div id="title" className="smartphone:title-sm">
        <div className="smartphone:text-title-sm">
          <h3>lista de</h3>
          <h1>casamento</h1>
        </div>
      </div>
      <div id="photo" className="smartphone:photo-sm"></div>
      <div className="smartphone:nome-sm">
        <h1>Tiago e Laís</h1>
      </div>
      <Messages />
      <Seta link="/lista" />
    </div>
  );
}
function Desktop() {
  return (
    <div className="desktop:content-lg">
      <div id="title" className="desktop:title-lg">
        <div className="desktop:text-title-lg">
          <h3>lista de</h3>
          <h1>casamento</h1>
        </div>
      </div>
      <div className="desktop:quadro-lg">
        <div id="photo" className="desktop:photo-lg"></div>      
        <Messages />
        <div className="desktop:nome-lg">
          <h1>Tiago e Laís</h1>
        </div>
      </div>
      <Seta link="/lista" />      
    </div>
  );
}

export default Start;
