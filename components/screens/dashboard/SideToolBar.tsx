"use client";

import Icon from "@/components/ui/Icon";
import { Input } from "@/components/ui/input";
import SliderWithLabel from "@/components/ui/SliderWithLabel";
import Link from "next/link";
import React from "react";

const SideToolBar: React.FC = () => {
    return (
        <div className="bg-zinc-900 mx-1 text-white px-4 py-2">
            <div className="flex flex-col gap-12 justify-between items-center py-8">
                <SliderWithLabel
                    label="Temperature"
                    step={1}
                    min={0}
                    max={100}
                    defaultValue={20}
                />
                <SliderWithLabel
                    label="Maximum Tokens"
                    step={1}
                    min={0}
                    max={100}
                    defaultValue={20}
                />
                <div className="flex flex-col w-full">
                    <label className="text-gray-300">Stop sequence</label>
                    <p className="text-xs text-gray-400">Enter sequence and press tab</p>
                    <Input type="text" className="bg-zinc-900 text-gray-500 p-2 rounded-lg border-gray-700" />
                </div>
                <SliderWithLabel
                    label="Top p"
                    step={1}
                    min={0}
                    max={100}
                    defaultValue={20}
                />
                <SliderWithLabel
                    label="Frequency penalty"
                    step={1}
                    min={0}
                    max={100}
                    defaultValue={20}
                />
                <SliderWithLabel
                    label="Presence penalty"
                    step={1}
                    min={0}
                    max={100}
                    defaultValue={20}
                />
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2">
                        <Icon name="bot" className="w-6 h-6" />
                        <p className="text-xs text-gray-400">API and Playground requestes will not be usedto train our models</p>
                    </div>
                    <Link href="/learn-more" className="text-green-700 text-xs mx-6">Learn more</Link>
                </div>
            </div>
        </div>
    )
};

export default SideToolBar;