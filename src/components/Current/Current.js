import React from "react";
import Text from "./components/Text";
import Meta from "./components/Meta";
import Temperature from "../Temperature";
import VerticalDivider from "../VerticalDivider";
import Styles from './Current.module.css';

const Current = () => {
    return (
        <div className={Styles.current}>
            <div className={Styles.left}>
              <div className={Styles.temperature}> 
                <Temperature>12</Temperature>
              </div>
              <div className={Styles.weather}>
               <Text> Cloudy </Text>
              </div>
              <div className={Styles.metas}>
                <div className={Styles.humidity}>
                  <Meta title="Humidity" value="80%" />
                </div>
                <VerticalDivider width="2px" color="rgba(255, 255, 255, 0.7)"/>
                <div className={Styles.wind}>
                  <Meta title="Wind" value="10 K/M" />
                </div>
              </div>
            </div>
            <div className={Styles.right}>
              <h1 className={Styles.city}> France</h1>
            </div>
            <div className={Styles.bottom} />
        </div>
    )
}

export default Current;