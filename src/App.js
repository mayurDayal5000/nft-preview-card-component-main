import React from "react";
import "normalize.css";
import "./App.css";

import equilibrium from "./images/image-equilibrium.jpg";
import profilePic from "./images/image-avatar.png";

export default function App() {
  return (
    <main id="container">
      <section className="card">
        <article className="equilibrium-box">
          <img src={equilibrium} />
          <div className="eye-icon">
            <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h48v48H0z" />
                <path
                  d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
                  fill="#FFF"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
          </div>
        </article>

        <article>
          <h2>Equilibrium #3429</h2>
          <p>Our Equilibrium collection promotes balance and calm.</p>
        </article>

        <ul>
          <li>
            <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                fill="#00FFF8"
              />
            </svg>

            <span className="etherum">0.041 ETH</span>
          </li>

          <li>
            <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                fill="#8BACD9"
              />
            </svg>

            <span className="clock">3 days left</span>
          </li>
        </ul>

        <hr></hr>

        <article className="profile-content">
          <img src={profilePic} alt="profile pic" />
          <h3>
            Creation of <span>Jules Wyvern</span>
          </h3>
        </article>
      </section>
      <section className="creator">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Mayur Dayal</a>.
      </section>
    </main>
  );
}
