"use client";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";

const TopToolBar: React.FC = () => {
    return (
        <div className="bg-zinc-900 mx-1 text-white px-2 h-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-xl">Chat</h1>
                <div className="flex flex-col md:flex-row gap-4 py-2">
                    <Select>
                        <SelectTrigger className="w-[250px] h-[36px] border-gray-700 bg-zinc-900 text-gray-600 ring-offset-gray-700 ring-gray-600">
                            <SelectValue placeholder="Preset" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-600 ring-offset-gray-700 ring-gray-600">
                            <SelectItem value="light" className="bg-zinc-900 focus:bg-zinc-600 ring-offset-gray-700 ring-gray-600">Light</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="flex flex-row gap-4">
                    <Button size={"sm"} className="bg-zinc-600 text-gray-300 rounded-lg w-fit">
                        Save
                    </Button>
                    <Button size={"sm"} className="bg-zinc-600 text-gray-300 rounded-lg w-fit">
                        <Icon name="upload" className="w-6 h-6" />
                    </Button>
                    <Button size={"sm"} className="bg-zinc-600 text-gray-300 rounded-lg w-fit">
                        <Icon name="refresh" className="w-6 h-6" />
                    </Button>
                    <Button size={"sm"} className="bg-zinc-600 text-gray-300 rounded-lg w-fit">
                        <Icon name="code" className="w-6 h-6" />
                    </Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TopToolBar;