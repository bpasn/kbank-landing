import { TFunction } from "i18next";
import { Button } from "react-bootstrap";
import { TableColumnType } from "react-bs-datatable";
type ArrayElementType = {
    button: any;
    "name": string,
    "username": string,
    "date": string,
    "score": number,
    "location": string
};
export const ColumnsCorporate = (translace: TFunction<string, undefined>): TableColumnType<ArrayElementType>[] => {
    return [
        {
            prop: "name",
            title: translace("batchName"),
            isFilterable: false,
            cellProps: {
                style: {
                    minWidth: "250px"
                }
            },
            alignment: {
                horizontal: "center"
            }
        },
        {
            prop: "username",
            title: translace("totalFiles"),
            alignment: {
                horizontal: "center"
            }
        },
        {
            prop: "location",
            title: translace("totalAmount"),
            alignment: {
                horizontal: "center"
            }
        },
        {
            prop: "date",
            title: translace("jobType"),
            alignment: {
                horizontal: "center"
            }
        },
        {
            prop: "score",
            title: translace("date"),
            isSortable: false,
            alignment: {
                horizontal: "center"
            }
        },

        {
            prop: "button",
            title: translace("detail"),
            cell: (row) => (
                <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => {
                        alert(`${row.username}'s score is ${row.score}`);
                    }}
                >
                    Click me
                </Button>
            )
        }
    ]
}