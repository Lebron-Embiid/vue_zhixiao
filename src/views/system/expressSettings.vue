<template>
	<div class="expressSettings">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">是否开启物流及时查询</span>
				<el-radio-group v-model="form.express">
					<el-radio :label="1">开启</el-radio>
					<el-radio :label="2">关闭</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt=""></p>
			</div>
			<div class="form_item">
				<span class="left_txt">电商ID</span>
				<input class="ipt_txt" v-model="form.trade_id"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">快递100申请的你的ID。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">电商加密私钥</span>
				<input class="ipt_txt" v-model="form.trade_key"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">申请认证之后快递100提供的私钥。</p>
			</div>
			
			<div class="form_item noborder">
				<span class="left_txt"></span>
				<el-button type="primary" class="submit_btn" @click="onSubmit">确认修改</el-button>
			</div>
		</el-form>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				form:{
					express: 1,
					trade_id: '',
					trade_key: ''
				}
			}
		},
		methods: {
		  onSubmit() {
			console.log(this.form);
		  }
		}
	}
</script>

<style scoped lang="scss">
	
</style>
