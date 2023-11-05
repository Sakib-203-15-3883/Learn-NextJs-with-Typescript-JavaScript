
import { Data } from "./data";

const DynamicProps = () => {


    return (
        <div>

            {Data.map((index) => {

                return (
                    <>

                        <h1> name =  {index.name} </h1>
                        <h1> id =  {index.id} </h1>
                        <h1> age =  {index.age} </h1>

                    </>
                )

            })}




        </div>

    )
}

export default DynamicProps; 