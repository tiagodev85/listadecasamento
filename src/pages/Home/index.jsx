import Start from "../../Components/Start";
import Mensagens from "../../Components/Messages";
import Lista from "../Lista";
import "./home.css";
import CheckDevice from "../../Components/CheckDevice/checkDevice";
import Seta from "../../Components/Seta";
import Messages from "../../Components/Messages";

function Home() {
  const isMobile = CheckDevice();
  console.log(isMobile);
  if (isMobile) {
    return (
      <>
        <Mobile state="visible"/>
        <Desktop state="hidden"/>
      </>
    )
  } else {
    return (
      <>
        <Desktop state="visible"/>
        <Mobile state="hidden"/>
      </>
    )
  }
}

function Mobile({state}) {
  return (
    <div className={"smartphone:ct-sm " + state}>
      <div className="content">
        <section id="start">
          <Start />          
        </section>
        {/* <section id="messages">
          <Mensagens />
        </section> */}
        <section id="lista">
          <Lista />
        </section>
      </div>
    </div>
  );
}

function Desktop({state}) {
  return (
    <div className={"desktop:ct-lg " + state}>
      <div className="content">
        <section id="start">            
          <Start />
        </section>
        <section id="messages">
          <Messages />           
        </section>
        <section id="lista"> 
          <Lista />
        </section>
      </div>
    </div>
  );
}
export default Home;
