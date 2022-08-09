import React from "react";
import Cards from "../Cards/Cards";
import RightSide from "../RigtSide/RightSide";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = (props) => {
  return (
    <div className="Dashboard">
    <div className="MainDash">
      <h1>Dashboard</h1>
      <div className="cardDash">
      <Cards products={props.products} orders={props.orders} totalSalesSum={props.totalSalesSum} totalQuantity={props.totalQuantity}/>
      </div>
      <div className="tableDash">
      <Table orders={props.orders} products={props.products} users={props.users}/>
      </div>

      </div>
      <RightSide users={props.users}/>
    </div>
  );
};

export default MainDash;
