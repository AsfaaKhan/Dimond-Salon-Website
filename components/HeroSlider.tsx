
import * as React from "react"
import Image from "next/image";
// import Link from "next/link";
// import { Inter } from "next/font/google"

// const Font = Inter({
//     subsets: ['latin'],
//     weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
// })


export default function HeroSlider() {
    return (
        //     <div>
        //             {/* Slider  */}
        //             <div classNameName="lg:col-span-3 px-0">
        //                 <div classNameName="bg-black mt-28 lg:h-[344px] ">

        //                     {/* Carousel  */}
        //                     <div id="demo" classNameName="carousel slide" data-bs-ride="carousel">

        //                         {/* Indicators/dots  */}
        //                         <div classNameName="carousel-indicators">
        //                             <button type="button" data-bs-target="#demo" data-bs-slide-to="0" classNameName="active"></button>
        //                             <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        //                             <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        //                             <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
        //                             <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
        //                         </div>

        //                         {/* The slideshow/carousel  */}
        //                         <div classNameName="carousel-inner">
        //                             <div classNameName="carousel-item active">
        //                                 <div classNameName="d-flex  justify-content-center align-items-center ">

        //                                     <Image
        //                                         src={"/images/4.jpg"}
        //                                         classNameName=" bg-cover bg-center"
        //                                         alt="iPhone 14 Series"
        //                                         width={500}
        //                                         height={500}
        //                                         style={{ objectFit: "fill" }}

        //                                     />
        //                                     <div
        //                                         classNameName="carousel-caption text-start position-absolute flex flex-col justify-content-center top-32 sm:top-48 start-10 translate-middle-y"
        //                                         style={{ color: "#fff" }}
        //                                     >
        //                                         {/* <div classNameName="d-flex align-items-center gap-6   ">
        //                                             <h6 classNameName="flex justify-center text-base text-center items-center text-dullWhite font-normal ">iPhone 14 Series</h6>
        //                                         </div> */}

        //                                         <p classNameName={`text-3xl md:text-5xl md:leading-[60px] text-dullWhite font-semibold  ${Font.classNameName}`} style={{ letterSpacing: "4%" }}>Up to 10% <br />off Voucher</p>
        //                                         <Link
        //                                             href="/"
        //                                             classNameName="text-dullWhite  mt-2 fw-semibold  text-decoration-none w-fit border-b-[1px] border-b-white hover:text-red"
        //                                         >
        //                                             Shop Now →
        //                                         </Link>
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                             <div classNameName="carousel-item 
        //                                 ">
        //                                 <div classNameName="d-flex  justify-content-end align-items-end position-relative">

        //                                     <Image
        //                                         src={"/images/3.jpg"}
        //                                         classNameName=" flex justify-end items-end "
        //                                         alt="iPhone 14 Series"
        //                                         width={496}
        //                                         height={352}
        //                                         style={{ objectFit: "fill" }}

        //                                     />
        //                                     <div
        //                                         classNameName="carousel-caption text-start position-absolute flex flex-col justify-content-center top-32 sm:top-48 start-10 translate-middle-y"
        //                                         style={{ color: "#fff" }}
        //                                     >
        //                                         <div classNameName="d-flex align-items-center gap-6   ">
        //                                             {/* <Image src={"/images/1.jpg"}
        //                                                 alt="mobile"
        //                                                 width={40}
        //                                                 height={40}>
        //                                             </Image> */}
        //                                             <h6 classNameName="flex justify-center text-base text-center items-center text-dullWhite font-normal ">iPhone 14 Series</h6>
        //                                         </div>

        //                                         <p classNameName={`text-3xl md:text-5xl md:leading-[60px] text-dullWhite font-semibold  ${Font.classNameName}`} style={{ letterSpacing: "4%" }}>Up to 10% <br />off Voucher</p>
        //                                         <Link
        //                                             href="/"
        //                                             classNameName="text-dullWhite  mt-2 fw-semibold  text-decoration-none w-fit border-b-[1px] border-b-white hover:text-red"
        //                                         >
        //                                             Shop Now →
        //                                         </Link>
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                             <div classNameName="carousel-item ">
        //                                 <div classNameName="d-flex  justify-content-end align-items-end position-relative">

        //                                     <Image
        //                                         src={"/images/3.jpg"}
        //                                         classNameName=" flex justify-end items-end "
        //                                         alt="iPhone 14 Series"
        //                                         width={496}
        //                                         height={352}
        //                                         style={{ objectFit: "fill" }}

        //                                     />
        //                                     <div
        //                                         classNameName="carousel-caption text-start position-absolute flex flex-col justify-content-center top-32 sm:top-48 start-10 translate-middle-y"
        //                                         style={{ color: "#fff" }}
        //                                     >
        //                                         <div classNameName="d-flex align-items-center gap-6   ">
        //                                             {/* <Image src={"/images/3.jpg"}
        //                                                 alt="mobile"
        //                                                 width={40}
        //                                                 height={40}>
        //                                             </Image> */}
        //                                             <h6 classNameName="flex justify-center text-base text-center items-center text-dullWhite font-normal ">iPhone 14 Series</h6>
        //                                         </div>

        //                                         <p classNameName={`text-3xl md:text-5xl md:leading-[60px] text-dullWhite font-semibold  ${Font.classNameName}`} style={{ letterSpacing: "4%" }}>Up to 10% <br />off Voucher</p>
        //                                         <Link
        //                                             href="/"
        //                                             classNameName="text-dullWhite  mt-2 fw-semibold  text-decoration-none w-fit border-b-[1px] border-b-white hover:text-red"
        //                                         >
        //                                             Shop Now →
        //                                         </Link>
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                             <div classNameName="carousel-item ">
        //                                 <div classNameName="d-flex  justify-content-end align-items-end position-relative">

        //                                     <Image
        //                                         src={"/images/1.jpg"}
        //                                         classNameName=" flex justify-end items-end "
        //                                         alt="iPhone 14 Series"
        //                                         width={496}
        //                                         height={352}
        //                                         style={{ objectFit: "fill" }}

        //                                     />
        //                                     <div
        //                                         classNameName="carousel-caption text-start position-absolute flex flex-col justify-content-center top-32 sm:top-48 start-10 translate-middle-y"
        //                                         style={{ color: "#fff" }}
        //                                     >
        //                                         <div classNameName="d-flex align-items-center gap-6   ">
        //                                             {/* <Image src={"/homeImage/mobile.svg"}
        //                                                 alt="mobile"
        //                                                 width={40}
        //                                                 height={40}>
        //                                             </Image> */}
        //                                             <h6 classNameName="flex justify-center text-base text-center items-center text-dullWhite font-normal ">iPhone 14 Series</h6>
        //                                         </div>

        //                                         <p classNameName={`text-3xl md:text-5xl md:leading-[60px] text-dullWhite font-semibold  ${Font.classNameName}`} style={{ letterSpacing: "4%" }}>Up to 10% <br />off Voucher</p>
        //                                         <Link
        //                                             href="/"
        //                                             classNameName="text-dullWhite  mt-2 fw-semibold  text-decoration-none w-fit border-b-[1px] border-b-white hover:text-red"
        //                                         >
        //                                             Shop Now →
        //                                         </Link>
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                             <div classNameName="carousel-item ">
        //                                 <div classNameName="d-flex  justify-content-end align-items-end position-relative">

        //                                     <Image
        //                                         src={"/images/2.jpg"}
        //                                         classNameName=" flex justify-end items-end "
        //                                         alt="iPhone 14 Series"
        //                                         width={496}
        //                                         height={352}
        //                                         style={{ objectFit: "fill" }}

        //                                     />
        //                                     <div
        //                                         classNameName="carousel-caption text-start position-absolute flex flex-col justify-content-center top-32 sm:top-48 start-10 translate-middle-y"
        //                                         style={{ color: "#fff" }}
        //                                     >
        //                                         <div classNameName="d-flex align-items-center gap-6   ">
        //                                             {/* <Image src={"/homeImage/mobile.svg"}
        //                                                 alt="mobile"
        //                                                 width={40}
        //                                                 height={40}>
        //                                             </Image> */}
        //                                             <h6 classNameName="flex justify-center text-base text-center items-center text-dullWhite font-normal ">iPhone 14 Series</h6>
        //                                         </div>

        //                                         <p classNameName={`text-3xl md:text-5xl md:leading-[60px] text-dullWhite font-semibold  ${Font.classNameName}`} style={{ letterSpacing: "4%" }}>Up to 10% <br />off Voucher</p>
        //                                         <Link
        //                                             href="/"
        //                                             classNameName="text-dullWhite  mt-2 fw-semibold  text-decoration-none w-fit border-b-[1px] border-b-white hover:text-red"
        //                                         >
        //                                             Shop Now →
        //                                         </Link>
        //                                     </div>
        //                                 </div>
        //                             </div>

        //                         </div>

        //                         {/* Left and right controls/icons  */}
        //                         <button classNameName="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        //                             <span classNameName="carousel-control-prev-icon"></span>
        //                         </button>
        //                         <button classNameName="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        //                             <span classNameName="carousel-control-next-icon"></span>
        //                         </button>
        //                     </div>

        //                 </div>
        //             </div>
        //     </div>
        <div className=" mt-24 w-2/3 h-1/2 mx-auto ">
            <div id="demo" className="carousel slide " data-bs-ride="carousel">

                {/* <!-- Indicators/dots --> */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                {/* <!-- The slideshow/carousel --> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image src="/images/3.jpg" alt="Los Angeles" width={500} height={500} className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/6.jpg" alt="Chicago" width={300} height={300} className="d-block w-100 h-fit" />
                    </div>
                    <div className="carousel-item">
                        <Image src="/images/1.jpg" alt="New York" width={500} height={500} className="d-block w-100" />
                    </div>
                </div>

                {/* <!-- Left and right controls/icons --> */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>

            </div>
        </div>
    )
}
