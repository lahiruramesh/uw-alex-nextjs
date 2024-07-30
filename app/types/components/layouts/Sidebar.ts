export interface SidebarProps {
    items: {
        title: string;
        href: string;
        icon: string;
        subItems?: {
            title: string;
            href: string;
            icon: string;
        }[]
    }[];
    isMobile: boolean;
    isOpen: boolean;
};