import React, { useEffect } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { DatatableWrapper, PaginationOptions, TableBody, TableColumnType, TableHeader, Pagination} from 'react-bs-datatable'
import { useTranslation } from 'react-i18next'
import { body } from "./data";
import { Box, Typography } from '@mui/material';
import { ColumnsCorporate } from '../../TableColumnTypes/ColumnCorporate';
type Props = {}
type ArrayElementType = typeof body[number] & {
  button: any;

};

const STORY_BODY = body as ArrayElementType[];

const DataTable = (props: Props) => {
  const [rowPerPage, setRowPerPage] = React.useState<number>(10);
  const { t } = useTranslation("datatable")

  const STORY_HEADERS: TableColumnType<ArrayElementType>[] = ColumnsCorporate(t)
  return (
    <DatatableWrapper
      body={STORY_BODY}
      headers={STORY_HEADERS}
      paginationOptionsProps={{
        initialState: {
          rowsPerPage: rowPerPage,
          options: [5, 10, 15, 20]
        },

      }}
    >
      <Table style={{
        borderCollapse: "separate",
        borderSpacing: "0px 15px"

      }}>
        <TableHeader classes={{
          th: "bg-none",

        }} />
        {!STORY_BODY.length ? <Box component={"tbody"}>
          <Box component={"tr"} className='tbody-tr text-center bg-white p-5'>
            <Box component={"td"} colSpan={6}>
              <Box component={"div"} padding={"20px !important"}>
                No results to be shown
              </Box>
            </Box>
          </Box>
        </Box>
          : <Box component={TableBody}
            classes={{
              tr: "simple-table"
            }}
            sx={{
              '& tr': {
                border: "5px solid red !important"
              }
            }} />}
      </Table>
      <Row className="mb-4 p-2">
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-start align-items-end justify-content-sm-start"
        >
          Showing {body.length ? 1 : 0} to {body.length > rowPerPage ? rowPerPage : body.length} of {body.length}
        </Col>
        <Box component={Col}
          xs={12}
          sm={6}
          lg={4}
          sx={{
            '& button': {
              backgroundColor: "transparent !important",
              background: "transparent !important",
              border: "transparent !important",
              color: "#6c757d !important"
            }
          }}
          className="d-flex flex-col justify-content-center justify-content-lg-center align-items-end justify-content-sm-start"
        >
          <Pagination />
        </Box>
        <Box component={Col}
          sx={{
            '& select': {
              width: "auto !important",
              backgroundImage: "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org…3343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e) no-repeat right .75rem center/8px 10px !important"
            },
            '& .paginationOpts__root': {
              display: "flex !important",
              flexGrow: '0.25rem !important',
              gap: "10px !important",
              alignItems: "baseline !important",
              justifyContent: "end !important",

              '& small.form-text': {
                color: "#000 !important",
                fontWeight: "normal",
                whiteSpace: "nowrap",
                fontSize: "16px"
              }
            }
          }}
          xs={12}
          sm={6}
          lg={4}
          className=" gap-1 d-flex flex-col justify-content-lg-end align-items-center justify-content-sm-start mb-2 mb-sm-0"
        >
          <PaginationOptions
            labels={{
              beforeSelect: "Show",
              afterSelect: "entries"
            }}
          />
          <Typography variant="body1"></Typography>
        </Box>
      </Row>
    </DatatableWrapper>
  )
}

export default DataTable