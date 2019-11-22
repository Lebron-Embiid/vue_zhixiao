<template>
	<div class="addRoles pt30">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">角色名称</span>
				<input class="ipt_txt" v-model="form.roles_name"/>
			</div>
			<div class="form_item">
				<span class="left_txt">角色权限</span>
				<div class="permission_box">
					<div class="per_item" v-for="(item,index) in checkList" :key="index">
						<p>{{item.type}}：</p>
						<el-checkbox-group v-model="item.select">
							<el-checkbox :label="list" v-for="(list,idx) in item.list" :key="idx"></el-checkbox>
						</el-checkbox-group>
					</div>
				</div>
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
					roles_name: '',
					roles_permission: ''
				},
				checkList: [
					{
						type: '会员管理',
						list: ['渠道商级别','股东分红','渠道商管理','区域代理','会员管理','会员级别','报单中心'],
						select: []
					},{
						type: '接口设置',
						list: ['支付宝支付参数','微信端配置','微信支付参数'],
						select: []
					},{
						type: '商城管理',
						list: ['防伪二维码','溯源二维码','配送方式','产品管理','订单管理'],
						select: []
					},{
						type: '支付方式',
						list: ['第三方支付','二维码管理'],
						select: []
					},{
						type: '财务统计',
						list: ['业绩排名','升级申请','提现记录','资金明细'],
						select: []
					},{
						type: '系统管理',
						list: ['系统信息','系统设置','内部信件','数据维护'],
						select: []
					},{
						type: '后台用户',
						list: ['用户管理','用户角色','修改密码'],
						select: []
					},{
						type: '网站基础',
						list: ['新闻管理','单页管理'],
						select: []
					}
				]
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
	.permission_box{
		p{
			color: #f00;
			font-size: 14px;
			margin: 10px 0;
		}
	}
</style>
