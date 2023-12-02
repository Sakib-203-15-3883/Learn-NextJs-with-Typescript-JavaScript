"use client";
import Image from "next/image"
import { useState } from 'react'
import Image1 from "../../../public/image1.jpg"
import Image2 from "../../../public/image2.jpg"
import Image3 from "../../../public/image3.jpg"
import Image4 from "../../../public/image4.jpg"
const ImageSlider = () => {

    const images = [Image1, Image2, Image3, Image4];

    let [initialImageIndex, setInitialImageIndex] = useState(0);

    const handleLeft =()=>{
        if(initialImageIndex <= 0){
            setInitialImageIndex(images.length-1);
        }else{
            initialImageIndex--;
            setInitialImageIndex(initialImageIndex)
        }
    }

    const handleRight =()=>{
        if(initialImageIndex >= images.length-1){
            setInitialImageIndex(0);
        }else{
            initialImageIndex++;
            setInitialImageIndex(initialImageIndex)
        }
    }





    return (
        <div>
            <h1 style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: 700,
                backgroundColor: "navajowhite",
                width: "25%",
                height: 70,
                marginLeft: "35%",
                marginBottom: 60,
                marginTop: 40,

            }}> Image Slider </h1>



            <div>


                <h1 style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize:60,
                    fontWeight:700,


                    

                }}><button onClick={handleLeft}>Left</button></h1>

                <Image



                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",

                        marginLeft: "35%",
                        marginBottom: 60,
                        marginTop: 40,

                    }}

                    src={images[initialImageIndex]}
                    width={200}
                    height={200}

                />

                <h1 style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize:60,
                    fontWeight:700,

                    

                }}><button onClick={handleRight}>Right</button></h1>
            </div>


        </div>
    )
}

export default ImageSlider;