import React from "react";
import { LabelType, labels } from "./datamock";
import { Box, ClickAwayListener, Stack } from "@mui/material";
import { Button, StyledInput } from "./StyledComponent";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useTranslation } from "react-i18next";

type Props = {
    labels: LabelType[];
    searching?: string;
    message?: string;
    setState: React.Dispatch<React.SetStateAction<string>>
}
const SearchAutoComplete: React.FC<Props> = (props: Props) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const {t} = useTranslation("common")
    const [getLabel, setLabels] = React.useState<LabelType[]>([]);
    const [message,setMessage] = React.useState<string>(t("placeHolderCorporateSearch"))
    const [pendingValue, setPendingValue] = React.useState<LabelType>();
    const [value, setValue] = React.useState<LabelType>();
    const [valueSearch, setValueSearch] = React.useState<string>();
    const handleClick = (event: React.MouseEvent<HTMLElement>, label?: LabelType) => {
        setOpen(!open)
        if (label) {
            setPendingValue(label)
        }
    };
    const handleClose = () => {
        setValue(pendingValue);
    };
    React.useEffect(() => {
        if(valueSearch && valueSearch.length >= 4){
            setMessage("Searching")
            setLabels([])
            setTimeout(() => {
                setLabels(labels)
                setMessage("")
            },3*1000)
        }
        if(valueSearch && valueSearch.length < 4){
            setLabels([])
            setMessage(t("placeHolderCorporateSearch"))
        }
    },[t, valueSearch])
    return (
        <React.Fragment>
            <Stack>
                <Box sx={{ backgroundColor: "#fff", width: "100%", fontSize: "1rem", height: "calc(2.25rem + 3px)", border: '1px solid #ced4da', borderRadius: "5px", padding: ".375rem .75rem", color: "#495057", }}>
                    <Button sx={{
                        padding: "3px",
                        fontSize:{
                            md:"16px",
                            sm:"14px",
                            xs:"16px"
                        },
                        color: '#999', 
                        '&:hover': {
                            color: "#999"
                        },
                        '&:focus': {
                            color: "#999"
                        }
                    }} 
                    disableTouchRipple
                    disableRipple aria-describedby={'id'} onClick={handleClick}>
                        <span>{pendingValue?.name || t("corporateName")}</span>
                        {!open && <ArrowDropDownIcon  sx={{
                            '&.MuiSvgIcon-root':{
                                width: "25px",
                                height: "25px",
                            },
                            fontSize: "16px",
                            color:"#00a950",
                        }} />}
                    </Button>
                </Box>
                <Box >
                    <ClickAwayListener onClickAway={handleClose}>
                        <Box sx={{ display: open ? 'block' : 'none', border: "1px solid #ced4da", padding: "4px", backgroundColor: "#fff" }}>
                            <StyledInput
                                sx={{
                                    padding: "0"
                                }}
                                id="search"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    props.setState(e.target.value)
                                    setValueSearch(e.target.value)
                                }}
                                fullWidth
                            />
                            <Box component={"ul"} sx={{
                                paddingLeft:"0",
                                '& li::hover': {
                                    backgroundColor: "red !important",
                                }
                            }}>
                                {getLabel.map((item: LabelType) => {
                                    return (
                                        <Box
                                            onClick={(e: React.MouseEvent<HTMLElement>) => handleClick(e, item)}
                                            key={item.color + item.description + item.name} sx={{
                                                listStyle: "none",
                                                padding: "6px",
                                                color: "#212529",
                                                fontSize: "16px",
                                                cursor: "pointer",
                                                backgroundColor: "#fff",
                                                '&:hover': {
                                                    color: "#fff",
                                                    backgroundColor: "#00A950"
                                                }
                                            }} component={"li"}>
                                            {item.name}
                                        </Box>
                                    )
                                })}
                            </Box>
                            {
                                message
                                // props.message ? <Box sx={{ fontSize: "16px", maxHeight: "200px", padding: "6px", color: "#212529" }}>{props.message}</Box>
                                //     : props.searching === 'search'
                                //         ? (<Box sx={{ fontSize: "16px", maxHeight: "200px", padding: "6px", color: "#212529" }}>Searching</Box>)
                                //         : <Box sx={{ fontSize: "16px", maxHeight: "200px", padding: "6px", color: "#212529" }}>Please enter 4 or mor characters</Box>
                            }
                        </Box>
                    </ClickAwayListener>
                </Box>
            </Stack >

        </React.Fragment >
    );
}
export default SearchAutoComplete