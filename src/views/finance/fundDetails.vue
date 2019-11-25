<template>
	<div class="fundDetails">
		<div class="nav_inner">
			<ul>
				<li :class="[navCurrent == index?'active':'']" v-for="(item,index) in navInners" @click="clickNavInner(index)" :key="index">
					{{item}}
				</li>
			</ul>
			<div class="right_search">
				<el-button type="primary" class="export_btn" @click="onExport">导出</el-button>
				<span>会员名：</span>
				<input type="text" class="ipt_txt">
				<span>时间段：</span>
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
			<el-table
			:data="tableData"
			stripe
			style="width: 100%">
			<el-table-column
			  label="记录编号"
			  prop="id"
			  width="120">
			</el-table-column>
			<el-table-column
			  label="记录说明"
			  prop="desc"
			  width="400">
			</el-table-column>
			<el-table-column
			  label="佣金"
			  prop="price">
			</el-table-column>
			
			<el-table-column
			  v-if="navCurrent == 0"
			  label="积分"
			  prop="point">
			</el-table-column>
			
			<el-table-column
			  label="余额"
			  prop="money">
			</el-table-column>
			
			<el-table-column
			  v-if="navCurrent == 0"
			  label="合计"
			  prop="total">
			</el-table-column>
			
			<el-table-column
			  label="会员"
			  prop="account">
			</el-table-column>
			<el-table-column
			  label="时间"
			  prop="time"
			  width="200">
			</el-table-column>
		  </el-table>
		  <p>0条记录 / 1页</p>
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
				navInners: ['综合统计','佣金记录','积分记录','余额记录'],
				date: '',
				tableData: [
					{
					  id: '80',
					  desc: '直推推荐奖，第5代会员：A00008购买了新品',
					  price: '+50.00',
					  point: '0.00',
					  money: '0.00',
					  total: '50.00',
					  account: 'A00001',
					  time: '2019-11-12 20:03:56'
					},{
					  id: '81',
					  desc: '直推推荐奖，第5代会员：A00008购买了新品',
					  price: '+50.00',
					  point: '0.00',
					  money: '0.00',
					  total: '50.00',
					  account: 'A00001',
					  time: '2019-11-12 20:03:56'
					},{
					  id: '82',
					  desc: '直推推荐奖，第5代会员：A00008购买了新品',
					  price: '+50.00',
					  point: '0.00',
					  money: '0.00',
					  total: '50.00',
					  account: 'A00001',
					  time: '2019-11-12 20:03:56'
					}
				]
			}
		},
		methods:{
			clickNavInner(idx){
				this.navCurrent = idx;
			},
			onExport(){
				
			},
			onSearch(){
				console.log(this.date);
			}
		}
	}
</script>

<style scoped lang="scss">
	.export_btn{
		margin-right: 10px;
	}
	.letter_content{
		padding: 30px;
		box-sizing: border-box;
		p{
			text-align: right;
			margin: 15px 0 0;
			font-size: 14px;
			color: #999;
		}
		/deep/ .el-table_5_column_37,/deep/ .el-table_5_column_38,/deep/ .el-table_5_column_39,/deep/ .el-table_5_column_40{
			color: #F30;
			&.is-leaf{
				color: #909399;
			}
		}
	}
</style>
