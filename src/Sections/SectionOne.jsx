import React, { useEffect, useState } from "react";

export const SectionOne = () => {


    return (
      <section class="section one">
      <div class="nav">
          <div class="left-content">
              <img class="smalllogo" src="/smalllogo.png" alt="Small Logo" />
          </div>
          <div class="center">
              <h1>ABOUT</h1>
              <h1>REVIEWS</h1>
              <h1>FAQS</h1>
              <h1>TALK TO US</h1>
          </div>
          <div class="right-content">
              <h1>SHOP</h1>
          </div>
      </div>
      <div class="headline-container">
          <div id="text-behind">CONNECTED<br />FANDOM</div>
          <div id="text-behind-blur">CONNECTED<br />FANDOM</div>
          <div id="text-front">CONNECTED<br />FANDOM</div>
      </div>
      <div class="centerbutton">
          <div class="joinbutton">
              <h1>Say hello to the next generation, community, loyalty & reward experience.</h1>
          </div>
      </div>
  </section>
    )
}