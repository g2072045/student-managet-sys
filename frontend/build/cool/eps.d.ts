declare namespace Eps {
	interface BaseSysRoleEntity {
		/**
		 * 用户ID
		 */
		userId?: number;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 角色标签
		 */
		label?: string;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 数据权限是否关联上下级
		 */
		relevance?: number;

		/**
		 * 菜单权限
		 */
		menuIdList?: string;

		/**
		 * 部门权限
		 */
		departmentIdList?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysUserEntity {
		/**
		 * 部门ID
		 */
		departmentId?: number;

		/**
		 * 姓名
		 */
		name?: string;

		/**
		 * 用户名
		 */
		username?: string;

		/**
		 * 密码
		 */
		password?: string;

		/**
		 * 密码版本
		 */
		passwordV?: number;

		/**
		 * 昵称
		 */
		nickName?: string;

		/**
		 * 头像
		 */
		headImg?: string;

		/**
		 * 手机号
		 */
		phone?: string;

		/**
		 * 邮箱
		 */
		email?: string;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 状态 0:禁用 1：启用
		 */
		status?: number;

		/**
		 * socketId
		 */
		socketId?: string;

		/**
		 * 租户id
		 */
		tenantId?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysMenuEntity {
		/**
		 * 父菜单ID
		 */
		parentId?: number;

		/**
		 * 菜单名称
		 */
		name?: string;

		/**
		 * 权限
		 */
		perms?: string;

		/**
		 * 类型 0：目录 1：菜单 2：按钮
		 */
		type?: number;

		/**
		 * 图标
		 */
		icon?: string;

		/**
		 * 排序
		 */
		orderNum?: number;

		/**
		 * 菜单地址
		 */
		router?: string;

		/**
		 * 视图地址
		 */
		viewPath?: string;

		/**
		 * 路由缓存
		 */
		keepAlive?: boolean;

		/**
		 * 是否显示
		 */
		isShow?: boolean;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysParamEntity {
		/**
		 * 键
		 */
		keyName?: string;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 数据
		 */
		data?: string;

		/**
		 * 数据类型 0:字符串 1:数组 2:键值对
		 */
		dataType?: number;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysDepartmentEntity {
		/**
		 * 部门名称
		 */
		name?: string;

		/**
		 * 上级部门ID
		 */
		parentId?: number;

		/**
		 * 排序
		 */
		orderNum?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysLogEntity {
		/**
		 * 用户ID
		 */
		userId?: number;

		/**
		 * 行为
		 */
		action?: string;

		/**
		 * IP
		 */
		ip?: string;

		/**
		 * 参数
		 */
		params?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface StudentEntity {
		/**
		 * 学号
		 */
		studentNo?: string;

		/**
		 * 姓名
		 */
		name?: string;

		/**
		 * 性别 0:男 1:女 2:未知
		 */
		gender?: number;

		/**
		 * 年龄
		 */
		age?: number;

		/**
		 * 电话
		 */
		phone?: string;

		/**
		 * 邮箱
		 */
		email?: string;

		/**
		 * 地址
		 */
		address?: string;

		/**
		 * 班级ID
		 */
		clazzId?: number;

		/**
		 * 关联用户ID
		 */
		userId?: number;

		/**
		 * 用户名
		 */
		username?: string;

		/**
		 * 密码
		 */
		password?: string;

		/**
		 * 状态 0:正常 1:休学 2:毕业 3:其他
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface AttendanceEntity {
		/**
		 * 学生ID
		 */
		studentId?: number;

		/**
		 * 课程ID
		 */
		courseId?: number;

		/**
		 * 教师ID
		 */
		teacherId?: number;

		/**
		 * 考勤日期
		 */
		attendanceDate?: Date;

		/**
		 * 考勤状态 0:正常 1:迟到 2:早退 3:旷课 4:请假
		 */
		status?: number;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ScoreEntity {
		/**
		 * 学生ID
		 */
		studentId?: number;

		/**
		 * 课程ID
		 */
		courseId?: number;

		/**
		 * 教师ID
		 */
		teacherId?: number;

		/**
		 * 分数
		 */
		score?: number;

		/**
		 * 学期
		 */
		semester?: string;

		/**
		 * 状态 0:正常 1:重修
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TeacherEntity {
		/**
		 * 工号
		 */
		teacherNo?: string;

		/**
		 * 姓名
		 */
		name?: string;

		/**
		 * 性别 0:男 1:女 2:未知
		 */
		gender?: number;

		/**
		 * 年龄
		 */
		age?: number;

		/**
		 * 电话
		 */
		phone?: string;

		/**
		 * 邮箱
		 */
		email?: string;

		/**
		 * 职称
		 */
		title?: string;

		/**
		 * 关联用户ID
		 */
		userId?: number;

		/**
		 * 用户名
		 */
		username?: string;

		/**
		 * 密码
		 */
		password?: string;

		/**
		 * 所属院系ID
		 */
		departmentId?: number;

		/**
		 * 状态 0:正常 1:离职
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface CourseEntity {
		/**
		 * 课程代码
		 */
		courseCode?: string;

		/**
		 * 课程名称
		 */
		name?: string;

		/**
		 * 学分
		 */
		credit?: number;

		/**
		 * 学时
		 */
		hours?: number;

		/**
		 * 课程类型 0:必修 1:选修
		 */
		type?: number;

		/**
		 * 所属院系ID
		 */
		departmentId?: number;

		/**
		 * 授课教师ID
		 */
		teacherId?: number;

		/**
		 * 状态 0:正常 1:停用
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ClazzEntity {
		/**
		 * 班级名称
		 */
		name?: string;

		/**
		 * 年级
		 */
		grade?: string;

		/**
		 * 班级人数
		 */
		number?: number;

		/**
		 * 班主任ID
		 */
		teacherId?: number;

		/**
		 * 所属院系ID
		 */
		departmentId?: number;

		/**
		 * 状态 0:正常 1:停用
		 */
		status?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface RecycleDataEntity {
		/**
		 * 表信息
		 */
		entityInfo?: string;

		/**
		 * 操作人
		 */
		userId?: number;

		/**
		 * 被删除的数据
		 */
		data?: string;

		/**
		 * 请求的接口
		 */
		url?: string;

		/**
		 * 请求参数
		 */
		params?: string;

		/**
		 * 删除数据条数
		 */
		count?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface SpaceInfoEntity {
		/**
		 * 地址
		 */
		url?: string;

		/**
		 * 类型
		 */
		type?: string;

		/**
		 * 分类ID
		 */
		classifyId?: number;

		/**
		 * 文件id
		 */
		fileId?: string;

		/**
		 * 文件名
		 */
		name?: string;

		/**
		 * 文件大小
		 */
		size?: number;

		/**
		 * 文档版本
		 */
		version?: number;

		/**
		 * 文件位置
		 */
		filePath?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface SpaceTypeEntity {
		/**
		 * 类别名称
		 */
		name?: string;

		/**
		 * 父分类ID
		 */
		parentId?: number;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PluginInfoEntity {
		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 简介
		 */
		description?: string;

		/**
		 * 实例对象
		 */
		key?: string;

		/**
		 * Hook
		 */
		hook?: string;

		/**
		 * 描述
		 */
		readme?: string;

		/**
		 * 版本
		 */
		version?: string;

		/**
		 * Logo(base64)
		 */
		logo?: string;

		/**
		 * 作者
		 */
		author?: string;

		/**
		 * 状态 0-禁用 1-启用
		 */
		status?: number;

		/**
		 * 插件的plugin.json
		 */
		pluginJson?: string;

		/**
		 * 配置
		 */
		config?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DictInfoEntity {
		/**
		 * 类型ID
		 */
		typeId?: number;

		/**
		 * 父ID
		 */
		parentId?: number;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 值
		 */
		value?: string;

		/**
		 * 排序
		 */
		orderNum?: number;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DictTypeEntity {
		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 标识
		 */
		key?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserInfoEntity {
		/**
		 * 登录唯一ID
		 */
		unionid?: string;

		/**
		 * 头像
		 */
		avatarUrl?: string;

		/**
		 * 昵称
		 */
		nickName?: string;

		/**
		 * 手机号
		 */
		phone?: string;

		/**
		 * 性别 0-未知 1-男 2-女
		 */
		gender?: number;

		/**
		 * 状态 0-禁用 1-正常 2-已注销
		 */
		status?: number;

		/**
		 * 登录方式 0-小程序 1-公众号 2-H5
		 */
		loginType?: string;

		/**
		 * 密码
		 */
		password?: string;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TaskInfoEntity {
		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 任务ID
		 */
		jobId?: string;

		/**
		 * 最大执行次数 不传为无限次
		 */
		repeatCount?: number;

		/**
		 * 每间隔多少毫秒执行一次 如果cron设置了 这项设置就无效
		 */
		every?: number;

		/**
		 * 状态 0:停止 1：运行
		 */
		status?: number;

		/**
		 * 服务实例名称
		 */
		service?: string;

		/**
		 * 状态 0:cron 1：时间间隔
		 */
		taskType?: number;

		/**
		 * 状态 0:系统 1：用户
		 */
		type?: number;

		/**
		 * 任务数据
		 */
		data?: string;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * cron
		 */
		cron?: string;

		/**
		 * 下一次执行时间
		 */
		nextRunTime?: Date;

		/**
		 * 开始时间
		 */
		startDate?: Date;

		/**
		 * 结束时间
		 */
		endDate?: Date;

		/**
		 * 创建时间
		 */
		createTime?: Date;

		/**
		 * 更新时间
		 */
		updateTime?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	type json = any;

	type DictKey = string;

	interface PagePagination {
		size: number;
		page: number;
		total: number;
		[key: string]: any;
	}

	interface PageResponse<T> {
		pagination: PagePagination;
		list: T[];
		[key: string]: any;
	}

	interface BaseSysParamPageResponse {
		pagination: PagePagination;
		list: BaseSysParamEntity[];
	}

	interface BaseSysMenuPageResponse {
		pagination: PagePagination;
		list: BaseSysMenuEntity[];
	}

	interface BaseSysUserPageResponse {
		pagination: PagePagination;
		list: BaseSysUserEntity[];
	}

	interface BaseSysRolePageResponse {
		pagination: PagePagination;
		list: BaseSysRoleEntity[];
	}

	interface BaseSysLogPageResponse {
		pagination: PagePagination;
		list: BaseSysLogEntity[];
	}

	interface TeachStudentPageResponse {
		pagination: PagePagination;
		list: StudentEntity[];
	}

	interface TeachAttendancePageResponse {
		pagination: PagePagination;
		list: AttendanceEntity[];
	}

	interface TeachCoursePageResponse {
		pagination: PagePagination;
		list: CourseEntity[];
	}

	interface TeachTeacherPageResponse {
		pagination: PagePagination;
		list: TeacherEntity[];
	}

	interface TeachClazzPageResponse {
		pagination: PagePagination;
		list: ClazzEntity[];
	}

	interface TeachScorePageResponse {
		pagination: PagePagination;
		list: ScoreEntity[];
	}

	interface SpaceInfoPageResponse {
		pagination: PagePagination;
		list: SpaceInfoEntity[];
	}

	interface SpaceTypePageResponse {
		pagination: PagePagination;
		list: SpaceTypeEntity[];
	}

	interface UserInfoPageResponse {
		pagination: PagePagination;
		list: UserInfoEntity[];
	}

	interface DictInfoPageResponse {
		pagination: PagePagination;
		list: DictInfoEntity[];
	}

	interface DictTypePageResponse {
		pagination: PagePagination;
		list: DictTypeEntity[];
	}

	interface PluginInfoPageResponse {
		pagination: PagePagination;
		list: PluginInfoEntity[];
	}

	interface RecycleDataPageResponse {
		pagination: PagePagination;
		list: RecycleDataEntity[];
	}

	interface TaskInfoPageResponse {
		pagination: PagePagination;
		list: TaskInfoEntity[];
	}

	interface BaseSysParam {
		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 鏍规嵁閿繑鍥炵綉椤电殑鍙傛暟鍊�
		 */
		html(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<BaseSysParamPageResponse>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<BaseSysParamEntity>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			add: string;
			html: string;
			page: string;
			info: string;
			update: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			add: boolean;
			html: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
		};

		request: Request;
	}

	interface BaseSysMenu {
		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<BaseSysMenuEntity[]>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<BaseSysMenuEntity>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 瀵煎叆
		 */
		import(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<BaseSysMenuPageResponse>;

		/**
		 * 瀵煎嚭
		 */
		export(data?: any): Promise<any>;

		/**
		 * 鍒涘缓浠ｇ爜
		 */
		create(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			update: string;
			info: string;
			add: string;
			delete: string;
			import: string;
			page: string;
			export: string;
			create: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			update: boolean;
			info: boolean;
			add: boolean;
			delete: boolean;
			import: boolean;
			page: boolean;
			export: boolean;
			create: boolean;
		};

		request: Request;
	}

	interface BaseSysUser {
		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 绉诲姩閮ㄩ棬
		 */
		move(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<BaseSysUserPageResponse>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<BaseSysUserEntity>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			move: string;
			page: string;
			add: string;
			update: string;
			info: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			move: boolean;
			page: boolean;
			add: boolean;
			update: boolean;
			info: boolean;
		};

		request: Request;
	}

	interface BaseSysRole {
		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<BaseSysRolePageResponse>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<BaseSysRoleEntity>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<BaseSysRoleEntity[]>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			update: string;
			page: string;
			info: string;
			delete: string;
			list: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			update: boolean;
			page: boolean;
			info: boolean;
			delete: boolean;
			list: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface BaseSysDepartment {
		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<BaseSysDepartmentEntity[]>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 鎺掑簭
		 */
		order(data?: any): Promise<any>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { list: string; delete: string; order: string; add: string; update: string };

		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			delete: boolean;
			order: boolean;
			add: boolean;
			update: boolean;
		};

		request: Request;
	}

	interface BaseSysLog {
		/**
		 * 璁剧疆鏃ュ織淇濆瓨鏃堕棿
		 */
		setKeep(data?: any): Promise<any>;

		/**
		 * 鑾峰緱鏃ュ織鎶ラ敊鏃堕棿
		 */
		getKeep(data?: any): Promise<any>;

		/**
		 * 娓呯悊鏃ュ織
		 */
		clear(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<BaseSysLogPageResponse>;

		/**
		 * 权限标识
		 */
		permission: { setKeep: string; getKeep: string; clear: string; page: string };

		/**
		 * 权限状态
		 */
		_permission: { setKeep: boolean; getKeep: boolean; clear: boolean; page: boolean };

		request: Request;
	}

	interface BaseOpen {
		/**
		 * 鐧诲綍
		 */
		login(data?: any): Promise<any>;

		/**
		 * 楠岃瘉鐮�
		 */
		captcha(data?: any): Promise<any>;

		/**
		 * 楠岃瘉鐮佺被鍨�
		 */
		captchaMode(data?: any): Promise<any>;

		/**
		 * 鑾峰緱缃戦〉鍐呭鐨勫弬鏁板��
		 */
		html(data?: any): Promise<any>;

		/**
		 * 鍒锋柊token
		 */
		refreshToken(data?: any): Promise<any>;

		/**
		 * 瀹炰綋淇℃伅涓庤矾寰�
		 */
		eps(data?: any): Promise<any>;

		/**
		 * check
		 */
		check(data?: any): Promise<any>;

		/**
		 * gen
		 */
		gen(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			login: string;
			captcha: string;
			captchaMode: string;
			html: string;
			refreshToken: string;
			eps: string;
			check: string;
			gen: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			login: boolean;
			captcha: boolean;
			captchaMode: boolean;
			html: boolean;
			refreshToken: boolean;
			eps: boolean;
			check: boolean;
			gen: boolean;
		};

		request: Request;
	}

	interface BaseComm {
		/**
		 * 鏂囦欢涓婁紶妯″紡
		 */
		uploadMode(data?: any): Promise<any>;

		/**
		 * 涓汉淇℃伅
		 */
		person(data?: any): Promise<any>;

		/**
		 * 淇敼涓汉淇℃伅
		 */
		personUpdate(data?: any): Promise<any>;

		/**
		 * 瀹炰綋淇℃伅涓庤矾寰�
		 */
		eps(data?: any): Promise<any>;

		/**
		 * 缂栫▼
		 */
		program(data?: any): Promise<any>;

		/**
		 * 鏂囦欢涓婁紶
		 */
		upload(data?: any): Promise<any>;

		/**
		 * 鏉冮檺涓庤彍鍗�
		 */
		permmenu(data?: any): Promise<any>;

		/**
		 * 閫�鍑�
		 */
		logout(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			uploadMode: string;
			person: string;
			personUpdate: string;
			eps: string;
			program: string;
			upload: string;
			permmenu: string;
			logout: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			uploadMode: boolean;
			person: boolean;
			personUpdate: boolean;
			eps: boolean;
			program: boolean;
			upload: boolean;
			permmenu: boolean;
			logout: boolean;
		};

		request: Request;
	}

	interface BaseCoding {
		/**
		 * 鍒涘缓浠ｇ爜
		 */
		createCode(data?: any): Promise<any>;

		/**
		 * 鑾峰彇妯″潡鐩綍缁撴瀯
		 */
		getModuleTree(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { createCode: string; getModuleTree: string };

		/**
		 * 权限状态
		 */
		_permission: { createCode: boolean; getModuleTree: boolean };

		request: Request;
	}

	interface TeachStudent {
		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<StudentEntity>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<TeachStudentPageResponse>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<StudentEntity[]>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			add: string;
			update: string;
			delete: string;
			page: string;
			list: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			add: boolean;
			update: boolean;
			delete: boolean;
			page: boolean;
			list: boolean;
		};

		request: Request;
	}

	interface TeachAttendance {
		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<AttendanceEntity[]>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<TeachAttendancePageResponse>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<AttendanceEntity>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			add: string;
			page: string;
			info: string;
			update: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			add: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
			delete: boolean;
		};

		request: Request;
	}

	interface TeachCourse {
		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<TeachCoursePageResponse>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<CourseEntity>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<CourseEntity[]>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			page: string;
			add: string;
			info: string;
			list: string;
			update: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			page: boolean;
			add: boolean;
			info: boolean;
			list: boolean;
			update: boolean;
		};

		request: Request;
	}

	interface TeachTeacher {
		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<TeacherEntity[]>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<TeachTeacherPageResponse>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<TeacherEntity>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			list: string;
			add: string;
			page: string;
			info: string;
			update: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			list: boolean;
			add: boolean;
			page: boolean;
			info: boolean;
			update: boolean;
		};

		request: Request;
	}

	interface TeachClazz {
		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<ClazzEntity[]>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<ClazzEntity>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<TeachClazzPageResponse>;

		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			info: string;
			update: string;
			add: string;
			delete: string;
			page: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			info: boolean;
			update: boolean;
			add: boolean;
			delete: boolean;
			page: boolean;
		};

		request: Request;
	}

	interface TeachScore {
		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<ScoreEntity>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<ScoreEntity[]>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<TeachScorePageResponse>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			list: string;
			update: string;
			add: string;
			page: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			list: boolean;
			update: boolean;
			add: boolean;
			page: boolean;
			delete: boolean;
		};

		request: Request;
	}

	interface SpaceInfo {
		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<SpaceInfoPageResponse>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<SpaceInfoEntity>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<SpaceInfoEntity[]>;

		/**
		 * 权限标识
		 */
		permission: {
			update: string;
			page: string;
			add: string;
			delete: string;
			info: string;
			list: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			update: boolean;
			page: boolean;
			add: boolean;
			delete: boolean;
			info: boolean;
			list: boolean;
		};

		request: Request;
	}

	interface SpaceType {
		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<SpaceTypeEntity[]>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<SpaceTypeEntity>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<SpaceTypePageResponse>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			info: string;
			add: string;
			update: string;
			page: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			info: boolean;
			add: boolean;
			update: boolean;
			page: boolean;
			delete: boolean;
		};

		request: Request;
	}

	interface UserInfo {
		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<UserInfoPageResponse>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<UserInfoEntity>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<UserInfoEntity[]>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			add: string;
			delete: string;
			page: string;
			info: string;
			list: string;
			update: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			delete: boolean;
			page: boolean;
			info: boolean;
			list: boolean;
			update: boolean;
		};

		request: Request;
	}

	interface DictInfo {
		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<DictInfoPageResponse>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<DictInfoEntity>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<DictInfoEntity[]>;

		/**
		 * 鑾峰緱瀛楀吀鏁版嵁
		 */
		data(data?: any): Promise<any>;

		/**
		 * 鑾峰緱瀛楀吀鏁版嵁
		 */
		types(data?: any): Promise<any>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			add: string;
			page: string;
			update: string;
			info: string;
			list: string;
			data: string;
			types: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			page: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			data: boolean;
			types: boolean;
			delete: boolean;
		};

		request: Request;
	}

	interface DictType {
		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<DictTypeEntity[]>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<DictTypeEntity>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<DictTypePageResponse>;

		/**
		 * 权限标识
		 */
		permission: {
			update: string;
			add: string;
			list: string;
			info: string;
			delete: string;
			page: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			update: boolean;
			add: boolean;
			list: boolean;
			info: boolean;
			delete: boolean;
			page: boolean;
		};

		request: Request;
	}

	interface PluginInfo {
		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鍗歌浇鎻掍欢
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 瀹夎鎻掍欢
		 */
		install(data?: any): Promise<any>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<PluginInfoEntity[]>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<PluginInfoPageResponse>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<PluginInfoEntity>;

		/**
		 * 权限标识
		 */
		permission: {
			add: string;
			update: string;
			delete: string;
			install: string;
			list: string;
			page: string;
			info: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			update: boolean;
			delete: boolean;
			install: boolean;
			list: boolean;
			page: boolean;
			info: boolean;
		};

		request: Request;
	}

	interface RecycleData {
		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<RecycleDataPageResponse>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鎭㈠鏁版嵁
		 */
		restore(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<RecycleDataEntity>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<RecycleDataEntity[]>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			add: string;
			update: string;
			restore: string;
			info: string;
			list: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			add: boolean;
			update: boolean;
			restore: boolean;
			info: boolean;
			list: boolean;
			delete: boolean;
		};

		request: Request;
	}

	interface TaskInfo {
		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 浠诲姟鏃ュ織
		 */
		log(data?: any): Promise<any>;

		/**
		 * 鍋滄浠诲姟
		 */
		stop(data?: any): Promise<any>;

		/**
		 * 寮�濮嬩换鍔�
		 */
		start(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<TaskInfoPageResponse>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 鎵ц涓�娆�
		 */
		once(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<TaskInfoEntity>;

		/**
		 * 权限标识
		 */
		permission: {
			add: string;
			update: string;
			log: string;
			stop: string;
			start: string;
			page: string;
			delete: string;
			once: string;
			info: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			update: boolean;
			log: boolean;
			stop: boolean;
			start: boolean;
			page: boolean;
			delete: boolean;
			once: boolean;
			info: boolean;
		};

		request: Request;
	}

	interface RequestOptions {
		url: string;
		method?: "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT";
		data?: any;
		params?: any;
		headers?: any;
		timeout?: number;
		[key: string]: any;
	}

	type Request = (options: RequestOptions) => Promise<any>;

	type Service = {
		request: Request;

		base: {
			sys: {
				param: BaseSysParam;
				menu: BaseSysMenu;
				user: BaseSysUser;
				role: BaseSysRole;
				department: BaseSysDepartment;
				log: BaseSysLog;
			};
			open: BaseOpen;
			comm: BaseComm;
			coding: BaseCoding;
		};
		teach: {
			student: TeachStudent;
			attendance: TeachAttendance;
			course: TeachCourse;
			teacher: TeachTeacher;
			clazz: TeachClazz;
			score: TeachScore;
		};
		space: { info: SpaceInfo; type: SpaceType };
		user: { info: UserInfo };
		dict: { info: DictInfo; type: DictType };
		plugin: { info: PluginInfo };
		recycle: { data: RecycleData };
		task: { info: TaskInfo };
	};
}
