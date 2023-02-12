import "./RentList.scss";
import React from "react";
import BathFilter from "./filters/BathFilter";
import BedFilter from "./filters/BedFilter";
import ChartsPanel from "./ChartsPanel";
import { useContext } from "react";
import { MarkerFilterContext } from "../providers/MarkerFilterProvider";
import { DataBaseContext } from "../providers/DataBaseProvider";
import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";
import {
  getCostFromPrices,
  getPhotoFromPrices,
} from "./helpers/getDataFromPrices";

const RentList = () => {
  const { state } = useContext(MarkerFilterContext);
  const { users, setUsers, properties, setProperties, prices, setPrices } = useContext(DataBaseContext);

  return (
    <div className="RentList">
      <div className="slider-container">
        <MultiRangeSlider style={{ height: "20px" }} />

        <BedFilter />

        <BathFilter />
      </div>
      <img
        src={
          prices && state.currentProperty.id
            ? getPhotoFromPrices(state.currentProperty, prices)
            : "https://s3.amazonaws.com/lws_lift/cressey/images/gallery/768/1405699411_201407_Cressey_VictoriaDr_H4_0004.jpg"
        }
        alt="Rent List"
        className="image"
      />

      {state.currentProperty.id && (
        <div className="info">
          <div className="BubbleDetail_priceContainer__Zfrap">
            <div className="price">
              $
              {prices
                ? getCostFromPrices(state.currentProperty, prices)
                : ""}
            </div>
            <div className="divider"></div>
          </div>
          <div className="col BubbleDetail_colAddress__37E3b">
            <h1 className="name">
              <a href="#0">Kingston Tower</a>
            </h1>
            <a className="undername" href="#0">
              {state.currentProperty.street_address},{" "}
            </a>
            <a
              className="BubbleDetail_cityState__1JOOk"
              href="/apartments/calgary-ab"
            >
              Calgary
            </a>
          </div>
        </div>
      )}

      {state.currentProperty.id && (
        <table>
          <thead>
            <tr>
              <th>Property Name</th>
              <th>Location</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{state.currentProperty.street_address}</td>
              <td>{state.currentProperty.street_address}</td>
              <td>
                $
                {prices
                  ? getCostFromPrices(state.currentProperty, prices)
                  : ""}
              </td>
            </tr>
          </tbody>
        </table>
      )}

      <ChartsPanel />
    </div>
  );
};

export default RentList;
