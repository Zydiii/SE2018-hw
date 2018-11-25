import Vue from 'vue';
import app from '../../src/app.vue';



describe('test1', () => {
    it('hfhghghg', () => {
        let vm = new Vue(app).$mount();
        expect(vm.a).toEqual(1);
    });
});
