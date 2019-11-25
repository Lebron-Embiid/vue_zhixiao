<template>
	<div class="goodsList">
		<div class="nav_inner">
			<div class="right_search">
				<span>关键词：</span>
				<input type="text" class="ipt_txt">
				<el-button type="primary" class="submit_btn" @click="onSearch">立即搜索</el-button>
			</div>
		</div>
		<div class="letter_content">
			<table>
				<th>
					<td width="200">商品编号</td>
					<td width="400">商品名称</td>
					<td width="200">所属分类</td>
					<td width="200">所属类型</td>
					<td width="350">销售价格</td>
					<td width="350">剩余库存</td>
					<td width="300">是否上架</td>
					<td width="100">排序</td>
					<td width="200">所属店铺</td>
					<td width="300">操作</td>
				</th>
				<tr v-for="(item,index) in tableData" :key="index">
					<td width="200">
						{{item.goods_id}}
					</td>
					<td width="400">
						{{item.goods_name}}
					</td>
					<td width="200">
						{{item.goods_class}}
					</td>
					<td width="200">
						{{item.goods_type}}
					</td>
					<td width="350">
						￥{{item.goods_price}}
					</td>
					<td width="350">
						{{item.goods_stock}}
					</td>
					<td width="300">
						<!-- item.is_shelf => 0: 上架  1: 未上架 -->
						<img src="../../assets/images/yes.gif" v-if="item.is_shelf == 0" alt="">
						<img src="../../assets/images/no.gif" v-else alt="">
					</td>
					<td width="100">
						{{item.goods_number}}
					</td>
					<td width="200">
						{{item.goods_store}}
					</td>
					<td width="300">
						<el-button
						  size="mini"
						  @click="handleEdit(item.id,index)">编辑</el-button>
					</td>
				</tr>
			</table>
		  <h6>0条记录 / 1页</h6>
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
						goods_name: '200000万套餐包',
						goods_class: '套餐包',
						goods_type: '无类型',
						goods_price: '200000.00',
						goods_stock: 999996,
						is_shelf: 0,
						goods_number: 25,
						goods_store: '自营商品'
					},{
						goods_id: 4,
						goods_name: '30000万套餐包',
						goods_class: '套餐包',
						goods_type: '无类型',
						goods_price: '30000.00',
						goods_stock: 99985,
						is_shelf: 1,
						goods_number: 44,
						goods_store: '自营商品'
					}
				]
			}
		},
		methods:{
			onSearch(){
				console.log(this.date);
			},
			handleEdit(index) {
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
