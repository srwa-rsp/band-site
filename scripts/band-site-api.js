
class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
  }

  async postComment(commentObj) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/comments?api_key=${this.apiKey}`,
        commentObj
      );
      return response.data;
    } catch (error) {
      console.log("post commnets error",error);
    }
  }

  async getComments() {
    try {
        const response = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`)
        return response.data
    } catch (error) {
      console.log("get comments error",error);
    }
  }

  async likeComment(id) {
    try {
      const response = await axios.put(
        `${this.baseUrl}/comments/${id}/like?api_key=${this.apiKey}`
      );
      return response.data;
    } catch (error) {
      console.log("put commnet like error",error);
    }
  }

  async getShows(){
    try{
        const response = await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`)
        return response.data
    }catch(error){
        console.log("get shows error",error);
    }
  }
}


export default BandSiteApi