import { Card } from "../card";
import { dataCarrousel, DataCarrousel } from "../../data";
import "./carrousel.styles.scss";

export const Carrousel: React.FC = () => {
  return (
    <div className="rootCarrousel">
      <div className="containerCarrousel">
        {dataCarrousel && dataCarrousel?.length > 0 ? (
          dataCarrousel.map((card: DataCarrousel) => <Card props={card} />)
        ) : (
          <strong>There are no elements</strong>
        )}
      </div>
    </div>
  );
};
