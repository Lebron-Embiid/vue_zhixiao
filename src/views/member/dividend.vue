<template>
	<div class="dividend">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">上次分红时间</span>
				<div>2019-08-27 15:10</div>
			</div>
			<div class="form_item">
				<span class="left_txt">分红方式</span>
				<div>
					<el-radio-group v-model="form.style">
						<el-radio :label="1">手动输入</el-radio>
						<el-radio :label="2">订单金额</el-radio>
					</el-radio-group>
					选择"手动输入"则按填写的金额分红；选"订单金额"则按上次分红时间到现在的完成订单金额分红
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">全体代理平分</span>
				<div>
					<el-radio-group v-model="form.out">
						<el-radio :label="1">按级别分</el-radio>
						<el-radio :label="2">全体平分</el-radio>
					</el-radio-group>
					选择"按级别分"则按各级设置的比例分；选"全体平分"则全体付费代理商平分
				</div>
			</div>
			
			<div class="form_item noborder">
				<span class="left_txt"></span>
				<el-button type="primary" class="submit_btn" @click="onSubmit">马上结算</el-button>
			</div>
		</el-form>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				form:{
					time: '',
					style: 1,
					out: 1
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
	.dividend{
		.form_box{
			.el-radio-group{
				width: 200px;
			}
			.form_item{
				div{
					font-weight: normal;
				}
			}
		}
	}
</style>
