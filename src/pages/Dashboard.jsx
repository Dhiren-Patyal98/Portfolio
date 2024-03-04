import Certifications from "./Certifications";
import Description from "./Description";
// import Projectss from "./Projects";
import Projectss from "./Projectss";
import Qualification from "./Qualification";
import Skills from "./Skills";
// import Image from "./Image";


export default function Dashboard() {
  return (
    <div className="container py-4">


      <Description />
      <Qualification />
      <Skills />
      <Certifications/>
      <Projectss/>

    </div>

  )
}



