export const breadCrumbData = {
    title: 'Flingaroo', href: '#',
    subItems: {
        title: 'default project',
        href: '#',
        onChangeHandler: () => { console.log('Change Project') },
        subMenu: [
            {
                title: 'Create Project',
                onClickHandler: () => { console.log('Project 1') },
                icon: 'info'
            },
            {
                title: 'Organize Overview',
                onClickHandler: () => { console.log('Project 2') },
                icon: 'building2'
            }
        ]
    }
};

export const topNavData = [
    { title: 'Dashboard', href: '/' },
    { title: 'Docs', href: '/#' },
    { title: 'API Reference', href: '/#' },
    { title: 'Settings', href: '/#', icon: 'settings', showIconOnly: true },
    {
        title: 'User', 
        href: '#', 
        icon: 'user',
        showIconOnly: true,
        subMenu: [
            { title: 'Profile', href: '#'},
            { title: 'Logout', href: '#' }
        ]
    }
];

export const sideNavData = [
    {
        title: 'Playground',
        href: '/',
        icon: 'terminal',
        subItems: [
            {
                title: 'Chat',
                href: '/',
                icon: ''
            },
            {
                title: 'Assistants',
                href: '/',
                icon: ''
            },
            {
                title: 'Completions',
                href: '/',
                icon: ''
            }
        ]
    },
    {
        title: 'Assistants',
        href: '/',
        icon: 'bot',
    },
    {
        title: 'Fine-tuning',
        href: '/',
        icon: 'gantt',
    },
    {
        title: 'Batches',
        href: '/',
        icon: 'group',
    },
    {
        title: 'Storage',
        href: '/',
        icon: 'database',
    },
    {
        title: 'Usage',
        href: '/',
        icon: 'panel-left-close',
    },
    {
        title: 'API keys',
        href: '/',
        icon: 'file-key',
    }
];