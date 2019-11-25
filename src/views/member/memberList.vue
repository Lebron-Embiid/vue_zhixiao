<template>
	<div class="memberList">
		<div class="nav_inner">
			<ul>
				<li :class="[navCurrent == index?'active':'']" v-for="(item,index) in navInners" @click="clickNavInner(index)" :key="index">
					{{item}}
				</li>
			</ul>
			<div class="right_search">
				<span>关键词：</span>
				<input type="text" class="ipt_txt">
				<span>注册时间：</span>
				<el-date-picker
				  v-model="date"
				  type="daterange"
				  range-separator="至"
				  start-placeholder="开始日期"
				  end-placeholder="结束日期">
				</el-date-picker>
				<el-button type="primary" class="submit_btn" @click="onSearch">立即搜索</el-button>
			</div>
		</div>
		<div class="letter_content">
			<table>
				<th>
					<td width="200">会员信息</td>
					<td width="200">市场信息</td>
					<td width="220">公排信息</td>
					<td width="180">账户资金</td>
					<td width="300">联系信息</td>
					<td width="300">开通情况</td>
					<td width="350">操作</td>
				</th>
				<tr v-for="(item,index) in tableData" :key="index">
					<td width="200">
						<p>会员账号：<a href="">{{item.account}}</a></p>
						<p>会员级别：{{item.level}}</p>
						<p>报单中心：<img src="../../assets/images/no.gif" alt=""></p>
						<p>渠道商：<img src="../../assets/images/no.gif" alt=""></p>
						<a href="" class="toClick">点击登录</a>
					</td>
					<td width="200">
						<p>推荐人：{{item.referrer}}</p>
						<p>接点人：{{item.contact}}</p>
						<p>报单中心：{{item.report}}</p>
						<p>直推数：{{item.push_num}}</p>
					</td>
					<td width="220">
						<p>公排序号：{{item.sort_number}}</p>
						<p>后面人数：{{item.behind_num}}</p>
						<p>公排奖励：{{item.award}}</p>
					</td>
					<td width="180">
						<p>佣金：{{item.price}}</p>
						<p>积分：{{item.point}}</p>
						<p>累计消费：{{item.total}}</p>
					</td>
					<td width="300">
						<p>会员姓名：{{item.username}}</p>
						<p>手机号码：{{item.phone}}</p>
						<p>电子邮箱：{{item.email}}</p>
					</td>
					<td width="300">
						<p>开通时间：{{item.start}}</p>
						<p>注册时间：{{item.register}}</p>
						<p>最后登录：{{item.end}}</p>
						<p>可否登录：<img src="../../assets/images/yes.gif" alt=""></p>
					</td>
					<td width="350">
						<el-button
						  size="mini"
						  type="text"
						  @click="handleChange(item.id,index)">账号变更</el-button>
						<el-button
						  size="mini"
						  @click="handleEdit(item.id,index)">编辑</el-button>
						<el-button
						  size="mini"
						  type="danger"
						  @click="handleDelete(item.id,index)">删除</el-button>
					</td>
				</tr>
			</table>
		  <h6>0条记录 / 1页</h6>
		  <el-pagination
		    background
		    layout="prev, pager, next"
		    :total="1000">
		  </el-pagination>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				navCurrent: 0,
				navInners: ['全部会员','游客','VIP会员','联创','经理','主管','分公司'],
				date: '',
				tableData: [{
				  id: 1,
				  account: 'A00010',
				  level: '游客',
				  report: '无',
				  referrer: 'A00010',
				  contact: 'A00010',
				  push_num: 0,
				  sort_number: '未进入',
				  behind_num: '未进入',
				  award: '未获得',
				  price: '596020.00',
				  point: '0.00',
				  total: '0.00',
				  username: 'AAAAA10',
				  phone: '13800000010',
				  email: '',
				  start: '2019-11-11 15:25',
				  register: '2019-11-11 00:15',
				  end: '2019-11-22 15:37'
				}]
			}
		},
		methods:{
			clickNavInner(idx){
				this.navCurrent = idx;
			},
			onSearch(){
				console.log(this.date);
			},
			handleChange(index){
				console.log(index);
			},
			handleEdit(index) {
				console.log(index);
			},
			handleDelete(index) {
				console.log(index);
			}
		}
	}
</script>

<style scoped lang="scss">
	.letter_content{
		padding: 30px;
		box-sizing: border-box;
		table{
			display: block;
			width: 100%;
			margin: 0;
			padding: 0;
			th{
				margin: 0;
				padding: 0;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				width: 100%;
				background: #F5F5F5;
				border-top: 1px solid #C3CED8;
				line-height: 32px;
				font-size: 12px;
				text-align: left;
				// td{
				// 	display: block;
				// 	width: 80%;
				// 	&:first-child{
				// 		width: 20%;
				// 	}
				// }
			}
			tr{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				border-bottom: 1px solid #e8eef6;
				td{
					display: block;
					vertical-align: middle;
					padding: 10px 0;
					text-align: left;
					// line-height: 42px;
					// width: 80%;
					color: #333;
					font-weight: normal;
					input{
						width: 60%;
						height: 30px;
						border: 1px solid #ccc;
						border-radius: 4px;
						outline: none;
						padding-left: 5px;
						box-sizing: border-box;
						transition: all .5s ease;
						&:focus{
							border-color: #66afe9;
							box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
						}
					}
					p{
						margin: 0;
						line-height: 22px;
					}
					.toClick{
						line-height: 24px;
						vertical-align: top;
					}
				}
			}
		}
		p{
			margin: 0;
			font-size: 12px;
			display: flex;
			align-items: center;
			a{
				color: #333;
				&:hover{
					color: #3399FF;
				}
			}
		}
		.toClick{
			display: inline-block;
			background: #0099CC;
			color: #fff;
			font-size: 12px;
			padding: 0 5px;
		}
		h6{
			margin: 15px 0 5px;
			text-align: right;
			font-size: 14px;
			color: #999;
		}
	}
</style>
