import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/views/Index.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import About from '@/views/About.vue'

// 系统设置
import Settings from '@/views/system/settings.vue'
import UserSettings from '@/views/system/userSettings.vue'
import NetworkSettings from '@/views/system/networkSettings.vue'
import ExpressSettings from '@/views/system/expressSettings.vue'
import Consumer from '@/views/system/consumer.vue'
import EmailSettings from '@/views/system/emailSettings.vue'
import SmsConfig from '@/views/system/smsConfig.vue'
import UserAgreement from '@/views/system/userAgreement.vue'
import CustomForm from '@/views/system/customForm.vue'
// 系统信息
import CodePoster from '@/views/systemInfo/codePoster.vue'
import PcBackground from '@/views/systemInfo/pcBackground.vue'
import MobileBackground from '@/views/systemInfo/mobileBackground.vue'
import MobileCenter from '@/views/systemInfo/mobileCenter.vue'
import LoginLogo from '@/views/systemInfo/loginLogo.vue'
import MobileBanner from '@/views/systemInfo/mobileBanner.vue'
import PcBanner from '@/views/systemInfo/pcBanner.vue'
import PublicCode from '@/views/systemInfo/publicCode.vue'
// 内部信件
import LetterList from '@/views/letter/letterList.vue'
import SendLetter from '@/views/letter/sendLetter.vue'
// 数据维护
import BackupData from '@/views/dataSafe/backupData.vue'
import RestoreData from '@/views/dataSafe/restoreData.vue'
import ClearData from '@/views/dataSafe/clearData.vue'

// 后台用户
import UserList from '@/views/adminUser/userList.vue'
import AddUser from '@/views/adminUser/addUser.vue'
import RolesList from '@/views/adminUser/rolesList.vue'
import AddRoles from '@/views/adminUser/addRoles.vue'
import ChangePassword from '@/views/adminUser/changePassword.vue'

// 会员管理
import MemberList from '@/views/member/memberList.vue'
import AddMember from '@/views/member/addMember.vue'
import ResetPassword from '@/views/member/resetPassword.vue'
import LevelList from '@/views/member/levelList.vue'
import AddLevel from '@/views/member/addLevel.vue'
import Agent from '@/views/member/agent.vue'
import AddAgent from '@/views/member/addAgent.vue'
import ReportCenter from '@/views/member/reportCenter.vue'
import AddReportCenter from '@/views/member/addReportCenter.vue'
import Dividend from '@/views/member/dividend.vue'

// 财务统计
import FundDetails from '@/views/finance/fundDetails.vue'
import WithdrawRecord from '@/views/finance/withdrawRecord.vue'
import UpdateApplication from '@/views/finance/updateApplication.vue'
import PerformanceRank from '@/views/finance/performanceRank.vue'
import RechargeRecord from '@/views/finance/rechargeRecord.vue'
import SummaryBill from '@/views/finance/summaryBill.vue'

// 网站基础
import NewsList from '@/views/web/newsList.vue'
import AddNews from '@/views/web/addNews.vue'
import NewsClass from '@/views/web/newsClass.vue'
import PageList from '@/views/web/pageList.vue'
import AddPage from '@/views/web/addPage.vue'
import PageClass from '@/views/web/pageClass.vue'

// 商城管理
import GoodsList from '@/views/shop/goodsList.vue'
import AddGoods from '@/views/shop/addGoods.vue'
import GoodsClass from '@/views/shop/goodsClass.vue'
import ShopBanner from '@/views/shop/shopBanner.vue'
import DeliveryType from '@/views/shop/deliveryType.vue'
import AddDelivery from '@/views/shop/addDelivery.vue'
import OrderList from '@/views/shop/orderList.vue'
import CreateOrder from '@/views/shop/createOrder.vue'
import OrderWindow from '@/views/shop/orderWindow.vue'
import CommentList from '@/views/shop/commentList.vue'

// 支付方式
import CodeList from '@/views/config/codeList.vue'
import AddCode from '@/views/config/addCode.vue'
import ConfigList from '@/views/config/configList.vue'
import AddConfig from '@/views/config/addConfig.vue'

// 接口设置
import WechatPayConfig from '@/views/config/wechatPayConfig.vue'
import WechatConfig from '@/views/config/wechatConfig.vue'
import AlipayConfig from '@/views/config/alipayConfig.vue'

Vue.use(VueRouter)

