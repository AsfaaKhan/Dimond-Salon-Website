/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"

const Headline = () => {
    return (
        <>
            <div className="top-bar">
                {React.createElement('marquee' as any, { behavior: "scroll", direction: "left" },
                    'Welcome to the webiste'
                )}



            </div>
        </>
    )
}
export default Headline
