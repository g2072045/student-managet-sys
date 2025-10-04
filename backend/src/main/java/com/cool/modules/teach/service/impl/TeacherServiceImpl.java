package com.cool.modules.teach.service.impl;

import cn.hutool.json.JSONObject;
import com.cool.core.base.BaseServiceImpl;
import com.cool.core.base.ModifyEnum;
import com.cool.modules.base.entity.sys.BaseSysDepartmentEntity;
import com.cool.modules.base.entity.sys.BaseSysUserEntity;
import com.cool.modules.base.service.sys.BaseSysDepartmentService;
import com.cool.modules.base.service.sys.BaseSysUserService;
import com.cool.modules.teach.entity.TeacherEntity;
import com.cool.modules.teach.mapper.TeacherMapper;
import com.cool.modules.teach.service.TeacherService;
import com.mybatisflex.core.paginate.Page;
import com.mybatisflex.core.query.QueryWrapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;

/**
 * 教师Service实现类
 */
@Service
@RequiredArgsConstructor
public class TeacherServiceImpl extends BaseServiceImpl<TeacherMapper, TeacherEntity> implements TeacherService {

    private final BaseSysUserService baseSysUserService;
    private final BaseSysDepartmentService baseSysDepartmentService;

    @Override
    public Object page(JSONObject requestParams, Page<TeacherEntity> page, QueryWrapper queryWrapper) {
        // 调用父类分页方法获取数据
        Page<TeacherEntity> result = (Page<TeacherEntity>) super.page(requestParams, page, queryWrapper);
        
        // 处理关联数据
        for (TeacherEntity teacher : result.getRecords()) {
            // 设置院系名称
            if (teacher.getDepartmentId() != null) {
                BaseSysDepartmentEntity department = baseSysDepartmentService.getById(teacher.getDepartmentId());
                if (department != null) {
                    teacher.setDepartmentName(department.getName());
                }
            }
        }
        
        return result;
    }

    @Override
    public Object list(JSONObject requestParams, QueryWrapper queryWrapper) {
        // 调用父类列表方法获取数据
        java.util.List<TeacherEntity> result = (java.util.List<TeacherEntity>) super.list(requestParams, queryWrapper);
        
        // 处理关联数据
        for (TeacherEntity teacher : result) {
            // 设置院系名称
            if (teacher.getDepartmentId() != null) {
                BaseSysDepartmentEntity department = baseSysDepartmentService.getById(teacher.getDepartmentId());
                if (department != null) {
                    teacher.setDepartmentName(department.getName());
                }
            }
        }
        
        return result;
    }

    @Override
    public Object info(JSONObject requestParams, Long id) {
        // 调用父类详情方法获取数据
        TeacherEntity teacher = (TeacherEntity) super.info(requestParams, id);
        
        // 处理关联数据
        if (teacher != null) {
            // 设置院系名称
            if (teacher.getDepartmentId() != null) {
                BaseSysDepartmentEntity department = baseSysDepartmentService.getById(teacher.getDepartmentId());
                if (department != null) {
                    teacher.setDepartmentName(department.getName());
                }
            }
        }
        
        return teacher;
    }

    @Override
    public Object add(JSONObject requestParams, TeacherEntity entity) {
        // 创建关联用户
        BaseSysUserEntity userEntity = new BaseSysUserEntity();
        userEntity.setUsername(entity.getUsername());
        userEntity.setPassword(entity.getPassword());
        userEntity.setName(entity.getName());
        userEntity.setDepartmentId(entity.getDepartmentId());
        userEntity.setStatus(1); // 默认启用
        userEntity.setNickName(entity.getName());
        
        // 保存用户并获取ID
        Long userId = baseSysUserService.add(userEntity);
        
        // 设置教师关联的用户ID
        entity.setUserId(userId);
        
        // 关联教师角色（角色ID为9）
        requestParams.set("roleIdList", new Long[]{9L});
        
        return super.add(requestParams, entity);
    }

    @Override
    public boolean update(JSONObject requestParams, TeacherEntity entity) {
        // 更新教师信息时，同时更新关联用户信息
        if (entity.getUserId() != null) {
            BaseSysUserEntity userEntity = baseSysUserService.getById(entity.getUserId());
            if (userEntity != null) {
                userEntity.setUsername(entity.getUsername());
                userEntity.setName(entity.getName());
                userEntity.setDepartmentId(entity.getDepartmentId());
                
                // 如果密码不为空则更新密码
                if (entity.getPassword() != null && !entity.getPassword().isEmpty()) {
                    userEntity.setPassword(entity.getPassword());
                }
                
                baseSysUserService.update(userEntity);
            }
        }
        
        return super.update(requestParams, entity);
    }

    @Override
    public void modifyAfter(JSONObject requestParams, TeacherEntity teacherEntity, ModifyEnum type) {
        // 删除教师时，同时删除关联用户
        if (type == ModifyEnum.DELETE && teacherEntity.getUserId() != null) {
            baseSysUserService.delete(teacherEntity.getUserId());
        }
    }
}