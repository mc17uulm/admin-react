import React from "react";

export const Content = ({children} : {children: React.ReactNode}) => {
    return (
        <section className='content'>
            <div className='container-fluid'>
                {children}
            </div>
        </section>
    )
}