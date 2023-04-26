import React, { Suspense } from 'react';
import Navbar from '../components/navbar';

function Layout({ children }: { children: React.ReactNode }) {
  const skeleton = (
    <div className="bg-gray-300 rounded overflow-hidden">
      <div className="h-1 bg-gray-400 animate-pulse"></div>
      <div className="h-1 bg-gray-400 animate-pulse"></div>
      <div className="h-1 bg-gray-400 animate-pulse"></div>
      <div className="h-1 bg-gray-400 animate-pulse"></div>
    </div>
  );
  return (
    <>
      <Suspense fallback={skeleton}>
        {/* @ts-expect-error Async Server Component */}
        <Navbar />
      </Suspense>
      {children}
    </>
  );
}

export default Layout;
