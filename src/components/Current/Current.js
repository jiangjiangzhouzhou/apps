import React from "react";
import Text from "./components/Text";
import Meta from "./components/Meta";
import Temperature from "../Temperature";
import VerticalDivider from "../VerticalDivider";
import Styles from './Current.module.css';

const Current = ({weather}) => {

    return (
        <div className={Styles.current}>
          {weather && (
            <React.Fragment>
            <div className={Styles.left}>
              <div className={Styles.temperature}> 
                <Temperature>{weather.main.temp}</Temperature>
              </div>
              <div className={Styles.weather}>
               <Text> Cloudy </Text>
              </div>
              <div className={Styles.metas}>
                <div className={Styles.humidity}>
                  <Meta title="Humidity" value={`${weather.main.humidity}%`} />
                </div>
                <VerticalDivider width="2px" color="rgba(255, 255, 255, 0.7)"/>
                <div className={Styles.wind}>
                  <Meta title="Wind" value={`${weather.wind.speed} K/M`} />
                </div>
              </div>
            </div>
            <div className={Styles.right}>
              <h1 className={Styles.city}> {weather.name}</h1>
            </div>
            <div className={Styles.bottom} />
            </React.Fragment>
            )}
        </div>
    )

}

export default Current;