import { useState } from "react";
import AdminSidebar from "./AdminSidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {

    const [sideBar, setSideBar] = useState(false);


  return (
    <div className="flex min-h-screen bg-gray-50">

        {sideBar && (
            <div  onClick={() => setSideBar(false)} className="fixed inset-0 z-40 bg-black/40 md:hidden"/>)}

      <AdminSidebar isOpen={sideBar} onClose={() => setSideBar(false)}/>

      <main className="flex-1">
        <button type="button" 
        onClick={() => setSideBar(true)}          
         className="m-4 rounded-lg border bg-white px-4 py-2 md:hidden"
          aria-label="Open navigation menu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>

        </button>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;