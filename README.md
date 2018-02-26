# v-lazy-load 

A VueJs component for easily creating lazy loaded images.

![v-lazy-load-cat](https://raw.githubusercontent.com/psr1919plus21/v-lazy-load/production/img/cat_.jpg)

## Installation

Either copy and paste the [_v-lazy-load_ component](https://raw.githubusercontent.com/psr1919plus21/v-lazy-load/production/v-lazy-load.vue) into your project, or install it via `npm`:
```
$ npm install v-lazy-load
```

## Usage

Import *v-lazy-load* into your project (as described above) and place the `<v-lazy-load></v-lazy-load>` component, with its props, inside your template. `yourComponent.vu` should look something like this:

```
<template>
  <div class="app">

    <div class="cat-image">
      <v-lazy-load
        :imgUrl="linkToCatPhoto"
        :imgPlaceholder="linkToPlaceholderPhoto"
        :imgAlt="'Cute cat'"
      />
    </div>

  </div>
</template>

<script>
  import VLazyLoad from 'v-lazy-load/v-lazy-load.vue';

  export default {
    components: {
      VLazyLoad
    }
  }
</script>
```

Now, *v-lazy-load* will create an `img` element with a blurred placeholder, which will be substituted by the original image once it loads.

## Props

*Required:*

**imgUrl** – [String] – Link to original image.

**imgAlt** – [String] – Alternative text for image; shown if original image cannot load.

**imgPlaceholder** – [String] – Placeholder for original image. Not technically marked as required, but a cute cat svg and a `console.warn` message will remind you to add a placeholder if one is not found (message given based on HTML `lang` attribute; `en` and `ru` available):

![v-lazy-load-placehilder-cat](https://raw.githubusercontent.com/psr1919plus21/v-lazy-load/production/img/cat-advicer_.jpg)


*Optional:*

**blurValue** – [Number] – Set value of placeholder blur (`10` by default).

**minWidth** – [Number] – Set minimum width of image.

**minHeight** – [Number] – Set minimum height of image.

## Contribute
Bug reports and issues are welcome; please [open an issue](https://github.com/psr1919plus21/v-lazy-load/issues/new) in this repository.

## License

Copyright (c) 2018 Philipp Gaponenko (psr1919plus21@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
