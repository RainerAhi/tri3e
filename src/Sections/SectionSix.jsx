import React from "react";

export const SectionSix = () => {
    return (
        <section className="section five" >

            <div className="five-layover" >

            <h1 className="talk" >TALK TO US</h1>

            <form id="contact-form" class="form-horizontal" role="form">
       
           <input type="text" class="form-control" id="name" placeholder="Name" name="name" value="" required />
 
           <input type="email" class="form-control" id="email" placeholder="Email address" name="email" value="" required />

           <input type="email" class="form-control" id="email" placeholder="Confirm email address" name="email" value="" required />

           <input type="email" class="form-control" id="email" placeholder="Phone number" name="email" value="" required />

           <input type="email" class="form-control" id="email" placeholder="City/State" name="email" value="" required />

           <input type="email" class="form-control" id="email" placeholder="How can we help you?" name="email" value="" required />
 
       
       <button class="send-button" id="submit" type="submit" value="SEND">
         <div class="alt-send-button">
           <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
         </div>
       
       </button>
       
     </form>

            </div>

        </section>
    )
}