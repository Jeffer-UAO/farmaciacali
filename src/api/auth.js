import { BASE_API } from "@/config";

export class Auth {
  async login(formValue) {

    console.log(formValue.email);
    console.log(formValue.password);

       try {
      const url = `${BASE_API}/api/auth/login/`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formValue.email,
          password: formValue.password,
        }),
      };

      const response = await fetch(url, params);

      if (response.status !== 200) {
        throw new Error("Usuario no permitido");
      }
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }
}
