import React, { useState } from "react";
import Navibar from "../Navibar/Navibar";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";
import Logo from "../Logo/Logo";
import Modal from "../Modal/Modal";


const Header = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  return (
    <header>
      <Container className="header-container">
        <Row>
          <Column className="logo-container">
            <Logo />
            <button
              className="header-button"
              onClick={() => setFormIsOpen(true)}
            >
              закажи клининг
            </button>
            <Modal isOpen={formIsOpen} onClose={() => setFormIsOpen(false)}>
              <h4>Title form</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                dolore amet, officia ipsa quod similique facere quis hic
                repellat velit eveniet debitis, laborum dignissimos tempora
                nihil voluptas deleniti possimus tempore?
              </p>
            </Modal>
          </Column>
          <Column>
            <Navibar />
          </Column>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
