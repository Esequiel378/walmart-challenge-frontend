import { mount } from '@vue/test-utils';
import ProductCard from '@/components/layouts/ProductCard.vue';

describe('ProductCard component test: ', () => {

  test('Data is rendering', () => {
    const product = {
      id: 1,
      brand: "Marca1",
      description: "Televisión 54''",
      image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
      price: 80000,
      discount: 30
    }

    const wrapper = mount(ProductCard, {
      propsData: {
        product: product,
      },
    });

    expect(wrapper.html()).toContain(product.brand)
    expect(wrapper.html()).toContain(product.description)
    expect(wrapper.html()).toContain(product.price)
  })

  test('Discount calculation', () => {
    const product = {
      id: 1,
      brand: "Marca1",
      description: "Televisión 54''",
      image: "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
      price: 80000,
      discount: 30
    }

    // 80000 - (80000 * .3) = 56000
    const discount = 56000

    const wrapper = mount(ProductCard, {
      propsData: {
        product: product,
      },
    });

    expect(wrapper.html()).toContain(product.discount)
  })
});
