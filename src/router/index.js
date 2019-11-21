import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/views/Index.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import About from '@/views/About.vue'

import Settings from '@/views/system/settings.vue'
import UserSettings from '@/views/system/userSettings.vue'
import NetworkSettings from '@/views/system/networkSettings.vue'
import ExpressSettings from '@/views/system/expressSettings.vue'
import Consumer from '@/views/system/consumer.vue'
import EmailSettings from '@/views/system/emailSettings.vue'
import SmsConfig from '@/views/system/smsConfig.vue'
import UserAgreement from '@/views/system/userAgreement.vue'
import CustomForm from '@/views/system/customForm.vue'

import CodePoster from '@/views/systemInfo/codePoster.vue'
import PcBackground from '@/views/systemInfo/pcBackground.vue'
import MobileBackground from '@/views/systemInfo/mobileBackground.vue'
import MobileCenter from '@/views/systemInfo/mobileCenter.vue'
import LoginLogo from '@/views/systemInfo/loginLogo.vue'
import MobileBanner from '@/views/systemInfo/mobileBanner.vue'
import PcBanner from '@/views/systemInfo/pcBanner.vue'
import PublicCode from '@/views/systemInfo/publicCode.vue'


Vue.use(VueRouter)

//引入recom组件！
const recom = {
	template: `<router-view></router-view>`
}

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
