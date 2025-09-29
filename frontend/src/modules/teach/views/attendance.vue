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
		name: "teach-attendance"
	});

import { useCrud, useTable, useUpsert, useSearch } from "@cool-vue/crud";
import { useCool } from "/@/cool";
import { BaseService } from "/@/cool";
	import { useI18n } from "vue-i18n";
	import { reactive } from "vue";
import ClazzSelect from "/$/teach/components/class-select.vue";

	const { service } = useCool();
	const { t } = useI18n();

	const options = reactive({
		status: [
			{ label: t('正常'), value: 0 },
			{ label: t('迟到'), value: 1 },
			{ label: t('早退'), value: 2 },
			{ label: t('旷课'), value: 3 },
			{ label: t('请假'), value: 4 }
		]
	});

	const Upsert = useUpsert({
		items: [
			{ label: t('学号'), prop: "studentNo", component: { name: "el-input", props: { clearable: true } }, span: 12, required: true },
			{ label: t('姓名'), prop: "name", component: { name: "el-input", props: { clearable: true } }, span: 12, required: true },
			{ label: t('选择班级'), prop: "clazzId", component: { vm: ClazzSelect }, span: 12 },
			{ label: t('日期'), prop: "attendanceDate", component: { name: "el-date-picker", props: { type: "date", valueFormat: "YYYY-MM-DD" } }, span: 12, required: true },
			{ label: t('状态'), prop: "status", component: { name: "cl-select", props: { options: options.status } }, value: 0, span: 12, required: true },
			{ label: t('备注'), prop: "remark", component: { name: "el-input", props: { type: "textarea", rows: 4 } } }
		]
	});

	const Table = useTable({
		columns: [
			{ type: "selection" },
			{ label: t('名称'), prop: "clazzName", minWidth: 140 },
			{ label: t('姓名'), prop: "studentName", minWidth: 140 },
			{ label: t('学号'), prop: "studentNo", minWidth: 140 },
			{ label: t('姓名'), prop: "name", minWidth: 140 },
			{ label: t('日期'), prop: "attendanceDate", minWidth: 140, sortable: "custom", component: { name: "cl-date-text", props: { format: "YYYY-MM-DD" } } },
			{ label: t('状态'), prop: "status", minWidth: 100, component: { name: "cl-switch" }, dict: options.status },
			{ label: t('备注'), prop: "remark", showOverflowTooltip: true, minWidth: 200 },
			{ label: t('创建时间'), prop: "createTime", minWidth: 170, sortable: "desc", component: { name: "cl-date-text" } },
			{ label: t('更新时间'), prop: "updateTime", minWidth: 170, sortable: "custom", component: { name: "cl-date-text" } },
			{ type: "op", buttons: ["edit", "delete"] }
		]
	});

	const Search = useSearch();

const Crud = useCrud({ service: new BaseService("admin/teach/attendance") }, app => {
		app.refresh();
	});

	function refresh(params?: any) {
		Crud.value?.refresh(params);
	}
</script>


