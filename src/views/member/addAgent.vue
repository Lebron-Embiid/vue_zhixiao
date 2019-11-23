<template>
	<div class="addAgent">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">所属会员</span>
				<input class="ipt_txt" v-model="form.vip"/>
			</div>
			<div class="form_item">
				<span class="left_txt">代理名称</span>
				<input class="ipt_txt" v-model="form.agent_name"/>
			</div>
			<div class="form_item">
				<span class="left_txt">代理区域</span>
				<el-cascader :options="options" :show-all-levels="false"></el-cascader>
			</div>
			<div class="form_item">
				<span class="left_txt">详细地址</span>
				<input class="ipt_txt" v-model="form.desc_address"/>
			</div>
			<div class="form_item">
				<span class="left_txt">是否可关闭</span>
				<el-select v-model="form.level" placeholder="请选择">
					<el-option
					  v-for="item in selects"
					  :key="item.value"
					  :label="item.label"
					  :value="item.value">
					</el-option>
				  </el-select>
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
					agent_name: '',
					
					desc_address: '',
					level: ''
				},
				options: [],
				selects: [{
				  value: '0',
				  label: '省代'
				}, {
				  value: '1',
				  label: '市代'
				}, {
				  value: '2',
				  label: '区代'
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

<style>
</style>
