'use client'
import Image from "next/image";
import Link from "next/link";
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

  function CurrentTimeDisplay() {

    
}

export default function Main() {
    for (let i = 0; i < 10; i++) {
        // console.log("Hello, world!");

    }
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
      <body className="__variable_5cfdac __variable_9a8899 antialiased">
    

        {/* Navigation bar */}
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 ">
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mx-auto " id="navbar-cta">
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-50 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">About</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Skills</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


        {/* Main content */}
        <section className={`bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply  `}>
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className={`mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white transition-all duration-800 ease-in ${isVisible5 ? "opacity-100" : "opacity-0 -translate-y-10"}`}>Hi, Bestie!</h1>
                
                <p ref={ref5} className={`mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 dark:text-white $ transition-all duration-800 ease-in ${isVisible5 ? "opacity-100" : "opacity-0 translate-y-10"}`}>
                    You really want to know about me? Sure???</p>
                <div className={`flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 transition-all duration-800 ease-in ${isVisible5 ? "opacity-100" : "opacity-0 translate-y-10"}`}>
                    <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Why Not??? :)
                    </a>  
                </div>
            </div>
        </section>     
        
        <article className="bg-white text-black p-10">

            {/* About Me */}
            <div className=" space-y-6 max-w-8xl mx-auto my-10 ">
                <h1 className="text-center text-3xl font-semibold">About me</h1>
                <div className="flex flex-col items-center bg-white shadow-sm md:flex-row md:max-w-6xl mx-auto gap-5">
                    <img class="object-cover w-full h-96 md:h-auto md:w-80 " src="/Pasfoto.jpg" alt=""/>
                    <div>
                        <h2 className="text-5xl font-semibold">Valentio <font color="#65A5FF">STANLEY</font> Gunadi, S.Kom.</h2>
                        <p className="text-xl font-semibold">IT Enthusiast | Founder of <a href="linktr.ee/TioTanKitchen" className="underline underline-offset-"><font color="#65A5FF">TioTan Kitchen</font></a></p>
                        <br></br>
                        <p>Hey, it's Stanley, who have bachelor's degree in Computer Science. Technically, sound is really nothing, but my nicely vision got it. I know this is quite unusual to knows a person with disability working in IT field, but here I am. You can see I have good skills in programming and problem-solving. I am passionate about technology and always eager to learn new things. Additionally, TioTan Kitchen is my side job to find innovation stuff by IT Collaborator, and change the future.</p>                       
                    </div>            
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:flex-row md:max-w-6xl mx-auto ">
                    <div>
                        <h3 className=" text-xl font-semibold">Experience</h3>  <br></br>
                        <h3 className="font-semibold">PT BANK BCA DIGITAL</h3>
                        IT Enterprise Applications Intern | February 2024 - February 2025
                    </div>
                    <div >
                        <h3 className="text-xl font-semibold">Organization</h3>  <br></br>
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


            </div>



            {/* Skills */}
            <section class="bg-white">
                <h1 className="text-center text-3xl font-semibold">Skills</h1>
                <nav class="">
                    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 ">
                        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mx-auto " id="navbar-cta">
                            <ul class="flex flex-col font-medium p-3 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-50 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                                <li>
                                    <a href="#" class="block py-2 px-4 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700" aria-current="page">Programming</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700" aria-current="page">Front-End</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700" aria-current="page">Back-End</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700" aria-current="page">Data</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700" aria-current="page">Art</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700" aria-current="page">Others</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>                
            </section>
            

            {/* Projects */}
            <section class="bg-white">
                <h1 className="text-center text-3xl font-semibold">Projects</h1>
                <nav class="">
                    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 ">
                        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mx-auto " id="navbar-cta">
                            <ul class="flex flex-col font-medium p-3 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-50 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                                <li>
                                    <a href="#" class="block py-2 px-4 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700" aria-current="page">Tech</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700" aria-current="page">Art</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700" aria-current="page">F&B</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>                
            </section>

            {/* Contact Me */}
            <div class="grid gap-3 md:grid-cols-2 w-full max-w-6xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8  mx-auto">
                <div className=" mx-auto">
                    <div class="flex items-start gap-2.5 mx-auto">
                        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image"/>
                        <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                            <div class="flex items-center space-x-2 rtl:space-x-reverse">
                                <span class="text-sm font-semibold text-gray-900 dark:text-white">V.Stanley</span>
                                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">{currentTime.toLocaleTimeString()}</span>
                                <time id="current-time"></time>
                            </div>
                            <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">Oh, are you interested in me? Just leave a message here, okay?</p>
                        </div>
                    </div>
                    <h1 className="text-center text-3xl font-semibold mt-5">Other Message</h1>
                    
                </div>

                <form class="w-100 mx-auto">
                    <h3 className=" text-xl font-semibold">Message</h3>
                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="text" id="name" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Flowbite" required />
                    </div>

                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                    </div>

                    <div class="mb-5">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea id="message" rows="4" class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Message</button>
                </form>
            </div>



        </article>



        <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js">

        </script>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-8 px-4">
            <div className="max-w-6xl mx-auto text-center">
            <p>© 2025 Your Name. Built with Next.js and Tailwind CSS.</p>
            </div>
        </footer>        
      </body>
    </html>

  );
}