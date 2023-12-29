import React from "react";
import { User, Auth } from "@/api";
import { useAuth } from "@/hooks";

import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { Input, Label, Button } from "reactstrap";
import styles from "./RegisterFormClient.module.scss";

const userCtrl = new User();
const authCtrl = new Auth();

export function RegisterFormClient() {
  const { login } = useAuth();
  //   const history = useHistory(); 
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),

    onSubmit: async (formValue) => {
      try {
        const responseUser = await userCtrl.loginClientApi(formValue);
        const responseAuth = await authCtrl.login(formValue);   
        login(responseAuth.access);    
        window.location.replace("/cart");
      } catch (error) {
        toast.error(error.message);
      }
    },
  });


  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.closed} onClick={() => window.location.replace("/cart")}>
        <label>Salir</label>
      </div>
      <div className={styles.register_form_client}>
        <div className={styles.register_content}>
          <h4>Registrarse</h4>

          <Label for="first_name">Nombre completo*</Label>
          <Input
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Ingrese su nombre y apellido"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            error={formik.errors.first_name}
          />
          {formik.errors.first_name && <h6>{formik.errors.first_name}</h6>}

          <Label for="last_name">Dirección*</Label>
          <Input
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Dirección de envío"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            error={formik.errors.last_name}
          />
          {formik.errors.last_name && <h6>{formik.errors.last_name}</h6>}

          <Label for="phone_number">Teléfono*</Label>
          <Input
            type="telefono"
            id="phone_number"
            name="phone_number"
            placeholder="Teléfono"
            value={formik.values.phone_number}
            onChange={formik.handleChange}
            error={formik.errors.phone_number}
          />
          {formik.errors.phone_number && <h6>{formik.errors.phone_number}</h6>}

          <Label for="title">Correo electrónico*</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
          />
          {formik.errors.email && <h6>{formik.errors.email}</h6>}

          <Label for="password">Contraseña*</Label>
          <Input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password}
          />
          {formik.errors.password && <h6>{formik.errors.password}</h6>}

          <Button block color="danger" type="submit">
            Guardar
          </Button>

          <div onClick={() => window.location.replace("/join/login")}>
            <h6>Ya tengo un usuario registrado</h6>
          </div>
        </div>
      </div>
    </form>
  );
}

function initialValues() {
  return {
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
  };
}

function validationSchema() {
  return {
    first_name: Yup.string().required("Este campo es obligatorio!"),
    last_name: Yup.string().required("Este campo es obligatorio!"),
    phone_number: Yup.number().required("Este campo es obligatorio!"),
    email: Yup.string()
      .email("No es un email valido!")
      .required("Este campo es obligatorio!"),
    password: Yup.string().required("Este campo es obligatorio!"),
  };
}
