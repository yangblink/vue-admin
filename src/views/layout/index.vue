<template>
	<div class="app-wrapper">
		<sidebar class="sidebar-container"></sidebar>
		<div class="main-container">
			<navbar></navbar>
			<app-main></app-main>
		</div>
	</div>
</template>
<script>
import { Navbar, Sidebar, AppMain } from '@/views/layout/components'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  }
}
</script>

<style>
	.app-wrapper {
		display: flex;
		flex-direction: row;
		flex: auto;
	}
</style>
