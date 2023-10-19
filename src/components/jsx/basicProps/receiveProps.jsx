const DisplayData = (props) => {
  const arr1 = props.arr1;
  const arr2 = props.arr2;
  const array = props.array;
  const object = props.object;

  return (
    <>
      {array && (
        <>
          <p>array value {array}</p>
        </>
      )}

      {arr2 && (
        <>
          <p>arr2 = {arr2}</p>
        </>
      )}

      {object && (
        <>
          <p>object name = {object.name}</p>
          <p>object age = {object.age}</p>
        </>
      )}

      {arr1 && (
        <>
          <p>arr1 = {arr1}</p>
        </>
      )}
    </>
  );
};

export default DisplayData;
