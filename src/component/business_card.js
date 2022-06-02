import React from "react";
import image from "../img/mqtech.jpeg"
export default function BsCard(){
    return (
        <main>
            <div className="card">
                <div className="card-head text-center">
                    <img src={image} className="card-img"></img>
                    <h2 className="card-owner-title">Muhammad Qasim</h2>
                    <h3 className="card-owner-position">Frontend Developer</h3>
                    <p className="card-ower-web m-0 my-2"><a href="https://mqtech25.github.io/portfolio/" className="card-ower-web-link">mqtech25.com</a></p>
                    <div className="card-contect-btns">
                        <a href="mailto:mqtech25@gmail.com" className="btn btn-light"><i class="fa-solid fa-envelope"></i> Email</a>
                        <a href="https://www.linkedin.com/in/mqtech/" className="btn btn-primary"><i class="fa-brands fa-linkedin"></i> Linkedin</a>
                    </div>
                </div>
                <div className="card-body">
                    <div className="about">
                        <h2>About</h2>
                        <p>Iʼm always energetic and eager to learn new skills and flexible in
                           my working hours, being able to work evenings and weekends.
                           Committed to learning and self-development so that I can
                           consistently achieve better results. Eventhough I take my work
                           seriously,I do have a good sense of humor</p>      
                    </div>
                    <div className="interest">
                        <h2>Interests</h2>
                        <p>Traveling, Movies, Gaming, Photography</p>      
                    </div> 
                </div>
                <div className="card-footer">
                    <ul className="social-media">
                        <li className="social-media-item">
                            <a href="https://www.facebook.com/mqtech25" className="btn btn-secondary social-media-item-link"><i class="fa-brands fa-facebook-f"></i></a>
                        </li>
                        <li className="social-media-item">
                            <a href="https://www.instagram.com/mqtech25/" className="btn btn-secondary social-media-item-link"><i class="fa-brands fa-instagram"></i></a>
                        </li>
                        <li className="social-media-item">
                            <a href="https://github.com/mqtech25" className="btn btn-secondary social-media-item-link"><i class="fa-brands fa-github"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}