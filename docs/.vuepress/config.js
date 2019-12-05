module.exports = {
  	title: 'blog',
  	base: '/vue-blog/',
  	head: [
    	['link', { rel: 'icon', href: '/logo.JPG' }]
  	],
  	description: 'Just playing around',
  	themeConfig: {
	  	// 你的GitHub仓库，请正确填写
	    repo: 'https://github.com/beijingxiayule/ypwang.github.io.git',
	    // 自定义仓库链接文字。
	    repoLabel: 'My GitHub',
	  	nav: [
	  		{ text: 'Home', link: '/' }
	  	],
    	sidebarDepth: 2, // 侧边栏显示2级
    	sidebar: [
	      	['/blog/20191111.md', '玩转for循环'],
	      	['/blog/20191112.md', 'Reflect与Proxy'],
	      	['/blog/20191129.md', 'vue面试题']
	    ]
	},
}