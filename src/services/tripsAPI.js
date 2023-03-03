import axios from "axios";

class tripsAPI{

   static async getAllTrip(id) {
        const requestUrlTrip = `${process.env.REACT_APP_BASE_URL}/trip/${id}`;
        console.log("To backend!");
        try {
            const response = await axios.get(requestUrlTrip);
      
            console.log(response.data)
            return response.data
        }
        catch (error) {  
            console.error(error);
            return error.response.data;
        }
    }

}

export default tripsAPI;