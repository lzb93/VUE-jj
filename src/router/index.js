import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import classify from '@/view/classify'
import clifycon from '@/components/clifycon'
import distri from '@/view/distri'
import mine from '@/view/mine'
import shopcart from '@/view/shopcart'
import pro_info from '@/view/pro_info'

// mine
import address_list from '@/view/address_list'
import address_edit from '@/view/address_edit'
import all_orders from '@/view/all_orders'
import addtel from '@/view/addtel'
import dataset from '@/view/dataset'
import recard from '@/view/recard'
import shoucang from '@/view/shoucang'
import addcard from '@/view/addcard'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: '首页',
            meta: {
                title: '首页'
            },
            component: index

        },
        {
            path: '/classify',
            name: 'classify',
            component: classify,
            children: [{
                path: '/classify/clifycon',
                name: 'clifycon',
                component: clifycon
            }]
        },
        {
            path: '/distri',
            name: 'distri',
            component: distri
        },
        {
            path: '/mine',
            name: 'mine',
            component: mine
        },
        {
            path: '/shopcart',
            name: 'shopcart',
            component: shopcart
        },
        {
            path: '/pro_info',
            name: 'pro_info',
            component: pro_info
        },
        {
            path: '/shoucang',
            name: 'shoucang',
            component: shoucang
        },
        {
            path: '/recard',
            name: 'recard',
            component: recard
        },
        {
            path: '/address_list',
            name: 'address_list',
            component: address_list
        },
        {
            path: '/address_edit',
            name: 'address_edit',
            component: address_edit
        },
        {
            path: '/all_orders',
            name: 'all_orders',
            component: all_orders
        },
        {
            path: '/addtel',
            name: 'addtel',
            component: addtel
        },
        {
            path: '/dataset',
            name: 'dataset',
            component: dataset
        },
        {
            path: '/addcard',
            name: 'addcard',
            component: addcard
        },
    ]
})