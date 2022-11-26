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
import PropTypes from "prop-types";

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

const DashTable = (props) => {
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
          {props.customerData?.map((row) => (
            <StyledTableRow key={row.serialNumber}>
              <StyledTableCell align="center">
                {row.serialNumber}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.customerName}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.customerDOB}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.customerContactNumber}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.customerJoiningDate}
              </StyledTableCell>
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

DashTable.propTypes = {
  customerData: PropTypes.array,
};
