import React from "react";
import { DataCarrousel } from "../../data";
import "./card.styles.scss";

export const Card: React.FC<{ props: DataCarrousel }> = ({ props }) => {
  return (
    <div className="card">
      <img
        draggable={false}
        src={`assets/${props.img}`}
        alt={"Photo " + props.id}
      />
      <strong>{props?.title}</strong>
    </div>
  );
};
