import React, {Fragment} from "react";
import Head from "next/head";

export interface PageProps {
    title: string,
    children: React.ReactNode
}

export const Page = (props : PageProps) => {

    return (
        <Fragment>
            <Head>
                <title>{props.title}</title>
                <meta property='og:title' content={props.title} />
            </Head>
            {props.children}
        </Fragment>
    )
}