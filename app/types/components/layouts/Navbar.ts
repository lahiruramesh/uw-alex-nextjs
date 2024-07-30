export interface NavbarProps {
    items: {
        title: string;
        href: string;
        icon?: string;
        showIconOnly?: boolean;
        subItems?: {
            title: string;
            href: string;

        }[]
    }[];
    isMobile : boolean;
    toggleSidebar: (value: boolean) => void;
    toggleIcon: string;
    isSidebarOpen: boolean;
};