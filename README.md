# v-lazy-load – component that allows you create lazy-loaded images in few simple steps.

![v-lazy-load cat](https://raw.githubusercontent.com/psr1919plus21/v-lazy-load/production/img/cat_.jpg)

Get *v-lazy-load*
----------

Here several ways to get *vue-rhythm*:

**download**

Copypaste component in your project:
[Get v-lazy-load](https://raw.githubusercontent.com/psr1919plus21/v-lazy-load/production/v-lazy-load.vue)

**npm**

    npm install v-lazy-load


Usage
---------
In order to add *v-lazy-load*  you need to import *v-lazy-load* component to your project and place `<v-lazy-load></v-lazy-load>` component with it props to your template.

**Example:**
yourComponent.vue

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


After this *v-lazy-load* create an img element with blurred placeholder that will be substituted by original image when it be loaded.


Props
---------

*required:*

**imgUrl** – [String] – link to original image.

**imgAlt** – [String] – Alternative text for image, will be shown if original image not be loaded.

**imgPlaceholder** – [String] – tiny placeholder for original image. This field doesn't mark as required actually, but you will see cute cat svg image that reminds you to add placeholder if not given. Also you will see `console.warn` message. Messages will be shown on lang based on html lang attribute. `en` and `ru` is available.

example of forgotten placeholder prop:

![v-lazy-load placehilder-cat](https://raw.githubusercontent.com/psr1919plus21/v-lazy-load/production/img/cat-advicer_.jpg)


*optional:*

**blurValue** – [Number] – set value for placeholder's blur. `10` by default.

**minWidth** – [Number] – set min width for photo.

**minHeight** – [Number] – set min height of photo.

**Feel free to create an issue with bugreport or suggestions**

License
=======

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