const routes = [
	{
	  path: '/',
	  redirect: 'index'
	},
	//系统设置
	{
		path: '/index',
		name: 'index',
		redirect: '/settings',
		component: Index,
		children: [
			{
			  path: '/',
			  component: Settings
			},
			{
			  path: 'settings',
			  component: Settings
			},
			{
			  path: 'userSettings',
			  component: UserSettings
			},
			{
			  path: 'networkSettings',
			  component: NetworkSettings
			},
			{
			  path: 'expressSettings',
			  component: ExpressSettings
			},
			{
			  path: 'consumer',
			  component: Consumer
			},
			{
			  path: 'emailSettings',
			  component: EmailSettings
			},
			{
			  path: 'smsConfig',
			  component: SmsConfig
			},
			{
			  path: 'userAgreement',
			  component: UserAgreement
			},
			{
			  path: 'customForm',
			  component: CustomForm
			}
		]
	},
	{
		path: '/systemInfo',
		name: 'systemInfo',
		redirect: '/codePoster',
		component: Index,
		children: [
			{
			  path: '/',
			  component: CodePoster
			},
			{
			  path: 'codePoster',
			  component: CodePoster
			},
			{
			  path: 'pcBackground',
			  component: PcBackground
			},
			{
			  path: 'mobileBackground',
			  component: MobileBackground
			},
			{
			  path: 'mobileCenter',
			  component: MobileCenter
			},
			{
			  path: 'loginLogo',
			  component: LoginLogo
			},
			{
			  path: 'mobileBanner',
			  component: MobileBanner
			},
			{
			  path: 'pcBanner',
			  component: PcBanner
			},
			{
			  path: 'publicCode',
			  component: PublicCode
			}
		]
	},
	{
		path: '/letter',
		name: 'letter',
		redirect: '/letterList',
		component: Index,
		children: [
			{
			  path: '/',
			  component: LetterList
			},
			{
			  path: 'letterList',
			  component: LetterList
			},
			{
			  path: 'sendLetter',
			  component: SendLetter
			}
		]
	},
	{
		path: '/dataSafe',
		name: 'dataSafe',
		redirect: '/backupData',
		component: Index,
		children: [
			{
			  path: '/',
			  component: BackupData
			},
			{
			  path: 'backupData',
			  component: BackupData
			},
			{
			  path: 'restoreData',
			  component: RestoreData
			},
			{
			  path: 'clearData',
			  component: ClearData
			}
		]
	},
	{
		path: '/user',
		name: 'user',
		redirect: '/userList',
		component: Index,
		children: [
			{
			  path: '/',
			  component: UserList
			},
			{
			  path: 'userList',
			  component: UserList
			},
			{
			  path: 'addUser',
			  component: AddUser
			},
			{
			  path: 'changePassword',
			  component: ChangePassword
			}
		]
	},
	{
		path: '/roles',
		name: 'roles',
		redirect: '/rolesList',
		component: Index,
		children: [
			{
			  path: '/',
			  component: RolesList
			},
			{
			  path: 'rolesList',
			  component: RolesList
			},
			{
			  path: 'addRoles',
			  component: AddRoles
			}
		]
	},
	{
		path: '/member',
		name: 'member',
		redirect: '/memberList',
		component: Index,
		children: [
			{
			  path: '/',
			  component: MemberList
			},
			{
			  path: 'memberList',
			  component: MemberList
			},
			{
			  path: 'addMember',
			  component: AddMember
			},
			{
			  path: 'resetPassword',
			  component: ResetPassword
			},
			{
			  path: 'dividend',
			  component: Dividend
			}
		]
	},
	{
		path: '/level',
		name: 'level',
		redirect: '/levelList',
		component: Index,
		children: [
			{
			  path: '/',
			  component: LevelList
			},
			{
			  path: 'levelList',
			  component: LevelList
			},
			{
			  path: 'addLevel',
			  component: AddLevel
			}
		]
	},
	{
		path: '/region',
		name: 'region',
		redirect: '/agent',
		component: Index,
		children: [
			{
			  path: '/',
			  component: Agent
			},
			{
			  path: 'agent',
			  component: Agent
			},
			{
			  path: 'addAgent',
			  component: AddAgent
			}
		]
	},
	{
		path: '/report',
		name: 'report',
		redirect: '/reportCenter',
		component: Index,
		children: [
			{
			  path: '/',
			  component: ReportCenter
			},
			{
			  path: 'reportCenter',
			  component: ReportCenter
			},
			{
			  path: 'addReportCenter',
			  component: AddReportCenter
			}
		]
	},
	{
		path: '/finance',
		name: 'finance',
		redirect: '/fundDetails',
		component: Index,
		children: [
			{
			  path: '/',
			  component: FundDetails
			},
			{
			  path: 'fundDetails',
			  component: FundDetails
			},
			{
			  path: 'withdrawRecord',
			  component: WithdrawRecord
			},
			{
			  path: 'updateApplication',
			  component: UpdateApplication
			},
			{
			  path: 'performanceRank',
			  component: PerformanceRank
			},
			{
			  path: 'rechargeRecord',
			  component: RechargeRecord
			},
			{
			  path: 'summaryBill',
			  component: SummaryBill
			},
		]
	},
	{
		path: '/news',
		name: 'news',
		redirect: '/newsList',
		component: Index,
		children: [
			{
			  path: '/',
			  component: NewsList
			},
			{
			  path: 'newsList',
			  component: NewsList
			},
			{
			  path: 'addNews',
			  component: AddNews
			},
			{
			  path: 'newsClass',
			  component: NewsClass
			}
		]
	},
	{
		path: '/page',
		name: 'page',
		redirect: '/pageList',
		component: Index,
		children: [
			{
			  path: '/',
			  component: PageList
			},
			{
			  path: 'pageList',
			  component: PageList
			},
			{
			  path: 'addPage',
			  component: AddPage
			},
			{
			  path: 'pageClass',
			  component: PageClass
			}
		]
	},
	{
		path: '/shop',
		name: 'shop',
		redirect: '/goodsList',
		component: Index,
		children: [
			{
			  path: '/',
			  component: GoodsList
			},
			{
			  path: 'goodsList',
			  component: GoodsList
			},
			{
			  path: 'addGoods',
			  component: AddGoods
			},
			{
			  path: 'goodsClass',
			  component: GoodsClass
			},
			{
			  path: 'shopBanner',
			  component: ShopBanner
			},
			{
			  path: 'commentList',
			  component: CommentList
			}
		]
	},
	{
		path: '/delivery',
		name: 'delivery',
		redirect: '/deliveryType',
		component: Index,
		children: [
			{
			  path: '/',
			  component: DeliveryType
			},
			{
			  path: 'deliveryType',
			  component: DeliveryType
			},
			{
			  path: 'addDelivery',
			  component: AddDelivery
			}
		]
	},
	{
		path: '/order',
		name: 'order',
		redirect: '/orderList',
		component: Index,
		children: [
			{
			  path: '/',
			  component: OrderList
			},
			{
			  path: 'orderList',
			  component: OrderList
			},
			{
			  path: 'createOrder',
			  component: CreateOrder
			},
			{
			  path: 'orderWindow',
			  component: OrderWindow
			}
		]
	},
	{
		path: '/code',
		name: 'code',
		redirect: '/codeList',
		component: Index,
		children: [
			{
			  path: '/',
			  component: CodeList
			},
			{
			  path: 'codeList',
			  component: CodeList
			},
			{
			  path: 'addCode',
			  component: AddCode
			}
		]
	},
	{
		path: '/pay',
		name: 'pay',
		redirect: '/configList',
		component: Index,
		children: [
			{
			  path: '/',
			  component: ConfigList
			},
			{
			  path: 'configList',
			  component: ConfigList
			},
			{
			  path: 'addConfig',
			  component: AddConfig
			}
		]
	},
	{
		path: '/config',
		name: 'config',
		redirect: '/wechatPayConfig',
		component: Index,
		children: [
			{
			  path: '/',
			  component: WechatPayConfig
			},
			{
			  path: 'wechatPayConfig',
			  component: WechatPayConfig
			},
			{
			  path: 'wechatConfig',
			  component: WechatConfig
			},
			{
			  path: 'alipayConfig',
			  component: AlipayConfig
			}
		]
	},
	{
		path: '/about',
		name: 'about',
		component: About
	},
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // {
    //   path: '/lock',
    //   name: 'lock',
    //   component: () => import('./views/Lock.vue')
    // },
    // {
    //   path: '*',
    //   name: 'Nofind',
    //   component: () => import('./views/404.vue')
    // }
	{
		path: "*",
		redirect: "/"
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
