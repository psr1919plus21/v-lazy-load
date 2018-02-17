import {mount} from '@vue/test-utils';
import VueLazyLoad from '../app/vue-lazy-load.vue';


describe('vue-lazy-load', () => {

  it('should render original image', (done) => {
    const wrapper = mount(VueLazyLoad, {
      propsData: {
        imgUrl: 'cat.jpg',
        imgAlt: 'cute cat'
      }
    });

    const imgElement = wrapper.find('.vue-lazy-load__image_original');

    setTimeout(() => {
      expect(imgElement.element.src).toBe('cat.jpg');
      done();
    }, 0);

  });

  it('should render alt text for image', () => {
    const wrapper = mount(VueLazyLoad, {
      propsData: {
        imgUrl: 'cat.jpg',
        imgAlt: 'cute cat'
      }
    });

    const imgElement = wrapper.find('.vue-lazy-load__image');
    expect(imgElement.element.alt).toBe('cute cat');
  });

  it('should set img min-width if passed', () => {
    const wrapper = mount(VueLazyLoad, {
      propsData: {
        imgUrl: 'cat.jpg',
        imgAlt: 'cute cat',
        minWidth: 500
      }
    });

    const imgElement = wrapper.find('.vue-lazy-load__image');
    expect(imgElement.element.style.minWidth).toBe('500px');
  });

  it('should set img min-height if passed', () => {
    const wrapper = mount(VueLazyLoad, {
      propsData: {
        imgUrl: 'cat.jpg',
        imgAlt: 'cute cat',
        minHeight: 600
      }
    });

    const imgElement = wrapper.find('.vue-lazy-load__image');
    expect(imgElement.element.style.minHeight).toBe('600px');
  });

  it('should set img-placeholder', () => {
    const wrapper = mount(VueLazyLoad, {
      propsData: {
        imgUrl: 'cat.jpg',
        imgPlaceholder: 'cat_placeholder.jpg'
      }
    });

    const imgElement = wrapper.find('.vue-lazy-load__image');
    expect(imgElement.element.src).toBe('cat_placeholder.jpg');
  });
})


















//
