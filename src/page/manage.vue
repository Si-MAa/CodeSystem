<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="manage"><i class="el-icon-menu"></i>使用说明</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>客户</template>
						<!--<el-menu-item index="searchcus">编码查询</el-menu-item> -->
						<el-menu-item index="codecus">编码</el-menu-item>
						<!--
						<el-menu-item index="foodList">食品列表</el-menu-item>
						<el-menu-item index="orderList">订单列表</el-menu-item>
						<el-menu-item index="adminList">管理员列表</el-menu-item>
						-->
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-plus"></i>供应商</template>
						<!-- <el-menu-item index="searchsup">编码查询</el-menu-item> -->
						<el-menu-item index="codesup">编码</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-star-on"></i>成品编码</template>

                        <el-menu-item index="codeFG">编码</el-menu-item>
                        <!--
                        <el-menu-item index="newMember">用户数据</el-menu-item>
                        -->
					</el-submenu>
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-edit"></i>原料编码</template>
                        <!--
						<el-menu-item index="uploadImg">编码</el-menu-item>
                        -->
						<el-menu-item index="codeRA">编码</el-menu-item>

					</el-submenu>
					<el-submenu index="6">
						<template slot="title"><i class="el-icon-setting"></i>辅料编码</template>

                        <el-menu-item index="codeSubM">编码</el-menu-item>
                        <!--
                        <el-menu-item index="sendMessage">发送通知</el-menu-item>
                        -->
					</el-submenu>
					<el-submenu index="7">
						<template slot="title"><i class="el-icon-warning"></i>资产编码</template>

						<el-menu-item index="codePro">编码</el-menu-item>

					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';
	.manage_page{

	}
</style>
