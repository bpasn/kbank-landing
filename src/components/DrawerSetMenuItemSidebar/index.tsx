import { Box, Divider, Grid, List, ListItem, ListItemButton, Toolbar,  Typography } from '@mui/material'
import Logo from '../../assets/images/kbank/image.png'
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
type Props = {}

const DrawerSetMenuItemSideBar = (props: Props) => {
    const [active, setActive] = React.useState<string>('');
    const { t } = useTranslation("common")
    return (
        <Box sx={{
            // borderRight:"3px solid #28a745 !important",
            height: "100%"
        }}>
            <Toolbar sx={{
                borderBottom: "1px solid #CFD2D5",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                paddingBottom: "0.5rem",
                paddingTop: "1rem",
                height: "75px",
            }}>
                <Box sx={{
                    textAlign: "center",
                    width: "100%",

                }}>
                    <Box sx={{
                        backgroundColor: "transparent"
                    }}>
                        <Box component={'img'}
                            src={Logo}
                            width="180px"
                            sx={{
                                verticalAlign: "middle",
                                borderStyle: "none"
                            }} />
                    </Box>
                </Box>
            </Toolbar>
            <Divider />
            <Grid item md={12} sm={12} xl={12} sx={{
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem"
            }}>
                <Box sx={{
                    textAlign: "center",
                    border: "0 !important",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    minWidth: 0,
                    wordWrap: "break-word",
                    backgroundColor: "#fff",
                    backgroundClip: "border-box",
                }} >
                    <Box >
                        <div className="rounded-circle w-auto mx-auto pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" id="mini_profile_img">
                                <g transform="translate(50, 50)">
                                    <circle fill='rgb(0, 169, 80)' r="49" stroke="white" strokeWidth="2" className="kbank" />
                                    <text fontSize="2em" stroke="white" fill="white" strokeWidth="2px" dy=".2em" textAnchor="middle" alignmentBaseline="middle">{"AAAAAAAA".substring(0, 3)}</text>
                                </g>
                            </svg>
                        </div>
                        <h5 className="username mb-1 theme-style">{"username"}</h5>
                        <small className="d-block text-muted pb-2"
                            style={{
                                fontSize: '.7rem'
                            }}>{"corporate->name_th"}</small>
                    </Box>
                </Box>
            </Grid>
            <Divider />
            <List>
                {[{ name: t("corporate"), route: "/Corporate" }, { name: t("changePassword"), route: "#" }].map((item, index) => (
                    <ListItem key={item.name} disablePadding >
                        <Box component={Link} to={item.route}
                            className={active === item.name ? 'active' : ""} onClick={() => setActive(item.name)}
                            sx={{
                                textDecoration:"none",
                                width: "100%",
                                paddingLeft: "0.5rem",
                                padding: ".75rem 1.5rem",
                                cursor: "pointer",

                                backgroundColor: "#fff",
                                marginBottom: "-1px",
                                // border: "1px solid rgba(0,0,0,.125)",
                                textAlign: "inherit",
                                fontWeight: "600 !important",
                                fontSize: "16px !important",
                                color: "#000 !important",
                                borderLeft: "3px solid transparent",

                                '&:hover': {
                                    backgroundColor:"transparent",
                                    borderLeft: "3px solid #00a950 !important",
                                    background: "hsl(148,100%,33%,0.1) !important",
                                    borderTopLeftRadius: "0.25rem",
                                    borderTopRightRadius: "0.25rem",
                                },
                                '&.active': {
                                    borderLeft: "3px solid #00a950 !important",
                                    background: "rgba(0,66,31,0.1) !important",
                                    padding: "0.75rem 1.5rem !important",
                                    color: "#00a950 !important",
                                    fontWeight: "600 !important"
                                }
                            }}
                        >
                            <ListItemButton disableTouchRipple sx={{
                                '&.MuiButtonBase-root:hover':{
                                    backgroundColor:"transparent !important"
                                }
                            }}>
                                <Typography sx={{
                                    fontWeight: "600 !important",
                                    fontSize: "16px !important",
                                }}>{item.name}</Typography>
                            </ListItemButton>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default DrawerSetMenuItemSideBar