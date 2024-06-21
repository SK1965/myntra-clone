/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";

export default function Container({ data }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
       

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % data.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [data]);

    if (!Array.isArray(data)) {
        return <div>Error: Data is not an array</div>;
    }

    return (
        <div className="w-full h-[600px] rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {data.map((slide, index) => (
                        <div
                            key={index}
                            className="inline-block w-full h-[600px] rounded-md flex-shrink-0 items-center justify-center text-white text-2xl"
                            style={{
                                backgroundImage: `url(${slide.imglink})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                          
                            <div className= "  absolute w-1/2 bottom-24  bg-black bg-opacity-50 font-bold  text-4xl  ml-8 rounded-md ">
                                {slide.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {data.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-gray-800' : 'bg-gray-400'}`}
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
}
