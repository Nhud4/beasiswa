import Link from 'next/link';
import React from 'react';

export default function Button({ className, to, children, onClick }) {
  return (
    <>
      { to ? (
        <Link className={`bg-primary-50 py-3 px-4 rounded text-white font-semibold hover:bg-primary-70 transition-all duration-300 ${className}`} href={to}>{children}</Link>
      ) : (
        <button onClick={onClick} className={`bg-primary-50 py-3 px-4 rounded text-sm text-white font-semibold hover:bg-primary-70 transition-all duration-300 ${className}`}>{children}</button>
      )}
    </>
  );
}
