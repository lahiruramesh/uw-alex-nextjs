"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/Icon";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";

const MainContent: React.FC = () => {
    return (
        <div className="bg-zinc-900 ml-1 text-white px-2 py-2 h-full flex flex-col max-md:items-center gap-4">
            <div className="flex flex-row justify-between items-center">
                <Select>
                    <SelectTrigger className="w-fit h-[36px] border-gray-700 bg-zinc-600 text-gray-300 ring-offset-gray-700 ring-gray-600">
                        <SelectValue placeholder="gpt-pro" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 ring-offset-gray-700 ring-gray-600">
                        <SelectItem defaultChecked value="gpt-pro" className="bg-zinc-900 focus:bg-gray-700 ring-offset-gray-700 ring-gray-600">gpt-pro</SelectItem>
                    </SelectContent>
                </Select>
                <div className="flex flex-row gap-2">
                    <Button size="icon" className="bg-zinc-900 text-gray-300 rounded-lg w-fit p-2">
                        <Icon name="paintbrush" className="w-6 h-6" />
                    </Button>
                    <Button size="icon" className="bg-zinc-900 text-gray-300 rounded-lg w-fit p-2">
                        Compare
                    </Button>
                    <Button size="icon" className="bg-zinc-900 text-gray-300 rounded-lg w-fit p-2">
                        <Icon name="arrow-left-right" className="w-6 h-6" />
                    </Button>
                </div>
            </div>
            <div className="flex flex-col items-center mt-4">
                <Card className="w-fit bg-zinc-900 text-gray-300 border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-base">System Instruction</CardTitle>
                        <CardDescription>Enter system instruction</CardDescription>
                    </CardHeader>
                </Card>
            </div>

        </div>
    )
};

export default MainContent;