import React from "react";
import "./card.styles.scss";

export const Card: React.FC = () => {
  return (
    <div className="card">
      <img src="assets/photo-1.png" alt="Photo 1" />
      <strong>Cat</strong>
    </div>
  );
};
