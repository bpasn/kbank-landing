import { Drawer } from '@mui/material'
import React from 'react'
import DrawerSetMenuItemSideBar from '../DrawerSetMenuItemSidebar';

type Props = {
    window?: () => Window;
    mobileOpen: boolean;
    setMobileOpen: React.Dispatch<React.SetStateAction<any>>;
    drawerWidth: number;
}

const SideBarComponent = (
    {
        window,
        mobileOpen,
        setMobileOpen,
        drawerWidth,
    }: Props) => {
    const container = window !== undefined ? () => window().document.body : undefined;
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }
    return (
        <div>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    borderRight:"3px solid #28a745 !important",
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <DrawerSetMenuItemSideBar />
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                <DrawerSetMenuItemSideBar />
            </Drawer>
        </div>
    )
}

export default SideBarComponent