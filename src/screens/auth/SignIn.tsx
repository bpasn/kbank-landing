import { Box, Grid } from '@mui/material'
import { ListLi, ListUl } from '../../components/Layout/auth/LayoutAuth'
import { Button } from 'react-bootstrap'
import HttpsIcon from '@mui/icons-material/Https';
import { useTranslation } from 'react-i18next'
import FormControllerCustom from '../../components/FormController';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
type Props = {}
interface ISignInRequest {
    username: string;
    password: string;
}
const SignIn = (props: Props) => {
    const { t } = useTranslation('auth_trans');
    const { register, handleSubmit, formState } = useForm<ISignInRequest>({
        mode: "onChange",
        defaultValues: {
            username: "",
            password: ""
        }
    })
    const onSubmit = (data: ISignInRequest) => {
        console.log(data)
    };
    return (
        <Box id="auth" display={"flex"} justifyContent={"center"} paddingBottom={"1rem"} paddingTop={"1rem"}>
            <Box display={"flex"} flexDirection={"column"}
                sx={{
                    maxWidth: {
                        md: "600px",
                        xs: "100%"
                    },
                    minWidth: {
                        md: "600px",
                        xs: "100%"
                    },
                    width: {
                        md: "600px",
                        xs: "100%"
                    },
                    padding: {
                        sm: "0px 10px",
                        xs: "0px 10px"
                    },
                }}>
                <Box sx={{
                    textAlign: "center !important"
                }}>
                    <ListUl style={{
                        textAlign: "center",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}>
                        <ListLi style={{
                            marginBottom: "1rem"
                        }}>
                            <Box display={"flex"} justifyContent="center">
                                <Box fontSize={24} paddingRight={2}>{t("welcome")}</Box>
                                <Box fontSize={24} color={"#54A452"}> e-Tax Invoice & e-Receipt</Box>
                            </Box>
                        </ListLi>
                        <ListLi>
                            <Box fontSize={18} marginBottom={".5rem"}>For Bank User</Box>
                        </ListLi>
                    </ListUl>
                </Box>
                <Box sx={{
                    backgroundColor: "#f8f9fa!important",
                    marginBottom: "1rem",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    minWidth: 0,
                    wordWrap: "break-word",
                    backgroundClip: "border-box",
                    border: "1px solid  rgb(0,0,0,.125)",
                    borderRadius: "0.25rem"
                }}>
                    {/* cardHead */}
                    <Box sx={{
                        background: "#DEDEDE !important",
                        borderRadius: "calc(.25rem - 1px) calc(.25rem - 1px) 0 0",
                        padding: "0.75rem 1.25rem",
                        paddingBottom: "0",
                        paddingTop: 0,
                        marginBottom: "0",
                        borderBottom: "1px solid rgba(0,0,0,.125)"
                    }}>
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <ListUl style={{ alignItems: "center" }}>
                                <ListLi>
                                    <HttpsIcon sx={{
                                        width: "31px",
                                        height: "31px"
                                    }} />
                                </ListLi>
                                <ListLi>
                                    <p style={{
                                        padding: "10px 0",
                                        margin: 0,
                                        fontSize: "24px"
                                    }}>Login Authentication</p>
                                </ListLi>
                            </ListUl>
                        </Box>
                    </Box>
                    {/* cardBody */}
                    <Box sx={{
                        padding: "1.25rem",
                        paddingLeft: "0.25rem",
                        paddingRight: "0.25rem",
                        backgroundColor: "#fff",
                    }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container>
                                <Grid item md={12} sm={12} xs={12} marginBottom={'1rem'}>
                                    <Grid container alignItems={"baseline"}>
                                        <Grid item sm={12} xs={12} md={4}>
                                            <Box component={"label"} sx={{
                                                textAlign: "start",
                                                paddingRight: "15px",
                                                paddingLeft: "15px",
                                                paddingTop: "calc(.375rem + 1px)",
                                                paddingBottom: "calc(.375rem + 1px)",
                                                marginBottom: "0",
                                                fontSize: "inherit",
                                                lineHeight: "1.5"
                                            }} htmlFor="" >{t("user_id")}</Box>
                                        </Grid>
                                        <Grid item sm={12} xs={12} md={8} paddingRight={"15px"}>
                                            <FormControllerCustom name={'username'}
                                                formState={formState}
                                                register={register}
                                                options={{
                                                    // minLength:{
                                                    //     value:5,
                                                    //     message:"Please enter 5 or more charactor"
                                                    // },
                                                    required: {
                                                        value: true,
                                                        message: t("error_userId_message")
                                                    },
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={12} sm={12} xs={12} marginBottom={'1rem'}>
                                    <Grid container alignItems={"baseline"}>
                                        <Grid item sm={12} xs={12} md={4}>
                                            <Box component={"label"} sx={{
                                                textAlign: "start",
                                                paddingRight: "15px",
                                                paddingLeft: "15px",
                                                paddingTop: "calc(.375rem + 1px)",
                                                paddingBottom: "calc(.375rem + 1px)",
                                                marginBottom: "0",
                                                fontSize: "inherit",
                                                lineHeight: "1.5"
                                            }} htmlFor="" >{t("password")}</Box>
                                        </Grid>
                                        <Grid item sm={12} xs={12} md={8} paddingRight={"15px"}>
                                            <FormControllerCustom name={'password'}
                                                formState={formState}
                                                register={register}
                                                options={{
                                                    required: {
                                                        value: true,
                                                        message: t("error_password_message")
                                                    },
                                                    minLength: {
                                                        value: 6,
                                                        message: "Password min 6 char"
                                                    },
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={12} sm={12} xs={12} marginBottom={'1rem'}>
                                    <Grid container alignItems={"baseline"}>
                                        <Grid item sm={12} xs={12} md={4}>
                                        </Grid>
                                        <Grid item sm={12} xs={12} md={8} paddingRight={"15px"}>
                                            <Button
                                                type='submit'
                                                style={{
                                                    background: '#54A452 !important',
                                                    color: '#fff !important',
                                                    borderRadius: '.25rem',
                                                    border: '1px solid #54A452',
                                                    padding: '.375rem .75rem',
                                                    transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out'
                                                }}
                                                variant="outline-success" className="btn btn-green-template text-capitalize" >LOG IN</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Box>
                <Box textAlign={"center"} sx={{
                    fontSize: "80%",
                    fontWeight: "400",
                    color: "#6c757d!important"
                }}>
                    <Link to={"#"} style={{

                        textDecoration: "none"
                    }}>
                        Reset Password
                    </Link>
                    <br />
                    Recommended for |
                    <Box component={"img"} width="30px" src="https://devkbankagent02.etaxsolution.com/assets/images/kbank/chrome.png" />
                    version 57.0 or above
                </Box>
            </Box>
            
        </Box>
    )
}

export default SignIn