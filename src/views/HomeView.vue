<template>
  <div class="grid ">

    <Navbar />
    <main class="absolute top-[83px] w-full min-h-screen">
      <div class="w-full min-h-screen">
        <div :style="{ 'backgroundImage': 'url(bg1.jpg)' }"
          class="w-full h-[350px] lg:h-[700px] lg:mt-[20px] shadow-lg bg-cover bg-gradient-to-t brightness-90 lg:flex lg:flex-1 lg:justify-center">
          <div class="w-full lg:w-1/2 ">
            <div class="w-[350px] h-[400px] mt-[150px] ml-[calc((100%-350px)/2)]">
              <div class=" pt-[15px] lg:mb-[20px] w-full h-[60px] ml-[38px]">
                <i class="fa-solid fa-tags float-left text-[#f84258] text-[40px] "></i>
              </div>
              <div class=" float-left mb-[30px]" >
                <h2 class="text-[50px] float-left break-words font-[anton]">New, Amazing Stuff Is Here</h2>
                <p class="text-xl">Shop to day and <strong>{{ typeValue }}</strong><span
                    class="inline-block ml-[3px] cursor" :class="{ 'typing': typeStatus }">&nbsp;</span></p>
              </div>
              <button
                class="shadow-2xl bg-[#f84258] text-white block px-4 py-[7px] rounded ml-[37px] transition-opacity duration-500 hover:opacity-80">Shop
                Now</button>
            </div>
          </div>
          <div class=" hidden lg:block lg:w-1/2">
            <div class="h-[600px] w-[400px] mt-[50px] ">
              <div class="relative">
              <img :src="'slider/ani1.png'" class="z-10 absolute top-[40px] left-[180px] h-[605px] animate-ani1 " />
              <div :style="{ 'backgroundImage': 'url(slider/slider1.png)' }" class="w-[430px] h-[590px] object-cover absolute  z-[20] bg-no-repeat animate-slider1 " >
              </div>
              <img :src="'slider/ani2.png'" class="z-10 absolute top-[40px] left-[180px] h-[605px] animate-ani2 " />
              <div :style="{ 'backgroundImage': 'url(slider/slider2.png)' }" class="w-[430px] h-[590px] object-cover absolute  z-[20] bg-no-repeat animate-slider2" >
              </div>
              <img :src="'slider/ani3.png'" class="z-10 absolute top-[40px] left-[180px] h-[605px] animate-ani3 " />
              <div :style="{ 'backgroundImage': 'url(slider/slider3.png)' }" class="w-[430px] h-[590px] object-cover absolute  z-[20] bg-no-repeat animate-slider3 " >
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-full mt-5">
        <h3 class="text-3xl">Category</h3>
        <Category />
      </div>
      <div class="w-full h-full mt-5">
        <h3 class="text-3xl">Trending Product</h3>
        <div class="grid grid-cols-3 w-[80%]">
          
        </div>
      </div>
      <div class="w-full h-full mt-[70px]">
        <h3 class="text-3xl">Shopping Discount</h3>
        <Discount />
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Category from '../components/home/Category'
import Discount from '../components/home/Discount'
export default {
  data: () => {
    return {
      typeValue: '',
      typeStatus: false,
      typeArray: ['20% discount', 'free ship'],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    }
  },
  name: 'Home',
  components: {
    Navbar,
    Category,
    Discount,
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) 
          this.typeStatus = true;

          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;

          setTimeout(this.typeText, this.typingSpeed);

        }else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay)
        }
      },
      eraseText(){
        if (this.charIndex > 0) {
          if (!this.typeStatus) 
          this.typeStatus = true;

          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0,this.charIndex-1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }else{
          this.typeStatus= false;
          this.typeArrayIndex += 1;
          if (this.typeArrayIndex >= this.typeArray.length) 
          this.typeArrayIndex = 0;

          setTimeout(this.typeText,this.typingSpeed + 1000)
        }
      }
    },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Julee&family=Press+Start+2P&family=Rubik:wght@300&display=swap');
.cursor {
  display: inline-block;
  margin-left: 3px;
  height: 24px;
  width: 2px;
  background-color: black;
  animation: cursorBlink 1s linear infinite;
}
.typing{
  animation: none;
}
@keyframes cursorBlink {
  49% {
    background-color: black;
  }

  50% {
    background-color: transparent;
  }

  100% {
    background-color: transparent;
  }
}
</style>