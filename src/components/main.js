import React, { useState,useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function Main() {
    const [text,setText] = useState("Developer");
    const currentText = "Developer";
    useEffect(() => {
    //   for(var i=0;i<currentText.length;i++){
    //     setTimeout(()=>{
    //         setText([...text,currentText[i]]);
    //     },500)
    //   }
    }, [])
    
    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" >
                <h1>Ahmed ElBltagy</h1>
                <p>I'm <TypeAnimation
                        sequence={[1500, "Developer",1500, "Software",1500, "Machine learning",1500]}
                        wrapper="span"
                        repeat={Infinity} 
                        speed={30}
                    />
                </p>
            </div>
        </section>
    )
}
