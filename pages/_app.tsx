import '../styles/globals.css';
import type { AppProps } from 'next/app';
// import Link from 'next/link';
import Navbar from '../components/shared/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
