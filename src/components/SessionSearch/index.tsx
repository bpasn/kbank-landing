import React from 'react'
import SearchAutoComplete from '../Autocomplete/SearchAutoComplete';
import { useTranslation } from 'react-i18next';
import { Button, Col, Row } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai'
import { Box } from '@mui/material';
type Props = {}

const SessionSearch = (props: Props) => {
    const { t } = useTranslation(["common"])
    const [value, setValue] = React.useState<string>('');
    return (
        <Box component={"div"}  className="py-2 border-bottom border-top" paddingBottom={"1.5rem !important"}>
            <Row md={5}>
                <Col xl={3} md={4} sm={6} xs={12}>
                    <div className="p-2">
                        <div className="form-group">
                            <label>{t("searchCorporate")}</label>
                            <SearchAutoComplete labels={[]} setState={setValue} />
                        </div>
                    </div>
                </Col>
                <Col xl={3} md={4} sm={6} xs={12}>
                    <div className="p-2">
                        <div className="form-group">
                            <label>{t("taxId")}</label>
                            <input type="text" id="tax_id" name="tax_id" placeholder="Tax ID" className="form-control" />
                        </div>
                    </div>
                </Col>
                <Col xl={3} md={4} sm={6} xs={12}>
                    <div className="p-2">
                        <div className="form-group">
                            <label htmlFor="status">{t("status")}</label>
                            <select className="form-control" id="status" name="status">
                                <option value="">{t("statusAll")}</option>
                                <option value="PENDING">{t("statusPending")}</option>
                                <option value="REJECT">{t("statusReject")}</option>
                            </select>
                        </div>
                    </div>
                </Col>
                <Col xl={3} md={4} sm={6} xs={12}>
                    <div className="ml-auto align-self-center"><br></br>
                        <Box component={Button} type="button" sx={{
                            display:"flex",
                            marginTop:"9px",
                            justifyContent:"center",
                            alignItems:"center",
                            gap:".2rem",
                            height: "calc(2.25rem + 3px)",
                            backgroundColor: "#00a950",
                            borderColor: "transparent",
                            borderRadius: "4px",
                            "&:hover": {
                                color: "#00a950",
                                backgroundColor: "#fff",
                                borderColor: "#00a950"

                            },

                            '&:active':{
                                color: "#00a950 !important",
                                backgroundColor: "#fff !important",
                                borderColor: "#00a950 !important"
                            }
                        }} className="btn-print" id="search">
                            <AiOutlineSearch />
                            <span>{t("btnSearch")}</span>
                        </Box>
                    </div>
                </Col>
            </Row>
            {/* <div className="d-flex flex-wrap justify-content-between mb-3">
                <div className="p-2 w-25">
                    <div className="form-group">
                        <label>{t("searchCorporate")}</label>
                        <SearchAutoComplete labels={[]} setState={setValue} />
                    </div>
                </div>
                <div className="p-2 w-25">
                    <div className="form-group">
                        <label>{t("taxId")}</label>
                        <input type="text" id="tax_id" name="tax_id" placeholder="Tax ID" className="form-control" />
                    </div>
                </div>

                <div className="p-2 w-25">
                    <div className="form-group">
                        <div className="ml-auto align-self-center"><br></br>
                            <Box component={Button} type="button" sx={{
                                backgroundColor: "#00a950",
                                borderColor: "transparent",
                                borderRadius: "4px",
                                "&:hover": {
                                    color: "#00a950",
                                    backgroundColor: "#fff",
                                    borderColor: "#00a950"

                                }
                            }} className="btn-print" id="search">
                                <AiOutlineSearch />
                                <span>{t("btnSearch")}</span>
                            </Box>
                        </div>
                    </div>
                </div>

                <div className="p-2">
                    <div className="ml-auto align-self-center"><br></br>
                        <Box component={Button} type="button" sx={{
                            backgroundColor: "#00a950",
                            borderColor: "transparent",
                            borderRadius: "4px",
                            "&:hover": {
                                color: "#00a950",
                                backgroundColor: "#fff",
                                borderColor: "#00a950"

                            }
                        }} className="btn-print" id="search">
                            <AiOutlineSearch />
                            <span>{t("btnSearch")}</span>
                        </Box>
                    </div>
                </div>

            </div> */}

        </Box>
    )
}

export default SessionSearch