import styled from "@emotion/styled";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles"
import { Box, MenuItem } from "@mui/material"
import Logo from '../../../assets/images/kbank/kasikorn.jpg';
import LogoRight from '../../../assets/images/kbank/image.png';
import Braner from '../../../assets/images/kbank/e-TaxInvoice_Banner-fi-co-02.png';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from "react";
import { Outlet } from "react-router-dom";
import cookies from 'js-cookie'
import i18next from 'i18next'
import { useTranslation } from "react-i18next";

interface Props {

}
const theme: Theme = createTheme({
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: "#28a745",
                        border: '1px solid #28a745',
                        boxShadow: "0 0 0 0.2rem rgba(40,167,69,.25)"
                    },
                }
            }
        }
    }
})
export const HeaderAuth = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
})
export const ListUl = styled("ul")({
    paddingLeft: 0,
    marginBottom: 0,
    display: "flex",

})
export const ListLi = styled("li")({
    listStyle: "none",
    marginRight: "0.5rem"
})
export const BGCard = styled("div")({
    border: 0,
    backgroundColor: "transparent",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    backgroundClip: "border-box",
    borderRadius: "0.25rem"
})
export const BGCardOverlay = styled("div")({
    padding: "1.25rem 0rem",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
})
const LayoutAuth: React.FC<Props> = (props: Props) => {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const { t } = useTranslation(["common",'datatable']);
    const [lang, setLang] = React.useState<string>(currentLanguageCode);
    const handleChange = (event: SelectChangeEvent) => {
        setLang(event.target.value);
        i18next.changeLanguage(event.target.value)
    };
    return (
        <ThemeProvider theme={theme}>
            <Box component={"div"} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
                <HeaderAuth>
                    <Box alignSelf={"center"}>
                        <Box component={"img"} alt="logo" src={Logo}
                            width={70} maxWidth={"100%"} height={"auto"}
                            sx={{
                                verticalAlign: "middle",
                                borderStyle: 'none'
                            }} />
                    </Box>
                    <Box alignSelf={"center"}>
                        <ListUl>
                            <ListLi>
                                <Select
                                    disableInjectingGlobalStyles
                                    sx={{
                                        height: "calc(2.25rem + 4px)",
                                        width: "auto",
                                        '.MuiSelect-select': {
                                            padding: "6px 12px"
                                        },

                                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                        {
                                            borderColor: "#6d6d6d",
                                        },
                                    }}
                                    id="demo-simple-select-autowidth"
                                    value={lang}
                                    onChange={handleChange}
                                    label=""
                                >
                                    <MenuItem value={'th'}>{t("common:th")}</MenuItem>
                                    <MenuItem value={'en'}>{t("common:en")}</MenuItem>
                                </Select>
                            </ListLi>
                            <ListLi>
                                <Box
                                    sx={{
                                        verticalAlign: "middle",
                                        borderStyle: 'none'
                                    }}
                                    src={LogoRight}
                                    component={"img"} width={200} />
                            </ListLi>
                        </ListUl>
                    </Box>
                </HeaderAuth>
                <BGCard>
                    <Box component={"img"} alt="bg" src={Braner}
                        sx={{
                            width: "100%",
                            maxHeight: "320px",
                            objectFit: "cover",
                            verticalAlign: "middle",
                            borderStyle: 'none'
                        }} />
                    <BGCardOverlay>
                        <Box sx={{
                            paddingRight: {
                                md: "7rem",
                                sm: "0.5rem"
                            },
                            height: "100%",
                            width: "100%"
                        }}>
                            <Box sx={{
                                float: "right",
                                height: "100%",
                                paddingLeft: {
                                    md: "0.5rem"
                                }
                            }}>

                                <Box display="flex" justifyContent="center" height="100%">
                                    <Box alignSelf={"center"} >
                                        <Box component="h1" sx={{
                                            fontWeight: "300",
                                            color: "#54A452 !important",
                                            marginBottom: "0.5rem",
                                            lineHeight: 1.2,
                                            fontSize: {
                                                md: "60px",
                                                sm: "24px",
                                                xs: "100%"
                                            },

                                        }} >e-Tax Invoice &amp; e-Receipt</Box>
                                        <Box sx={{
                                            fontWeight: "300",
                                            marginBottom: "0.5rem",
                                            lineHeight: 1.2,
                                            fontSize: {
                                                md: "2.25rem",
                                                sm: "100%",
                                                xs: "100%"
                                            },

                                        }} component={"p"} className="lead">บริการออกใบกำกับภาษีและใบรับอิเล็กทรอนิกส์</Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </BGCardOverlay>
                </BGCard>
                <Outlet />
                <div className='text-center p-4'>
                    <img style={{
                            maxWidth: '100%',
                            height: 'auto'
                    }} width={230} src="https://devkbankagent02.etaxsolution.com/assets/images/slogan.png" alt="" />
                </div>
            </Box>
        </ThemeProvider>
    )
}

export default LayoutAuth;