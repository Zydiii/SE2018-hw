import Vue from 'vue'
import tabs from '@/todo/tabs'

describe('tabs.vue', () => {
  it('compute', () => {
    const Constructor = Vue.extend(tabs)
    const vm = new Constructor().$mount()
    let a = vm.computed()
    vm.clearAll()
    expect(vm.computed())
      .toEqual(a)
  })
})
