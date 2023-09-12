import http from "../common/http";

class ReviewService {
  getAll() {
    return http.get("/reviews");
  }

  getReviewsByTourId(id) {
    return http.get(`/tour-reviews/${id}`);
  }

  get(id) {
    return http.get(`/review/${id}`);
  }

  create(data) {
    return http.post("/create-review", data);
  }

  update(id, data) {
    return http.put(`/update-review/${id}`, data);
  }

  delete(id) {
    return http.delete(`/remove-review/${id}`);
  }

  deleteAll() {
    return http.delete(`/reviews`);
  }

  findByTitle(title) {
    return http.get(`/reviews?title=${title}`);
  }
}

export default new ReviewService();