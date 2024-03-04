
import style from "./CSS/Text.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Qualification() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:2000
    };
    return (
        <div>
            <div className="container px-4 py-2" id="hanging-icons">
                <h1 className="pb-2 border-bottom">Qualifications</h1>

                <div className="px-5 mb-4 rounded-3">

                    <div className="container-fluid py-5">

                        <div className="row g-4 py-3 row-cols-1 row-cols">
                            <Slider {...settings}>
                                <div className="feature col">

                                    <div className={`card bg-body-tertiary ${style.cardd}`}>
                                        <div className="card-body  ">
                                            <h3 className="fs-2 text-body-emphasis">10th</h3>

                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="#032c62"
                                                className="bi bi-calendar"
                                                viewBox="0 0 16 16">
                                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                            </svg>
                                            <span className="px-4    px-2 fw-bold">
                                                2015
                                            </span>
                                            <p className={`${style.text1}`}>

                                                From Indian Certificate of Secondary Education
                                                <br></br>
                                                Marks obtained 72%
                                            </p>
                                        </div>
                                    </div>

                                </div>


                                <div className="feature col">

                                    <div className={`card bg-body-tertiary ${style.cardd}`}>
                                        <div className="card-body ">
                                            <h3 className="fs-2 text-body-emphasis">12th</h3>

                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="#032c62"
                                                className="bi bi-calendar"
                                                viewBox="0 0 16 16">
                                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                            </svg>
                                            <span className="px-4    px-2 fw-bold">
                                                2018
                                            </span>
                                            <p className={`${style.text1}`}>

                                                From Punjab State Education Board
                                                <br></br>
                                                Marks obtained 64%
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <div className="feature col">



                                    <div className={`card bg-body-tertiary ${style.cardd}`}>
                                        <div className="card-body ">
                                            <h3 className="fs-2 text-body-emphasis">BCA</h3>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="#032c62"
                                                className="bi bi-calendar"
                                                viewBox="0 0 16 16">
                                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                            </svg>
                                            <span className="px-4    px-2 fw-bold">
                                                2021
                                            </span>
                                            <p className={`${style.text1}`}>


                                                From  DAV College Affiliated to Guru Nanak Dev University
                                                <br></br>
                                                Marks obtained 68%
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <div className="feature col">


                                    <div className={`card bg-body-tertiary ${style.cardd}`}>
                                        <div className="card-body ">
                                            <h3 className="fs-2 text-body-emphasis">MCA</h3>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="#032c62"
                                                className="bi bi-calendar"
                                                viewBox="0 0 16 16">
                                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                            </svg>
                                            <span className="px-4    px-2 fw-bold">
                                                2024
                                            </span>
                                            <p className={`${style.text1}`}>

                                                From  Guru Nanak Dev University
                                                <br></br>
                                                Marks obtained 70%</p>
                                        </div>
                                    </div>

                                </div>
                            </Slider>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}
