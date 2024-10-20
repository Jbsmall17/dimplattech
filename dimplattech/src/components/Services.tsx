import React from "react"
import Service from "./Service"
import image1 from "../assests/why-image-1.png"
import image2 from "../assests/why-image-2.png"
import image3 from "../assests/why-image-3.png"

export default function Services(){
    return (
        <section className="px-[5%] my-10 sm:my-12 lg:my-16 xl:my-20">
            <p className="text-center text-base text-[#777A79] mb-2 sm:mb-4">Why Dimplattech?</p>
            <p className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-center text-[#4d4d4d]">We are Customer Centric </p>
            <p className="text-center text-base text-[#777A79] mb-2 sm:mb-4">
                we give our students an all round experience <br />
                by providing extra value to ensure you excel in <br /> 
                your chosen course..
            </p>
            <div className="flex flex-wrap gap-[3vw] sm:gap-[4.5vw] sm:justify-center xl:justify-start xl:gap-[2.75%]">
                <Service 
                    image={image1}
                >
                    <p className="text-xl sm:text-2xl font-semibold text-[#219dd0] mb-3 h-[56px] sm:h-[64px]">In-depth Training<br /> and Mentorship</p>
                    <p className="text-base text-[#4d4d4d]">
                        With experienced designers who<br /> 
                        will not only teach you<br /> 
                        practically, but would also<br /> 
                        mentor you through.
                    </p>
                </Service>
                <Service
                    image={image2} 
                >
                    <p className="text-xl sm:text-2xl font-semibold text-[#219dd0] mb-3 h-[56px] sm:h-[64px]">Great  Learning<br /> Environment</p>
                    <p className="text-base text-[#4d4d4d]">
                        We provide you with the best learning<br /> facility you can lay your eyes on. All our<br /> 
                        classes are conducive, en-suite and<br /> equipped with high-speed internet and<br /> the latest technologies for learning.
                    </p>
                </Service>
                <Service
                    image={image3}
                >
                    <p className="text-xl sm:text-2xl font-semibold text-[#219dd0] mb-3 h-[56px] sm:h-[64px]">Internship Placements</p>
                    <p className="text-base text-[#4d4d4d]">
                        At the end of the training you<br />
                        would be placed into an internship<br />
                        program where you get to use your<br />
                        design skills in a product team
                    </p>
                </Service>
            </div>
        </section>
    )
}