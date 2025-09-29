<template>
	<cl-crud>
		<cl-row>
			<el-button type="primary" @click="createMenus">一键创建 teach 模块菜单</el-button>
			<el-button type="danger" @click="removeMenus">移除不需要的默认菜单</el-button>
		</cl-row>
	</cl-crud>
</template>

<script setup lang="ts">
import { useCool } from '/@/cool';
import { ElMessage, ElMessageBox } from 'element-plus';

const { service } = useCool();

async function createMenus() {
	try {
		// teach 六个菜单
		const menus = [
			{ router: '/teach/student', name: '学生管理' },
			{ router: '/teach/teacher', name: '教师管理' },
			{ router: '/teach/clazz', name: '班级管理' },
			{ router: '/teach/course', name: '课程管理' },
			{ router: '/teach/attendance', name: '考勤管理' },
			{ router: '/teach/score', name: '成绩管理' }
		];

		for (const m of menus) {
			// 先删再建，避免重复
			const list = await service.base.sys.menu.list();
			const old = list.find((e: any) => e.router == m.router);
			if (old) {
				await service.base.sys.menu.delete({ ids: [old.id] });
			}

			await service.base.sys.menu.add({
				parentId: 0,
				type: 1,
				isShow: true,
				keepAlive: true,
				name: m.name,
				router: m.router,
				viewPath: `modules/teach/views/${m.router.split('/').pop()}.vue`
			});
		}

		ElMessage.success('teach 菜单创建完成');
		location.reload();
	} catch (err: any) {
		ElMessage.error(err.message || '创建失败');
	}
}

async function removeMenus() {
	try {
		await ElMessageBox.confirm('将移除用户管理、框架教程、系统管理(参数/任务)、扩展管理等默认菜单，是否继续？', '提示', { type: 'warning' });

		const list = await service.base.sys.menu.list();

		const targets = [
			// 1. 用户管理模块（可能的标识：/user/*，名称包含“用户管理”）
			(e: any) => e.router?.startsWith('/user') || /用户管理/.test(e.name || ''),
			// 2. 框架教程模块（/helper/* 或 名称含“框架教程”/“帮助”）
			(e: any) => e.router?.startsWith('/helper') || /(框架教程|帮助)/.test(e.name || ''),
			// 3. 系统管理/参数配置、任务管理（/base/sys/param、/task/*）
			(e: any) => e.router?.includes('/base/sys/param') || e.router?.startsWith('/task'),
			// 4. 扩展管理（/space/* 或 名称含“扩展管理/文件空间”）
			(e: any) => e.router?.startsWith('/space') || /(扩展管理|文件空间)/.test(e.name || '')
		];

		const needDelete = list.filter((e: any) => targets.some(fn => fn(e)));
		if (needDelete.length) {
			await service.base.sys.menu.delete({ ids: needDelete.map((e: any) => e.id) });
		}

		ElMessage.success('默认菜单移除完成');
		location.reload();
	} catch (err: any) {
		if (err?.message?.includes('cancel')) return;
		ElMessage.error(err.message || '移除失败');
	}
}
</script>



