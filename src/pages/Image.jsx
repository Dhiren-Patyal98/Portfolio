import img from "../assets/PROFILE1.jpg";
import stylee from "./CSS/Text.module.css"

export default function Image() {
  return (
    <div>
      <img src={img}  alt="..."
      className={stylee.photo}
     />
    </div>
  ) 
}