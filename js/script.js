//genera 10 indirizzi email e stampali in pagina

var app = new Vue(
	{
		el: '#root',
		data:{
			emailArray:[]
		},
		methods:{

		},
		mounted() {
			for(let i= 0; i <= 9; i++){
				axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

				.then((response) => {
					this.emailArray.push(response.data.response);
				
					}			
				)
			}			
		}
	}		
);