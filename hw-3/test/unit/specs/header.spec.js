import Vue from 'vue'
import header from '@/todo/header'

describe('header.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(header)
    const vm = new Constructor().$mount()
    expect(vm.$el.h1)
      .toEqual('Todo')
  })
})
