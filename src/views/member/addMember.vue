<template>
	<div class="addMember">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">会员账号</span>
				<div>A00010</div>
			</div>
			<div class="form_item">
				<span class="left_txt">会员级别</span>
				<el-select v-model="form.level" placeholder="请选择">
					<el-option
					  v-for="item in selects"
					  :key="item.value"
					  :label="item.label"
					  :value="item.value">
					</el-option>
				  </el-select>
			</div>
			<div class="form_item">
				<span class="left_txt">会员姓名</span>
				<input class="ipt_txt" v-model="form.vip_name"/>
			</div>
			<div class="form_item">
				<span class="left_txt">推荐人</span>
				<input class="ipt_txt" v-model="form.referrer"/>
			</div>
			<div class="form_item">
				<span class="left_txt">接点人</span>
				<input class="ipt_txt" v-model="form.contact"/>
			</div>
			<div class="form_item">
				<span class="left_txt">报单中心</span>
				<input class="ipt_txt" v-model="form.report"/>
			</div>
			<div class="form_item">
				<span class="left_txt">电子邮箱</span>
				<input class="ipt_txt" v-model="form.email"/>
			</div>
			<div class="form_item">
				<span class="left_txt">手机号码</span>
				<input class="ipt_txt" v-model="form.phone"/>
			</div>
			<div class="form_item">
				<span class="left_txt">所在区域区域</span>
				<el-cascader :options="options" :show-all-levels="false"></el-cascader>
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
					vip_name: '',
					referrer: '',
					contact: '',
					report: '',
					email: '',
					phone: '13800000010',
					level: ''
				},
				options: [],
				selects: [{
				  value: '0',
				  label: '游客'
				}, {
				  value: '1',
				  label: 'VIP会员'
				}, {
				  value: '2',
				  label: '联创'
				}, {
				  value: '3',
				  label: '经理'
				}, {
				  value: '4',
				  label: '主管'
				}, {
				  value: '5',
				  label: '分公司'
				}]
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
	.addMember{
		.form_box{
			.form_item{
				div{
					font-weight: normal;
				}
			}
		}
	}
</style>
