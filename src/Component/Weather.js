import React, { useState, useEffect } from "react";
import "./Weather.css";
import { FaStreetView } from "react-icons/fa";
import logo from "../Images/logo.png";
import Axios from "axios";

const Weather = () => {
  const API = "794a43714d5dd998fe092ca4db9e0261";
  const [city, setCity] = useState([]);
  const [search, setSearch] = useState("Dhaka");

  const onHandleChange = (e) => {
    setSearch(e.target.value);
    setCity(e.target.value);
  };

  useEffect(async () => {
    await getCity();
  }, [search]);

  const getCity = async () => {
    const result = await Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API}`
    );
    setCity(result.data.main);
  };

  // useEffect( ()=> {
  //     const fetchApi = async () =>{
  //         const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API}`
  //         const response = await fetch(url)
  //         const resJson = await response.json()
  //         setCity(resJson.main)
  //     }

  //     fetchApi()
  // }, [search])

  return (
    <>
      <div className="weather-section">
        <div className="container box">
          <div className="header">
            <form className="input-group">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search City"
                aria-label="Search"
                aria-describedby="search-addon"
                value={search}
                onChange={onHandleChange}
              />
            </form>
          </div>

          <div className="icon sun-shower">
            <div className="cloud"></div>
            <div className="sun">
              <div className="rays"></div>
            </div>
            <div className="rain"></div>
          </div>

          {!city ? (
            <p>No Data Found</p>
          ) : (
            <div>
              <div className="info">
                <h2 className="location">
                  <FaStreetView className="location-icon" />
                  {search}
                </h2>

                <h4 className="temp">{city.temp}° Celsius</h4>

                <h6 className="tempmin_max">
                  Min : {city.temp_min}° Cel | Max : {city.temp_max}° Cel
                </h6>
              </div>

              <div className="wave"></div>
              <div className="wave -two"></div>
              <div className="wave -three"></div>
              <div>
                <p className="footer-app">Developed By ❤️ Omar Faruk</p>
              </div>
            </div>
          )}
        </div>

        <div className="footer">
          <p className="last-footer">
            Copyright&copy;2020-2021 &nbsp;&nbsp;{" "}
            <img src={logo} className="footer-logo" /> &nbsp;&nbsp;{" "}
            <p className="bir-footer">বীর আবহাওয়া</p>&nbsp;|
            Developer.OmarFaruk
          </p>
        </div>
      </div>
    </>
  );
};

export default Weather;
