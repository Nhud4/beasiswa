import React from 'react';

export default function MainLayout(props) {
  const { children } = props;

  return (
    <>
      <main className="pt-28">{children}</main>
    </>
  );
}
