import layout from '@/views/layout'

const asyncRoute = [
	{ 
		path: 'foo',
		component: layout,
		children: [{
			path: 'index',
			name: 'foo-name',
			component: () => import('@/views/foo'),
			meta: { title: 'foo-meta-title', icon: 'info' }
		}]
	},
	{ 
		path: 'bar',
		component: layout,
		children: [{
			path: 'index',
			name: 'bar-name',
			component: () => import('@/views/bar'),
			meta: { title: 'bar-meta-title', icon: 'info' }
		}]
	}
]

export default asyncRoute
