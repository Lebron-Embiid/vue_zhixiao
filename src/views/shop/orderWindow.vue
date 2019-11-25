<template>
	<div class="orderWindow">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">订单飘窗</span>
				<el-radio-group v-model="form.window">
					<el-radio :label="1">开启</el-radio>
					<el-radio :label="2">关闭</el-radio>
				</el-radio-group>
			</div>
			<div class="form_item">
				<span class="left_txt">数据设置</span>
				<el-radio-group v-model="form.data">
					<el-radio :label="1">读取系统订单</el-radio>
					<el-radio :label="2">随机会员</el-radio>
					<el-radio :label="3">自定义会员名</el-radio>
				</el-radio-group>
			</div>
			<div class="form_item" v-if="form.data == 1">
				<span class="left_txt">数据来源</span>
				<p>读取系统默认订单,按照订单时间显示,大于一小时显示"X小时",大于一天显示"1小时"</p>
			</div>
			<div class="form_item" v-if="form.data == 2">
				<span class="left_txt">随机时间(秒)</span>
				<div><input type="text" v-model="form.min"> - <input type="text" v-model="form.max"></div>
				<p>设置随机区间,在区间中随机出一个数,小于等于0"刚刚",1-59"X秒",60以上"X分钟"3600以上显示"X小时"</p>
			</div>
			<div class="form_item" v-if="form.data == 3">
				<span class="left_txt">添加会员</span>
				<ul>
					<li v-for="(item,index) in vipList" :key="index">
						<input type="text" placeholder="请输入虚拟会员名" v-model="item.vip_name">
						<input type="text" placeholder="请输入下单时间" v-model="item.time">
						<img src="../../assets/images/add.jpg" alt="" v-if="item.add == 0" @click="addVip">
						<img src="../../assets/images/a2.gif" alt="" v-else @click="delVip(index)">
					</li>
				</ul>
				<p>0显示"刚刚",小于60显示"X秒",60-3599显示"X分钟",3600以上显示"小时"</p>
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
				vipList: [
					{
						vip_name: '',
						time: '',
						add: 0
					}
				],
				form:{
					window: 1,
					data: 1,
					min: '',
					max: ''
				},
				selects: [{
				  value: '0',
				  label: '是'
				}, {
				  value: '1',
				  label: '否'
				}]
			}
		},
		methods: {
		  onSubmit() {
			console.log(this.form);
		  },
		  addVip(){
			  this.vipList.push({
				 vip_name: '',
				 time: '',
				 add: 1
			  })
		  },
		  delVip(idx){
			  this.vipList.splice(idx,1)
		  }
		}
	}
</script>

<style scoped lang="scss">
	.form_box{
		.form_item{
			p{
				font-weight: normal;
			}
			ul{
				li{
					display: flex;
					align-items: center;
					margin-right: 20px;
					margin-bottom: 10px;
					&:last-child{
						margin-bottom: 0;
					}
					input{
						width: 150px;
						height: 25px;
						border-radius: 4px;
						padding: 0 15px;
						box-sizing: border-box;
						font-size: 12px;
						outline: none;
						transition: all .5s ease;
						border: 1px solid #ccc;
						margin-right: 10px;
						&:focus{
							border-color: #66afe9;
							box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
						}
					}
					img{
						cursor: pointer;
					}
				}
			}
			div{
				margin-right: 20px;
				input{
					width: 100px;
					height: 25px;
					border-radius: 4px;
					padding: 0 15px;
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
			}
			.el-radio-group{
				width: 400px;
			}
		}
	}
</style>
