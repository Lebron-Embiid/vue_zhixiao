<template>
	<div class="">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">消费积分名称</span>
				<input class="ipt_txt" v-model="form.point_name"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt=""></p>
			</div>
			
			<div class="form_item">
				<span class="left_txt">是否可关闭</span>
				<el-select v-model="form.close" placeholder="请选择">
					<el-option
					  v-for="item in selects"
					  :key="item.value"
					  :label="item.label"
					  :value="item.value">
					</el-option>
				  </el-select>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt=""></p>
			</div>
			
			<div class="form_item">
				<span class="left_txt">虚拟占位</span>
				<el-radio-group v-model="form.virtual">
					<el-radio :label="1">开启</el-radio>
					<el-radio :label="2">关闭</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">开启【虚拟占位】功能注册自动虚拟占位，升级正式会员才入网体。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">提现银行</span>
				<textarea name="" id="" v-model="form.bank" cols="30" rows="10"></textarea>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">提现支持银行列表，每个以","隔开。</p>
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
