<template>
  <div class="grid " >

    <Navbar  />
    <main class="absolute top-[83px] w-full min-h-screen" >
      <div class="w-full min-h-screen">
          <div :style="{'backgroundImage':'url(bg1.jpg)'}" class="w-full h-[650px] mt-[20px] shadow-lg bg-cover bg-gradient-to-t brightness-90 flex flex-1 justify-center" >
          <div class="w-1/2 ">
            <div class="w-[350px] h-[400px] mt-[calc((100%-400px)/2)] ml-[calc((100%-350px)/2)]">
              <div class="mb-[20px] w-full h-[60px] ml-[20px]">
                <i class="fa-solid fa-tags float-left text-[#f84258] text-[40px] "></i>
              </div>
             <div class=" float-left mb-[30px]">
              <h2 class="text-[50px] float-left break-words">New, Amazing Stuff Is Here</h2>
              <p class="text-xl">Shop to day and get <strong>20% discount </strong></p> 
             </div>
              <button class="shadow-2xl bg-[#f84258] text-white block px-4 py-[7px] rounded ml-[20px] transition-opacity duration-500 hover:opacity-80">Shop Now</button>
            </div>
          </div>
          <div class="w-1/2" v-for="(slider,i) in sliders" :key="i">
            <div class="h-[600px] w-[400px] mt-[50px]">
               <img :src="slider.image" class="w-[400px] h-[450px] object-cover" :alt="slider.title" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  data:()=>{
    return{
      sliders:[
        {
          image:'slider1.png',title:'Background-1'
        }
      ]
    }
  },
  name: 'Home',
  components: {
    Navbar,
  },
  methods:{
    
  }
   

}
</script>
