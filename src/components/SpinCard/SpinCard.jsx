import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Image from "react-bootstrap/Image";
import question from "../../images/main/question.svg";
import "../../styles/spincard.sass";
import ReactCardFlip from "react-card-flip";

class SpinCard extends React.Component {
  // const [showMessage, setShowMessage] = useState(false);
  // const nodeRef = useRef(null);
  // const el = document.getElementById("card-test");
  // return (
  //   <>
  //     <CSSTransition
  //       in={!showMessage}
  //       nodeRef={nodeRef}
  //       timeout={800}
  //       classNames="front-face"
  //       unmountOnExit
  //     >
  //       <div className="services-card front">
  //         <Image
  //           className="question"
  //           src={question}
  //           onClick={() => {
  //             setShowMessage(true);
  //           }}
  //         />
  //         <div id="card-test" className="card-title">
  //           <h3>
  //             Уборка после <br /> ремонта
  //           </h3>
  //         </div>
  //         <div className="card-main">
  //           <div className="card-main-line">
  //             <p>Однушка</p>
  //             <p>Требуется осмотр</p>
  //           </div>
  //           <div className="card-main-line">
  //             <p>Двушка</p>
  //             <p>Требуется осмотр</p>
  //           </div>
  //           <div className="card-main-line">
  //             <p>Трешка</p>
  //             <p>Требуется осмотр</p>
  //           </div>
  //         </div>
  //       </div>
  //     </CSSTransition>
  //     <CSSTransition
  //       in={showMessage}
  //       nodeRef={nodeRef}
  //       timeout={800}
  //       classNames="back-face"
  //       unmountOnExit
  //     >
  //       <div className="services-card back" ref={nodeRef}>
  //         <Image
  //           className="question"
  //           src={question}
  //           onClick={() => setShowMessage(false)}
  //         />
  //         <div id="card-test" className="card-title">
  //           <h3>Другой текст</h3>
  //         </div>
  //         <div className="card-main">
  //           <div className="card-main-line">
  //             <h2>Однушка</h2>
  //             <h2>Требуется осмотр</h2>
  //           </div>
  //           <div className="card-main-line">
  //             <h2>Двушка</h2>
  //             <h2>Требуется осмотр</h2>
  //           </div>
  //           <div className="card-main-line">
  //             <h2>Трешка</h2>
  //             <h2>Требуется осмотр</h2>
  //           </div>
  //         </div>
  //       </div>
  //     </CSSTransition>
  //   </>
  // );
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} >
        <div>
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </div>

        <div>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </div>
      </ReactCardFlip>
    )
  }
}

const spinCard = SpinCard()