<template>
	<div class="restoreData">
		<div class="restore_title">
			<span>上传备份数据：</span>
			<el-upload
			  class="upload-demo"
			  ref="upload"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :on-remove="handleRemove"
			  :on-change="handleChange"
			  :file-list="fileList" 
			  :show-file-list="false"
			  :auto-upload="false">
			  <el-button slot="trigger" class="select_file" size="small" type="primary">选取文件</el-button>
			  <span class="file_border">{{file_name}}</span>
			  <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">确定上传</el-button>
			</el-upload>
		</div>
		<el-table
		  :data="tableData"
		  empty-text="对不起，暂时没有备份数据" 
		  stripe
		  style="width: 100%">
		  <el-table-column
			prop="date"
			label="备份目录">
		  </el-table-column>
		  <el-table-column
			prop="name"
			label="备份时间">
		  </el-table-column>
		  <el-table-column label="操作">
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
	</div>
</template>

<script>
	export default {
		data() {
			return {
				fileList: [],
				file_name: '',
				tableData: []
			}
		},
		methods: {
			submitUpload() {
				this.$refs.upload.submit();
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handleChange(file){
				this.file_name = file.raw.name;
				console.log(file.raw.name);
			}
		}
	}
</script>

<style scoped lang="scss">
	.restoreData{
		padding: 30px;
		box-sizing: border-box;
		font-size: 14px;
		.restore_title{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin-bottom: 20px;
			.upload-demo{
				display: flex;
				align-items: center;
			}
			.select_file{
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
			}
			.file_border{
				display: inline-block;
				min-width: 180px;
				height: 32px;
				line-height: 32px;
				font-size: 12px;
				padding: 0 10px;
				border: 1px solid #ccc;
				box-sizing: border-box;
				border-left: 0;
				border-radius: 0 4px 4px 0;
			}
		}
	}
</style>
