export default interface SliderWithValueProps {
    defaultValue: number;
    max: number;
    min: number;
    step: number;
    label: string;
    onValueChange?: (data: number) => void;
};