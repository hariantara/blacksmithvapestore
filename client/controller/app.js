var app = new Vue({
  el: '#app',
  data: {
    products:[],
    openendItem: null,
    detail: {
      _id: '',
      name: '',
      description: '',
      price: null,
      stock: null
    },
    keranjang:[],
    openQTY: 0,
    keranjang_id: []
  },
  methods:{
    // openItem(id){
    //   console.log(id);
    //   this.openendItem = id
    // },
    showById(data){
      //alert(data)
      console.log(data);
      var tmp = false;
      var self = this;
      axios.get(`http://localhost:3000/blacksmithvaporshop/cart/${data}`)
      .then((response)=>{
        self.detail = response.data
        console.log("selfieee",self.detail);
        console.log("===>", response);
      })
    },

    cart(data){
      console.log("=x=x=x>",data);

      if(this.keranjang_id.indexOf(data._id) == -1)
      {
        this.keranjang.push({
          _id:data._id,
          name: data.name,
          qty: this.openQTY,
          price:data.price
        })

        this.keranjang_id.push(data._id)
        localStorage.setItem('data', JSON.stringify(data))
      }
    }

  },
  mounted(){
    var dataproduct = this;
      axios.get('http://localhost:3000/blacksmithvaporshop')
      .then(response=>{
        console.log(response);
        dataproduct.products = response.data;
      })
  }
})
