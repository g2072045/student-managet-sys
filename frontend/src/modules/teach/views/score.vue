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
		name: "teach-score"
	});

import { useCrud, useTable, useUpsert, useSearch } from "@cool-vue/crud";
import { useCool } from "/@/cool";
import { BaseService } from "/@/cool";
	import { useI18n } from "vue-i18n";
	import { reactive } from "vue";

	const { service } = useCool();
	const { t } = useI18n();

	const options = reactive({
		status: [
			{ label: t('正常'), value: 0, type: "danger" },
			{ label: t('重修'), value: 1, type: "success" }
		]
	});

	const Upsert = useUpsert({
		items: [
			{ label: t('学号'), prop: "studentNo", component: { name: "el-input", props: { clearable: true } }, span: 12, required: true },
			{ label: t('姓名'), prop: "name", component: { name: "el-input", props: { clearable: true } }, span: 12, required: true },
			{ label: t('课程'), prop: "course", component: { name: "el-input", props: { clearable: true } }, span: 12, required: true },
			{ label: t('分数'), prop: "score", hook: "number", component: { name: "el-input-number", props: { min: 0 } }, span: 12, required: true },
			{ label: t('学期'), prop: "semester", component: { name: "el-input", props: { clearable: true } }, span: 12, required: true },
			{ label: t('状态'), prop: "status", component: { name: "el-radio-group", options: options.status }, value: 0, required: true }
		]
	});

	const Table = useTable({
		columns: [
			{ type: "selection" },
			{ label: t('姓名'), prop: "studentName", minWidth: 140 },
			{ label: t('学号'), prop: "studentNo", minWidth: 140 },
			{ label: t('姓名'), prop: "name", minWidth: 140 },
			{ label: t('课程'), prop: "course", minWidth: 140 },
			{ label: t('分数'), prop: "score", minWidth: 140, sortable: "custom" },
			{ label: t('学期'), prop: "semester", minWidth: 120 },
			{ label: t('状态'), prop: "status", minWidth: 100, component: { name: "cl-switch" }, dict: options.status },
			{ label: t('创建时间'), prop: "createTime", minWidth: 170, sortable: "desc", component: { name: "cl-date-text" } },
			{ label: t('更新时间'), prop: "updateTime", minWidth: 170, sortable: "custom", component: { name: "cl-date-text" } },
			{ type: "op", buttons: ["edit", "delete"] }
		]
	});

	const Search = useSearch();

const Crud = useCrud({ service: new BaseService("admin/teach/score") }, app => {
		app.refresh();
	});

	function refresh(params?: any) {
		Crud.value?.refresh(params);
	}
</script>


