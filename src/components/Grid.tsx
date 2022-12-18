import React from "react";

function Grid() {
  return (
    <section className="card-grid">
      {new Array(12).fill("a").map((card, index) => {
        return <div className="card">{index}</div>;
      })}
    </section>
  );
}

export default Grid;
