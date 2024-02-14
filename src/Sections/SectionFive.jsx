import React from "react";

export const SectionFive = () => {
    return (
        <section className="section five" >

            <div className="five-layover" >

            <h1 className="reviews" >REVIEWS</h1>
            <img className="face" src="/face.png" />
            <p className="reviewone" >"The community you didn't know you need to be in"</p>

            <h1 className="faq" >FACTS & ANSWERS</h1>

            <p className="question" >Do you need an APP?</p>
            <p className="answer" >To get started, you'll need to install the Berify app from your device's app store. Once installed, sign up for an account and log in.</p>

            <p className="question qcenter" >How does it work?</p>
            <p className="answer acenter" >Unlock your cellphone. Hold your mobile to the object integrated with the Near Field Communication and you will be redirected to the channel.</p>

            <p className="question" >Do I have to be connected to the internet?</p>
            <p className="answer" >You need a stable connection for better results.</p>

            </div>

        </section>
    )
}