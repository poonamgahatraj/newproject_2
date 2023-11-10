<template>
 <div class=" border flex flex-col w-24 h-screen justify-between">
    <div class="  flex flex-col ml-6 ">
        <img src="public/assets/Path 329.svg"  class="w-8 h-8 my-4 hover:bg-gray-300" @click="clickFunction('Home')">
        <img src="public/assets/Path 354.svg" class="w-8 h-8 my-4 hover:bg-gray-300" @click="redirectTouser()">
        <img src="public/assets/Path 330.svg" class="w-8 h-8 my-4 hover:bg-gray-300" @click="clickFunction('Setting')">
    </div>
    <div class="  flex flex-col ml-6 ">
        <p class="my-4">Apps</p>
        <img src="public/assets/Image 2.png" class="w-8 h-8 my-4 hover:bg-gray-300">
        <img src="public/assets/Rectangle 88.png" class="w-8 h-8 my-4 hover:bg-gray-300">
        <img src="public/assets/Rectangle 87.png" class="w-8 h-8 my-4 hover:bg-gray-300">
        <img src="public/assets/Path 342.svg" class="w-8 h-8 my-4 hover:bg-gray-300">

        
    </div>

 </div>   
</template>

<script >
export default{
    data(){
        return{
            click_option:"Home"
        }
    },
    methods:{
        clickFunction(selected_option){
           
            this.click_option=selected_option
            console.log(this.click_option, "is clicked")
        },
        redirectTouser(){
            this.$router.push({ path: '/user' });
        }
    }
}
</script>