<template>
  <div id="app">
		<header-nav></header-nav>
		<!-- <router-view/> -->
  </div>
</template>

<script>
import HeaderNav from './components/Header.vue'
export default{
	data(){
		return{
			
		}
	},
	components:{
		HeaderNav
	}
}
</script>

<style lang="scss">
html,body,#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
ul{
	list-style: none;
	margin: 0;
	padding: 0;
}
a{
	text-decoration: none;
}

.form_box{
	// padding-left: 50px;
	.form_item{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-bottom: 1px solid #e8eef6;
		font-size: 12px;
		font-weight: bold;
		padding: 12px 0;
		box-sizing: border-box;
		&.noborder{
			border-bottom: 0;
		}
		.left_txt{
			display: block;
			width: 180px;
			text-align: right;
			margin-right: 20px;
		}
		.ipt_txt{
			display: block;
			width: 300px;
			height: 40px;
			border-radius: 4px;
			padding: 0 5px;
			box-sizing: border-box;
			font-size: 12px;
			outline: none;
			transition: all .5s ease;
			border: 1px solid #ccc;
			&:focus{
				border-color: #66afe9;
				box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
			}
		}
		textarea{
			display: block;
			width: 300px;
			height: 80px;
			outline: none;
			padding: 5px;
			border-radius: 4px;
			box-sizing: border-box;
			border: 1px solid #ccc;
			transition: all .5s ease;
			&:focus{
				border-color: #66afe9;
				box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
			}
		}
		.el-radio-group,.el-select{
			width: 300px;
		}
		.right_till{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			color: #037ABD;
			margin: 0;
			margin-left: 20px;
			img{
				margin-right: 5px;
				margin-bottom: 3px;
			}
			i{
				font-style: inherit;
				color: #f00;
			}
		}
		.submit_btn{
			
		}
	}
}
</style>
