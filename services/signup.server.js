import http from "../common/http";
import http2 from "../common/http2";

class SignupDataService {
  getAll() {
    return http.get("/user");
  }

  get(id) {
    return http.get(`/create-user/${id}`);
  }

  create(data) {
    return http.post("/create-user", data);
  }

  forgetpassword(data) {
    return http2.post("/forgot-password", data);
  }

  resetpassword(data) {
    return http2.post("/reset-password", data);
  }

  login(data) {
    return http2.post("/login", data);
  }

  verify(data) {
    return http2.post("/verify", data);
  }

  subscribe(data) {
    return http2.post("/subscribe", data);
  }

  update(id, data) {
    return http.put(`/update-user/${id}`, data);
  }

  delete(id) {
    return http.delete(`/remove-user/${id}`);
  }

  deleteAll() {
    return http.delete(`/locations`);
  }

  
}

export default new SignupDataService();