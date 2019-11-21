<template>
	<div class="consumer">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">累计消费要求</span>
				<input class="ipt_txt" v-model="form.consumer_require"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">累计消费达到条件进入公排。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">公排人数</span>
				<input class="ipt_txt" v-model="form.consumer_person"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">排满多少人后出局奖励。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">排满奖励</span>
				<input class="ipt_txt" v-model="form.consumer_reward"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">排满后会员所得奖励。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">公排开关</span>
				<el-radio-group v-model="form.open">
					<el-radio :label="1">开启</el-radio>
					<el-radio :label="2">关闭</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">开启则按会员累计消费金额进入公排。</p>
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
					consumer_require: '',
					consumer_person: '',
					consumer_reward: '',
					open: 1
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
