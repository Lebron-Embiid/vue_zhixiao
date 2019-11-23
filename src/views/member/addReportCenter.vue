<template>
	<div class="addReportCenter">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">所属会员</span>
				<input class="ipt_txt" v-model="form.vip"/>
			</div>
			<div class="form_item">
				<span class="left_txt">中心名称</span>
				<input class="ipt_txt" v-model="form.report_name"/>
			</div>
			<div class="form_item">
				<span class="left_txt">中心地址</span>
				<input class="ipt_txt" v-model="form.report_address"/>
			</div>
			
			<div class="form_item noborder">
				<span class="left_txt"></span>
				<el-button type="primary" class="submit_btn" @click="onSubmit">提交</el-button>
			</div>
		</el-form>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				form:{
					vip: '',
					report_name: '',
					report_address: ''
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
