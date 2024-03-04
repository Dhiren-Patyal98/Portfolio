
import style from "./CSS/Text.module.css"
export default function Projects() {
    return (
        <div >
            <div className="container px-4 " id="featured-3">
                <h1 className="pb-2 pt-4 border-bottom">Projects</h1>
                <div>
                <div className={`${style.projectheadings}`}>
                <ul>
                <li><h3 className="pt-4">Spotify Clone</h3></li>
                A music player which allows user to play songs and get details of
songs similar to Spotify.
<br></br>
<strong>Technologies:</strong> MongoDB, Express, React, Node.js, HTML5, CSS3

<li  className="pt-4" ><h3>Netflix Clone</h3></li>
A web-application that allows developers to create and deploy a
video-on-demand platform similar to Netflix.
<br></br>
<strong>Technologies:</strong> MongoDB, Express, React, Node.js, HTML5, CSS3

<li  className="pt-4" ><h3>Learning Management System</h3></li>
A software which can be used for e-learning with range of
tutorials and quizes on various subjets and grades.
<br></br>
<strong>Technologies:</strong>MongoDB, Express, React, Node.js, HTML5, CSS3


<li  className="pt-4" ><h3>Live Cricket Scoreboard</h3></li>
Cricket score board used to maintain the score of the team and
individual players with runs, balls & strike rate including bowlers
total over, maiden, runs given, etc.
<br></br>
<strong>Technologies:</strong>Java, Javascript, HTML5, CSS3, MySQL
                    
                </ul>
                </div>
                </div>
            </div>

        </div>
    )
}
