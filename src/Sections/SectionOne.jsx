import React, { useEffect, useState } from "react";

export const SectionOne = () => {


    return (
      <section class="section one">
      <div class="nav">
          <div class="left-content">
              <img class="smalllogo" src="/logoimage.png" alt="Small Logo" />
          </div>
          <div class="center">
              <h1>WHAT</h1>
              <h1>HOW</h1>
              <h1>USE CASES</h1>
              <h1>AVAILABLE NOW</h1>
          </div>
          <div class="right-content">
              <h1>CONTACT</h1>
          </div>
      </div>
      <div class="headline-container">
          <div id="text-behind">UNLIMITED<br />POSSIBILITIES</div>
          <div id="text-behind-blur">UNLIMITED<br />POSSIBILITIES</div>
          <div id="text-front">UNLIMITED<br />POSSIBILITIES</div>
      </div>
  </section>
    )
}