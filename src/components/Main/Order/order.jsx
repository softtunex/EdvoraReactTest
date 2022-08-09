import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ReactPaginate from "react-paginate";

function Order(props) {
 
  return (
    <div>
        <h1>Order</h1>
        <div className="table">
    <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table className="tableBg" sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell align="left">Customers Name</TableCell>
                <TableCell align="left">Products</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Prices/unit</TableCell>
                <TableCell align="left">Total Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
              {props.displayOrders}
              </TableBody>
              </Table>
              </TableContainer>
              </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={props.pageCount}
        onPageChange={props.changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    
    </div>
  );
}

export default Order;
