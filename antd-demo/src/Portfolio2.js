import React from "react";
import Modal from "react-modal";

import "./Portfolio2.css";

import { useState } from "react";
import { Row, Col } from "antd";
import { Button } from "antd";
import { Layout } from "antd";
import { Carousel } from "antd";

import Face3d from "./img/model.jpg";
import Face3d2 from "./img/model2.jpg";
import CowImg from "./img/AmagerFaelled_2.jpg";
import snail1 from "./img/Snail_0.jpg";
import snail2 from "./img/Snail_3.jpg";
import snail3 from "./img/Snail_1.jpg";

Modal.setAppElement("#root");

function Portfolio2() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [modalIsOpen3, setModalIsOpen3] = useState(false);
  const [modalIsOpen4, setModalIsOpen4] = useState(false);

  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(230, 230, 230, 0.75)",
    },
    content: {
      position: "absolute",
      top: "40px",
      left: "40px",
      right: "40px",
      bottom: "40px",
      border: "1px solid #ccc",
      background: "#fff",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "4px",
      outline: "none",
      padding: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.85)",
    },
  };

  return (
    <div>
      <Row>
        <Col span={16}>
          <img
            src={Face3d}
            className="imageThumbnail"
            alt="3d model of a face"
          ></img>
        </Col>
        <Col span={8}>
          <div className="textAlignRight" style={{ top: "20%" }}>
            <h2>3D Modelling</h2>
            3D modelling is an example of a skill that the owner of this page
            have
            <div className="buttonUnderText">
              <Button type="dashed" onClick={() => setModalIsOpen(true)}>
                Read more
              </Button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={modalStyle}
                className="textAlignCenter"
              >
                <div>
                  <h2>3D Modelling</h2>
                  <Carousel autoplay>
                    <div>
                      <img
                        src={Face3d}
                        className="photoCenter"
                        alt="3d model of a face"
                      ></img>
                    </div>
                    <div>
                      <img
                        src={Face3d2}
                        className="photoCenter"
                        alt="3d model of a face"
                      ></img>
                    </div>
                  </Carousel>

                  <p style={{ padding: "60px" }}>
                    3D model of a face that is suppose to be a perfect example
                    of something to text allign lets see. There is more and more
                    and more and more text about this.
                  </p>
                </div>
                <Button type="dashed" onClick={() => setModalIsOpen(false)}>
                  Close
                </Button>
              </Modal>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <div className="textAlignLeft" style={{ top: "20%" }}>
            <h2>Snail Photography</h2>
            Whose cow is that? I think I know. Its owner is quite happy though.
            Full of joy like a vivid rainbow, I watch her laugh. I cry hello.
            <div className="buttonUnderText">
              <Button type="dashed" onClick={() => setModalIsOpen2(true)}>
                Read more
              </Button>
              <Modal
                isOpen={modalIsOpen2}
                onRequestClose={() => setModalIsOpen2(false)}
                style={modalStyle}
                className="textAlignCenter"
              >
                <div>
                  <h2>Snail Photography</h2>
                  <Carousel autoplay>
                    <div>
                      <img
                        src={snail1}
                        className="photoCenter"
                        alt="Highlinder Cow"
                      ></img>
                    </div>
                    <div>
                      <img
                        src={snail3}
                        className="photoCenter"
                        alt="Snail"
                      ></img>
                    </div>
                    <div>
                      <img
                        src={snail2}
                        className="photoCenter"
                        alt="Snail"
                      ></img>
                    </div>
                  </Carousel>

                  <p style={{ padding: "60px" }}>
                    3D model of a face that is suppose to be a perfect example
                    of something to text allign lets see. There is more and more
                    and more and more text about this.
                  </p>
                </div>
                <Button type="dashed" onClick={() => setModalIsOpen2(false)}>
                  Close
                </Button>
              </Modal>
            </div>
          </div>
        </Col>
        <Col span={16}>
          <img
            src={snail1}
            className="imageThumbnail"
            style={{ top: "20px" }}
            alt="Snail photography"
          ></img>
        </Col>
      </Row>
      <Row>
        <Col span={16}>
          <img
            src={Face3d}
            className="imageThumbnail"
            style={{ top: "40px" }}
            alt="3d model of a face"
          ></img>
        </Col>
        <Col span={8}>
          <div className="textAlignRight" style={{ top: "35%" }}>
            <h2>3D model in Blender</h2>
            3D model of a face that is suppose to be a perfect example of
            something to text allign lets see
            <div className="buttonUnderText">
              <Button type="dashed">Read more</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Portfolio2;
