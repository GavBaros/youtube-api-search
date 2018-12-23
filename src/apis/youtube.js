import axios from "axios";

const KEY = "AIzaSyCIg74ty1NUosSxfvxz6_fy34LWMbYUbh8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
