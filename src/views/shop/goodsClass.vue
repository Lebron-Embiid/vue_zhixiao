
<template>
	<div class="goodsClass">
		<div class="letter_content">
			<table>
				<th>
					<td width="200">分类编号</td>
					<td width="400">分类名称</td>
					<td width="300">添加分类</td>
					<td width="200">层级分类</td>
					<td width="300">pid</td>
					<td width="300">上级</td>
					<td width="200">分类排序</td>
					<td width="200">分类图片</td>
					<td width="400">分类操作</td>
				</th>
				<tr v-for="(item,index) in tableData" :key="index">
					<td width="200">
						{{item.goods_id}}
					</td>
					<td width="400">
						<input type="text" v-model="item.goods_name">
					</td>
					<td width="300">
						<el-button type="primary" size="mini" @click="addChild">添加一个子类</el-button>
					</td>
					<td width="200">
						<input type="text" v-model="item.goods_level">
					</td>
					<td width="300">
						<input type="text" v-model="item.pid">
					</td>
					<td width="300">
						<input type="text" v-model="item.superior">
					</td>
					<td width="200">
						<input type="text" v-model="item.sort_num">						
					</td>
					<td width="200">
						{{item.goods_pic == ''?'未上传':item.goods_pic}}
					</td>
					<td width="400">
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
			<ul class="add_child_box">
				<li v-for="(item,index) in childrens" :key="index">
					<div><input type="text" v-model="item.child_txt"></div>
					<el-button type="text" size="mini" @click="delChild(index)">移除</el-button>
				</li>
			</ul>
			<div class="bottom_box">
				<el-button type="primary" class="submit_btn" @click="onSubmit">确认修改</el-button>
				<el-button type="primary" class="submit_btn" @click="addChild">添加一个分类</el-button>
				<span>* 分类图片尺寸：358*420，且大小不超过200KB</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tableData: [
					{
						goods_id: 5,
						goods_name: '套餐包',
						goods_level: '',
						pid: 0,
						superior: '顶级',
						sort_num: 0,
						goods_pic: ''
					}
				],
				childrens: [
					
				]
			}
		},
		methods:{
			handleEdit(index) {
				console.log(index);
			},
			handleDelete(index){
				console.log(index);
			},
			onSubmit(){
				
			},
			addChild(){
				this.childrens.push({
					child_txt: ''
				})
			},
			delChild(idx){
				this.childrens.splice(idx,1);
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
				text-align: center;
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
					text-align: center;
					font-size: 14px;
					// line-height: 42px;
					// width: 80%;
					color: #333;
					font-weight: normal;
					input{
						width: 100px;
						height: 25px;
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
	.add_child_box{
		width: 35%;
		li{
			border-bottom: 1px solid #e8eef6;
			padding: 10px 20px;
			box-sizing: border-box;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			div{
				width: 400px;
			}
			input{
				width: 120px;
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
		}
	}
	.bottom_box{
		margin-top: 30px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		span{
			color: #f00;
			font-size: 14px;
			margin-left: 20px;
		}
	}
</style>
