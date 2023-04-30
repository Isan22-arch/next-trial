import React, { Suspense } from 'react';
import Navbar from '../components/navbar';
import Spinner from '../components/spinner';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        {/* @ts-expect-error Async Server Component */}
        <Navbar />
      </Suspense>
      {children}
    </>
  );
}

export default Layout;
