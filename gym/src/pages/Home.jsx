import { useEffect, useRef } from 'react';
import hero1 from '../images/hero1.jpg'
import hero2 from '../images/hero2.jpg'
import hero2Mobile from '../images/hero-mobile-2.jpg'
import hero3Mobile from '../images/hero-mobile-3.jpg'
import heroText from '../images/heroText.png'
import Header from '../components/Header';
import { gsap } from "gsap";
import Environment from '../components/Environment';
export default function Home(){
    const hero1Ref = useRef();
    const hero2Ref = useRef();
    const hero2MobileRef = useRef()
    const hero3MobileRef = useRef()
    const heroTextRef = useRef();
  useEffect(() => {
        gsap.set(hero2Ref.current, { opacity: 0 }); // Start with hero1 visible

        const tl = gsap.timeline({
            repeat: -1,
            repeatDelay: 2, // gap between each loop
            defaults: {
                duration: 4,
                ease: "power4.out"
            }
        });

        tl.to(hero1Ref.current, { opacity: 0, scale: 1.05 }, 0) 
          .to(hero2Ref.current, { opacity: 1 , scale:1}, "<")   
          .to(hero1Ref.current, { opacity: 1 }, "+=4")     
          .to(hero2Ref.current, { opacity: 0 }, "<");  

        return () => tl.kill(); // Cleanup
    }, []); 
    /* mobile animation */
    useEffect(()=>{
              gsap.set(hero3MobileRef.current, { opacity: 0 }); 

        const tl = gsap.timeline({
            repeat: -1,
            repeatDelay: 2, 
            defaults: {
                duration: 4,
                ease: "power4.out"
            }
        });

        tl.to(hero2MobileRef.current, { opacity: 0, scale: 1.05 }, 0) 
          .to(hero3MobileRef.current, { opacity: 1 , scale:1}, "<")   
          .to(hero2MobileRef.current, { opacity: 1 }, "+=3")     
          .to(hero3MobileRef.current, { opacity: 0 }, "<");  
          return () => tl.kill();
    },[])
    useEffect(()=>{
      gsap.from(heroTextRef.current, {x: 80, duration:.7, ease: "Power2.in"})
    },[])
    return(
        <>
        <section className='relative w-full'>
        <div className='w-full md:aspect-[16/9] aspect-[9/16] overflow-hidden relative'>
          <div className='absolute top-0 z-20 w-full'>
            <Header/>
          </div>
          {/* Desktop & Tablet images */}
          <img 
            src={hero1}
            className='
              hidden md:block 
              md:absolute md:top-0 md:z-5
              lg:absolute lg:top-0 lg:z-5
            '
            alt=""
            ref={hero1Ref}
          />
          <img 
            src={hero2}
            className='
              hidden
               md:block md:absolute md:top-0 md:z-10
              lg:absolute lg:top-0 lg:z-10
            '
            alt=""
            ref={hero2Ref}
          />

          {/* Mobile-only image */}
          <img 
            src={hero2Mobile}
            className='
              block md:hidden 
              w-full h-full object-cover absolute top-0 z-10
            '
            alt=""
            ref={hero2MobileRef}
          />
          <img 
            src={hero3Mobile}
            className='
              block md:hidden 
              w-full h-full object-cover absolute top-0 z-10
            '
            alt=""
            ref={hero3MobileRef}
          />
          {/* slogan all sizes */}
        
        <div className='w-full h-full md:h-[46%] flex justify-center items-center relative '>
            <img
            ref={heroTextRef}
           className='
           absolute z-20 top-1/3 scale-70
           md:scale-60 md:top-[15%]
           lg:scale-63 lg:top-[50%]
           '
           src={heroText}
           alt="" />
        </div>
          
        </div>
        </section>
       <Environment />
        </>
    )
}