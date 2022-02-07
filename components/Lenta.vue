<template lang="html">
  <section>
    <div class="main">
      <div class="block">
        <div class="new">
          <Slider />
         <div class="text">
           <button type="button" name="button" @click="eventOne()" id="swi">
             <img src="@/assets/arrow-left-short.svg" alt="">
           </button>
           <textSlider />
           <button type="button" name="button" @click="eventTwo()" id="swi1">
             <img src="@/assets/arrow-right-short.svg" alt="">
           </button>
         </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import textSlider from '@/components/textSlider.vue'
import Slider from '@/components/Slider.vue'
import posts from '@/components/posts.js'
export default {
  components:{
    Slider,textSlider
  },
  data (){
    return{
      array: posts
    }
  },
  methods:{
    eventOne(){
      document.getElementById('buttonLeft').click();
      document.getElementById('buttonLef').click();
    },
    eventTwo(){
      document.getElementById('buttonRight').click();
      document.getElementById('buttonRigh').click();
    }
  }
}
</script>

<style lang="css" scoped>
.main{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.block{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  background-color: #222222;
  border-radius: 20px;
  width: 80%;
  padding: 30px;
}
p{
  color: white;
  width: 40%;
  margin-top: 20px;
}
.new{
  width: 100%;
  height: 300px;
  background-size: cover;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  margin-top: -25px;
}
.text{
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
}
button{
  background: none;
  border: none;
}
.one{
  flex-direction: row;
}
.two{
  flex-direction: row-reverse;
}
img{
  color: white;
  width: 35px;
}
@media (max-width: 450px) {
.block{
  flex-direction: column;
  width: 80%;
  height: 800px;
  font-size: 10px;
}
.new{
  flex-direction: column;
}
img{
  width: 20px;
}
}
@media (max-width: 995px) {
.block{
  flex-direction: column;
  width: 80%;
  height: 800px;
  font-size: 10px;
}
.new{
  flex-direction: column;
}
.text{
  align-items: flex-start;
  min-width: 250px;
}
}
@media (max-width: 366px) {
 .text{
   margin-left: -37px;
 }
}
</style>
