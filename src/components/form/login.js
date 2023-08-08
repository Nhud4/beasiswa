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
  const [loading, setLoading] = useState(false);

  const handelSubmit = async(e) =>{
    e.preventDefault();
    const result = await server.login(username, password);
    setLoading(true);

    if(result.code === 201){
      saveToken(result.data.accessToken, result.data.expAccessToken);
      setLoading(false);
      router.push('/');
    }else{
      alert('Username Atau Password Salah');
      setLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((show) => !show);

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
                autoComplete="off"
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
                autoComplete="off"
              />
              <div className="w-[1.7rem]" onClick={handleShowPassword}>
                <Image className="w-[8rem] mr-2" src={require('@/assets/icon/eye-slash.svg')} alt="icon" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-4 text-white">
            <button className="flex justify-center items-center bg-primary-20 px-4 py-2 rounded-md w-full space-x-4">
              {loading ? (
                <svg aria-hidden="true" class="w-8 h-8 mr-2 text-white animate-spin dark:fill-primary-30 fill-primary-20" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
              ):null}
              Masuk
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
