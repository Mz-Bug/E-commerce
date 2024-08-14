<template>
  <div>
    <Header />
    <Banner />
    <Mobileprod />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Banner from '../components/Banner.vue';
import Mobileprod from '../components/Mobileprod.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    Mobileprod,
    Footer
  },
};
</script>

