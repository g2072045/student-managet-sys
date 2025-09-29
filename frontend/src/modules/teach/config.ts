import { type ModuleConfig } from '/@/cool';

export default (): ModuleConfig => {
    return {
        components: [
            () => import('./components/class-select.vue'),
            () => import('./components/teacher-select.vue')
        ],
        views: [
            {
                path: '/teach/menu-setup',
                meta: { label: '教务菜单配置' },
                component: () => import('./views/menu-setup.vue')
            },
            {
                path: '/teach/student',
                meta: { label: '学生管理' },
                component: () => import('./views/student.vue')
            },
            {
                path: '/teach/teacher',
                meta: { label: '教师管理' },
                component: () => import('./views/teacher.vue')
            },
            {
                path: '/teach/clazz',
                meta: { label: '班级管理' },
                component: () => import('./views/clazz.vue')
            },
            {
                path: '/teach/course',
                meta: { label: '课程管理' },
                component: () => import('./views/course.vue')
            },
            {
                path: '/teach/attendance',
                meta: { label: '考勤管理' },
                component: () => import('./views/attendance.vue')
            },
            {
                path: '/teach/score',
                meta: { label: '成绩管理' },
                component: () => import('./views/score.vue')
            }
        ]
    };
};


