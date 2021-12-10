const axios = require('axios');

const SERVICE_URL = 'http://localhost:3000';

const getNotifications = () => {
    return axios.get(`${SERVICE_URL}/notification`)
}

const createNotification = (data) => {
    return axios.post(`${SERVICE_URL}/notification`, data)
}

const updateNotification = (data) => {
    return axios.put(`${SERVICE_URL}/notification/${data.id}`, data)
}

const removeNotification = (data) => {
    return axios.delete(`${SERVICE_URL}/notification/${data.id}`)
}

module.exports = {
    getNotifications,
    createNotification,
    updateNotification,
    removeNotification
}