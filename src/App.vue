<template>
  <div id="app">
		<router-view/>
  </div>
</template>

<script>
export default{
	data(){
		return{
			
		}
	},
	mounted() {
		
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

// .pt30{
// 	padding: 30px 0 20px;
// 	box-sizing: border-box;
// }
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
		.div_txt{
			font-weight: normal;
			font-size: 16px;
			color: #666;
		}
		.ipt_txt{
			display: block;
			width: 300px;
			height: 40px;
			border-radius: 4px;
			padding: 0 15px;
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
			padding: 10px;
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

// 信件内导航样式
.nav_inner{
	// display: flex;
	// justify-content: space-between;
	// align-items: center;
	ul{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		background: url('./assets/images/box_bg.gif') left top repeat-x;
		li{
			display: block;
			border-right: 1px solid #d9e6f4;
			padding: 0px 20px;
			text-align: center;
			height: 32px;
			line-height: 32px;
			font-size: 12px;
			color: #3b73ac;
			cursor: pointer;
			&.active{
				color: #1C395B;
				font-weight: bold;
				background: url('./assets/images/tagstitle_a_bg.gif') repeat-x left top;
				background-size: 100% 100%;
			}
		}
	}
}

// 信件搜索样式
.right_search{
	font-size: 12px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding-right: 30px;
	margin-top: 20px;
	.ipt_txt{
		display: inline-block;
		width: 120px;
		height: 30px;
		border-radius: 4px;
		padding: 0 5px;
		margin: 0 10px;
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
	.el-date-editor{
		width: 300px;
		height: 30px;
		display: flex;
		align-items: center;
		margin: 0 10px;
		.el-range-separator{
			height: auto;
		}
	}
	.el-input__icon{
		height: auto;
	}
	.el-button{
		width: 80px;
		height: 30px;
		line-height: 30px;
		padding: 0;
		font-size: 12px;
	}
}
// 用户列表样式
.userList{
		padding: 30px;
		box-sizing: border-box;
		p{
			text-align: right;
			margin: 15px 0 0;
			font-size: 14px;
			color: #999;
		}
	}
</style>
