import w1 from "./w1.png";
import w2 from "./w2.png";
import w3 from "./w3.png";
import w4 from "./w4.png";
import w5 from "./w5.png";
import w6 from "./w6.png";
import w7 from "./w7.png";
import w8 from "./w8.png";

type Props = {
  choice: number;
};

export const Picture: React.FC<Props> = ({ choice }) => {
  const numberPNG = (choice: number) => {
    switch (choice) {
      case 1:
        return w1;
      case 2:
        return w2;
      case 3:
        return w3;
      case 4:
        return w4;
      case 5:
        return w5;
      case 6:
        return w6;
      case 7:
        return w7;
      case 8:
        return w8;

      default:
        break;
    }
  };
  return (
    <img
      className="work__photo"
      src={numberPNG(choice)}
      alt={`pipe-${choice}`}
    />
  );
};
