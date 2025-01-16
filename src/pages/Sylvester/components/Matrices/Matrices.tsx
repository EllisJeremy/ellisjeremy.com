import { CreateMatrixA, CreateMatrixB, CreateMatrixC, CreateMatrixX } from "./MatrixCreator/MatrixCreator.tsx";
import { inputsStore } from "../../store";
import styles from "./Matrices.module.css";

export default function Matrices() {
  const { n, m } = inputsStore();

  return (
    <>
      <div className={styles.fullMatrixDiv}>
        {/* Matrix A */}
        <div className={styles.matrixDiv}>
          <div className={styles.matrixFlexDiv}>
            <div className={styles.variableDiv}>A =</div>
            <div className={styles.dynamicMatrixDiv}>
              {/* Dynamic part */}
              <CreateMatrixA n={n} />
            </div>
          </div>
        </div>

        {/* Matrix B */}
        <div className={styles.matrixDiv}>
          <div className={styles.matrixFlexDiv}>
            <div className={styles.variableDiv}>B =</div>
            <div className={styles.dynamicMatrixDiv}>
              {/* Dynamic part */}
              <CreateMatrixB m={m} />
            </div>
          </div>
        </div>

        {/* Matrix C */}
        <div className={styles.matrixDiv}>
          <div className={styles.matrixFlexDiv}>
            <div className={styles.variableDiv}>C =</div>
            <div className={styles.dynamicMatrixDiv}>
              {/* Dynamic part */}
              <CreateMatrixC n={n} m={m} />
            </div>
          </div>
        </div>

        {/* Matrix X */}
        <div className={styles.matrixDiv}>
          <div className={styles.matrixFlexDiv}>
            <div className={styles.variableDiv}>X =</div>
            <div className={styles.dynamicMatrixDiv}>
              {/* Dynamic part */}
              <CreateMatrixX n={n} m={m} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
