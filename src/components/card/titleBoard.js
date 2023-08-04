import React from 'react';
import Link from 'next/link';
import { FcNext } from 'react-icons/fc';

export default function HeaderPage({ title, breadcrumbs }){
  const lastIndex = breadcrumbs?.slice(-1);
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="flex items-center space-x-2 text-sm font-semibold text-[#0093AD]">
        {breadcrumbs?.map(({ title, url }) => (
          <div key={title} className="flex items-center space-x-2">
            <Link href={url}>
              {title}
            </Link>
            <div hidden={title === lastIndex[0].title ? true:false}>
              <FcNext className="text-[#0093AD]"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
