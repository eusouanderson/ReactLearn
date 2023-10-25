import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={900} >
            <img src="https://seeklogo.com/images/K/kotlin-logo-6A9E0484CA-seeklogo.com.png" alt="Kotlin Logo"></img>
            <img src="https://seeklogo.com/images/A/android-logo-0B5063C0CA-seeklogo.com.png" alt="Android Logo"></img>
            <img src="https://seeklogo.com/images/E/electron-software-logo-C231A437EA-seeklogo.com.png" alt="Electron Logo"></img>
            <img src="https://seeklogo.com/images/P/python-logo-AE8E0705F6-seeklogo.com.png" alt="Python Logo"></img>
            <img src="https://seeklogo.com/images/F/flask-logo-44C507ABB7-seeklogo.com.png" alt="Flask Logo"></img>
            <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="Node Logo"></img>
            <img src="https://seeklogo.com/images/N/npm-node-package-manager-logo-DE93649ED1-seeklogo.com.png" alt="NPM Logo"></img>
            <img src="https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png" alt="Vue Logo"></img>
            <img src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png" alt="Next Logo"></img>
            <img src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" alt="React Logo"></img>
            <img src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png" alt="Redux Logo"></img>
            <img src="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png" alt="Material UI Logo"></img>
            <img src="https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png" alt="Jest Logo"></img>
            <img src="https://seeklogo.com/images/G/gatsby-logo-1A245AD37F-seeklogo.com.png" alt="Gatsby Logo"></img>
            <img src="https://seeklogo.com/images/R/react-native-logo-221C671C70-seeklogo.com.png" alt="React Native Logo"></img>
            </Carousel>
        </div>
    
    )
};

export default Footer;