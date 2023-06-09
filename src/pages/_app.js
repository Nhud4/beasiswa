import '@/styles/globals.css';
import MainLayout from '@/components/layouts/main_layout';


export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component  {...pageProps} />
    </MainLayout>
  );
}
