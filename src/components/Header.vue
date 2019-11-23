<template>
	<div class="header">
		<div class="header-nav">
			<el-row class="header-row">
				<el-col :span="2" class='logo-container'>
					<!-- 折叠按钮 -->
					<img src="../assets/images/logo.gif" alt="">
				</el-col>
				<div :span="16" class="nav-list">
					<ul class="el-menu-demo">
					  <li @click="handleSelect(index)" v-for="(item,index) in navs" :class="[curIndex == index?'active':'']" :key="index">
						  <router-link :to="item.path">{{item.title}}</router-link>
					  </li>
					  <li class="not"><a href="" target="_blank">会员平台 <img src="../assets/images/icon08.gif" alt=""></a></li>
					</ul>
				</div>
				<el-col :span="5" class="user">
					<div class="userinfo">
						<!-- <img class="avatar"> -->
						<div class="welcome">
							您好，<span>admin</span> ( <b>超级管理员</b> )
							<i class="logout" @click="logout">[退出]</i>
						</div>
						<!-- <span class='username'>
							<el-dropdown trigger="click" @command='setDialogInfo'>
								<span class="el-dropdown-link">
									<i class="el-icon-caret-bottom el-icon--right"></i>
								</span>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item command='info'>个人信息</el-dropdown-item>
									<el-dropdown-item command='logout'>退出</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</span> -->
					</div>
				</el-col>
			</el-row>
		</div>	
		<div class="main-menu">
			<div class="left-menu-box">
				<div class="one_nav">
					<!-- <div class="left-menu-title">{{navs[curIndex].title}}</div> -->
					<div class="left-menu-item" :class="[leftCur == index?'active':'']" @click="clickLeftNav(index)" v-for="(item,index) in navs[curIndex].oneArr" :key="index">
						<router-link :to="item.path">{{item.name}}</router-link>
					</div>
				</div>
				<div class="two_nav">
					<ul>
						<li :class="[rightCur == index?'active':'']" v-for="(item,index) in navs[curIndex].oneArr[leftCur].twoArr" @click="clickRightNav(index)" :key="index">
							<router-link :to="item.path">{{item.name}}</router-link>
						</li>
					</ul>
				</div>
			</div>
			<div class="right-content-box">
				<div class="content-bread">
					<span>当前位置：</span>
					<el-breadcrumb separator-class="el-icon-arrow-right">
					  <el-breadcrumb-item>{{navs[curIndex].title}}</el-breadcrumb-item>
					  <el-breadcrumb-item>{{navs[curIndex].oneArr[leftCur].name}}</el-breadcrumb-item>
					  <!-- <el-breadcrumb-item>{{navs[curIndex].oneArr[leftCur].twoArr[rightCur].name}}</el-breadcrumb-item> -->
					</el-breadcrumb>
				</div>
				<div class="content_box">
					<!-- <ul>
						<li :class="[rightCur == index?'active':'']" v-for="(item,index) in navs[curIndex].oneArr[leftCur].twoArr" @click="clickRightNav(index)" :key="index">
							<router-link :to="item.path">{{item.name}}</router-link>
						</li>
					</ul> -->
					<div class="content_template">
						<router-view/>
					</div>
				</div>
				<div class="footer_txt">
					Copyright © 2008-2018技术支持:微商宝   粤备19033440
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import theme from '../common/theme'
export default{
	name: 'HeaderNav',
	data(){
		return{
			collapse: false, //菜单栏是否闭合
			fullscreen: false,
			showlrc:true,
			curIndex: 0,
			leftCur: 0,
			rightCur: 0,
			navs:[
				{
					title: '系统管理',
					path: '/',
					oneArr: [
						{
							name: '系统设置',
							path: '/index',
							twoArr: [
								{
									name: '基本设置',
									path: '/index/settings'
								},
								{
									name: '用户设置',
									path: '/index/userSettings'
								},
								{
									name: '全网设置',
									path: '/index/networkSettings'
								},
								{
									name: '快递设置',
									path: '/index/expressSettings'
								},
								{
									name: '累积消费公排',
									path: '/index/consumer'
								},
								{
									name: '邮箱设置',
									path: '/index/emailSettings'
								},
								{
									name: '短信配置',
									path: '/index/smsConfig'
								},
								{
									name: '用户协议',
									path: '/index/userAgreement'
								},
								{
									name: '自定义表单',
									path: '/index/customForm'
								}
							]
						},
						{
							name: '系统信息',
							path: '/systemInfo',
							twoArr: [
								{
									name: '二维码海报',
									path: '/systemInfo/codePoster'
								},
								{
									name: 'PC登录背景',
									path: '/systemInfo/pcBackground'
								},
								{
									name: '手机登录背景',
									path: '/systemInfo/mobileBackground'
								},
								{
									name: '手机个人中心背景',
									path: '/systemInfo/mobileCenter'
								},
								{
									name: '登录LOGO',
									path: '/systemInfo/loginLogo'
								},
								{
									name: '手机首页轮播图',
									path: '/systemInfo/mobileBanner'
								},
								{
									name: 'PC首页轮播',
									path: '/systemInfo/pcBanner'
								},
								{
									name: '公众号二维码',
									path: '/systemInfo/publicCode'
								},
								{
									name: '更新缓存',
									path: ''
								}
							]
						},
						{
							name: '内部信件',
							path: '/letter',
							twoArr: [
								{
									name: '信件列表',
									path: '/letter/letterList'
								},
								{
									name: '发送信件',
									path: '/letter/sendLetter'
								}
							]
						},
						{
							name: '数据维护',
							path: '/dataSafe',
							twoArr: [
								{
									name: '备份数据',
									path: '/dataSafe/backupData'
								},
								{
									name: '恢复数据',
									path: '/dataSafe/restoreData'
								},
								{
									name: '清空数据',
									path: '/dataSafe/clearData'
								}
							]
						}
					]
				},
				{
					title: '后台用户',
					path: '/user',
					oneArr: [
						{
							name: '用户管理',
							path: '/user',
							twoArr: [
								{
									name: '用户列表',
									path: '/user/userList'
								},
								{
									name: '添加用户',
									path: '/user/addUser'
								}
							]
						},
						{
							name: '用户角色',
							path: '/roles',
							twoArr: [
								{
									name: '角色列表',
									path: '/roles/rolesList'
								},
								{
									name: '添加角色',
									path: '/roles/addRoles'
								}
							]
						},
						{
							name: '修改密码',
							path: '/user/changePassword',
							twoArr: [
								{
									name: '修改密码',
									path: '/user/changePassword'
								}
							]
						}
					]
				},
				{
					title: '会员管理',
					path: '/member',
					oneArr: [
						{
							name: '会员管理',
							path: '/member',
							twoArr: [
								{
									name: '会员列表',
									path: '/member/memberList'
								},
								{
									name: '添加会员',
									path: ''
								},
								{
									name: '重置密码',
									path: '/member/resetPassword'
								}
							]
						},
						{
							name: '会员级别',
							path: '/level',
							twoArr: [
								{
									name: '级别列表',
									path: '/level/levelList'
								},
								{
									name: '添加级别',
									path: '/level/addLevel'
								}
							]
						},
						{
							name: '区域代理',
							path: '/region',
							twoArr: [
								{
									name: '代理',
									path: '/region/agent'
								},
								{
									name: '添加代理',
									path: '/region/addAgent'
								}
							]
						},
						{
							name: '报单中心',
							path: '/report',
							twoArr: [
								{
									name: '报单中心',
									path: '/report/reportCenter'
								},
								{
									name: '添加报单中心',
									path: '/report/addReportCenter'
								}
							]
						},
						{
							name: '股东分红',
							path: '/member/dividend',
							twoArr: [
								{
									name: '股东分红',
									path: '/member/dividend'
								}
							]
						}
					]
				},
				{
					title: '财务统计',
					path: '/finance',
					oneArr: [
						{
							name: '资金明细',
							path: '/finance/FundDetails',
							twoArr: [
								{
									name: '资金流水',
									path: '/finance/FundDetails'
								}
							]
						},
						{
							name: '提现记录',
							path: '/finance/withdrawRecord',
							twoArr: [
								{
									name: '提现记录',
									path: '/finance/withdrawRecord'
								}
							]
						},
						{
							name: '升级申请',
							path: '/finance/updateApplication',
							twoArr: [
								{
									name: '升级申请',
									path: '/finance/updateApplication'
								}
							]
						},
						{
							name: '业绩排名',
							path: '/finance/performanceRank',
							twoArr: [
								{
									name: '排名列表',
									path: '/finance/performanceRank'
								}
							]
						},
						{
							name: '充值记录',
							path: '/finance/rechargeRecord',
							twoArr: [
								{
									name: '充值记录',
									path: '/finance/rechargeRecord'
								}
							]
						},
						{
							name: '账单汇总',
							path: '/finance/summaryBill',
							twoArr: [
								{
									name: '账单汇总',
									path: '/finance/summaryBill'
								}
							]
						}
					]
				},
				{
					title: '网站基础',
					path: '/news',
					oneArr: [
						{
							name: '新闻管理',
							path: '/news',
							twoArr: [
								{
									name: '新闻列表',
									path: '/news/newsList'
								},
								{
									name: '添加新闻',
									path: '/news/addNews'
								},
								{
									name: '新闻分类',
									path: '/news/newsClass'
								}
							]
						},
						{
							name: '单页管理',
							path: '/page',
							twoArr: [
								{
									name: '单页列表',
									path: '/page/pageList'
								},
								{
									name: '添加单页',
									path: '/page/addPage'
								},
								{
									name: '单页分类',
									path: '/page/pageClass'
								}
							]
						}
					]
				},
				{
					title: '商城管理',
					path: '/shop',
					oneArr: [
						{
							name: '商品管理',
							path: '/shop',
							twoArr: [
								{
									name: '商品列表',
									path: '/shop/goodsList'
								},
								{
									name: '添加商品',
									path: '/shop/addGoods'
								},
								{
									name: '商品分类',
									path: '/shop/goodsClass'
								},
								{
									name: '商城轮播图',
									path: '/shop/shopBanner'
								}
							]
						},
						{
							name: '配送方式',
							path: '/delivery',
							twoArr: [
								{
									name: '配送方式',
									path: '/delivery/deliveryType'
								},
								{
									name: '添加配送方式',
									path: '/delivery/addDelivery'
								}
							]
						},
						{
							name: '订单管理',
							path: '/order',
							twoArr: [
								{
									name: '订单列表',
									path: '/order/orderList'
								},
								{
									name: '后台创建订单',
									path: '/order/createOrder'
								},
								{
									name: '订单飘窗',
									path: '/order/orderWindow'
								}
							]
						},
						{
							name: '评论管理',
							path: '/shop/commentList',
							twoArr: [
								{
									name: '评论列表',
									path: '/shop/commentList'
								}
							]
						}
					]
				},
				{
					title: '支付方式',
					path: '/code',
					oneArr: [
						{
							name: '二维码管理',
							path: '/code',
							twoArr: [
								{
									name: '二维码列表',
									path: '/code/codeList'
								},
								{
									name: '添加二维码',
									path: '/code/addCode'
								}
							]
						},
						{
							name: '第三方支付',
							path: '/pay',
							twoArr: [
								{
									name: '配置列表',
									path: '/pay/configList'
								},
								{
									name: '添加配置',
									path: '/pay/addConfig'
								}
							]
						}
					]
				},
				{
					title: '接口设置',
					path: '/config',
					oneArr: [
						{
							name: '微信支付参数',
							path: '/config',
							twoArr: [
								{
									name: '配置信息',
									path: '/config/wechatPayConfig'
								}
							]
						},
						{
							name: '微信端配置',
							path: '/config/wechatConfig',
							twoArr: [
								{
									name: '配置信息',
									path: '/config/wechatConfig'
								}
							]
						},
						{
							name: '支付宝支付参数',
							path: '/config/alipayConfig',
							twoArr: [
								{
									name: '配置信息',
									path: '/config/alipayConfig'
								}
							]
						}
					]
				}
			]
		}
	},
	components:{
	  theme
	},
	methods: {
	  setDialogInfo(cmditem) {
		switch (cmditem) {
			case 'info':
				this.showInfoList()
				break;
			case 'logout':
				this.logout()
				break;
		}
	  },
	  handleSelect(key) {
	  	this.curIndex = key;
		this.leftCur = 0;
		this.rightCur = 0;
		sessionStorage.setItem('curIndex',this.curIndex);
		sessionStorage.setItem('leftCur',this.leftCur);
		sessionStorage.setItem('rightCur',this.rightCur);
	  	// console.log(key);
	  },
	  clickLeftNav(idx){
	  	this.leftCur = idx;
		this.rightCur = 0;
		sessionStorage.setItem('curIndex',this.curIndex);
		sessionStorage.setItem('leftCur',this.leftCur);
		sessionStorage.setItem('rightCur',this.rightCur);
	  },
	  clickRightNav(idx){
		console.log(this.curIndex,this.leftCur,idx);
	  	this.rightCur = idx;
		sessionStorage.setItem('curIndex',this.curIndex);
		sessionStorage.setItem('leftCur',this.leftCur);
		sessionStorage.setItem('rightCur',this.rightCur);
		if(this.curIndex == 0 && this.leftCur == 1 && idx == 8){
			this.$message('更新缓存成功');
		}
		if(this.curIndex == 2 && this.leftCur == 0 && idx == 1){
			this.$message('请使用会员账号进行注册');
		}
	  },
	  logout(){
		  this.$confirm('确认退出？')
			.then(res => {
			  this.$router.replace('/login')
			})
	  }
	},
	mounted() {
		if (window.performance.navigation.type == 1) {
			console.log("页面被刷新")
			this.curIndex =  sessionStorage.getItem('curIndex');
			this.leftCur =  sessionStorage.getItem('leftCur');
			this.rightCur =  sessionStorage.getItem('rightCur');			
		  }else{
			console.log("首次被加载")
		  }
	}
}
</script>

