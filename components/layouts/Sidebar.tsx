import { SidebarProps } from '@/app/types/components/layouts/Sidebar';
import React from 'react';
import Icon from '../ui/Icon';
import Link from 'next/link';

const Sidebar: React.FC<SidebarProps> = ({ isMobile, isOpen, items }) => {
    return (
        <div className={`w-64 bg-zinc-900 text-slate-300 text-sm p-4  ${isMobile && isOpen ? 'absolute top-16 z-50' : 'max-md:hidden'}`}>
            <aside>
                <ul className="flex flex-col gap-4 items-start px-2">
                    {items.map((item, index) => (
                        <li key={index} className="">
                            <Link href={item.href} className="flex flex-row gap-4">
                                <Icon name={item.icon} className="w-6 h-6" />
                                <div>{item.title}</div>
                            </Link>
                            {item.subItems && (
                                <ul className="ml-16 mt-4 flex flex-col gap-4">
                                    {item.subItems.map((subItem, index) => (
                                        <li key={index} className="flex flex-row gap-2 items-center">
                                            <Link href={subItem.href}>
                                                <div>{subItem.title}</div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;
