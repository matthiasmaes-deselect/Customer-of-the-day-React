import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Customer OTD</title>
        <meta property="og:title" content="exported project" />
      </Helmet>
      <div className="page-title-name-of-customer">
        <div className="page-container1">
          <h1 className="page-text">HOME CHEF</h1>
          <h1 className="page-text01">DEAL OF THE DAY</h1>
        </div>
      </div>
      <div className="page-first-row-body">
        <div className="page-card-a-e">
          <div className="page-container2">
            <span className="page-text02">Zach Reinke</span>
            <span className="page-text03">ACCOUNT EXECUTIVE</span>
          </div>
        </div>
        <div className="page-card-c-s">
          <div className="page-container3">
            <span className="page-text04">Zandra Marquez</span>
            <span className="page-text05">ACCOUNT EXECUTIVE</span>
          </div>
        </div>
        <div className="page-card-e-x">
          <div className="page-container4">
            <span className="page-text06">
              <span>Anthony Lamot</span>
              <br></br>
            </span>
            <span className="page-text09">EXECUTIVE SPONSOR</span>
          </div>
        </div>
      </div>
      <div className="page-second-row-body">
        <div className="page-card-a-e1">
          <div className="page-container5"></div>
        </div>
        <div className="page-card-c-s1">
          <div className="page-container6">
            <span className="page-text10">€ 35,863.2</span>
            <span className="page-text11">ANNUAL CONTRACT VALUE</span>
            <span className="page-text12">Segment Plus</span>
            <span className="page-text13">PRODUCT</span>
            <span className="page-text14">November 2023</span>
            <span className="page-text15">Renewal Time</span>
          </div>
        </div>
      </div>
      <div className="page-container7">
        <img
          alt="image"
          src="/playground_assets/deselect%20logo%20color-200h.png"
          className="page-image"
        />
      </div>
    </div>
  )
}

export default Page
