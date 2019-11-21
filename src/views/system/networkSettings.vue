<template>
	<div class="networkSettings">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">佣金名称</span>
				<input class="ipt_txt" v-model="form.commission_name"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt=""></p>
			</div>
			<div class="form_item">
				<span class="left_txt">消费积分名称</span>
				<input class="ipt_txt" v-model="form.point_name"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt=""></p>
			</div>
			<div class="form_item">
				<span class="left_txt">佣金与积分混合名称</span>
				<input class="ipt_txt" v-model="form.mixed_name"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt=""></p>
			</div>
			<div class="form_item">
				<span class="left_txt">商品激活的名称</span>
				<input class="ipt_txt" v-model="form.active_name"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">添加激活商品时一定要与此相同，并且最好不与其他商品名相同。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">系统风格</span>
				<el-radio-group v-model="form.window_type">
				  <el-radio :label="1">风格1</el-radio>
				  <el-radio :label="2">风格2</el-radio>
				  <el-radio :label="3">风格3</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt=""></p>
			</div>
			<div class="form_item">
				<span class="left_txt">PC系统风格</span>
				<el-radio-group v-model="form.PC_window_type">
				  <el-radio :label="1">风格1</el-radio>
				  <el-radio :label="2">风格2</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt=""></p>
			</div>
			<div class="form_item">
				<span class="left_txt">自动收货</span>
				<el-radio-group v-model="form.receipt">
				  <el-radio :label="1">开启</el-radio>
				  <el-radio :label="2">关闭</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">开启【自动收货】功能对应设置x小时后，未确认收货的订单将自动收货。</p>
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
				<span class="left_txt">收货时间</span>
				<input class="ipt_txt" v-model="form.receipt_time"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">小时 未确认收款的订单自动确认收货 例如:24 即为24小时后自动确认收货。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">关注公众号</span>
				<el-radio-group v-model="form.public">
				  <el-radio :label="1">开启</el-radio>
				  <el-radio :label="2">关闭</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">是否需要关注公众号，开启则需要在 系统信息->公众号二维码 上传公众号二维码图片。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">强制关注</span>
				<el-radio-group v-model="form.attention">
				  <el-radio :label="1">开启</el-radio>
				  <el-radio :label="2">关闭</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">是否强制关注公众号，开启则在会员注册之后弹出公众号二维码。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">是否开启佣金购物</span>
				<el-radio-group v-model="form.commission_shop">
				  <el-radio :label="1">开启</el-radio>
				  <el-radio :label="2">关闭</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">开启则可以使用佣金支付进行购物。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">是否开启积分购物</span>
				<el-radio-group v-model="form.point_shop">
				  <el-radio :label="1">开启</el-radio>
				  <el-radio :label="2">关闭</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">开启则可以使用积分支付进行购物。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">是否开启混合积分购物</span>
				<el-radio-group v-model="form.mixed_shop">
				  <el-radio :label="1">开启</el-radio>
				  <el-radio :label="2">关闭</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">开启则可以使用混合积分支付进行购物，注意：在佣金购物与积分购物同时开始的情况下才能开启此开关，否则造成损失自负。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">新订单提醒</span>
				<el-radio-group v-model="form.new_order">
				  <el-radio :label="1">开启</el-radio>
				  <el-radio :label="2">关闭</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">是否开启新订单提醒。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">评论功能</span>
				<el-radio-group v-model="form.comment">
				  <el-radio :label="1">开启</el-radio>
				  <el-radio :label="2">关闭</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">是否开启评论功能。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">支付宝支付</span>
				<el-radio-group v-model="form.alipay">
				  <el-radio :label="1">开启</el-radio>
				  <el-radio :label="2">关闭</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">是否开启支付宝支付。</p>
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
				form: {
					commission_name: '',
					point_name: '',
					mixed_name: '',
					active_name: '',
					window_type: 1,
					PC_window_type: 1,
					receipt: 1,
					virtual: 1,
					receipt_time: '',
					public: 1,
					attention: 1,
					commission_shop: 1,
					point_shop: 1,
					mixed_shop: 1,
					new_order: 1,
					comment: 1,
					alipay: 1
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
