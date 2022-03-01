import axios from 'axios'

export const getData = (data) => {
    return (dispatch) => {
        return axios.get(" https://jsonplaceholder.typicode.com/albums")
            .then(response => {
                return response.data
            })
            .then(data => {
            
                dispatch({
                    type: "get_data",
                    payload: data
                })
            })

    };
};




