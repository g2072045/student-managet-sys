<template>
	<cl-select-table
		v-model="value"
		:title="t('选择班级管理')"
		:service="service.teach.clazz"
		:columns="columns"
		:multiple="multiple"
		:dict='{"text":"name"}'
		pickerType="text"
	/>
</template>

<script setup lang="ts">
	defineOptions({
		name: "teach-clazz-select"
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
		status: [
			{ label: t("正常"), value: 0, type: "danger" },
			{ label: t("停用"), value: 1, type: "success" }
		]
	});

	const columns = ref([
		{ label: t("名称"), prop: "name", minWidth: 140 },
		{ label: t("年级"), prop: "grade", minWidth: 120 },
		{ label: t("人数"), prop: "number", minWidth: 140, sortable: "custom" },
		{ label: t("教室"), prop: "classroom", minWidth: 140 },
		{
			label: t("状态"),
			prop: "status",
			minWidth: 100,
			component: { name: "cl-switch" },
			dict: options.status
		}
	]);
</script>



