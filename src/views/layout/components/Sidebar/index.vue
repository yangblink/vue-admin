<template>
	<scroll-bar>
		<el-menu
			class="sidebar-container"
			mode="vertical"
			:collapse="collapse"
		>
			<el-menu-item v-for="(item, index) in routers" :index="index.toString()" :key="index">
				<i v-if="item.icon" :class="'el-icon-' + item.icon"></i>
				<span slot="title">{{item.title}}</span>
			</el-menu-item>
			<el-button type="error" @click="test">sadf</el-button>
		</el-menu>
	</scroll-bar>
</template>
<script>
import ScrollBar from '@/components/ScrollBar'
export default {
	data() {
		return {
			isCollapse: false,
			collapse: false,
			routers: [{
				icon: 'info',
				title: '导航1'
			}, {
				icon: 'info',
				title: '导航2'
			}, {
				icon: 'info',
				title: '导航3'
			}]
		}
	},
	components: { ScrollBar },
	methods: {
		test() {
			this.collapse = !this.collapse
		}
	}
}
</script>
<style>
.sidebar-container:not(.el-menu--collapse) {
	flex: 0 0 200px;
	min-height: 100vh;
	width: 200px;
}
</style>
