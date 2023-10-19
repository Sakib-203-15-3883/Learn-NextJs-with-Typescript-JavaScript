interface DisplayDataProps {
  array: number[];

  object: {
    name: string;
    id: number;
    age: number;
  };
}

const DisplayData: React.FC<DisplayDataProps> = (props) => {
  const array = props.array;
  const object = props.object;

  return (
    <>
      {array && (
        <>
          <p>array value {array}</p>
        </>
      )}

      {object && (
        <>
          <p>object name = {object.name}</p>
          <p>object age = {object.age}</p>
        </>
      )}
    </>
  );
};

export default DisplayData;
