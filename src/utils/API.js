import axios from 'axios';
//grabs repositories from personal github
export default {
    getRepos: function () {
        return axios.get('https://api.github.com/users/dsalvino/repos');
    }
};