<style scoped lang="scss">
	.header-nav {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		background: #1b4070;
		color: #fff;
		// border-bottom: 1px solid #1f2d3d;
		overflow: hidden;
		.nav-list{
			width: 75%;
			height: 80px;
			padding-left: 20px;
			box-sizing: border-box;
			display: flex;
			align-items: flex-end;
			.el-menu-demo{
				border-bottom: 0;
				// border-radius: 5px 5px 0 0;
				background: none;
				display: flex;
				align-items: flex-end;
				justify-content: flex-start;
				overflow: hidden;
				li{
					// border-radius: 5px 5px 0 0;
					color: #fff;
					// background: #037ABD;
					border-bottom: 0;
					// background: url('../assets/images/nav-a-bg.gif') left top repeat-x;
					font-size: 12px;
					// margin-right: 10px;
					cursor: pointer;
					transition: all .5s ease;
					a{
						display: block;
						padding: 0 15px;
						box-sizing: border-box;
						height: 80px;
						line-height: 80px;
						color: #fff;
					}
					&:hover,&.active{
						// color: #333;
						background: #0677a2;
						// background: url('../assets/images/nav-a-hover.gif') left top repeat-x;
						border-bottom-color: #fff;
					}
					&.not{
						background: none;
						// color: #333;
						a{
							color: #fff;
							display: flex;
							align-items: center;
						}
						img{
							margin-left: 10px;
						}
						&:hover{
							background: #0677a2;
						}
					}
				}
			}
		}
	}
	
	.header-row{
		display: flex;
		justify-content: space-between;
		align-items: center;
		&:before,&:after{
			display: none;
		}
	}
	
	.collapse-btn {
		width: 50px;
		margin-left: 20px;
		display: inline-block;
	}
	.aplayer {
		margin: 0;
	}
	.icon-btn {
		font-size: 36px;
		vertical-align: middle;
		cursor: pointer;
	}
	
	.logo-container {
		height: 80px;
		min-width: 260px;
		display: flex;
		align-items: center;
		background: url("../assets/images/top-line.gif") right top no-repeat;
	}
	
	.logo {
		height: 50px;
		width: 50px;
		margin-right: 5px;
		vertical-align: middle;
		display: inline-block;
	}
	
	.title {
		vertical-align: middle;
		font-size: 22px;
		font-family: "Microsoft YaHei";
		letter-spacing: 3px;
	}
	
	.user {
		min-width: 260px;
		/* line-height: 60px; */
		text-align: right;
		float: right;
		/* padding-right: 10px; */
	}
	
	.avatar {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		vertical-align: middle;
		display: inline-block;
	}
	
	.welcome {
		width: auto;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 0 5px;
		font-size: 12px;
		span{
			display: inline-block;
			max-width: 100px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			margin-right: 5px;
		}
		b{
			color: #f00;
		}
		.logout{
			color: #fff;
			margin-left: 5px;
			font-style: inherit;
			cursor: pointer;
		}
	}
	
	.name {
		line-height: 20px;
		text-align: center;
		font-size: 14px;
	}
	
	.comename {
		font-size: 12px;
	}
	
	.avatarname {
		color: #409eff;
		font-weight: bolder;
	}
	
	.username {
		cursor: pointer;
		margin-right: 5px;
	}
	
	.el-dropdown {
		color: #fff;
	}
	
	.btn-fullscreen {
		display: inline-block;
		font-size: 24px;
		vertical-align: middle;
		margin-right: 20px;
		transform: rotate(45deg);
		cursor: pointer;
	}
	
	.icon-font {
		transform: none;
	
	}
	
	.icon-font i {
		font-size: 20px;
	}
	
	.userinfo {
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-right: 20px;
	}
	
	
	.main-menu{
		.left-menu-box{
			position: fixed;
			width: 260px;
			height: 100%;
			z-index: 10;
			left: 0;
			top: 80px;
			background: url('../assets/images/left-bg.gif') right top no-repeat;
			background-size: 100%;
			box-sizing: border-box;
			font-size: 12px;
			display: flex;
			justify-content: space-between;
			align-items: stretch;
			.one_nav{
				width: 110px;
				height: 100%;
				background: #4E5D62;
				overflow-x: hidden;
				overflow-y: auto;
				text-align: center;
			}
			.two_nav{
				width: 150px;
				height: 100%;
				overflow-x: hidden;
				overflow-y: auto;
				ul{
					li{
						position: relative;
						&:before{
							content: "·";
							font-size: 20px;
							position: absolute;
							left: 20px;
							top: 50%;
							transform: translateY(-50%);
						}
						&.active:after{
							content: "";
							display: block;
							width: 0;
							height: 0;
							position: absolute;
							right: 0;
							top: 50%;
							transform: translateY(-50%);
							border: 5px solid transparent;
							border-right: 5px solid #d9e9f6;
						}
						a{
							display: block;
							box-sizing: border-box;
							padding: 12px 15px 12px 30px;
							color: #999;
							transition: all .5s ease;
						}
						&:hover,&.active{
							a{
								color: #000;
								background: #fff;
							}
						}
					}
				}
			}
			.left-menu-title{
				padding: 0 20px;
				height: 40px;
				line-height: 40px;
				box-sizing: border-box;
				font-size: 14px;
				color: #1B4670;
				font-weight: bold;
			}
			.left-menu-item{
				cursor: pointer;
				border: 1px solid transparent;
				border-right: 0;
				border-left: 0;
				position: relative;
				transition: all .5s ease;
				&.active:after{
					content: "";
					display: block;
					width: 0;
					height: 0;
					position: absolute;
					right: 0;
					top: 50%;
					transform: translateY(-50%);
					border: 5px solid transparent;
					border-right: 5px solid #fff;
				}
				a{
					display: block;
					padding: 20px 10px;
					box-sizing: border-box;
					color: #fff;
				}
				// &:hover{
				// 	background: #76B0C2;
				// }
				&:hover,&.active{
					background: #76B0C2;
					// border-color: #BAD6EB;
				}
			}
		}
		.right-content-box{
			background: #D9E9F6;
			position: absolute;
			width: calc(100% - 260px);
			height: 100%;
			right: 0;
			top: 80px;
			z-index: 10;
			padding: 0 10px;
			box-sizing: border-box;
			.content-bread{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				font-size: 14px;
				height: 30px;
				line-height: 30px;
				color: #1B4670;
				.el-breadcrumb{
					display: inline-block;
					color: #1B4670;
				}
			}
			.content_box{
				width: 100%;
				height: calc(100% - 140px);
				overflow-x: hidden;
				overflow-y: auto;
				background: #fff;
				border: 1px solid #C7CED4;
				// padding: 10px;
				box-sizing: border-box;
				.content_template{
					padding: 0;
					box-sizing: border-box;
				}
			}
			.footer_txt{
				text-align: right;
				color: #ccc;
				font-size: 12px;
				padding-right: 30px;
				height: 30px;
				line-height: 30px;
			}
		}
	}
</style>