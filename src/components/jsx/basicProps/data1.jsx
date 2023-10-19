import DisplayData from "./receiveProps";

const Data1 = ()=> {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [6, 7, 8, 9];

  return (
    <>

    <p>From data1</p>
      <DisplayData 

      arr1={arr1}
      arr2={arr2}
      
      />
    </>
  );
}
export default Data1; 