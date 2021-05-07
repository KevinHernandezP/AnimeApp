import React from "react";
import './Home.css';
import imagen from "./components/anime.jpg";
const Home = () => {

    return (
        <div className="">

            <section class="section mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div>
                            <img src={imagen} className="imagen"/>      
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-5  d-flex align-items-center mt-4 mt-md-0 p-5 mover">
                            <div>
                                <h2 className="text-white fw-bold">Naruto</h2>
                                <p className="margin-top-s text-left">Whether you’re a full stack web developer, content author, or business professional –you’re a full stack web developer, you’re a full stack web developer,  you’re a full stack web developer, Solodev gives you the power to build, customize, and manage modules to boost your website.</p>
                                <button className="btn  btn-warning">Watch Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





        </div>
    );
}

export default Home;
