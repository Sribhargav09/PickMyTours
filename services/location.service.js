import http from "../common/http";

class LocationDataService {
  getAll() {
    return http.get("/locations");
  }

  get(id) {
    return http.get(`/location/${id}`);
  }

  create(data) {
    return http.post("/create-location", data);
  }

  update(id, data) {
    return http.put(`/update-location/${id}`, data);
  }

  delete(id) {
    return http.delete(`/remove-location/${id}`);
  }

  deleteAll() {
    return http.delete(`/locations`);
  }

  findByTitle(title) {
    return http.get(`/locations?title=${title}`);
  }
}

export default new LocationDataService();