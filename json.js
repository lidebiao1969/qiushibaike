
/* import URL from './common/url.js' */
/* 首页导航条 */
const navBars=[
	{
	    name: '关注',
	    id: 'guanzhu'
	}, {
	    name: '推荐',
	    id: 'tuijian'
	}, {
	    name: '体育',
	    id: 'tiyu'
	}, {
	    name: '热点',
	    id: 'redian'
	}, {
	    name: '财经',
	    id: 'caijing'
	}, {
	    name: '娱乐',
	    id: 'yule'
	}, {
	    name: '军事',
	    id: 'junshi'
	}, {
	    name: '历史',
	    id: 'lishi'
	}, {
	    name: '本地',
	    id: 'bendi'
	}
]

//话题列表
const navBarT=[
	{
	    name: '娱乐',
	    id: 'yule'
	}, {
	    name: '最新',
	    id: 'zuixin'
	}, {
	    name: '情感',
	    id: 'emotion'
	}, {
	    name: '游戏',
	    id: 'game'
	}, {
	    name: '城市',
	    id: 'city'
	}, {
	    name: '故事',
	    id: 'story'
	}, {
	    name: '喜爱',
	    id: 'hobby'
	}, {
	    name: '二次元',
	    id: 'erciyuan'
	}, {
	    name: '打卡',
	    id: 'daka'
	}
]
/* 新闻内容 */
const newslist=[
	{  loadtext:'上拉加载更多',
		list:[
		{
			userpic:"/static/zzf/z1.png",
			nickname:"zzf",
			showupz:true,
			isguanzi:true,
			title:"互惠互信、精诚合作",
			type:"pic",
			titlepic:"/static/zzf/z1.png",
			infornum:{
				index:0,
				dingnum:10,
				cainum:9
				},
				commentnum:2,
				sharenum:5
								
		},
		{
			userpic:"/static/zzf/z2.png",
			nickname:"zzf11",
			showupz:true,
			title:"互惠互信、精诚合作2",
			type:"pic",
			titlepic:"/static/zzf/z2.png",
			playnum:"20w",
			timelong:"2:47",
			infornum:{
				index:0,
				dingnum:10,
				cainum:9
				},
				commentnum:2,
				sharenum:5
		}
	]},
	{	loadtext:'上拉加载更多',
		list:[
		{
			userpic:"/static/zzf/z3.png",
			nickname:"zzf",
			showupz:true,
			isguanzi:true,
			title:"互惠互信、精诚合作3",
			type:"pic",
			titlepic:"/static/zzf/z3.png",
			infornum:{
				index:0,
				dingnum:10,
				cainum:9
				},
				commentnum:2,
				sharenum:5
								
		},
		{
			userpic:"/static/zzf/z4.png",
			nickname:"zzf",
			showupz:true,
			title:"互惠互信、精诚合作4",
			type:"pic",
			playnum:"20w",
			timelong:"2:47",
			titlepic:"/static/zzf/z4.png",
			infornum:{
				index:0,
				dingnum:10,
				cainum:9
				},
				commentnum:2,
				sharenum:5
		}
	]},
	{
		loadtext:'上拉加载更多',
		
	},
	{loadtext:'上拉加载更多',
		},
	{
		loadtext:'上拉加载更多',
		},
	{
		loadtext:'上拉加载更多',
		},
	{
		
		},
	{
		
		},
	{
		
		}
	
]

const topiclist=[
	{  loadtext:'上拉加载更多',
		list:[
			{
				titlepic:"../../static/zzf/z1.png",
				title:"标题",
				context:"13:36:15.149 开始差量编译...13:",
				totalnum:30,
				todaynum:5
			},	{
				titlepic:"../../static/zzf/z2.png",
				title:"标题",
				context:"13:36:15.149 开始差量编译...",
				totalnum:30,
				todaynum:5
			},	{
				titlepic:"../../static/zzf/z3.png",
				title:"标题",
				context:"13:36:15.149 开始差量编译",
				totalnum:30,
				todaynum:5
			}
		]},
	{	loadtext:'上拉加载更多',
		list:[
			{
				titlepic:"../../static/zzf/z1.png",
				title:"标题",
				context:"13:36:15.149 开始差量编译...13:",
				totalnum:30,
				todaynum:5
			},	{
				titlepic:"../../static/zzf/z2.png",
				title:"标题",
				context:"13:36:15.149 开始差量编译...",
				totalnum:30,
				todaynum:5
			},	{
				titlepic:"../../static/zzf/z3.png",
				title:"标题",
				context:"13:36:15.149 开始差量编译",
				totalnum:30,
				todaynum:5
			}
		]},
	{
		loadtext:'上拉加载更多',
		
	},
	{loadtext:'上拉加载更多',
		},
	{
		loadtext:'上拉加载更多',
		},
	{
		loadtext:'上拉加载更多',
		},
	{
		
		},
	{
		
		},
	{
		
		}
	
]
export default {
	navBars,
	newslist,
	navBarT,
	topiclist
	}