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
		name: "teach-teacher"
	});

import { useCrud, useTable, useUpsert, useSearch } from "@cool-vue/crud";
import { useCool } from "/@/cool";
import { BaseService } from "/@/cool";
	import { useI18n } from "vue-i18n";
	import { reactive } from "vue";

	const { service } = useCool();
	const { t } = useI18n();

	const options = reactive({
		gender: [
			{ label: t('男'), value: 0 },
			{ label: t('女'), value: 1 },
			{ label: t('未知'), value: 2 }
		],
		status: [
			{ label: t('正常'), value: 0, type: "danger" },
			{ label: t('离职'), value: 1, type: "success" }
		]
	});

	const Upsert = useUpsert({
		items: [
			{ label: t('工号'), prop: "teacherNo", component: { name: "el-input", props: { clearable: true } }, span: 12, required: true },
			{ label: t('姓名'), prop: "name", component: { name: "el-input", props: { clearable: true } }, span: 12, required: true },
			{ label: t('性别'), prop: "gender", component: { name: "el-radio-group", options: options.gender }, value: 2, required: true },
			{ label: t('年龄'), prop: "age", hook: "number", component: { name: "el-input-number", props: { min: 0 } }, span: 12, required: true },
			{ label: t('电话'), prop: "phone", component: { name: "el-input", props: { clearable: true } }, span: 12 },
			{ label: t('邮箱'), prop: "email", component: { name: "el-input", props: { clearable: true } }, span: 12 },
			{ label: t('职称'), prop: "title", component: { name: "el-input", props: { clearable: true } }, span: 12 },
			{ label: t('状态'), prop: "status", component: { name: "el-radio-group", options: options.status }, value: 0, required: true }
		]
	});

	const Table = useTable({
		columns: [
			{ type: "selection" },
			{ label: t('工号'), prop: "teacherNo", minWidth: 140 },
			{ label: t('姓名'), prop: "name", minWidth: 140 },
			{ label: t('性别'), prop: "gender", minWidth: 120, dict: options.gender },
			{ label: t('年龄'), prop: "age", minWidth: 140, sortable: "custom" },
			{ label: t('电话'), prop: "phone", minWidth: 140 },
			{ label: t('邮箱'), prop: "email", minWidth: 140 },
			{ label: t('职称'), prop: "title", minWidth: 140 },
			{ label: t('状态'), prop: "status", minWidth: 100, component: { name: "cl-switch" }, dict: options.status },
			{ label: t('创建时间'), prop: "createTime", minWidth: 170, sortable: "desc", component: { name: "cl-date-text" } },
			{ label: t('更新时间'), prop: "updateTime", minWidth: 170, sortable: "custom", component: { name: "cl-date-text" } },
			{ type: "op", buttons: ["edit", "delete"] }
		]
	});

	const Search = useSearch();

const Crud = useCrud({ service: new BaseService("admin/teach/teacher") }, app => {
		app.refresh();
	});

	function refresh(params?: any) {
		Crud.value?.refresh(params);
	}
</script>


