import React, { useState } from "react";
import { useRouter } from "next/router";
import { useCart, useAuth, useWhatsApp } from "@/hooks";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { BsTrash3 } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

import styles from "./FooterCart.module.scss";

export function FooterCart(props) {
  const { product } = props;
  const { deleteAllCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  const { items, selectedItem, handleItemClick } = useWhatsApp();

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  function handleClick(link) {
    router.push(link);
  }

  function confirmation() {
    const result = window.confirm(
      "¿Está seguro de eliminar los productos del Carrito?"
    );
    if (result) {
      deleteAllCart();
    }
  }

  function Login() {
    if (user) {
      toggleModal();      
    } else {
      window.location.replace("/join/login/");     
    }
  }

  const generateWhatsAppLink = (phoneNumber, message) => {
    const url = `https://wa.me/${phoneNumber}`;
    const encodedMessage = encodeURIComponent(message);
    return `${url}?text=${encodedMessage}`;
  };

  const addData = () => {
    const whatsappLink = generateWhatsAppLink(selectedItem, product);
    window.location.href = whatsappLink;
    toggleModal();
  };

  return (
    <div className={styles.btnWhatsapp}>
      <div className={styles.paneluser}>
        <BiArrowBack onClick={() => handleClick("/")} size="35" color="grey" />

        <Button className={styles.whatsapp} color="succefull" onClick={Login}>
          <BsWhatsapp size={30} color="green" />
          <p>Enviar Pedido</p>
        </Button>

        <BsTrash3 size="25" color="grey" onClick={confirmation} />
      </div>

      <Modal centered isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Seleccione una Linea</ModalHeader>

        <ModalBody>
          {items.map((item, index) => (
            <Button
              key={index}
              color="success"
              size="sm"
              outline
              className={index === selectedItem ? "selected" : ""}
              onClick={() => handleItemClick(item)}
            >
              <BsWhatsapp size={20} /> Linea {index + 1}
            </Button>
          ))}
        </ModalBody>

        <ModalFooter>
          <Button outline size="sm" color="secondary" onClick={toggleModal}>
            Cancelar
          </Button>
          <Button size="sm" color="success" onClick={addData}>
            Aceptar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
