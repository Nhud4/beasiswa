import { useEffect } from 'react';
import '@/styles/globals.css';
import { useRouter } from 'next/router';
import MainLayout from '@/components/layouts/main_layout';
import { getToken } from '@/utils/server/localstorage';

export default function App({ Component, pageProps }) {
  const token = getToken();
  const router = useRouter();
  useEffect(() =>{
    if(!token){
      router.replace('/login');
    }
  },[token]);

  return (
    <MainLayout>
      <Component  {...pageProps} />
    </MainLayout>
  );
}
