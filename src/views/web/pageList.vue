<template>
	<div class="pageList">
		<div class="nav_inner">
			<ul>
				<li :class="[navCurrent == index?'active':'']" v-for="(item,index) in navInners" @click="clickNavInner(index)" :key="index">
					{{item}}
				</li>
			</ul>
		</div>
		<div class="letter_content">
			<el-table
			:data="tableData"
			stripe
			style="width: 100%"
			@selection-change="handleSelectionChange">
			<el-table-column
			  type="selection"
			  width="55">
			</el-table-column>
			<el-table-column
			  label="编号"
			  prop="id">
			</el-table-column>
			<el-table-column
			  label="单页标题"
			  prop="title">
			</el-table-column>
			<el-table-column
			  label="单页分类"
			  prop="type">
			</el-table-column>
			<el-table-column label="单页操作">
			  <template slot-scope="scope">
				<el-button
				  size="mini"
				  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
				<el-button
				  size="mini"
				  type="danger"
				  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
			  </template>
			</el-table-column>
		  </el-table>
		  <p>0条记录 / 1页</p>
		  <div class="form_item">
			  <el-button class="multiple_btn" size="mini" type="primary">批量删除</el-button>
		  </div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				navCurrent: 0,
				navInners: ['全部分类','制度说明','帮助中心'],
				tableData: [
					
				],
				multipleSelection: []
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
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
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
