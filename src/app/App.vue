<style media="screen">

  .cat-image {
    margin: auto;
    max-width: 320px;
    min-height: 250px;
  }
</style>

<template>
  <div class="app">

    <div class="cat-image">
      <vue-lazy-load
        :imgUrl="catPhoto"

        :imgAlt="'Cute cat'"
        :minHeight="250"
      />
    </div>

    <!-- <Chat /> -->
  </div>
</template>

<script>
import Chat from './Chat';
import VueLazyLoad from './vue-lazy-load';

export default {
  components: {
    Chat,
    VueLazyLoad
  },

  data() {
    return {
      catPhoto: 'https://ptzgovorit.ru/sites/default/files/styles/885x100proc/public/insert_images/-gle7n-jy8u.jpg?itok=i5KpNzAT',
      placeholderPhoto: 'https://pbs.twimg.com/media/DO7FnQyX4AAMLTR.jpg'
    }
  }
}
</script>
