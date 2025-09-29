declare namespace Eps {
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

	interface SpaceTypePageResponse {
		pagination: PagePagination;
		list: SpaceTypeEntity[];
	}

	interface SpaceInfoPageResponse {
		pagination: PagePagination;
		list: SpaceInfoEntity[];
	}

	interface BaseSysLogPageResponse {
		pagination: PagePagination;
		list: BaseSysLogEntity[];
	}

	interface BaseSysMenuPageResponse {
		pagination: PagePagination;
		list: BaseSysMenuEntity[];
	}

	interface BaseSysParamPageResponse {
		pagination: PagePagination;
		list: BaseSysParamEntity[];
	}

	interface BaseSysRolePageResponse {
		pagination: PagePagination;
		list: BaseSysRoleEntity[];
	}

	interface BaseSysUserPageResponse {
		pagination: PagePagination;
		list: BaseSysUserEntity[];
	}

	interface DictTypePageResponse {
		pagination: PagePagination;
		list: DictTypeEntity[];
	}

	interface DictInfoPageResponse {
		pagination: PagePagination;
		list: DictInfoEntity[];
	}

	interface RecycleDataPageResponse {
		pagination: PagePagination;
		list: RecycleDataEntity[];
	}

	interface PluginInfoPageResponse {
		pagination: PagePagination;
		list: PluginInfoEntity[];
	}

	interface TaskInfoPageResponse {
		pagination: PagePagination;
		list: TaskInfoEntity[];
	}

	interface UserInfoPageResponse {
		pagination: PagePagination;
		list: UserInfoEntity[];
	}

	interface SpaceType {
		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<SpaceTypeEntity>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<SpaceTypeEntity[]>;

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
		page(data?: any): Promise<SpaceTypePageResponse>;

		/**
		 * 权限标识
		 */
		permission: {
			update: string;
			info: string;
			list: string;
			add: string;
			delete: string;
			page: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			update: boolean;
			info: boolean;
			list: boolean;
			add: boolean;
			delete: boolean;
			page: boolean;
		};

		request: Request;
	}

	interface SpaceInfo {
		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<SpaceInfoPageResponse>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<SpaceInfoEntity>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<SpaceInfoEntity[]>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			page: string;
			add: string;
			info: string;
			update: string;
			list: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			page: boolean;
			add: boolean;
			info: boolean;
			update: boolean;
			list: boolean;
		};

		request: Request;
	}

	interface BaseComm {
		/**
		 * 瀹炰綋淇℃伅涓庤矾寰�
		 */
		eps(data?: any): Promise<any>;

		/**
		 * 淇敼涓汉淇℃伅
		 */
		personUpdate(data?: any): Promise<any>;

		/**
		 * 鏂囦欢涓婁紶
		 */
		upload(data?: any): Promise<any>;

		/**
		 * 涓汉淇℃伅
		 */
		person(data?: any): Promise<any>;

		/**
		 * 鏂囦欢涓婁紶妯″紡
		 */
		uploadMode(data?: any): Promise<any>;

		/**
		 * 缂栫▼
		 */
		program(data?: any): Promise<any>;

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
			eps: string;
			personUpdate: string;
			upload: string;
			person: string;
			uploadMode: string;
			program: string;
			permmenu: string;
			logout: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			eps: boolean;
			personUpdate: boolean;
			upload: boolean;
			person: boolean;
			uploadMode: boolean;
			program: boolean;
			permmenu: boolean;
			logout: boolean;
		};

		request: Request;
	}

	interface BaseSysLog {
		/**
		 * 璁剧疆鏃ュ織淇濆瓨鏃堕棿
		 */
		setKeep(data?: any): Promise<any>;

		/**
		 * 娓呯悊鏃ュ織
		 */
		clear(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<BaseSysLogPageResponse>;

		/**
		 * 鑾峰緱鏃ュ織鎶ラ敊鏃堕棿
		 */
		getKeep(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { setKeep: string; clear: string; page: string; getKeep: string };

		/**
		 * 权限状态
		 */
		_permission: { setKeep: boolean; clear: boolean; page: boolean; getKeep: boolean };

		request: Request;
	}

	interface BaseSysMenu {
		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<BaseSysMenuPageResponse>;

		/**
		 * 鍒涘缓浠ｇ爜
		 */
		create(data?: any): Promise<any>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<BaseSysMenuEntity>;

		/**
		 * 瀵煎叆
		 */
		import(data?: any): Promise<any>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<BaseSysMenuEntity[]>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 瀵煎嚭
		 */
		export(data?: any): Promise<any>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			create: string;
			delete: string;
			info: string;
			import: string;
			list: string;
			add: string;
			export: string;
			update: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			create: boolean;
			delete: boolean;
			info: boolean;
			import: boolean;
			list: boolean;
			add: boolean;
			export: boolean;
			update: boolean;
		};

		request: Request;
	}

	interface BaseSysParam {
		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<BaseSysParamEntity>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鏍规嵁閿繑鍥炵綉椤电殑鍙傛暟鍊�
		 */
		html(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<BaseSysParamPageResponse>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			add: string;
			info: string;
			update: string;
			html: string;
			page: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			info: boolean;
			update: boolean;
			html: boolean;
			page: boolean;
			delete: boolean;
		};

		request: Request;
	}

	interface BaseSysDepartment {
		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鎺掑簭
		 */
		order(data?: any): Promise<any>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<BaseSysDepartmentEntity[]>;

		/**
		 * 权限标识
		 */
		permission: { delete: string; add: string; update: string; order: string; list: string };

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			add: boolean;
			update: boolean;
			order: boolean;
			list: boolean;
		};

		request: Request;
	}

	interface BaseSysRole {
		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<BaseSysRoleEntity>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<BaseSysRoleEntity[]>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<BaseSysRolePageResponse>;

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
			list: string;
			update: string;
			page: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			add: boolean;
			list: boolean;
			update: boolean;
			page: boolean;
			delete: boolean;
		};

		request: Request;
	}

	interface BaseSysUser {
		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<BaseSysUserPageResponse>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 绉诲姩閮ㄩ棬
		 */
		move(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<BaseSysUserEntity>;

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
			page: string;
			update: string;
			move: string;
			info: string;
			delete: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			update: boolean;
			move: boolean;
			info: boolean;
			delete: boolean;
			add: boolean;
		};

		request: Request;
	}

	interface BaseOpen {
		/**
		 * check
		 */
		check(data?: any): Promise<any>;

		/**
		 * 楠岃瘉鐮�
		 */
		captcha(data?: any): Promise<any>;

		/**
		 * 鍒锋柊token
		 */
		refreshToken(data?: any): Promise<any>;

		/**
		 * 瀹炰綋淇℃伅涓庤矾寰�
		 */
		eps(data?: any): Promise<any>;

		/**
		 * 楠岃瘉鐮佺被鍨�
		 */
		captchaMode(data?: any): Promise<any>;

		/**
		 * 鑾峰緱缃戦〉鍐呭鐨勫弬鏁板��
		 */
		html(data?: any): Promise<any>;

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
			check: string;
			captcha: string;
			refreshToken: string;
			eps: string;
			captchaMode: string;
			html: string;
			login: string;
			gen: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			check: boolean;
			captcha: boolean;
			refreshToken: boolean;
			eps: boolean;
			captchaMode: boolean;
			html: boolean;
			login: boolean;
			gen: boolean;
		};

		request: Request;
	}

	interface BaseCoding {
		/**
		 * 鑾峰彇妯″潡鐩綍缁撴瀯
		 */
		getModuleTree(data?: any): Promise<any>;

		/**
		 * 鍒涘缓浠ｇ爜
		 */
		createCode(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { getModuleTree: string; createCode: string };

		/**
		 * 权限状态
		 */
		_permission: { getModuleTree: boolean; createCode: boolean };

		request: Request;
	}

	interface DictType {
		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<DictTypeEntity[]>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<DictTypePageResponse>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<DictTypeEntity>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			delete: string;
			page: string;
			add: string;
			info: string;
			update: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			delete: boolean;
			page: boolean;
			add: boolean;
			info: boolean;
			update: boolean;
		};

		request: Request;
	}

	interface DictInfo {
		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<DictInfoPageResponse>;

		/**
		 * 鑾峰緱瀛楀吀鏁版嵁
		 */
		data(data?: any): Promise<any>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<DictInfoEntity>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<DictInfoEntity[]>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 鑾峰緱瀛楀吀鏁版嵁
		 */
		types(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			data: string;
			delete: string;
			info: string;
			list: string;
			update: string;
			add: string;
			types: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			data: boolean;
			delete: boolean;
			info: boolean;
			list: boolean;
			update: boolean;
			add: boolean;
			types: boolean;
		};

		request: Request;
	}

	interface RecycleData {
		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<RecycleDataPageResponse>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

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
		permission: {
			page: string;
			delete: string;
			restore: string;
			info: string;
			list: string;
			add: string;
			update: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			delete: boolean;
			restore: boolean;
			info: boolean;
			list: boolean;
			add: boolean;
			update: boolean;
		};

		request: Request;
	}

	interface PluginInfo {
		/**
		 * 瀹夎鎻掍欢
		 */
		install(data?: any): Promise<any>;

		/**
		 * 鍗歌浇鎻掍欢
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<PluginInfoEntity>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<PluginInfoEntity[]>;

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
		page(data?: any): Promise<PluginInfoPageResponse>;

		/**
		 * 权限标识
		 */
		permission: {
			install: string;
			delete: string;
			info: string;
			list: string;
			add: string;
			update: string;
			page: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			install: boolean;
			delete: boolean;
			info: boolean;
			list: boolean;
			add: boolean;
			update: boolean;
			page: boolean;
		};

		request: Request;
	}

	interface TaskInfo {
		/**
		 * 鎵ц涓�娆�
		 */
		once(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<TaskInfoPageResponse>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鍋滄浠诲姟
		 */
		stop(data?: any): Promise<any>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<TaskInfoEntity>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 寮�濮嬩换鍔�
		 */
		start(data?: any): Promise<any>;

		/**
		 * 浠诲姟鏃ュ織
		 */
		log(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			once: string;
			page: string;
			update: string;
			stop: string;
			add: string;
			info: string;
			delete: string;
			start: string;
			log: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			once: boolean;
			page: boolean;
			update: boolean;
			stop: boolean;
			add: boolean;
			info: boolean;
			delete: boolean;
			start: boolean;
			log: boolean;
		};

		request: Request;
	}

	interface UserInfo {
		/**
		 * 淇℃伅
		 */
		info(data?: any): Promise<UserInfoEntity>;

		/**
		 * 淇敼
		 */
		update(data?: any): Promise<any>;

		/**
		 * 鏌ヨ
		 */
		list(data?: any): Promise<UserInfoEntity[]>;

		/**
		 * 鍒犻櫎
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 鍒嗛〉
		 */
		page(data?: any): Promise<UserInfoPageResponse>;

		/**
		 * 鏂板
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			update: string;
			list: string;
			delete: string;
			page: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			update: boolean;
			list: boolean;
			delete: boolean;
			page: boolean;
			add: boolean;
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

		space: { type: SpaceType; info: SpaceInfo };
		base: {
			comm: BaseComm;
			sys: {
				log: BaseSysLog;
				menu: BaseSysMenu;
				param: BaseSysParam;
				department: BaseSysDepartment;
				role: BaseSysRole;
				user: BaseSysUser;
			};
			open: BaseOpen;
			coding: BaseCoding;
		};
		dict: { type: DictType; info: DictInfo };
		recycle: { data: RecycleData };
		plugin: { info: PluginInfo };
		task: { info: TaskInfo };
		user: { info: UserInfo };
	};
}
