import { sonar } from './index'
import Vue from 'vue'

new Vue({
    el: '#app',
    replace: false,
    data: {
        message: 'Hello world!!!'
    },
    template: require('./demo.html')
})
