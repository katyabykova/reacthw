import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches/',
    headers: {'Content-Type': 'application/json'}
});

let axiosFlights = () => {
    return axiosInstance()
};

export {axiosFlights}

