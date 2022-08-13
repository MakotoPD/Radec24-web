<template>
  <div>
    <Hero :imageUrl="require('~/assets/car.png')"/>
    <MyServises/>
    <Cooperation/>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue';
import MyServises from '~/components/pageHome/MyServises.vue';
import Cooperation from '~/components/pageHome/Cooperation.vue';

export default {
    name: "IndexPage",
    components: { Hero, MyServises, MyServises, Cooperation },
     head() {
      return {
        script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
      };
    },
}
</script>


