<template>
	<div class="addLevel pt30">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">级别名称</span>
				<input class="ipt_txt" v-model="form.level_name"/>
			</div>
			<div class="form_item">
				<span class="left_txt">升级条件</span>
				<div class="level_txt">
					<p>累积金额 <input type="text">元</p>
					<p>直推总人数达 <input type="text">人</p>
					<p>直推总消费额达 <input type="text">元</p>
					<p>自网体会员总数达 <input type="text">人</p>
					<p>团队总消费额达 <input type="text">元</p>
					<p>推荐VIP会员达 <input type="text">人</p>
					<p>推荐联创达 <input type="text">人</p>
					<p>推荐经理达 <input type="text">人</p>
					<p>推荐主管达 <input type="text">人</p>
					<p>推荐分公司达 <input type="text">人</p>
					<p>推荐游客达 <input type="text">人</p>
					<el-radio-group v-model="form.condition" :fill="color">
						<el-radio :label="1">同时满足</el-radio>
						<el-radio :label="2">满足其中一个</el-radio>
					</el-radio-group>
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">赠送积分</span>
				<input class="ipt_txt" v-model="form.gift_points"/>
			</div>
			<div class="form_item">
				<span class="left_txt">赠送佣金</span>
				<input class="ipt_txt" v-model="form.gift_price"/>
			</div>
			<div class="form_item">
				<span class="left_txt">静态奖项</span>
				<div class="level_txt">
					<p>奖励金额 <input type="text">元/日</p>
					<p>封顶金额 <input type="text">元</p>
					<p>冻结时间 <input type="text">天</p>
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">直推滑落奖</span>
				<div class="level_txt">
					<p><input type="text">% 或 <input type="text">元 例如：10% 或 500元(因代理商会往下滑落，故直推滑落多级奖和团队多级提成是不一样的)</p>
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">直推滑落多级奖</span>
				<div class="level_txt">
					<p><input type="text">% (比例) 例如：10%,9%,8% 多层直推间推奖励，根据推荐关系</p>
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">直推滑落多级奖</span>
				<div class="level_txt">
					<div class="add_box">
						<span>奖励要求</span>
						<ul>
							<li>推荐<input type="text">人可拿<input type="text">层 <a href="">删除</a></li>
							<li>推荐<input type="text">人可拿<input type="text">层 <a href="">删除</a></li>
							<li>推荐<input type="text">人可拿<input type="text">层 <a href="">删除</a></li>
						</ul>
						<el-button type="primary" size="mini" @click="add">添加一个要求</el-button>
					</div>
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">直推团体推荐奖</span>
				<div class="level_txt">
					<p>VIP会员：<input type="text">%</p>
					<p>联创：<input type="text">%</p>
					<p>经理：<input type="text">%</p>
					<p>主管：<input type="text">%</p>
					<p>分公司：<input type="text">%</p>
					<p>游客：<input type="text">%</p>
					<el-radio-group v-model="form.recommend" :fill="color">
						<el-radio :label="1">开启推荐奖</el-radio>
						<el-radio :label="2">关闭推荐奖</el-radio>
					</el-radio-group>
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">网体团队多级复购奖</span>
				<div class="level_txt">
					<p>VIP会员：<input type="text">%</p>
					<p>联创：<input type="text">%</p>
					<p>经理：<input type="text">%</p>
					<p>主管：<input type="text">%</p>
					<p>分公司：<input type="text">%</p>
					<p>游客：<input type="text">%</p>
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">直推团体推荐奖</span>
				<div class="level_txt">
					<div class="add_box">
						<span>奖励要求</span>
						<ul>
							<li>推荐<input type="text">人可拿<input type="text">层 <a href="">删除</a></li>
							<li>推荐<input type="text">人可拿<input type="text">层 <a href="">删除</a></li>
							<li>推荐<input type="text">人可拿<input type="text">层 <a href="">删除</a></li>
						</ul>
						<!-- <button>添加一个要求</button> -->
						<el-button type="primary" size="mini" @click="add">添加一个要求</el-button>
					</div>
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">团队无限级差奖</span>
				<div class="level_txt">
					<p><input type="text">% 比例：10% (例8%，该级别能拿网体团队所有新增代理费的8%，但是网体团队里若有级别拿了5%，就要递减，就是级差制，确保最多不超过8%)</p>
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">复购团队级差</span>
				<div class="level_txt">
					<el-radio-group v-model="form.team" :fill="color">
						<el-radio :label="1">开启</el-radio>
						<el-radio :label="2">关闭</el-radio>
					</el-radio-group>
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">正常消费团队无限级差奖</span>
				<div class="level_txt">
					<p><input type="text">% 比例：10% (例8%，该级别能拿网体团队所有新增代理费的8%，但是网体团队里若有级别拿了5%，就要递减，就是级差制，确保最多不超过8%)</p>
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">低价促销团队无限级差奖</span>
				<div class="level_txt">
					<p><input type="text">% 比例：10% (例8%，该级别能拿网体团队所有新增代理费的8%，但是网体团队里若有级别拿了5%，就要递减，就是级差制，确保最多不超过8%)</p>
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">平级安慰奖</span>
				<div class="level_txt">
					<p><input type="text">% 或<input type="text">元 例如：1% 或 100元</p>
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">向上拿提成</span>
				<div class="level_txt">
					<p><input type="text">% (比例)例如：10%,9%,8% 向上拿提成多级奖励</p>
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">股权全球分红比例</span>
				<div class="level_txt">
					<p><input type="text">% 例如：8% 则该级别的人平分平台盈利的8%</p>
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">达标奖</span>
				<div class="level_txt">
					<p>设置会员满<input type="text"> 层 达标，达标奖 <input type="text">元 <b>说明：此奖励多轨制中出现，层满立即发放</b></p>
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">划拨到积分</span>
				<div class="level_txt">
					<p><input type="text"> % 例如：10% 即该级别代理所得佣金需实时划拨该比例到积分</p>
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">报单奖励</span>
				<div class="level_txt">
					<p><input type="text"> %</p>
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">排序</span>
				<div class="level_txt">
					<p><input type="text">填写 0至99 数字，可不填，默认99 排在最后</p>
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">消费折扣</span>
				<div class="level_txt">
					<p><input type="text">9为9折,默认10 ，不打折</p>
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">级别权限</span>
				<div class="permission_box">
					<div class="per_item" v-for="(item,index) in checkList" :key="index">
						<p>{{item.type}}：</p>
						<el-checkbox-group v-model="item.select" @change="handleCheckedChange">
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
				color: '#ff0000',
				form:{
					level_name: '',
					level_permission: '',
					condition: 1,
					gift_points: '',
					gift_price: '',
					recommend: 1,
					team: 1
				},
				checkList: [
					{
						type: '会员中心',
						list: ['系统首页','系统公告','站内信件'],
						select: []
					},{
						type: '人脉网络',
						list: ['安置结构','推荐结构','推荐列表'],
						select: []
					},{
						type: '业务管理',
						list: ['会员注册','会员升级','报单中心','报单记录','渠道商'],
						select: []
					},{
						type: '财务管理',
						list: ['资金明细','现金转账','现金提现','资金转换','现金充值'],
						select: []
					},{
						type: '产品中心',
						list: ['产品订购','订单管理'],
						select: []
					},{
						type: '账户设置',
						list: ['基本信息','修改密码','邮箱验证'],
						select: []
					}
				]
			}
		},
		methods: {
		  onSubmit() {
			console.log(this.form);
		  },
		  handleCheckedChange(value){
			  console.log(value);
			  console.log(this.checkList);
		  },
		  add(){
			  
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
	.level_txt{
		max-width: 70%;
		p{
			font-weight: normal;
			b{
				font-weight: normal;
				color: #f00;
			}
		}
		input{
			margin: 0 5px;
			width: 60px;
			height: 20px;
			border-radius: 4px;
			padding: 0 5px;
			box-sizing: border-box;
			font-size: 12px;
			outline: none;
			transition: all .5s ease;
			border: 1px solid #ccc;
			&:focus{
				border-color: #66afe9;
				box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
			}
		}
		.add_box{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			font-weight: normal;
			ul{
				min-width: 250px;
				li{
					margin-bottom: 8px;
					&:last-child{
						margin-bottom: 0;
					}
				}
			}
			span{
				margin-right: 10px;
			}
			a{
				display: inline-block;
				color: #f00;
				margin-left: 5px;
			}
			.el-button{
				margin-left: 10px;
			}
		}
	}
</style>
