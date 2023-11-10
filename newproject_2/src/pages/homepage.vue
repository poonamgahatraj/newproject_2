<template>
    <div>
        <navbarVue/>
    </div>
    <div class="flex"> 
        <div>
            <sidenavVue/>
        </div>
        <div>
            <about/>
        </div>
    </div>

    <router-link to="/user">User</router-link>
</template>

<script>
import navbarVue from "../components/navbar.vue";
import sidenavVue from "../components/sidenav.vue";
import about from "../components/about.vue";


export default{
    components:{navbarVue,sidenavVue,about,},
   
}

</script>
