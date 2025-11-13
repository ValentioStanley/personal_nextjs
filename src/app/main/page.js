'use client'
import Image from "next/image";
import Link from "next/link";
import { Linkedin , MessageCircleMore , AtSign } from 'lucide-react';
// import Button from '@/components/Button/Button';

import { useEffect, useRef, useState } from "react";

// Reference: https://medium.com/@jacobvejlinjensen/how-to-create-a-smooth-appear-on-scroll-transition-with-tailwind-css-and-react-82f2a32ab295
export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting)
          
      } 
      );
      const node = ref.current;
      console.log("Observed node:", node);
      if(!node) console.warn("⚠️ Tidak ada elemen DOM untuk di-observe!");
      if(!node) return; 

      observer.observe(node);
      return () => {
        observer.disconnect();
        // observe.unobserve(ref.current);
      };
    }, [ref]);
  
    return isIntersecting;
  }


export default function Main() {
    
    // icon email
    const userEmail = 'valentio.gunadi@gmail.com';

    // contact form
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        });

        const data = await res.json();
        if (res.ok) setStatus("✅ Sent successfully!");
        else setStatus(`❌ Error: ${data.error}`);
    };

    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);

    const ref2 = useRef();
    const isVisible2 = useIsVisible(ref2);

    const ref3 = useRef();
    const isVisible3 = useIsVisible(ref3);

    const ref4 = useRef();
    const isVisible4 = useIsVisible(ref4);
    
    const ref5 = useRef();
    const isVisible5 = useIsVisible(ref5);
    
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);  

  return (
    <html lang="en">
      <head>
        <title>Valentio Stanley Gunadi</title>
        {/* <script src="https://cdn.tailwindcss.com"></script> */}
        {/* <link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css" rel="stylesheet"/> */}
      </head>
      <body className="__variable_188709 __variable_9a8899 antialiased">
    

        {/* Navigation bar */}
        <nav className="max-sm:hidden bg-white border-gray-200 dark:bg-[#3674B5]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 ">
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mx-auto " id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-50 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#3674B5] dark:bg-[#3674B5] md:dark:bg-[#3674B5] dark:border-gray-700">
                        <li>
                            <a href="#aboutme" className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#9EC6F3] md:dark:hover:text-[#9EC6F3] dark:hover:bg-gray-700 dark:hover:text-[#9EC6F3] md:dark:hover:bg-transparent" aria-current="page">About</a>
                        </li>
                        <li>
                            <a href="#skills" className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FADA7A] md:dark:hover:text-[#9EC6F3] dark:hover:bg-gray-700 dark:hover:text-[#9EC6F3] md:dark:hover:bg-transparent ">Skills</a>
                        </li>
                        <li>
                            <a href="#projects" className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#9EC6F3] md:dark:hover:text-[#9EC6F3] md:dark:hover:bg-transparent">Projects</a>
                        </li>
                        <li>
                            <a href="#contactme" className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#9EC6F3] md:dark:hover:text-[#9EC6F3] dark:hover:text-[#9EC6F3] md:dark:hover:bg-transparent ">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


        {/* Main content */}
        {/* Banner */}
        <section className={`bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply  `}>
            <div className="px-4 h-190 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className={`mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white transition-all duration-800 ease-in ${isVisible5 ? "opacity-100" : "opacity-0 -translate-y-10"}`}>Hi, Bestie!</h1>
                
                <p ref={ref5} className={`mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 dark:text-white $ transition-all duration-800 ease-in ${isVisible5 ? "opacity-100" : "opacity-0 translate-y-10"}`}>
                    You really want to know about me? Sure???</p>
                <div className={`flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 transition-all duration-800 ease-in ${isVisible5 ? "opacity-100" : "opacity-0 translate-y-10"}`}>
                    <a href="#aboutme" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Why Not??? :)
                    </a>  
                </div>
            </div>
        </section>     
        
        <article className="text-black bg-white py-10">

            {/* About Me */}
            <section id="aboutme" className="px-10 pb-10 space-y-6 max-w-8xl mx-auto">
                <h1 className="text-center text-3xl font-semibold">About me</h1>
                <div className="flex flex-col items-center bg-white  md:flex-row md:max-w-6xl mx-auto gap-5">
                    <img className="object-cover w-full h-96 md:h-auto md:w-80 transition-all ease-in-out duration-300 hover:scale-110" src="/Pasfoto.jpg" alt=""/>
                    <div>
                        <h2 className="text-5xl font-semibold">Valentio <font color="#578FCA">STANLEY</font> Gunadi, S.Kom.</h2>
                        <p className="text-xl font-semibold">IT Enthusiast | Founder of <a href="https://linktr.ee/TioTanKitchen" className="underline underline-offset decoration-[#578FCA]"><font color="#578FCA">TioTan Kitchen</font></a></p>
                        <br></br>
                        <p>Hey, it's Stanley, who have a bachelor degree in Computer Science. Specifically, sound is really nothing, but my nicely vision got it. I know this is quite unusual to knows a person with disability working in IT field, but here I am. You can see I have good skills in programming and problem-solving. I am passionate about technology and always eager to learn new things. Additionally, TioTan Kitchen is my side job to find innovation stuff by IT Collaborator, and change the future.</p>                       
                        <br></br>
                        <div className="flex flex-col  sm:justify-start sm:space-y-0 gap-3">
                            <span>Personal website is only for self-introduction as your POV? Click below for more professional!</span>
                            <div>
                                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9EC6F3] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#3674B5] dark:hover:bg-[#9EC6F3] hover:text-[#3674B5] dark:hover:text-[#3674B5]"><a href="/documents/New CV ATS - Valentio Stanley Gunadi.pdf" download="New CV ATS - Valentio Stanley Gunadi.pdf">Curriculum Vitae </a></button>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-[#9EC6F3] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#3674B5] dark:hover:bg-[#9EC6F3] hover:text-[#3674B5] dark:hover:text-[#3674B5] focus:outline-none">
                                <a href="https://www.linkedin.com/in/valentiostanley" >Linkedin</a>    
                                </button>
                                                       
                            </div> 
                         
                        </div>
      
                    </div>            
                </div>
                {/* grid grid-cols-1 gap-6 sm:grid-cols-2 */}
                <div className="flex max-sm:flex-col  md:justify-between md:flex-row md:max-w-6xl mx-auto ">
                    <div >
                        <h3 className=" text-xl font-semibold">Experiences</h3>  <br></br>
                        <h3 className="font-semibold">PT BANK BCA DIGITAL</h3>
                        IT Enterprise Applications Intern | February 2024 - February 2025 <br></br>
                        <br></br>
                        <h3 className="font-semibold">TIOTAN KITCHEN</h3>
                        FoodPreneur & Founder | October 2025 - Present                        
                    </div>
                    <hr className="max-sm:h-px max-sm:my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>
                    <div className="md:w-px md:h-60 md:bg-gray-300 md:mx-4 item-center"></div>
                    <div >
                        <h3 className="text-xl font-semibold">Organizations</h3>  <br></br>
                        <h3 className="font-semibold">Himpunan Mahasiswa Teknik Informatika (HIMTI) </h3>
                        Website Development Division | March 2023 - January 2024 <br></br>
                        <br></br>
                        <h3 className="font-semibold">Binus Game Development Club (BGDC)</h3> 
                        Media and Creative Division | March 2023 - January 2024 <br></br>
                         <br></br>   
                        <h3 className="font-semibold">Binus Student Learning Community (BSLC) </h3> 
                        IT Development Division | March 2023 - January 2024
                    </div>
                </div>
            </section>


            {/* Skills */}
            <section id="skills" className="bg-[#9EC6F3] px-10 pt-10">
                <h1 className="text-center text-3xl text-black font-semibold">Skills</h1>
                <div className="flex items-center justify-center ">
                    <div className="bg-white rounded-lg shadow-sm dark:bg-[#3674B5]  w-7xl mt-10 mb-10">
                        <div className="sm:hidden">
                            <label htmlFor="tabs" className="sr-only">Select tab</label>
                            <select id="tabs" className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>Programming</option>
                                <option>Front-End</option>
                                <option>Back-End</option>
                                <option>Data</option>
                                <option>Art</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <ul className="hidden text-sm font-medium text-center text-white divide-x divide-[#578FCA] rounded-lg sm:flex dark:divide-[#578FCA] dark:text-white rtl:divide-x-reverse" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                            <li className="w-full">
                                <button id="programming-tab" data-tabs-target="#programming" type="button" role="tab" aria-controls="programming" aria-selected="true" className="inline-block w-full p-4 rounded-ss-lg text-white dark:text-white focus:outline-none dark:bg-[#3674B5] dark:hover:bg-[#578FCA]">Programming</button>
                            </li>
                            <li className="w-full">
                                <button id="frontend-tab" data-tabs-target="#frontend" type="button" role="tab" aria-controls="frontend" aria-selected="false" className="inline-block w-full text-white dark:text-white p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-[#3674B5] dark:hover:bg-[#578FCA]">Front-End</button>
                            </li>
                            <li className="w-full">
                                <button id="backend-tab" data-tabs-target="#backend" type="button" role="tab" aria-controls="backend" aria-selected="false" className="inline-block w-full text-white dark:text-white p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-[#3674B5] dark:hover:bg-[#578FCA]">Back-End</button>
                            </li>
                            <li className="w-full">
                                <button id="data-tab" data-tabs-target="#data" type="button" role="tab" aria-controls="data" aria-selected="false" className="inline-block w-full text-white dark:text-white p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-[#3674B5] dark:hover:bg-[#578FCA]">Data</button>
                            </li>
                            <li className="w-full">
                                <button id="art-tab" data-tabs-target="#art" type="button" role="tab" aria-controls="art" aria-selected="false" className="inline-block w-full text-white dark:text-white p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-[#3674B5] dark:hover:bg-[#578FCA]">Art</button>
                            </li>
                            <li className="w-full">
                                <button id="others-tab" data-tabs-target="#others" type="button" role="tab" aria-controls="others" aria-selected="false" className="inline-block w-full text-white dark:text-white p-4 rounded-se-lg bg-gray-50 hover:bg-grey-100 focus:outline-none dark:bg-[#3674B5] dark:hover:bg-[#578FCA]">Others</button>
                            </li>                                                                                    
                        </ul>
                        <div id="fullWidthTabContent" className="border-gray-200 dark:border-gray-600">
                            <div className="hidden p-4 bg-white rounded-b-lg  dark:bg-[#578FCA] gap-5 flex md:flex-row flex-wrap" id="programming" role="tabpanel" aria-labelledby="programming-tab">
                                <img width="64" height="32" src="https://img.icons8.com/fluency/48/python.png" alt="python"/>
                                <img width="64" height="32" src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup"/>
                                <img width="64" height="32" src="https://img.icons8.com/?size=100&id=IrYuykLoqOH6&format=png&color=00ADD8" alt="golang"/>
                                <img width="64" height="32" src="https://img.icons8.com/?size=100&id=108784&format=png&color=FFD600" alt="Javascript"/>
                                <img width="64" height="32" src="https://img.icons8.com/?size=100&id=40670&format=png&color=283593" alt="C"/>
                                <img width="64" height="32" src="https://img.icons8.com/?size=100&id=CLvQeiwFpit4&format=png&color=BEC1C4" alt="R"/>                                                                                                                        
                            </div>
                            <div className="hidden p-4 bg-white rounded-b-lg dark:bg-[#578FCA]" id="frontend" role="tabpanel" aria-labelledby="frontend-tab">
                                <img width="64" height="32" src="https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000" alt="nextjs"/>
                            </div>
                            <div className="hidden p-4 bg-white rounded-b-lg  dark:bg-[#578FCA] gap-5 flex md:flex-row flex-wrap" id="backend" role="tabpanel" aria-labelledby="backend-tab">
                                <img width="64" height="32" src="https://img.icons8.com/?size=100&id=IrYuykLoqOH6&format=png&color=00ADD8" alt="golang"/>
                                <img width="64" height="32" src="laravel-logo.png" alt="laravel"/>                                
                                <img width="64" height="32" src="https://img.icons8.com/?size=100&id=Rffi8qeb2fK5&format=png&color=C62828" alt="streamlit"/>
                                <img width="64" height="32" src="https://img.icons8.com/?size=100&id=AqYCfGyGXlO7&format=png&color=000000" alt="flask"/>
                                                                                       
                            </div>
                            <div className="hidden p-4 bg-white rounded-b-lg dark:bg-[#578FCA] gap-5 flex md:flex-row flex-wrap" id="data" role="tabpanel" aria-labelledby="data-tab">
                                <img width="64" height="32" src="https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=00758F" alt="MySQL"/>
                                <img width="64" height="32" src="https://img.icons8.com/?size=100&id=JRnxU7ZWP4mi&format=png&color=32648D" alt="PostgreSQL"/>
                                <img width="64" height="32" src="https://img.icons8.com/?size=100&id=5jXFyrgGm3lW&format=png&color=000000" alt="ElasticSearch"/>
                                <img width="64" height="32" src="https://img.icons8.com/?size=100&id=UECmBSgBOvPT&format=png&color=000000" alt="Excel"/>                                                                               
                            </div>
                            <div className="hidden p-4 bg-white rounded-b-lg dark:bg-[#578FCA] gap-5 flex md:flex-row " id="art" role="tabpanel" aria-labelledby="art-tab">
                                <img width="64" height="32" src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000" alt="Figma"/>
                                <img width="64" height="32" src="https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000" alt="Canva"/>
                            </div>
                            <div className="hidden p-4 bg-white rounded-b-lg dark:bg-[#578FCA] gap-5 flex md:flex-row flex-wrap" id="others" role="tabpanel" aria-labelledby="others-tab">
                                <img width="64" height="32" src="https://img.icons8.com/?size=100&id=20876&format=png&color=000000" alt="Pastry"/>
                                <img width="64" height="32" src="https://img.icons8.com/?size=100&id=65189&format=png&color=000000" alt="Business"/>
                                <img width="64" height="32" src="https://img.icons8.com/?size=100&id=UECmBSgBOvPT&format=png&color=000000" alt="Excel"/>
                                <img width="64" height="32" src="https://img.icons8.com/?size=100&id=L39VDzbX1XdR&format=png&color=000000" alt="Content Creator"/>

                            </div>                                                                                 
                        </div>
                    </div>
                </div>
                          
            </section>

            {/* Projects */}
            <section id="projects" className="bg-[#9EC6F3] px-10 pt-10">
                <h1 className="text-center text-3xl text-black font-semibold">Project</h1>
                <div className="flex items-center justify-center ">
                    <div className="bg-white rounded-lg shadow-sm dark:bg-[#3674B5]  w-7xl mt-10 mb-10">
                        <div className="sm:hidden">
                            <label htmlFor="tabs" className="sr-only">Select tab</label>
                            <select id="tabs" className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option>Tech</option>
                                <option>Art</option>
                                <option>F&B</option>
                            </select>
                        </div>
                        <ul className="hidden text-sm font-medium text-center text-white divide-x divide-[#578FCA] rounded-lg sm:flex dark:divide-[#578FCA] dark:text-white rtl:divide-x-reverse" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                            <li className="w-full">
                                <button id="tech-tab" data-tabs-target="#tech" type="button" role="tab" aria-controls="tech" aria-selected="true" className="inline-block w-full p-4 rounded-ss-lg text-white dark:text-white focus:outline-none dark:bg-[#3674B5] dark:hover:bg-[#578FCA]">Tech</button>
                            </li>
                            <li className="w-full">
                                <button id="art-project-tab" data-tabs-target="#art-project" type="button" role="tab" aria-controls="art-project" aria-selected="false" className="inline-block w-full text-white dark:text-white p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-[#3674B5] dark:hover:bg-[#578FCA]">Art</button>
                            </li>
                            <li className="w-full">
                                <button id="fnb-tab" data-tabs-target="#fnb" type="button" role="tab" aria-controls="fnb" aria-selected="false" className="inline-block w-full text-white dark:text-white p-4 rounded-se-lg bg-gray-50 hover:bg-grey-100 focus:outline-none dark:bg-[#3674B5] dark:hover:bg-[#578FCA]">F&B</button>
                            </li>                                                                                  
                        </ul>
                        <div id="fullWidthTabContent" className="border-gray-200 dark:border-gray-600">
                            <div className="hidden p-4 bg-white rounded-b-lg md:p-8 dark:bg-[#578FCA] gap-5 flex md:flex-row flex-wrap" id="tech" role="tabpanel" aria-labelledby="programming-tab">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div>
                                        <a href="documents/Thesis PPT FIX - Stanley.pdf" download="Thesis PPT FIX - Stanley.pdf">
                                            <img className="h-auto max-w-full rounded-lg" src="images/techs/EmotRec-Web.png" alt="flask"/>
                                            <h3 className="font-semibold text-center text-white mt-3">Emotion Recognition Web App - Flask</h3>                                        
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/ValentioStanley/final-project-bncc-be.git">
                                            <img className="h-auto max-w-full rounded-lg" src="images/techs/Item-Data-Web.png" alt="laravel"/>
                                            <h3 className="font-semibold text-center text-white mt-3">Item Data Web App - Laravel</h3>                                        
                                        </a>
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src="images/techs/MLEngineer-Web.jpg" alt="ml"/>
                                        <h3 className="font-semibold text-center text-white mt-3">Machine Learning Engineer</h3>
                                    </div>                                
                                </div>                                                                                                                        
                            </div>
                            <div className="hidden p-4 bg-white rounded-b-lg  md:p-8 dark:bg-[#578FCA]" id="art-project" role="tabpanel" aria-labelledby="art-project-tab">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div>
                                        <a href="documents/User Interface Portfolio IN.pdf" download="User Interface Portfolio IN.pdf">
                                        <img className="h-auto max-w-full rounded-lg" src="images/designs/User Interface Portfolio Cover.jpg" alt="User Interface"/>
                                        <h3 className="font-semibold text-center text-white mt-3">User Interface</h3>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="documents/Layout Art Portfolio IN.pdf" download="Layout Art Portfolio IN.pdf">
                                        <img className="h-auto max-w-full rounded-lg" src="images/designs/Layout Art Portfolio Cover.jpg" alt="Layout Art"/>
                                        <h3 className="font-semibold text-center text-white mt-3">Layout Art</h3>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="documents/Pixel Art Portfolio IN.pdf" download="Pixel Art Portfolio IN.pdf">
                                        <img className="h-auto max-w-full rounded-lg" src="images/designs/Pixel Art Portfolio Cover.jpg" alt="Pixel Art"/>
                                        <h3 className="font-semibold text-center text-white mt-3">Pixel Art</h3>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="documents/Photography Portfolio IN.pdf" download="Photography Portfolio IN.pdf">
                                        <img className="h-auto max-w-full rounded-lg" src="images/designs/Photography Portfolio Cover.jpg" alt="Photography"/>
                                        <h3 className="font-semibold text-center text-white mt-3">Photography</h3>
                                        </a>
                                    </div>

                                </div>

                            </div>
                            <div className="hidden p-4 bg-white rounded-b-lg md:p-8  dark:bg-[#578FCA] gap-5 flex md:flex-row flex-wrap" id="fnb" role="tabpanel" aria-labelledby="fnb-tab">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src="images/fnbs/Banoffee-Choco.jpg" alt="Dessert"/>
                                        <h3 className="font-semibold text-center text-white mt-3">Dessert</h3>
                                    </div>
                                    <div>
                                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="Catering"/>
                                        <h3 className="font-semibold text-center text-white mt-3">Catering</h3>
                                    </div>
                                </div>           
                            </div>                                                                             
                        </div>
                    </div>
                </div>
                          
            </section>

            {/* Contact Me */}
            {/* grid gap-3 md:grid-cols-2 */}
            <section id="contactme" className="">
                <div className="flex max-sm:flex-col w-full max-w-4xl p-4 border border-gray-200 shadow-sm rounded-lg sm:p-6 md:p-8 md:mt-10 gap-10 mx-auto">
                    <div className="">
                        <div className="flex items-start gap-2.5 mx-auto">
                            <img className="w-14 h-14 rounded-full" src="pp-message.jpg" alt="Jese image"/>
                            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-[#578FCA]">
                                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                    <span className="text-sm font-semibold text-gray-900 dark:text-white">V.Stanley</span>
                                    <span className="text-sm font-normal text-gray-500 dark:text-white">{currentTime.toLocaleTimeString()}</span>
                                    <time id="current-time"></time>
                                </div>
                                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">Oh, are you interested in my background? Just leave a message here, okay?</p>
                            </div>
                        </div>
                        <h1 className="text-center text-3xl font-semibold mt-5">Other Message</h1>
                        <div className="flex flex-row justify-center gap-5 mt-3 mb-5">
                            <a href="https://www.linkedin.com/in/valentiostanley/" className="hover:scale-110 transition-transform duration-300">
                                <Linkedin size={36} color="#0077B5" strokeWidth="2"/>
                            </a>
                            <a href="" className="hover:scale-110 transition-transform duration-300">
                                <MessageCircleMore size={36} color="#25D366" strokeWidth="2" Link="https://wa.me/6285198642990"/>
                            </a>
                            <div className="hover:scale-110 transition-transform duration-300">
                                <Link href={`mailto:${userEmail}?subject=question&body=Hello%20Stanley,%20I%20would%20like%20to%20get%20in%20touch%20with%20you.`}>
                                    <AtSign size={36} color="#da0101ff" strokeWidth="2"  />
                                </Link>
                            </div>                                                          
                        </div>

                    </div>

                    <form onSubmit={handleSubmit} className="md:min-w-sm">
                        <h3 className=" text-xl font-semibold">Message</h3>
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                            <input 
                            type="text" 
                            id="name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Valentio Stanley..." required/>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                            <input 
                            type="email" 
                            id="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}            
                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="valstan@email.com" required />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                            <textarea 
                            id="message" 
                            rows="4" 
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}                            
                            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Leave a comment..." required></textarea>
                        </div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-[#9EC6F3] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#578FCA] dark:hover:bg-[#9EC6F3] hover:text-gray-700 dark:hover:text-gray-700">Send Message</button>
                        <p className="text-sm text-gray-500">{status}</p>
                    </form>
                </div>

            </section>

        </article>

        <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>

        {/* Footer */}
        <footer className="dark:bg-[#3674B5] text-[#9EC6F3] py-8 ">
            <div className="max-w-6xl mx-auto text-center">
            <p>© 2025 Valentio Stanley Gunadi. Developed with Next.js & Tailwind CSS.</p>
            </div>
        </footer>        
      </body>
    </html>

  );
}