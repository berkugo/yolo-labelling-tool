<template>
<v-row>
  
    <v-col md="8" sm="6" xs="6">
       <p class="ma-2 white--text">Realtime Coordinates {{x}},{{y}} </p>
                <p class="ma-2 white--text">Coordinates1 {{cX1}},{{cY1}} </p>
                <p class="ma-2 white--text">Coordinates2 {{cX2}},{{cY2}} </p>
                <p class="ma-2 white--text">Image Width: {{width}}px </p>
                <p class="ma-2 white--text">Image Width: {{height}}px </p>
      <v-img
        class="img-or"
        @click="coord1"
        v-on:mousemove="updateCoords"
        contain
        eager
        :src="'data:image/jpeg;base64,' + base64"
      >
      <vue-p5  v-on="{setup, draw}"></vue-p5>
    <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
      </v-img>
    </v-col>
     <v-btn @click="RarelyF" color="white--text transparent" class="overline">
                <v-icon class="ma-2 white--text" size="30px"
                  >mdi-content-save</v-icon
                >
                SAVE</v-btn>  
        <v-btn  @click="hasHistory() 
    ? $router.go(-1) 
    : $router.push('/')" depressed color="white--text transparent" class="overline">
                <v-icon class="ma-2 white--text" size="30px"
                  >mdi-arrow-left</v-icon
                >Back
                </v-btn> 
           
  </v-row>
</template>

<script>
import VueP5 from 'vue-p5';
var img2 = new Image();


export default {
  name: "Label",
  mounted() {
    this.base64 = this.$route.params.base64;
    img2.src = 'data:image/jpeg;base64,' + this.base64
    
  },
  components: {
  "vue-p5" :VueP5
  },
  data: () => ({
    base64: "",
    x: 0,
    y: 0,
    cX1:0,
    cX2:0,
    cY1:0,
    cY2:0,
    width:"",
    height:"",
    cor: true,
    recStart:true,
    coords : {},
    waiting:true,

  }),
  methods:{
    hasHistory () { return window.history.length > 2 },
    RarelyF: function(){
      
      this.width = img2.width
      this.height = img2.height
      console.log ("width " +  img2.width + "   height "+ img2.height)
      
    },

    coord1: function(event)
    {
      if(this.cor==true)
      {
       this.cX1 = event.clientX;
       this.cY1 = event.clientY;
       this.cor = false;
      }  
      else
      {
       this.cX2 = event.clientX;
       this.cY2 = event.clientY;
       this.cor=true;
      
      }
    },

    updateCoords : function(event){
      this.x = event.clientX;
      this.y = event.clientY;
    },

    setup(sk) {
      //sk.background('green');
      sk.createCanvas(img2.height/2, img2.width/2);
      
    },

    draw(sk){
	  if(this.recStart)
		this.drawRect(sk);
    },

    drawRect(sk) {
	  sk.clear();
	  sk.noFill();
	  sk.stroke('red');
    sk.rect(this.coords.x, this.coords.y, sk.mouseX-this.coords.x, sk.mouseY-this.coords.y);
    
    this.reader(sk);
    },

    reader(sk){
    sk.mouseClicked = () => {
    if (sk.mouseButton === sk.LEFT) {
		if(!this.recStart){		
			this.coords.x = sk.mouseX;
			this.coords.y = sk.mouseY;
			this.recStart = true;	
		} else {
			this.recStart = false;	
      this.drawRect(sk);
      this.coords = {};		
    
		      }
        }
      } 
    },

    /*draw(sk) {
      sk.mouseClicked = () => {
      sk.clear();
      if (sk.mouseButton === sk.LEFT) {
		if(!this.recStart){			
			this.coords.x = sk.mouseX;
			this.coords.y = sk.mouseY;
			this.recStart = true;	
		} else {
			this.recStart = false;	
		sk.clear();
	  sk.noFill();
	  sk.stroke('red');
    sk.rect(this.coords.x,this.coords.y, sk.mouseX-this.coords.x, sk.mouseY-this.coords.y);	// draw final rectangle
      this.coords = {};		
		 }
     }
    } 
  },*/
 
  }
};
</script>

<style>
.img-or{
  height: 50%;
  width: 50%;
}

</style>