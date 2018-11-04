<template>
	<div class="login-container">
		<div class="form-container">
			<el-form ref="loginForm" :model="form" label-width="80px">
				<el-form-item label="用户名">
					<el-input v-model="form.username"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="form.password"></el-input>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				form: {
					username: '',
					password: ''
				}
			}
		}
	}
</script>
<style>
	.login-container {
		position: fixed;
		display: flex;
		height: 100%;
		width: 100%;
		background-color: #2d3a4b;
		align-items: center;
		justify-content: center;
	}
</style>
