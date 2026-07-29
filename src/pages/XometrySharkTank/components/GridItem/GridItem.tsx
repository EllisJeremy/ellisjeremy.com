import styles from "./GridItem.module.css";
import XometryX from "../../assets/XometryX.svg";

type ButtonProps = {
  title: string;
  description: string;
};

export default function GridItem({ title, description }: ButtonProps) {
  return (
    <div className={styles.gridItemDiv}>
      <div className={styles.gridImgDiv}>
        <img src={XometryX}></img>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
