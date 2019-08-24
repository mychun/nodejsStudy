define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "E__chun_code_nodejsStudy_mongodbDemo_apidoc_main_js",
    "groupTitle": "E__chun_code_nodejsStudy_mongodbDemo_apidoc_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/user/reg",
    "title": "用户注册",
    "version": "0.2.0",
    "name": "__",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us1",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps1",
            "description": "<p>用户密码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>邮箱验证码.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "err:0",
            "description": "<p>注册成功.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err:-1",
            "description": "<p>缺少<code>参数</code>.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err:-2",
            "description": "<p>注册失败.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err:-3",
            "description": "<p><code>邮箱验证码</code>错误.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err:-4",
            "description": "<p><code>邮箱验证码</code>已过期.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err:-5",
            "description": "<p><code>用户名</code>已存在.</p>"
          }
        ]
      }
    },
    "filename": "./router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/reg",
    "title": "用户注册",
    "version": "0.1.0",
    "name": "__",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps1",
            "description": "<p>用户密码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>邮箱验证码.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "err:0",
            "description": "<p>注册成功.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err:-1",
            "description": "<p>缺少<code>参数</code>.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err:-2",
            "description": "<p>注册失败.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err:-3",
            "description": "<p><code>邮箱验证码</code>错误.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err:-4",
            "description": "<p><code>邮箱验证码</code>已过期.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err:-5",
            "description": "<p><code>用户名</code>已存在.</p>"
          }
        ]
      }
    },
    "filename": "./_apidoc.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/reg",
    "title": "用户注册",
    "version": "0.0.0",
    "name": "__",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>用户密码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>邮箱验证码.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "err:0",
            "description": "<p>注册成功.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err:-1",
            "description": "<p>缺少<code>参数</code>.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err:-2",
            "description": "<p>注册失败.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err:-3",
            "description": "<p><code>邮箱验证码</code>错误.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err:-4",
            "description": "<p><code>邮箱验证码</code>已过期.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err:-5",
            "description": "<p><code>用户名</code>已存在.</p>"
          }
        ]
      }
    },
    "filename": "./_apidoc.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/getMailCode",
    "title": "获取邮箱验证码",
    "version": "0.0.0",
    "name": "_______",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>邮箱.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "err:0",
            "description": "<p>发送成功.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err:-1",
            "description": "<p>缺少邮箱<code>参数</code>.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err:-2",
            "description": "<p>发送失败.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err:-3",
            "description": "<p>m分钟内发送超过n次.</p>"
          }
        ]
      }
    },
    "filename": "./router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "用户登录",
    "version": "0.0.0",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>用户密码.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "err:0",
            "description": "<p>登录成功.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err:-1",
            "description": "<p>缺少<code>参数</code>.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err:-2",
            "description": "<p>登录出错.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "err:-3",
            "description": "<p><code>帐号或密码</code>不正确.</p>"
          }
        ]
      }
    },
    "filename": "./router/userRouter.js",
    "groupTitle": "User"
  }
] });
