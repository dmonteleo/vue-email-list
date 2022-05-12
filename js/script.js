const app = new Vue({

  el: '#app', 

  data: {
    // flag: false,
    error: false, 
    loading: true,
    baseUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
    emails: [], 
    totalEmails: 10
  },

  mounted() {
    this.getEmails();

    // setTimeout( () => {
    //   console.log(this.emails);
    // }, 5000)
    
      // .then( () => {

      // })
  },

  methods: {

    getEmails() {
      for (i=0; i<this.totalEmails; i++) {
        if (this.error === false) {
          axios.get(this.baseUrl)
            .then( (response) => {
              console.log(response.data.response);
              this.emails.push(response.data.response);
              // this.flag = response.data.succes;
              if (this.emails.length === this.totalEmails) this.loading = false;
            })
            .catch( (error) => {
              console.log(error);
              this.error = true;
              this.errorMessage = 'ERRORE';
            })
        }
      }
    }
  }

})