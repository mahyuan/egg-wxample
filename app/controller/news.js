const Controller = require('egg').Controller

class NewsController extends Controller {
	/*
	async list() {
		const { ctx } = this
		const data = {
			list: [{
				id: 1, title: 'news1', url: '/news/1'
			}, {
				id: 1, title: 'news1', url: '/news/1'
			}]
		}
		await ctx.render('news/list.tpl', data)
	}
	*/
	async list() {
		const ctx = this.ctx
		const page = ctx.query.page || 1
		const newsList = await ctx.service.news.list(page)
		await ctx.render('news/list.tpl', { list: newsList })
	}
}

module.exports = NewsController
