import {Head, Html, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html lang='en' style={{height: 'auto'}}>
            <Head />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&amp;display=fallback" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/css/adminlte.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                  integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
                  crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}