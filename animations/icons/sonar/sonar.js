import Vue from 'vue'

export default Vue.directive({
    bind: function() {
        console.log('bind')
    },
    update: function(newValue, oldValue) {
        console.log(newValue)
    }
})
