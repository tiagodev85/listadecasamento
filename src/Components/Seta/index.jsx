import CheckDevice from "../CheckDevice/checkDevice";
import "./seta.css";

function Seta({ link, id, comando }) {
  const isMobile = CheckDevice();
  console.log(isMobile);

  if (isMobile) {
    return (
      <a href={"#"+link} id={"scrollDown-"+id} className="smartphone:botao-sm" data-bs-toggle="tooltip" title={comando}>  
        <i id="bx1" className="bx bxs-chevron-down"></i>
        <i id="bx2" className="bx bxs-chevron-down"></i>
        <i id="bx3" className="bx bxs-chevron-down"></i>
      </a>
    );
  }else{
    return (
      <div className="desktop:seta-lg">
        <a href={"#"+link} id={"scrollDown-"+id} className="desktop:botao-lg" data-bs-toggle="tooltip" title={comando}
        >
          <i id="bx1" className="bx bxs-chevron-down"></i>
          <i id="bx2" className="bx bxs-chevron-down"></i>
          <i id="bx3" className="bx bxs-chevron-down"></i>
        </a>
      </div>
    );
  }
}

export default Seta;
