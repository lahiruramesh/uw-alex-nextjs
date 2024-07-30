"use client";

import React from 'react';
import { Button } from './button';
import InitialAvatar from './InitialAvatar';
import BreadCrumbProps from '@/app/types/components/ui/BreadCrumb';
import Icon from './Icon';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './dropdown-menu';
import { Input } from './input';

const BreadCrumb: React.FC<BreadCrumbProps> = ({ items, className }) => {
    return (
        <div className="text-white">
            <nav>
                <ul>
                    {items.map((item, index) => (
                        <li key={index} className="flex flex-row">
                            <Link href={item.href}>
                                <Button
                                    variant="link"
                                    className="text-white flex items-center gap-2"
                                >
                                    <InitialAvatar
                                        name={item.title}
                                        size={30}
                                    />
                                    {item.title}
                                    <Icon name="chevrons-up-down" className="w-4 h-4 text-gray-400" />
                                </Button>
                            </Link>
                            {item.subItems && (
                                <div className="flex flex-row items-center">
                                    <div className="text-gray-400">/</div>
                                    <DropdownMenu >
                                        <DropdownMenuTrigger asChild className="focus-visible:ring-gray-950 focus-visible:ring-offset-gray-950">
                                            <Button
                                                variant="link"
                                                className="text-white flex items-center gap-2"
                                            >
                                                {item.subItems.title}
                                                <Icon name="chevrons-up-down" className="w-4 h-4 text-gray-400" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="bg-gray-800 w-full md:w-80 flex flex-col items-center border-2 border-gray-700 px-2 py-4">
                                            <div className="w-full md:w-72 flex flex-col gap-2">
                                                <div className="relative">
                                                    <Icon name="search" className="w-4 h-4 absolute top-3 left-3 text-gray-400" />
                                                    <Input
                                                        placeholder={"Change Project..."}
                                                        className="border bg-gray-700 text-white border-1 border-green-700 focus-visible:ring-offset-1 pl-8 focus-visible:ring-offset-green-700 focus-visible:ring-green-800"
                                                        onChange={item.subItems.onChangeHandler}
                                                    />
                                                </div>
                                                <ul>
                                                    <li className="bg-emerald-800 flex flex-row items-center justify-between px-4 h-12 rounded-lg text-sm">
                                                        <div className="flex flex-row gap-2">
                                                            <div className="bg-emerald-800 text-white">Default project</div>
                                                            <Icon name="info" className="w-4 h-4 ml-auto text-white" />
                                                        </div>
                                                        <div>
                                                            <Icon name="check" className="items-end w-4 h-4 ml-2 text-white" />
                                                        </div>
                                                    </li>
                                                </ul>
                                                <hr className="border-t border-gray-600" />
                                                {item.subItems.subMenu.map((subItem, index) => (
                                                    <DropdownMenuLabel asChild key={index}>
                                                        <Button
                                                            variant={"link"}
                                                            className="flex flex-row justify-between text-slate-300 text-sm px-2"
                                                            onClick={subItem.onClickHandler}
                                                        >
                                                            <div className="bg-gray-800">{subItem.title}</div>
                                                            <Icon name={subItem.icon} className="w-4 h-4 text-slate-300" />
                                                        </Button>
                                                    </DropdownMenuLabel>
                                                ))}
                                            </div>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default BreadCrumb;


