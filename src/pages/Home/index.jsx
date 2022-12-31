import Start from "../Start";
import Mensagens from "../Messages";
import Lista from "../Lista";
import "./home.css";
import CheckDevice from "../../Components/CheckDevice/checkDevice";

function Home() {
  const isMobile = CheckDevice();
  console.log(isMobile);
  if (isMobile) {
    return (
      <div className="smartphone:ct-sm">
        <Start />
      </div>
    );
  } else {
    return (
      <div className="desktop:ct-lg">
        <Start />
      </div>
    );
  }
}

export default Home;
