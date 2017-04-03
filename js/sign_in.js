// register modal component
Vue.component('sign-in-modal', {
	template: '#sign-in-modal-template'
})
// start app
new Vue({
	el: '#app',
	data: {
		showModal: false
	}
})