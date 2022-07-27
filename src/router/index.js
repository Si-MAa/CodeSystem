import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const searchsup = r => require.ensure([], () => r(require('@/page/searchsup')), 'searchsup');
const codesup = r => require.ensure([], () => r(require('@/page/codesup')), 'codesup');
const searchcus = r => require.ensure([], () => r(require('@/page/searchcus')), 'searchcus');
const codecus = r => require.ensure([], () => r(require('@/page/codecus')), 'codecus');
const foodList = r => require.ensure([], () => r(require('@/page/foodList')), 'foodList');
const orderList = r => require.ensure([], () => r(require('@/page/orderList')), 'orderList');
const adminList = r => require.ensure([], () => r(require('@/page/adminList')), 'adminList');
const codeFG = r => require.ensure([], () => r(require('@/page/codeFG')), 'codeFG');
const newMember = r => require.ensure([], () => r(require('@/page/newMember')), 'newMember');
const uploadImg = r => require.ensure([], () => r(require('@/page/uploadImg')), 'uploadImg');
const codeRA = r => require.ensure([], () => r(require('@/page/codeRA')), 'codeRA');
const codeSubM = r => require.ensure([], () => r(require('@/page/codeSubM')), 'codeSubM');
const sendMessage = r => require.ensure([], () => r(require('@/page/sendMessage')), 'sendMessage');
const codePro = r => require.ensure([], () => r(require('@/page/codePro')), 'codePro');

const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},{
			path: '/searchsup',
			component: searchsup,
			meta: ['供应商', '供应商查询'],
		},{
			path: '/codesup',
			component: codesup,
			meta: ['供应商', '供应商编码'],
		},{
			path: '/searchcus',
			component: searchcus,
			meta: ['客户', '客户查询'],
		},{
			path: '/codecus',
			component: codecus,
			meta: ['客户', '客户编码'],
		},{
			path: '/foodList',
			component: foodList,
			meta: ['数据管理', '食品列表'],
		},{
			path: '/orderList',
			component: orderList,
			meta: ['数据管理', '订单列表'],
		},{
			path: '/adminList',
			component: adminList,
			meta: ['数据管理', '管理员列表'],
		},{
			path: '/codeFG',
			component: codeFG,
			meta: ['成品编码', '成品编码'],
		},{
			path: '/newMember',
			component: newMember,
			meta: ['图表', '用户数据'],
		},{
			path: '/uploadImg',
			component: uploadImg,
			meta: ['文本编辑', 'MarkDown'],
		},{
			path: '/codeRA',
			component: codeRA,
			meta: ['原料编码', '原料编码'],
		},{
			path: '/codeSubM',
			component: codeSubM,
			meta: ['辅料编码', '辅料编码'],
		},{
			path: '/sendMessage',
			component: sendMessage,
			meta: ['设置', '发送通知'],
		},{
			path: '/codePro',
			component: codePro,
			meta: ['资产编码', '资产编码'],
		}]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
