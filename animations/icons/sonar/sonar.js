import Vue from 'vue'

export default Vue.directive('sonar', {
    bind: function() {
        this.el.className = 'sonar'
    },
    update: function(newValue, oldValue) {
        console.log(newValue);
    }
})

