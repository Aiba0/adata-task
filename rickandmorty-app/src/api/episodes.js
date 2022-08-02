import {request} from "@/api/utils";

export default {
    getEpisodes(params = {}) {
        return request('get', '/episode', { params });
    }
}