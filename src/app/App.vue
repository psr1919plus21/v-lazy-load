<template>
  <div class="app">
    <vue-lazy-load
      :imgUrl="catPhoto"
      :imgAlt="'Cute cat'"
      :minHeight="619"
    />
    <Chat />
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
      catPhoto: 'https://ptzgovorit.ru/sites/default/files/styles/885x100proc/public/insert_images/-gle7n-jy8u.jpg?itok=i5KpNzAT'
    }
  }
}
</script>
