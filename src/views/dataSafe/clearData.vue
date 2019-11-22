<template>
	<div class="clearData">
		<el-button type="primary" @click="onClear">清空数据</el-button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			onClear(){
				
			}
		},
		mounted() {
			this.$prompt('管理密码', '此操作将清空会员数据，请谨慎', {
			  confirmButtonText: '确定',
			  closeOnClickModal: false,
			  closeOnPressEscape: false,
			  inputErrorMessage: '管理密码不正确',
			  cancelButtonText: '取消',
			  beforeClose:(action, instance, done) => {
				  if (action === 'confirm') {
					  // done();
				  }else{
					  done();
				  }
			  }
			}).then(({ value }) => {
			  console.log(value);
			}).catch(() => {
			  
			});
		}
	}
</script>

<style scoped lang="scss">
	.clearData{
		padding: 30px;
		box-sizing: border-box;
		font-size: 14px;
	}
</style>
