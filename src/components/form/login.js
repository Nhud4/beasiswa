import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginForm(){
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handelSubmite = (e) =>{
    e.preventDefault();
    if(username === 'admin' && password === 'admin'){
      router.push('/');
    }else{
      alert('username atau password salah');
    }
  };

  return(
    <>
      <form onSubmit={handelSubmite}>
        <div className="w-full space-y-3 flex flex-col">
          <input
            type="text"
            className="p-3 border border-nero-20 rounded-lg text-sm focus:outline-none"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required/>
          <input
            type="password"
            className="p-3 border border-nero-20 rounded-lg text-sm focus:outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>
        </div>
        <div className="flex justify-center items-center mt-6 border-t border-nero-20 pt-4 text-white">
          <button
            className="bg-primary-20 px-4 py-2 rounded-md">
            Masuk
          </button>
        </div>
      </form>
    </>
  );
}
