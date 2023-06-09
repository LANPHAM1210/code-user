import axios from './request.js';


// import axios from "./request";
export const login = (values) => {
        return axios.post(`/api/auth/login`, values);
};

export const getAllProduct = async () => {
        try {
                const response = await axios.get("/prod/all/0/2", 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjAxIiwiZXhwI…rtQykYDVFwl17G3Iwt7ALeMEc7ByOQkGn6lqSopFtxLm4o3ug',);
                console.log(response.data);
                return response.data;

        } catch (error) {
                return error;
        }
}
export const createProduct = async (data) => {
        try {


                const response = await axios.post('/prod/create', data)
                console.log(response.data);

                return response.data;
        }
        catch (error) {
                console.log(error);
        }
}

// Call api User
export const getAllUser = async (pageCureent) => {
        try {
                const res = await axios.post("/api/users/list", pageCureent);
                return res;
        } catch (err) {
                console.log(err);
        }
};
export const delUser = (id) => {
        const res = axios.delete(`/api/users/${id}`);
        return res;
};

export const addUser = (data) => {
        return axios.post("/api/users/create", data);
};

export const findUser = async (id) => {
        const res = axios.post("/api/users/find", id);
        return res;
};

export const updateUser = (data) => {
        const res = axios.put("/api/users/update", data);
        return res;
};
// Call api product :
export const findProduct = async (id) => {
        try {
                const res = await axios.get(`/prod/${id}`);

                // console.log(res.data);
                return res.data;
        } catch (error) {
                console.log(error);
        }
};
export const getProduct = async (condition) => {
        const res = axios.post("/prod/filter/", condition);
        // console.log(res);
        return res;
};

export const sortProduct = async (condition) => {
        const res = await axios.post("/prod/sort/", condition);
        // console.log(res);
        return res;
};
export const updateProduct = async (value) => {
        const res = axios.put("/prod/update/", value);
        return res;
};
export const deleteProduct = async (id) => {
        const res = await axios.post(`/prod/del/`, id);
        return res;
};

//CALL API SUPPLIER:
export const getSupplier = (condition) => {
        const res = axios.post("/supplier/filter", condition);
        return res;
};

export const createSupplier = (data) => {
        const res = axios.post("/supplier/create", data);
        return res;
};

export const updateSupplier = (data) => {
        const res = axios.put("/supplier/update", data);
        return res;
};

export const deleteSupplier = (id) => {
        const res = axios.delete(`/supplier/delete/${id}`);
        return res;
};

//API Promotion :
export const getAllPromotion = (data) => {
        const res = axios.post("/promotion/", data);
        return res;
};

export const createPromotion = (data) => {
        const res = axios.post("/promotion/create", data);
        return res;
};
export const updatePromotion = (data) => {
        const res = axios.put("/promotion/update", data);
        return res;
};
export const deletePromotion = (id) => {
        const res = axios.delete(`/promotion/del/${id}`);
        return res;
};

export const revenueValue = () => {
        const res = axios.get("/order/revenue/");
        return res;
};
      // export const revenueMonths







