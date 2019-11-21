<template>
	<div class="customForm">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">自定义表单</span>
				<textarea class="textarea" name="" id="" v-model="form.custom_content" cols="30" rows="10"></textarea>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">会员中心个人资料下方展示。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">条幅开关</span>
				<el-radio-group v-model="form.custom_open">
					<el-radio :label="1">是</el-radio>
					<el-radio :label="2">否</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">会员注册时控制显示。</p>
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
					custom_content: '',
					custom_open: 1
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

<style scoped>
	.customForm .form_box .form_item .textarea{
		width: 550px;
		height: 340px;
	}
</style>