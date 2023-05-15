import '@/styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '@/components/layouts/main_layout';
import { getToken } from '@/utils/server/localstorage';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const token = getToken();
    if(!token){
      router.push('/login');
    }
  }, []);
  return (
    <MainLayout>
      <Component  {...pageProps} />
    </MainLayout>
  );
}
