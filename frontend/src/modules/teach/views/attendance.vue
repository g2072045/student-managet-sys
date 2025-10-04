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

	import { useI18n } from "vue-i18n";
	import { reactive, ref } from "vue";
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

	// 课程数据
	const courseList = ref([]);
	// 教师数据
	const teacherList = ref([]);
	// 学生数据
	const studentList = ref([]);

	// 获取课程数据
	function getCourseList() {
		return service.teach.course.list().then(res => {
			courseList.value = res.map(item => ({
				label: item.name,
				value: item.id
			}));
		});
	}

	// 获取教师数据
	function getTeacherList() {
		return service.teach.teacher.list().then(res => {
			teacherList.value = res.map(item => ({
				label: item.name,
				value: item.id
			}));
		});
	}

	// 获取学生数据
	function getStudentList() {
		return service.teach.student.list().then(res => {
			studentList.value = res.map(item => ({
				label: item.name,
				value: item.id
			}));
		});
	}

	const Upsert = useUpsert({
		items: [
			{ label: t('选择学生'), prop: "studentId", component: { name: "el-select", props: { clearable: true }, options: studentList }, span: 12, required: true },
			{ label: t('选择课程'), prop: "courseId", component: { name: "el-select", props: { clearable: true }, options: courseList }, span: 12, required: true },
			{ label: t('选择教师'), prop: "teacherId", component: { name: "el-select", props: { clearable: true }, options: teacherList }, span: 12, required: true },
			{ label: t('日期'), prop: "attendanceDate", component: { name: "el-date-picker", props: { type: "date", valueFormat: "YYYY-MM-DD" } }, span: 12, required: true },
			{ label: t('状态'), prop: "status", component: { name: "cl-select", props: { options: options.status } }, value: 0, span: 12, required: true },
			{ label: t('备注'), prop: "remark", component: { name: "el-input", props: { type: "textarea", rows: 4 } } }
		],
		onOpen: async () => {
			// 打开表单时获取数据
			await Promise.all([getStudentList(), getCourseList(), getTeacherList()]);
		}
	});

	const Table = useTable({
		columns: [
			{ type: "selection" },
			{ label: t('学生'), prop: "studentName", minWidth: 140 },
			{ label: t('学号'), prop: "studentNo", minWidth: 140 },
			{ label: t('课程'), prop: "courseName", minWidth: 140 },
			{ label: t('教师'), prop: "teacherName", minWidth: 140 },
			{ label: t('日期'), prop: "attendanceDate", minWidth: 140, sortable: "custom", component: { name: "cl-date-text", props: { format: "YYYY-MM-DD" } } },
			{ label: t('状态'), prop: "status", minWidth: 100, component: { name: "cl-switch" }, dict: options.status },
			{ label: t('备注'), prop: "remark", showOverflowTooltip: true, minWidth: 200 },
			{ label: t('创建时间'), prop: "createTime", minWidth: 170, sortable: "desc", component: { name: "cl-date-text" } },
			{ label: t('更新时间'), prop: "updateTime", minWidth: 170, sortable: "custom", component: { name: "cl-date-text" } },
			{ type: "op", buttons: ["edit", "delete"] }
		]
	});

	const Search = useSearch();

const Crud = useCrud({ 
		service: service.teach.attendance,
		onRefresh: async (params, { next }) => {
			// 刷新时获取数据
			await Promise.all([getStudentList(), getCourseList(), getTeacherList()]);
			return next(params);
		}
	}, app => {
		app.refresh();
	});

	function refresh(params?: any) {
		Crud.value?.refresh(params);
	}
</script>


