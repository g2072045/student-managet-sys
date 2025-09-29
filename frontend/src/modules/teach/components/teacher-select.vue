<template>
	<cl-select-table
		v-model="value"
		:title="t('选择教师管理')"
		:service="service.teach.teacher"
		:columns="columns"
		:multiple="multiple"
		:dict='{"text":"title"}'
		pickerType="text"
	/>
</template>

<script setup lang="ts">
	defineOptions({
		name: "teach-teacher-select"
	});

	import { useCool } from "/@/cool";
	import { useI18n } from "vue-i18n";
	import { CrudProps } from "/#/crud";
	import { reactive, ref, useModel } from "vue";

	const props = defineProps({
		...CrudProps,
		modelValue: null,
		multiple: Boolean
	});

	const { service } = useCool();
	const { t } = useI18n();

	const value = useModel(props, "modelValue");

	// 选项
	const options = reactive({
		gender: [
			{ label: t("男"), value: 0 },
			{ label: t("女"), value: 1 },
			{ label: t("未知"), value: 2 }
		],
		status: [
			{ label: t("正常"), value: 0, type: "danger" },
			{ label: t("离职"), value: 1, type: "success" }
		]
	});

	const columns = ref([
		{ label: t("工号"), prop: "teacherNo", minWidth: 140 },
		{ label: t("姓名"), prop: "name", minWidth: 140 },
		{ label: t("性别"), prop: "gender", minWidth: 120, dict: options.gender },
		{ label: t("年龄"), prop: "age", minWidth: 140, sortable: "custom" },
		{ label: t("电话"), prop: "phone", minWidth: 140 },
		{ label: t("邮箱"), prop: "email", minWidth: 140 },
		{ label: t("职称"), prop: "title", minWidth: 140 },
		{
			label: t("状态"),
			prop: "status",
			minWidth: 100,
			component: { name: "cl-switch" },
			dict: options.status
		}
	]);
</script>



