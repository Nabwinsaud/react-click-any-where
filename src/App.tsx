import { useState } from "react";

// type Shape = {
//   x: number;
//   y: number;
// };

interface IShape {
  x: number;
  y: number;
}

function App() {
  const [points, setPoints] = useState<IShape[]>([]);
  const [redoPoint, setRedoPoints] = useState<IShape[]>([]);
  const handleDivClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // TODO: set the point
    const { clientX, clientY } = event;
    // const { pageX,pageY } = event;
    // const {screenX, screenY } =event;
    setPoints([...points, { x: clientX, y: clientY }]);

    // console.log("screen x", screenX);
  };

  // remove

  const handleUndoPoint = () => {
    // TODO: remove the previous point
    const copyPreviousPoint = [...points];
    copyPreviousPoint.pop();
    setPoints(copyPreviousPoint);
  };

  //TODO: handle

  const handleRedoPoint = () => {};

  let count = 0;

  //
  return (
    <>
      <button className="undo" onClick={handleUndoPoint}>
        undo
      </button>
      <div className="container" onClick={handleDivClick}>
        {points.map((point: IShape, pointIndex: number) => (
          // <p className="points" key={pointIndex}>
          //   {point.x} {point.y}
          // </p>
          <div
            className="point"
            key={pointIndex}
            style={{
              left: point.x + "px",
              top: point.y - 20 + "px",
              backgroundColor: point.x % 2 ? "purple" : "crimson",
            }}
          >
            {(count += 1)}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
