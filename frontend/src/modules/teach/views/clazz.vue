<template>
	<cl-crud ref="Crud">
		<cl-row>
			<cl-refresh-btn />
			<cl-add-btn />
			<cl-multi-delete-btn />
			<cl-flex1 />
			<cl-search ref="Search" />
		</cl-row>

		<cl-row>
			<cl-table ref="Table" />
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<cl-pagination />
		</cl-row>

		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script lang="ts" setup>
	defineOptions({
		name: "teach-clazz"
	});

import { useCrud, useTable, useUpsert, useSearch } from "@cool-vue/crud";
import { useCool } from "/@/cool";
import { useI18n } from "vue-i18n";
import { reactive, ref } from "vue";
	import TeacherSelect from "/$/teach/components/teacher-select.vue";

	const { service } = useCool();
	const { t } = useI18n();

	const options = reactive({
		status: [
			{ label: t('正常'), value: 0, type: "danger" },
			{ label: t('停用'), value: 1, type: "success" }
		]
	});

	// 院系数据
	const departmentList = ref([]);

	// 获取院系数据
	function getDepartmentList() {
		return service.base.sys.department.list().then(res => {
			departmentList.value = res.map(item => ({
				label: item.name,
				value: item.id
			}));
			// console.log(departmentList.value,'departmentList');
			
		});
	}

	const Upsert = useUpsert({
		items: [
			{ label: t('名称'), prop: "name", component: { name: "el-input", props: { clearable: true } }, span: 12, required: true },
			{ label: t('年级'), prop: "grade", component: { name: "el-input", props: { clearable: true } }, span: 12, required: true },
			{ label: t('选择班主任'), prop: "teacherId", component: { vm: TeacherSelect }, span: 12 },
			{ label: t('所属院系'), prop: "departmentId", component: { name: "el-select", props: { clearable: true }, options: departmentList }, span: 12, required: true },
			{ label: t('人数'), prop: "number", hook: "number", component: { name: "el-input-number", props: { min: 0 } }, span: 12, required: true },
			{ label: t('状态'), prop: "status", component: { name: "el-radio-group", options: options.status }, value: 0, required: true }
		],
		onOpen: async () => {
			// 打开表单时获取院系数据
			await getDepartmentList();
		}
	});

	const Table = useTable({
		columns: [
			{ type: "selection" },
			{ label: t('名称'), prop: "name", minWidth: 140 },
			{ label: t('年级'), prop: "grade", minWidth: 120 },
			{ label: t('人数'), prop: "number", minWidth: 140, sortable: "custom" },
			{ label: t('所属院系'), prop: "departmentName", minWidth: 140 },
			{ label: t('状态'), prop: "status", minWidth: 100, component: { name: "cl-switch" }, dict: options.status },
			{ label: t('创建时间'), prop: "createTime", minWidth: 170, sortable: "desc", component: { name: "cl-date-text" } },
			{ label: t('更新时间'), prop: "updateTime", minWidth: 170, sortable: "custom", component: { name: "cl-date-text" } },
			{ type: "op", buttons: ["edit", "delete"] }
		]
	});

	const Search = useSearch();

const Crud = useCrud({ 
	service: service.teach.clazz,
	onRefresh: async (params, { next }) => {
		// 刷新时获取院系数据
		await getDepartmentList();
		return next(params);
	}
}, app => {
		app.refresh();
	});

	function refresh(params?: any) {
		Crud.value?.refresh(params);
	}
</script>


