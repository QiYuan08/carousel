import React from "react";
import Card from "./Card";
import Carousel from "./Carousel";

function App() {
  let datas = [
    "https://picsum.photos/400/600",
    "https://picsum.photos/400/600",
    "https://picsum.photos/400/600",
    "https://picsum.photos/400/600",
    "https://picsum.photos/400/600",
    "https://picsum.photos/400/600",
    "https://picsum.photos/400/600",
    "https://picsum.photos/400/600",
    "https://picsum.photos/400/600",
  ];

  return (
    <div>
      <h2 className="header">Pregnancy Articles</h2>
      <Carousel datas={datas} />
    </div>
  );
}

export default App;
