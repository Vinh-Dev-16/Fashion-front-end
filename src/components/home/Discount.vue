<template>
    <div class="flex justify-between w-[80%] ml-[10%] h-full gap-7 mt-7 mb-8">
        <div class="w-[400px] h-[300px] rounded-md" v-for="(shop,i) in shops" :key="i" >
            <div class="w-full h-full rounded-md" :style="{backgroundColor:`${shop.bg}`}">
                <h3 class="text-xl py-[8px] block font-[dacingscript,cursive] pb[8px]">{{shop.title}}</h3>
                <p>{{shop.description}}</p>
                <div class="flex justify-between mt-8">
                    <div>
                        <img :src="shop.sale" class="w-[80px] h-[80px] object-cover mb-[20px] ml-[20px] text-lime-300"/>
                        <button class="bg-[#3ec34e] block px-4 py-2 rounded-3xl w-[116px] h-[43px]  ml-[20px] hover:scale-[1.06] transition-colors duration-500 text-white ">Shop now</button>
                    </div>
                    <img :src="shop.img" class="w-[160px] h-[160px] object-cover mr-3" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            shops:[
                {
                    img:'./discount/shop.png',title:'Get 20% of on Clothes', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',bg:'#FBD686',sale:'./discount/sale.png',

                },
                {
                    img:'./discount/shop1.png',title:'Get 25% of on Shoe', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid',bg:'#9EC7CB',sale:'./discount/sale1.png',
                },
                {
                    img:'./discount/shop2.png',title:'Get 30% of on Perfume and Hat', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid',bg:'#D6EFC7',sale:'./discount/sale3.png',
                }
            ]
        }
    },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Dancing+Script&family=Julee&family=Press+Start+2P&family=Rubik:wght@300&display=swap');
</style>