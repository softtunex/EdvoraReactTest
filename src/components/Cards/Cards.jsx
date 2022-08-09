import React from "react";
import "./Cards.css";
import Card from "../Card/Card";
import { UilUsdSquare, UilMoneyWithdrawal,UilClipboardAlt } from "@iconscout/react-unicons";


const Cards = (props) => {
  const sum = props.products.map(sum=>sum.selling_price).reduce((partialSum, a) => partialSum + a, 0);
  
  return (
    <div className="Cards">
     
          <div className="parentContainer">
            <Card
              title="Total Products price"
              color={{
                backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
                boxShadow: "0px 10px 20px 0px #e0c6f5",
              }}
              barValue={70}
              value={`$${sum}`}
              png={UilUsdSquare}
              series={[{
                name: "Total Products price",
                data: [31, 40, 28, 51, 42, 109, 100],
              }]}
            />
            <Card
              title="Total Sales"
              color={{
                backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
                boxShadow: "0px 10px 20px 0px #FDC0C7",
              }}
              barValue={80}
              value={`$${props.totalSalesSum}`}
              png={UilMoneyWithdrawal}
              series={[
                {
                  name: "Total Sales",
                  data: [10, 100, 50, 70, 80, 30, 40],
                },
              ]}
            />
            <Card
              title="Total Quantity Ordered"
              color={{
                backGround:
                  "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
                boxShadow: "0px 10px 20px 0px #F9D59B",
              }}
              barValue={60}
              value={props.totalQuantity}
              png={UilClipboardAlt}
              series={[
                {
                  name: "Total Quantity Ordered",
                  data: [10, 25, 15, 30, 12, 15, 20],
                },
              ]}
            />
          </div>
    </div>
  );
};

export default Cards;
