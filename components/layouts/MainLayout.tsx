"use client";

import { sideNavData, topNavData } from "@/app/config/nav.data";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { MainLayoutProps } from "@/app/types/components/layouts/MainLayout";
import { useEffect, useState } from "react";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const mediaQuery = window.matchMedia('(max-width: 768px)');

            // Initial check
            setIsMobile(mediaQuery.matches);

            // Event listener for viewport changes
            const handleResize = (e: MediaQueryListEvent) => {
                setIsMobile(e.matches);
            };

            mediaQuery.addEventListener('change', handleResize);

            // Cleanup event listener on component unmount
            return () => {
                mediaQuery.removeEventListener('change', handleResize);
            };
        }
    }, []);

    return (
        <div className="flex h-screen w-screen">
            <div className="flex-1 flex flex-col">
                <Navbar 
                    items={topNavData} 
                    isMobile={isMobile} 
                    toggleSidebar={setIsOpenSidebar}
                    toggleIcon={isOpenSidebar ? 'panel-left-close' : 'panel-right-open'}
                    isSidebarOpen={isOpenSidebar}
                />
                <div className="flex flex-row  h-full">
                    <Sidebar items={sideNavData} isMobile={isMobile} isOpen={isOpenSidebar} />
                    <main className="w-full bg-gray-950">{children}</main>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;


