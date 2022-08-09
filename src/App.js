import React, { useState,useEffect }  from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from "./components/Sidebar/sidebar";
import Products from "./components/Main/Product/product";
import Order from "./components/Main/Order/order"
import Customer from "./components/Main/Customer/customer"
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Profile from "./imgs/profile.png"


function App() {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(()=>{
    fetch("https://assessment.api.vweb.app/orders")
        .then(res=>res.json())
        .then(data=>setOrders(data))
},[])
  useEffect(()=>{
    fetch("https://assessment.api.vweb.app/users")
        .then(res=>res.json())
        .then(data=>setUsers(data))
},[])
  useEffect(()=>{
    fetch("https://assessment.api.vweb.app/products")
        .then(res=>res.json())
        .then(data=>setProducts(data))
},[])
  const PagePerPage = 10;
  const pagesVisited = pageNumber * PagePerPage;  

  const usersName = orders.map((order)=> {
    return users.find(user => user.user_id === order.user_id)
  }).map((user) => user?.name)
  const productsName = orders.map((order)=> {
    return products.find(product => product.product_id === order.user_id)
  }).map((product) => (product?.name))
  const productsPrice = orders.map((order)=> {
    return products.find(product => product.product_id === order.user_id)
  }).map((product) => (product?.selling_price))
  const totalSales = orders.map((order,i)=>order.quantity * productsPrice[i + pagesVisited])
  const totalSalesSum = totalSales.map(sum=>sum).reduce((partialSum, a) => partialSum + a, 0)
  const totalQuantity = orders.map(sum=>sum.quantity).reduce((partialSum, a) => partialSum + a, 0)

  const displayOrders = orders
    .slice(pagesVisited, pagesVisited + PagePerPage)
    .map((order,i) => {
      return (
        
                <TableRow
                  key={order.order_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{order.order_id}</TableCell>
                  <TableCell align="left">{usersName[i + pagesVisited]}</TableCell>
                  <TableCell align="left">{productsName[i + pagesVisited]}</TableCell>
                  <TableCell align="left">{new Date(parseInt(order.order_date)).toLocaleDateString("en-US")
}</TableCell>
                  <TableCell align="left">{order.quantity}</TableCell>
                  <TableCell align="left">${productsPrice[i + pagesVisited]}</TableCell>
                  <TableCell align="left">${order.quantity * productsPrice[i + pagesVisited]}</TableCell>

                </TableRow>
        
      );
    });
  const displayUsers = users
    .slice(pagesVisited, pagesVisited + PagePerPage)
    .map((user) => {
      return (
          <TableRow
                  key={user.user_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{user.user_id}</TableCell>
                  <TableCell align="left">{<img src={Profile} className="profile" alt="profile" />}</TableCell>

                  <TableCell align="left">{user.name}</TableCell>
                </TableRow>
      );
    });

    
  const displayProducts = products
    .slice(pagesVisited, pagesVisited + PagePerPage)
    .map((product) => {
      return (
        
          <TableRow
                  key={product.product_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{product.product_id}</TableCell>
                  <TableCell align="left">{product.name}</TableCell>
                  <TableCell align="left">{product.stock}</TableCell>
                  <TableCell align="left">${product.selling_price}</TableCell>
                </TableRow>
      );
    });

  const ordersPageCount = Math.ceil(orders.length / PagePerPage);
  const usersPageCount = Math.ceil(users.length / PagePerPage);
  const productsPageCount = Math.ceil(products.length / PagePerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return ( 
    <div className="App">
      <div className='AppGlass'>
      <Router>
    <Sidebar/>
    <Routes>
      <Route path="/" element={<MainDash users={users} products={products} orders={orders} totalSalesSum={totalSalesSum} totalQuantity={totalQuantity}/>} />
          <Route path="/orders" element={<Order displayOrders={displayOrders} pageCount={ordersPageCount} changePage={changePage} />} />
          <Route path="/customers" element={<Customer displayUsers={displayUsers} pageCount={usersPageCount} changePage={changePage} />} />
          <Route path="/product" element={<Products displayProducts={displayProducts} pageCount={productsPageCount} changePage={changePage}/>} />
        </Routes>
      </Router>
      
      </div>
    </div>
  );
}

export default App;
