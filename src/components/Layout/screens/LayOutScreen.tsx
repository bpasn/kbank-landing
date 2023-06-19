import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import SideBarComponent from '../../SideBarComponent';
import { Outlet } from 'react-router-dom'
import HeaderComponent from '../../HeaderComponent';
import { styled } from '@mui/material';
const drawerWidth: number = 230;

interface Props {
}
export const BoxCustom = styled(Box)({
    padding: "0",
    margin: "0",
    height: "100%",
    display: "grid",
    gridTemplateRows: "1fr 5rem",
    gridTemplateAreas: `
    "section section section"
    "footer footer footer"
     `
})
const LayoutScreen = (props: Props) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <HeaderComponent drawerWidth={drawerWidth} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                {/* sidebar */}
                <SideBarComponent mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} drawerWidth={drawerWidth} />
            </Box>
            <Box
                component="main"
                id='portal-body'
                sx={{
                    flexGrow: 1,
                    mt: 4,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    height: "100%"
                }}
            >
                <Toolbar />
                <BoxCustom sx={{ position: "relative" }}>
                    <Box component={"section"} sx={{
                        gridArea: "section",
                        pl: {
                            md: 5,
                            sm: 1,
                            xs: 1
                        },
                        pr: {
                            md: 5,
                            sm: 1,
                            xs: 1
                        },
                    }}>
                        <Outlet />
                    </Box>
                    <Box component={"footer"} className='text-center p-4' sx={{
                        gridArea: "footer",
                        backgroundColor: "#FAFAFA",
                        marginBottom: 0,
                        borderTop: "1px solid #CFD2D5",
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        zIndex: 1
                    }}>
                        <img style={{
                            maxWidth: '100%',
                            height: 'auto'
                        }} width={230} src="https://devkbankagent02.etaxsolution.com/assets/images/slogan.png" alt="" />

                    </Box>
                </BoxCustom>
            </Box>
        </Box>
    );
}

export default LayoutScreen;