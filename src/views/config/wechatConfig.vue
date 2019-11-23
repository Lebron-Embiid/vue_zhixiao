<template>
	<div class="wechatConfig">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">自定义TOKEN</span>
				<input class="ipt_txt" v-model="form.token"/>
			</div>
			<div class="form_item">
				<span class="left_txt">微信端配置</span>
				<el-radio-group v-model="form.config">
					<el-radio :label="1">开启</el-radio>
					<el-radio :label="2">关闭</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">是否开启微信端</p>
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
					token: '',
					config: 1
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

<style>
</style>
