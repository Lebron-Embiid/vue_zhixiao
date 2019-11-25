<template>
	<div class="sendLetter pt30">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">信件主题</span>
				<input class="ipt_txt" v-model="form.letter_theme"/>
			</div>
			<div class="form_item">
				<span class="left_txt">接收会员</span>
				<el-radio-group v-model="form.get_vip" style="margin-right: 20px;">
					<el-radio :label="1">全部会员</el-radio>
					<el-radio :label="2">按会员组</el-radio>
					<el-radio :label="3">手动输入</el-radio>
				</el-radio-group>
				<el-select v-model="form.select_vip" v-if="form.get_vip == 2" placeholder="请选择会员级别">
					<el-option
					  v-for="item in selects"
					  :key="item.value"
					  :label="item.label"
					  :value="item.value">
					</el-option>
				  </el-select>
				  <div class="right_open" v-if="form.get_vip == 3">
					<input type="text" class="ipt_txt"> 每个会员之间以“,”号隔开
				  </div>
			</div>
			<div class="form_item">
				<span class="left_txt">信件内容</span>
				<textarea name="" id="" v-model="form.letter_content" cols="30" rows="10"></textarea>
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
					letter_theme: '',
					get_vip: 1,
					letter_content: '',
					select_vip: ''
				},
				selects: [{
				  value: '0',
				  label: '游客'
				}, {
				  value: '1',
				  label: 'VIP'
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
	.right_open{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-weight: normal;
		input{
			margin-right: 10px;
		}
	}
</style>
