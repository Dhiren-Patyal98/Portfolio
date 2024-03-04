
import style from "./CSS/Text.module.css"
export default function Skills() {
    return (
        <div>
            <div className="container px-4 " id="featured-3">
                <h1 className="pb-2 border-bottom">Skills</h1>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className={`feature col ${style.leftsec}`}  >
                        <div className={`card  bg-body-tertiary  ${style.card}`}>

                            <div className="card-body  ">



                                <h3 className="fs-2 text-body-emphasis py-2 ">Frontend
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="41"
                                        height="41"
                                        fill="currentColor"
                                        className="bi bi-file-code-fill pb-1 px-2"
                                        viewBox="0 0 16 16">
                                        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 1 1 .708-.708" />
                                    </svg>
                                </h3>
                                <p>
                                    <div className="row">
                                        <div className="col-6">
                                            <ul >

                                                <li>React</li>
                                                <li>HTML5</li>
                                                <li>JavaScript</li>
                                            </ul>
                                        </div>
                                        <div className="col-6">
                                            <ul>
                                                <li>Flutter</li>
                                                <li>CSS</li>
                                            </ul>

                                        </div>


                                    </div>
                                </p>



                            </div>
                        </div>
                    </div>
                    <div className={`feature col ${style.middlesec}`}>
                        <div className={`card  bg-body-tertiary  ${style.card}`}>
                            <div className="card-body">

                                <div>
                                    <h3 className="fs-2 text-body-emphasis py-2 ">Database
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="36"
                                            height="32"
                                            fill="currentColor"
                                            className="bi bi-database-fill pb-1"
                                            viewBox="0 0 16 16">
                                            <path d="M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223" />
                                            <path d="M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972" />
                                            <path d="M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972" />
                                            <path d="M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972" />
                                        </svg>
                                    </h3>
                                    <p>
                                        <ul>
                                            <li>MongoDB</li>
                                            <li>MySQL</li>
                                        </ul>

                                    </p>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`feature col ${style.rightsec}`}>
                        <div className={`card bg-body-tertiary ${style.card}`}>
                            <div className="card-body ">

                                <div>
                                    <h3 className=" fs-2 text-body-emphasis py-2 ">Backend
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="41"
                                            height="41"
                                            fill="currentColor"
                                            className="bi bi-file-code-fill pb-1 px-2"
                                            viewBox="0 0 16 16">
                                            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 1 1 .708-.708" />
                                        </svg>
                                    </h3>



                                    <p>
                                        <div className="row">
                                            <div className="col-6">
                                                <ul >

                                                    <li>Node.js</li>
                                                    <li>Express</li>
                                                    <li>Java</li>
                                                </ul>
                                            </div>
                                            <div className="col-6">
                                                <ul>
                                                    <li>Python</li>
                                                    <li>C++</li>
                                                    <li>C</li>
                                                </ul>

                                            </div>


                                        </div>
                                    </p>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

