"use client";

import React from "react";
import { Slider } from "./slider";
import { Label } from "./label";
import SliderWithValueProps from "@/app/types/components/ui/SliderWithValue";

const SliderWithLabel: React.FC<SliderWithValueProps> = ( { label, step, min, max, defaultValue = 20  }) => {

    const [value, setValue] = React.useState(0);
    return (
        <div className="flex flex-col w-full gap-4">
            <div className="flex flex-row items-center justify-between text-gray-300">
                <Label>{label}</Label>
                <Label>{value}</Label>
            </div>
            <div>
                <Slider
                    defaultValue={[defaultValue]}
                    max={max}
                    min={min}
                    step={step}
                    className="bg-gray-400 text-gray-500"
                    onValueChange={(data) => setValue(data[0])}
                />
            </div>
        </div>
    )
};

export default SliderWithLabel;