/*
This class is responsible for getting latest covid related information through an api
*/
import axios from "axios"

export class CovidController {

    // Get Covid data from the state of MA
    async getMACases() {

        const url: string = 'https://covidtracking.com/api/states';

        try {
            const response =  await axios.get(url);
            for(const item of response.data){

                if(item.state === "MA"){
                    return item;
                }
            }
            return response.data;
        } catch (exception) {
            // tslint:disable-next-line:no-console
            console.log(exception);
        }

    }

}