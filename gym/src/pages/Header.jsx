import { Link } from 'react-router';
import logoMobile from '../images/LogoMobile.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import logoDesktop from '../images/LogoDesktop.png'
import { FaAngleDown } from "react-icons/fa";
export default function Header(){
    const [subCategoryToggle, setSubCategoryToggle] = useState(false);
    const [showSubCategory, setShowSubCategory] = useState(false);
    const SubcategoryRef = useRef();

    const[ulToggle, setUlToggle] =useState(false);
    const[showUl, setShowUl] = useState(false);
    const ulRef = useRef();

    const[showDesktopSubCat, setShowDesktopSubCat] = useState(false)
    const desktopSubCat = useRef();
     useEffect(() => {
    if (ulToggle) {
        setShowUl(true); // show it right away
    } else if (ulRef.current) {
        // Animate roll-up before hiding
        gsap.to(ulRef.current, {
        y: -20,
        opacity: 0,
        height: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => setShowUl(false),
        });
    }
    }, [ulToggle]);
        useEffect(() => {
    if (showUl && ulRef.current) {
        gsap.fromTo(
        ulRef.current,
        { y: -20, opacity: 0, height: 0 },
        { y: 0, opacity: 1, height: "auto", duration: 0.6, ease: "power2.out" }
        );
    }
    }, [showUl]);
    
    useEffect(() => {
    if (subCategoryToggle) {
        setShowSubCategory(true); // show it right away
    } else if (SubcategoryRef.current) {
        // Animate roll-up before hiding
        gsap.to(SubcategoryRef.current, {
        y: -20,
        opacity: 0,
        height: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => setShowSubCategory(false),
        });
    }
    }, [subCategoryToggle]);
    useEffect(() => {
    if (showSubCategory && SubcategoryRef.current) {
        gsap.fromTo(
        SubcategoryRef.current,
        { y: -20, opacity: 0, height: 0 },
        { y: 0, opacity: 1, height: "auto", duration: 0.6, ease: "power2.out" }
        );
    }
    }, [showSubCategory]);
    useEffect(()=>{
        if(showDesktopSubCat && desktopSubCat.current){
            gsap.fromTo(desktopSubCat.current,{y:20,opacity:0 },{y:0, opacity:1, duration:0.7, ease: "power2.out"})
        }
        
    },[showDesktopSubCat])
    return(
        <>
        {/* ------mobile and tablet header-------- */}
        <div
        className="
        w-full h-[4rem] bg-white flex justify-between
        lg:hidden">
            <div className='h-full px-5 py-2'>
                <img 
                src={logoMobile}
                className=' max-h-full object-contain ' alt="" />
            </div>
            <div className='h-full w-[18%] md:w-[15%] flex justify-center items-center'>
                <RxHamburgerMenu size={33} onClick={()=>{setUlToggle(prev => !prev)}}/>
            </div>
       </div>

    {showUl && 
    <ul ref={ulRef}
       className='bg-white font-vazir-XL flex flex-col p-6 md:px-12 gap-3.5 items-end text-[#7B7B7B]'>
        <div className='flex w-full justify-between items-center hover:text-gray-700'>
            <MdOutlineKeyboardArrowLeft size={17} />
            <li className="flex justify-end w-full relative after:content-[''] after:absolute after:bottom-0  after:right-0 after:w-[103%] after:h-px after:bg-gray-300 pb-2"><Link>خانه</Link></li>
        </div>
        <div className='flex w-full justify-between items-center hover:text-gray-700'>
            <MdOutlineKeyboardArrowLeft size={17}/>
            <li
            className="flex justify-end w-full relative after:content-[''] after:absolute after:bottom-0  after:right-0 after:w-[103%] after:h-px after:bg-gray-300 pb-2"
            ><Link>درباره ما</Link></li>
        </div>
        <div 
            onClick={() => setSubCategoryToggle(prev => !prev)}
            className="flex w-full justify-between items-center hover:text-gray-700 cursor-pointer"
            >
            <MdOutlineKeyboardArrowLeft size={17} />
            <li
            className="flex justify-end w-full relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[103%] after:h-px after:bg-gray-300 pb-2"
            ><Link>کلاس ها</Link></li>
        </div>
                
        {/* ✅ Only render this div when toggled */}
            {showSubCategory  && (
            <div
                ref={SubcategoryRef}
                className="w-full bg-white overflow-hidden flex flex-col items-end space-y-1"
                >
                <li className="px-5 hover:text-gray-700 flex justify-end w-full relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[96.6%] after:h-px after:bg-gray-300 pb-2">
                <Link>گروهی</Link>
                </li>
                <li className="px-5 hover:text-gray-700 flex justify-end w-full relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[96.6%] after:h-px after:bg-gray-300 pb-2">
                <Link>بدن سازی</Link>
                </li>
                <li className="px-5 hover:text-gray-700 flex justify-end w-full relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[96.6%] after:h-px after:bg-gray-300 pb-2">
                <Link>برنامه</Link>
                </li>
            </div>
             )   }
            <div className='flex w-full justify-between items-center hover:text-gray-700'>
                <MdOutlineKeyboardArrowLeft size={17}/>
                <li
                className="flex justify-end w-full relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[103%] after:h-px after:bg-gray-300 pb-2"
                ><Link>ورود</Link></li>
            </div>
            <div className='flex w-full justify-between items-center hover:text-gray-700'>
                <MdOutlineKeyboardArrowLeft size={17}/>
                <li
                className=""
                ><Link>پروفایل</Link></li>
            </div>
        
    </ul>}

   {/*  ------laptop header--------- */}
   <header
    className='
    hidden
    md:hidden
    lg:flex
    lg:w-full lg:h-[7rem] lg:z-20 absolute top-0
    justify-center lg:relative'>
    <div
        className='w-full flex justify-between items-center bg-black m-2 '>
        <div className='w-25 flex items-center'>
            <img
            className='w-full object-contain m-3 ml-12 mb-1'
            src={logoDesktop} alt="" />
        </div>
        <ul className='flex justify-evenly w-[45%] text-white text-[.95rem]'>
            <li 
            className="relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[103%] after:h-px after:bg-gray-300 pb-2"
            ><Link>خانه</Link></li>
            <li
            className="hover:relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:right-0 hover:after:w-[103%] hover:after:h-px hover:after:bg-gray-300 pb-2
            after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 "
            ><Link>درباره ما</Link></li>
            <div className='flex items-center gap-3'>
                <FaAngleDown />
                <li
                  onMouseEnter={() => setShowDesktopSubCat(true)}
                  onMouseLeave={() => setShowDesktopSubCat(false)}
                  className="hover:relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:right-0 hover:after:w-[140%] hover:after:h-px hover:after:bg-gray-300 pb-2
                  after:scale-x-0 after:origin-left after:transition-transform after:duration-300   hover:after:scale-x-100 "
                ><Link>کلاس ها</Link></li>
            </div>
            <li
              className="hover:relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:right-0 hover:after:w-[103%] hover:after:h-px hover:after:bg-gray-300 pb-2
            after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 "
            ><Link>ورود</Link></li>
            <li
              className="hover:relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:right-0 hover:after:w-[103%] hover:after:h-px hover:after:bg-gray-300 pb-2
            after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 "
            ><Link>پروفایل</Link></li>
        </ul>
    </div>
             {showDesktopSubCat && 
              <ul 
              ref={desktopSubCat}
              className='absolute top-[100%] w-[10%] z-30 right-[19%] bg-black text-white flex flex-col gap-3 p-3 items-end'>
             <li><Link>گروهی</Link></li>
             <li><Link>بدن سازی</Link></li>
             <li><Link>برنامه</Link></li>
            </ul>}
   </header>
    </>

    )
}