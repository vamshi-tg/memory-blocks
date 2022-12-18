import React from "react";
import Card from "./Card";

function Grid() {
  return (
    <section className="card-grid">
      {new Array(12).fill("a").map((card, index) => {
        return (
          <div className="card">
            <Card id={index} />
          </div>
        );
      })}
    </section>
  );
}

export default Grid;
