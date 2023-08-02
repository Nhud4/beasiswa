import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { saveToken } from '@/utils/server/localstorage';
import Server from '@/utils/server';

export default function LoginForm(){
  const router = useRouter();
  const server = new Server();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handelSubmit = async(e) =>{
    e.preventDefault();
    const result = await server.login(username, password);
    if(result.code === 500){
      alert(result.message);
    }
    if(result.code === 201){
      saveToken(result.data.accessToken, result.data.expAccessToken);
      router.push('/');
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const styles = {
    activeBox: 'flex items-center p-2 rounded border-2 border-primary-50 bg-primary-40 h-[2.5rem]',
    inactiveBox: 'flex items-center p-2 rounded border-2 border-black-300 h-[2.5rem]',
    label: 'text-sm font-medium text-black-500 pb-2',
    inputBox: 'w-full text-sm text-black-500 bg-transparent outline-none border-none',
    inputActive: 'w-full text-sm text-black-500 bg-primary-40 outline-none border-none'
  };

  return(
    <>
      <form onSubmit={handelSubmit}>
        <div className="flex flex-col space-y-4 w-full">
          <div>
            <h1 className={styles.label}>Username</h1>
            <div className={username ? styles.activeBox:styles.inactiveBox}>
              <input
                type="text"
                className={username ? styles.inputActive:styles.inputBox}
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
          </div>
          <div>
            <h1 className={styles.label}>Password</h1>
            <div className={password ? styles.activeBox:styles.inactiveBox}>
              <input
                type={showPassword ? 'text':'password'}
                className={password ? styles.inputActive:styles.inputBox}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <div className="w-[1.7rem]" onClick={handleShowPassword}>
                <Image className="w-[8rem] mr-2" src={require('@/assets/icon/eye-slash.svg')} alt="icon" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-4 text-white">
            <button
              className="bg-primary-20 px-4 py-2 rounded-md w-full">
            Masuk
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
