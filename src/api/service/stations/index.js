import $api from "../../index";

class StationstApi {
    async getStations() {
        try {
            return await $api.get("https://piar.meew.me/stations");
        } catch (e) {
            throw new Error(e)
        }
    }

    async createStations(name, comment) {
        try {
         return await $api.post("https://piar.meew.me/stations", {
            name,
            comment
         });
        } catch (e) {
            throw new Error(e)
        }
    }

    async getStationsById(id) {
        try {
            return await $api.get(`https://piar.meew.me/stations/${id}`)
        } catch (e) {
            throw new Error(e)
        }
    }

    async deleteStationsById(id){
        try {
            return await $api.delete(`https://piar.meew.me/stations/${id}`)
        } catch (e) {
            throw new Error(e)
        }
    }

    async updateStationsById(id,name,comment) {
        try {
            return await $api.put(`https://piar.meew.me/stations/${id}`,{
                name,
                comment
            })
        } catch (e) {
            throw new Error(e)
        }
    }
}





export default new StationstApi()