
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "../pages/CSS/Text.module.css"
import Navbar from "./Navbar";
export default function Projectss() {

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
    <div key = '1'>
        <div className="container px-4 " id="featured-3">
                <h1 className="pb-2 pt-4 border-bottom">Projects</h1>
            <div className="row mt-5">
            <Slider {...settings}>
                
                <div className="col">

                    <div className={`card ${style.projectBox}`}>
                        <div className="card-body">
                            <div className="card-title">
                                <div className="row">
                                    <div className="col">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-folder" viewBox="0 0 16 16">
                                            <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />


                                        </svg>
                                    </div>
                                    <div className="col">
                                        <div style={{ display: "flex", justifyContent: "end" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>


                                <h3>Spotify Clone</h3>
                                <div className="card-text">
                                A music player which allows user to play songs and get details of
                                 songs similar to Spotify. 
                                </div>
                                <div className="row mt-5 " style={{ display: "flex", justifyContent: "center" }}>
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="30"
                                                    height="30"
                                                    fill="currentColor"
                                                    className="bi bi-filetype-html"
                                                    viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="30"
                                                    height="30"
                                                    fill="currentColor"
                                                    className="bi bi-filetype-html"
                                                    viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="30"
                                                    height="30"
                                                    fill="currentColor"
                                                    className="bi bi-filetype-js"
                                                    viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H8v-1h4a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.186 15.29a1.2 1.2 0 0 1-.111-.449h.765a.58.58 0 0 0 .255.384q.105.073.249.114.143.041.319.041.246 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.153-.326q-.151-.12-.462-.193l-.619-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.528-.422.336-.15.776-.149.457 0 .78.152.324.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.247-.181.9.9 0 0 0-.369-.068q-.325 0-.513.152a.47.47 0 0 0-.184.384q0 .18.143.3a1 1 0 0 0 .405.175l.62.143q.327.075.566.211.24.136.375.358t.135.56q0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375m-3.104-.033A1.3 1.3 0 0 1 0 14.791h.765a.6.6 0 0 0 .073.27.5.5 0 0 0 .454.246q.285 0 .422-.164.138-.165.138-.466v-2.745h.79v2.725q0 .66-.357 1.005-.354.345-.984.345a1.6 1.6 0 0 1-.569-.094 1.15 1.15 0 0 1-.407-.266 1.1 1.1 0 0 1-.243-.39" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="30"
                                                    height="30"
                                                    fill="currentColor"
                                                    className="bi bi-filetype-jsx"
                                                    viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.075 14.841a1.13 1.13 0 0 0 .401.823q.194.162.478.252.284.091.665.091.507 0 .858-.158.355-.158.54-.44a1.17 1.17 0 0 0 .187-.656q0-.336-.135-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.565-.21l-.621-.144a1 1 0 0 1-.405-.176.37.37 0 0 1-.143-.299q0-.234.184-.384.188-.152.513-.152.214 0 .37.068a.6.6 0 0 1 .245.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.199-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.44 0-.776.15-.337.149-.528.421-.19.273-.19.639 0 .302.123.524t.351.367q.229.143.54.213l.618.144q.31.073.462.193a.39.39 0 0 1 .153.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.176 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM0 14.791q0 .247.082.466.083.22.243.39.165.17.407.267.246.093.569.093.63 0 .984-.346.357-.345.358-1.004v-2.725h-.791v2.745q0 .302-.138.466t-.422.164a.5.5 0 0 1-.454-.246.6.6 0 0 1-.073-.27zm8.907-2.859H9.8l-1.274 2.007L9.78 15.93h-.908l-.85-1.415h-.035l-.853 1.415h-.861l1.24-2.016-1.228-1.983h.931l.832 1.438h.036l.823-1.438Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>
                <div className="col">
                <div className={`card ${style.projectBox}`}>
                        <div className="card-body">
                            <div className="card-title">
                                <div className="row">
                                    <div className="col">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-folder" viewBox="0 0 16 16">
                                            <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />


                                        </svg>
                                    </div>
                                    <div className="col">
                                        <div style={{ display: "flex", justifyContent: "end" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>


                                <h3>Netflix Clone</h3>
                                <div className="card-text">
                                A web-application that allows developers to create and deploy a
video-on-demand platform similar to Netflix.
                                </div>
                                <div className="row mt-4 " style={{ display: "flex", justifyContent: "center" }}>
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="30"
                                                    height="30"
                                                    fill="currentColor"
                                                    className="bi bi-filetype-html"
                                                    viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="30"
                                                    height="30"
                                                    fill="currentColor"
                                                    className="bi bi-filetype-html"
                                                    viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="30"
                                                    height="30"
                                                    fill="currentColor"
                                                    className="bi bi-filetype-js"
                                                    viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H8v-1h4a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.186 15.29a1.2 1.2 0 0 1-.111-.449h.765a.58.58 0 0 0 .255.384q.105.073.249.114.143.041.319.041.246 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.153-.326q-.151-.12-.462-.193l-.619-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.528-.422.336-.15.776-.149.457 0 .78.152.324.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.247-.181.9.9 0 0 0-.369-.068q-.325 0-.513.152a.47.47 0 0 0-.184.384q0 .18.143.3a1 1 0 0 0 .405.175l.62.143q.327.075.566.211.24.136.375.358t.135.56q0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375m-3.104-.033A1.3 1.3 0 0 1 0 14.791h.765a.6.6 0 0 0 .073.27.5.5 0 0 0 .454.246q.285 0 .422-.164.138-.165.138-.466v-2.745h.79v2.725q0 .66-.357 1.005-.354.345-.984.345a1.6 1.6 0 0 1-.569-.094 1.15 1.15 0 0 1-.407-.266 1.1 1.1 0 0 1-.243-.39" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="30"
                                                    height="30"
                                                    fill="currentColor"
                                                    className="bi bi-filetype-jsx"
                                                    viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.075 14.841a1.13 1.13 0 0 0 .401.823q.194.162.478.252.284.091.665.091.507 0 .858-.158.355-.158.54-.44a1.17 1.17 0 0 0 .187-.656q0-.336-.135-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.565-.21l-.621-.144a1 1 0 0 1-.405-.176.37.37 0 0 1-.143-.299q0-.234.184-.384.188-.152.513-.152.214 0 .37.068a.6.6 0 0 1 .245.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.199-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.44 0-.776.15-.337.149-.528.421-.19.273-.19.639 0 .302.123.524t.351.367q.229.143.54.213l.618.144q.31.073.462.193a.39.39 0 0 1 .153.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.176 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM0 14.791q0 .247.082.466.083.22.243.39.165.17.407.267.246.093.569.093.63 0 .984-.346.357-.345.358-1.004v-2.725h-.791v2.745q0 .302-.138.466t-.422.164a.5.5 0 0 1-.454-.246.6.6 0 0 1-.073-.27zm8.907-2.859H9.8l-1.274 2.007L9.78 15.93h-.908l-.85-1.415h-.035l-.853 1.415h-.861l1.24-2.016-1.228-1.983h.931l.832 1.438h.036l.823-1.438Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col">

<div className={`card ${style.projectBox}`}>
    <div className="card-body">
        <div className="card-title">
            <div className="row">
                <div className="col">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-folder" viewBox="0 0 16 16">
                        <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139q.323-.119.684-.12h5.396z" />


                    </svg>
                </div>
                <div className="col">
                    <div style={{ display: "flex", justifyContent: "end" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                    </div>
                </div>
            </div>


            <h3>Learning Management </h3>
            <div className="card-text">
            A software which can be used for e-learning with range of
tutorials and quizes on various subjets and grades.
            </div>
            <div className="row mt-4 " style={{ display: "flex", justifyContent: "center" }}>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-filetype-html"
                                viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-filetype-html"
                                viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-filetype-js"
                                viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H8v-1h4a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.186 15.29a1.2 1.2 0 0 1-.111-.449h.765a.58.58 0 0 0 .255.384q.105.073.249.114.143.041.319.041.246 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.153-.326q-.151-.12-.462-.193l-.619-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.528-.422.336-.15.776-.149.457 0 .78.152.324.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.247-.181.9.9 0 0 0-.369-.068q-.325 0-.513.152a.47.47 0 0 0-.184.384q0 .18.143.3a1 1 0 0 0 .405.175l.62.143q.327.075.566.211.24.136.375.358t.135.56q0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375m-3.104-.033A1.3 1.3 0 0 1 0 14.791h.765a.6.6 0 0 0 .073.27.5.5 0 0 0 .454.246q.285 0 .422-.164.138-.165.138-.466v-2.745h.79v2.725q0 .66-.357 1.005-.354.345-.984.345a1.6 1.6 0 0 1-.569-.094 1.15 1.15 0 0 1-.407-.266 1.1 1.1 0 0 1-.243-.39" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-filetype-jsx"
                                viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.075 14.841a1.13 1.13 0 0 0 .401.823q.194.162.478.252.284.091.665.091.507 0 .858-.158.355-.158.54-.44a1.17 1.17 0 0 0 .187-.656q0-.336-.135-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.565-.21l-.621-.144a1 1 0 0 1-.405-.176.37.37 0 0 1-.143-.299q0-.234.184-.384.188-.152.513-.152.214 0 .37.068a.6.6 0 0 1 .245.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.199-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.44 0-.776.15-.337.149-.528.421-.19.273-.19.639 0 .302.123.524t.351.367q.229.143.54.213l.618.144q.31.073.462.193a.39.39 0 0 1 .153.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.176 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM0 14.791q0 .247.082.466.083.22.243.39.165.17.407.267.246.093.569.093.63 0 .984-.346.357-.345.358-1.004v-2.725h-.791v2.745q0 .302-.138.466t-.422.164a.5.5 0 0 1-.454-.246.6.6 0 0 1-.073-.27zm8.907-2.859H9.8l-1.274 2.007L9.78 15.93h-.908l-.85-1.415h-.035l-.853 1.415h-.861l1.24-2.016-1.228-1.983h.931l.832 1.438h.036l.823-1.438Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


</div>
             </Slider>   
            </div>
            </div>
      
    </div>
  )
}
