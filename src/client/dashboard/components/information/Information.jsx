import "./information.scss";

import { BiRightArrowCircle } from "react-icons/bi";

import Img1 from "../../../common/images/Blog 1.png";
import Img2 from "../../../common/images/Blog 2.png";
import Img3 from "../../../common/images/Blog 3.png";
import Img4 from "../../../common/images/Blog 4.png";

function Information() {
  return (
    <div className="infopg">
      <div className="infotitle">
        Welcome to our blog area where you will find regular updates on Health
        and Safety Legislation.
      </div>
      <div className="assesm_container">
        <div className="assesm_card_container">
          <div className="infopg_card">
            <img
              src={Img1}
              alt="Assessment 1"
              style={{ width: "200px", height: "auto" }}
            />
            <h4>Work comfortably, work pain-free.</h4>

            <div>
              <BiRightArrowCircle title="Proceed to assessment" />
            </div>
          </div>

          <div className="infopg_card">
            <img
              src={Img2}
              alt="Assessment 2"
              style={{ width: "200px", height: "auto" }}
            />
            <h4>Scientific evidence to support VDU impact</h4>

            <div>
              <BiRightArrowCircle title="Proceed to assessment" />
            </div>
          </div>

          <div className="infopg_card">
            <img
              src={Img3}
              alt="Assessment 3"
              style={{ width: "200px", height: "auto" }}
            />
            <h4>Blog Post #3</h4>

            <div>
              <BiRightArrowCircle title="Proceed to assessment" />
            </div>
          </div>

          <div className="infopg_card">
            <img
              src={Img4}
              alt="Assessment 4"
              style={{ width: "200px", height: "auto" }}
            />
            <h4>Blog post #4</h4>

            <div>
              <BiRightArrowCircle title="Proceed to assessment" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
