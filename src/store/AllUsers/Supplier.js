import axios from 'axios'

const SupplierOption= {
	namespaced: true,
	actions: {
		nocheckedSu(context) {
			axios.get('https://www.fastmock.site/mock/f5c6f529e21ab44344629c6416263a39/supplier/api/check').then(
				response => {
					context.commit('SHOW_SU', response.data.data)		
				},
				error => {
					alert(error.message)
				}
			)
		}
	},
	mutations: {
		
		SHOW_SU(state, value) {
			if(state.supliers.length!=0){
				state.supliers.length=0
			}
			state.supliers= value;
			
		/* 	for(let i=0;i<value.length;i++){
				if(value[i].isApproved==false){
					//console.log(value[i].corporateName)
					state.supliers.push(value[i]);
					
				}
			} */
		}
	},
	state: {
		supliers: [],
	},
	getters: {}
}
export default SupplierOption 
