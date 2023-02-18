<template>
  <div id="navigation-mobile"
    class="  overflow-hidden shadow-slate-400 bg-gradient-to-b from-[#74ebd5] to-[#ACB6E5] w-[300px] h-screen">

    <!-- Thanh search -->
    <div class="ml-[calc((100%-219px)/2)] relative mb-10">
      <input type="search" placeholder="Tìm kiếm ở đây..."
        class="block
         px-3 py-1 rounded-3xl mt-8 text-[14px] focus:border-lime-500 focus:outline-none border-solid border-[1px] border-black relative">
      <button
        class="absolute top-[1px] right-[64px] md:right-[64px]  lg:right-[64px] w-7 h-7 rounded-[50%] bg-slate-300 "><i
          class="fa-solid fa-magnifying-glass  text-base "></i></button>
    </div>
    <!-- Thanh items -->

    <div class="mt-[calc((100%-129px)/2)]">
      <ul class="w-full">
        <li class="cursor-pointer text-[18px] hover:bg-slate-300 transition-colors duration-500 mb-2 block py-[5px]">Home</li>
        <li class="cursor-pointer text-[18px] hover:bg-slate-300 transition-colors duration-500 mb-2 block py-[5px]">Woman</li>
        <li class="cursor-pointer text-[18px] hover:bg-slate-300 transition-colors duration-500 mb-2 block py-[5px]">Man</li>
        <li class="cursor-pointer text-[18px] hover:bg-slate-300 transition-colors duration-500 mb-2 block py-[5px]">Perfume</li>
        <li class="cursor-pointer text-[18px] hover:bg-slate-300 transition-colors duration-500 mb-2 block py-[5px]">Shoe</li>
      </ul>
    </div>

    <div class="absolute bottom-5 ml-[calc((100%-116px)/2)]">
      <i class="fa-brands fa-facebook text-[26px] mr-[18px] hover:translate-y-[-10px] transition-all duration-500"></i>
      <i
        class="fa-brands fa-instagram text-3xl text-[26px] mr-[18px] hover:translate-y-[-10px] transition-all duration-500"></i>
      <i class="fa-brands fa-youtube text-[26px] hover:translate-y-[-10px] transition-all duration-500"></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
}
</script>
<style>

</style>