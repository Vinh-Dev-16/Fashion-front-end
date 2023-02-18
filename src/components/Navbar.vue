<template>
        <NavigationMobile class="transition duration-1000 ease-[cubic-bezier(0,.12,.14,1)] fixed shadow-xl z-20"
        :class="{ 'close': !showNav }" />
    <div class="grid absolute lg:grid-cols-8 gap-2 w-full h-20  bg-zinc-200 shadow-xl transition duration-1000 ease-[cubic-bezier(0,.12,.14,1)] "
        :class="{ 'open': showNav }">
        <div class="col-start-1 col-end-3 justify-center items-center flex">
            <div id="navigation-icon" class="cursor-pointer" v-if="mobileView" @click="showNav = !showNav">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

            </div>
            <router-link to="/" class="w-[142px] flex">
                <img :src="logoCart" class="w-[30px] h-[30px] mr-[5px]" />
               <span
                    class="text-lime-500 text-2xl lg:text-[35px] font-[550px] font-[julee]"> F<strong
                        class="text-gray-600 text-xl lg:text-2x1 font-sans">ahsion</strong></span>
               
            </router-link>

        </div>
        <div class="grid col-start-3 col-end-7" v-if="!mobileView">
            <ul class="w-full flex flex-row justify-between items-center">
                <li><button
                        class="text-lg text-[#44af59] inline-block px-[20px] py-[7px] active:text-lime-500 after:border-b-2 after:w-0 after:border-black after:block after:transition-all hover:after:w-1/2 after:text-lime-500">Home</button>
                </li>
                <li><button
                        class="text-lg text-[#44af59] inline-block px-[20px] py-[7px] after:border-b-2 after:w-0 after:border-black after:block after:transition-all hover:after:w-1/2 after:text-lime-500">Woman</button>
                </li>
                <li><button
                        class="text-lg text-[#44af59] inline-block px-[20px] py-[7px] after:border-b-2 after:w-0 after:border-black after:block after:transition-all hover:after:w-1/2 after:text-lime-500">Man</button>
                </li>
                <li><button
                        class="text-lg text-[#44af59] inline-block px-[20px] py-[7px] after:border-b-2 after:w-0 after:border-black after:block after:transition-all hover:after:w-1/2 after:text-lime-500">Perfume</button>
                </li>
                <li><button
                        class="text-lg text-[#44af59] inline-block px-[20px] py-[7px] after:border-b-2 after:w-0 after:border-black after:block after:transition-all hover:after:w-1/2 after:text-lime-500">Shoe</button>
                </li>
            </ul>
        </div>
        <div class="col-start-7 col-end-9 flex justify-end items-center mr-9">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 text-3xl text-lime-500 mr-7">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-3xl text-lime-500">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg></span>
        </div>
    </div>
    <RouterView></RouterView>
</template>
<script>
import NavigationMobile from '../components/NavigationMobile'
export default {
    data() {
        return {
            mobileView: true,
            showNav: false,
            logoCart: 'logoCart.png'
        }
    },
    methods: {
        handleView() {
            this.mobileView = window.innerWidth <= 768;
        }
    },
    components: {
        NavigationMobile
    },
    created() {
        this.handleView();
        window.addEventListener('resize', this.handleView);
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Julee&family=Press+Start+2P&family=Rubik:wght@300&display=swap');
.open {
    transform: translateX(300px);
}

.close {
    transform: translateX(-300px);
}
</style>