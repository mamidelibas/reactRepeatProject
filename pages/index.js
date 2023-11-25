//import { useState } from "react";
import TestComponent from "../components/testComponent";

export default function Home() {
  //const [popup, setPopup] = useState(true);
  const imageUrl =
    "https://img.lovepik.com/free-png/20220117/lovepik-tea-garden-view-png-image_401433788_wh860.png";

  // YORUM SATIRI - TEK SATIR
  const clickHandler = () => {
    alert("Tıklandı");
  };
  let firstName = "Canberk";

  return (
    <>
      <h2
        onClick={clickHandler}
        className="baslik"
        style={{
          backgroundColor: "#252525",
          color: "red",
          cursor: "pointer",
        }}
      >
        Hello world
      </h2>

      <TestComponent propDegiskeni="Bu değer Home component'inden geldi" />

      <input
        type="text"
        onChange={(event) => {
          console.log(event.target.value);
          // input içerisindeki değer event.target.value ile alınır.
        }}
      />

      <p
        onClick={() => {
          console.log("Merhaba");
        }}
      >
        Merhaba
      </p>

      <img
        src="https://img.lovepik.com/free-png/20220117/lovepik-tea-garden-view-png-image_401433788_wh860.png"
        alt="nextjs"
      />
      <img src={imageUrl} alt="nextjs" />

      <div>{firstName}</div>
    </>
  );
}

//Javascript XML - JSX
