import React from 'react';
import SideNav from '../ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="order-2 w-full flex-none md:order-1 md:w-64">
          <SideNav />
        </div>
        <div className="order-1 flex-grow p-6 md:order-2 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </>
  );
}
