import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';

export default function MainLayout(props) {
  const [hidden, setHidden] = useState(true);
  const [page, setPage] = useState('');
  const { children } = props;
  const location = useRouter();

  useEffect(() => {
    if(location.pathname === '/login'){
      setHidden(true);
    }
    if(location.pathname === '/'){
      setPage('home');
      setHidden(false);
    }
    if(location.pathname === '/data'){
      setPage('data');
      setHidden(false);
    }
  }, [location]);

  return (
    <>
      <Sidebar page={page} hidden={hidden}/>
      <main className="pt-28">{children}</main>
    </>
  );
}
