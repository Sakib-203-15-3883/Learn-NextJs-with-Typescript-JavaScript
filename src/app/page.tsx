import Data from "../components/jsx/basicProps/data"
import Data1 from "../components/jsx/basicProps/data1"

import DataTS from "../components/tsx/basicProps/data"

export default function Home() {
  return (

    <>

    <p>hello</p>
    {/* from JS file  */}
    <Data/>
    <Data1/>
    {/* From ts file  */}
    <DataTS/>
    </>
    
  )
}
