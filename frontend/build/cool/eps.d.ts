declare namespace Eps {
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

	interface PluginInfoPageResponse {
		pagination: PagePagination;
		list: PluginInfoEntity[];
	}

	interface BaseSysLogPageResponse {
		pagination: PagePagination;
		list: BaseSysLogEntity[];
	}

	interface BaseSysUserPageResponse {
		pagination: PagePagination;
		list: BaseSysUserEntity[];
	}

	interface BaseSysMenuPageResponse {
		pagination: PagePagination;
		list: BaseSysMenuEntity[];
	}

	interface BaseSysRolePageResponse {
		pagination: PagePagination;
		list: BaseSysRoleEntity[];
	}

	interface BaseSysParamPageResponse {
		pagination: PagePagination;
		list: BaseSysParamEntity[];
	}

	interface RecycleDataPageResponse {
		pagination: PagePagination;
		list: RecycleDataEntity[];
	}

	interface TaskInfoPageResponse {
		pagination: PagePagination;
		list: TaskInfoEntity[];
	}

	interface SpaceTypePageResponse {
		pagination: PagePagination;
		list: SpaceTypeEntity[];
	}

	interface SpaceInfoPageResponse {
		pagination: PagePagination;
		list: SpaceInfoEntity[];
	}

	interface DictInfoPageResponse {
		pagination: PagePagination;
		list: DictInfoEntity[];
	}

	interface DictTypePageResponse {
		pagination: PagePagination;
		list: DictTypeEntity[];
	}

	interface UserInfoPageResponse {
		pagination: PagePagination;
		list: UserInfoEntity[];
	}

	interface PluginInfo {
		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<PluginInfoEntity[]>;

		/**
		 * 鍗歌浇鎻掍欢
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 瀹夎鎻掍欢
		 */
		install(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<PluginInfoEntity>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<PluginInfoPageResponse>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			delete: string;
			install: string;
			info: string;
			page: string;
			update: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			delete: boolean;
			install: boolean;
			info: boolean;
			page: boolean;
			update: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface BaseSysLog {
		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<BaseSysLogPageResponse>;

		/**
		 * 娓呯悊鏃ュ織
		 */
		clear(data?: any): Promise<any>;

		/**
		 * 璁剧疆鏃ュ織淇濆瓨鏃堕棿
		 */
		setKeep(data?: any): Promise<any>;

		/**
		 * 鑾峰緱鏃ュ織鎶ラ敊鏃堕棿
		 */
		getKeep(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { page: string; clear: string; setKeep: string; getKeep: string };

		/**
		 * 权限状态
		 */
		_permission: { page: boolean; clear: boolean; setKeep: boolean; getKeep: boolean };

		request: Request;
	}

	interface BaseSysUser {
		/**
		 * 绉诲姩閮ㄩ棬
		 */
		move(data?: any): Promise<any>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<BaseSysUserPageResponse>;

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
		info(data?: any): Promise<BaseSysUserEntity>;

		/**
		 * 权限标识
		 */
		permission: {
			move: string;
			update: string;
			page: string;
			add: string;
			delete: string;
			info: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			move: boolean;
			update: boolean;
			page: boolean;
			add: boolean;
			delete: boolean;
			info: boolean;
		};

		request: Request;
	}

	interface BaseSysMenu {
		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<BaseSysMenuEntity>;

		/**
		 * 鍒涘缓浠ｇ爜
		 */
		create(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<BaseSysMenuPageResponse>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 瀵煎嚭
		 */
		export(data?: any): Promise<any>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<BaseSysMenuEntity[]>;

		/**
		 * 瀵煎叆
		 */
		import(data?: any): Promise<any>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			create: string;
			page: string;
			update: string;
			export: string;
			add: string;
			list: string;
			import: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			create: boolean;
			page: boolean;
			update: boolean;
			export: boolean;
			add: boolean;
			list: boolean;
			import: boolean;
			delete: boolean;
		};

		request: Request;
	}

	interface BaseSysRole {
		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<BaseSysRoleEntity[]>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<BaseSysRoleEntity>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<BaseSysRolePageResponse>;

		/**
		 * 权限标识
		 */
		permission: {
			update: string;
			list: string;
			add: string;
			info: string;
			delete: string;
			page: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			update: boolean;
			list: boolean;
			add: boolean;
			info: boolean;
			delete: boolean;
			page: boolean;
		};

		request: Request;
	}

	interface BaseSysDepartment {
		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<BaseSysDepartmentEntity[]>;

		/**
		 * 鎺掑簭
		 */
		order(data?: any): Promise<any>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { add: string; delete: string; list: string; order: string; update: string };

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			delete: boolean;
			list: boolean;
			order: boolean;
			update: boolean;
		};

		request: Request;
	}

	interface BaseSysParam {
		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<BaseSysParamEntity>;

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
		page(data?: any): Promise<BaseSysParamPageResponse>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鏍规嵁閿繑鍥炵綉椤电殑鍙傛暟鍊�
		 */
		html(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			add: string;
			delete: string;
			page: string;
			update: string;
			html: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			add: boolean;
			delete: boolean;
			page: boolean;
			update: boolean;
			html: boolean;
		};

		request: Request;
	}

	interface BaseComm {
		/**
		 * 鏂囦欢涓婁紶
		 */
		upload(data?: any): Promise<any>;

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
		 * 閫�鍑�
		 */
		logout(data?: any): Promise<any>;

		/**
		 * 鏉冮檺涓庤彍鍗�
		 */
		permmenu(data?: any): Promise<any>;

		/**
		 * 缂栫▼
		 */
		program(data?: any): Promise<any>;

		/**
		 * 鏂囦欢涓婁紶妯″紡
		 */
		uploadMode(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			upload: string;
			person: string;
			personUpdate: string;
			eps: string;
			logout: string;
			permmenu: string;
			program: string;
			uploadMode: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			upload: boolean;
			person: boolean;
			personUpdate: boolean;
			eps: boolean;
			logout: boolean;
			permmenu: boolean;
			program: boolean;
			uploadMode: boolean;
		};

		request: Request;
	}

	interface BaseOpen {
		/**
		 * 鑾峰緱缃戦〉鍐呭鐨勫弬鏁板��
		 */
		html(data?: any): Promise<any>;

		/**
		 * 楠岃瘉鐮佺被鍨�
		 */
		captchaMode(data?: any): Promise<any>;

		/**
		 * 瀹炰綋淇℃伅涓庤矾寰�
		 */
		eps(data?: any): Promise<any>;

		/**
		 * 鍒锋柊token
		 */
		refreshToken(data?: any): Promise<any>;

		/**
		 * check
		 */
		check(data?: any): Promise<any>;

		/**
		 * 楠岃瘉鐮�
		 */
		captcha(data?: any): Promise<any>;

		/**
		 * 鐧诲綍
		 */
		login(data?: any): Promise<any>;

		/**
		 * gen
		 */
		gen(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			html: string;
			captchaMode: string;
			eps: string;
			refreshToken: string;
			check: string;
			captcha: string;
			login: string;
			gen: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			html: boolean;
			captchaMode: boolean;
			eps: boolean;
			refreshToken: boolean;
			check: boolean;
			captcha: boolean;
			login: boolean;
			gen: boolean;
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

	interface RecycleData {
		/**
		 * 鎭㈠鏁版嵁
		 */
		restore(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<RecycleDataEntity>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<RecycleDataPageResponse>;

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
		list(data?: any): Promise<RecycleDataEntity[]>;

		/**
		 * 权限标识
		 */
		permission: {
			restore: string;
			info: string;
			delete: string;
			page: string;
			update: string;
			add: string;
			list: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			restore: boolean;
			info: boolean;
			delete: boolean;
			page: boolean;
			update: boolean;
			add: boolean;
			list: boolean;
		};

		request: Request;
	}

	interface TaskInfo {
		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<TaskInfoEntity>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鍋滄浠诲姟
		 */
		stop(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<TaskInfoPageResponse>;

		/**
		 * 鎵ц涓�娆�
		 */
		once(data?: any): Promise<any>;

		/**
		 * 浠诲姟鏃ュ織
		 */
		log(data?: any): Promise<any>;

		/**
		 * 寮�濮嬩换鍔�
		 */
		start(data?: any): Promise<any>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			add: string;
			update: string;
			stop: string;
			page: string;
			once: string;
			log: string;
			start: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			add: boolean;
			update: boolean;
			stop: boolean;
			page: boolean;
			once: boolean;
			log: boolean;
			start: boolean;
			delete: boolean;
		};

		request: Request;
	}

	interface SpaceType {
		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<SpaceTypeEntity[]>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<SpaceTypeEntity>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<SpaceTypePageResponse>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			update: string;
			info: string;
			page: string;
			delete: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			update: boolean;
			info: boolean;
			page: boolean;
			delete: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface SpaceInfo {
		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<SpaceInfoPageResponse>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<SpaceInfoEntity[]>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<SpaceInfoEntity>;

		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			delete: string;
			list: string;
			update: string;
			add: string;
			info: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			delete: boolean;
			list: boolean;
			update: boolean;
			add: boolean;
			info: boolean;
		};

		request: Request;
	}

	interface DictInfo {
		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<DictInfoEntity>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 鑾峰緱瀛楀吀鏁版嵁
		 */
		data(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<DictInfoPageResponse>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鑾峰緱瀛楀吀鏁版嵁
		 */
		types(data?: any): Promise<any>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<DictInfoEntity[]>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			delete: string;
			data: string;
			page: string;
			add: string;
			update: string;
			types: string;
			list: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			delete: boolean;
			data: boolean;
			page: boolean;
			add: boolean;
			update: boolean;
			types: boolean;
			list: boolean;
		};

		request: Request;
	}

	interface DictType {
		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<DictTypeEntity[]>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<DictTypeEntity>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<DictTypePageResponse>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			update: string;
			add: string;
			info: string;
			page: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			update: boolean;
			add: boolean;
			info: boolean;
			page: boolean;
			delete: boolean;
		};

		request: Request;
	}

	interface UserInfo {
		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<UserInfoEntity[]>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<UserInfoEntity>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<UserInfoPageResponse>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			update: string;
			info: string;
			add: string;
			page: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			update: boolean;
			info: boolean;
			add: boolean;
			page: boolean;
			delete: boolean;
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

		plugin: { info: PluginInfo };
		base: {
			sys: {
				log: BaseSysLog;
				user: BaseSysUser;
				menu: BaseSysMenu;
				role: BaseSysRole;
				department: BaseSysDepartment;
				param: BaseSysParam;
			};
			comm: BaseComm;
			open: BaseOpen;
			coding: BaseCoding;
		};
		recycle: { data: RecycleData };
		task: { info: TaskInfo };
		space: { type: SpaceType; info: SpaceInfo };
		dict: { info: DictInfo; type: DictType };
		user: { info: UserInfo };
	};
}
