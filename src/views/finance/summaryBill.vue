<template>
	<div class="summaryBill">
		<div class="nav_inner">
			<ul>
				<li :class="[navCurrent == index?'active':'']" v-for="(item,index) in navInners" @click="clickNavInner(index)" :key="index">
					{{item}}
				</li>
			</ul>
			<div class="right_search">
				<el-button type="primary" class="export_btn" @click="onExport">导出</el-button>
				<span>会员账号：</span>
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
			  label="会员名称"
			  prop="name">
			</el-table-column>
			<el-table-column
			  label="进账金额（佣金）"
			  prop="in_price">
			</el-table-column>
			<el-table-column
			  label="出账金额（佣金）"
			  prop="out_price">
			</el-table-column>
			<el-table-column
			  label="剩余金额（佣金）"
			  prop="over_price">
			</el-table-column>
			<el-table-column
			  label="进账金额（积分）"
			  prop="in_point">
			</el-table-column>
			<el-table-column
			  label="出账金额（积分）"
			  prop="out_point">
			</el-table-column>
			<el-table-column
			  label="剩余金额（积分）"
			  prop="over_point">
			</el-table-column>
			<el-table-column
			  label="记录时间"
			  prop="time">
			</el-table-column>
			<el-table-column 
			label="操作">
				<template slot-scope="scope">
				<el-button
				  type='text'
				  size="mini"
				  @click="handleEdit(scope.$index, scope.row)">查看明细</el-button>
			  </template>
			</el-table-column>
		  </el-table>
		  <p>0条记录 / 1页</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				navCurrent: 0,
				navInners: ['全部记录'],
				date: '',
				tableData: [
					{
						id: 1,
						name: 'A00001',
						in_price: '16150',
						out_price: '0',
						over_price: '5116626',
						in_point: '0',
						out_point: '0',
						over_point: '0',
						time: '2019-11-12'
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
			},
			handleEdit(index, row){
				console.log(index, row);
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
		/deep/ .el-table_6_column_45,/deep/ .el-table_6_column_46,/deep/ .el-table_6_column_47,/deep/ .el-table_6_column_48,/deep/ .el-table_6_column_49,/deep/ .el-table_6_column_50{
			color: #F30;
			&.is-leaf{
				color: #909399;
			}
		}
	}
</style>
