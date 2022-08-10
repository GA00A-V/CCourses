import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <link rel="shortcut icon" href="https://drive.google.com/uc?export=view&id=191HsZUUJShlj8QTHvNB6EgFrs0QLMKkF" type="image/x-icon" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}