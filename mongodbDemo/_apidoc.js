/*
 * This file contain old version documentation blocks.
 */
/**
 * @api {post} /user/reg 用户注册
 * @apiVersion 0.0.0
 * @apiName 注册
 * @apiGroup User
 *
 * @apiParam {String} us 用户名.
 * @apiParam {String} ps 用户密码.
 * @apiParam {String} code 邮箱验证码.
 *
 * @apiSuccess err:0 注册成功.
 * 
 * @apiError err:-1 缺少<code>参数</code>.
 * @apiError err:-2 注册失败.
 * @apiError err:-3 <code>邮箱验证码</code>错误.
 * @apiError err:-4 <code>邮箱验证码</code>已过期.
 * @apiError err:-5 <code>用户名</code>已存在.
 */

 /**
 * @api {post} /user/reg 用户注册
 * @apiVersion 0.1.0
 * @apiName 注册
 * @apiGroup User
 *
 * @apiParam {String} us 用户名.
 * @apiParam {String} ps1 用户密码.
 * @apiParam {String} code 邮箱验证码.
 *
 * @apiSuccess err:0 注册成功.
 * 
 * @apiError err:-1 缺少<code>参数</code>.
 * @apiError err:-2 注册失败.
 * @apiError err:-3 <code>邮箱验证码</code>错误.
 * @apiError err:-4 <code>邮箱验证码</code>已过期.
 * @apiError err:-5 <code>用户名</code>已存在.
 */