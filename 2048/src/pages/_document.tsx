import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  public render(): JSX.Element {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
