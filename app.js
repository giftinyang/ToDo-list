var app = new Vue({
  el: "#app",
  data: {
    user: {
      name: "",
      role: ""
    },
    message: "Hello Vue!",
    persons: [
      { name: "Wisdom", role: "Html dev", email: 'caomiehinyang@gmail.com', city:'Uyo', Score: 5 },
      { name: "Samuel", role: "js dev"  , email: 'caomiehinyang@gmail.com', city:'Uyo', Score: 5},
      { name: "Stanley", role: "php dev"  , email: 'caomiehinyang@gmail.com', city:'Uyo', Score: 5},
      { name: "Joe", role: "UI/Ux dev"  , email: 'caomiehinyang@gmail.com', city:'Uyo', Score: 5},
      { name: "Mata", role: "UX dev"  , email: 'caomiehinyang@gmail.com', city:'Uyo', Score: 5},
      { name: "Gift", role: "Front-end dev" , email: 'caomiehinyang@gmail.com', city:'Uyo', Score: 5 },
    ],
    status: true
  },
  methods: {
    addUser() {
      this.persons.push(this.user);
    },
    removeItem(index) {
      this.persons.splice(index, 1);
    },
    updateItem(id) {
      this.user = id;
      this.status = !this.status;
    },
    updatePerson(){
      alert('Field has been updated');
    }
  },
  computed: {
    totalScore(){
      let sum = 0
      for(let i=0; i<this.persons.length; i++){
        sum = sum + parseInt(this.persons[i].Score);
      }
      return sum;
    }
  }
});
