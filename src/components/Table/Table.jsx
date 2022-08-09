import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";





export default function BasicTable(props) {
  const usersName = props.orders.map((order)=> {
    return props.users.find(user => user.user_id === order.user_id)
  }).map((user) => user?.name)
  const productsName = props.orders.map((order)=> {
    return props.products?.find(product => product.product_id === order.user_id)
  }).map((product) => product?.name)
  const recentOrders = props.orders
    .slice(0, 4)
    .map((order,i) => {
      return (
        
                <TableRow
                  key={order.order_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{order.order_id}</TableCell>
                  <TableCell align="left">{usersName[i]}</TableCell>
                  <TableCell align="left">{productsName[i]}</TableCell>
                  <TableCell align="left">{order.quantity}</TableCell>
                  <TableCell align="left">{new Date(parseInt(order.order_date)).toLocaleDateString("en-US")
}</TableCell>
                  
                  <TableCell align="left" className="Details">Details</TableCell>
                </TableRow>
        
      );
    });
  return (
      <div className="Table">
      <h3>Recent Orders</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              {<TableRow>
                <TableCell>S/N</TableCell>
                <TableCell align="left">Customers</TableCell>
                <TableCell align="left">Product bought</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>}
            </TableHead>
            <TableBody>
              {recentOrders}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
