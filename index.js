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
    //en metode - kaldt i livscyklussen
    created() 
    {
        this.getAllDuathletes() 
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
    async postDuathletes(){
        try{
            const result = await axios.post(baseUrl, this.postData)
            this.duathleteMessage = "Response: " + result.status + " " + result.statusText
            this.getAllDuathletes()
        } catch(ex){
            alert(ex.message)
        }
    },
    async deleteDuathlete(bibId){
        const url = baseUrl + "/" + bibId
        try{
            const response = await axios.delete(url)
            this.duathleteMessage = "Response: " + response.status + " " + response.statusText
            this.getAllDuathletes()
        }catch(ex){
            alert(ex.message)
        }
    }
 }

}).mount("#app")
