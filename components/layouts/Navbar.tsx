"use client"

import React, { useState } from 'react';
import BreadCrumb from '../ui/BreadCrumb';
import { breadCrumbData } from '@/app/config/nav.data';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '../ui/menubar';
import Icon from '../ui/Icon';
import { NavbarProps } from '@/app/types/components/layouts/Navbar';
import Link from 'next/link';
import { Button } from '../ui/button';

const Navbar: React.FC<NavbarProps> = ({ items, isMobile, toggleSidebar, toggleIcon, isSidebarOpen }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full bg-gray-950 text-white p-2 flex justify-between items-center">
            {isMobile && (
                <Button
                    variant={"link"}
                    onClick={() => toggleSidebar(!isSidebarOpen)}>
                    <Icon name={toggleIcon} className="text-white" />
                </Button>
            )}
            <BreadCrumb items={[breadCrumbData]} />
            <nav className="max-md:hidden">
                <Menubar className="bg-gray-950 text-slate-300 border-none">
                    {items.map((item, index) => (
                        <MenubarMenu key={index}>
                            <MenubarTrigger className="cursor-pointer hover:bg-gray-700 focus:bg-gray-700 focus-visible:bg-gray-700" asChild>
                                <Link href={item.href} passHref>
                                    {item.showIconOnly && <Icon name={item?.icon || ""} className="w-6 h-6" />}
                                    {!item.showIconOnly && item.title}
                                </Link>
                            </MenubarTrigger>
                            {item.subItems && item.subItems.map((subItem, index) => (
                                <MenubarContent className="bg-gray-700 border-gray-600 text-slate-300">
                                    <MenubarItem key={index} className="focus:bg-gray-700 cursor-pointer">
                                        <Link href={subItem.href}>
                                            {subItem.title}
                                        </Link>
                                    </MenubarItem>
                                </MenubarContent>
                            ))}
                        </MenubarMenu>
                    ))}
                </Menubar>
            </nav>

            {/* Mobile menu  */}
            <button
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Icon name="menu" className="w-6 h-6" />
            </button>
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-gray-800 md:hidden rounded-md">
                    <ul>
                        {items.map((item, index) => (
                            <li key={index} className="flex flex-row px-4 py-2 text-sm gap-4">
                                <Link href={item.href}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;