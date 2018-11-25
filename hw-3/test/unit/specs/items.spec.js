import Vue from 'vue'
import items from '@/todo/items'

describe('items.vue', () => {
  it('should delete item', () => {
    const Constructor = Vue.extend(items)
    const vm = new Constructor().$mount()
    vm.deleteTodo()
    expect(vm.$props)
      .toEqual(1)
  })
})
