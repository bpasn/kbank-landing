import { AppBar, Box, IconButton, MenuItem, Select, SelectChangeEvent, Toolbar } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "@mui/material/Typography"
import cookies from 'js-cookie'
import i18next from 'i18next'
import { ListLi, ListUl } from '../Layout/auth/LayoutAuth';
import { useTranslation } from 'react-i18next';
type Props = {
  drawerWidth: number;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderComponent = (props: Props) => {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const { t } = useTranslation("common")
  const [lang, setLang] = React.useState<string>(currentLanguageCode);
  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value);
    i18next.changeLanguage(event.target.value)
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        height: "75px",
        backgroundColor: "#fff",
        color: "#000 !important",
        boxShadow: "none",
        borderBottom: "1px solid #CFD2D5 !important",
        width: { sm: `calc(100% - ${props.drawerWidth}px)` },
        ml: { sm: `${props.drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => props.setMobileOpen(!props.mobileOpen)}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box display="flex" justifyContent={"space-between"} sx={{
          flexGrow: "1",
          alignItems: "center"
        }}>
          <Box position={"relative"} width="100%" pl={"15px"} pr={"15px"} mr={"auto"} >
            <Typography variant='h3' sx={{
              fontSize: "21px",
              fontWeight: "bold",
              color: "#000",
              marginLeft: "25px",
              padding: "1.5rem",
              marginBottom: "0.5rem",
              marginTop: 0,
              lineHeight: 1.2
            }}>
              Corporate
            </Typography>
          </Box>
          <Box sx={{
            paddingLeft: "0.5rem",
            width: {
              lg:"30%",
              xl:"30%",
              md: "55%",
              sm: "65%",
              xs: "100%"
            },
            paddingTop: "1rem",
            paddingRight: "0.5rem"
          }}>
            <Box component={ListUl} sx={{
              alignItems: "center",
              '& li:not(:last-child):after': {
                content: {
                  md: '"|"',
                  sm: '""',
                },
                marginLeft: "12px",
                color: "#000"
              }
            }}>
              <ListLi style={{
                color: "#00a950"
              }}>
                {t("contract")}
              </ListLi>
              <ListLi>
                <Select
                  disableInjectingGlobalStyles
                  sx={{
                    height: "calc(2.25rem + 4px)",
                    width: 70,
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
                  <MenuItem value={'th'}>{t("th")}</MenuItem>
                  <MenuItem value={'en'}>{t("en")}</MenuItem>
                </Select>
              </ListLi>
              <ListLi style={{
                fontWeight: "100",
                fontSize: "16px",
                color: "#C5C5C5 !important"
              }}>
                Sign Out
              </ListLi>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderComponent;