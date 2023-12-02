import { Data } from "./data";

const DynamicProps = () => {

  return (
    <div>

      <div className="grid grid-cols-4   gap-y-8 gap-x-8 my-10 mx-10  ">
        {Data.map((index) => {
          return (
            <>
              <div className="bg-slate-400 grid place-content-center py-5 rounded-lg ">
                <h1 className="py-1.5"> name = {index.name} </h1>
                <h1 className="py-1.5"> id = {index.id} </h1>
                <h1 className="py-1.5"> age = {index.age} </h1>
              </div>
              
            </>
          );
        })}
      </div>
    </div>
  );
};

export default DynamicProps;
