<template>
	<div class="updateApplication">
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
			  label="序号"
			  prop="id">
			</el-table-column>
			<el-table-column
			  label="会员"
			  prop="account">
			</el-table-column>
			<el-table-column
			  label="所升级别"
			  prop="level">
			</el-table-column>
			<el-table-column
			  label="所需金额"
			  prop="money">
			</el-table-column>
			<el-table-column
			  label="汇款银行"
			  prop="bank">
			</el-table-column>
			<el-table-column
			  label="汇款流水单"
			  prop="order">
			</el-table-column>
			<el-table-column
			  label="申请时间"
			  prop="time">
			</el-table-column>
			<el-table-column
			  label="目前状态"
			  prop="status">
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
				navInners: ['全部记录','未审核','已审核'],
				date: '',
				tableData: [
					
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
	}
</style>
