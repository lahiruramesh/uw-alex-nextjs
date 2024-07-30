export default interface BreadCrumbProps {
    items: [
        {
            title: string;
            href: string;
            subItems: {
                title: string;
                href: string;
                onChangeHandler: () => void;
                subMenu: {
                    title: string;
                    onClickHandler?: () => void;
                    icon: string;
                }[]
            }
        }
    ];
    className?: string;
}