const baseUrl="https://restduathlon.azurewebsites.net/api/Duathletes"

const app = Vue.createApp({
    data(){
        return{
            //properties
            duathletes:[],//array 
            error:null, //ingen ting ikke nogle objekt
            postData: {
                name: "",
                ageGroup: 0,
                bike: 0,
                run: 0 
            },
            duathleteMessage: "",
        }
    },
 methods:{
    getAllDuathletes(){
        this.getAllDuathleteshelper(baseUrl)
    },
   async getAllDuathleteshelper(url){
        try {//fejl håndtering 
            const result = await axios.get(url)
            this.duathletes= result.data
            console.log(this.duathletes)
            //console.writeline udskriver nogle
        } catch (ex) {//exception
            alert(ex.message) 
        }
    },
 }

}).mount("#app")
