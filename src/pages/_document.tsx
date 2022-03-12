import Document, { Html, Main, Head, NextScript} from 'next/document'


export default class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,900;1,500&display=swap" rel="stylesheet" />

                    <link rel="shortcut icon" href="/favicon.png" type="image/png" />
                    
                </Head>
                <Main />
                <NextScript />
            </Html>
        )
    }
}