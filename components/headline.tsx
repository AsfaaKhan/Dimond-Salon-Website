/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"

const Headline = () => {
    return (
        <>
            <div className="top-bar h-14 font-bold text-textColor italic text-lg ">
                {React.createElement('marquee' as any, { behavior: "scroll", direction: "left", className : "" },
                    '*** Hurray!!  Special Offer (20-30 % Discount) to Regular Users ***'
                )}



            </div>
        </>
    )
}
export default Headline
