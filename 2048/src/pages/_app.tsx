import type { AppProps } from 'next/app';
import '../scss/index.scss';

const SafeHydrate: React.FC = ({ children }) => {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div suppressHydrationWarning>
      <SafeHydrate>
        <Component {...pageProps} />
      </SafeHydrate>
    </div>
  );
}

export default MyApp;
