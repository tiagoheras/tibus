const axios = require('axios');

const baseUrl = 'http://localhost:5000';
export const Api = {

    getCatalogoItems() {
        const url = `${baseUrl}/catalogo`;
        return axios.get(url).then(response => {
            return response.json();
        }).then(jsonResponse => {
            return jsonResponse.catalogoItems.map(catalogoItem => {
                return catalogoItem
            })
        })
    },

    getCatalogoItem(sku) {
        const url = `${baseUrl}/catalogo/${sku}`;
        return axios.get(url).then(response => {
            return response.data
        }).then(jsonResponse => {
            return jsonResponse.catalogoItem;
        })
    },

    getTalles(id) {
        const url = `${baseUrl}/catalogo/${id}/talles`;
        return axios.get(url).then(response => {
            return response.data
        }).then(jsonResponse => {
            return jsonResponse.talles;
        })
    },

    getKids() {
        const url = `${baseUrl}/catalogo/filtro?sexo=niño`;
        return axios.get(url).then(response => {
            return response.data
        }).then(jsonResponse => {
            return jsonResponse.catalogoItems.map(kidsItem => {
                return kidsItem;
            });
        })
    },

    getMujer() {
        const url = `${baseUrl}/catalogo/filtro?sexo=mujer`;
        return axios.get(url).then(response => {
            return response.data;
        }).then(jsonResponse => {
            return jsonResponse.catalogoItems.map(mujerItem => {
                return mujerItem;
            });
        });
    },

    getHombre() {
        const url = `${baseUrl}/catalogo/filtro?sexo=hombre`;
        return axios.get(url).then(response => {
            return response.data;
        }).then(jsonResponse => {
            return jsonResponse.catalogoItems.map(hombreItem => {
                return hombreItem;
            });
        });
    },

    getMoreProducts(sku) {
        const url = `${baseUrl}/catalogo/${sku}/more`;
        return axios.get(url).then(response => {
             return response.data;
        })
    },

    sendMail(producto, precio, talle, clientName, clientPhone, clientEmail) {
        const url = `${baseUrl}/mailer`;
        return axios.post(url, {
            producto: producto,
            precio: precio,
            talle: talle,
            clientName: clientName,
            clientPhone: clientPhone,
            clientEmail: clientEmail
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {return response.status})
    }
}
