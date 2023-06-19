import React from 'react'
import SessionSearch from '../../components/SessionSearch'
import DataTable from '../../components/Datatable/DataTable'
import {
  Col,
  Row
} from 'react-bootstrap'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

type Props = {}

const CorporateScreen = (props: Props) => {
  const { t } = useTranslation("common")
  return (
    <div id={"portal-body"}>
      <SessionSearch />

      <Row style={{
        marginBottom: "1.5rem"
      }}>
        <Col md={12}>
          <Box mt={4}>
            <Typography variant='h3'
              fontSize={21}
              fontWeight={"bold"}
              color="#000"
              marginLeft={"25px"}
              paddingLeft={"1.5rem"}
              paddingRight={"1.5rem"}
              paddingTop={"1.5rem"}>
              {t("corporate")}
            </Typography>
          </Box>
        </Col>
      </Row>
      <DataTable />

    </div>
  )
}

export default CorporateScreen