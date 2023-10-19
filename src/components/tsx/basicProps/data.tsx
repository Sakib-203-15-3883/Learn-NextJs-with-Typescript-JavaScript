import DisplayData from "./receiveProps";

//here , in this  Data component we have an array data and a object data . we call DisplayData component within our Data component and  pass these 2 data into DisplayData component as props . Eventually DisplayData component return something that will displayed here in this component . we call  DisplayData component that,s why we need to import that component top of the file .

const DataTS: React.FC = () => {
  const array: number[] = [1, 2, 3, 4, 5];

  interface objectType {
    name: string;
    id: number;
    age: number;
  }

  const object: objectType = {
    name: "sakib",
    id: 3883,
    age: 22,
  };

  return (
    <>
      <h1>From data</h1>
      <DisplayData array={array} object={object} />
    </>
  );
};

export default DataTS;
