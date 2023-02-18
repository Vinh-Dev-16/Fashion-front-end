<template>
    <div class="flex w-[80%] ml-[10%] mt-[20px] mb-[30px] h-full justify-between gap-7">
        <button class="w-[200px] h-[200px] border-[0.3px] rounded-md shadow-sm hover:border-green-500 focus:bg-[#bcf1c5]"  v-for="(category, i) in categories" :key="i" >
            <img :src="category.img" :alt="category.name" class="w-[80px] h-[100px] ml-[55px]">
            <p class="text-center mt-[10px]">{{ category.name }}</p>
        </button>
    </div>

</template>
<script>
export default {
    data() {
        return {
            categories: [
                {img:'./category/woman.png',name:'Women'},
                {img:'./category/man.png',name:'Men'},
                {img:'./category/perfume.png',name:'Perfumes'},
                {img:'./category/shoe.png',name:'Shoes'},
                {img:'./category/hat.png',name:'Hats'}
         
           ]
        }
    },
}
</script>