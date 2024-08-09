import "./Video.css";
import arrow from '../../../assets/icons/arrow.png'

export function Video() {


    return (
        <div className="video_container">
            <div className="next_video">
                <p>NEXT VIDEO</p>
                <img src={arrow} alt="" />
            </div>
        </div>
    )
}