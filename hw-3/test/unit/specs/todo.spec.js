import Vue from 'vue'
import todo from '@/todo/todo'

describe('todo.vue', () => {
  it('add', () => {
    const Constructor = Vue.extend(todo)
    const vm = new Constructor().$mount()
    let old = vm.todos.length
    vm.addTodo(1)
    expect(vm.todos.length)
      .toEqual(old + 1)
  })
})
describe('todo.vue', () => {
  it('delete', () => {
    const Constructor = Vue.extend(todo)
    const vm = new Constructor().$mount()
    let old = vm.todos.length
    vm.deleteTodo(1)
    expect(vm.todos.length)
      .toEqual(old - 1)
  })
})
