import { matricesStore } from "../../../store";
import styles from "./MatrixCreator.module.css";

export function CreateMatrixA({ n = 2 }: { n?: number }) {
  if (n > 9) {
    n = 9;
  }

  const { matrixA, setMatrixA } = matricesStore();

  const handleCellChangeA = (rowIndex: number, colIndex: number, value: number) => {
    if (matrixA[rowIndex] === undefined) {
      matrixA[rowIndex] = [];
    }
    const updatedMatrix: number[][] = matrixA;
    updatedMatrix[rowIndex][colIndex] = value;

    setMatrixA(updatedMatrix);
  };

  return (
    <>
      {Array.from({ length: n }, (_, indexN) => (
        <div key={indexN} className={styles.matrixRowDiv}>
          {Array.from({ length: n }, (_, indexM) => (
            <div key={indexM} className={styles.matrixCellDiv}>
              <input
                className={styles.matrixCellInput}
                type="number"
                value={matrixA[indexN]?.[indexM]}
                onChange={(e) => {
                  handleCellChangeA(indexN, indexM, parseFloat(e.target.value));
                  console.log("Key pressed in cell", indexN, indexM, e.target.value);
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export function CreateMatrixB({ m = 2 }: { m?: number }) {
  if (m > 9) {
    m = 9;
  }

  const { matrixB, setMatrixB } = matricesStore();

  const handleCellChangeB = (rowIndex: number, colIndex: number, value: number) => {
    if (matrixB[rowIndex] === undefined) {
      matrixB[rowIndex] = [];
    }
    const updatedMatrix: number[][] = matrixB;
    updatedMatrix[rowIndex][colIndex] = value;

    setMatrixB(updatedMatrix);
  };

  return (
    <>
      {Array.from({ length: m }, (_, indexN) => (
        <div key={indexN} className={styles.matrixRowDiv}>
          {Array.from({ length: m }, (_, indexM) => (
            <div key={indexM} className={styles.matrixCellDiv}>
              <input
                className={styles.matrixCellInput}
                type="number"
                value={matrixB[indexN]?.[indexM]}
                onChange={(e) => {
                  handleCellChangeB(indexN, indexM, parseFloat(e.target.value));
                  console.log("Key pressed in cell", indexN, indexM, e.target.value);
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export function CreateMatrixC({ n = 2, m = 2 }: { n?: number; m?: number }) {
  if (n > 9) {
    n = 9;
  }
  if (m > 9) {
    m = 9;
  }

  const { matrixC, setMatrixC } = matricesStore();

  const handleCellChangeC = (rowIndex: number, colIndex: number, value: number) => {
    if (matrixC[rowIndex] === undefined) {
      matrixC[rowIndex] = [];
    }
    const updatedMatrix: number[][] = matrixC;
    updatedMatrix[rowIndex][colIndex] = value;

    setMatrixC(updatedMatrix);
  };

  return (
    <>
      {Array.from({ length: n }, (_, indexN) => (
        <div key={indexN} className={styles.matrixRowDiv}>
          {Array.from({ length: m }, (_, indexM) => (
            <div key={indexM} className={styles.matrixCellDiv}>
              <input
                className={styles.matrixCellInput}
                type="number"
                value={matrixC[indexN]?.[indexM]}
                onChange={(e) => {
                  handleCellChangeC(indexN, indexM, parseFloat(e.target.value));
                  console.log("Key pressed in cell", indexN, indexM, e.target.value);
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export function CreateMatrixX({ n = 2, m = 2 }: { n?: number; m?: number }) {
  if (n > 9) {
    n = 9;
  }
  if (m > 9) {
    m = 9;
  }

  const { matrixX } = matricesStore();

  return (
    <>
      {Array.from({ length: n }, (_, indexN) => (
        <div key={indexN} className={styles.matrixRowDiv}>
          {Array.from({ length: m }, (_, indexM) => (
            <div key={indexM} className={styles.matrixCellDiv}>
              <input className={styles.matrixCellOutput} value={matrixX[indexN][indexM]} readOnly />
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
