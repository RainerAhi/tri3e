import React, { useEffect, useState } from "react";

export const SectionOne = () => {


    return (
        <section className="section one">
            <div className="nav">
                <div className="left-content">
                    <img className="smalllogo" src="/smalllogo.png" />
                </div>
                <div className="center" >
                  <h1>ABOUT</h1>
                  <h1>REVIEWS</h1>
                  <h1>FAQS</h1>
                  <h1>TALK TO US</h1>
                </div>
                <div className="right-content">
                  <h1>SHOP</h1>
                </div>
            </div  >
            <div class="headline-container">
                <div id="text-behind">CONNECTED<br />FANDOM</div>
                <div id="text-behind-blur">CONNECTED<br />FANDOM</div>
                <div id="text-front">CONNECTED<br />FANDOM</div>
            </div>
            <div className="centerbutton" >
              <div className="joinbutton" >
                <h1>Say hello to the next generation, community, loyalty & reward experience.</h1>
              </div>
            </div>
        </section>
    )
}