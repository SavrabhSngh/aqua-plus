import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Divider } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, dob, mobile, sDate) {
  return { name, dob, mobile, sDate };
}

const rows = [
  createData("Saurabh Singh", "07/06/1999", 9026472660, "24/10/2022"),
  createData("Saurabh Singh", "07/06/1999", 9026472660, "24/10/2022"),
  createData("Saurabh Singh", "07/06/1999", 9026472660, "24/10/2022"),
  createData("Saurabh Singh", "07/06/1999", 9026472660, "24/10/2022"),
  createData("Saurabh Singh", "07/06/1999", 9026472660, "24/10/2022"),
  createData("Saurabh Singh", "07/06/1999", 9026472660, "24/10/2022"),
  createData("Saurabh Singh", "07/06/1999", 9026472660, "24/10/2022"),
  createData("Saurabh Singh", "07/06/1999", 9026472660, "24/10/2022"),
  createData("Saurabh Singh", "07/06/1999", 9026472660, "24/10/2022"),
  createData("Saurabh Singh", "07/06/1999", 9026472660, "24/10/2022"),
  createData("Saurabh Singh", "07/06/1999", 9026472660, "24/10/2022"),
  createData("Saurabh Singh", "07/06/1999", 9026472660, "24/10/2022"),
  createData("Saurabh Singh", "07/06/1999", 9026472660, "24/10/2022"),
  createData("Saurabh Singh", "07/06/1999", 9026472660, "24/10/2022"),
];

const DashTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Sr. No.</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">DOB</StyledTableCell>
            <StyledTableCell align="center">Mobile</StyledTableCell>
            <StyledTableCell align="center">Start Date</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center">{index + 1}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.dob}</StyledTableCell>
              <StyledTableCell align="center">{row.mobile}</StyledTableCell>
              <StyledTableCell align="center">{row.sDate}</StyledTableCell>
              <StyledTableCell align="center">
                <div className="action-buttons">
                  <i
                    style={{
                      color: "#22bb33",
                      fontSize: "18px",
                      marginRight: "10px",
                    }}
                    className="fas fa-user-edit"
                  ></i>
                  <i
                    style={{ color: "#800000", fontSize: "18px" }}
                    className="fas fa-trash"
                  ></i>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Divider />
    </TableContainer>
  );
};

export default DashTable;
