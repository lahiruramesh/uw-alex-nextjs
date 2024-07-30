"use client";

import {
    ChevronsUpDown,
    Info,
    Check,
    Search,
    Plus,
    Building2,
    Menu,
    Settings,
    CircleUserRound,
    PanelRightOpen,
    PanelLeftClose,
    SquareTerminal,
    Bot,
    SquareChartGantt,
    Group,
    DatabaseZap,
    FileKey2,
    Upload,
    RefreshCcw,
    Code,
    ArrowLeftRight,
    Paintbrush
} from 'lucide-react';
import { cn } from '@/lib/utils';

import IconProps from '@/app/types/components/ui/Icon';
import React from 'react';

const Icon: React.FC<IconProps> = ({ name, className }) => {
    switch (name) {
        case 'chevrons-up-down':
            return <ChevronsUpDown className={cn("w-6 h-6", className)} />;
        case 'info':
            return <Info className={cn("w-6 h-6", className)} />;
        case 'check':
            return <Check className={cn("w-6 h-6", className)} />;
        case 'search':
            return <Search className={cn("w-6 h-6", className)} />;
        case 'plus':
            return <Plus className={cn("w-6 h-6", className)} />;
        case 'building2':
            return <Building2 className={cn("w-6 h-6", className)} />;
        case 'menu':
            return <Menu className={cn("w-6 h-6", className)} />;
        case 'settings':
            return <Settings className={cn("w-6 h-6", className)} />;
        case 'user':
            return <CircleUserRound className={cn("w-6 h-6", className)} />;
        case 'panel-right-open':
            return <PanelRightOpen className={cn("w-6 h-6", className)} />;
        case 'panel-left-close':
            return <PanelLeftClose className={cn("w-6 h-6", className)} />;
        case 'terminal':
            return <SquareTerminal className={cn("w-6 h-6", className)} />;
        case 'bot':
            return <Bot className={cn("w-6 h-6", className)} />;
        case 'gantt':
            return <SquareChartGantt className={cn("w-6 h-6", className)} />;
        case 'group':
            return <Group className={cn("w-6 h-6", className)} />;
        case 'database':
            return <DatabaseZap className={cn("w-6 h-6", className)} />;
        case 'file-key':
            return <FileKey2 className={cn("w-6 h-6", className)} />;
        case 'upload':
            return <Upload className={cn("w-6 h-6", className)} />;
        case 'refresh':
            return <RefreshCcw className={cn("w-6 h-6", className)} />;
        case 'code':
            return <Code className={cn("w-6 h-6", className)} />;
        case 'arrow-left-right':
            return <ArrowLeftRight className={cn("w-6 h-6", className)} />;
        case 'paintbrush':
            return <Paintbrush className={cn("w-6 h-6", className)} />;
        default:
            return null;
    }
};

export default Icon;