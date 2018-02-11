<style>
.vue-lazy-load__image {
  display: block;
}

</style>

<template>
  <div class="vue-lazy-load">
    <img
      class="vue-lazy-load__image"
      :alt="imgAlt"
      :src="imgUrl"
      :style="customStyles" >
  </div>
</template>

<script>

// done – показывать картинку
// done – передавать высоту через пропс, чтобы не ждать загрузки
// – передавать картинку–плейсхолдер и большую картинку
// – если картинка плейсхолдер не найдена – показывать стандартный плейсхолдер
// – передавать цвет в качестве плейсхолдера (это может быть цвет или градиент)
// – обработать случай с ретиной


export default {
  props: {
    imgUrl: {
      type: String,
      required: true
    },

    imgAlt: {
      type: String,
      required: true
    },

    minWidth: {
      type: Number
    },

    minHeight: {
      type: Number
    }
  },

  data() {
    return {
      test: 'dfdf',
      customStyles: {}
    }
  },

  beforeMount() {
    if(this.minWidth) {
      this.customStyles.minWidth = `${this.minWidth}px`;
    }

    if(this.minHeight) {
      this.customStyles.minHeight = `${this.minHeight}px`;
    }
  }
}

</script>
