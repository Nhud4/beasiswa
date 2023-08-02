import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import Header from './header';

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
      <div className="sticky top-0 ml-[15rem]" hidden={hidden}>
        <div className="grid h-[5.1rem] grid-cols-6 shadow-1">
          <div className="bg-white h-[5.1rem] col-span-5" />
          <div className="col-start-6 bg-white h-[5.1rem]">
            <Header />
          </div>
        </div>
      </div>
      <main className="">{children}</main>
    </>
  );
}
