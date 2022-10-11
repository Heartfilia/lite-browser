(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about"], {
    "00bb": function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("38ba"))
        }
        )(0, (function(t) {
            return t.mode.CFB = function() {
                var e = t.lib.BlockCipherMode.extend();
                function n(t, e, n, r) {
                    var i, o = this._iv;
                    o ? (i = o.slice(0),
                    this._iv = void 0) : i = this._prevBlock,
                    r.encryptBlock(i, 0);
                    for (var a = 0; a < n; a++)
                        t[e + a] ^= i[a]
                }
                return e.Encryptor = e.extend({
                    processBlock: function(t, e) {
                        var r = this._cipher
                          , i = r.blockSize;
                        n.call(this, t, e, i, r),
                        this._prevBlock = t.slice(e, e + i)
                    }
                }),
                e.Decryptor = e.extend({
                    processBlock: function(t, e) {
                        var r = this._cipher
                          , i = r.blockSize
                          , o = t.slice(e, e + i);
                        n.call(this, t, e, i, r),
                        this._prevBlock = o
                    }
                }),
                e
            }(),
            t.mode.CFB
        }
        ))
    },
    "093f": function(t, e, n) {
        "use strict";
        n("7559")
    },
    "09c0": function(t, e, n) {},
    "09ea": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("CodeContent", {
                attrs: {
                    tip: t.tip,
                    formatType: t.formatType,
                    outputTip: t.outputTip
                }
            })], 1)
        }
          , i = []
          , o = n("d4ec")
          , a = n("262e")
          , s = n("2caf")
          , l = n("9ab4")
          , c = n("82cd")
          , u = n("1b40")
          , h = function(t) {
            Object(a["a"])(n, t);
            var e = Object(s["a"])(n);
            function n() {
                var t;
                return Object(o["a"])(this, n),
                t = e.apply(this, arguments),
                t.formatType = "curl_to_request",
                t.tip = "输入curl，如\ncurl 'https://www.baidu.com/s?wd=feapder' \\\n  -H 'Accept-Language: zh-CN,zh;q=0.9,en;q=0.8' \\\n  -H 'Cookie: PSTM=1629808491; ' \\\n  --compressed\n  ",
                t.outputTip = 'import requests\n\n\nheaders = {\n    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8"\n}\ncookies = {\n    "PSTM": "1629808491"\n}\nparams = {\n    "wd": "feapder"\n}\nresponse = requests.get(\'https://www.baidu.com/s\', headers=headers, cookies=cookies, params=params)\n\nprint(response.text)\nprint(response)',
                t
            }
            return n
        }(u["c"]);
        h = Object(l["a"])([Object(u["a"])({
            components: {
                CodeContent: c["a"]
            }
        })], h);
        var f = h
          , d = f
          , p = n("2877")
          , g = Object(p["a"])(d, r, i, !1, null, "2e56cf12", null);
        e["default"] = g.exports
    },
    "0c24": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = function() {
        }
          , i = []
          , o = n("1da1")
          , a = n("d4ec")
          , s = n("bee2")
          , l = n("262e")
          , c = n("2caf")
          , u = (n("4de4"),
        n("96cf"),
        n("9ab4"))
          , h = n("1b40")
          , f = n("b32d")
          , d = function(t) {
            return Object(f["a"])({
                url: "/article/add_task",
                method: "post",
                data: t
            })
        }
          , p = function(t) {
            return Object(f["a"])({
                url: "/article/get_task",
                method: "get",
                data: t
            })
        }
          , v = function(t) {
            return Object(f["a"])({
                url: "/article/get_mine_article",
                method: "get",
                data: t
            })
        }
          , m = function(t) {
            return Object(f["a"])({
                url: "/article/get_collected_article",
                method: "get",
                params: t
            })
        }
          , y = function(t) {
            return Object(f["a"])({
                url: "/article/download",
                method: "post",
                data: t
            })
        }
          , b = function(t) {
            return Object(f["a"])({
                url: "/article/read",
                method: "post",
                data: t
            })
        }
          , w = function(t) {
            return Object(f["a"])({
                url: "/article/like",
                method: "post",
                data: t
            })
        }
          , x = function(t) {
            return Object(f["a"])({
                url: "/article/collection",
                method: "post",
                data: t
            })
        }
          , _ = function(t) {
            return Object(f["a"])({
                url: "/article/unlike",
                method: "post",
                data: t
            })
        }
          , k = function(t) {
            return Object(f["a"])({
                url: "/article/delete",
                method: "post",
                data: t
            })
        }
          , C = n("5c96")
          , S = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return true
        }
          , T = []
          , O = (n("498a"),
        n("99af"),
        function(t) {
            return Object(f["a"])({
                url: "/user/create",
                method: "post",
                data: t
            })
        }
        )
          , A = function(t) {
            return Object(f["a"])({
                url: "/user/update",
                method: "post",
                data: t
            })
        }
          , L = function(t) {
            return Object(f["a"])({
                url: "/user/login",
                method: "post",
                data: t
            })
        }
          , M = function(t) {
            return Object(f["a"])({
                url: "/user/send_code",
                method: "post",
                data: t,
                timeout: 3e4
            })
        }
          , E = n("b383")
          , D = n.n(E)
          , N = function(t) {
            Object(l["a"])(n, t);
            var e = Object(c["a"])(n);
            function n() {
                var t;
                return Object(a["a"])(this, n),
                t = e.apply(this, arguments),
                t.loginVisible = t.doLogin,
                t.forgetPasswordVisible = !1,
                t.registerVisible = !1,
                t.isLogin = !1,
                t.username = "",
                t.password = "",
                t.password2 = "",
                t.email = "",
                t.verifyCode = null,
                t.errorTip = "",
                t.role = 2,
                t
            }
            return Object(s["a"])(n, [{
                key: "isEmpty",
                value: function(t) {
                    return null == t || void 0 == t || 0 == t.length
                }
            }, {
                key: "verifyPassword",
                value: function(t) {
                    return !this.isEmpty(t) && !!/^\S{6,18}$/.test(t)
                }
            }, {
                key: "verifyEmail",
                value: function(t) {
                    return !!/(qq.com|163.com|126.com|gmail.com|yeah.net|foxmail.com|outlook.com|aliyun.com)$/i.test(t)
                }
            }, {
                key: "verify",
                value: function(t) {
                    return this.username = this.username.trim(),
                    this.password = this.password.trim(),
                    this.password2 = this.password2.trim(),
                    this.isEmpty(this.email) ? (this.errorTip = "邮箱不能为空",
                    !1) : this.verifyEmail(this.email) ? this.password !== this.password2 ? (this.errorTip = "两次密码不匹配",
                    !1) : this.verifyPassword(this.password) ? !(!t && null === this.verifyCode) || (this.errorTip = "验证码不能为空",
                    !1) : (this.errorTip = "密码长度6~18位",
                    !1) : (this.errorTip = "邮箱仅支持QQ、163、126、gmail、yeah.net、foxmail、outlook、aliyun",
                    !1)
                }
            }, {
                key: "showLogin",
                value: function() {
                    this.loginVisible = !0,
                    this.forgetPasswordVisible = !1,
                    this.registerVisible = !1
                }
            }, {
                key: "login",
                value: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                        var e, n, r;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.username = this.username.trim(),
                                    this.password = this.password.trim(),
                                    !this.isEmpty(this.username) && !this.isEmpty(this.username)) {
                                        t.next = 5;
                                        break
                                    }
                                    return this.errorTip = "用户名与密码不能为空",
                                    t.abrupt("return");
                                case 5:
                                    return t.next = 7,
                                    L(D.a.stringify({
                                        username: this.username,
                                        password: this.password
                                    }));
                                case 7:
                                    e = t.sent,
                                    n = e.data,
                                    200 !== n.code ? (this.errorTip = n.msg,
                                    this.$emit("loginCallback", !1)) : (r = "".concat(n.token_type, " ").concat(n.access_token),
                                    localStorage.setItem("token", r),
                                    this.role = n.role,
                                    localStorage.setItem("role", "" + this.role),
                                    this.loginVisible = !1,
                                    this.isLogin = !0,
                                    this.$emit("loginCallback", !0),
                                    Object(C["Notification"])({
                                        title: "成功",
                                        message: "登录成功",
                                        type: "success",
                                        duration: 1500
                                    }));
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "showForgetPassword",
                value: function() {
                    this.forgetPasswordVisible = !0,
                    this.loginVisible = !1,
                    this.registerVisible = !1,
                    this.password = "",
                    this.password2 = "",
                    this.errorTip = "",
                    this.verifyCode = null
                }
            }, {
                key: "forgetPassword",
                value: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                        var e, n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.verify(!1)) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return t.next = 4,
                                    A({
                                        password: this.password,
                                        email: this.email,
                                        verify_code: this.verifyCode
                                    });
                                case 4:
                                    e = t.sent,
                                    n = e.data,
                                    this.errorTip = n.msg,
                                    200 === n.code && this.showLogin();
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "showRegister",
                value: function() {
                    this.registerVisible = !0,
                    this.forgetPasswordVisible = !1,
                    this.loginVisible = !1,
                    this.errorTip = "",
                    this.verifyCode = null
                }
            }, {
                key: "register",
                value: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                        var e, n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.verify(!1)) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return t.next = 4,
                                    O({
                                        username: this.username,
                                        password: this.password,
                                        email: this.email,
                                        verify_code: this.verifyCode
                                    });
                                case 4:
                                    e = t.sent,
                                    n = e.data,
                                    this.errorTip = n.msg,
                                    200 === n.code && this.showLogin();
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "sendVerifyCode",
                value: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                        var e, n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.verify(!0)) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return this.errorTip = "发送验证码中...",
                                    t.next = 5,
                                    M(D.a.stringify({
                                        receiver: this.email
                                    }));
                                case 5:
                                    e = t.sent,
                                    n = e.data,
                                    this.errorTip = n.msg;
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "loginLayer",
                value: function(t, e) {
                    this.loginVisible = t
                }
            }, {
                key: "close",
                value: function() {
                    this.$emit("closeCallback", !0)
                }
            }]),
            n
        }(h["c"]);
        Object(u["a"])([Object(h["b"])({
            default: !1
        })], N.prototype, "doLogin", void 0),
        Object(u["a"])([Object(h["d"])("doLogin")], N.prototype, "loginLayer", null),
        N = Object(u["a"])([h["a"]], N);
        var R = N
          , j = R
          , H = (n("3ec6"),
        n("2877"))
          , B = Object(H["a"])(j, S, T, !1, null, "0e47eda4", null)
          , I = B.exports
          , P = function(t) {
            Object(l["a"])(n, t);
            var e = Object(c["a"])(n);
            function n() {
                var t;
                return Object(a["a"])(this, n),
                t = e.apply(this, arguments),
                t.drawer = !1,
                t.inputUrl = "",
                t.loginVisible = !1,
                t.isLogin = !1,
                t.role = 2,
                t.tab = "推荐",
                t.classifyId = 0,
                t.articleTask = [],
                t.articles = [],
                t
            }
            return Object(s["a"])(n, [{
                key: "created",
                value: function() {
                    var t = localStorage.getItem("role");
                    t && (this.role = parseInt(t)),
                    localStorage.getItem("token") && (this.isLogin = !0)
                }
            }, {
                key: "showSubmitLayer",
                value: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.isLogin) {
                                        t.next = 3;
                                        break
                                    }
                                    return this.loginVisible = !0,
                                    t.abrupt("return");
                                case 3:
                                    return this.drawer = !0,
                                    t.next = 6,
                                    this.getTask();
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "handleClose",
                value: function(t) {
                    t(),
                    this.articleTask = []
                }
            }, {
                key: "addTask",
                value: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                        var e, n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!(this.inputUrl.length > 0 && /^https?/.test(this.inputUrl))) {
                                        t.next = 15;
                                        break
                                    }
                                    return t.next = 3,
                                    d(this.inputUrl);
                                case 3:
                                    if (e = t.sent,
                                    n = e.data,
                                    this.inputUrl = "",
                                    1 != n) {
                                        t.next = 12;
                                        break
                                    }
                                    return Object(C["Notification"])({
                                        title: "成功",
                                        type: "success",
                                        message: "提交成功，收录中",
                                        duration: 3e3
                                    }),
                                    t.next = 10,
                                    this.getTask();
                                case 10:
                                    t.next = 13;
                                    break;
                                case 12:
                                    0 == n ? Object(C["Notification"])({
                                        title: "重复",
                                        type: "info",
                                        message: "已存在，无需再次提交",
                                        duration: 3e3
                                    }) : Object(C["Notification"])({
                                        title: "失败",
                                        type: "error",
                                        message: "收录失败",
                                        duration: 3e3
                                    });
                                case 13:
                                    t.next = 16;
                                    break;
                                case 15:
                                    Object(C["Notification"])({
                                        title: "失败",
                                        type: "error",
                                        message: "文章地址不合法",
                                        duration: 3e3
                                    });
                                case 16:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "getTask",
                value: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                        var e, n;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    p({});
                                case 2:
                                    e = t.sent,
                                    n = e.data,
                                    this.articleTask = n;
                                case 5:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "getArticle",
                value: function() {}()
            }, {
                key: "mine",
                value: function() {}()
            }, {
                key: "collection",
                value: function() {}()
            }, {
                key: "download",
                value: function() {}()
            }, {
                key: "deleteArticle",
                value: function() {}()
            }, {
                key: "dealArticleList",
                value: function(t) {}
            }, {
                key: "updateNum",
                value: function() {}()
            }, {
                key: "login",
                value: function() {}
            }, {
                key: "loginCallback",
                value: function(t) {}
            }, {
                key: "closeCallback",
                value: function() {}
            }]),
            n
        }(h["c"]);
        P = Object(u["a"])([Object(h["a"])({
            components: {
                Login: I
            }
        })], P);
        var F = P
          , z = F
          , W = (n("093f"),
        Object(H["a"])(z, r, i, !1, null, "a3beec62", null));
        e["default"] = W.exports
    },
    "0d16": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("CodeContent", {
                attrs: {
                    tip: t.tip,
                    formatType: t.formatType,
                    outputTip: t.outputTip
                }
            })], 1)
        }
          , i = []
          , o = n("d4ec")
          , a = n("262e")
          , s = n("2caf")
          , l = n("9ab4")
          , c = n("82cd")
          , u = n("1b40")
          , h = function(t) {
            Object(a["a"])(n, t);
            var e = Object(s["a"])(n);
            function n() {
            }
            return n
        }(u["c"]);
        h = Object(l["a"])([Object(u["a"])({
            components: {
                CodeContent: c["a"]
            }
        })], h);
        var f = h
          , d = f
          , p = n("2877")
          , g = Object(p["a"])(d, r, i, !1, null, "4548d444", null);
        e["default"] = g.exports
    },
    1: function(t, e) {},
    "10b7": function(t, e, n) {
        (function(e, r) {
            t.exports = r(n("21bf"))
        }
        )(0, (function(t) {
            /** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/
            return function(e) {
                var n = t
                  , r = n.lib
                  , i = r.WordArray
                  , o = r.Hasher
                  , a = n.algo
                  , s = i.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13])
                  , l = i.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11])
                  , c = i.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6])
                  , u = i.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11])
                  , h = i.create([0, 1518500249, 1859775393, 2400959708, 2840853838])
                  , f = i.create([1352829926, 1548603684, 1836072691, 2053994217, 0])
                  , d = a.RIPEMD160 = o.extend({
                    _doReset: function() {
                        this._hash = i.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                    },
                    _doProcessBlock: function(t, e) {
                        for (var n = 0; n < 16; n++) {
                            var r = e + n
                              , i = t[r];
                            t[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8)
                        }
                        var o, a, d, w, x, _, k, C, S, T, O, A = this._hash.words, L = h.words, M = f.words, E = s.words, D = l.words, N = c.words, R = u.words;
                        _ = o = A[0],
                        k = a = A[1],
                        C = d = A[2],
                        S = w = A[3],
                        T = x = A[4];
                        for (n = 0; n < 80; n += 1)
                            O = o + t[e + E[n]] | 0,
                            O += n < 16 ? p(a, d, w) + L[0] : n < 32 ? g(a, d, w) + L[1] : n < 48 ? v(a, d, w) + L[2] : n < 64 ? m(a, d, w) + L[3] : y(a, d, w) + L[4],
                            O |= 0,
                            O = b(O, N[n]),
                            O = O + x | 0,
                            o = x,
                            x = w,
                            w = b(d, 10),
                            d = a,
                            a = O,
                            O = _ + t[e + D[n]] | 0,
                            O += n < 16 ? y(k, C, S) + M[0] : n < 32 ? m(k, C, S) + M[1] : n < 48 ? v(k, C, S) + M[2] : n < 64 ? g(k, C, S) + M[3] : p(k, C, S) + M[4],
                            O |= 0,
                            O = b(O, R[n]),
                            O = O + T | 0,
                            _ = T,
                            T = S,
                            S = b(C, 10),
                            C = k,
                            k = O;
                        O = A[1] + d + S | 0,
                        A[1] = A[2] + w + T | 0,
                        A[2] = A[3] + x + _ | 0,
                        A[3] = A[4] + o + k | 0,
                        A[4] = A[0] + a + C | 0,
                        A[0] = O
                    },
                    _doFinalize: function() {
                        var t = this._data
                          , e = t.words
                          , n = 8 * this._nDataBytes
                          , r = 8 * t.sigBytes;
                        e[r >>> 5] |= 128 << 24 - r % 32,
                        e[14 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8),
                        t.sigBytes = 4 * (e.length + 1),
                        this._process();
                        for (var i = this._hash, o = i.words, a = 0; a < 5; a++) {
                            var s = o[a];
                            o[a] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                        }
                        return i
                    },
                    clone: function() {
                        var t = o.clone.call(this);
                        return t._hash = this._hash.clone(),
                        t
                    }
                });
                function p(t, e, n) {
                    return t ^ e ^ n
                }
                function g(t, e, n) {
                    return t & e | ~t & n
                }
                function v(t, e, n) {
                    return (t | ~e) ^ n
                }
                function m(t, e, n) {
                    return t & n | e & ~n
                }
                function y(t, e, n) {
                    return t ^ (e | ~n)
                }
                function b(t, e) {
                    return t << e | t >>> 32 - e
                }
                n.RIPEMD160 = o._createHelper(d),
                n.HmacRIPEMD160 = o._createHmacHelper(d)
            }(Math),
            t.RIPEMD160
        }
        ))
    },
    1132: function(t, e, n) {
        (function(e, r) {
            t.exports = r(n("21bf"))
        }
        )(0, (function(t) {
            return function() {
                var e = t
                  , n = e.lib
                  , r = n.WordArray
                  , i = e.enc;
                i.Base64 = {
                    stringify: function(t) {
                        var e = t.words
                          , n = t.sigBytes
                          , r = this._map;
                        t.clamp();
                        for (var i = [], o = 0; o < n; o += 3)
                            for (var a = e[o >>> 2] >>> 24 - o % 4 * 8 & 255, s = e[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255, l = e[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, c = a << 16 | s << 8 | l, u = 0; u < 4 && o + .75 * u < n; u++)
                                i.push(r.charAt(c >>> 6 * (3 - u) & 63));
                        var h = r.charAt(64);
                        if (h)
                            while (i.length % 4)
                                i.push(h);
                        return i.join("")
                    },
                    parse: function(t) {
                        var e = t.length
                          , n = this._map
                          , r = this._reverseMap;
                        if (!r) {
                            r = this._reverseMap = [];
                            for (var i = 0; i < n.length; i++)
                                r[n.charCodeAt(i)] = i
                        }
                        var a = n.charAt(64);
                        if (a) {
                            var s = t.indexOf(a);
                            -1 !== s && (e = s)
                        }
                        return o(t, e, r)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                };
                function o(t, e, n) {
                    for (var i = [], o = 0, a = 0; a < e; a++)
                        if (a % 4) {
                            var s = n[t.charCodeAt(a - 1)] << a % 4 * 2
                              , l = n[t.charCodeAt(a)] >>> 6 - a % 4 * 2
                              , c = s | l;
                            i[o >>> 2] |= c << 24 - o % 4 * 8,
                            o++
                        }
                    return r.create(i, o)
                }
            }(),
            t.enc.Base64
        }
        ))
    },
    1276: function(t, e, n) {
        "use strict";
        var r = n("d784")
          , i = n("44e7")
          , o = n("825a")
          , a = n("1d80")
          , s = n("4840")
          , l = n("8aa5")
          , c = n("50c4")
          , u = n("577e")
          , h = n("dc4a")
          , f = n("14c3")
          , d = n("9263")
          , p = n("9f7f")
          , g = n("d039")
          , v = p.UNSUPPORTED_Y
          , m = [].push
          , y = Math.min
          , b = 4294967295
          , w = !g((function() {
            var t = /(?:)/
              , e = t.exec;
            t.exec = function() {
                return e.apply(this, arguments)
            }
            ;
            var n = "ab".split(t);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
        }
        ));
        r("split", (function(t, e, n) {
            var r;
            return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, n) {
                var r = u(a(this))
                  , o = void 0 === n ? b : n >>> 0;
                if (0 === o)
                    return [];
                if (void 0 === t)
                    return [r];
                if (!i(t))
                    return e.call(r, t, o);
                var s, l, c, h = [], f = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), p = 0, g = new RegExp(t.source,f + "g");
                while (s = d.call(g, r)) {
                    if (l = g.lastIndex,
                    l > p && (h.push(r.slice(p, s.index)),
                    s.length > 1 && s.index < r.length && m.apply(h, s.slice(1)),
                    c = s[0].length,
                    p = l,
                    h.length >= o))
                        break;
                    g.lastIndex === s.index && g.lastIndex++
                }
                return p === r.length ? !c && g.test("") || h.push("") : h.push(r.slice(p)),
                h.length > o ? h.slice(0, o) : h
            }
            : "0".split(void 0, 0).length ? function(t, n) {
                return void 0 === t && 0 === n ? [] : e.call(this, t, n)
            }
            : e,
            [function(e, n) {
                var i = a(this)
                  , o = void 0 == e ? void 0 : h(e, t);
                return o ? o.call(e, i, n) : r.call(u(i), e, n)
            }
            , function(t, i) {
                var a = o(this)
                  , h = u(t)
                  , d = n(r, a, h, i, r !== e);
                if (d.done)
                    return d.value;
                var p = s(a, RegExp)
                  , g = a.unicode
                  , m = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (v ? "g" : "y")
                  , w = new p(v ? "^(?:" + a.source + ")" : a,m)
                  , x = void 0 === i ? b : i >>> 0;
                if (0 === x)
                    return [];
                if (0 === h.length)
                    return null === f(w, h) ? [h] : [];
                var _ = 0
                  , k = 0
                  , C = [];
                while (k < h.length) {
                    w.lastIndex = v ? 0 : k;
                    var S, T = f(w, v ? h.slice(k) : h);
                    if (null === T || (S = y(c(w.lastIndex + (v ? k : 0)), h.length)) === _)
                        k = l(h, k, g);
                    else {
                        if (C.push(h.slice(_, k)),
                        C.length === x)
                            return C;
                        for (var O = 1; O <= T.length - 1; O++)
                            if (C.push(T[O]),
                            C.length === x)
                                return C;
                        k = _ = S
                    }
                }
                return C.push(h.slice(_)),
                C
            }
            ]
        }
        ), !w, v)
    },
    1382: function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("1132"), n("72fe"), n("2b79"), n("38ba"))
        }
        )(0, (function(t) {
            return function() {
                var e = t
                  , n = e.lib
                  , r = n.StreamCipher
                  , i = e.algo
                  , o = []
                  , a = []
                  , s = []
                  , l = i.Rabbit = r.extend({
                    _doReset: function() {
                        for (var t = this._key.words, e = this.cfg.iv, n = 0; n < 4; n++)
                            t[n] = 16711935 & (t[n] << 8 | t[n] >>> 24) | 4278255360 & (t[n] << 24 | t[n] >>> 8);
                        var r = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16]
                          , i = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]];
                        this._b = 0;
                        for (n = 0; n < 4; n++)
                            c.call(this);
                        for (n = 0; n < 8; n++)
                            i[n] ^= r[n + 4 & 7];
                        if (e) {
                            var o = e.words
                              , a = o[0]
                              , s = o[1]
                              , l = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8)
                              , u = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                              , h = l >>> 16 | 4294901760 & u
                              , f = u << 16 | 65535 & l;
                            i[0] ^= l,
                            i[1] ^= h,
                            i[2] ^= u,
                            i[3] ^= f,
                            i[4] ^= l,
                            i[5] ^= h,
                            i[6] ^= u,
                            i[7] ^= f;
                            for (n = 0; n < 4; n++)
                                c.call(this)
                        }
                    },
                    _doProcessBlock: function(t, e) {
                        var n = this._X;
                        c.call(this),
                        o[0] = n[0] ^ n[5] >>> 16 ^ n[3] << 16,
                        o[1] = n[2] ^ n[7] >>> 16 ^ n[5] << 16,
                        o[2] = n[4] ^ n[1] >>> 16 ^ n[7] << 16,
                        o[3] = n[6] ^ n[3] >>> 16 ^ n[1] << 16;
                        for (var r = 0; r < 4; r++)
                            o[r] = 16711935 & (o[r] << 8 | o[r] >>> 24) | 4278255360 & (o[r] << 24 | o[r] >>> 8),
                            t[e + r] ^= o[r]
                    },
                    blockSize: 4,
                    ivSize: 2
                });
                function c() {
                    for (var t = this._X, e = this._C, n = 0; n < 8; n++)
                        a[n] = e[n];
                    e[0] = e[0] + 1295307597 + this._b | 0,
                    e[1] = e[1] + 3545052371 + (e[0] >>> 0 < a[0] >>> 0 ? 1 : 0) | 0,
                    e[2] = e[2] + 886263092 + (e[1] >>> 0 < a[1] >>> 0 ? 1 : 0) | 0,
                    e[3] = e[3] + 1295307597 + (e[2] >>> 0 < a[2] >>> 0 ? 1 : 0) | 0,
                    e[4] = e[4] + 3545052371 + (e[3] >>> 0 < a[3] >>> 0 ? 1 : 0) | 0,
                    e[5] = e[5] + 886263092 + (e[4] >>> 0 < a[4] >>> 0 ? 1 : 0) | 0,
                    e[6] = e[6] + 1295307597 + (e[5] >>> 0 < a[5] >>> 0 ? 1 : 0) | 0,
                    e[7] = e[7] + 3545052371 + (e[6] >>> 0 < a[6] >>> 0 ? 1 : 0) | 0,
                    this._b = e[7] >>> 0 < a[7] >>> 0 ? 1 : 0;
                    for (n = 0; n < 8; n++) {
                        var r = t[n] + e[n]
                          , i = 65535 & r
                          , o = r >>> 16
                          , l = ((i * i >>> 17) + i * o >>> 15) + o * o
                          , c = ((4294901760 & r) * r | 0) + ((65535 & r) * r | 0);
                        s[n] = l ^ c
                    }
                    t[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0,
                    t[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0,
                    t[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0,
                    t[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0,
                    t[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0,
                    t[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0,
                    t[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0,
                    t[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0
                }
                e.Rabbit = r._createHelper(l)
            }(),
            t.Rabbit
        }
        ))
    },
    "159b": function(t, e, n) {
        var r = n("da84")
          , i = n("fdbc")
          , o = n("785a")
          , a = n("17c2")
          , s = n("9112")
          , l = function(t) {
            if (t && t.forEach !== a)
                try {
                    s(t, "forEach", a)
                } catch (e) {
                    t.forEach = a
                }
        };
        for (var c in i)
            i[c] && l(r[c] && r[c].prototype);
        l(o)
    },
    "17c2": function(t, e, n) {
        "use strict";
        var r = n("b727").forEach
          , i = n("a640")
          , o = i("forEach");
        t.exports = o ? [].forEach : function(t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    },
    "17e1": function(t, e, n) {
        (function(e, r) {
            t.exports = r(n("21bf"))
        }
        )(0, (function(t) {
            return function() {
                if ("function" == typeof ArrayBuffer) {
                    var e = t
                      , n = e.lib
                      , r = n.WordArray
                      , i = r.init
                      , o = r.init = function(t) {
                        if (t instanceof ArrayBuffer && (t = new Uint8Array(t)),
                        (t instanceof Int8Array || "undefined" !== typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (t = new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),
                        t instanceof Uint8Array) {
                            for (var e = t.byteLength, n = [], r = 0; r < e; r++)
                                n[r >>> 2] |= t[r] << 24 - r % 4 * 8;
                            i.call(this, n, e)
                        } else
                            i.apply(this, arguments)
                    }
                    ;
                    o.prototype = r
                }
            }(),
            t.lib.WordArray
        }
        ))
    },
    "191b": function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("94f8"))
        }
        )(0, (function(t) {
            return function() {
                var e = t
                  , n = e.lib
                  , r = n.WordArray
                  , i = e.algo
                  , o = i.SHA256
                  , a = i.SHA224 = o.extend({
                    _doReset: function() {
                        this._hash = new r.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])
                    },
                    _doFinalize: function() {
                        var t = o._doFinalize.call(this);
                        return t.sigBytes -= 4,
                        t
                    }
                });
                e.SHA224 = o._createHelper(a),
                e.HmacSHA224 = o._createHmacHelper(a)
            }(),
            t.SHA224
        }
        ))
    },
    "1dde": function(t, e, n) {
        var r = n("d039")
          , i = n("b622")
          , o = n("2d00")
          , a = i("species");
        t.exports = function(t) {
            return o >= 51 || !r((function() {
                var e = []
                  , n = e.constructor = {};
                return n[a] = function() {
                    return {
                        foo: 1
                    }
                }
                ,
                1 !== e[t](Boolean).foo
            }
            ))
        }
    },
    "1fe3": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("CodeContent", {
                attrs: {
                    tip: t.tip,
                    formatType: t.formatType,
                    outputTip: t.outputTip
                }
            })], 1)
        }
          , i = []
          , o = n("d4ec")
          , a = n("262e")
          , s = n("2caf")
          , l = n("9ab4")
          , c = n("82cd")
          , u = n("1b40")
          , h = function(t) {
            Object(a["a"])(n, t);
            var e = Object(s["a"])(n);
            function n() {
                var t;
                return Object(o["a"])(this, n),
                t = e.apply(this, arguments),
                t.formatType = "json2sql",
                t.tip = '根据json或dict建表， 如 {"name":"feapder", "value":"爬虫框架"}',
                t.outputTip = "# 输出\nCREATE TABLE table_name (\n    `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键id',\n    `name` varchar(255) COMMENT '',\n    `value` varchar(255) COMMENT '',\n    PRIMARY KEY (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;",
                t
            }
            return n
        }(u["c"]);
        h = Object(l["a"])([Object(u["a"])({
            components: {
                CodeContent: c["a"]
            }
        })], h);
        var f = h
          , d = f
          , p = n("2877")
          , g = Object(p["a"])(d, r, i, !1, null, "4fd4768a", null);
        e["default"] = g.exports
    },
    "21bf": function(t, e, n) {
        (function(e) {
            (function(e, n) {
                t.exports = n()
            }
            )(0, (function() {
                var t = t || function(t, r) {
                    var i;
                    if ("undefined" !== typeof window && window.crypto && (i = window.crypto),
                    "undefined" !== typeof self && self.crypto && (i = self.crypto),
                    "undefined" !== typeof globalThis && globalThis.crypto && (i = globalThis.crypto),
                    !i && "undefined" !== typeof window && window.msCrypto && (i = window.msCrypto),
                    !i && "undefined" !== typeof e && e.crypto && (i = e.crypto),
                    !i)
                        try {
                            i = n(1)
                        } catch (m) {}
                    var o = function() {
                        if (i) {
                            if ("function" === typeof i.getRandomValues)
                                try {
                                    return i.getRandomValues(new Uint32Array(1))[0]
                                } catch (m) {}
                            if ("function" === typeof i.randomBytes)
                                try {
                                    return i.randomBytes(4).readInt32LE()
                                } catch (m) {}
                        }
                        throw new Error("Native crypto module could not be used to get secure random number.")
                    }
                      , a = Object.create || function() {
                        function t() {}
                        return function(e) {
                            var n;
                            return t.prototype = e,
                            n = new t,
                            t.prototype = null,
                            n
                        }
                    }()
                      , s = {}
                      , l = s.lib = {}
                      , c = l.Base = function() {
                        return {
                            extend: function(t) {
                                var e = a(this);
                                return t && e.mixIn(t),
                                e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() {
                                    e.$super.init.apply(this, arguments)
                                }
                                ),
                                e.init.prototype = e,
                                e.$super = this,
                                e
                            },
                            create: function() {
                                var t = this.extend();
                                return t.init.apply(t, arguments),
                                t
                            },
                            init: function() {},
                            mixIn: function(t) {
                                for (var e in t)
                                    t.hasOwnProperty(e) && (this[e] = t[e]);
                                t.hasOwnProperty("toString") && (this.toString = t.toString)
                            },
                            clone: function() {
                                return this.init.prototype.extend(this)
                            }
                        }
                    }()
                      , u = l.WordArray = c.extend({
                        init: function(t, e) {
                            t = this.words = t || [],
                            this.sigBytes = e != r ? e : 4 * t.length
                        },
                        toString: function(t) {
                            return (t || f).stringify(this)
                        },
                        concat: function(t) {
                            var e = this.words
                              , n = t.words
                              , r = this.sigBytes
                              , i = t.sigBytes;
                            if (this.clamp(),
                            r % 4)
                                for (var o = 0; o < i; o++) {
                                    var a = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                    e[r + o >>> 2] |= a << 24 - (r + o) % 4 * 8
                                }
                            else
                                for (var s = 0; s < i; s += 4)
                                    e[r + s >>> 2] = n[s >>> 2];
                            return this.sigBytes += i,
                            this
                        },
                        clamp: function() {
                            var e = this.words
                              , n = this.sigBytes;
                            e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
                            e.length = t.ceil(n / 4)
                        },
                        clone: function() {
                            var t = c.clone.call(this);
                            return t.words = this.words.slice(0),
                            t
                        },
                        random: function(t) {
                            for (var e = [], n = 0; n < t; n += 4)
                                e.push(o());
                            return new u.init(e,t)
                        }
                    })
                      , h = s.enc = {}
                      , f = h.Hex = {
                        stringify: function(t) {
                            for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) {
                                var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                r.push((o >>> 4).toString(16)),
                                r.push((15 & o).toString(16))
                            }
                            return r.join("")
                        },
                        parse: function(t) {
                            for (var e = t.length, n = [], r = 0; r < e; r += 2)
                                n[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
                            return new u.init(n,e / 2)
                        }
                    }
                      , d = h.Latin1 = {
                        stringify: function(t) {
                            for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) {
                                var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                r.push(String.fromCharCode(o))
                            }
                            return r.join("")
                        },
                        parse: function(t) {
                            for (var e = t.length, n = [], r = 0; r < e; r++)
                                n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
                            return new u.init(n,e)
                        }
                    }
                      , p = h.Utf8 = {
                        stringify: function(t) {
                            try {
                                return decodeURIComponent(escape(d.stringify(t)))
                            } catch (e) {
                                throw new Error("Malformed UTF-8 data")
                            }
                        },
                        parse: function(t) {
                            return d.parse(unescape(encodeURIComponent(t)))
                        }
                    }
                      , g = l.BufferedBlockAlgorithm = c.extend({
                        reset: function() {
                            this._data = new u.init,
                            this._nDataBytes = 0
                        },
                        _append: function(t) {
                            "string" == typeof t && (t = p.parse(t)),
                            this._data.concat(t),
                            this._nDataBytes += t.sigBytes
                        },
                        _process: function(e) {
                            var n, r = this._data, i = r.words, o = r.sigBytes, a = this.blockSize, s = 4 * a, l = o / s;
                            l = e ? t.ceil(l) : t.max((0 | l) - this._minBufferSize, 0);
                            var c = l * a
                              , h = t.min(4 * c, o);
                            if (c) {
                                for (var f = 0; f < c; f += a)
                                    this._doProcessBlock(i, f);
                                n = i.splice(0, c),
                                r.sigBytes -= h
                            }
                            return new u.init(n,h)
                        },
                        clone: function() {
                            var t = c.clone.call(this);
                            return t._data = this._data.clone(),
                            t
                        },
                        _minBufferSize: 0
                    })
                      , v = (l.Hasher = g.extend({
                        cfg: c.extend(),
                        init: function(t) {
                            this.cfg = this.cfg.extend(t),
                            this.reset()
                        },
                        reset: function() {
                            g.reset.call(this),
                            this._doReset()
                        },
                        update: function(t) {
                            return this._append(t),
                            this._process(),
                            this
                        },
                        finalize: function(t) {
                            t && this._append(t);
                            var e = this._doFinalize();
                            return e
                        },
                        blockSize: 16,
                        _createHelper: function(t) {
                            return function(e, n) {
                                return new t.init(n).finalize(e)
                            }
                        },
                        _createHmacHelper: function(t) {
                            return function(e, n) {
                                return new v.HMAC.init(t,n).finalize(e)
                            }
                        }
                    }),
                    s.algo = {});
                    return s
                }(Math);
                return t
            }
            ))
        }
        ).call(this, n("c8ba"))
    },
    2532: function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , i = n("5a34")
          , o = n("1d80")
          , a = n("577e")
          , s = n("ab13");
        r({
            target: "String",
            proto: !0,
            forced: !s("includes")
        }, {
            includes: function(t) {
                return !!~a(o(this)).indexOf(a(i(t)), arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    },
    "25a0": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("1da1")
          , i = n("d4ec")
          , o = n("bee2")
          , a = n("262e")
          , s = n("2caf")
          , l = (n("96cf"),
        n("9ab4"))
          , c = n("82cd")
          , u = n("1b40")
          , h = (n("ac1f"),
        n("1276"),
        n("a15b"),
        n("4d63"),
        n("25f0"),
        n("d142"));
        function f(t, e, n, r) {
            var i;
            function o() {
                return this.pos = 0,
                this.token = "",
                this.current_mode = "CONTENT",
                this.tags = {
                    parent: "parent1",
                    parentcount: 1,
                    parent1: ""
                },
                this.tag_type = "",
                this.token_text = this.last_token = this.last_text = this.token_type = "",
                this.Utils = {
                    whitespace: "\n\r\t ".split(""),
                    single_token: "br,input,link,meta,!doctype,basefont,base,area,hr,wbr,param,img,isindex,?xml,embed".split(","),
                    extra_liners: "head,body,/html".split(","),
                    in_array: function(t, e) {
                        for (var n = 0; n < e.length; n++)
                            if (t === e[n])
                                return !0;
                        return !1
                    }
                },
                this.get_content = function() {
                    var t = ""
                      , e = []
                      , n = !1;
                    while ("<" !== this.input.charAt(this.pos)) {
                        if (this.pos >= this.input.length)
                            return e.length ? e.join("") : ["", "TK_EOF"];
                        if (t = this.input.charAt(this.pos),
                        this.pos++,
                        this.line_char_count++,
                        this.Utils.in_array(t, this.Utils.whitespace))
                            e.length && (n = !0),
                            this.line_char_count--;
                        else {
                            if (n) {
                                if (this.line_char_count >= this.max_char) {
                                    e.push("\n");
                                    for (var r = 0; r < this.indent_level; r++)
                                        e.push(this.indent_string);
                                    this.line_char_count = 0
                                } else
                                    e.push(" "),
                                    this.line_char_count++;
                                n = !1
                            }
                            e.push(t)
                        }
                    }
                    return e.length ? e.join("") : ""
                }
                ,
                this.get_script = function() {
                    var t = ""
                      , e = []
                      , n = new RegExp("<\/script>","igm");
                    n.lastIndex = this.pos;
                    var r = n.exec(this.input)
                      , i = r ? r.index : this.input.length;
                    while (this.pos < i) {
                        if (this.pos >= this.input.length)
                            return e.length ? e.join("") : ["", "TK_EOF"];
                        t = this.input.charAt(this.pos),
                        this.pos++,
                        e.push(t)
                    }
                    return e.length ? e.join("") : ""
                }
                ,
                this.record_tag = function(t) {
                    this.tags[t + "count"] ? (this.tags[t + "count"]++,
                    this.tags[t + this.tags[t + "count"]] = this.indent_level) : (this.tags[t + "count"] = 1,
                    this.tags[t + this.tags[t + "count"]] = this.indent_level),
                    this.tags[t + this.tags[t + "count"] + "parent"] = this.tags.parent,
                    this.tags.parent = t + this.tags[t + "count"]
                }
                ,
                this.retrieve_tag = function(t) {
                    if (this.tags[t + "count"]) {
                        var e = this.tags.parent;
                        while (e) {
                            if (t + this.tags[t + "count"] === e)
                                break;
                            e = this.tags[e + "parent"]
                        }
                        e && (this.indent_level = this.tags[t + this.tags[t + "count"]],
                        this.tags.parent = this.tags[e + "parent"]),
                        delete this.tags[t + this.tags[t + "count"] + "parent"],
                        delete this.tags[t + this.tags[t + "count"]],
                        1 == this.tags[t + "count"] ? delete this.tags[t + "count"] : this.tags[t + "count"]--
                    }
                }
                ,
                this.get_tag = function() {
                    var t = ""
                      , e = []
                      , n = !1;
                    do {
                        if (this.pos >= this.input.length)
                            return e.length ? e.join("") : ["", "TK_EOF"];
                        t = this.input.charAt(this.pos),
                        this.pos++,
                        this.line_char_count++,
                        this.Utils.in_array(t, this.Utils.whitespace) ? (n = !0,
                        this.line_char_count--) : ("'" !== t && '"' !== t || e[1] && "!" === e[1] || (t += this.get_unformatted(t),
                        n = !0),
                        "=" === t && (n = !1),
                        e.length && "=" !== e[e.length - 1] && ">" !== t && n && (this.line_char_count >= this.max_char ? (this.print_newline(!1, e),
                        this.line_char_count = 0) : (e.push(" "),
                        this.line_char_count++),
                        n = !1),
                        e.push(t))
                    } while (">" !== t);
                    var r, i = e.join("");
                    r = -1 != i.indexOf(" ") ? i.indexOf(" ") : i.indexOf(">");
                    var o = i.substring(1, r).toLowerCase();
                    if ("/" === i.charAt(i.length - 2) || this.Utils.in_array(o, this.Utils.single_token))
                        this.tag_type = "SINGLE";
                    else if ("script" === o)
                        this.record_tag(o),
                        this.tag_type = "SCRIPT";
                    else if ("style" === o)
                        this.record_tag(o),
                        this.tag_type = "STYLE";
                    else if ("!" === o.charAt(0))
                        if (-1 != o.indexOf("[if")) {
                            if (-1 != i.indexOf("!IE")) {
                                var a = this.get_unformatted("--\x3e", i);
                                e.push(a)
                            }
                            this.tag_type = "START"
                        } else if (-1 != o.indexOf("[endif"))
                            this.tag_type = "END",
                            this.unindent();
                        else if (-1 != o.indexOf("[cdata[")) {
                            var s = this.get_unformatted("]]>", i);
                            e.push(s),
                            this.tag_type = "SINGLE"
                        } else {
                            var l = this.get_unformatted("--\x3e", i);
                            e.push(l),
                            this.tag_type = "SINGLE"
                        }
                    else
                        "/" === o.charAt(0) ? (this.retrieve_tag(o.substring(1)),
                        this.tag_type = "END") : (this.record_tag(o),
                        this.tag_type = "START"),
                        this.Utils.in_array(o, this.Utils.extra_liners) && this.print_newline(!0, this.output);
                    return e.join("")
                }
                ,
                this.get_unformatted = function(t, e) {
                    if (e && -1 != e.indexOf(t))
                        return "";
                    var n = ""
                      , r = ""
                      , i = !0;
                    do {
                        if (n = this.input.charAt(this.pos),
                        this.pos++,
                        this.Utils.in_array(n, this.Utils.whitespace)) {
                            if (!i) {
                                this.line_char_count--;
                                continue
                            }
                            if ("\n" === n || "\r" === n) {
                                r += "\n";
                                for (var o = 0; o < this.indent_level; o++)
                                    r += this.indent_string;
                                i = !1,
                                this.line_char_count = 0;
                                continue
                            }
                        }
                        r += n,
                        this.line_char_count++,
                        i = !0
                    } while (-1 == r.indexOf(t));
                    return r
                }
                ,
                this.get_token = function() {
                    var t;
                    if ("TK_TAG_SCRIPT" === this.last_token) {
                        var e = this.get_script();
                        return "string" !== typeof e ? e : (t = Object(h["a"])(e, this.indent_size, this.indent_character, this.indent_level),
                        [t, "TK_CONTENT"])
                    }
                    if ("CONTENT" === this.current_mode)
                        return t = this.get_content(),
                        "string" !== typeof t ? t : [t, "TK_CONTENT"];
                    if ("TAG" === this.current_mode) {
                        if (t = this.get_tag(),
                        "string" !== typeof t)
                            return t;
                        var n = "TK_TAG_" + this.tag_type;
                        return [t, n]
                    }
                }
                ,
                this.printer = function(t, e, n, r) {
                    this.input = t || "",
                    this.output = [],
                    this.indent_character = e || " ",
                    this.indent_string = "",
                    this.indent_size = n || 2,
                    this.indent_level = 0,
                    this.max_char = r || 70,
                    this.line_char_count = 0;
                    for (var i = 0; i < this.indent_size; i++)
                        this.indent_string += this.indent_character;
                    this.print_newline = function(t, e) {
                        if (this.line_char_count = 0,
                        e && e.length) {
                            if (!t)
                                while (this.Utils.in_array(e[e.length - 1], this.Utils.whitespace))
                                    e.pop();
                            e.push("\n");
                            for (var n = 0; n < this.indent_level; n++)
                                e.push(this.indent_string)
                        }
                    }
                    ,
                    this.print_token = function(t) {
                        this.output.push(t)
                    }
                    ,
                    this.indent = function() {
                        this.indent_level++
                    }
                    ,
                    this.unindent = function() {
                        this.indent_level > 0 && this.indent_level--
                    }
                }
                ,
                this
            }
            i = new o,
            i.printer(t, n, e);
            while (1) {
                var a = i.get_token();
                if (i.token_text = a[0],
                i.token_type = a[1],
                "TK_EOF" === i.token_type)
                    break;
                switch (i.token_type) {
                case "TK_TAG_START":
                case "TK_TAG_SCRIPT":
                case "TK_TAG_STYLE":
                    i.print_newline(!1, i.output),
                    i.print_token(i.token_text),
                    i.indent(),
                    i.current_mode = "CONTENT";
                    break;
                case "TK_TAG_END":
                    i.print_newline(!0, i.output),
                    i.print_token(i.token_text),
                    i.current_mode = "CONTENT";
                    break;
                case "TK_TAG_SINGLE":
                    i.print_newline(!1, i.output),
                    i.print_token(i.token_text),
                    i.current_mode = "CONTENT";
                    break;
                case "TK_CONTENT":
                    "" !== i.token_text && (i.print_newline(!1, i.output),
                    i.print_token(i.token_text)),
                    i.current_mode = "TAG";
                    break
                }
                i.last_token = i.token_type,
                i.last_text = i.token_text
            }
            return i.output.join("")
        }
        var d = f
          , p = function(t) {
            Object(a["a"])(n, t);
            var e = Object(s["a"])(n);
            function n() {
                return Object(i["a"])(this, n),
                e.apply(this, arguments)
            }
            return Object(o["a"])(n, [{
                key: "run",
                value: function() {
                    var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
                        var e;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    e = this.trimStr(this.inputStr),
                                    e.length > 0 && (this.outputStr = d(e, 1, "\t", 80),
                                    this.randomkey = this.createRamdomKey());
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }]),
            n
        }(c["a"]);
        p = Object(l["a"])([Object(u["a"])({
            components: {
                CodeContent: c["a"]
            },
            props: {
                tip: {
                    type: String,
                    default: "输入待格式化的html"
                },
                outputTip: {
                    type: String,
                    default: ""
                },
                language: {
                    type: String,
                    default: "html"
                }
            }
        })], p);
        var g, v, m = p, y = m, b = n("2877"), w = Object(b["a"])(y, g, v, !1, null, null, null);
        e["default"] = w.exports
    },
    "25f0": function(t, e, n) {
        "use strict";
        var r = n("5e77").PROPER
          , i = n("6eeb")
          , o = n("825a")
          , a = n("577e")
          , s = n("d039")
          , l = n("ad6d")
          , c = "toString"
          , u = RegExp.prototype
          , h = u[c]
          , f = s((function() {
            return "/a/b" != h.call({
                source: "a",
                flags: "b"
            })
        }
        ))
          , d = r && h.name != c;
        (f || d) && i(RegExp.prototype, c, (function() {
            var t = o(this)
              , e = a(t.source)
              , n = t.flags
              , r = a(void 0 === n && t instanceof RegExp && !("flags"in u) ? l.call(t) : n);
            return "/" + e + "/" + r
        }
        ), {
            unsafe: !0
        })
    },
    "266e": function(t, e, n) {
        "use strict";
        (function(t) {
            var r = n("53ca")
              , i = (n("a9e3"),
            n("a15b"),
            n("ac1f"),
            n("466d"),
            n("d3b7"),
            n("fb6a"),
            n("5319"),
            n("1276"),
            {});
            function o(t, e, n) {
                var r, i = 0, o = t.split(e);
                if (0 === n)
                    return 0;
                for (r = 0; r < n; r++) {
                    if (r >= o.length)
                        return -1;
                    i += o[r].length + e.length
                }
                return i
            }
            function a(t) {
                var e, n, a, s, l;
                try {
                    if (l = i.parser.parse(t),
                    l)
                        return {
                            success: !0,
                            data: l
                        }
                } catch (u) {
                    var c = u;
                    try {
                        t = i.format.formatJson(t),
                        l = i.parser.parse(t)
                    } catch (u) {
                        c = u
                    }
                    return n = c.message.match(/line ([0-9]*)/),
                    n && "object" === Object(r["a"])(n) && n.length > 1 && (e = parseInt(n[1], 10),
                    a = 1 === e ? 0 : o(t, "\n", e - 1),
                    s = t.indexOf("\n", a),
                    s < 0 && (s = t.length)),
                    {
                        success: !1,
                        data: t,
                        error_msg: c.message,
                        line_start: a,
                        line_end: s
                    }
                }
            }
            i.parser = function() {
                var e = !0
                  , n = !1
                  , r = {}
                  , i = function() {
                    var t = {
                        trace: function() {},
                        yy: {},
                        symbols_: {
                            error: 2,
                            JSONString: 3,
                            STRING: 4,
                            JSONNumber: 5,
                            NUMBER: 6,
                            JSONNullLiteral: 7,
                            NULL: 8,
                            JSONBooleanLiteral: 9,
                            TRUE: 10,
                            FALSE: 11,
                            JSONText: 12,
                            JSONObject: 13,
                            EOF: 14,
                            JSONArray: 15,
                            JSONValue: 16,
                            "{": 17,
                            "}": 18,
                            JSONMemberList: 19,
                            JSONMember: 20,
                            ":": 21,
                            ",": 22,
                            "[": 23,
                            "]": 24,
                            JSONElementList: 25,
                            $accept: 0,
                            $end: 1
                        },
                        terminals_: {
                            2: "error",
                            4: "STRING",
                            6: "NUMBER",
                            8: "NULL",
                            10: "TRUE",
                            11: "FALSE",
                            14: "EOF",
                            17: "{",
                            18: "}",
                            21: ":",
                            22: ",",
                            23: "[",
                            24: "]"
                        },
                        productions_: [0, [3, 1], [5, 1], [7, 1], [9, 1], [9, 1], [12, 2], [12, 2], [16, 1], [16, 1], [16, 1], [16, 1], [16, 1], [16, 1], [13, 2], [13, 3], [20, 3], [19, 1], [19, 3], [15, 2], [15, 3], [25, 1], [25, 3]],
                        performAction: function(t, e, n, r, i, o, a) {
                            var s = o.length - 1;
                            switch (i) {
                            case 1:
                                this.$ = t;
                                break;
                            case 2:
                                this.$ = Number(t);
                                break;
                            case 3:
                                this.$ = null;
                                break;
                            case 4:
                                this.$ = !0;
                                break;
                            case 5:
                                this.$ = !1;
                                break;
                            case 6:
                                return this.$ = o[s - 1];
                            case 7:
                                return this.$ = o[s - 1];
                            case 8:
                                this.$ = o[s];
                                break;
                            case 9:
                                this.$ = o[s];
                                break;
                            case 10:
                                this.$ = o[s];
                                break;
                            case 11:
                                this.$ = o[s];
                                break;
                            case 12:
                                this.$ = o[s];
                                break;
                            case 13:
                                this.$ = o[s];
                                break;
                            case 14:
                                this.$ = {};
                                break;
                            case 15:
                                this.$ = o[s - 1];
                                break;
                            case 16:
                                this.$ = [o[s - 2], o[s]];
                                break;
                            case 17:
                                this.$ = {},
                                this.$[o[s][0]] = o[s][1];
                                break;
                            case 18:
                                this.$ = o[s - 2],
                                o[s - 2][o[s][0]] = o[s][1];
                                break;
                            case 19:
                                this.$ = [];
                                break;
                            case 20:
                                this.$ = o[s - 1];
                                break;
                            case 21:
                                this.$ = [o[s]];
                                break;
                            case 22:
                                this.$ = o[s - 2],
                                o[s - 2].push(o[s])
                            }
                        },
                        table: [{
                            12: 1,
                            13: 2,
                            15: 3,
                            17: [1, 4],
                            23: [1, 5]
                        }, {
                            1: [3]
                        }, {
                            14: [1, 6]
                        }, {
                            14: [1, 7]
                        }, {
                            3: 11,
                            4: [1, 12],
                            18: [1, 8],
                            19: 9,
                            20: 10
                        }, {
                            3: 18,
                            4: [1, 12],
                            5: 19,
                            6: [1, 25],
                            7: 16,
                            8: [1, 22],
                            9: 17,
                            10: [1, 23],
                            11: [1, 24],
                            13: 20,
                            15: 21,
                            16: 15,
                            17: [1, 4],
                            23: [1, 5],
                            24: [1, 13],
                            25: 14
                        }, {
                            1: [2, 6]
                        }, {
                            1: [2, 7]
                        }, {
                            14: [2, 14],
                            18: [2, 14],
                            22: [2, 14],
                            24: [2, 14]
                        }, {
                            18: [1, 26],
                            22: [1, 27]
                        }, {
                            18: [2, 17],
                            22: [2, 17]
                        }, {
                            21: [1, 28]
                        }, {
                            18: [2, 1],
                            21: [2, 1],
                            22: [2, 1],
                            24: [2, 1]
                        }, {
                            14: [2, 19],
                            18: [2, 19],
                            22: [2, 19],
                            24: [2, 19]
                        }, {
                            22: [1, 30],
                            24: [1, 29]
                        }, {
                            22: [2, 21],
                            24: [2, 21]
                        }, {
                            18: [2, 8],
                            22: [2, 8],
                            24: [2, 8]
                        }, {
                            18: [2, 9],
                            22: [2, 9],
                            24: [2, 9]
                        }, {
                            18: [2, 10],
                            22: [2, 10],
                            24: [2, 10]
                        }, {
                            18: [2, 11],
                            22: [2, 11],
                            24: [2, 11]
                        }, {
                            18: [2, 12],
                            22: [2, 12],
                            24: [2, 12]
                        }, {
                            18: [2, 13],
                            22: [2, 13],
                            24: [2, 13]
                        }, {
                            18: [2, 3],
                            22: [2, 3],
                            24: [2, 3]
                        }, {
                            18: [2, 4],
                            22: [2, 4],
                            24: [2, 4]
                        }, {
                            18: [2, 5],
                            22: [2, 5],
                            24: [2, 5]
                        }, {
                            18: [2, 2],
                            22: [2, 2],
                            24: [2, 2]
                        }, {
                            14: [2, 15],
                            18: [2, 15],
                            22: [2, 15],
                            24: [2, 15]
                        }, {
                            3: 11,
                            4: [1, 12],
                            20: 31
                        }, {
                            3: 18,
                            4: [1, 12],
                            5: 19,
                            6: [1, 25],
                            7: 16,
                            8: [1, 22],
                            9: 17,
                            10: [1, 23],
                            11: [1, 24],
                            13: 20,
                            15: 21,
                            16: 32,
                            17: [1, 4],
                            23: [1, 5]
                        }, {
                            14: [2, 20],
                            18: [2, 20],
                            22: [2, 20],
                            24: [2, 20]
                        }, {
                            3: 18,
                            4: [1, 12],
                            5: 19,
                            6: [1, 25],
                            7: 16,
                            8: [1, 22],
                            9: 17,
                            10: [1, 23],
                            11: [1, 24],
                            13: 20,
                            15: 21,
                            16: 33,
                            17: [1, 4],
                            23: [1, 5]
                        }, {
                            18: [2, 18],
                            22: [2, 18]
                        }, {
                            18: [2, 16],
                            22: [2, 16]
                        }, {
                            22: [2, 22],
                            24: [2, 22]
                        }],
                        defaultActions: {
                            6: [2, 6],
                            7: [2, 7]
                        },
                        parseError: function(t, e) {
                            throw new Error(t)
                        },
                        parse: function(t) {
                            function e() {
                                var t;
                                return t = r.lexer.lex() || 1,
                                "number" != typeof t && (t = r.symbols_[t] || t),
                                t
                            }
                            function n(t) {
                                i.length = i.length - 2 * t,
                                o.length = o.length - t,
                                a.length = a.length - t
                            }
                            var r = this
                              , i = [0]
                              , o = [null]
                              , a = []
                              , s = this.table
                              , l = ""
                              , c = 0
                              , u = 0
                              , h = 0
                              , f = 2
                              , d = 1;
                            this.lexer.setInput(t),
                            this.lexer.yy = this.yy,
                            this.yy.lexer = this.lexer,
                            "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                            var p = this.lexer.yylloc;
                            a.push(p),
                            "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                            for (var g, v, m, y, b, w, x, _, k, C = {}; ; ) {
                                if (m = i[i.length - 1],
                                this.defaultActions[m] ? y = this.defaultActions[m] : (null == g && (g = e()),
                                y = s[m] && s[m][g]),
                                "undefined" == typeof y || !y.length || !y[0]) {
                                    if (!h) {
                                        for (w in k = [],
                                        s[m])
                                            this.terminals_[w] && w > 2 && k.push("'" + this.terminals_[w] + "'");
                                        var S = "";
                                        S = this.lexer.showPosition ? "Parse error on line " + (c + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + k.join(", ") : "Parse error on line " + (c + 1) + ": Unexpected " + (1 == g ? "end of input" : "'" + (this.terminals_[g] || g) + "'"),
                                        this.parseError(S, {
                                            text: this.lexer.match,
                                            token: this.terminals_[g] || g,
                                            line: this.lexer.yylineno,
                                            loc: p,
                                            expected: k
                                        })
                                    }
                                    if (3 == h) {
                                        if (g == d)
                                            throw new Error(S || "Parsing halted.");
                                        u = this.lexer.yyleng,
                                        l = this.lexer.yytext,
                                        c = this.lexer.yylineno,
                                        p = this.lexer.yylloc,
                                        g = e()
                                    }
                                    for (; ; ) {
                                        if (f.toString()in s[m])
                                            break;
                                        if (0 == m)
                                            throw new Error(S || "Parsing halted.");
                                        n(1),
                                        m = i[i.length - 1]
                                    }
                                    v = g,
                                    g = f,
                                    m = i[i.length - 1],
                                    y = s[m] && s[m][f],
                                    h = 3
                                }
                                if (y[0]instanceof Array && y.length > 1)
                                    throw new Error("Parse Error: multiple actions possible at state: " + m + ", token: " + g);
                                switch (y[0]) {
                                case 1:
                                    i.push(g),
                                    o.push(this.lexer.yytext),
                                    a.push(this.lexer.yylloc),
                                    i.push(y[1]),
                                    g = null,
                                    v ? (g = v,
                                    v = null) : (u = this.lexer.yyleng,
                                    l = this.lexer.yytext,
                                    c = this.lexer.yylineno,
                                    p = this.lexer.yylloc,
                                    h > 0 && h--);
                                    break;
                                case 2:
                                    if (x = this.productions_[y[1]][1],
                                    C.$ = o[o.length - x],
                                    C._$ = {
                                        first_line: a[a.length - (x || 1)].first_line,
                                        last_line: a[a.length - 1].last_line,
                                        first_column: a[a.length - (x || 1)].first_column,
                                        last_column: a[a.length - 1].last_column
                                    },
                                    b = this.performAction.call(C, l, u, c, this.yy, y[1], o, a),
                                    "undefined" != typeof b)
                                        return b;
                                    x && (i = i.slice(0, -1 * x * 2),
                                    o = o.slice(0, -1 * x),
                                    a = a.slice(0, -1 * x)),
                                    i.push(this.productions_[y[1]][0]),
                                    o.push(C.$),
                                    a.push(C._$),
                                    _ = s[i[i.length - 2]][i[i.length - 1]],
                                    i.push(_);
                                    break;
                                case 3:
                                    return !0
                                }
                            }
                        }
                    }
                      , e = function() {
                        var t = {
                            EOF: 1,
                            parseError: function(t, e) {
                                if (!this.yy.parseError)
                                    throw new Error(t);
                                this.yy.parseError(t, e)
                            },
                            setInput: function(t) {
                                return this._input = t,
                                this._more = this._less = this.done = !1,
                                this.yylineno = this.yyleng = 0,
                                this.yytext = this.matched = this.match = "",
                                this.conditionStack = ["INITIAL"],
                                this.yylloc = {
                                    first_line: 1,
                                    first_column: 0,
                                    last_line: 1,
                                    last_column: 0
                                },
                                this
                            },
                            input: function() {
                                var t = this._input[0];
                                this.yytext += t,
                                this.yyleng++,
                                this.match += t,
                                this.matched += t;
                                var e = t.match(/\n/);
                                return e && this.yylineno++,
                                this._input = this._input.slice(1),
                                t
                            },
                            unput: function(t) {
                                return this._input = t + this._input,
                                this
                            },
                            more: function() {
                                return this._more = !0,
                                this
                            },
                            pastInput: function() {
                                var t = this.matched.substr(0, this.matched.length - this.match.length);
                                return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "")
                            },
                            upcomingInput: function() {
                                var t = this.match;
                                return t.length < 20 && (t += this._input.substr(0, 20 - t.length)),
                                (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "")
                            },
                            showPosition: function() {
                                var t = this.pastInput()
                                  , e = Array(t.length + 1).join("-");
                                return t + this.upcomingInput() + "\n" + e + "^"
                            },
                            next: function() {
                                if (this.done)
                                    return this.EOF;
                                var t, e, n;
                                this._input || (this.done = !0),
                                this._more || (this.yytext = "",
                                this.match = "");
                                for (var r = this._currentRules(), i = 0; i < r.length; i++)
                                    if (e = this._input.match(this.rules[r[i]]),
                                    e)
                                        return n = e[0].match(/\n.*/g),
                                        n && (this.yylineno += n.length),
                                        this.yylloc = {
                                            first_line: this.yylloc.last_line,
                                            last_line: this.yylineno + 1,
                                            first_column: this.yylloc.last_column,
                                            last_column: n ? n[n.length - 1].length - 1 : this.yylloc.last_column + e[0].length
                                        },
                                        this.yytext += e[0],
                                        this.match += e[0],
                                        this.matches = e,
                                        this.yyleng = this.yytext.length,
                                        this._more = !1,
                                        this._input = this._input.slice(e[0].length),
                                        this.matched += e[0],
                                        t = this.performAction.call(this, this.yy, this, r[i], this.conditionStack[this.conditionStack.length - 1]),
                                        t || void 0;
                                if ("" === this._input)
                                    return this.EOF;
                                this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                    text: "",
                                    token: null,
                                    line: this.yylineno
                                })
                            },
                            lex: function() {
                                var t = this.next();
                                return "undefined" != typeof t ? t : this.lex()
                            },
                            begin: function(t) {
                                this.conditionStack.push(t)
                            },
                            popState: function() {
                                return this.conditionStack.pop()
                            },
                            _currentRules: function() {
                                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                            },
                            performAction: function(t, e, n, r) {
                                switch (n) {
                                case 0:
                                    break;
                                case 1:
                                    return 6;
                                case 2:
                                    return e.yytext = e.yytext.substr(1, e.yyleng - 2),
                                    4;
                                case 3:
                                    return 17;
                                case 4:
                                    return 18;
                                case 5:
                                    return 23;
                                case 6:
                                    return 24;
                                case 7:
                                    return 22;
                                case 8:
                                    return 21;
                                case 9:
                                    return 10;
                                case 10:
                                    return 11;
                                case 11:
                                    return 8;
                                case 12:
                                    return 14;
                                case 13:
                                    return "INVALID"
                                }
                            },
                            rules: [/^\s+/, /^-?([0-9]|[1-9][0-9]+)(\.[0-9]+)?([eE][-+]?[0-9]+)?\b/, /^"(\\["bfnrt/\\]|\\u[a-fA-F0-9]{4}|[^\0-\x09\x0a-\x1f"\\])*"/, /^\{/, /^\}/, /^\[/, /^\]/, /^,/, /^:/, /^true\b/, /^false\b/, /^null\b/, /^$/, /^./],
                            conditions: {
                                INITIAL: {
                                    rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                                    inclusive: !0
                                }
                            }
                        };
                        return t
                    }();
                    return t.lexer = e,
                    t
                }();
                return "undefined" != typeof e && "undefined" != typeof r && (r.parser = i,
                r.parse = function() {
                    return i.parse.apply(i, arguments)
                }
                ,
                r.main = function(n) {
                    if (!n[1])
                        throw new Error("Usage: " + n[0] + " FILE");
                    if ("undefined" != typeof t)
                        var i = e("fs").readFileSync(e("path").join(t.cwd(), n[1]), "utf8");
                    else {
                        var o = e("file").path(e("file").cwd());
                        i = o.join(n[1]).read({
                            charset: "utf-8"
                        })
                    }
                    return r.parser.parse(i)
                }
                ,
                "undefined" != typeof n && e.main === n && r.main("undefined" != typeof t ? t.argv.slice(1) : e("system").args)),
                r
            }(),
            i.format = function() {
                function t(t, e) {
                    return new Array(e + 1).join(t)
                }
                function e(e) {
                    var n = 0
                      , r = 0
                      , i = "    "
                      , o = ""
                      , a = 0
                      , s = !1
                      , l = null;
                    for (n = 0,
                    r = e.length; n < r; n += 1)
                        switch (l = e.charAt(n),
                        l) {
                        case "{":
                        case "[":
                            s ? o += l : (o += l + "\n" + t(i, a + 1),
                            a += 1);
                            break;
                        case "}":
                        case "]":
                            s ? o += l : (a -= 1,
                            o += "\n" + t(i, a) + l);
                            break;
                        case ",":
                            o += s ? l : ",\n" + t(i, a);
                            break;
                        case ":":
                            o += s ? l : ": ";
                            break;
                        case " ":
                        case "\n":
                        case "\t":
                            s && (o += l);
                            break;
                        case '"':
                            n > 0 && "\\" !== e.charAt(n - 1) && (s = !s),
                            o += l;
                            break;
                        default:
                            o += l;
                            break
                        }
                    return o
                }
                return {
                    formatJson: e
                }
            }(),
            e["a"] = a
        }
        ).call(this, n("4362"))
    },
    "27f9": function(t, e, n) {},
    "2a66": function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("38ba"))
        }
        )(0, (function(t) {
            return t.pad.ZeroPadding = {
                pad: function(t, e) {
                    var n = 4 * e;
                    t.clamp(),
                    t.sigBytes += n - (t.sigBytes % n || n)
                },
                unpad: function(t) {
                    var e = t.words
                      , n = t.sigBytes - 1;
                    for (n = t.sigBytes - 1; n >= 0; n--)
                        if (e[n >>> 2] >>> 24 - n % 4 * 8 & 255) {
                            t.sigBytes = n + 1;
                            break
                        }
                }
            },
            t.pad.ZeroPadding
        }
        ))
    },
    "2b79": function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("df2f"), n("5980"))
        }
        )(0, (function(t) {
            return function() {
                var e = t
                  , n = e.lib
                  , r = n.Base
                  , i = n.WordArray
                  , o = e.algo
                  , a = o.MD5
                  , s = o.EvpKDF = r.extend({
                    cfg: r.extend({
                        keySize: 4,
                        hasher: a,
                        iterations: 1
                    }),
                    init: function(t) {
                        this.cfg = this.cfg.extend(t)
                    },
                    compute: function(t, e) {
                        var n, r = this.cfg, o = r.hasher.create(), a = i.create(), s = a.words, l = r.keySize, c = r.iterations;
                        while (s.length < l) {
                            n && o.update(n),
                            n = o.update(t).finalize(e),
                            o.reset();
                            for (var u = 1; u < c; u++)
                                n = o.finalize(n),
                                o.reset();
                            a.concat(n)
                        }
                        return a.sigBytes = 4 * l,
                        a
                    }
                });
                e.EvpKDF = function(t, e, n) {
                    return s.create(n).compute(t, e)
                }
            }(),
            t.EvpKDF
        }
        ))
    },
    "2ddf": function(t, e, n) {
        "use strict";
        n("cf94")
    },
    "2e33": function(t, e, n) {},
    3058: function(t, e, n) {},
    3199: function(t, e, n) {},
    3252: function(t, e, n) {
        (function(e, r) {
            t.exports = r(n("21bf"))
        }
        )(0, (function(t) {
            return function(e) {
                var n = t
                  , r = n.lib
                  , i = r.Base
                  , o = r.WordArray
                  , a = n.x64 = {};
                a.Word = i.extend({
                    init: function(t, e) {
                        this.high = t,
                        this.low = e
                    }
                }),
                a.WordArray = i.extend({
                    init: function(t, n) {
                        t = this.words = t || [],
                        this.sigBytes = n != e ? n : 8 * t.length
                    },
                    toX32: function() {
                        for (var t = this.words, e = t.length, n = [], r = 0; r < e; r++) {
                            var i = t[r];
                            n.push(i.high),
                            n.push(i.low)
                        }
                        return o.create(n, this.sigBytes)
                    },
                    clone: function() {
                        for (var t = i.clone.call(this), e = t.words = this.words.slice(0), n = e.length, r = 0; r < n; r++)
                            e[r] = e[r].clone();
                        return t
                    }
                })
            }(),
            t
        }
        ))
    },
    3452: function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("3252"), n("17e1"), n("a8ce"), n("1132"), n("c1bc"), n("72fe"), n("df2f"), n("94f8"), n("191b"), n("d6e6"), n("b86b"), n("e61b"), n("10b7"), n("5980"), n("7bbc"), n("2b79"), n("38ba"), n("00bb"), n("f4ea"), n("aaef"), n("4ba9"), n("81bf"), n("a817"), n("a11b"), n("8cef"), n("2a66"), n("b86c"), n("6d08"), n("c198"), n("a40e"), n("c3b6"), n("1382"), n("3d5a"))
        }
        )(0, (function(t) {
            return t
        }
        ))
    },
    "38ba": function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("2b79"))
        }
        )(0, (function(t) {
            t.lib.Cipher || function(e) {
                var n = t
                  , r = n.lib
                  , i = r.Base
                  , o = r.WordArray
                  , a = r.BufferedBlockAlgorithm
                  , s = n.enc
                  , l = (s.Utf8,
                s.Base64)
                  , c = n.algo
                  , u = c.EvpKDF
                  , h = r.Cipher = a.extend({
                    cfg: i.extend(),
                    createEncryptor: function(t, e) {
                        return this.create(this._ENC_XFORM_MODE, t, e)
                    },
                    createDecryptor: function(t, e) {
                        return this.create(this._DEC_XFORM_MODE, t, e)
                    },
                    init: function(t, e, n) {
                        this.cfg = this.cfg.extend(n),
                        this._xformMode = t,
                        this._key = e,
                        this.reset()
                    },
                    reset: function() {
                        a.reset.call(this),
                        this._doReset()
                    },
                    process: function(t) {
                        return this._append(t),
                        this._process()
                    },
                    finalize: function(t) {
                        t && this._append(t);
                        var e = this._doFinalize();
                        return e
                    },
                    keySize: 4,
                    ivSize: 4,
                    _ENC_XFORM_MODE: 1,
                    _DEC_XFORM_MODE: 2,
                    _createHelper: function() {
                        function t(t) {
                            return "string" == typeof t ? k : w
                        }
                        return function(e) {
                            return {
                                encrypt: function(n, r, i) {
                                    return t(r).encrypt(e, n, r, i)
                                },
                                decrypt: function(n, r, i) {
                                    return t(r).decrypt(e, n, r, i)
                                }
                            }
                        }
                    }()
                })
                  , f = (r.StreamCipher = h.extend({
                    _doFinalize: function() {
                        var t = this._process(!0);
                        return t
                    },
                    blockSize: 1
                }),
                n.mode = {})
                  , d = r.BlockCipherMode = i.extend({
                    createEncryptor: function(t, e) {
                        return this.Encryptor.create(t, e)
                    },
                    createDecryptor: function(t, e) {
                        return this.Decryptor.create(t, e)
                    },
                    init: function(t, e) {
                        this._cipher = t,
                        this._iv = e
                    }
                })
                  , p = f.CBC = function() {
                    var t = d.extend();
                    function n(t, n, r) {
                        var i, o = this._iv;
                        o ? (i = o,
                        this._iv = e) : i = this._prevBlock;
                        for (var a = 0; a < r; a++)
                            t[n + a] ^= i[a]
                    }
                    return t.Encryptor = t.extend({
                        processBlock: function(t, e) {
                            var r = this._cipher
                              , i = r.blockSize;
                            n.call(this, t, e, i),
                            r.encryptBlock(t, e),
                            this._prevBlock = t.slice(e, e + i)
                        }
                    }),
                    t.Decryptor = t.extend({
                        processBlock: function(t, e) {
                            var r = this._cipher
                              , i = r.blockSize
                              , o = t.slice(e, e + i);
                            r.decryptBlock(t, e),
                            n.call(this, t, e, i),
                            this._prevBlock = o
                        }
                    }),
                    t
                }()
                  , g = n.pad = {}
                  , v = g.Pkcs7 = {
                    pad: function(t, e) {
                        for (var n = 4 * e, r = n - t.sigBytes % n, i = r << 24 | r << 16 | r << 8 | r, a = [], s = 0; s < r; s += 4)
                            a.push(i);
                        var l = o.create(a, r);
                        t.concat(l)
                    },
                    unpad: function(t) {
                        var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                        t.sigBytes -= e
                    }
                }
                  , m = (r.BlockCipher = h.extend({
                    cfg: h.cfg.extend({
                        mode: p,
                        padding: v
                    }),
                    reset: function() {
                        var t;
                        h.reset.call(this);
                        var e = this.cfg
                          , n = e.iv
                          , r = e.mode;
                        this._xformMode == this._ENC_XFORM_MODE ? t = r.createEncryptor : (t = r.createDecryptor,
                        this._minBufferSize = 1),
                        this._mode && this._mode.__creator == t ? this._mode.init(this, n && n.words) : (this._mode = t.call(r, this, n && n.words),
                        this._mode.__creator = t)
                    },
                    _doProcessBlock: function(t, e) {
                        this._mode.processBlock(t, e)
                    },
                    _doFinalize: function() {
                        var t, e = this.cfg.padding;
                        return this._xformMode == this._ENC_XFORM_MODE ? (e.pad(this._data, this.blockSize),
                        t = this._process(!0)) : (t = this._process(!0),
                        e.unpad(t)),
                        t
                    },
                    blockSize: 4
                }),
                r.CipherParams = i.extend({
                    init: function(t) {
                        this.mixIn(t)
                    },
                    toString: function(t) {
                        return (t || this.formatter).stringify(this)
                    }
                }))
                  , y = n.format = {}
                  , b = y.OpenSSL = {
                    stringify: function(t) {
                        var e, n = t.ciphertext, r = t.salt;
                        return e = r ? o.create([1398893684, 1701076831]).concat(r).concat(n) : n,
                        e.toString(l)
                    },
                    parse: function(t) {
                        var e, n = l.parse(t), r = n.words;
                        return 1398893684 == r[0] && 1701076831 == r[1] && (e = o.create(r.slice(2, 4)),
                        r.splice(0, 4),
                        n.sigBytes -= 16),
                        m.create({
                            ciphertext: n,
                            salt: e
                        })
                    }
                }
                  , w = r.SerializableCipher = i.extend({
                    cfg: i.extend({
                        format: b
                    }),
                    encrypt: function(t, e, n, r) {
                        r = this.cfg.extend(r);
                        var i = t.createEncryptor(n, r)
                          , o = i.finalize(e)
                          , a = i.cfg;
                        return m.create({
                            ciphertext: o,
                            key: n,
                            iv: a.iv,
                            algorithm: t,
                            mode: a.mode,
                            padding: a.padding,
                            blockSize: t.blockSize,
                            formatter: r.format
                        })
                    },
                    decrypt: function(t, e, n, r) {
                        r = this.cfg.extend(r),
                        e = this._parse(e, r.format);
                        var i = t.createDecryptor(n, r).finalize(e.ciphertext);
                        return i
                    },
                    _parse: function(t, e) {
                        return "string" == typeof t ? e.parse(t, this) : t
                    }
                })
                  , x = n.kdf = {}
                  , _ = x.OpenSSL = {
                    execute: function(t, e, n, r) {
                        r || (r = o.random(8));
                        var i = u.create({
                            keySize: e + n
                        }).compute(t, r)
                          , a = o.create(i.words.slice(e), 4 * n);
                        return i.sigBytes = 4 * e,
                        m.create({
                            key: i,
                            iv: a,
                            salt: r
                        })
                    }
                }
                  , k = r.PasswordBasedCipher = w.extend({
                    cfg: w.cfg.extend({
                        kdf: _
                    }),
                    encrypt: function(t, e, n, r) {
                        r = this.cfg.extend(r);
                        var i = r.kdf.execute(n, t.keySize, t.ivSize);
                        r.iv = i.iv;
                        var o = w.encrypt.call(this, t, e, i.key, r);
                        return o.mixIn(i),
                        o
                    },
                    decrypt: function(t, e, n, r) {
                        r = this.cfg.extend(r),
                        e = this._parse(e, r.format);
                        var i = r.kdf.execute(n, t.keySize, t.ivSize, e.salt);
                        r.iv = i.iv;
                        var o = w.decrypt.call(this, t, e, i.key, r);
                        return o
                    }
                })
            }()
        }
        ))
    },
    "38f8": function(t, e, n) {},
    "3b13": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("JsonContent", {
                attrs: {
                    tip: t.tip,
                    formatType: t.formatType,
                    outputTip: t.outputTip
                }
            })], 1)
        }
          , i = []
          , o = n("d4ec")
          , a = n("262e")
          , s = n("2caf")
          , l = n("9ab4")
          , c = n("1b40")
          , u = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "container"
            }, [n("el-row", {
                attrs: {
                    gutter: 0
                }
            }, [n("el-col", {
                attrs: {
                    span: 11
                }
            }, [n("div", [n("el-input", {
                staticClass: "content",
                attrs: {
                    spellcheck: "false",
                    type: "textarea",
                    autofocus: "true",
                    placeholder: t.tip,
                    size: "medium",
                    rows: "40"
                },
                on: {
                    input: t.run
                },
                model: {
                    value: t.inputStr,
                    callback: function(e) {
                        t.inputStr = e
                    },
                    expression: "inputStr"
                }
            })], 1)]), n("el-col", {
                attrs: {
                    span: 13
                }
            }, [t.errorMsg.length > 0 ? n("div", {
                staticClass: "json_view"
            }, [n("div", {
                staticClass: "error"
            }, [n("div", {
                staticClass: "tip",
                domProps: {
                    innerHTML: t._s(t.errorMsg)
                }
            }), n("div", {
                staticClass: "code",
                attrs: {
                    contenteditable: "true",
                    spellcheck: "false"
                },
                domProps: {
                    innerHTML: t._s(t.errorCode)
                }
            })])]) : n("div", {
                staticClass: "json_view"
            }, [n("span", {
                staticClass: "operation"
            }, [n("el-button", {
                staticClass: "operation_btn",
                attrs: {
                    type: "text",
                    icon: "el-icon-d-caret"
                },
                on: {
                    click: t.close
                }
            }, [t._v(" " + t._s(t.closed ? "展开" : "折叠") + " ")]), n("el-button", {
                staticClass: "operation_btn",
                attrs: {
                    type: "text",
                    icon: "el-icon-files"
                },
                on: {
                    click: t.deepSelected
                }
            }, [t._v(" 层级: "), n("span", {
                attrs: {
                    id: "deep_input",
                    contenteditable: "true"
                },
                on: {
                    input: function(e) {
                        t.deep = parseInt(e.target.innerText)
                    },
                    blur: function(e) {
                        return t.verifyDeep(e.target.innerText)
                    }
                }
            }, [t._v(" " + t._s(t.deep) + " ")])]), n("el-button", {
                staticClass: "operation_btn",
                attrs: {
                    type: "text",
                    icon: "el-icon-c-scale-to-original"
                },
                on: {
                    click: t.delTranslation
                }
            }, [t._v(" " + t._s(t.translation ? "去除转义" : "转义") + " ")]), n("el-button", {
                staticClass: "operation_btn",
                attrs: {
                    type: "text",
                    icon: "el-icon-coin"
                },
                on: {
                    click: t.compress
                }
            }, [t._v(" 压缩 ")]), n("el-button", {
                staticClass: "operation_btn",
                attrs: {
                    type: "text",
                    icon: "el-icon-document-copy"
                },
                on: {
                    click: t.copyValue
                }
            }, [t._v(" 复制 ")])], 1), n("json-view", {
                staticStyle: {
                    "margin-top": "10px"
                },
                attrs: {
                    data: t.outputJSON,
                    closed: t.closed,
                    deep: t.deep,
                    translation: t.translation
                }
            })], 1)])], 1)], 1)
        }
          , h = []
          , f = n("1da1")
          , d = n("bee2")
          , p = (n("96cf"),
        n("ac1f"),
        n("5319"),
        n("d3b7"),
        n("25f0"),
        n("1276"),
        n("9e12"))
          , g = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return t.visible ? n("div", {
                class: ["json-view-container", t.theme, "deep-" + t.currentDeep]
            }, [n("div", {
                class: ["json-view", t.length ? "closeable" : ""],
                style: {
                    fontSize: t.fontSize + "px",
                    lineHeight: t.lineHeight + "px"
                }
            }, [t.length && "square" === t.iconStyle ? n("span", {
                staticClass: "angle",
                on: {
                    click: t.toggleClose
                }
            }, [t.innerclosed ? n("svg", {
                staticStyle: {
                    "vertical-align": "middle",
                    color: "rgb(42, 161, 152)",
                    height: "1em",
                    width: "1em"
                },
                attrs: {
                    fill: t.iconColors[0],
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 1792 1792"
                }
            }, [n("path", {
                attrs: {
                    d: "M1344 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"
                }
            })]) : t._e(), t.innerclosed ? t._e() : n("svg", {
                staticStyle: {
                    "vertical-align": "middle",
                    color: "rgb(88, 110, 117)",
                    height: "1em",
                    width: "1em"
                },
                attrs: {
                    fill: t.iconColors[1],
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 1792 1792"
                }
            }, [n("path", {
                attrs: {
                    d: "M1344 800v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z"
                }
            })])]) : t._e(), t.length && "circle" === t.iconStyle ? n("span", {
                staticClass: "angle",
                on: {
                    click: t.toggleClose
                }
            }, [t.innerclosed ? t._e() : n("svg", {
                staticStyle: {
                    "vertical-align": "middle",
                    color: "rgb(1, 160, 228)",
                    height: "1em",
                    width: "1em"
                },
                attrs: {
                    viewBox: "0 0 24 24",
                    fill: t.iconColors[0],
                    preserveAspectRatio: "xMidYMid meet"
                }
            }, [n("path", {
                attrs: {
                    d: "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7"
                }
            })]), t.innerclosed ? n("svg", {
                staticStyle: {
                    "vertical-align": "middle",
                    color: "rgb(161, 106, 148)",
                    height: "1em",
                    width: "1em"
                },
                attrs: {
                    viewBox: "0 0 24 24",
                    fill: t.iconColors[1],
                    preserveAspectRatio: "xMidYMid meet"
                }
            }, [n("path", {
                attrs: {
                    d: "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z"
                }
            })]) : t._e()]) : t._e(), t.length && "triangle" === t.iconStyle ? n("span", {
                staticClass: "angle",
                on: {
                    click: t.toggleClose
                }
            }, [t.innerclosed ? t._e() : n("svg", {
                staticStyle: {
                    "vertical-align": "top",
                    color: "#3c4047",
                    height: "1em",
                    width: "1em",
                    "padding-left": "2px"
                },
                attrs: {
                    viewBox: "0 0 15 15",
                    fill: t.iconColors[0]
                }
            }, [n("path", {
                attrs: {
                    d: "M0 5l6 6 6-6z"
                }
            })]), t.innerclosed ? n("svg", {
                staticStyle: {
                    "vertical-align": "top",
                    color: "#3c4047",
                    height: "1em",
                    width: "1em",
                    "padding-left": "2px"
                },
                attrs: {
                    viewBox: "0 0 15 15",
                    fill: t.iconColors[1]
                }
            }, [n("path", {
                attrs: {
                    d: "M0 14l6-6-6-6z"
                }
            })]) : t._e()]) : t._e(), n("div", {
                staticClass: "content-wrap"
            }, [n("p", {
                class: ["first-line", t.length > 0 ? "pointer" : ""],
                on: {
                    click: function(e) {
                        return t.showDataPath()
                    },
                    dblclick: function(e) {
                        return t.hideDataPath()
                    }
                }
            }, [t.jsonKey ? n("span", {
                staticClass: "json-key",
                attrs: {
                    contenteditable: "true"
                }
            }, [t._v('"' + t._s(t.jsonKey) + '"')]) : t._e(), t._v(" " + t._s(t.jsonKey ? ":" : "") + " "), t.length ? n("span", [t._v(t._s(t.prefix) + t._s(t.innerclosed ? "..." + t.subfix : "") + " "), n("span", {
                staticClass: "json-note"
            }, [t._v(t._s(t.innerclosed ? t.length + " items " : ""))])]) : t._e(), t.length ? t._e() : n("span", [t._v(t._s((t.isArray ? "[]" : "{}") + (t.isLast ? "" : ",")))]), t.showPath ? n("span", {
                staticClass: "json-note"
            }, [t._v("path: ")]) : t._e(), t.showPath ? n("span", {
                staticClass: "json-note",
                attrs: {
                    contenteditable: "true"
                }
            }, [t._v(t._s(t.path))]) : t._e(), t.showPath ? n("span", {
                staticClass: "json-operation"
            }, [n("a", {
                attrs: {
                    title: t.path
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.copyValue(t.path)
                    }
                }
            }, [t._v(" 复制路径 ")]), t._v(" | "), n("a", {
                on: {
                    click: function(e) {
                        e.stopPropagation(),
                        t.copyValue(JSON.stringify(t.data, null, 4))
                    }
                }
            }, [t._v(" 复制节点 ")])]) : t._e()]), !t.innerclosed && t.length ? n("div", {
                staticClass: "json-body"
            }, [t._l(t.items, (function(e, r) {
                return [e.isJSON ? n("json-view", {
                    key: r,
                    attrs: {
                        closed: t.isClose(),
                        data: e.value,
                        jsonKey: e.key,
                        currentDeep: t.templateDeep + 1,
                        deep: t.deep,
                        iconStyle: t.iconStyle,
                        theme: t.theme,
                        fontSize: t.fontSize,
                        lineHeight: t.lineHeight,
                        iconColor: t.iconColors,
                        isLast: r === t.items.length - 1,
                        hasSiblings: e.hasSiblings,
                        path: e.path,
                        translation: t.translation
                    }
                }) : n("div", {
                    key: r,
                    staticClass: "json-item"
                }, [n("span", {
                    staticClass: "json-key",
                    attrs: {
                        contenteditable: "true"
                    }
                }, [t._v(t._s(t.isArray ? "" : '"' + e.key + '"'))]), t._v(" " + t._s(t.isArray ? "" : ":") + " "), n("span", {
                    class: ["json-value", t.getDataType(e.value)]
                }, [t._v(t._s("string" === t.getDataType(e.value) ? '"' : ""))]), n("span", {
                    class: ["json-value", t.getDataType(e.value)],
                    attrs: {
                        contenteditable: "true"
                    }
                }, [t._v(t._s("" + t.formatValue(e.value)))]), n("span", {
                    class: ["json-value", t.getDataType(e.value)]
                }, [t._v(t._s("string" === t.getDataType(e.value) ? '"' : ""))]), t._v(" " + t._s(r === t.items.length - 1 ? "" : ",") + " ")])]
            }
            )), t.innerclosed ? t._e() : n("span", {
                staticClass: "base-line"
            })], 2) : t._e(), t.innerclosed ? t._e() : n("p", {
                staticClass: "last-line"
            }, [n("span", [t._v(t._s(t.subfix))])])])])]) : t._e()
        }
          , v = []
          , m = (n("a9e3"),
        n("b64b"),
        n("5b81"),
        n("fb6a"),
        n("caad"),
        n("2532"),
        n("d81d"),
        n("5c96"))
          , y = {
            name: "jsonView",
            props: {
                data: {
                    type: [Object, Array],
                    required: !0
                },
                jsonKey: {
                    type: String,
                    default: ""
                },
                path: {
                    type: String,
                    default: ""
                },
                closed: {
                    type: Boolean,
                    default: !1
                },
                translation: {
                    type: Boolean,
                    default: !0
                },
                isLast: {
                    type: Boolean,
                    default: !0
                },
                fontSize: {
                    type: Number,
                    default: 14
                },
                lineHeight: {
                    type: Number,
                    default: 24
                },
                deep: {
                    type: Number,
                    default: 5
                },
                currentDeep: {
                    type: Number,
                    default: 1
                },
                iconStyle: {
                    type: String,
                    default: "square"
                },
                iconColor: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                theme: {
                    type: String,
                    default: ""
                },
                hasSiblings: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    innerclosed: this.closed,
                    templateDeep: this.currentDeep,
                    visible: !1,
                    showPath: !1
                }
            },
            computed: {
                isArray: function() {
                    return "array" === this.getDataType(this.data)
                },
                length: function() {
                    return this.isArray ? this.data.length : Object.keys(this.data).length
                },
                subfix: function() {
                    var t = this.data;
                    return this.isEmptyArrayOrObject(t) ? "" : (this.isArray ? "]" : "}") + (this.isLast ? "" : ",")
                },
                prefix: function() {
                    return this.isArray ? "[" : "{"
                },
                items: function() {
                    var t = this.data
                      , e = this.getItems(t, this.path);
                    return e
                },
                iconColors: function() {
                    var t = this.theme
                      , e = this.iconColor;
                    return 2 === e.length ? e : "one-dark" === t ? ["#747983", "#747983"] : "vs-code" === t ? ["#c6c6c6", "#c6c6c6"] : ["#747983", "#747983"]
                }
            },
            mounted: function() {
                var t = this;
                setTimeout((function() {
                    t.visible = !0
                }
                ), 0)
            },
            methods: {
                _isArray: function(t) {
                    return "array" === this.getDataType(t)
                },
                _isObject: function(t) {
                    return "object" === this.getDataType(t)
                },
                getItems: function(t, e) {
                    var n = [];
                    if (this._isArray(t))
                        for (var r = 0; r < t.length; r++) {
                            var i = e
                              , o = t[r]
                              , a = this.isObjectOrArray(o);
                            i = i + "[" + r + "]",
                            n.push({
                                value: o,
                                isJSON: a,
                                key: "",
                                path: i
                            })
                        }
                    else if (this._isObject(t))
                        for (var s in t) {
                            var l = e
                              , c = t[s]
                              , u = this.isObjectOrArray(c);
                            l = l + '["' + s + '"]',
                            n.push({
                                value: c,
                                isJSON: u,
                                key: s,
                                path: l
                            })
                        }
                    return n
                },
                formatValue: function(t) {
                    return t && t._isBigNumber ? t.toString(10) : "string" === this.getDataType(t) && this.translation ? t.replaceAll('"', '\\"') : t
                },
                getDataType: function(t) {
                    return t && t._isBigNumber ? "number" : Object.prototype.toString.call(t).slice(8, -1).toLowerCase()
                },
                isObjectOrArray: function(t) {
                    return ["array", "object"].includes(this.getDataType(t))
                },
                toggleClose: function() {
                    0 !== this.length && (this.innerclosed ? this.innerclosed = !1 : this.innerclosed = !0)
                },
                showDataPath: function() {
                    return this.showPath = !0,
                    this.showPath
                },
                hideDataPath: function() {
                    return this.showPath = !1,
                    this.showPath
                },
                copyValue: function(t) {
                    this.$copyText(t).then((function(t) {
                        Object(m["Notification"])({
                            title: "成功",
                            message: "成功复制到剪切板",
                            type: "success",
                            duration: 1500
                        })
                    }
                    ), (function(t) {
                        Object(m["Notification"])({
                            title: "失败",
                            message: "复制失败",
                            type: "error",
                            duration: 1500
                        })
                    }
                    ))
                },
                isClose: function() {
                    return this.templateDeep + 1 > this.deep
                },
                isEmptyArrayOrObject: function(t) {
                    return [{}, []].map((function(t) {
                        return JSON.stringify(t)
                    }
                    )).includes(JSON.stringify(t))
                }
            },
            watch: {
                closed: function() {
                    this.innerclosed = this.closed
                }
            }
        }
          , b = y
          , w = b
          , x = (n("d428"),
        n("2877"))
          , _ = Object(x["a"])(w, g, v, !1, null, "1efa570a", null)
          , k = _.exports
          , C = n("266e")
          , S = n("dba0")
          , T = n.n(S)
          , O = function(t) {
            Object(a["a"])(n, t);
            var e = Object(s["a"])(n);
            function n() {
                var t;
                return Object(o["a"])(this, n),
                t = e.apply(this, arguments),
                t.inputStr = "",
                t.outputJSON = "",
                t.closed = !1,
                t.translation = !0,
                t.deep = 5,
                t.errorMsg = "",
                t.errorCode = "",
                t.randomkey = 1231231,
                t.options = {
                    selectOnLineNumbers: !0,
                    roundedSelection: !0,
                    readOnly: !1,
                    cursorStyle: "line",
                    automaticLayout: !1,
                    glyphMargin: !0,
                    renderLineHighlight: null,
                    hideCursorInOverviewRuler: !0,
                    wordWrap: "on",
                    scrollbar: {
                        vertical: "hidden"
                    }
                },
                t
            }
            return Object(d["a"])(n, [{
                key: "createRamdomKey",
                value: function() {
                    return Math.floor(0xe8d4a54019 * Math.random())
                }
            }, {
                key: "trimStr",
                value: function(t) {
                    return t.replace(/(^\s*)|(\s*$)/g, "")
                }
            }, {
                key: "created",
                value: function() {
                    this.outputJSON = JSON.parse(this.outputTip);
                    var t = this;
                    window.onresize = function() {
                        t.randomkey = t.createRamdomKey()
                    }
                }
            }, {
                key: "run",
                value: function() {
                    var t = Object(f["a"])(regeneratorRuntime.mark((function t() {
                        var e, n, r, i, o, a, s, l, c, u, h, f;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.errorMsg = "",
                                    this.errorCode = "",
                                    e = this.trimStr(this.inputStr),
                                    !(e.length > 0)) {
                                        t.next = 21;
                                        break
                                    }
                                    e = e.replace(/\n/gm, ""),
                                    e = e.replace(/\t/gm, "    "),
                                    e = e.replace(/undefined/gm, "null"),
                                    e = e.replace(/ObjectId\((.*?)\)/gm, "$1"),
                                    n = /[{\\[][^]*[}\]]/gm.exec(e),
                                    n && (e = n.toString()),
                                    t.prev = 10,
                                    this.outputJSON = JSON.parse(e),
                                    t.next = 21;
                                    break;
                                case 14:
                                    return t.prev = 14,
                                    t.t0 = t["catch"](10),
                                    t.next = 18,
                                    Object(p["b"])({
                                        format_type: this.formatType,
                                        input_str: e
                                    });
                                case 18:
                                    if (r = t.sent,
                                    i = r.data,
                                    i)
                                        this.outputJSON = i;
                                    else if (o = Object(C["a"])(e),
                                    null !== o && void 0 !== o && o.success)
                                        this.outputJSON = o.data;
                                    else if (a = null === o || void 0 === o ? void 0 : o.data,
                                    this.errorMsg = null === o || void 0 === o ? void 0 : o.error_msg,
                                    s = null === o || void 0 === o ? void 0 : o.line_start,
                                    l = null === o || void 0 === o ? void 0 : o.line_end,
                                    void 0 != s && void 0 != l) {
                                        for (c = a.substr(s, l - s),
                                        c = a.substr(0, s) + '<span style="color: red;background-color: #f56c6c5e;font-weight: bold;display: block;">'.concat(c, "</span>\n") + a.substr(l + 1),
                                        u = c.split("\n"),
                                        c = "<ol>",
                                        h = 0; h < u.length; h++)
                                            f = u[h],
                                            f.length > 0 && (c += "<li>".concat(f, "</li>"));
                                        c += "</ol>",
                                        this.errorCode = c
                                    }
                                case 21:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[10, 14]])
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "close",
                value: function() {
                    this.closed = !this.closed
                }
            }, {
                key: "delTranslation",
                value: function() {
                    this.translation = !this.translation
                }
            }, {
                key: "deepSelected",
                value: function() {
                    var t = document.querySelector("#deep_input");
                    t.focus(),
                    document.execCommand("selectAll", !1, "")
                }
            }, {
                key: "compress",
                value: function() {
                    this.inputStr = JSON.stringify(this.outputJSON),
                    this.randomkey = this.createRamdomKey()
                }
            }, {
                key: "verifyDeep",
                value: function(t) {
                    var e, n = 5;
                    try {
                        e = parseInt(t),
                        e || (e = n),
                        e = e < 0 ? 0 : e
                    } catch (i) {
                        e = n
                    }
                    this.deep = e;
                    var r = document.querySelector("#deep_input");
                    return r.innerText = String(this.deep),
                    e
                }
            }, {
                key: "copyValue",
                value: function() {
                    var t = JSON.stringify(this.outputJSON, null, 4);
                    this.$copyText(t).then((function(t) {
                        Object(m["Notification"])({
                            title: "成功",
                            message: "成功复制到剪切板",
                            type: "success",
                            duration: 1500
                        })
                    }
                    ), (function(t) {
                        Object(m["Notification"])({
                            title: "失败",
                            message: "复制失败",
                            type: "error",
                            duration: 1500
                        })
                    }
                    ))
                }
            }]),
            n
        }(c["c"]);
        Object(l["a"])([Object(c["b"])()], O.prototype, "tip", void 0),
        Object(l["a"])([Object(c["b"])()], O.prototype, "outputTip", void 0),
        Object(l["a"])([Object(c["b"])()], O.prototype, "formatType", void 0),
        O = Object(l["a"])([Object(c["a"])({
            components: {
                jsonView: k,
                MonacoEditor: T.a
            }
        })], O);
        var A = O
          , L = A
          , M = (n("4a29"),
        n("fc18"),
        Object(x["a"])(L, u, h, !1, null, "9f75b674", null))
          , E = M.exports
          , D = function(t) {
            Object(a["a"])(n, t);
            var e = Object(s["a"])(n);
            function n() {
                var t;
                return Object(o["a"])(this, n),
                t = e.apply(this, arguments),
                t.formatType = "format_json",
                t.tip = "",
                t.outputTip = '{\n    "tip1": "支持python dict",\n    "tip2": "支持编辑 key value",\n    "tip3": "我包含双引号，\\"哈哈哈\\"，可一键将我转义与反转义",\n    "tip4": "双击值为JSON array 或 JSON object的行可显示节点路径",\n    "双击本行试试": {\n        "hi": 1\n    },\n    "双击本行再试试": [\n        666,\n        {\n            "双击我的上一行试试": "got it"\n        }\n    ]\n}',
                t
            }
            return n
        }(c["c"]);
        D = Object(l["a"])([Object(c["a"])({
            components: {
                JsonContent: E
            }
        })], D);
        var N = D
          , R = N
          , j = Object(x["a"])(R, r, i, !1, null, "6643b26b", null);
        e["default"] = j.exports
    },
    "3d5a": function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("1132"), n("72fe"), n("2b79"), n("38ba"))
        }
        )(0, (function(t) {
            return function() {
                var e = t
                  , n = e.lib
                  , r = n.StreamCipher
                  , i = e.algo
                  , o = []
                  , a = []
                  , s = []
                  , l = i.RabbitLegacy = r.extend({
                    _doReset: function() {
                        var t = this._key.words
                          , e = this.cfg.iv
                          , n = this._X = [t[0], t[3] << 16 | t[2] >>> 16, t[1], t[0] << 16 | t[3] >>> 16, t[2], t[1] << 16 | t[0] >>> 16, t[3], t[2] << 16 | t[1] >>> 16]
                          , r = this._C = [t[2] << 16 | t[2] >>> 16, 4294901760 & t[0] | 65535 & t[1], t[3] << 16 | t[3] >>> 16, 4294901760 & t[1] | 65535 & t[2], t[0] << 16 | t[0] >>> 16, 4294901760 & t[2] | 65535 & t[3], t[1] << 16 | t[1] >>> 16, 4294901760 & t[3] | 65535 & t[0]];
                        this._b = 0;
                        for (var i = 0; i < 4; i++)
                            c.call(this);
                        for (i = 0; i < 8; i++)
                            r[i] ^= n[i + 4 & 7];
                        if (e) {
                            var o = e.words
                              , a = o[0]
                              , s = o[1]
                              , l = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8)
                              , u = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                              , h = l >>> 16 | 4294901760 & u
                              , f = u << 16 | 65535 & l;
                            r[0] ^= l,
                            r[1] ^= h,
                            r[2] ^= u,
                            r[3] ^= f,
                            r[4] ^= l,
                            r[5] ^= h,
                            r[6] ^= u,
                            r[7] ^= f;
                            for (i = 0; i < 4; i++)
                                c.call(this)
                        }
                    },
                    _doProcessBlock: function(t, e) {
                        var n = this._X;
                        c.call(this),
                        o[0] = n[0] ^ n[5] >>> 16 ^ n[3] << 16,
                        o[1] = n[2] ^ n[7] >>> 16 ^ n[5] << 16,
                        o[2] = n[4] ^ n[1] >>> 16 ^ n[7] << 16,
                        o[3] = n[6] ^ n[3] >>> 16 ^ n[1] << 16;
                        for (var r = 0; r < 4; r++)
                            o[r] = 16711935 & (o[r] << 8 | o[r] >>> 24) | 4278255360 & (o[r] << 24 | o[r] >>> 8),
                            t[e + r] ^= o[r]
                    },
                    blockSize: 4,
                    ivSize: 2
                });
                function c() {
                    for (var t = this._X, e = this._C, n = 0; n < 8; n++)
                        a[n] = e[n];
                    e[0] = e[0] + 1295307597 + this._b | 0,
                    e[1] = e[1] + 3545052371 + (e[0] >>> 0 < a[0] >>> 0 ? 1 : 0) | 0,
                    e[2] = e[2] + 886263092 + (e[1] >>> 0 < a[1] >>> 0 ? 1 : 0) | 0,
                    e[3] = e[3] + 1295307597 + (e[2] >>> 0 < a[2] >>> 0 ? 1 : 0) | 0,
                    e[4] = e[4] + 3545052371 + (e[3] >>> 0 < a[3] >>> 0 ? 1 : 0) | 0,
                    e[5] = e[5] + 886263092 + (e[4] >>> 0 < a[4] >>> 0 ? 1 : 0) | 0,
                    e[6] = e[6] + 1295307597 + (e[5] >>> 0 < a[5] >>> 0 ? 1 : 0) | 0,
                    e[7] = e[7] + 3545052371 + (e[6] >>> 0 < a[6] >>> 0 ? 1 : 0) | 0,
                    this._b = e[7] >>> 0 < a[7] >>> 0 ? 1 : 0;
                    for (n = 0; n < 8; n++) {
                        var r = t[n] + e[n]
                          , i = 65535 & r
                          , o = r >>> 16
                          , l = ((i * i >>> 17) + i * o >>> 15) + o * o
                          , c = ((4294901760 & r) * r | 0) + ((65535 & r) * r | 0);
                        s[n] = l ^ c
                    }
                    t[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0,
                    t[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0,
                    t[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0,
                    t[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0,
                    t[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0,
                    t[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0,
                    t[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0,
                    t[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0
                }
                e.RabbitLegacy = r._createHelper(l)
            }(),
            t.RabbitLegacy
        }
        ))
    },
    "3e05": function(t, e) {
        t.exports = {
            load(t="https://as.alipayobjects.com/g/cicada/monaco-editor-mirror/0.6.1/min", e) {
                if (window.monaco)
                    return void e();
                const n = {
                    paths: {
                        vs: t + "/vs"
                    }
                }
                  , r = n.paths.vs + "/loader.js"
                  , i = ()=>{
                    if (window.LOADER_PENDING && window.require.config(n),
                    window.require(["vs/editor/editor.main"], ()=>{
                        e()
                    }
                    ),
                    window.LOADER_PENDING) {
                        window.LOADER_PENDING = !1;
                        const t = window.LOADER_CALLBACKS;
                        if (t && t.length) {
                            let e = t.shift();
                            while (e)
                                e.fn.call(e.window),
                                e = t.shift()
                        }
                    }
                }
                ;
                if (window.LOADER_PENDING)
                    window.LOADER_CALLBACKS = window.LOADER_CALLBACKS || [],
                    window.LOADER_CALLBACKS.push({
                        window: this,
                        fn: i
                    });
                else if ("undefined" === typeof window.require) {
                    const t = window.document.createElement("script");
                    t.type = "text/javascript",
                    t.src = r,
                    t.addEventListener("load", i),
                    window.document.body.appendChild(t),
                    window.LOADER_PENDING = !0
                } else
                    i()
            }
        }
    },
    "3ec6": function(t, e, n) {
        "use strict";
        n("446b")
    },
    "408a": function(t, e) {
        var n = 1..valueOf;
        t.exports = function(t) {
            return n.call(t)
        }
    },
    "446b": function(t, e, n) {},
    "44e7": function(t, e, n) {
        var r = n("861d")
          , i = n("c6b6")
          , o = n("b622")
          , a = o("match");
        t.exports = function(t) {
            var e;
            return r(t) && (void 0 !== (e = t[a]) ? !!e : "RegExp" == i(t))
        }
    },
    "466d": function(t, e, n) {
        "use strict";
        var r = n("d784")
          , i = n("825a")
          , o = n("50c4")
          , a = n("577e")
          , s = n("1d80")
          , l = n("dc4a")
          , c = n("8aa5")
          , u = n("14c3");
        r("match", (function(t, e, n) {
            return [function(e) {
                var n = s(this)
                  , r = void 0 == e ? void 0 : l(e, t);
                return r ? r.call(e, n) : new RegExp(e)[t](a(n))
            }
            , function(t) {
                var r = i(this)
                  , s = a(t)
                  , l = n(e, r, s);
                if (l.done)
                    return l.value;
                if (!r.global)
                    return u(r, s);
                var h = r.unicode;
                r.lastIndex = 0;
                var f, d = [], p = 0;
                while (null !== (f = u(r, s))) {
                    var g = a(f[0]);
                    d[p] = g,
                    "" === g && (r.lastIndex = c(s, o(r.lastIndex), h)),
                    p++
                }
                return 0 === p ? null : d
            }
            ]
        }
        ))
    },
    "498a": function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , i = n("58a8").trim
          , o = n("c8d2");
        r({
            target: "String",
            proto: !0,
            forced: o("trim")
        }, {
            trim: function() {
                return i(this)
            }
        })
    },
    "4a29": function(t, e, n) {
        "use strict";
        n("3199")
    },
    "4ba9": function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("38ba"))
        }
        )(0, (function(t) {
            return t.mode.OFB = function() {
                var e = t.lib.BlockCipherMode.extend()
                  , n = e.Encryptor = e.extend({
                    processBlock: function(t, e) {
                        var n = this._cipher
                          , r = n.blockSize
                          , i = this._iv
                          , o = this._keystream;
                        i && (o = this._keystream = i.slice(0),
                        this._iv = void 0),
                        n.encryptBlock(o, 0);
                        for (var a = 0; a < r; a++)
                            t[e + a] ^= o[a]
                    }
                });
                return e.Decryptor = n,
                e
            }(),
            t.mode.OFB
        }
        ))
    },
    "4d63": function(t, e, n) {
        var r = n("83ab")
          , i = n("da84")
          , o = n("94ca")
          , a = n("7156")
          , s = n("9112")
          , l = n("9bf2").f
          , c = n("241c").f
          , u = n("44e7")
          , h = n("577e")
          , f = n("ad6d")
          , d = n("9f7f")
          , p = n("6eeb")
          , g = n("d039")
          , v = n("1a2d")
          , m = n("69f3").enforce
          , y = n("2626")
          , b = n("b622")
          , w = n("fce3")
          , x = n("107c")
          , _ = b("match")
          , k = i.RegExp
          , C = k.prototype
          , S = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/
          , T = /a/g
          , O = /a/g
          , A = new k(T) !== T
          , L = d.UNSUPPORTED_Y
          , M = r && (!A || L || w || x || g((function() {
            return O[_] = !1,
            k(T) != T || k(O) == O || "/a/i" != k(T, "i")
        }
        )))
          , E = function(t) {
            for (var e, n = t.length, r = 0, i = "", o = !1; r <= n; r++)
                e = t.charAt(r),
                "\\" !== e ? o || "." !== e ? ("[" === e ? o = !0 : "]" === e && (o = !1),
                i += e) : i += "[\\s\\S]" : i += e + t.charAt(++r);
            return i
        }
          , D = function(t) {
            for (var e, n = t.length, r = 0, i = "", o = [], a = {}, s = !1, l = !1, c = 0, u = ""; r <= n; r++) {
                if (e = t.charAt(r),
                "\\" === e)
                    e += t.charAt(++r);
                else if ("]" === e)
                    s = !1;
                else if (!s)
                    switch (!0) {
                    case "[" === e:
                        s = !0;
                        break;
                    case "(" === e:
                        S.test(t.slice(r + 1)) && (r += 2,
                        l = !0),
                        i += e,
                        c++;
                        continue;
                    case ">" === e && l:
                        if ("" === u || v(a, u))
                            throw new SyntaxError("Invalid capture group name");
                        a[u] = !0,
                        o.push([u, c]),
                        l = !1,
                        u = "";
                        continue
                    }
                l ? u += e : i += e
            }
            return [i, o]
        };
        if (o("RegExp", M)) {
            for (var N = function(t, e) {
                var n, r, i, o, l, c, d = this instanceof N, p = u(t), g = void 0 === e, v = [], y = t;
                if (!d && p && g && t.constructor === N)
                    return t;
                if ((p || t instanceof N) && (t = t.source,
                g && (e = "flags"in y ? y.flags : f.call(y))),
                t = void 0 === t ? "" : h(t),
                e = void 0 === e ? "" : h(e),
                y = t,
                w && "dotAll"in T && (r = !!e && e.indexOf("s") > -1,
                r && (e = e.replace(/s/g, ""))),
                n = e,
                L && "sticky"in T && (i = !!e && e.indexOf("y") > -1,
                i && (e = e.replace(/y/g, ""))),
                x && (o = D(t),
                t = o[0],
                v = o[1]),
                l = a(k(t, e), d ? this : C, N),
                (r || i || v.length) && (c = m(l),
                r && (c.dotAll = !0,
                c.raw = N(E(t), n)),
                i && (c.sticky = !0),
                v.length && (c.groups = v)),
                t !== y)
                    try {
                        s(l, "source", "" === y ? "(?:)" : y)
                    } catch (b) {}
                return l
            }, R = function(t) {
                t in N || l(N, t, {
                    configurable: !0,
                    get: function() {
                        return k[t]
                    },
                    set: function(e) {
                        k[t] = e
                    }
                })
            }, j = c(k), H = 0; j.length > H; )
                R(j[H++]);
            C.constructor = N,
            N.prototype = C,
            p(i, "RegExp", N)
        }
        y("RegExp")
    },
    "4de4": function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , i = n("b727").filter
          , o = n("1dde")
          , a = o("filter");
        r({
            target: "Array",
            proto: !0,
            forced: !a
        }, {
            filter: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    },
    5275: function(t, e, n) {
        "use strict";
        n("2e33")
    },
    "53ca": function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }
        ));
        n("a4d3"),
        n("e01a"),
        n("d3b7"),
        n("d28b"),
        n("3ca3"),
        n("ddb0");
        function r(t) {
            return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            r(t)
        }
    },
    5502: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("IframeContent", {
                attrs: {
                    tip: t.tip,
                    formatType: t.formatType,
                    outputTip: t.outputTip
                }
            })], 1)
        }
          , i = []
          , o = n("d4ec")
          , a = n("262e")
          , s = n("2caf")
          , l = n("9ab4")
          , c = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "container"
            }, [n("el-row", {
                attrs: {
                    gutter: 0
                }
            }, [n("el-col", {
                attrs: {
                    span: 11
                }
            }, [n("div", {
                staticClass: "code_content"
            }, [n("MonacoEditor", {
                key: t.randomkey,
                attrs: {
                    code: t.tip,
                    editorOptions: t.options,
                    language: t.language,
                    theme: "vs"
                },
                on: {
                    codeChange: t.onCodeChange,
                    mounted: t.onMounted
                }
            })], 1)]), n("el-col", {
                attrs: {
                    span: 13
                }
            }, [n("div", {
                staticClass: "htmlContent"
            }, [n("iframe", {
                attrs: {
                    id: "iframeResult",
                    srcdoc: t.outputStr
                }
            })])])], 1)], 1)
        }
          , u = []
          , h = n("bee2")
          , f = (n("ac1f"),
        n("5319"),
        n("1b40"))
          , d = n("dba0")
          , p = n.n(d)
          , g = function(t) {
            Object(a["a"])(n, t);
            var e = Object(s["a"])(n);
            function n() {
                var t;
                return Object(o["a"])(this, n),
                t = e.apply(this, arguments),
                t.inputStr = "",
                t.outputStr = "",
                t.options = {
                    selectOnLineNumbers: !0,
                    roundedSelection: !0,
                    readOnly: !1,
                    cursorStyle: "line",
                    automaticLayout: !1,
                    glyphMargin: !0,
                    renderLineHighlight: null,
                    hideCursorInOverviewRuler: !0,
                    scrollbar: {
                        vertical: "hidden"
                    }
                },
                t.randomkey = 1231231,
                t
            }
            return Object(h["a"])(n, [{
                key: "trimStr",
                value: function(t) {
                    return t.replace(/(^\s*)|(\s*$)/g, "")
                }
            }, {
                key: "created",
                value: function() {
                    this.outputStr = this.outputTip ? this.outputTip : this.tip;
                    var t = this;
                    window.onresize = function() {
                        t.randomkey = t.createRamdomKey()
                    }
                }
            }, {
                key: "onMounted",
                value: function(t) {
                    t.updateOptions(this.options)
                }
            }, {
                key: "onCodeChange",
                value: function(t) {
                    this.outputStr = t.getValue()
                }
            }, {
                key: "createRamdomKey",
                value: function() {
                    return Math.floor(0xe8d4a54019 * Math.random())
                }
            }]),
            n
        }(f["c"]);
        Object(l["a"])([Object(f["b"])({
            default: ""
        })], g.prototype, "tip", void 0),
        Object(l["a"])([Object(f["b"])({
            default: ""
        })], g.prototype, "outputTip", void 0),
        Object(l["a"])([Object(f["b"])({
            default: ""
        })], g.prototype, "formatType", void 0),
        Object(l["a"])([Object(f["b"])({
            default: "html"
        })], g.prototype, "language", void 0),
        g = Object(l["a"])([Object(f["a"])({
            components: {
                MonacoEditor: p.a
            }
        })], g);
        var v = g
          , m = v
          , y = (n("d9e3"),
        n("2877"))
          , b = Object(y["a"])(m, c, u, !1, null, "8e1e962e", null)
          , w = b.exports
          , x = function(t) {
            Object(a["a"])(n, t);
            var e = Object(s["a"])(n);
            function n() {
                var t;
                return Object(o["a"])(this, n),
                t = e.apply(this, arguments),
                t.formatType = "render_html",
                t.tip = "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n\n<h1>这是标题 1</h1>\n<h2>这是标题 2</h2>\n<h3>这是标题 3</h3>\n<h4>这是标题 4</h4>\n<h5>这是标题 5</h5>\n<h6>这是标题 6</h6>\n\n</body>\n</html>\n",
                t.outputTip = "",
                t
            }
            return n
        }(f["c"]);
        x = Object(l["a"])([Object(f["a"])({
            components: {
                IframeContent: w
            }
        })], x);
        var _ = x
          , k = _
          , C = Object(y["a"])(k, r, i, !1, null, "e2834c1a", null);
        e["default"] = C.exports
    },
    "56b3": function(t, e, n) {
        (function(e, n) {
            t.exports = n()
        }
        )(0, (function() {
            "use strict";
            var t = navigator.userAgent
              , e = navigator.platform
              , n = /gecko\/\d/i.test(t)
              , r = /MSIE \d/.test(t)
              , i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(t)
              , o = /Edge\/(\d+)/.exec(t)
              , a = r || i || o
              , s = a && (r ? document.documentMode || 6 : +(o || i)[1])
              , l = !o && /WebKit\//.test(t)
              , c = l && /Qt\/\d+\.\d+/.test(t)
              , u = !o && /Chrome\//.test(t)
              , h = /Opera\//.test(t)
              , f = /Apple Computer/.test(navigator.vendor)
              , d = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(t)
              , p = /PhantomJS/.test(t)
              , g = f && (/Mobile\/\w+/.test(t) || navigator.maxTouchPoints > 2)
              , v = /Android/.test(t)
              , m = g || v || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(t)
              , y = g || /Mac/.test(e)
              , b = /\bCrOS\b/.test(t)
              , w = /win/i.test(e)
              , x = h && t.match(/Version\/(\d*\.\d*)/);
            x && (x = Number(x[1])),
            x && x >= 15 && (h = !1,
            l = !0);
            var _ = y && (c || h && (null == x || x < 12.11))
              , k = n || a && s >= 9;
            function C(t) {
                return new RegExp("(^|\\s)" + t + "(?:$|\\s)\\s*")
            }
            var S, T = function(t, e) {
                var n = t.className
                  , r = C(e).exec(n);
                if (r) {
                    var i = n.slice(r.index + r[0].length);
                    t.className = n.slice(0, r.index) + (i ? r[1] + i : "")
                }
            };
            function O(t) {
                for (var e = t.childNodes.length; e > 0; --e)
                    t.removeChild(t.firstChild);
                return t
            }
            function A(t, e) {
                return O(t).appendChild(e)
            }
            function L(t, e, n, r) {
                var i = document.createElement(t);
                if (n && (i.className = n),
                r && (i.style.cssText = r),
                "string" == typeof e)
                    i.appendChild(document.createTextNode(e));
                else if (e)
                    for (var o = 0; o < e.length; ++o)
                        i.appendChild(e[o]);
                return i
            }
            function M(t, e, n, r) {
                var i = L(t, e, n, r);
                return i.setAttribute("role", "presentation"),
                i
            }
            function E(t, e) {
                if (3 == e.nodeType && (e = e.parentNode),
                t.contains)
                    return t.contains(e);
                do {
                    if (11 == e.nodeType && (e = e.host),
                    e == t)
                        return !0
                } while (e = e.parentNode)
            }
            function D() {
                var t;
                try {
                    t = document.activeElement
                } catch (e) {
                    t = document.body || null
                }
                while (t && t.shadowRoot && t.shadowRoot.activeElement)
                    t = t.shadowRoot.activeElement;
                return t
            }
            function N(t, e) {
                var n = t.className;
                C(e).test(n) || (t.className += (n ? " " : "") + e)
            }
            function R(t, e) {
                for (var n = t.split(" "), r = 0; r < n.length; r++)
                    n[r] && !C(n[r]).test(e) && (e += " " + n[r]);
                return e
            }
            S = document.createRange ? function(t, e, n, r) {
                var i = document.createRange();
                return i.setEnd(r || t, n),
                i.setStart(t, e),
                i
            }
            : function(t, e, n) {
                var r = document.body.createTextRange();
                try {
                    r.moveToElementText(t.parentNode)
                } catch (i) {
                    return r
                }
                return r.collapse(!0),
                r.moveEnd("character", n),
                r.moveStart("character", e),
                r
            }
            ;
            var j = function(t) {
                t.select()
            };
            function H(t) {
                var e = Array.prototype.slice.call(arguments, 1);
                return function() {
                    return t.apply(null, e)
                }
            }
            function B(t, e, n) {
                for (var r in e || (e = {}),
                t)
                    !t.hasOwnProperty(r) || !1 === n && e.hasOwnProperty(r) || (e[r] = t[r]);
                return e
            }
            function I(t, e, n, r, i) {
                null == e && (e = t.search(/[^\s\u00a0]/),
                -1 == e && (e = t.length));
                for (var o = r || 0, a = i || 0; ; ) {
                    var s = t.indexOf("\t", o);
                    if (s < 0 || s >= e)
                        return a + (e - o);
                    a += s - o,
                    a += n - a % n,
                    o = s + 1
                }
            }
            g ? j = function(t) {
                t.selectionStart = 0,
                t.selectionEnd = t.value.length
            }
            : a && (j = function(t) {
                try {
                    t.select()
                } catch (e) {}
            }
            );
            var P = function() {
                this.id = null,
                this.f = null,
                this.time = 0,
                this.handler = H(this.onTimeout, this)
            };
            function F(t, e) {
                for (var n = 0; n < t.length; ++n)
                    if (t[n] == e)
                        return n;
                return -1
            }
            P.prototype.onTimeout = function(t) {
                t.id = 0,
                t.time <= +new Date ? t.f() : setTimeout(t.handler, t.time - +new Date)
            }
            ,
            P.prototype.set = function(t, e) {
                this.f = e;
                var n = +new Date + t;
                (!this.id || n < this.time) && (clearTimeout(this.id),
                this.id = setTimeout(this.handler, t),
                this.time = n)
            }
            ;
            var z = 50
              , W = {
                toString: function() {
                    return "CodeMirror.Pass"
                }
            }
              , K = {
                scroll: !1
            }
              , U = {
                origin: "*mouse"
            }
              , V = {
                origin: "+move"
            };
            function $(t, e, n) {
                for (var r = 0, i = 0; ; ) {
                    var o = t.indexOf("\t", r);
                    -1 == o && (o = t.length);
                    var a = o - r;
                    if (o == t.length || i + a >= e)
                        return r + Math.min(a, e - i);
                    if (i += o - r,
                    i += n - i % n,
                    r = o + 1,
                    i >= e)
                        return r
                }
            }
            var q = [""];
            function G(t) {
                while (q.length <= t)
                    q.push(X(q) + " ");
                return q[t]
            }
            function X(t) {
                return t[t.length - 1]
            }
            function J(t, e) {
                for (var n = [], r = 0; r < t.length; r++)
                    n[r] = e(t[r], r);
                return n
            }
            function Y(t, e, n) {
                var r = 0
                  , i = n(e);
                while (r < t.length && n(t[r]) <= i)
                    r++;
                t.splice(r, 0, e)
            }
            function Z() {}
            function Q(t, e) {
                var n;
                return Object.create ? n = Object.create(t) : (Z.prototype = t,
                n = new Z),
                e && B(e, n),
                n
            }
            var tt = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
            function et(t) {
                return /\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || tt.test(t))
            }
            function nt(t, e) {
                return e ? !!(e.source.indexOf("\\w") > -1 && et(t)) || e.test(t) : et(t)
            }
            function rt(t) {
                for (var e in t)
                    if (t.hasOwnProperty(e) && t[e])
                        return !1;
                return !0
            }
            var it = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
            function ot(t) {
                return t.charCodeAt(0) >= 768 && it.test(t)
            }
            function at(t, e, n) {
                while ((n < 0 ? e > 0 : e < t.length) && ot(t.charAt(e)))
                    e += n;
                return e
            }
            function st(t, e, n) {
                for (var r = e > n ? -1 : 1; ; ) {
                    if (e == n)
                        return e;
                    var i = (e + n) / 2
                      , o = r < 0 ? Math.ceil(i) : Math.floor(i);
                    if (o == e)
                        return t(o) ? e : n;
                    t(o) ? n = o : e = o + r
                }
            }
            function lt(t, e, n, r) {
                if (!t)
                    return r(e, n, "ltr", 0);
                for (var i = !1, o = 0; o < t.length; ++o) {
                    var a = t[o];
                    (a.from < n && a.to > e || e == n && a.to == e) && (r(Math.max(a.from, e), Math.min(a.to, n), 1 == a.level ? "rtl" : "ltr", o),
                    i = !0)
                }
                i || r(e, n, "ltr")
            }
            var ct = null;
            function ut(t, e, n) {
                var r;
                ct = null;
                for (var i = 0; i < t.length; ++i) {
                    var o = t[i];
                    if (o.from < e && o.to > e)
                        return i;
                    o.to == e && (o.from != o.to && "before" == n ? r = i : ct = i),
                    o.from == e && (o.from != o.to && "before" != n ? r = i : ct = i)
                }
                return null != r ? r : ct
            }
            var ht = function() {
                var t = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN"
                  , e = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
                function n(n) {
                    return n <= 247 ? t.charAt(n) : 1424 <= n && n <= 1524 ? "R" : 1536 <= n && n <= 1785 ? e.charAt(n - 1536) : 1774 <= n && n <= 2220 ? "r" : 8192 <= n && n <= 8203 ? "w" : 8204 == n ? "b" : "L"
                }
                var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/
                  , i = /[stwN]/
                  , o = /[LRr]/
                  , a = /[Lb1n]/
                  , s = /[1n]/;
                function l(t, e, n) {
                    this.level = t,
                    this.from = e,
                    this.to = n
                }
                return function(t, e) {
                    var c = "ltr" == e ? "L" : "R";
                    if (0 == t.length || "ltr" == e && !r.test(t))
                        return !1;
                    for (var u = t.length, h = [], f = 0; f < u; ++f)
                        h.push(n(t.charCodeAt(f)));
                    for (var d = 0, p = c; d < u; ++d) {
                        var g = h[d];
                        "m" == g ? h[d] = p : p = g
                    }
                    for (var v = 0, m = c; v < u; ++v) {
                        var y = h[v];
                        "1" == y && "r" == m ? h[v] = "n" : o.test(y) && (m = y,
                        "r" == y && (h[v] = "R"))
                    }
                    for (var b = 1, w = h[0]; b < u - 1; ++b) {
                        var x = h[b];
                        "+" == x && "1" == w && "1" == h[b + 1] ? h[b] = "1" : "," != x || w != h[b + 1] || "1" != w && "n" != w || (h[b] = w),
                        w = x
                    }
                    for (var _ = 0; _ < u; ++_) {
                        var k = h[_];
                        if ("," == k)
                            h[_] = "N";
                        else if ("%" == k) {
                            var C = void 0;
                            for (C = _ + 1; C < u && "%" == h[C]; ++C)
                                ;
                            for (var S = _ && "!" == h[_ - 1] || C < u && "1" == h[C] ? "1" : "N", T = _; T < C; ++T)
                                h[T] = S;
                            _ = C - 1
                        }
                    }
                    for (var O = 0, A = c; O < u; ++O) {
                        var L = h[O];
                        "L" == A && "1" == L ? h[O] = "L" : o.test(L) && (A = L)
                    }
                    for (var M = 0; M < u; ++M)
                        if (i.test(h[M])) {
                            var E = void 0;
                            for (E = M + 1; E < u && i.test(h[E]); ++E)
                                ;
                            for (var D = "L" == (M ? h[M - 1] : c), N = "L" == (E < u ? h[E] : c), R = D == N ? D ? "L" : "R" : c, j = M; j < E; ++j)
                                h[j] = R;
                            M = E - 1
                        }
                    for (var H, B = [], I = 0; I < u; )
                        if (a.test(h[I])) {
                            var P = I;
                            for (++I; I < u && a.test(h[I]); ++I)
                                ;
                            B.push(new l(0,P,I))
                        } else {
                            var F = I
                              , z = B.length
                              , W = "rtl" == e ? 1 : 0;
                            for (++I; I < u && "L" != h[I]; ++I)
                                ;
                            for (var K = F; K < I; )
                                if (s.test(h[K])) {
                                    F < K && (B.splice(z, 0, new l(1,F,K)),
                                    z += W);
                                    var U = K;
                                    for (++K; K < I && s.test(h[K]); ++K)
                                        ;
                                    B.splice(z, 0, new l(2,U,K)),
                                    z += W,
                                    F = K
                                } else
                                    ++K;
                            F < I && B.splice(z, 0, new l(1,F,I))
                        }
                    return "ltr" == e && (1 == B[0].level && (H = t.match(/^\s+/)) && (B[0].from = H[0].length,
                    B.unshift(new l(0,0,H[0].length))),
                    1 == X(B).level && (H = t.match(/\s+$/)) && (X(B).to -= H[0].length,
                    B.push(new l(0,u - H[0].length,u)))),
                    "rtl" == e ? B.reverse() : B
                }
            }();
            function ft(t, e) {
                var n = t.order;
                return null == n && (n = t.order = ht(t.text, e)),
                n
            }
            var dt = []
              , pt = function(t, e, n) {
                if (t.addEventListener)
                    t.addEventListener(e, n, !1);
                else if (t.attachEvent)
                    t.attachEvent("on" + e, n);
                else {
                    var r = t._handlers || (t._handlers = {});
                    r[e] = (r[e] || dt).concat(n)
                }
            };
            function gt(t, e) {
                return t._handlers && t._handlers[e] || dt
            }
            function vt(t, e, n) {
                if (t.removeEventListener)
                    t.removeEventListener(e, n, !1);
                else if (t.detachEvent)
                    t.detachEvent("on" + e, n);
                else {
                    var r = t._handlers
                      , i = r && r[e];
                    if (i) {
                        var o = F(i, n);
                        o > -1 && (r[e] = i.slice(0, o).concat(i.slice(o + 1)))
                    }
                }
            }
            function mt(t, e) {
                var n = gt(t, e);
                if (n.length)
                    for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i)
                        n[i].apply(null, r)
            }
            function yt(t, e, n) {
                return "string" == typeof e && (e = {
                    type: e,
                    preventDefault: function() {
                        this.defaultPrevented = !0
                    }
                }),
                mt(t, n || e.type, t, e),
                Ct(e) || e.codemirrorIgnore
            }
            function bt(t) {
                var e = t._handlers && t._handlers.cursorActivity;
                if (e)
                    for (var n = t.curOp.cursorActivityHandlers || (t.curOp.cursorActivityHandlers = []), r = 0; r < e.length; ++r)
                        -1 == F(n, e[r]) && n.push(e[r])
            }
            function wt(t, e) {
                return gt(t, e).length > 0
            }
            function xt(t) {
                t.prototype.on = function(t, e) {
                    pt(this, t, e)
                }
                ,
                t.prototype.off = function(t, e) {
                    vt(this, t, e)
                }
            }
            function _t(t) {
                t.preventDefault ? t.preventDefault() : t.returnValue = !1
            }
            function kt(t) {
                t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
            }
            function Ct(t) {
                return null != t.defaultPrevented ? t.defaultPrevented : 0 == t.returnValue
            }
            function St(t) {
                _t(t),
                kt(t)
            }
            function Tt(t) {
                return t.target || t.srcElement
            }
            function Ot(t) {
                var e = t.which;
                return null == e && (1 & t.button ? e = 1 : 2 & t.button ? e = 3 : 4 & t.button && (e = 2)),
                y && t.ctrlKey && 1 == e && (e = 3),
                e
            }
            var At, Lt, Mt = function() {
                if (a && s < 9)
                    return !1;
                var t = L("div");
                return "draggable"in t || "dragDrop"in t
            }();
            function Et(t) {
                if (null == At) {
                    var e = L("span", "​");
                    A(t, L("span", [e, document.createTextNode("x")])),
                    0 != t.firstChild.offsetHeight && (At = e.offsetWidth <= 1 && e.offsetHeight > 2 && !(a && s < 8))
                }
                var n = At ? L("span", "​") : L("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
                return n.setAttribute("cm-text", ""),
                n
            }
            function Dt(t) {
                if (null != Lt)
                    return Lt;
                var e = A(t, document.createTextNode("AخA"))
                  , n = S(e, 0, 1).getBoundingClientRect()
                  , r = S(e, 1, 2).getBoundingClientRect();
                return O(t),
                !(!n || n.left == n.right) && (Lt = r.right - n.right < 3)
            }
            var Nt = 3 != "\n\nb".split(/\n/).length ? function(t) {
                var e = 0
                  , n = []
                  , r = t.length;
                while (e <= r) {
                    var i = t.indexOf("\n", e);
                    -1 == i && (i = t.length);
                    var o = t.slice(e, "\r" == t.charAt(i - 1) ? i - 1 : i)
                      , a = o.indexOf("\r");
                    -1 != a ? (n.push(o.slice(0, a)),
                    e += a + 1) : (n.push(o),
                    e = i + 1)
                }
                return n
            }
            : function(t) {
                return t.split(/\r\n?|\n/)
            }
              , Rt = window.getSelection ? function(t) {
                try {
                    return t.selectionStart != t.selectionEnd
                } catch (e) {
                    return !1
                }
            }
            : function(t) {
                var e;
                try {
                    e = t.ownerDocument.selection.createRange()
                } catch (n) {}
                return !(!e || e.parentElement() != t) && 0 != e.compareEndPoints("StartToEnd", e)
            }
              , jt = function() {
                var t = L("div");
                return "oncopy"in t || (t.setAttribute("oncopy", "return;"),
                "function" == typeof t.oncopy)
            }()
              , Ht = null;
            function Bt(t) {
                if (null != Ht)
                    return Ht;
                var e = A(t, L("span", "x"))
                  , n = e.getBoundingClientRect()
                  , r = S(e, 0, 1).getBoundingClientRect();
                return Ht = Math.abs(n.left - r.left) > 1
            }
            var It = {}
              , Pt = {};
            function Ft(t, e) {
                arguments.length > 2 && (e.dependencies = Array.prototype.slice.call(arguments, 2)),
                It[t] = e
            }
            function zt(t, e) {
                Pt[t] = e
            }
            function Wt(t) {
                if ("string" == typeof t && Pt.hasOwnProperty(t))
                    t = Pt[t];
                else if (t && "string" == typeof t.name && Pt.hasOwnProperty(t.name)) {
                    var e = Pt[t.name];
                    "string" == typeof e && (e = {
                        name: e
                    }),
                    t = Q(e, t),
                    t.name = e.name
                } else {
                    if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+xml$/.test(t))
                        return Wt("application/xml");
                    if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+json$/.test(t))
                        return Wt("application/json")
                }
                return "string" == typeof t ? {
                    name: t
                } : t || {
                    name: "null"
                }
            }
            function Kt(t, e) {
                e = Wt(e);
                var n = It[e.name];
                if (!n)
                    return Kt(t, "text/plain");
                var r = n(t, e);
                if (Ut.hasOwnProperty(e.name)) {
                    var i = Ut[e.name];
                    for (var o in i)
                        i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]),
                        r[o] = i[o])
                }
                if (r.name = e.name,
                e.helperType && (r.helperType = e.helperType),
                e.modeProps)
                    for (var a in e.modeProps)
                        r[a] = e.modeProps[a];
                return r
            }
            var Ut = {};
            function Vt(t, e) {
                var n = Ut.hasOwnProperty(t) ? Ut[t] : Ut[t] = {};
                B(e, n)
            }
            function $t(t, e) {
                if (!0 === e)
                    return e;
                if (t.copyState)
                    return t.copyState(e);
                var n = {};
                for (var r in e) {
                    var i = e[r];
                    i instanceof Array && (i = i.concat([])),
                    n[r] = i
                }
                return n
            }
            function qt(t, e) {
                var n;
                while (t.innerMode) {
                    if (n = t.innerMode(e),
                    !n || n.mode == t)
                        break;
                    e = n.state,
                    t = n.mode
                }
                return n || {
                    mode: t,
                    state: e
                }
            }
            function Gt(t, e, n) {
                return !t.startState || t.startState(e, n)
            }
            var Xt = function(t, e, n) {
                this.pos = this.start = 0,
                this.string = t,
                this.tabSize = e || 8,
                this.lastColumnPos = this.lastColumnValue = 0,
                this.lineStart = 0,
                this.lineOracle = n
            };
            function Jt(t, e) {
                if (e -= t.first,
                e < 0 || e >= t.size)
                    throw new Error("There is no line " + (e + t.first) + " in the document.");
                var n = t;
                while (!n.lines)
                    for (var r = 0; ; ++r) {
                        var i = n.children[r]
                          , o = i.chunkSize();
                        if (e < o) {
                            n = i;
                            break
                        }
                        e -= o
                    }
                return n.lines[e]
            }
            function Yt(t, e, n) {
                var r = []
                  , i = e.line;
                return t.iter(e.line, n.line + 1, (function(t) {
                    var o = t.text;
                    i == n.line && (o = o.slice(0, n.ch)),
                    i == e.line && (o = o.slice(e.ch)),
                    r.push(o),
                    ++i
                }
                )),
                r
            }
            function Zt(t, e, n) {
                var r = [];
                return t.iter(e, n, (function(t) {
                    r.push(t.text)
                }
                )),
                r
            }
            function Qt(t, e) {
                var n = e - t.height;
                if (n)
                    for (var r = t; r; r = r.parent)
                        r.height += n
            }
            function te(t) {
                if (null == t.parent)
                    return null;
                for (var e = t.parent, n = F(e.lines, t), r = e.parent; r; e = r,
                r = r.parent)
                    for (var i = 0; ; ++i) {
                        if (r.children[i] == e)
                            break;
                        n += r.children[i].chunkSize()
                    }
                return n + e.first
            }
            function ee(t, e) {
                var n = t.first;
                t: do {
                    for (var r = 0; r < t.children.length; ++r) {
                        var i = t.children[r]
                          , o = i.height;
                        if (e < o) {
                            t = i;
                            continue t
                        }
                        e -= o,
                        n += i.chunkSize()
                    }
                    return n
                } while (!t.lines);
                for (var a = 0; a < t.lines.length; ++a) {
                    var s = t.lines[a]
                      , l = s.height;
                    if (e < l)
                        break;
                    e -= l
                }
                return n + a
            }
            function ne(t, e) {
                return e >= t.first && e < t.first + t.size
            }
            function re(t, e) {
                return String(t.lineNumberFormatter(e + t.firstLineNumber))
            }
            function ie(t, e, n) {
                if (void 0 === n && (n = null),
                !(this instanceof ie))
                    return new ie(t,e,n);
                this.line = t,
                this.ch = e,
                this.sticky = n
            }
            function oe(t, e) {
                return t.line - e.line || t.ch - e.ch
            }
            function ae(t, e) {
                return t.sticky == e.sticky && 0 == oe(t, e)
            }
            function se(t) {
                return ie(t.line, t.ch)
            }
            function le(t, e) {
                return oe(t, e) < 0 ? e : t
            }
            function ce(t, e) {
                return oe(t, e) < 0 ? t : e
            }
            function ue(t, e) {
                return Math.max(t.first, Math.min(e, t.first + t.size - 1))
            }
            function he(t, e) {
                if (e.line < t.first)
                    return ie(t.first, 0);
                var n = t.first + t.size - 1;
                return e.line > n ? ie(n, Jt(t, n).text.length) : fe(e, Jt(t, e.line).text.length)
            }
            function fe(t, e) {
                var n = t.ch;
                return null == n || n > e ? ie(t.line, e) : n < 0 ? ie(t.line, 0) : t
            }
            function de(t, e) {
                for (var n = [], r = 0; r < e.length; r++)
                    n[r] = he(t, e[r]);
                return n
            }
            Xt.prototype.eol = function() {
                return this.pos >= this.string.length
            }
            ,
            Xt.prototype.sol = function() {
                return this.pos == this.lineStart
            }
            ,
            Xt.prototype.peek = function() {
                return this.string.charAt(this.pos) || void 0
            }
            ,
            Xt.prototype.next = function() {
                if (this.pos < this.string.length)
                    return this.string.charAt(this.pos++)
            }
            ,
            Xt.prototype.eat = function(t) {
                var e, n = this.string.charAt(this.pos);
                if (e = "string" == typeof t ? n == t : n && (t.test ? t.test(n) : t(n)),
                e)
                    return ++this.pos,
                    n
            }
            ,
            Xt.prototype.eatWhile = function(t) {
                var e = this.pos;
                while (this.eat(t))
                    ;
                return this.pos > e
            }
            ,
            Xt.prototype.eatSpace = function() {
                var t = this.pos;
                while (/[\s\u00a0]/.test(this.string.charAt(this.pos)))
                    ++this.pos;
                return this.pos > t
            }
            ,
            Xt.prototype.skipToEnd = function() {
                this.pos = this.string.length
            }
            ,
            Xt.prototype.skipTo = function(t) {
                var e = this.string.indexOf(t, this.pos);
                if (e > -1)
                    return this.pos = e,
                    !0
            }
            ,
            Xt.prototype.backUp = function(t) {
                this.pos -= t
            }
            ,
            Xt.prototype.column = function() {
                return this.lastColumnPos < this.start && (this.lastColumnValue = I(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue),
                this.lastColumnPos = this.start),
                this.lastColumnValue - (this.lineStart ? I(this.string, this.lineStart, this.tabSize) : 0)
            }
            ,
            Xt.prototype.indentation = function() {
                return I(this.string, null, this.tabSize) - (this.lineStart ? I(this.string, this.lineStart, this.tabSize) : 0)
            }
            ,
            Xt.prototype.match = function(t, e, n) {
                if ("string" != typeof t) {
                    var r = this.string.slice(this.pos).match(t);
                    return r && r.index > 0 ? null : (r && !1 !== e && (this.pos += r[0].length),
                    r)
                }
                var i = function(t) {
                    return n ? t.toLowerCase() : t
                }
                  , o = this.string.substr(this.pos, t.length);
                if (i(o) == i(t))
                    return !1 !== e && (this.pos += t.length),
                    !0
            }
            ,
            Xt.prototype.current = function() {
                return this.string.slice(this.start, this.pos)
            }
            ,
            Xt.prototype.hideFirstChars = function(t, e) {
                this.lineStart += t;
                try {
                    return e()
                } finally {
                    this.lineStart -= t
                }
            }
            ,
            Xt.prototype.lookAhead = function(t) {
                var e = this.lineOracle;
                return e && e.lookAhead(t)
            }
            ,
            Xt.prototype.baseToken = function() {
                var t = this.lineOracle;
                return t && t.baseToken(this.pos)
            }
            ;
            var pe = function(t, e) {
                this.state = t,
                this.lookAhead = e
            }
              , ge = function(t, e, n, r) {
                this.state = e,
                this.doc = t,
                this.line = n,
                this.maxLookAhead = r || 0,
                this.baseTokens = null,
                this.baseTokenPos = 1
            };
            function ve(t, e, n, r) {
                var i = [t.state.modeGen]
                  , o = {};
                Se(t, e.text, t.doc.mode, n, (function(t, e) {
                    return i.push(t, e)
                }
                ), o, r);
                for (var a = n.state, s = function(r) {
                    n.baseTokens = i;
                    var s = t.state.overlays[r]
                      , l = 1
                      , c = 0;
                    n.state = !0,
                    Se(t, e.text, s.mode, n, (function(t, e) {
                        var n = l;
                        while (c < t) {
                            var r = i[l];
                            r > t && i.splice(l, 1, t, i[l + 1], r),
                            l += 2,
                            c = Math.min(t, r)
                        }
                        if (e)
                            if (s.opaque)
                                i.splice(n, l - n, t, "overlay " + e),
                                l = n + 2;
                            else
                                for (; n < l; n += 2) {
                                    var o = i[n + 1];
                                    i[n + 1] = (o ? o + " " : "") + "overlay " + e
                                }
                    }
                    ), o),
                    n.state = a,
                    n.baseTokens = null,
                    n.baseTokenPos = 1
                }, l = 0; l < t.state.overlays.length; ++l)
                    s(l);
                return {
                    styles: i,
                    classes: o.bgClass || o.textClass ? o : null
                }
            }
            function me(t, e, n) {
                if (!e.styles || e.styles[0] != t.state.modeGen) {
                    var r = ye(t, te(e))
                      , i = e.text.length > t.options.maxHighlightLength && $t(t.doc.mode, r.state)
                      , o = ve(t, e, r);
                    i && (r.state = i),
                    e.stateAfter = r.save(!i),
                    e.styles = o.styles,
                    o.classes ? e.styleClasses = o.classes : e.styleClasses && (e.styleClasses = null),
                    n === t.doc.highlightFrontier && (t.doc.modeFrontier = Math.max(t.doc.modeFrontier, ++t.doc.highlightFrontier))
                }
                return e.styles
            }
            function ye(t, e, n) {
                var r = t.doc
                  , i = t.display;
                if (!r.mode.startState)
                    return new ge(r,!0,e);
                var o = Te(t, e, n)
                  , a = o > r.first && Jt(r, o - 1).stateAfter
                  , s = a ? ge.fromSaved(r, a, o) : new ge(r,Gt(r.mode),o);
                return r.iter(o, e, (function(n) {
                    be(t, n.text, s);
                    var r = s.line;
                    n.stateAfter = r == e - 1 || r % 5 == 0 || r >= i.viewFrom && r < i.viewTo ? s.save() : null,
                    s.nextLine()
                }
                )),
                n && (r.modeFrontier = s.line),
                s
            }
            function be(t, e, n, r) {
                var i = t.doc.mode
                  , o = new Xt(e,t.options.tabSize,n);
                o.start = o.pos = r || 0,
                "" == e && we(i, n.state);
                while (!o.eol())
                    xe(i, o, n.state),
                    o.start = o.pos
            }
            function we(t, e) {
                if (t.blankLine)
                    return t.blankLine(e);
                if (t.innerMode) {
                    var n = qt(t, e);
                    return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0
                }
            }
            function xe(t, e, n, r) {
                for (var i = 0; i < 10; i++) {
                    r && (r[0] = qt(t, n).mode);
                    var o = t.token(e, n);
                    if (e.pos > e.start)
                        return o
                }
                throw new Error("Mode " + t.name + " failed to advance stream.")
            }
            ge.prototype.lookAhead = function(t) {
                var e = this.doc.getLine(this.line + t);
                return null != e && t > this.maxLookAhead && (this.maxLookAhead = t),
                e
            }
            ,
            ge.prototype.baseToken = function(t) {
                if (!this.baseTokens)
                    return null;
                while (this.baseTokens[this.baseTokenPos] <= t)
                    this.baseTokenPos += 2;
                var e = this.baseTokens[this.baseTokenPos + 1];
                return {
                    type: e && e.replace(/( |^)overlay .*/, ""),
                    size: this.baseTokens[this.baseTokenPos] - t
                }
            }
            ,
            ge.prototype.nextLine = function() {
                this.line++,
                this.maxLookAhead > 0 && this.maxLookAhead--
            }
            ,
            ge.fromSaved = function(t, e, n) {
                return e instanceof pe ? new ge(t,$t(t.mode, e.state),n,e.lookAhead) : new ge(t,$t(t.mode, e),n)
            }
            ,
            ge.prototype.save = function(t) {
                var e = !1 !== t ? $t(this.doc.mode, this.state) : this.state;
                return this.maxLookAhead > 0 ? new pe(e,this.maxLookAhead) : e
            }
            ;
            var _e = function(t, e, n) {
                this.start = t.start,
                this.end = t.pos,
                this.string = t.current(),
                this.type = e || null,
                this.state = n
            };
            function ke(t, e, n, r) {
                var i, o = t.doc, a = o.mode;
                e = he(o, e);
                var s, l = Jt(o, e.line), c = ye(t, e.line, n), u = new Xt(l.text,t.options.tabSize,c);
                r && (s = []);
                while ((r || u.pos < e.ch) && !u.eol())
                    u.start = u.pos,
                    i = xe(a, u, c.state),
                    r && s.push(new _e(u,i,$t(o.mode, c.state)));
                return r ? s : new _e(u,i,c.state)
            }
            function Ce(t, e) {
                if (t)
                    for (; ; ) {
                        var n = t.match(/(?:^|\s+)line-(background-)?(\S+)/);
                        if (!n)
                            break;
                        t = t.slice(0, n.index) + t.slice(n.index + n[0].length);
                        var r = n[1] ? "bgClass" : "textClass";
                        null == e[r] ? e[r] = n[2] : new RegExp("(?:^|\\s)" + n[2] + "(?:$|\\s)").test(e[r]) || (e[r] += " " + n[2])
                    }
                return t
            }
            function Se(t, e, n, r, i, o, a) {
                var s = n.flattenSpans;
                null == s && (s = t.options.flattenSpans);
                var l, c = 0, u = null, h = new Xt(e,t.options.tabSize,r), f = t.options.addModeClass && [null];
                "" == e && Ce(we(n, r.state), o);
                while (!h.eol()) {
                    if (h.pos > t.options.maxHighlightLength ? (s = !1,
                    a && be(t, e, r, h.pos),
                    h.pos = e.length,
                    l = null) : l = Ce(xe(n, h, r.state, f), o),
                    f) {
                        var d = f[0].name;
                        d && (l = "m-" + (l ? d + " " + l : d))
                    }
                    if (!s || u != l) {
                        while (c < h.start)
                            c = Math.min(h.start, c + 5e3),
                            i(c, u);
                        u = l
                    }
                    h.start = h.pos
                }
                while (c < h.pos) {
                    var p = Math.min(h.pos, c + 5e3);
                    i(p, u),
                    c = p
                }
            }
            function Te(t, e, n) {
                for (var r, i, o = t.doc, a = n ? -1 : e - (t.doc.mode.innerMode ? 1e3 : 100), s = e; s > a; --s) {
                    if (s <= o.first)
                        return o.first;
                    var l = Jt(o, s - 1)
                      , c = l.stateAfter;
                    if (c && (!n || s + (c instanceof pe ? c.lookAhead : 0) <= o.modeFrontier))
                        return s;
                    var u = I(l.text, null, t.options.tabSize);
                    (null == i || r > u) && (i = s - 1,
                    r = u)
                }
                return i
            }
            function Oe(t, e) {
                if (t.modeFrontier = Math.min(t.modeFrontier, e),
                !(t.highlightFrontier < e - 10)) {
                    for (var n = t.first, r = e - 1; r > n; r--) {
                        var i = Jt(t, r).stateAfter;
                        if (i && (!(i instanceof pe) || r + i.lookAhead < e)) {
                            n = r + 1;
                            break
                        }
                    }
                    t.highlightFrontier = Math.min(t.highlightFrontier, n)
                }
            }
            var Ae = !1
              , Le = !1;
            function Me() {
                Ae = !0
            }
            function Ee() {
                Le = !0
            }
            function De(t, e, n) {
                this.marker = t,
                this.from = e,
                this.to = n
            }
            function Ne(t, e) {
                if (t)
                    for (var n = 0; n < t.length; ++n) {
                        var r = t[n];
                        if (r.marker == e)
                            return r
                    }
            }
            function Re(t, e) {
                for (var n, r = 0; r < t.length; ++r)
                    t[r] != e && (n || (n = [])).push(t[r]);
                return n
            }
            function je(t, e, n) {
                var r = n && window.WeakSet && (n.markedSpans || (n.markedSpans = new WeakSet));
                r && r.has(t.markedSpans) ? t.markedSpans.push(e) : (t.markedSpans = t.markedSpans ? t.markedSpans.concat([e]) : [e],
                r && r.add(t.markedSpans)),
                e.marker.attachLine(t)
            }
            function He(t, e, n) {
                var r;
                if (t)
                    for (var i = 0; i < t.length; ++i) {
                        var o = t[i]
                          , a = o.marker
                          , s = null == o.from || (a.inclusiveLeft ? o.from <= e : o.from < e);
                        if (s || o.from == e && "bookmark" == a.type && (!n || !o.marker.insertLeft)) {
                            var l = null == o.to || (a.inclusiveRight ? o.to >= e : o.to > e);
                            (r || (r = [])).push(new De(a,o.from,l ? null : o.to))
                        }
                    }
                return r
            }
            function Be(t, e, n) {
                var r;
                if (t)
                    for (var i = 0; i < t.length; ++i) {
                        var o = t[i]
                          , a = o.marker
                          , s = null == o.to || (a.inclusiveRight ? o.to >= e : o.to > e);
                        if (s || o.from == e && "bookmark" == a.type && (!n || o.marker.insertLeft)) {
                            var l = null == o.from || (a.inclusiveLeft ? o.from <= e : o.from < e);
                            (r || (r = [])).push(new De(a,l ? null : o.from - e,null == o.to ? null : o.to - e))
                        }
                    }
                return r
            }
            function Ie(t, e) {
                if (e.full)
                    return null;
                var n = ne(t, e.from.line) && Jt(t, e.from.line).markedSpans
                  , r = ne(t, e.to.line) && Jt(t, e.to.line).markedSpans;
                if (!n && !r)
                    return null;
                var i = e.from.ch
                  , o = e.to.ch
                  , a = 0 == oe(e.from, e.to)
                  , s = He(n, i, a)
                  , l = Be(r, o, a)
                  , c = 1 == e.text.length
                  , u = X(e.text).length + (c ? i : 0);
                if (s)
                    for (var h = 0; h < s.length; ++h) {
                        var f = s[h];
                        if (null == f.to) {
                            var d = Ne(l, f.marker);
                            d ? c && (f.to = null == d.to ? null : d.to + u) : f.to = i
                        }
                    }
                if (l)
                    for (var p = 0; p < l.length; ++p) {
                        var g = l[p];
                        if (null != g.to && (g.to += u),
                        null == g.from) {
                            var v = Ne(s, g.marker);
                            v || (g.from = u,
                            c && (s || (s = [])).push(g))
                        } else
                            g.from += u,
                            c && (s || (s = [])).push(g)
                    }
                s && (s = Pe(s)),
                l && l != s && (l = Pe(l));
                var m = [s];
                if (!c) {
                    var y, b = e.text.length - 2;
                    if (b > 0 && s)
                        for (var w = 0; w < s.length; ++w)
                            null == s[w].to && (y || (y = [])).push(new De(s[w].marker,null,null));
                    for (var x = 0; x < b; ++x)
                        m.push(y);
                    m.push(l)
                }
                return m
            }
            function Pe(t) {
                for (var e = 0; e < t.length; ++e) {
                    var n = t[e];
                    null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && t.splice(e--, 1)
                }
                return t.length ? t : null
            }
            function Fe(t, e, n) {
                var r = null;
                if (t.iter(e.line, n.line + 1, (function(t) {
                    if (t.markedSpans)
                        for (var e = 0; e < t.markedSpans.length; ++e) {
                            var n = t.markedSpans[e].marker;
                            !n.readOnly || r && -1 != F(r, n) || (r || (r = [])).push(n)
                        }
                }
                )),
                !r)
                    return null;
                for (var i = [{
                    from: e,
                    to: n
                }], o = 0; o < r.length; ++o)
                    for (var a = r[o], s = a.find(0), l = 0; l < i.length; ++l) {
                        var c = i[l];
                        if (!(oe(c.to, s.from) < 0 || oe(c.from, s.to) > 0)) {
                            var u = [l, 1]
                              , h = oe(c.from, s.from)
                              , f = oe(c.to, s.to);
                            (h < 0 || !a.inclusiveLeft && !h) && u.push({
                                from: c.from,
                                to: s.from
                            }),
                            (f > 0 || !a.inclusiveRight && !f) && u.push({
                                from: s.to,
                                to: c.to
                            }),
                            i.splice.apply(i, u),
                            l += u.length - 3
                        }
                    }
                return i
            }
            function ze(t) {
                var e = t.markedSpans;
                if (e) {
                    for (var n = 0; n < e.length; ++n)
                        e[n].marker.detachLine(t);
                    t.markedSpans = null
                }
            }
            function We(t, e) {
                if (e) {
                    for (var n = 0; n < e.length; ++n)
                        e[n].marker.attachLine(t);
                    t.markedSpans = e
                }
            }
            function Ke(t) {
                return t.inclusiveLeft ? -1 : 0
            }
            function Ue(t) {
                return t.inclusiveRight ? 1 : 0
            }
            function Ve(t, e) {
                var n = t.lines.length - e.lines.length;
                if (0 != n)
                    return n;
                var r = t.find()
                  , i = e.find()
                  , o = oe(r.from, i.from) || Ke(t) - Ke(e);
                if (o)
                    return -o;
                var a = oe(r.to, i.to) || Ue(t) - Ue(e);
                return a || e.id - t.id
            }
            function $e(t, e) {
                var n, r = Le && t.markedSpans;
                if (r)
                    for (var i = void 0, o = 0; o < r.length; ++o)
                        i = r[o],
                        i.marker.collapsed && null == (e ? i.from : i.to) && (!n || Ve(n, i.marker) < 0) && (n = i.marker);
                return n
            }
            function qe(t) {
                return $e(t, !0)
            }
            function Ge(t) {
                return $e(t, !1)
            }
            function Xe(t, e) {
                var n, r = Le && t.markedSpans;
                if (r)
                    for (var i = 0; i < r.length; ++i) {
                        var o = r[i];
                        o.marker.collapsed && (null == o.from || o.from < e) && (null == o.to || o.to > e) && (!n || Ve(n, o.marker) < 0) && (n = o.marker)
                    }
                return n
            }
            function Je(t, e, n, r, i) {
                var o = Jt(t, e)
                  , a = Le && o.markedSpans;
                if (a)
                    for (var s = 0; s < a.length; ++s) {
                        var l = a[s];
                        if (l.marker.collapsed) {
                            var c = l.marker.find(0)
                              , u = oe(c.from, n) || Ke(l.marker) - Ke(i)
                              , h = oe(c.to, r) || Ue(l.marker) - Ue(i);
                            if (!(u >= 0 && h <= 0 || u <= 0 && h >= 0) && (u <= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? oe(c.to, n) >= 0 : oe(c.to, n) > 0) || u >= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? oe(c.from, r) <= 0 : oe(c.from, r) < 0)))
                                return !0
                        }
                    }
            }
            function Ye(t) {
                var e;
                while (e = qe(t))
                    t = e.find(-1, !0).line;
                return t
            }
            function Ze(t) {
                var e;
                while (e = Ge(t))
                    t = e.find(1, !0).line;
                return t
            }
            function Qe(t) {
                var e, n;
                while (e = Ge(t))
                    t = e.find(1, !0).line,
                    (n || (n = [])).push(t);
                return n
            }
            function tn(t, e) {
                var n = Jt(t, e)
                  , r = Ye(n);
                return n == r ? e : te(r)
            }
            function en(t, e) {
                if (e > t.lastLine())
                    return e;
                var n, r = Jt(t, e);
                if (!nn(t, r))
                    return e;
                while (n = Ge(r))
                    r = n.find(1, !0).line;
                return te(r) + 1
            }
            function nn(t, e) {
                var n = Le && e.markedSpans;
                if (n)
                    for (var r = void 0, i = 0; i < n.length; ++i)
                        if (r = n[i],
                        r.marker.collapsed) {
                            if (null == r.from)
                                return !0;
                            if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && rn(t, e, r))
                                return !0
                        }
            }
            function rn(t, e, n) {
                if (null == n.to) {
                    var r = n.marker.find(1, !0);
                    return rn(t, r.line, Ne(r.line.markedSpans, n.marker))
                }
                if (n.marker.inclusiveRight && n.to == e.text.length)
                    return !0;
                for (var i = void 0, o = 0; o < e.markedSpans.length; ++o)
                    if (i = e.markedSpans[o],
                    i.marker.collapsed && !i.marker.widgetNode && i.from == n.to && (null == i.to || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && rn(t, e, i))
                        return !0
            }
            function on(t) {
                t = Ye(t);
                for (var e = 0, n = t.parent, r = 0; r < n.lines.length; ++r) {
                    var i = n.lines[r];
                    if (i == t)
                        break;
                    e += i.height
                }
                for (var o = n.parent; o; n = o,
                o = n.parent)
                    for (var a = 0; a < o.children.length; ++a) {
                        var s = o.children[a];
                        if (s == n)
                            break;
                        e += s.height
                    }
                return e
            }
            function an(t) {
                if (0 == t.height)
                    return 0;
                var e, n = t.text.length, r = t;
                while (e = qe(r)) {
                    var i = e.find(0, !0);
                    r = i.from.line,
                    n += i.from.ch - i.to.ch
                }
                r = t;
                while (e = Ge(r)) {
                    var o = e.find(0, !0);
                    n -= r.text.length - o.from.ch,
                    r = o.to.line,
                    n += r.text.length - o.to.ch
                }
                return n
            }
            function sn(t) {
                var e = t.display
                  , n = t.doc;
                e.maxLine = Jt(n, n.first),
                e.maxLineLength = an(e.maxLine),
                e.maxLineChanged = !0,
                n.iter((function(t) {
                    var n = an(t);
                    n > e.maxLineLength && (e.maxLineLength = n,
                    e.maxLine = t)
                }
                ))
            }
            var ln = function(t, e, n) {
                this.text = t,
                We(this, e),
                this.height = n ? n(this) : 1
            };
            function cn(t, e, n, r) {
                t.text = e,
                t.stateAfter && (t.stateAfter = null),
                t.styles && (t.styles = null),
                null != t.order && (t.order = null),
                ze(t),
                We(t, n);
                var i = r ? r(t) : 1;
                i != t.height && Qt(t, i)
            }
            function un(t) {
                t.parent = null,
                ze(t)
            }
            ln.prototype.lineNo = function() {
                return te(this)
            }
            ,
            xt(ln);
            var hn = {}
              , fn = {};
            function dn(t, e) {
                if (!t || /^\s*$/.test(t))
                    return null;
                var n = e.addModeClass ? fn : hn;
                return n[t] || (n[t] = t.replace(/\S+/g, "cm-$&"))
            }
            function pn(t, e) {
                var n = M("span", null, null, l ? "padding-right: .1px" : null)
                  , r = {
                    pre: M("pre", [n], "CodeMirror-line"),
                    content: n,
                    col: 0,
                    pos: 0,
                    cm: t,
                    trailingSpace: !1,
                    splitSpaces: t.getOption("lineWrapping")
                };
                e.measure = {};
                for (var i = 0; i <= (e.rest ? e.rest.length : 0); i++) {
                    var o = i ? e.rest[i - 1] : e.line
                      , a = void 0;
                    r.pos = 0,
                    r.addToken = vn,
                    Dt(t.display.measure) && (a = ft(o, t.doc.direction)) && (r.addToken = yn(r.addToken, a)),
                    r.map = [];
                    var s = e != t.display.externalMeasured && te(o);
                    wn(o, r, me(t, o, s)),
                    o.styleClasses && (o.styleClasses.bgClass && (r.bgClass = R(o.styleClasses.bgClass, r.bgClass || "")),
                    o.styleClasses.textClass && (r.textClass = R(o.styleClasses.textClass, r.textClass || ""))),
                    0 == r.map.length && r.map.push(0, 0, r.content.appendChild(Et(t.display.measure))),
                    0 == i ? (e.measure.map = r.map,
                    e.measure.cache = {}) : ((e.measure.maps || (e.measure.maps = [])).push(r.map),
                    (e.measure.caches || (e.measure.caches = [])).push({}))
                }
                if (l) {
                    var c = r.content.lastChild;
                    (/\bcm-tab\b/.test(c.className) || c.querySelector && c.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack")
                }
                return mt(t, "renderLine", t, e.line, r.pre),
                r.pre.className && (r.textClass = R(r.pre.className, r.textClass || "")),
                r
            }
            function gn(t) {
                var e = L("span", "•", "cm-invalidchar");
                return e.title = "\\u" + t.charCodeAt(0).toString(16),
                e.setAttribute("aria-label", e.title),
                e
            }
            function vn(t, e, n, r, i, o, l) {
                if (e) {
                    var c, u = t.splitSpaces ? mn(e, t.trailingSpace) : e, h = t.cm.state.specialChars, f = !1;
                    if (h.test(e)) {
                        c = document.createDocumentFragment();
                        var d = 0;
                        while (1) {
                            h.lastIndex = d;
                            var p = h.exec(e)
                              , g = p ? p.index - d : e.length - d;
                            if (g) {
                                var v = document.createTextNode(u.slice(d, d + g));
                                a && s < 9 ? c.appendChild(L("span", [v])) : c.appendChild(v),
                                t.map.push(t.pos, t.pos + g, v),
                                t.col += g,
                                t.pos += g
                            }
                            if (!p)
                                break;
                            d += g + 1;
                            var m = void 0;
                            if ("\t" == p[0]) {
                                var y = t.cm.options.tabSize
                                  , b = y - t.col % y;
                                m = c.appendChild(L("span", G(b), "cm-tab")),
                                m.setAttribute("role", "presentation"),
                                m.setAttribute("cm-text", "\t"),
                                t.col += b
                            } else
                                "\r" == p[0] || "\n" == p[0] ? (m = c.appendChild(L("span", "\r" == p[0] ? "␍" : "␤", "cm-invalidchar")),
                                m.setAttribute("cm-text", p[0]),
                                t.col += 1) : (m = t.cm.options.specialCharPlaceholder(p[0]),
                                m.setAttribute("cm-text", p[0]),
                                a && s < 9 ? c.appendChild(L("span", [m])) : c.appendChild(m),
                                t.col += 1);
                            t.map.push(t.pos, t.pos + 1, m),
                            t.pos++
                        }
                    } else
                        t.col += e.length,
                        c = document.createTextNode(u),
                        t.map.push(t.pos, t.pos + e.length, c),
                        a && s < 9 && (f = !0),
                        t.pos += e.length;
                    if (t.trailingSpace = 32 == u.charCodeAt(e.length - 1),
                    n || r || i || f || o || l) {
                        var w = n || "";
                        r && (w += r),
                        i && (w += i);
                        var x = L("span", [c], w, o);
                        if (l)
                            for (var _ in l)
                                l.hasOwnProperty(_) && "style" != _ && "class" != _ && x.setAttribute(_, l[_]);
                        return t.content.appendChild(x)
                    }
                    t.content.appendChild(c)
                }
            }
            function mn(t, e) {
                if (t.length > 1 && !/  /.test(t))
                    return t;
                for (var n = e, r = "", i = 0; i < t.length; i++) {
                    var o = t.charAt(i);
                    " " != o || !n || i != t.length - 1 && 32 != t.charCodeAt(i + 1) || (o = " "),
                    r += o,
                    n = " " == o
                }
                return r
            }
            function yn(t, e) {
                return function(n, r, i, o, a, s, l) {
                    i = i ? i + " cm-force-border" : "cm-force-border";
                    for (var c = n.pos, u = c + r.length; ; ) {
                        for (var h = void 0, f = 0; f < e.length; f++)
                            if (h = e[f],
                            h.to > c && h.from <= c)
                                break;
                        if (h.to >= u)
                            return t(n, r, i, o, a, s, l);
                        t(n, r.slice(0, h.to - c), i, o, null, s, l),
                        o = null,
                        r = r.slice(h.to - c),
                        c = h.to
                    }
                }
            }
            function bn(t, e, n, r) {
                var i = !r && n.widgetNode;
                i && t.map.push(t.pos, t.pos + e, i),
                !r && t.cm.display.input.needsContentAttribute && (i || (i = t.content.appendChild(document.createElement("span"))),
                i.setAttribute("cm-marker", n.id)),
                i && (t.cm.display.input.setUneditable(i),
                t.content.appendChild(i)),
                t.pos += e,
                t.trailingSpace = !1
            }
            function wn(t, e, n) {
                var r = t.markedSpans
                  , i = t.text
                  , o = 0;
                if (r)
                    for (var a, s, l, c, u, h, f, d = i.length, p = 0, g = 1, v = "", m = 0; ; ) {
                        if (m == p) {
                            l = c = u = s = "",
                            f = null,
                            h = null,
                            m = 1 / 0;
                            for (var y = [], b = void 0, w = 0; w < r.length; ++w) {
                                var x = r[w]
                                  , _ = x.marker;
                                if ("bookmark" == _.type && x.from == p && _.widgetNode)
                                    y.push(_);
                                else if (x.from <= p && (null == x.to || x.to > p || _.collapsed && x.to == p && x.from == p)) {
                                    if (null != x.to && x.to != p && m > x.to && (m = x.to,
                                    c = ""),
                                    _.className && (l += " " + _.className),
                                    _.css && (s = (s ? s + ";" : "") + _.css),
                                    _.startStyle && x.from == p && (u += " " + _.startStyle),
                                    _.endStyle && x.to == m && (b || (b = [])).push(_.endStyle, x.to),
                                    _.title && ((f || (f = {})).title = _.title),
                                    _.attributes)
                                        for (var k in _.attributes)
                                            (f || (f = {}))[k] = _.attributes[k];
                                    _.collapsed && (!h || Ve(h.marker, _) < 0) && (h = x)
                                } else
                                    x.from > p && m > x.from && (m = x.from)
                            }
                            if (b)
                                for (var C = 0; C < b.length; C += 2)
                                    b[C + 1] == m && (c += " " + b[C]);
                            if (!h || h.from == p)
                                for (var S = 0; S < y.length; ++S)
                                    bn(e, 0, y[S]);
                            if (h && (h.from || 0) == p) {
                                if (bn(e, (null == h.to ? d + 1 : h.to) - p, h.marker, null == h.from),
                                null == h.to)
                                    return;
                                h.to == p && (h = !1)
                            }
                        }
                        if (p >= d)
                            break;
                        var T = Math.min(d, m);
                        while (1) {
                            if (v) {
                                var O = p + v.length;
                                if (!h) {
                                    var A = O > T ? v.slice(0, T - p) : v;
                                    e.addToken(e, A, a ? a + l : l, u, p + A.length == m ? c : "", s, f)
                                }
                                if (O >= T) {
                                    v = v.slice(T - p),
                                    p = T;
                                    break
                                }
                                p = O,
                                u = ""
                            }
                            v = i.slice(o, o = n[g++]),
                            a = dn(n[g++], e.cm.options)
                        }
                    }
                else
                    for (var L = 1; L < n.length; L += 2)
                        e.addToken(e, i.slice(o, o = n[L]), dn(n[L + 1], e.cm.options))
            }
            function xn(t, e, n) {
                this.line = e,
                this.rest = Qe(e),
                this.size = this.rest ? te(X(this.rest)) - n + 1 : 1,
                this.node = this.text = null,
                this.hidden = nn(t, e)
            }
            function _n(t, e, n) {
                for (var r, i = [], o = e; o < n; o = r) {
                    var a = new xn(t.doc,Jt(t.doc, o),o);
                    r = o + a.size,
                    i.push(a)
                }
                return i
            }
            var kn = null;
            function Cn(t) {
                kn ? kn.ops.push(t) : t.ownsGroup = kn = {
                    ops: [t],
                    delayedCallbacks: []
                }
            }
            function Sn(t) {
                var e = t.delayedCallbacks
                  , n = 0;
                do {
                    for (; n < e.length; n++)
                        e[n].call(null);
                    for (var r = 0; r < t.ops.length; r++) {
                        var i = t.ops[r];
                        if (i.cursorActivityHandlers)
                            while (i.cursorActivityCalled < i.cursorActivityHandlers.length)
                                i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
                    }
                } while (n < e.length)
            }
            function Tn(t, e) {
                var n = t.ownsGroup;
                if (n)
                    try {
                        Sn(n)
                    } finally {
                        kn = null,
                        e(n)
                    }
            }
            var On = null;
            function An(t, e) {
                var n = gt(t, e);
                if (n.length) {
                    var r, i = Array.prototype.slice.call(arguments, 2);
                    kn ? r = kn.delayedCallbacks : On ? r = On : (r = On = [],
                    setTimeout(Ln, 0));
                    for (var o = function(t) {
                        r.push((function() {
                            return n[t].apply(null, i)
                        }
                        ))
                    }, a = 0; a < n.length; ++a)
                        o(a)
                }
            }
            function Ln() {
                var t = On;
                On = null;
                for (var e = 0; e < t.length; ++e)
                    t[e]()
            }
            function Mn(t, e, n, r) {
                for (var i = 0; i < e.changes.length; i++) {
                    var o = e.changes[i];
                    "text" == o ? Rn(t, e) : "gutter" == o ? Hn(t, e, n, r) : "class" == o ? jn(t, e) : "widget" == o && Bn(t, e, r)
                }
                e.changes = null
            }
            function En(t) {
                return t.node == t.text && (t.node = L("div", null, null, "position: relative"),
                t.text.parentNode && t.text.parentNode.replaceChild(t.node, t.text),
                t.node.appendChild(t.text),
                a && s < 8 && (t.node.style.zIndex = 2)),
                t.node
            }
            function Dn(t, e) {
                var n = e.bgClass ? e.bgClass + " " + (e.line.bgClass || "") : e.line.bgClass;
                if (n && (n += " CodeMirror-linebackground"),
                e.background)
                    n ? e.background.className = n : (e.background.parentNode.removeChild(e.background),
                    e.background = null);
                else if (n) {
                    var r = En(e);
                    e.background = r.insertBefore(L("div", null, n), r.firstChild),
                    t.display.input.setUneditable(e.background)
                }
            }
            function Nn(t, e) {
                var n = t.display.externalMeasured;
                return n && n.line == e.line ? (t.display.externalMeasured = null,
                e.measure = n.measure,
                n.built) : pn(t, e)
            }
            function Rn(t, e) {
                var n = e.text.className
                  , r = Nn(t, e);
                e.text == e.node && (e.node = r.pre),
                e.text.parentNode.replaceChild(r.pre, e.text),
                e.text = r.pre,
                r.bgClass != e.bgClass || r.textClass != e.textClass ? (e.bgClass = r.bgClass,
                e.textClass = r.textClass,
                jn(t, e)) : n && (e.text.className = n)
            }
            function jn(t, e) {
                Dn(t, e),
                e.line.wrapClass ? En(e).className = e.line.wrapClass : e.node != e.text && (e.node.className = "");
                var n = e.textClass ? e.textClass + " " + (e.line.textClass || "") : e.line.textClass;
                e.text.className = n || ""
            }
            function Hn(t, e, n, r) {
                if (e.gutter && (e.node.removeChild(e.gutter),
                e.gutter = null),
                e.gutterBackground && (e.node.removeChild(e.gutterBackground),
                e.gutterBackground = null),
                e.line.gutterClass) {
                    var i = En(e);
                    e.gutterBackground = L("div", null, "CodeMirror-gutter-background " + e.line.gutterClass, "left: " + (t.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"),
                    t.display.input.setUneditable(e.gutterBackground),
                    i.insertBefore(e.gutterBackground, e.text)
                }
                var o = e.line.gutterMarkers;
                if (t.options.lineNumbers || o) {
                    var a = En(e)
                      , s = e.gutter = L("div", null, "CodeMirror-gutter-wrapper", "left: " + (t.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
                    if (s.setAttribute("aria-hidden", "true"),
                    t.display.input.setUneditable(s),
                    a.insertBefore(s, e.text),
                    e.line.gutterClass && (s.className += " " + e.line.gutterClass),
                    !t.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (e.lineNumber = s.appendChild(L("div", re(t.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + t.display.lineNumInnerWidth + "px"))),
                    o)
                        for (var l = 0; l < t.display.gutterSpecs.length; ++l) {
                            var c = t.display.gutterSpecs[l].className
                              , u = o.hasOwnProperty(c) && o[c];
                            u && s.appendChild(L("div", [u], "CodeMirror-gutter-elt", "left: " + r.gutterLeft[c] + "px; width: " + r.gutterWidth[c] + "px"))
                        }
                }
            }
            function Bn(t, e, n) {
                e.alignable && (e.alignable = null);
                for (var r = C("CodeMirror-linewidget"), i = e.node.firstChild, o = void 0; i; i = o)
                    o = i.nextSibling,
                    r.test(i.className) && e.node.removeChild(i);
                Pn(t, e, n)
            }
            function In(t, e, n, r) {
                var i = Nn(t, e);
                return e.text = e.node = i.pre,
                i.bgClass && (e.bgClass = i.bgClass),
                i.textClass && (e.textClass = i.textClass),
                jn(t, e),
                Hn(t, e, n, r),
                Pn(t, e, r),
                e.node
            }
            function Pn(t, e, n) {
                if (Fn(t, e.line, e, n, !0),
                e.rest)
                    for (var r = 0; r < e.rest.length; r++)
                        Fn(t, e.rest[r], e, n, !1)
            }
            function Fn(t, e, n, r, i) {
                if (e.widgets)
                    for (var o = En(n), a = 0, s = e.widgets; a < s.length; ++a) {
                        var l = s[a]
                          , c = L("div", [l.node], "CodeMirror-linewidget" + (l.className ? " " + l.className : ""));
                        l.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"),
                        zn(l, c, n, r),
                        t.display.input.setUneditable(c),
                        i && l.above ? o.insertBefore(c, n.gutter || n.text) : o.appendChild(c),
                        An(l, "redraw")
                    }
            }
            function zn(t, e, n, r) {
                if (t.noHScroll) {
                    (n.alignable || (n.alignable = [])).push(e);
                    var i = r.wrapperWidth;
                    e.style.left = r.fixedPos + "px",
                    t.coverGutter || (i -= r.gutterTotalWidth,
                    e.style.paddingLeft = r.gutterTotalWidth + "px"),
                    e.style.width = i + "px"
                }
                t.coverGutter && (e.style.zIndex = 5,
                e.style.position = "relative",
                t.noHScroll || (e.style.marginLeft = -r.gutterTotalWidth + "px"))
            }
            function Wn(t) {
                if (null != t.height)
                    return t.height;
                var e = t.doc.cm;
                if (!e)
                    return 0;
                if (!E(document.body, t.node)) {
                    var n = "position: relative;";
                    t.coverGutter && (n += "margin-left: -" + e.display.gutters.offsetWidth + "px;"),
                    t.noHScroll && (n += "width: " + e.display.wrapper.clientWidth + "px;"),
                    A(e.display.measure, L("div", [t.node], null, n))
                }
                return t.height = t.node.parentNode.offsetHeight
            }
            function Kn(t, e) {
                for (var n = Tt(e); n != t.wrapper; n = n.parentNode)
                    if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == t.sizer && n != t.mover)
                        return !0
            }
            function Un(t) {
                return t.lineSpace.offsetTop
            }
            function Vn(t) {
                return t.mover.offsetHeight - t.lineSpace.offsetHeight
            }
            function $n(t) {
                if (t.cachedPaddingH)
                    return t.cachedPaddingH;
                var e = A(t.measure, L("pre", "x", "CodeMirror-line-like"))
                  , n = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle
                  , r = {
                    left: parseInt(n.paddingLeft),
                    right: parseInt(n.paddingRight)
                };
                return isNaN(r.left) || isNaN(r.right) || (t.cachedPaddingH = r),
                r
            }
            function qn(t) {
                return z - t.display.nativeBarWidth
            }
            function Gn(t) {
                return t.display.scroller.clientWidth - qn(t) - t.display.barWidth
            }
            function Xn(t) {
                return t.display.scroller.clientHeight - qn(t) - t.display.barHeight
            }
            function Jn(t, e, n) {
                var r = t.options.lineWrapping
                  , i = r && Gn(t);
                if (!e.measure.heights || r && e.measure.width != i) {
                    var o = e.measure.heights = [];
                    if (r) {
                        e.measure.width = i;
                        for (var a = e.text.firstChild.getClientRects(), s = 0; s < a.length - 1; s++) {
                            var l = a[s]
                              , c = a[s + 1];
                            Math.abs(l.bottom - c.bottom) > 2 && o.push((l.bottom + c.top) / 2 - n.top)
                        }
                    }
                    o.push(n.bottom - n.top)
                }
            }
            function Yn(t, e, n) {
                if (t.line == e)
                    return {
                        map: t.measure.map,
                        cache: t.measure.cache
                    };
                for (var r = 0; r < t.rest.length; r++)
                    if (t.rest[r] == e)
                        return {
                            map: t.measure.maps[r],
                            cache: t.measure.caches[r]
                        };
                for (var i = 0; i < t.rest.length; i++)
                    if (te(t.rest[i]) > n)
                        return {
                            map: t.measure.maps[i],
                            cache: t.measure.caches[i],
                            before: !0
                        }
            }
            function Zn(t, e) {
                e = Ye(e);
                var n = te(e)
                  , r = t.display.externalMeasured = new xn(t.doc,e,n);
                r.lineN = n;
                var i = r.built = pn(t, r);
                return r.text = i.pre,
                A(t.display.lineMeasure, i.pre),
                r
            }
            function Qn(t, e, n, r) {
                return nr(t, er(t, e), n, r)
            }
            function tr(t, e) {
                if (e >= t.display.viewFrom && e < t.display.viewTo)
                    return t.display.view[jr(t, e)];
                var n = t.display.externalMeasured;
                return n && e >= n.lineN && e < n.lineN + n.size ? n : void 0
            }
            function er(t, e) {
                var n = te(e)
                  , r = tr(t, n);
                r && !r.text ? r = null : r && r.changes && (Mn(t, r, n, Mr(t)),
                t.curOp.forceUpdate = !0),
                r || (r = Zn(t, e));
                var i = Yn(r, e, n);
                return {
                    line: e,
                    view: r,
                    rect: null,
                    map: i.map,
                    cache: i.cache,
                    before: i.before,
                    hasHeights: !1
                }
            }
            function nr(t, e, n, r, i) {
                e.before && (n = -1);
                var o, a = n + (r || "");
                return e.cache.hasOwnProperty(a) ? o = e.cache[a] : (e.rect || (e.rect = e.view.text.getBoundingClientRect()),
                e.hasHeights || (Jn(t, e.view, e.rect),
                e.hasHeights = !0),
                o = sr(t, e, n, r),
                o.bogus || (e.cache[a] = o)),
                {
                    left: o.left,
                    right: o.right,
                    top: i ? o.rtop : o.top,
                    bottom: i ? o.rbottom : o.bottom
                }
            }
            var rr, ir = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            };
            function or(t, e, n) {
                for (var r, i, o, a, s, l, c = 0; c < t.length; c += 3)
                    if (s = t[c],
                    l = t[c + 1],
                    e < s ? (i = 0,
                    o = 1,
                    a = "left") : e < l ? (i = e - s,
                    o = i + 1) : (c == t.length - 3 || e == l && t[c + 3] > e) && (o = l - s,
                    i = o - 1,
                    e >= l && (a = "right")),
                    null != i) {
                        if (r = t[c + 2],
                        s == l && n == (r.insertLeft ? "left" : "right") && (a = n),
                        "left" == n && 0 == i)
                            while (c && t[c - 2] == t[c - 3] && t[c - 1].insertLeft)
                                r = t[2 + (c -= 3)],
                                a = "left";
                        if ("right" == n && i == l - s)
                            while (c < t.length - 3 && t[c + 3] == t[c + 4] && !t[c + 5].insertLeft)
                                r = t[(c += 3) + 2],
                                a = "right";
                        break
                    }
                return {
                    node: r,
                    start: i,
                    end: o,
                    collapse: a,
                    coverStart: s,
                    coverEnd: l
                }
            }
            function ar(t, e) {
                var n = ir;
                if ("left" == e) {
                    for (var r = 0; r < t.length; r++)
                        if ((n = t[r]).left != n.right)
                            break
                } else
                    for (var i = t.length - 1; i >= 0; i--)
                        if ((n = t[i]).left != n.right)
                            break;
                return n
            }
            function sr(t, e, n, r) {
                var i, o = or(e.map, n, r), l = o.node, c = o.start, u = o.end, h = o.collapse;
                if (3 == l.nodeType) {
                    for (var f = 0; f < 4; f++) {
                        while (c && ot(e.line.text.charAt(o.coverStart + c)))
                            --c;
                        while (o.coverStart + u < o.coverEnd && ot(e.line.text.charAt(o.coverStart + u)))
                            ++u;
                        if (i = a && s < 9 && 0 == c && u == o.coverEnd - o.coverStart ? l.parentNode.getBoundingClientRect() : ar(S(l, c, u).getClientRects(), r),
                        i.left || i.right || 0 == c)
                            break;
                        u = c,
                        c -= 1,
                        h = "right"
                    }
                    a && s < 11 && (i = lr(t.display.measure, i))
                } else {
                    var d;
                    c > 0 && (h = r = "right"),
                    i = t.options.lineWrapping && (d = l.getClientRects()).length > 1 ? d["right" == r ? d.length - 1 : 0] : l.getBoundingClientRect()
                }
                if (a && s < 9 && !c && (!i || !i.left && !i.right)) {
                    var p = l.parentNode.getClientRects()[0];
                    i = p ? {
                        left: p.left,
                        right: p.left + Lr(t.display),
                        top: p.top,
                        bottom: p.bottom
                    } : ir
                }
                for (var g = i.top - e.rect.top, v = i.bottom - e.rect.top, m = (g + v) / 2, y = e.view.measure.heights, b = 0; b < y.length - 1; b++)
                    if (m < y[b])
                        break;
                var w = b ? y[b - 1] : 0
                  , x = y[b]
                  , _ = {
                    left: ("right" == h ? i.right : i.left) - e.rect.left,
                    right: ("left" == h ? i.left : i.right) - e.rect.left,
                    top: w,
                    bottom: x
                };
                return i.left || i.right || (_.bogus = !0),
                t.options.singleCursorHeightPerLine || (_.rtop = g,
                _.rbottom = v),
                _
            }
            function lr(t, e) {
                if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !Bt(t))
                    return e;
                var n = screen.logicalXDPI / screen.deviceXDPI
                  , r = screen.logicalYDPI / screen.deviceYDPI;
                return {
                    left: e.left * n,
                    right: e.right * n,
                    top: e.top * r,
                    bottom: e.bottom * r
                }
            }
            function cr(t) {
                if (t.measure && (t.measure.cache = {},
                t.measure.heights = null,
                t.rest))
                    for (var e = 0; e < t.rest.length; e++)
                        t.measure.caches[e] = {}
            }
            function ur(t) {
                t.display.externalMeasure = null,
                O(t.display.lineMeasure);
                for (var e = 0; e < t.display.view.length; e++)
                    cr(t.display.view[e])
            }
            function hr(t) {
                ur(t),
                t.display.cachedCharWidth = t.display.cachedTextHeight = t.display.cachedPaddingH = null,
                t.options.lineWrapping || (t.display.maxLineChanged = !0),
                t.display.lineNumChars = null
            }
            function fr() {
                return u && v ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft
            }
            function dr() {
                return u && v ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop
            }
            function pr(t) {
                var e = 0;
                if (t.widgets)
                    for (var n = 0; n < t.widgets.length; ++n)
                        t.widgets[n].above && (e += Wn(t.widgets[n]));
                return e
            }
            function gr(t, e, n, r, i) {
                if (!i) {
                    var o = pr(e);
                    n.top += o,
                    n.bottom += o
                }
                if ("line" == r)
                    return n;
                r || (r = "local");
                var a = on(e);
                if ("local" == r ? a += Un(t.display) : a -= t.display.viewOffset,
                "page" == r || "window" == r) {
                    var s = t.display.lineSpace.getBoundingClientRect();
                    a += s.top + ("window" == r ? 0 : dr());
                    var l = s.left + ("window" == r ? 0 : fr());
                    n.left += l,
                    n.right += l
                }
                return n.top += a,
                n.bottom += a,
                n
            }
            function vr(t, e, n) {
                if ("div" == n)
                    return e;
                var r = e.left
                  , i = e.top;
                if ("page" == n)
                    r -= fr(),
                    i -= dr();
                else if ("local" == n || !n) {
                    var o = t.display.sizer.getBoundingClientRect();
                    r += o.left,
                    i += o.top
                }
                var a = t.display.lineSpace.getBoundingClientRect();
                return {
                    left: r - a.left,
                    top: i - a.top
                }
            }
            function mr(t, e, n, r, i) {
                return r || (r = Jt(t.doc, e.line)),
                gr(t, r, Qn(t, r, e.ch, i), n)
            }
            function yr(t, e, n, r, i, o) {
                function a(e, a) {
                    var s = nr(t, i, e, a ? "right" : "left", o);
                    return a ? s.left = s.right : s.right = s.left,
                    gr(t, r, s, n)
                }
                r = r || Jt(t.doc, e.line),
                i || (i = er(t, r));
                var s = ft(r, t.doc.direction)
                  , l = e.ch
                  , c = e.sticky;
                if (l >= r.text.length ? (l = r.text.length,
                c = "before") : l <= 0 && (l = 0,
                c = "after"),
                !s)
                    return a("before" == c ? l - 1 : l, "before" == c);
                function u(t, e, n) {
                    var r = s[e]
                      , i = 1 == r.level;
                    return a(n ? t - 1 : t, i != n)
                }
                var h = ut(s, l, c)
                  , f = ct
                  , d = u(l, h, "before" == c);
                return null != f && (d.other = u(l, f, "before" != c)),
                d
            }
            function br(t, e) {
                var n = 0;
                e = he(t.doc, e),
                t.options.lineWrapping || (n = Lr(t.display) * e.ch);
                var r = Jt(t.doc, e.line)
                  , i = on(r) + Un(t.display);
                return {
                    left: n,
                    right: n,
                    top: i,
                    bottom: i + r.height
                }
            }
            function wr(t, e, n, r, i) {
                var o = ie(t, e, n);
                return o.xRel = i,
                r && (o.outside = r),
                o
            }
            function xr(t, e, n) {
                var r = t.doc;
                if (n += t.display.viewOffset,
                n < 0)
                    return wr(r.first, 0, null, -1, -1);
                var i = ee(r, n)
                  , o = r.first + r.size - 1;
                if (i > o)
                    return wr(r.first + r.size - 1, Jt(r, o).text.length, null, 1, 1);
                e < 0 && (e = 0);
                for (var a = Jt(r, i); ; ) {
                    var s = Sr(t, a, i, e, n)
                      , l = Xe(a, s.ch + (s.xRel > 0 || s.outside > 0 ? 1 : 0));
                    if (!l)
                        return s;
                    var c = l.find(1);
                    if (c.line == i)
                        return c;
                    a = Jt(r, i = c.line)
                }
            }
            function _r(t, e, n, r) {
                r -= pr(e);
                var i = e.text.length
                  , o = st((function(e) {
                    return nr(t, n, e - 1).bottom <= r
                }
                ), i, 0);
                return i = st((function(e) {
                    return nr(t, n, e).top > r
                }
                ), o, i),
                {
                    begin: o,
                    end: i
                }
            }
            function kr(t, e, n, r) {
                n || (n = er(t, e));
                var i = gr(t, e, nr(t, n, r), "line").top;
                return _r(t, e, n, i)
            }
            function Cr(t, e, n, r) {
                return !(t.bottom <= n) && (t.top > n || (r ? t.left : t.right) > e)
            }
            function Sr(t, e, n, r, i) {
                i -= on(e);
                var o = er(t, e)
                  , a = pr(e)
                  , s = 0
                  , l = e.text.length
                  , c = !0
                  , u = ft(e, t.doc.direction);
                if (u) {
                    var h = (t.options.lineWrapping ? Or : Tr)(t, e, n, o, u, r, i);
                    c = 1 != h.level,
                    s = c ? h.from : h.to - 1,
                    l = c ? h.to : h.from - 1
                }
                var f, d, p = null, g = null, v = st((function(e) {
                    var n = nr(t, o, e);
                    return n.top += a,
                    n.bottom += a,
                    !!Cr(n, r, i, !1) && (n.top <= i && n.left <= r && (p = e,
                    g = n),
                    !0)
                }
                ), s, l), m = !1;
                if (g) {
                    var y = r - g.left < g.right - r
                      , b = y == c;
                    v = p + (b ? 0 : 1),
                    d = b ? "after" : "before",
                    f = y ? g.left : g.right
                } else {
                    c || v != l && v != s || v++,
                    d = 0 == v ? "after" : v == e.text.length ? "before" : nr(t, o, v - (c ? 1 : 0)).bottom + a <= i == c ? "after" : "before";
                    var w = yr(t, ie(n, v, d), "line", e, o);
                    f = w.left,
                    m = i < w.top ? -1 : i >= w.bottom ? 1 : 0
                }
                return v = at(e.text, v, 1),
                wr(n, v, d, m, r - f)
            }
            function Tr(t, e, n, r, i, o, a) {
                var s = st((function(s) {
                    var l = i[s]
                      , c = 1 != l.level;
                    return Cr(yr(t, ie(n, c ? l.to : l.from, c ? "before" : "after"), "line", e, r), o, a, !0)
                }
                ), 0, i.length - 1)
                  , l = i[s];
                if (s > 0) {
                    var c = 1 != l.level
                      , u = yr(t, ie(n, c ? l.from : l.to, c ? "after" : "before"), "line", e, r);
                    Cr(u, o, a, !0) && u.top > a && (l = i[s - 1])
                }
                return l
            }
            function Or(t, e, n, r, i, o, a) {
                var s = _r(t, e, r, a)
                  , l = s.begin
                  , c = s.end;
                /\s/.test(e.text.charAt(c - 1)) && c--;
                for (var u = null, h = null, f = 0; f < i.length; f++) {
                    var d = i[f];
                    if (!(d.from >= c || d.to <= l)) {
                        var p = 1 != d.level
                          , g = nr(t, r, p ? Math.min(c, d.to) - 1 : Math.max(l, d.from)).right
                          , v = g < o ? o - g + 1e9 : g - o;
                        (!u || h > v) && (u = d,
                        h = v)
                    }
                }
                return u || (u = i[i.length - 1]),
                u.from < l && (u = {
                    from: l,
                    to: u.to,
                    level: u.level
                }),
                u.to > c && (u = {
                    from: u.from,
                    to: c,
                    level: u.level
                }),
                u
            }
            function Ar(t) {
                if (null != t.cachedTextHeight)
                    return t.cachedTextHeight;
                if (null == rr) {
                    rr = L("pre", null, "CodeMirror-line-like");
                    for (var e = 0; e < 49; ++e)
                        rr.appendChild(document.createTextNode("x")),
                        rr.appendChild(L("br"));
                    rr.appendChild(document.createTextNode("x"))
                }
                A(t.measure, rr);
                var n = rr.offsetHeight / 50;
                return n > 3 && (t.cachedTextHeight = n),
                O(t.measure),
                n || 1
            }
            function Lr(t) {
                if (null != t.cachedCharWidth)
                    return t.cachedCharWidth;
                var e = L("span", "xxxxxxxxxx")
                  , n = L("pre", [e], "CodeMirror-line-like");
                A(t.measure, n);
                var r = e.getBoundingClientRect()
                  , i = (r.right - r.left) / 10;
                return i > 2 && (t.cachedCharWidth = i),
                i || 10
            }
            function Mr(t) {
                for (var e = t.display, n = {}, r = {}, i = e.gutters.clientLeft, o = e.gutters.firstChild, a = 0; o; o = o.nextSibling,
                ++a) {
                    var s = t.display.gutterSpecs[a].className;
                    n[s] = o.offsetLeft + o.clientLeft + i,
                    r[s] = o.clientWidth
                }
                return {
                    fixedPos: Er(e),
                    gutterTotalWidth: e.gutters.offsetWidth,
                    gutterLeft: n,
                    gutterWidth: r,
                    wrapperWidth: e.wrapper.clientWidth
                }
            }
            function Er(t) {
                return t.scroller.getBoundingClientRect().left - t.sizer.getBoundingClientRect().left
            }
            function Dr(t) {
                var e = Ar(t.display)
                  , n = t.options.lineWrapping
                  , r = n && Math.max(5, t.display.scroller.clientWidth / Lr(t.display) - 3);
                return function(i) {
                    if (nn(t.doc, i))
                        return 0;
                    var o = 0;
                    if (i.widgets)
                        for (var a = 0; a < i.widgets.length; a++)
                            i.widgets[a].height && (o += i.widgets[a].height);
                    return n ? o + (Math.ceil(i.text.length / r) || 1) * e : o + e
                }
            }
            function Nr(t) {
                var e = t.doc
                  , n = Dr(t);
                e.iter((function(t) {
                    var e = n(t);
                    e != t.height && Qt(t, e)
                }
                ))
            }
            function Rr(t, e, n, r) {
                var i = t.display;
                if (!n && "true" == Tt(e).getAttribute("cm-not-content"))
                    return null;
                var o, a, s = i.lineSpace.getBoundingClientRect();
                try {
                    o = e.clientX - s.left,
                    a = e.clientY - s.top
                } catch (h) {
                    return null
                }
                var l, c = xr(t, o, a);
                if (r && c.xRel > 0 && (l = Jt(t.doc, c.line).text).length == c.ch) {
                    var u = I(l, l.length, t.options.tabSize) - l.length;
                    c = ie(c.line, Math.max(0, Math.round((o - $n(t.display).left) / Lr(t.display)) - u))
                }
                return c
            }
            function jr(t, e) {
                if (e >= t.display.viewTo)
                    return null;
                if (e -= t.display.viewFrom,
                e < 0)
                    return null;
                for (var n = t.display.view, r = 0; r < n.length; r++)
                    if (e -= n[r].size,
                    e < 0)
                        return r
            }
            function Hr(t, e, n, r) {
                null == e && (e = t.doc.first),
                null == n && (n = t.doc.first + t.doc.size),
                r || (r = 0);
                var i = t.display;
                if (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > e) && (i.updateLineNumbers = e),
                t.curOp.viewChanged = !0,
                e >= i.viewTo)
                    Le && tn(t.doc, e) < i.viewTo && Ir(t);
                else if (n <= i.viewFrom)
                    Le && en(t.doc, n + r) > i.viewFrom ? Ir(t) : (i.viewFrom += r,
                    i.viewTo += r);
                else if (e <= i.viewFrom && n >= i.viewTo)
                    Ir(t);
                else if (e <= i.viewFrom) {
                    var o = Pr(t, n, n + r, 1);
                    o ? (i.view = i.view.slice(o.index),
                    i.viewFrom = o.lineN,
                    i.viewTo += r) : Ir(t)
                } else if (n >= i.viewTo) {
                    var a = Pr(t, e, e, -1);
                    a ? (i.view = i.view.slice(0, a.index),
                    i.viewTo = a.lineN) : Ir(t)
                } else {
                    var s = Pr(t, e, e, -1)
                      , l = Pr(t, n, n + r, 1);
                    s && l ? (i.view = i.view.slice(0, s.index).concat(_n(t, s.lineN, l.lineN)).concat(i.view.slice(l.index)),
                    i.viewTo += r) : Ir(t)
                }
                var c = i.externalMeasured;
                c && (n < c.lineN ? c.lineN += r : e < c.lineN + c.size && (i.externalMeasured = null))
            }
            function Br(t, e, n) {
                t.curOp.viewChanged = !0;
                var r = t.display
                  , i = t.display.externalMeasured;
                if (i && e >= i.lineN && e < i.lineN + i.size && (r.externalMeasured = null),
                !(e < r.viewFrom || e >= r.viewTo)) {
                    var o = r.view[jr(t, e)];
                    if (null != o.node) {
                        var a = o.changes || (o.changes = []);
                        -1 == F(a, n) && a.push(n)
                    }
                }
            }
            function Ir(t) {
                t.display.viewFrom = t.display.viewTo = t.doc.first,
                t.display.view = [],
                t.display.viewOffset = 0
            }
            function Pr(t, e, n, r) {
                var i, o = jr(t, e), a = t.display.view;
                if (!Le || n == t.doc.first + t.doc.size)
                    return {
                        index: o,
                        lineN: n
                    };
                for (var s = t.display.viewFrom, l = 0; l < o; l++)
                    s += a[l].size;
                if (s != e) {
                    if (r > 0) {
                        if (o == a.length - 1)
                            return null;
                        i = s + a[o].size - e,
                        o++
                    } else
                        i = s - e;
                    e += i,
                    n += i
                }
                while (tn(t.doc, n) != n) {
                    if (o == (r < 0 ? 0 : a.length - 1))
                        return null;
                    n += r * a[o - (r < 0 ? 1 : 0)].size,
                    o += r
                }
                return {
                    index: o,
                    lineN: n
                }
            }
            function Fr(t, e, n) {
                var r = t.display
                  , i = r.view;
                0 == i.length || e >= r.viewTo || n <= r.viewFrom ? (r.view = _n(t, e, n),
                r.viewFrom = e) : (r.viewFrom > e ? r.view = _n(t, e, r.viewFrom).concat(r.view) : r.viewFrom < e && (r.view = r.view.slice(jr(t, e))),
                r.viewFrom = e,
                r.viewTo < n ? r.view = r.view.concat(_n(t, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, jr(t, n)))),
                r.viewTo = n
            }
            function zr(t) {
                for (var e = t.display.view, n = 0, r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.hidden || i.node && !i.changes || ++n
                }
                return n
            }
            function Wr(t) {
                t.display.input.showSelection(t.display.input.prepareSelection())
            }
            function Kr(t, e) {
                void 0 === e && (e = !0);
                for (var n = t.doc, r = {}, i = r.cursors = document.createDocumentFragment(), o = r.selection = document.createDocumentFragment(), a = 0; a < n.sel.ranges.length; a++)
                    if (e || a != n.sel.primIndex) {
                        var s = n.sel.ranges[a];
                        if (!(s.from().line >= t.display.viewTo || s.to().line < t.display.viewFrom)) {
                            var l = s.empty();
                            (l || t.options.showCursorWhenSelecting) && Ur(t, s.head, i),
                            l || $r(t, s, o)
                        }
                    }
                return r
            }
            function Ur(t, e, n) {
                var r = yr(t, e, "div", null, null, !t.options.singleCursorHeightPerLine)
                  , i = n.appendChild(L("div", " ", "CodeMirror-cursor"));
                if (i.style.left = r.left + "px",
                i.style.top = r.top + "px",
                i.style.height = Math.max(0, r.bottom - r.top) * t.options.cursorHeight + "px",
                /\bcm-fat-cursor\b/.test(t.getWrapperElement().className)) {
                    var o = mr(t, e, "div", null, null);
                    o.right - o.left > 0 && (i.style.width = o.right - o.left + "px")
                }
                if (r.other) {
                    var a = n.appendChild(L("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
                    a.style.display = "",
                    a.style.left = r.other.left + "px",
                    a.style.top = r.other.top + "px",
                    a.style.height = .85 * (r.other.bottom - r.other.top) + "px"
                }
            }
            function Vr(t, e) {
                return t.top - e.top || t.left - e.left
            }
            function $r(t, e, n) {
                var r = t.display
                  , i = t.doc
                  , o = document.createDocumentFragment()
                  , a = $n(t.display)
                  , s = a.left
                  , l = Math.max(r.sizerWidth, Gn(t) - r.sizer.offsetLeft) - a.right
                  , c = "ltr" == i.direction;
                function u(t, e, n, r) {
                    e < 0 && (e = 0),
                    e = Math.round(e),
                    r = Math.round(r),
                    o.appendChild(L("div", null, "CodeMirror-selected", "position: absolute; left: " + t + "px;\n                             top: " + e + "px; width: " + (null == n ? l - t : n) + "px;\n                             height: " + (r - e) + "px"))
                }
                function h(e, n, r) {
                    var o, a, h = Jt(i, e), f = h.text.length;
                    function d(n, r) {
                        return mr(t, ie(e, n), "div", h, r)
                    }
                    function p(e, n, r) {
                        var i = kr(t, h, null, e)
                          , o = "ltr" == n == ("after" == r) ? "left" : "right"
                          , a = "after" == r ? i.begin : i.end - (/\s/.test(h.text.charAt(i.end - 1)) ? 2 : 1);
                        return d(a, o)[o]
                    }
                    var g = ft(h, i.direction);
                    return lt(g, n || 0, null == r ? f : r, (function(t, e, i, h) {
                        var v = "ltr" == i
                          , m = d(t, v ? "left" : "right")
                          , y = d(e - 1, v ? "right" : "left")
                          , b = null == n && 0 == t
                          , w = null == r && e == f
                          , x = 0 == h
                          , _ = !g || h == g.length - 1;
                        if (y.top - m.top <= 3) {
                            var k = (c ? b : w) && x
                              , C = (c ? w : b) && _
                              , S = k ? s : (v ? m : y).left
                              , T = C ? l : (v ? y : m).right;
                            u(S, m.top, T - S, m.bottom)
                        } else {
                            var O, A, L, M;
                            v ? (O = c && b && x ? s : m.left,
                            A = c ? l : p(t, i, "before"),
                            L = c ? s : p(e, i, "after"),
                            M = c && w && _ ? l : y.right) : (O = c ? p(t, i, "before") : s,
                            A = !c && b && x ? l : m.right,
                            L = !c && w && _ ? s : y.left,
                            M = c ? p(e, i, "after") : l),
                            u(O, m.top, A - O, m.bottom),
                            m.bottom < y.top && u(s, m.bottom, null, y.top),
                            u(L, y.top, M - L, y.bottom)
                        }
                        (!o || Vr(m, o) < 0) && (o = m),
                        Vr(y, o) < 0 && (o = y),
                        (!a || Vr(m, a) < 0) && (a = m),
                        Vr(y, a) < 0 && (a = y)
                    }
                    )),
                    {
                        start: o,
                        end: a
                    }
                }
                var f = e.from()
                  , d = e.to();
                if (f.line == d.line)
                    h(f.line, f.ch, d.ch);
                else {
                    var p = Jt(i, f.line)
                      , g = Jt(i, d.line)
                      , v = Ye(p) == Ye(g)
                      , m = h(f.line, f.ch, v ? p.text.length + 1 : null).end
                      , y = h(d.line, v ? 0 : null, d.ch).start;
                    v && (m.top < y.top - 2 ? (u(m.right, m.top, null, m.bottom),
                    u(s, y.top, y.left, y.bottom)) : u(m.right, m.top, y.left - m.right, m.bottom)),
                    m.bottom < y.top && u(s, m.bottom, null, y.top)
                }
                n.appendChild(o)
            }
            function qr(t) {
                if (t.state.focused) {
                    var e = t.display;
                    clearInterval(e.blinker);
                    var n = !0;
                    e.cursorDiv.style.visibility = "",
                    t.options.cursorBlinkRate > 0 ? e.blinker = setInterval((function() {
                        t.hasFocus() || Yr(t),
                        e.cursorDiv.style.visibility = (n = !n) ? "" : "hidden"
                    }
                    ), t.options.cursorBlinkRate) : t.options.cursorBlinkRate < 0 && (e.cursorDiv.style.visibility = "hidden")
                }
            }
            function Gr(t) {
                t.hasFocus() || (t.display.input.focus(),
                t.state.focused || Jr(t))
            }
            function Xr(t) {
                t.state.delayingBlurEvent = !0,
                setTimeout((function() {
                    t.state.delayingBlurEvent && (t.state.delayingBlurEvent = !1,
                    t.state.focused && Yr(t))
                }
                ), 100)
            }
            function Jr(t, e) {
                t.state.delayingBlurEvent && !t.state.draggingText && (t.state.delayingBlurEvent = !1),
                "nocursor" != t.options.readOnly && (t.state.focused || (mt(t, "focus", t, e),
                t.state.focused = !0,
                N(t.display.wrapper, "CodeMirror-focused"),
                t.curOp || t.display.selForContextMenu == t.doc.sel || (t.display.input.reset(),
                l && setTimeout((function() {
                    return t.display.input.reset(!0)
                }
                ), 20)),
                t.display.input.receivedFocus()),
                qr(t))
            }
            function Yr(t, e) {
                t.state.delayingBlurEvent || (t.state.focused && (mt(t, "blur", t, e),
                t.state.focused = !1,
                T(t.display.wrapper, "CodeMirror-focused")),
                clearInterval(t.display.blinker),
                setTimeout((function() {
                    t.state.focused || (t.display.shift = !1)
                }
                ), 150))
            }
            function Zr(t) {
                for (var e = t.display, n = e.lineDiv.offsetTop, r = Math.max(0, e.scroller.getBoundingClientRect().top), i = e.lineDiv.getBoundingClientRect().top, o = 0, l = 0; l < e.view.length; l++) {
                    var c = e.view[l]
                      , u = t.options.lineWrapping
                      , h = void 0
                      , f = 0;
                    if (!c.hidden) {
                        if (i += c.line.height,
                        a && s < 8) {
                            var d = c.node.offsetTop + c.node.offsetHeight;
                            h = d - n,
                            n = d
                        } else {
                            var p = c.node.getBoundingClientRect();
                            h = p.bottom - p.top,
                            !u && c.text.firstChild && (f = c.text.firstChild.getBoundingClientRect().right - p.left - 1)
                        }
                        var g = c.line.height - h;
                        if ((g > .005 || g < -.005) && (i < r && (o -= g),
                        Qt(c.line, h),
                        Qr(c.line),
                        c.rest))
                            for (var v = 0; v < c.rest.length; v++)
                                Qr(c.rest[v]);
                        if (f > t.display.sizerWidth) {
                            var m = Math.ceil(f / Lr(t.display));
                            m > t.display.maxLineLength && (t.display.maxLineLength = m,
                            t.display.maxLine = c.line,
                            t.display.maxLineChanged = !0)
                        }
                    }
                }
                Math.abs(o) > 2 && (e.scroller.scrollTop += o)
            }
            function Qr(t) {
                if (t.widgets)
                    for (var e = 0; e < t.widgets.length; ++e) {
                        var n = t.widgets[e]
                          , r = n.node.parentNode;
                        r && (n.height = r.offsetHeight)
                    }
            }
            function ti(t, e, n) {
                var r = n && null != n.top ? Math.max(0, n.top) : t.scroller.scrollTop;
                r = Math.floor(r - Un(t));
                var i = n && null != n.bottom ? n.bottom : r + t.wrapper.clientHeight
                  , o = ee(e, r)
                  , a = ee(e, i);
                if (n && n.ensure) {
                    var s = n.ensure.from.line
                      , l = n.ensure.to.line;
                    s < o ? (o = s,
                    a = ee(e, on(Jt(e, s)) + t.wrapper.clientHeight)) : Math.min(l, e.lastLine()) >= a && (o = ee(e, on(Jt(e, l)) - t.wrapper.clientHeight),
                    a = l)
                }
                return {
                    from: o,
                    to: Math.max(a, o + 1)
                }
            }
            function ei(t, e) {
                if (!yt(t, "scrollCursorIntoView")) {
                    var n = t.display
                      , r = n.sizer.getBoundingClientRect()
                      , i = null;
                    if (e.top + r.top < 0 ? i = !0 : e.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1),
                    null != i && !p) {
                        var o = L("div", "​", null, "position: absolute;\n                         top: " + (e.top - n.viewOffset - Un(t.display)) + "px;\n                         height: " + (e.bottom - e.top + qn(t) + n.barHeight) + "px;\n                         left: " + e.left + "px; width: " + Math.max(2, e.right - e.left) + "px;");
                        t.display.lineSpace.appendChild(o),
                        o.scrollIntoView(i),
                        t.display.lineSpace.removeChild(o)
                    }
                }
            }
            function ni(t, e, n, r) {
                var i;
                null == r && (r = 0),
                t.options.lineWrapping || e != n || (n = "before" == e.sticky ? ie(e.line, e.ch + 1, "before") : e,
                e = e.ch ? ie(e.line, "before" == e.sticky ? e.ch - 1 : e.ch, "after") : e);
                for (var o = 0; o < 5; o++) {
                    var a = !1
                      , s = yr(t, e)
                      , l = n && n != e ? yr(t, n) : s;
                    i = {
                        left: Math.min(s.left, l.left),
                        top: Math.min(s.top, l.top) - r,
                        right: Math.max(s.left, l.left),
                        bottom: Math.max(s.bottom, l.bottom) + r
                    };
                    var c = ii(t, i)
                      , u = t.doc.scrollTop
                      , h = t.doc.scrollLeft;
                    if (null != c.scrollTop && (hi(t, c.scrollTop),
                    Math.abs(t.doc.scrollTop - u) > 1 && (a = !0)),
                    null != c.scrollLeft && (di(t, c.scrollLeft),
                    Math.abs(t.doc.scrollLeft - h) > 1 && (a = !0)),
                    !a)
                        break
                }
                return i
            }
            function ri(t, e) {
                var n = ii(t, e);
                null != n.scrollTop && hi(t, n.scrollTop),
                null != n.scrollLeft && di(t, n.scrollLeft)
            }
            function ii(t, e) {
                var n = t.display
                  , r = Ar(t.display);
                e.top < 0 && (e.top = 0);
                var i = t.curOp && null != t.curOp.scrollTop ? t.curOp.scrollTop : n.scroller.scrollTop
                  , o = Xn(t)
                  , a = {};
                e.bottom - e.top > o && (e.bottom = e.top + o);
                var s = t.doc.height + Vn(n)
                  , l = e.top < r
                  , c = e.bottom > s - r;
                if (e.top < i)
                    a.scrollTop = l ? 0 : e.top;
                else if (e.bottom > i + o) {
                    var u = Math.min(e.top, (c ? s : e.bottom) - o);
                    u != i && (a.scrollTop = u)
                }
                var h = t.options.fixedGutter ? 0 : n.gutters.offsetWidth
                  , f = t.curOp && null != t.curOp.scrollLeft ? t.curOp.scrollLeft : n.scroller.scrollLeft - h
                  , d = Gn(t) - n.gutters.offsetWidth
                  , p = e.right - e.left > d;
                return p && (e.right = e.left + d),
                e.left < 10 ? a.scrollLeft = 0 : e.left < f ? a.scrollLeft = Math.max(0, e.left + h - (p ? 0 : 10)) : e.right > d + f - 3 && (a.scrollLeft = e.right + (p ? 0 : 10) - d),
                a
            }
            function oi(t, e) {
                null != e && (ci(t),
                t.curOp.scrollTop = (null == t.curOp.scrollTop ? t.doc.scrollTop : t.curOp.scrollTop) + e)
            }
            function ai(t) {
                ci(t);
                var e = t.getCursor();
                t.curOp.scrollToPos = {
                    from: e,
                    to: e,
                    margin: t.options.cursorScrollMargin
                }
            }
            function si(t, e, n) {
                null == e && null == n || ci(t),
                null != e && (t.curOp.scrollLeft = e),
                null != n && (t.curOp.scrollTop = n)
            }
            function li(t, e) {
                ci(t),
                t.curOp.scrollToPos = e
            }
            function ci(t) {
                var e = t.curOp.scrollToPos;
                if (e) {
                    t.curOp.scrollToPos = null;
                    var n = br(t, e.from)
                      , r = br(t, e.to);
                    ui(t, n, r, e.margin)
                }
            }
            function ui(t, e, n, r) {
                var i = ii(t, {
                    left: Math.min(e.left, n.left),
                    top: Math.min(e.top, n.top) - r,
                    right: Math.max(e.right, n.right),
                    bottom: Math.max(e.bottom, n.bottom) + r
                });
                si(t, i.scrollLeft, i.scrollTop)
            }
            function hi(t, e) {
                Math.abs(t.doc.scrollTop - e) < 2 || (n || Wi(t, {
                    top: e
                }),
                fi(t, e, !0),
                n && Wi(t),
                Ri(t, 100))
            }
            function fi(t, e, n) {
                e = Math.max(0, Math.min(t.display.scroller.scrollHeight - t.display.scroller.clientHeight, e)),
                (t.display.scroller.scrollTop != e || n) && (t.doc.scrollTop = e,
                t.display.scrollbars.setScrollTop(e),
                t.display.scroller.scrollTop != e && (t.display.scroller.scrollTop = e))
            }
            function di(t, e, n, r) {
                e = Math.max(0, Math.min(e, t.display.scroller.scrollWidth - t.display.scroller.clientWidth)),
                (n ? e == t.doc.scrollLeft : Math.abs(t.doc.scrollLeft - e) < 2) && !r || (t.doc.scrollLeft = e,
                $i(t),
                t.display.scroller.scrollLeft != e && (t.display.scroller.scrollLeft = e),
                t.display.scrollbars.setScrollLeft(e))
            }
            function pi(t) {
                var e = t.display
                  , n = e.gutters.offsetWidth
                  , r = Math.round(t.doc.height + Vn(t.display));
                return {
                    clientHeight: e.scroller.clientHeight,
                    viewHeight: e.wrapper.clientHeight,
                    scrollWidth: e.scroller.scrollWidth,
                    clientWidth: e.scroller.clientWidth,
                    viewWidth: e.wrapper.clientWidth,
                    barLeft: t.options.fixedGutter ? n : 0,
                    docHeight: r,
                    scrollHeight: r + qn(t) + e.barHeight,
                    nativeBarWidth: e.nativeBarWidth,
                    gutterWidth: n
                }
            }
            var gi = function(t, e, n) {
                this.cm = n;
                var r = this.vert = L("div", [L("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar")
                  , i = this.horiz = L("div", [L("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
                r.tabIndex = i.tabIndex = -1,
                t(r),
                t(i),
                pt(r, "scroll", (function() {
                    r.clientHeight && e(r.scrollTop, "vertical")
                }
                )),
                pt(i, "scroll", (function() {
                    i.clientWidth && e(i.scrollLeft, "horizontal")
                }
                )),
                this.checkedZeroWidth = !1,
                a && s < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
            };
            gi.prototype.update = function(t) {
                var e = t.scrollWidth > t.clientWidth + 1
                  , n = t.scrollHeight > t.clientHeight + 1
                  , r = t.nativeBarWidth;
                if (n) {
                    this.vert.style.display = "block",
                    this.vert.style.bottom = e ? r + "px" : "0";
                    var i = t.viewHeight - (e ? r : 0);
                    this.vert.firstChild.style.height = Math.max(0, t.scrollHeight - t.clientHeight + i) + "px"
                } else
                    this.vert.style.display = "",
                    this.vert.firstChild.style.height = "0";
                if (e) {
                    this.horiz.style.display = "block",
                    this.horiz.style.right = n ? r + "px" : "0",
                    this.horiz.style.left = t.barLeft + "px";
                    var o = t.viewWidth - t.barLeft - (n ? r : 0);
                    this.horiz.firstChild.style.width = Math.max(0, t.scrollWidth - t.clientWidth + o) + "px"
                } else
                    this.horiz.style.display = "",
                    this.horiz.firstChild.style.width = "0";
                return !this.checkedZeroWidth && t.clientHeight > 0 && (0 == r && this.zeroWidthHack(),
                this.checkedZeroWidth = !0),
                {
                    right: n ? r : 0,
                    bottom: e ? r : 0
                }
            }
            ,
            gi.prototype.setScrollLeft = function(t) {
                this.horiz.scrollLeft != t && (this.horiz.scrollLeft = t),
                this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
            }
            ,
            gi.prototype.setScrollTop = function(t) {
                this.vert.scrollTop != t && (this.vert.scrollTop = t),
                this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
            }
            ,
            gi.prototype.zeroWidthHack = function() {
                var t = y && !d ? "12px" : "18px";
                this.horiz.style.height = this.vert.style.width = t,
                this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none",
                this.disableHoriz = new P,
                this.disableVert = new P
            }
            ,
            gi.prototype.enableZeroWidthBar = function(t, e, n) {
                function r() {
                    var i = t.getBoundingClientRect()
                      , o = "vert" == n ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1);
                    o != t ? t.style.pointerEvents = "none" : e.set(1e3, r)
                }
                t.style.pointerEvents = "auto",
                e.set(1e3, r)
            }
            ,
            gi.prototype.clear = function() {
                var t = this.horiz.parentNode;
                t.removeChild(this.horiz),
                t.removeChild(this.vert)
            }
            ;
            var vi = function() {};
            function mi(t, e) {
                e || (e = pi(t));
                var n = t.display.barWidth
                  , r = t.display.barHeight;
                yi(t, e);
                for (var i = 0; i < 4 && n != t.display.barWidth || r != t.display.barHeight; i++)
                    n != t.display.barWidth && t.options.lineWrapping && Zr(t),
                    yi(t, pi(t)),
                    n = t.display.barWidth,
                    r = t.display.barHeight
            }
            function yi(t, e) {
                var n = t.display
                  , r = n.scrollbars.update(e);
                n.sizer.style.paddingRight = (n.barWidth = r.right) + "px",
                n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px",
                n.heightForcer.style.borderBottom = r.bottom + "px solid transparent",
                r.right && r.bottom ? (n.scrollbarFiller.style.display = "block",
                n.scrollbarFiller.style.height = r.bottom + "px",
                n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "",
                r.bottom && t.options.coverGutterNextToScrollbar && t.options.fixedGutter ? (n.gutterFiller.style.display = "block",
                n.gutterFiller.style.height = r.bottom + "px",
                n.gutterFiller.style.width = e.gutterWidth + "px") : n.gutterFiller.style.display = ""
            }
            vi.prototype.update = function() {
                return {
                    bottom: 0,
                    right: 0
                }
            }
            ,
            vi.prototype.setScrollLeft = function() {}
            ,
            vi.prototype.setScrollTop = function() {}
            ,
            vi.prototype.clear = function() {}
            ;
            var bi = {
                native: gi,
                null: vi
            };
            function wi(t) {
                t.display.scrollbars && (t.display.scrollbars.clear(),
                t.display.scrollbars.addClass && T(t.display.wrapper, t.display.scrollbars.addClass)),
                t.display.scrollbars = new bi[t.options.scrollbarStyle]((function(e) {
                    t.display.wrapper.insertBefore(e, t.display.scrollbarFiller),
                    pt(e, "mousedown", (function() {
                        t.state.focused && setTimeout((function() {
                            return t.display.input.focus()
                        }
                        ), 0)
                    }
                    )),
                    e.setAttribute("cm-not-content", "true")
                }
                ),(function(e, n) {
                    "horizontal" == n ? di(t, e) : hi(t, e)
                }
                ),t),
                t.display.scrollbars.addClass && N(t.display.wrapper, t.display.scrollbars.addClass)
            }
            var xi = 0;
            function _i(t) {
                t.curOp = {
                    cm: t,
                    viewChanged: !1,
                    startHeight: t.doc.height,
                    forceUpdate: !1,
                    updateInput: 0,
                    typing: !1,
                    changeObjs: null,
                    cursorActivityHandlers: null,
                    cursorActivityCalled: 0,
                    selectionChanged: !1,
                    updateMaxLine: !1,
                    scrollLeft: null,
                    scrollTop: null,
                    scrollToPos: null,
                    focus: !1,
                    id: ++xi,
                    markArrays: null
                },
                Cn(t.curOp)
            }
            function ki(t) {
                var e = t.curOp;
                e && Tn(e, (function(t) {
                    for (var e = 0; e < t.ops.length; e++)
                        t.ops[e].cm.curOp = null;
                    Ci(t)
                }
                ))
            }
            function Ci(t) {
                for (var e = t.ops, n = 0; n < e.length; n++)
                    Si(e[n]);
                for (var r = 0; r < e.length; r++)
                    Ti(e[r]);
                for (var i = 0; i < e.length; i++)
                    Oi(e[i]);
                for (var o = 0; o < e.length; o++)
                    Ai(e[o]);
                for (var a = 0; a < e.length; a++)
                    Li(e[a])
            }
            function Si(t) {
                var e = t.cm
                  , n = e.display;
                Bi(e),
                t.updateMaxLine && sn(e),
                t.mustUpdate = t.viewChanged || t.forceUpdate || null != t.scrollTop || t.scrollToPos && (t.scrollToPos.from.line < n.viewFrom || t.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && e.options.lineWrapping,
                t.update = t.mustUpdate && new Hi(e,t.mustUpdate && {
                    top: t.scrollTop,
                    ensure: t.scrollToPos
                },t.forceUpdate)
            }
            function Ti(t) {
                t.updatedDisplay = t.mustUpdate && Fi(t.cm, t.update)
            }
            function Oi(t) {
                var e = t.cm
                  , n = e.display;
                t.updatedDisplay && Zr(e),
                t.barMeasure = pi(e),
                n.maxLineChanged && !e.options.lineWrapping && (t.adjustWidthTo = Qn(e, n.maxLine, n.maxLine.text.length).left + 3,
                e.display.sizerWidth = t.adjustWidthTo,
                t.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + t.adjustWidthTo + qn(e) + e.display.barWidth),
                t.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + t.adjustWidthTo - Gn(e))),
                (t.updatedDisplay || t.selectionChanged) && (t.preparedSelection = n.input.prepareSelection())
            }
            function Ai(t) {
                var e = t.cm;
                null != t.adjustWidthTo && (e.display.sizer.style.minWidth = t.adjustWidthTo + "px",
                t.maxScrollLeft < e.doc.scrollLeft && di(e, Math.min(e.display.scroller.scrollLeft, t.maxScrollLeft), !0),
                e.display.maxLineChanged = !1);
                var n = t.focus && t.focus == D();
                t.preparedSelection && e.display.input.showSelection(t.preparedSelection, n),
                (t.updatedDisplay || t.startHeight != e.doc.height) && mi(e, t.barMeasure),
                t.updatedDisplay && Vi(e, t.barMeasure),
                t.selectionChanged && qr(e),
                e.state.focused && t.updateInput && e.display.input.reset(t.typing),
                n && Gr(t.cm)
            }
            function Li(t) {
                var e = t.cm
                  , n = e.display
                  , r = e.doc;
                if (t.updatedDisplay && zi(e, t.update),
                null == n.wheelStartX || null == t.scrollTop && null == t.scrollLeft && !t.scrollToPos || (n.wheelStartX = n.wheelStartY = null),
                null != t.scrollTop && fi(e, t.scrollTop, t.forceScroll),
                null != t.scrollLeft && di(e, t.scrollLeft, !0, !0),
                t.scrollToPos) {
                    var i = ni(e, he(r, t.scrollToPos.from), he(r, t.scrollToPos.to), t.scrollToPos.margin);
                    ei(e, i)
                }
                var o = t.maybeHiddenMarkers
                  , a = t.maybeUnhiddenMarkers;
                if (o)
                    for (var s = 0; s < o.length; ++s)
                        o[s].lines.length || mt(o[s], "hide");
                if (a)
                    for (var l = 0; l < a.length; ++l)
                        a[l].lines.length && mt(a[l], "unhide");
                n.wrapper.offsetHeight && (r.scrollTop = e.display.scroller.scrollTop),
                t.changeObjs && mt(e, "changes", e, t.changeObjs),
                t.update && t.update.finish()
            }
            function Mi(t, e) {
                if (t.curOp)
                    return e();
                _i(t);
                try {
                    return e()
                } finally {
                    ki(t)
                }
            }
            function Ei(t, e) {
                return function() {
                    if (t.curOp)
                        return e.apply(t, arguments);
                    _i(t);
                    try {
                        return e.apply(t, arguments)
                    } finally {
                        ki(t)
                    }
                }
            }
            function Di(t) {
                return function() {
                    if (this.curOp)
                        return t.apply(this, arguments);
                    _i(this);
                    try {
                        return t.apply(this, arguments)
                    } finally {
                        ki(this)
                    }
                }
            }
            function Ni(t) {
                return function() {
                    var e = this.cm;
                    if (!e || e.curOp)
                        return t.apply(this, arguments);
                    _i(e);
                    try {
                        return t.apply(this, arguments)
                    } finally {
                        ki(e)
                    }
                }
            }
            function Ri(t, e) {
                t.doc.highlightFrontier < t.display.viewTo && t.state.highlight.set(e, H(ji, t))
            }
            function ji(t) {
                var e = t.doc;
                if (!(e.highlightFrontier >= t.display.viewTo)) {
                    var n = +new Date + t.options.workTime
                      , r = ye(t, e.highlightFrontier)
                      , i = [];
                    e.iter(r.line, Math.min(e.first + e.size, t.display.viewTo + 500), (function(o) {
                        if (r.line >= t.display.viewFrom) {
                            var a = o.styles
                              , s = o.text.length > t.options.maxHighlightLength ? $t(e.mode, r.state) : null
                              , l = ve(t, o, r, !0);
                            s && (r.state = s),
                            o.styles = l.styles;
                            var c = o.styleClasses
                              , u = l.classes;
                            u ? o.styleClasses = u : c && (o.styleClasses = null);
                            for (var h = !a || a.length != o.styles.length || c != u && (!c || !u || c.bgClass != u.bgClass || c.textClass != u.textClass), f = 0; !h && f < a.length; ++f)
                                h = a[f] != o.styles[f];
                            h && i.push(r.line),
                            o.stateAfter = r.save(),
                            r.nextLine()
                        } else
                            o.text.length <= t.options.maxHighlightLength && be(t, o.text, r),
                            o.stateAfter = r.line % 5 == 0 ? r.save() : null,
                            r.nextLine();
                        if (+new Date > n)
                            return Ri(t, t.options.workDelay),
                            !0
                    }
                    )),
                    e.highlightFrontier = r.line,
                    e.modeFrontier = Math.max(e.modeFrontier, r.line),
                    i.length && Mi(t, (function() {
                        for (var e = 0; e < i.length; e++)
                            Br(t, i[e], "text")
                    }
                    ))
                }
            }
            var Hi = function(t, e, n) {
                var r = t.display;
                this.viewport = e,
                this.visible = ti(r, t.doc, e),
                this.editorIsHidden = !r.wrapper.offsetWidth,
                this.wrapperHeight = r.wrapper.clientHeight,
                this.wrapperWidth = r.wrapper.clientWidth,
                this.oldDisplayWidth = Gn(t),
                this.force = n,
                this.dims = Mr(t),
                this.events = []
            };
            function Bi(t) {
                var e = t.display;
                !e.scrollbarsClipped && e.scroller.offsetWidth && (e.nativeBarWidth = e.scroller.offsetWidth - e.scroller.clientWidth,
                e.heightForcer.style.height = qn(t) + "px",
                e.sizer.style.marginBottom = -e.nativeBarWidth + "px",
                e.sizer.style.borderRightWidth = qn(t) + "px",
                e.scrollbarsClipped = !0)
            }
            function Ii(t) {
                if (t.hasFocus())
                    return null;
                var e = D();
                if (!e || !E(t.display.lineDiv, e))
                    return null;
                var n = {
                    activeElt: e
                };
                if (window.getSelection) {
                    var r = window.getSelection();
                    r.anchorNode && r.extend && E(t.display.lineDiv, r.anchorNode) && (n.anchorNode = r.anchorNode,
                    n.anchorOffset = r.anchorOffset,
                    n.focusNode = r.focusNode,
                    n.focusOffset = r.focusOffset)
                }
                return n
            }
            function Pi(t) {
                if (t && t.activeElt && t.activeElt != D() && (t.activeElt.focus(),
                !/^(INPUT|TEXTAREA)$/.test(t.activeElt.nodeName) && t.anchorNode && E(document.body, t.anchorNode) && E(document.body, t.focusNode))) {
                    var e = window.getSelection()
                      , n = document.createRange();
                    n.setEnd(t.anchorNode, t.anchorOffset),
                    n.collapse(!1),
                    e.removeAllRanges(),
                    e.addRange(n),
                    e.extend(t.focusNode, t.focusOffset)
                }
            }
            function Fi(t, e) {
                var n = t.display
                  , r = t.doc;
                if (e.editorIsHidden)
                    return Ir(t),
                    !1;
                if (!e.force && e.visible.from >= n.viewFrom && e.visible.to <= n.viewTo && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && 0 == zr(t))
                    return !1;
                qi(t) && (Ir(t),
                e.dims = Mr(t));
                var i = r.first + r.size
                  , o = Math.max(e.visible.from - t.options.viewportMargin, r.first)
                  , a = Math.min(i, e.visible.to + t.options.viewportMargin);
                n.viewFrom < o && o - n.viewFrom < 20 && (o = Math.max(r.first, n.viewFrom)),
                n.viewTo > a && n.viewTo - a < 20 && (a = Math.min(i, n.viewTo)),
                Le && (o = tn(t.doc, o),
                a = en(t.doc, a));
                var s = o != n.viewFrom || a != n.viewTo || n.lastWrapHeight != e.wrapperHeight || n.lastWrapWidth != e.wrapperWidth;
                Fr(t, o, a),
                n.viewOffset = on(Jt(t.doc, n.viewFrom)),
                t.display.mover.style.top = n.viewOffset + "px";
                var l = zr(t);
                if (!s && 0 == l && !e.force && n.renderedView == n.view && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo))
                    return !1;
                var c = Ii(t);
                return l > 4 && (n.lineDiv.style.display = "none"),
                Ki(t, n.updateLineNumbers, e.dims),
                l > 4 && (n.lineDiv.style.display = ""),
                n.renderedView = n.view,
                Pi(c),
                O(n.cursorDiv),
                O(n.selectionDiv),
                n.gutters.style.height = n.sizer.style.minHeight = 0,
                s && (n.lastWrapHeight = e.wrapperHeight,
                n.lastWrapWidth = e.wrapperWidth,
                Ri(t, 400)),
                n.updateLineNumbers = null,
                !0
            }
            function zi(t, e) {
                for (var n = e.viewport, r = !0; ; r = !1) {
                    if (r && t.options.lineWrapping && e.oldDisplayWidth != Gn(t))
                        r && (e.visible = ti(t.display, t.doc, n));
                    else if (n && null != n.top && (n = {
                        top: Math.min(t.doc.height + Vn(t.display) - Xn(t), n.top)
                    }),
                    e.visible = ti(t.display, t.doc, n),
                    e.visible.from >= t.display.viewFrom && e.visible.to <= t.display.viewTo)
                        break;
                    if (!Fi(t, e))
                        break;
                    Zr(t);
                    var i = pi(t);
                    Wr(t),
                    mi(t, i),
                    Vi(t, i),
                    e.force = !1
                }
                e.signal(t, "update", t),
                t.display.viewFrom == t.display.reportedViewFrom && t.display.viewTo == t.display.reportedViewTo || (e.signal(t, "viewportChange", t, t.display.viewFrom, t.display.viewTo),
                t.display.reportedViewFrom = t.display.viewFrom,
                t.display.reportedViewTo = t.display.viewTo)
            }
            function Wi(t, e) {
                var n = new Hi(t,e);
                if (Fi(t, n)) {
                    Zr(t),
                    zi(t, n);
                    var r = pi(t);
                    Wr(t),
                    mi(t, r),
                    Vi(t, r),
                    n.finish()
                }
            }
            function Ki(t, e, n) {
                var r = t.display
                  , i = t.options.lineNumbers
                  , o = r.lineDiv
                  , a = o.firstChild;
                function s(e) {
                    var n = e.nextSibling;
                    return l && y && t.display.currentWheelTarget == e ? e.style.display = "none" : e.parentNode.removeChild(e),
                    n
                }
                for (var c = r.view, u = r.viewFrom, h = 0; h < c.length; h++) {
                    var f = c[h];
                    if (f.hidden)
                        ;
                    else if (f.node && f.node.parentNode == o) {
                        while (a != f.node)
                            a = s(a);
                        var d = i && null != e && e <= u && f.lineNumber;
                        f.changes && (F(f.changes, "gutter") > -1 && (d = !1),
                        Mn(t, f, u, n)),
                        d && (O(f.lineNumber),
                        f.lineNumber.appendChild(document.createTextNode(re(t.options, u)))),
                        a = f.node.nextSibling
                    } else {
                        var p = In(t, f, u, n);
                        o.insertBefore(p, a)
                    }
                    u += f.size
                }
                while (a)
                    a = s(a)
            }
            function Ui(t) {
                var e = t.gutters.offsetWidth;
                t.sizer.style.marginLeft = e + "px",
                An(t, "gutterChanged", t)
            }
            function Vi(t, e) {
                t.display.sizer.style.minHeight = e.docHeight + "px",
                t.display.heightForcer.style.top = e.docHeight + "px",
                t.display.gutters.style.height = e.docHeight + t.display.barHeight + qn(t) + "px"
            }
            function $i(t) {
                var e = t.display
                  , n = e.view;
                if (e.alignWidgets || e.gutters.firstChild && t.options.fixedGutter) {
                    for (var r = Er(e) - e.scroller.scrollLeft + t.doc.scrollLeft, i = e.gutters.offsetWidth, o = r + "px", a = 0; a < n.length; a++)
                        if (!n[a].hidden) {
                            t.options.fixedGutter && (n[a].gutter && (n[a].gutter.style.left = o),
                            n[a].gutterBackground && (n[a].gutterBackground.style.left = o));
                            var s = n[a].alignable;
                            if (s)
                                for (var l = 0; l < s.length; l++)
                                    s[l].style.left = o
                        }
                    t.options.fixedGutter && (e.gutters.style.left = r + i + "px")
                }
            }
            function qi(t) {
                if (!t.options.lineNumbers)
                    return !1;
                var e = t.doc
                  , n = re(t.options, e.first + e.size - 1)
                  , r = t.display;
                if (n.length != r.lineNumChars) {
                    var i = r.measure.appendChild(L("div", [L("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt"))
                      , o = i.firstChild.offsetWidth
                      , a = i.offsetWidth - o;
                    return r.lineGutter.style.width = "",
                    r.lineNumInnerWidth = Math.max(o, r.lineGutter.offsetWidth - a) + 1,
                    r.lineNumWidth = r.lineNumInnerWidth + a,
                    r.lineNumChars = r.lineNumInnerWidth ? n.length : -1,
                    r.lineGutter.style.width = r.lineNumWidth + "px",
                    Ui(t.display),
                    !0
                }
                return !1
            }
            function Gi(t, e) {
                for (var n = [], r = !1, i = 0; i < t.length; i++) {
                    var o = t[i]
                      , a = null;
                    if ("string" != typeof o && (a = o.style,
                    o = o.className),
                    "CodeMirror-linenumbers" == o) {
                        if (!e)
                            continue;
                        r = !0
                    }
                    n.push({
                        className: o,
                        style: a
                    })
                }
                return e && !r && n.push({
                    className: "CodeMirror-linenumbers",
                    style: null
                }),
                n
            }
            function Xi(t) {
                var e = t.gutters
                  , n = t.gutterSpecs;
                O(e),
                t.lineGutter = null;
                for (var r = 0; r < n.length; ++r) {
                    var i = n[r]
                      , o = i.className
                      , a = i.style
                      , s = e.appendChild(L("div", null, "CodeMirror-gutter " + o));
                    a && (s.style.cssText = a),
                    "CodeMirror-linenumbers" == o && (t.lineGutter = s,
                    s.style.width = (t.lineNumWidth || 1) + "px")
                }
                e.style.display = n.length ? "" : "none",
                Ui(t)
            }
            function Ji(t) {
                Xi(t.display),
                Hr(t),
                $i(t)
            }
            function Yi(t, e, r, i) {
                var o = this;
                this.input = r,
                o.scrollbarFiller = L("div", null, "CodeMirror-scrollbar-filler"),
                o.scrollbarFiller.setAttribute("cm-not-content", "true"),
                o.gutterFiller = L("div", null, "CodeMirror-gutter-filler"),
                o.gutterFiller.setAttribute("cm-not-content", "true"),
                o.lineDiv = M("div", null, "CodeMirror-code"),
                o.selectionDiv = L("div", null, null, "position: relative; z-index: 1"),
                o.cursorDiv = L("div", null, "CodeMirror-cursors"),
                o.measure = L("div", null, "CodeMirror-measure"),
                o.lineMeasure = L("div", null, "CodeMirror-measure"),
                o.lineSpace = M("div", [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv], null, "position: relative; outline: none");
                var c = M("div", [o.lineSpace], "CodeMirror-lines");
                o.mover = L("div", [c], null, "position: relative"),
                o.sizer = L("div", [o.mover], "CodeMirror-sizer"),
                o.sizerWidth = null,
                o.heightForcer = L("div", null, null, "position: absolute; height: " + z + "px; width: 1px;"),
                o.gutters = L("div", null, "CodeMirror-gutters"),
                o.lineGutter = null,
                o.scroller = L("div", [o.sizer, o.heightForcer, o.gutters], "CodeMirror-scroll"),
                o.scroller.setAttribute("tabIndex", "-1"),
                o.wrapper = L("div", [o.scrollbarFiller, o.gutterFiller, o.scroller], "CodeMirror"),
                o.wrapper.setAttribute("translate", "no"),
                a && s < 8 && (o.gutters.style.zIndex = -1,
                o.scroller.style.paddingRight = 0),
                l || n && m || (o.scroller.draggable = !0),
                t && (t.appendChild ? t.appendChild(o.wrapper) : t(o.wrapper)),
                o.viewFrom = o.viewTo = e.first,
                o.reportedViewFrom = o.reportedViewTo = e.first,
                o.view = [],
                o.renderedView = null,
                o.externalMeasured = null,
                o.viewOffset = 0,
                o.lastWrapHeight = o.lastWrapWidth = 0,
                o.updateLineNumbers = null,
                o.nativeBarWidth = o.barHeight = o.barWidth = 0,
                o.scrollbarsClipped = !1,
                o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null,
                o.alignWidgets = !1,
                o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null,
                o.maxLine = null,
                o.maxLineLength = 0,
                o.maxLineChanged = !1,
                o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null,
                o.shift = !1,
                o.selForContextMenu = null,
                o.activeTouch = null,
                o.gutterSpecs = Gi(i.gutters, i.lineNumbers),
                Xi(o),
                r.init(o)
            }
            Hi.prototype.signal = function(t, e) {
                wt(t, e) && this.events.push(arguments)
            }
            ,
            Hi.prototype.finish = function() {
                for (var t = 0; t < this.events.length; t++)
                    mt.apply(null, this.events[t])
            }
            ;
            var Zi = 0
              , Qi = null;
            function to(t) {
                var e = t.wheelDeltaX
                  , n = t.wheelDeltaY;
                return null == e && t.detail && t.axis == t.HORIZONTAL_AXIS && (e = t.detail),
                null == n && t.detail && t.axis == t.VERTICAL_AXIS ? n = t.detail : null == n && (n = t.wheelDelta),
                {
                    x: e,
                    y: n
                }
            }
            function eo(t) {
                var e = to(t);
                return e.x *= Qi,
                e.y *= Qi,
                e
            }
            function no(t, e) {
                var r = to(e)
                  , i = r.x
                  , o = r.y
                  , a = Qi;
                0 === e.deltaMode && (i = e.deltaX,
                o = e.deltaY,
                a = 1);
                var s = t.display
                  , c = s.scroller
                  , u = c.scrollWidth > c.clientWidth
                  , f = c.scrollHeight > c.clientHeight;
                if (i && u || o && f) {
                    if (o && y && l)
                        t: for (var d = e.target, p = s.view; d != c; d = d.parentNode)
                            for (var g = 0; g < p.length; g++)
                                if (p[g].node == d) {
                                    t.display.currentWheelTarget = d;
                                    break t
                                }
                    if (i && !n && !h && null != a)
                        return o && f && hi(t, Math.max(0, c.scrollTop + o * a)),
                        di(t, Math.max(0, c.scrollLeft + i * a)),
                        (!o || o && f) && _t(e),
                        void (s.wheelStartX = null);
                    if (o && null != a) {
                        var v = o * a
                          , m = t.doc.scrollTop
                          , b = m + s.wrapper.clientHeight;
                        v < 0 ? m = Math.max(0, m + v - 50) : b = Math.min(t.doc.height, b + v + 50),
                        Wi(t, {
                            top: m,
                            bottom: b
                        })
                    }
                    Zi < 20 && 0 !== e.deltaMode && (null == s.wheelStartX ? (s.wheelStartX = c.scrollLeft,
                    s.wheelStartY = c.scrollTop,
                    s.wheelDX = i,
                    s.wheelDY = o,
                    setTimeout((function() {
                        if (null != s.wheelStartX) {
                            var t = c.scrollLeft - s.wheelStartX
                              , e = c.scrollTop - s.wheelStartY
                              , n = e && s.wheelDY && e / s.wheelDY || t && s.wheelDX && t / s.wheelDX;
                            s.wheelStartX = s.wheelStartY = null,
                            n && (Qi = (Qi * Zi + n) / (Zi + 1),
                            ++Zi)
                        }
                    }
                    ), 200)) : (s.wheelDX += i,
                    s.wheelDY += o))
                }
            }
            a ? Qi = -.53 : n ? Qi = 15 : u ? Qi = -.7 : f && (Qi = -1 / 3);
            var ro = function(t, e) {
                this.ranges = t,
                this.primIndex = e
            };
            ro.prototype.primary = function() {
                return this.ranges[this.primIndex]
            }
            ,
            ro.prototype.equals = function(t) {
                if (t == this)
                    return !0;
                if (t.primIndex != this.primIndex || t.ranges.length != this.ranges.length)
                    return !1;
                for (var e = 0; e < this.ranges.length; e++) {
                    var n = this.ranges[e]
                      , r = t.ranges[e];
                    if (!ae(n.anchor, r.anchor) || !ae(n.head, r.head))
                        return !1
                }
                return !0
            }
            ,
            ro.prototype.deepCopy = function() {
                for (var t = [], e = 0; e < this.ranges.length; e++)
                    t[e] = new io(se(this.ranges[e].anchor),se(this.ranges[e].head));
                return new ro(t,this.primIndex)
            }
            ,
            ro.prototype.somethingSelected = function() {
                for (var t = 0; t < this.ranges.length; t++)
                    if (!this.ranges[t].empty())
                        return !0;
                return !1
            }
            ,
            ro.prototype.contains = function(t, e) {
                e || (e = t);
                for (var n = 0; n < this.ranges.length; n++) {
                    var r = this.ranges[n];
                    if (oe(e, r.from()) >= 0 && oe(t, r.to()) <= 0)
                        return n
                }
                return -1
            }
            ;
            var io = function(t, e) {
                this.anchor = t,
                this.head = e
            };
            function oo(t, e, n) {
                var r = t && t.options.selectionsMayTouch
                  , i = e[n];
                e.sort((function(t, e) {
                    return oe(t.from(), e.from())
                }
                )),
                n = F(e, i);
                for (var o = 1; o < e.length; o++) {
                    var a = e[o]
                      , s = e[o - 1]
                      , l = oe(s.to(), a.from());
                    if (r && !a.empty() ? l > 0 : l >= 0) {
                        var c = ce(s.from(), a.from())
                          , u = le(s.to(), a.to())
                          , h = s.empty() ? a.from() == a.head : s.from() == s.head;
                        o <= n && --n,
                        e.splice(--o, 2, new io(h ? u : c,h ? c : u))
                    }
                }
                return new ro(e,n)
            }
            function ao(t, e) {
                return new ro([new io(t,e || t)],0)
            }
            function so(t) {
                return t.text ? ie(t.from.line + t.text.length - 1, X(t.text).length + (1 == t.text.length ? t.from.ch : 0)) : t.to
            }
            function lo(t, e) {
                if (oe(t, e.from) < 0)
                    return t;
                if (oe(t, e.to) <= 0)
                    return so(e);
                var n = t.line + e.text.length - (e.to.line - e.from.line) - 1
                  , r = t.ch;
                return t.line == e.to.line && (r += so(e).ch - e.to.ch),
                ie(n, r)
            }
            function co(t, e) {
                for (var n = [], r = 0; r < t.sel.ranges.length; r++) {
                    var i = t.sel.ranges[r];
                    n.push(new io(lo(i.anchor, e),lo(i.head, e)))
                }
                return oo(t.cm, n, t.sel.primIndex)
            }
            function uo(t, e, n) {
                return t.line == e.line ? ie(n.line, t.ch - e.ch + n.ch) : ie(n.line + (t.line - e.line), t.ch)
            }
            function ho(t, e, n) {
                for (var r = [], i = ie(t.first, 0), o = i, a = 0; a < e.length; a++) {
                    var s = e[a]
                      , l = uo(s.from, i, o)
                      , c = uo(so(s), i, o);
                    if (i = s.to,
                    o = c,
                    "around" == n) {
                        var u = t.sel.ranges[a]
                          , h = oe(u.head, u.anchor) < 0;
                        r[a] = new io(h ? c : l,h ? l : c)
                    } else
                        r[a] = new io(l,l)
                }
                return new ro(r,t.sel.primIndex)
            }
            function fo(t) {
                t.doc.mode = Kt(t.options, t.doc.modeOption),
                po(t)
            }
            function po(t) {
                t.doc.iter((function(t) {
                    t.stateAfter && (t.stateAfter = null),
                    t.styles && (t.styles = null)
                }
                )),
                t.doc.modeFrontier = t.doc.highlightFrontier = t.doc.first,
                Ri(t, 100),
                t.state.modeGen++,
                t.curOp && Hr(t)
            }
            function go(t, e) {
                return 0 == e.from.ch && 0 == e.to.ch && "" == X(e.text) && (!t.cm || t.cm.options.wholeLineUpdateBefore)
            }
            function vo(t, e, n, r) {
                function i(t) {
                    return n ? n[t] : null
                }
                function o(t, n, i) {
                    cn(t, n, i, r),
                    An(t, "change", t, e)
                }
                function a(t, e) {
                    for (var n = [], o = t; o < e; ++o)
                        n.push(new ln(c[o],i(o),r));
                    return n
                }
                var s = e.from
                  , l = e.to
                  , c = e.text
                  , u = Jt(t, s.line)
                  , h = Jt(t, l.line)
                  , f = X(c)
                  , d = i(c.length - 1)
                  , p = l.line - s.line;
                if (e.full)
                    t.insert(0, a(0, c.length)),
                    t.remove(c.length, t.size - c.length);
                else if (go(t, e)) {
                    var g = a(0, c.length - 1);
                    o(h, h.text, d),
                    p && t.remove(s.line, p),
                    g.length && t.insert(s.line, g)
                } else if (u == h)
                    if (1 == c.length)
                        o(u, u.text.slice(0, s.ch) + f + u.text.slice(l.ch), d);
                    else {
                        var v = a(1, c.length - 1);
                        v.push(new ln(f + u.text.slice(l.ch),d,r)),
                        o(u, u.text.slice(0, s.ch) + c[0], i(0)),
                        t.insert(s.line + 1, v)
                    }
                else if (1 == c.length)
                    o(u, u.text.slice(0, s.ch) + c[0] + h.text.slice(l.ch), i(0)),
                    t.remove(s.line + 1, p);
                else {
                    o(u, u.text.slice(0, s.ch) + c[0], i(0)),
                    o(h, f + h.text.slice(l.ch), d);
                    var m = a(1, c.length - 1);
                    p > 1 && t.remove(s.line + 1, p - 1),
                    t.insert(s.line + 1, m)
                }
                An(t, "change", t, e)
            }
            function mo(t, e, n) {
                function r(t, i, o) {
                    if (t.linked)
                        for (var a = 0; a < t.linked.length; ++a) {
                            var s = t.linked[a];
                            if (s.doc != i) {
                                var l = o && s.sharedHist;
                                n && !l || (e(s.doc, l),
                                r(s.doc, t, l))
                            }
                        }
                }
                r(t, null, !0)
            }
            function yo(t, e) {
                if (e.cm)
                    throw new Error("This document is already in use.");
                t.doc = e,
                e.cm = t,
                Nr(t),
                fo(t),
                bo(t),
                t.options.direction = e.direction,
                t.options.lineWrapping || sn(t),
                t.options.mode = e.modeOption,
                Hr(t)
            }
            function bo(t) {
                ("rtl" == t.doc.direction ? N : T)(t.display.lineDiv, "CodeMirror-rtl")
            }
            function wo(t) {
                Mi(t, (function() {
                    bo(t),
                    Hr(t)
                }
                ))
            }
            function xo(t) {
                this.done = [],
                this.undone = [],
                this.undoDepth = t ? t.undoDepth : 1 / 0,
                this.lastModTime = this.lastSelTime = 0,
                this.lastOp = this.lastSelOp = null,
                this.lastOrigin = this.lastSelOrigin = null,
                this.generation = this.maxGeneration = t ? t.maxGeneration : 1
            }
            function _o(t, e) {
                var n = {
                    from: se(e.from),
                    to: so(e),
                    text: Yt(t, e.from, e.to)
                };
                return Lo(t, n, e.from.line, e.to.line + 1),
                mo(t, (function(t) {
                    return Lo(t, n, e.from.line, e.to.line + 1)
                }
                ), !0),
                n
            }
            function ko(t) {
                while (t.length) {
                    var e = X(t);
                    if (!e.ranges)
                        break;
                    t.pop()
                }
            }
            function Co(t, e) {
                return e ? (ko(t.done),
                X(t.done)) : t.done.length && !X(t.done).ranges ? X(t.done) : t.done.length > 1 && !t.done[t.done.length - 2].ranges ? (t.done.pop(),
                X(t.done)) : void 0
            }
            function So(t, e, n, r) {
                var i = t.history;
                i.undone.length = 0;
                var o, a, s = +new Date;
                if ((i.lastOp == r || i.lastOrigin == e.origin && e.origin && ("+" == e.origin.charAt(0) && i.lastModTime > s - (t.cm ? t.cm.options.historyEventDelay : 500) || "*" == e.origin.charAt(0))) && (o = Co(i, i.lastOp == r)))
                    a = X(o.changes),
                    0 == oe(e.from, e.to) && 0 == oe(e.from, a.to) ? a.to = so(e) : o.changes.push(_o(t, e));
                else {
                    var l = X(i.done);
                    l && l.ranges || Ao(t.sel, i.done),
                    o = {
                        changes: [_o(t, e)],
                        generation: i.generation
                    },
                    i.done.push(o);
                    while (i.done.length > i.undoDepth)
                        i.done.shift(),
                        i.done[0].ranges || i.done.shift()
                }
                i.done.push(n),
                i.generation = ++i.maxGeneration,
                i.lastModTime = i.lastSelTime = s,
                i.lastOp = i.lastSelOp = r,
                i.lastOrigin = i.lastSelOrigin = e.origin,
                a || mt(t, "historyAdded")
            }
            function To(t, e, n, r) {
                var i = e.charAt(0);
                return "*" == i || "+" == i && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date - t.history.lastSelTime <= (t.cm ? t.cm.options.historyEventDelay : 500)
            }
            function Oo(t, e, n, r) {
                var i = t.history
                  , o = r && r.origin;
                n == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || To(t, o, X(i.done), e)) ? i.done[i.done.length - 1] = e : Ao(e, i.done),
                i.lastSelTime = +new Date,
                i.lastSelOrigin = o,
                i.lastSelOp = n,
                r && !1 !== r.clearRedo && ko(i.undone)
            }
            function Ao(t, e) {
                var n = X(e);
                n && n.ranges && n.equals(t) || e.push(t)
            }
            function Lo(t, e, n, r) {
                var i = e["spans_" + t.id]
                  , o = 0;
                t.iter(Math.max(t.first, n), Math.min(t.first + t.size, r), (function(n) {
                    n.markedSpans && ((i || (i = e["spans_" + t.id] = {}))[o] = n.markedSpans),
                    ++o
                }
                ))
            }
            function Mo(t) {
                if (!t)
                    return null;
                for (var e, n = 0; n < t.length; ++n)
                    t[n].marker.explicitlyCleared ? e || (e = t.slice(0, n)) : e && e.push(t[n]);
                return e ? e.length ? e : null : t
            }
            function Eo(t, e) {
                var n = e["spans_" + t.id];
                if (!n)
                    return null;
                for (var r = [], i = 0; i < e.text.length; ++i)
                    r.push(Mo(n[i]));
                return r
            }
            function Do(t, e) {
                var n = Eo(t, e)
                  , r = Ie(t, e);
                if (!n)
                    return r;
                if (!r)
                    return n;
                for (var i = 0; i < n.length; ++i) {
                    var o = n[i]
                      , a = r[i];
                    if (o && a)
                        t: for (var s = 0; s < a.length; ++s) {
                            for (var l = a[s], c = 0; c < o.length; ++c)
                                if (o[c].marker == l.marker)
                                    continue t;
                            o.push(l)
                        }
                    else
                        a && (n[i] = a)
                }
                return n
            }
            function No(t, e, n) {
                for (var r = [], i = 0; i < t.length; ++i) {
                    var o = t[i];
                    if (o.ranges)
                        r.push(n ? ro.prototype.deepCopy.call(o) : o);
                    else {
                        var a = o.changes
                          , s = [];
                        r.push({
                            changes: s
                        });
                        for (var l = 0; l < a.length; ++l) {
                            var c = a[l]
                              , u = void 0;
                            if (s.push({
                                from: c.from,
                                to: c.to,
                                text: c.text
                            }),
                            e)
                                for (var h in c)
                                    (u = h.match(/^spans_(\d+)$/)) && F(e, Number(u[1])) > -1 && (X(s)[h] = c[h],
                                    delete c[h])
                        }
                    }
                }
                return r
            }
            function Ro(t, e, n, r) {
                if (r) {
                    var i = t.anchor;
                    if (n) {
                        var o = oe(e, i) < 0;
                        o != oe(n, i) < 0 ? (i = e,
                        e = n) : o != oe(e, n) < 0 && (e = n)
                    }
                    return new io(i,e)
                }
                return new io(n || e,e)
            }
            function jo(t, e, n, r, i) {
                null == i && (i = t.cm && (t.cm.display.shift || t.extend)),
                zo(t, new ro([Ro(t.sel.primary(), e, n, i)],0), r)
            }
            function Ho(t, e, n) {
                for (var r = [], i = t.cm && (t.cm.display.shift || t.extend), o = 0; o < t.sel.ranges.length; o++)
                    r[o] = Ro(t.sel.ranges[o], e[o], null, i);
                var a = oo(t.cm, r, t.sel.primIndex);
                zo(t, a, n)
            }
            function Bo(t, e, n, r) {
                var i = t.sel.ranges.slice(0);
                i[e] = n,
                zo(t, oo(t.cm, i, t.sel.primIndex), r)
            }
            function Io(t, e, n, r) {
                zo(t, ao(e, n), r)
            }
            function Po(t, e, n) {
                var r = {
                    ranges: e.ranges,
                    update: function(e) {
                        this.ranges = [];
                        for (var n = 0; n < e.length; n++)
                            this.ranges[n] = new io(he(t, e[n].anchor),he(t, e[n].head))
                    },
                    origin: n && n.origin
                };
                return mt(t, "beforeSelectionChange", t, r),
                t.cm && mt(t.cm, "beforeSelectionChange", t.cm, r),
                r.ranges != e.ranges ? oo(t.cm, r.ranges, r.ranges.length - 1) : e
            }
            function Fo(t, e, n) {
                var r = t.history.done
                  , i = X(r);
                i && i.ranges ? (r[r.length - 1] = e,
                Wo(t, e, n)) : zo(t, e, n)
            }
            function zo(t, e, n) {
                Wo(t, e, n),
                Oo(t, t.sel, t.cm ? t.cm.curOp.id : NaN, n)
            }
            function Wo(t, e, n) {
                (wt(t, "beforeSelectionChange") || t.cm && wt(t.cm, "beforeSelectionChange")) && (e = Po(t, e, n));
                var r = n && n.bias || (oe(e.primary().head, t.sel.primary().head) < 0 ? -1 : 1);
                Ko(t, Vo(t, e, r, !0)),
                n && !1 === n.scroll || !t.cm || "nocursor" == t.cm.getOption("readOnly") || ai(t.cm)
            }
            function Ko(t, e) {
                e.equals(t.sel) || (t.sel = e,
                t.cm && (t.cm.curOp.updateInput = 1,
                t.cm.curOp.selectionChanged = !0,
                bt(t.cm)),
                An(t, "cursorActivity", t))
            }
            function Uo(t) {
                Ko(t, Vo(t, t.sel, null, !1))
            }
            function Vo(t, e, n, r) {
                for (var i, o = 0; o < e.ranges.length; o++) {
                    var a = e.ranges[o]
                      , s = e.ranges.length == t.sel.ranges.length && t.sel.ranges[o]
                      , l = qo(t, a.anchor, s && s.anchor, n, r)
                      , c = qo(t, a.head, s && s.head, n, r);
                    (i || l != a.anchor || c != a.head) && (i || (i = e.ranges.slice(0, o)),
                    i[o] = new io(l,c))
                }
                return i ? oo(t.cm, i, e.primIndex) : e
            }
            function $o(t, e, n, r, i) {
                var o = Jt(t, e.line);
                if (o.markedSpans)
                    for (var a = 0; a < o.markedSpans.length; ++a) {
                        var s = o.markedSpans[a]
                          , l = s.marker
                          , c = "selectLeft"in l ? !l.selectLeft : l.inclusiveLeft
                          , u = "selectRight"in l ? !l.selectRight : l.inclusiveRight;
                        if ((null == s.from || (c ? s.from <= e.ch : s.from < e.ch)) && (null == s.to || (u ? s.to >= e.ch : s.to > e.ch))) {
                            if (i && (mt(l, "beforeCursorEnter"),
                            l.explicitlyCleared)) {
                                if (o.markedSpans) {
                                    --a;
                                    continue
                                }
                                break
                            }
                            if (!l.atomic)
                                continue;
                            if (n) {
                                var h = l.find(r < 0 ? 1 : -1)
                                  , f = void 0;
                                if ((r < 0 ? u : c) && (h = Go(t, h, -r, h && h.line == e.line ? o : null)),
                                h && h.line == e.line && (f = oe(h, n)) && (r < 0 ? f < 0 : f > 0))
                                    return $o(t, h, e, r, i)
                            }
                            var d = l.find(r < 0 ? -1 : 1);
                            return (r < 0 ? c : u) && (d = Go(t, d, r, d.line == e.line ? o : null)),
                            d ? $o(t, d, e, r, i) : null
                        }
                    }
                return e
            }
            function qo(t, e, n, r, i) {
                var o = r || 1
                  , a = $o(t, e, n, o, i) || !i && $o(t, e, n, o, !0) || $o(t, e, n, -o, i) || !i && $o(t, e, n, -o, !0);
                return a || (t.cantEdit = !0,
                ie(t.first, 0))
            }
            function Go(t, e, n, r) {
                return n < 0 && 0 == e.ch ? e.line > t.first ? he(t, ie(e.line - 1)) : null : n > 0 && e.ch == (r || Jt(t, e.line)).text.length ? e.line < t.first + t.size - 1 ? ie(e.line + 1, 0) : null : new ie(e.line,e.ch + n)
            }
            function Xo(t) {
                t.setSelection(ie(t.firstLine(), 0), ie(t.lastLine()), K)
            }
            function Jo(t, e, n) {
                var r = {
                    canceled: !1,
                    from: e.from,
                    to: e.to,
                    text: e.text,
                    origin: e.origin,
                    cancel: function() {
                        return r.canceled = !0
                    }
                };
                return n && (r.update = function(e, n, i, o) {
                    e && (r.from = he(t, e)),
                    n && (r.to = he(t, n)),
                    i && (r.text = i),
                    void 0 !== o && (r.origin = o)
                }
                ),
                mt(t, "beforeChange", t, r),
                t.cm && mt(t.cm, "beforeChange", t.cm, r),
                r.canceled ? (t.cm && (t.cm.curOp.updateInput = 2),
                null) : {
                    from: r.from,
                    to: r.to,
                    text: r.text,
                    origin: r.origin
                }
            }
            function Yo(t, e, n) {
                if (t.cm) {
                    if (!t.cm.curOp)
                        return Ei(t.cm, Yo)(t, e, n);
                    if (t.cm.state.suppressEdits)
                        return
                }
                if (!(wt(t, "beforeChange") || t.cm && wt(t.cm, "beforeChange")) || (e = Jo(t, e, !0),
                e)) {
                    var r = Ae && !n && Fe(t, e.from, e.to);
                    if (r)
                        for (var i = r.length - 1; i >= 0; --i)
                            Zo(t, {
                                from: r[i].from,
                                to: r[i].to,
                                text: i ? [""] : e.text,
                                origin: e.origin
                            });
                    else
                        Zo(t, e)
                }
            }
            function Zo(t, e) {
                if (1 != e.text.length || "" != e.text[0] || 0 != oe(e.from, e.to)) {
                    var n = co(t, e);
                    So(t, e, n, t.cm ? t.cm.curOp.id : NaN),
                    ea(t, e, n, Ie(t, e));
                    var r = [];
                    mo(t, (function(t, n) {
                        n || -1 != F(r, t.history) || (aa(t.history, e),
                        r.push(t.history)),
                        ea(t, e, null, Ie(t, e))
                    }
                    ))
                }
            }
            function Qo(t, e, n) {
                var r = t.cm && t.cm.state.suppressEdits;
                if (!r || n) {
                    for (var i, o = t.history, a = t.sel, s = "undo" == e ? o.done : o.undone, l = "undo" == e ? o.undone : o.done, c = 0; c < s.length; c++)
                        if (i = s[c],
                        n ? i.ranges && !i.equals(t.sel) : !i.ranges)
                            break;
                    if (c != s.length) {
                        for (o.lastOrigin = o.lastSelOrigin = null; ; ) {
                            if (i = s.pop(),
                            !i.ranges) {
                                if (r)
                                    return void s.push(i);
                                break
                            }
                            if (Ao(i, l),
                            n && !i.equals(t.sel))
                                return void zo(t, i, {
                                    clearRedo: !1
                                });
                            a = i
                        }
                        var u = [];
                        Ao(a, l),
                        l.push({
                            changes: u,
                            generation: o.generation
                        }),
                        o.generation = i.generation || ++o.maxGeneration;
                        for (var h = wt(t, "beforeChange") || t.cm && wt(t.cm, "beforeChange"), f = function(n) {
                            var r = i.changes[n];
                            if (r.origin = e,
                            h && !Jo(t, r, !1))
                                return s.length = 0,
                                {};
                            u.push(_o(t, r));
                            var o = n ? co(t, r) : X(s);
                            ea(t, r, o, Do(t, r)),
                            !n && t.cm && t.cm.scrollIntoView({
                                from: r.from,
                                to: so(r)
                            });
                            var a = [];
                            mo(t, (function(t, e) {
                                e || -1 != F(a, t.history) || (aa(t.history, r),
                                a.push(t.history)),
                                ea(t, r, null, Do(t, r))
                            }
                            ))
                        }, d = i.changes.length - 1; d >= 0; --d) {
                            var p = f(d);
                            if (p)
                                return p.v
                        }
                    }
                }
            }
            function ta(t, e) {
                if (0 != e && (t.first += e,
                t.sel = new ro(J(t.sel.ranges, (function(t) {
                    return new io(ie(t.anchor.line + e, t.anchor.ch),ie(t.head.line + e, t.head.ch))
                }
                )),t.sel.primIndex),
                t.cm)) {
                    Hr(t.cm, t.first, t.first - e, e);
                    for (var n = t.cm.display, r = n.viewFrom; r < n.viewTo; r++)
                        Br(t.cm, r, "gutter")
                }
            }
            function ea(t, e, n, r) {
                if (t.cm && !t.cm.curOp)
                    return Ei(t.cm, ea)(t, e, n, r);
                if (e.to.line < t.first)
                    ta(t, e.text.length - 1 - (e.to.line - e.from.line));
                else if (!(e.from.line > t.lastLine())) {
                    if (e.from.line < t.first) {
                        var i = e.text.length - 1 - (t.first - e.from.line);
                        ta(t, i),
                        e = {
                            from: ie(t.first, 0),
                            to: ie(e.to.line + i, e.to.ch),
                            text: [X(e.text)],
                            origin: e.origin
                        }
                    }
                    var o = t.lastLine();
                    e.to.line > o && (e = {
                        from: e.from,
                        to: ie(o, Jt(t, o).text.length),
                        text: [e.text[0]],
                        origin: e.origin
                    }),
                    e.removed = Yt(t, e.from, e.to),
                    n || (n = co(t, e)),
                    t.cm ? na(t.cm, e, r) : vo(t, e, r),
                    Wo(t, n, K),
                    t.cantEdit && qo(t, ie(t.firstLine(), 0)) && (t.cantEdit = !1)
                }
            }
            function na(t, e, n) {
                var r = t.doc
                  , i = t.display
                  , o = e.from
                  , a = e.to
                  , s = !1
                  , l = o.line;
                t.options.lineWrapping || (l = te(Ye(Jt(r, o.line))),
                r.iter(l, a.line + 1, (function(t) {
                    if (t == i.maxLine)
                        return s = !0,
                        !0
                }
                ))),
                r.sel.contains(e.from, e.to) > -1 && bt(t),
                vo(r, e, n, Dr(t)),
                t.options.lineWrapping || (r.iter(l, o.line + e.text.length, (function(t) {
                    var e = an(t);
                    e > i.maxLineLength && (i.maxLine = t,
                    i.maxLineLength = e,
                    i.maxLineChanged = !0,
                    s = !1)
                }
                )),
                s && (t.curOp.updateMaxLine = !0)),
                Oe(r, o.line),
                Ri(t, 400);
                var c = e.text.length - (a.line - o.line) - 1;
                e.full ? Hr(t) : o.line != a.line || 1 != e.text.length || go(t.doc, e) ? Hr(t, o.line, a.line + 1, c) : Br(t, o.line, "text");
                var u = wt(t, "changes")
                  , h = wt(t, "change");
                if (h || u) {
                    var f = {
                        from: o,
                        to: a,
                        text: e.text,
                        removed: e.removed,
                        origin: e.origin
                    };
                    h && An(t, "change", t, f),
                    u && (t.curOp.changeObjs || (t.curOp.changeObjs = [])).push(f)
                }
                t.display.selForContextMenu = null
            }
            function ra(t, e, n, r, i) {
                var o;
                r || (r = n),
                oe(r, n) < 0 && (o = [r, n],
                n = o[0],
                r = o[1]),
                "string" == typeof e && (e = t.splitLines(e)),
                Yo(t, {
                    from: n,
                    to: r,
                    text: e,
                    origin: i
                })
            }
            function ia(t, e, n, r) {
                n < t.line ? t.line += r : e < t.line && (t.line = e,
                t.ch = 0)
            }
            function oa(t, e, n, r) {
                for (var i = 0; i < t.length; ++i) {
                    var o = t[i]
                      , a = !0;
                    if (o.ranges) {
                        o.copied || (o = t[i] = o.deepCopy(),
                        o.copied = !0);
                        for (var s = 0; s < o.ranges.length; s++)
                            ia(o.ranges[s].anchor, e, n, r),
                            ia(o.ranges[s].head, e, n, r)
                    } else {
                        for (var l = 0; l < o.changes.length; ++l) {
                            var c = o.changes[l];
                            if (n < c.from.line)
                                c.from = ie(c.from.line + r, c.from.ch),
                                c.to = ie(c.to.line + r, c.to.ch);
                            else if (e <= c.to.line) {
                                a = !1;
                                break
                            }
                        }
                        a || (t.splice(0, i + 1),
                        i = 0)
                    }
                }
            }
            function aa(t, e) {
                var n = e.from.line
                  , r = e.to.line
                  , i = e.text.length - (r - n) - 1;
                oa(t.done, n, r, i),
                oa(t.undone, n, r, i)
            }
            function sa(t, e, n, r) {
                var i = e
                  , o = e;
                return "number" == typeof e ? o = Jt(t, ue(t, e)) : i = te(e),
                null == i ? null : (r(o, i) && t.cm && Br(t.cm, i, n),
                o)
            }
            function la(t) {
                this.lines = t,
                this.parent = null;
                for (var e = 0, n = 0; n < t.length; ++n)
                    t[n].parent = this,
                    e += t[n].height;
                this.height = e
            }
            function ca(t) {
                this.children = t;
                for (var e = 0, n = 0, r = 0; r < t.length; ++r) {
                    var i = t[r];
                    e += i.chunkSize(),
                    n += i.height,
                    i.parent = this
                }
                this.size = e,
                this.height = n,
                this.parent = null
            }
            io.prototype.from = function() {
                return ce(this.anchor, this.head)
            }
            ,
            io.prototype.to = function() {
                return le(this.anchor, this.head)
            }
            ,
            io.prototype.empty = function() {
                return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
            }
            ,
            la.prototype = {
                chunkSize: function() {
                    return this.lines.length
                },
                removeInner: function(t, e) {
                    for (var n = t, r = t + e; n < r; ++n) {
                        var i = this.lines[n];
                        this.height -= i.height,
                        un(i),
                        An(i, "delete")
                    }
                    this.lines.splice(t, e)
                },
                collapse: function(t) {
                    t.push.apply(t, this.lines)
                },
                insertInner: function(t, e, n) {
                    this.height += n,
                    this.lines = this.lines.slice(0, t).concat(e).concat(this.lines.slice(t));
                    for (var r = 0; r < e.length; ++r)
                        e[r].parent = this
                },
                iterN: function(t, e, n) {
                    for (var r = t + e; t < r; ++t)
                        if (n(this.lines[t]))
                            return !0
                }
            },
            ca.prototype = {
                chunkSize: function() {
                    return this.size
                },
                removeInner: function(t, e) {
                    this.size -= e;
                    for (var n = 0; n < this.children.length; ++n) {
                        var r = this.children[n]
                          , i = r.chunkSize();
                        if (t < i) {
                            var o = Math.min(e, i - t)
                              , a = r.height;
                            if (r.removeInner(t, o),
                            this.height -= a - r.height,
                            i == o && (this.children.splice(n--, 1),
                            r.parent = null),
                            0 == (e -= o))
                                break;
                            t = 0
                        } else
                            t -= i
                    }
                    if (this.size - e < 25 && (this.children.length > 1 || !(this.children[0]instanceof la))) {
                        var s = [];
                        this.collapse(s),
                        this.children = [new la(s)],
                        this.children[0].parent = this
                    }
                },
                collapse: function(t) {
                    for (var e = 0; e < this.children.length; ++e)
                        this.children[e].collapse(t)
                },
                insertInner: function(t, e, n) {
                    this.size += e.length,
                    this.height += n;
                    for (var r = 0; r < this.children.length; ++r) {
                        var i = this.children[r]
                          , o = i.chunkSize();
                        if (t <= o) {
                            if (i.insertInner(t, e, n),
                            i.lines && i.lines.length > 50) {
                                for (var a = i.lines.length % 25 + 25, s = a; s < i.lines.length; ) {
                                    var l = new la(i.lines.slice(s, s += 25));
                                    i.height -= l.height,
                                    this.children.splice(++r, 0, l),
                                    l.parent = this
                                }
                                i.lines = i.lines.slice(0, a),
                                this.maybeSpill()
                            }
                            break
                        }
                        t -= o
                    }
                },
                maybeSpill: function() {
                    if (!(this.children.length <= 10)) {
                        var t = this;
                        do {
                            var e = t.children.splice(t.children.length - 5, 5)
                              , n = new ca(e);
                            if (t.parent) {
                                t.size -= n.size,
                                t.height -= n.height;
                                var r = F(t.parent.children, t);
                                t.parent.children.splice(r + 1, 0, n)
                            } else {
                                var i = new ca(t.children);
                                i.parent = t,
                                t.children = [i, n],
                                t = i
                            }
                            n.parent = t.parent
                        } while (t.children.length > 10);
                        t.parent.maybeSpill()
                    }
                },
                iterN: function(t, e, n) {
                    for (var r = 0; r < this.children.length; ++r) {
                        var i = this.children[r]
                          , o = i.chunkSize();
                        if (t < o) {
                            var a = Math.min(e, o - t);
                            if (i.iterN(t, a, n))
                                return !0;
                            if (0 == (e -= a))
                                break;
                            t = 0
                        } else
                            t -= o
                    }
                }
            };
            var ua = function(t, e, n) {
                if (n)
                    for (var r in n)
                        n.hasOwnProperty(r) && (this[r] = n[r]);
                this.doc = t,
                this.node = e
            };
            function ha(t, e, n) {
                on(e) < (t.curOp && t.curOp.scrollTop || t.doc.scrollTop) && oi(t, n)
            }
            function fa(t, e, n, r) {
                var i = new ua(t,n,r)
                  , o = t.cm;
                return o && i.noHScroll && (o.display.alignWidgets = !0),
                sa(t, e, "widget", (function(e) {
                    var n = e.widgets || (e.widgets = []);
                    if (null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length, Math.max(0, i.insertAt)), 0, i),
                    i.line = e,
                    o && !nn(t, e)) {
                        var r = on(e) < t.scrollTop;
                        Qt(e, e.height + Wn(i)),
                        r && oi(o, i.height),
                        o.curOp.forceUpdate = !0
                    }
                    return !0
                }
                )),
                o && An(o, "lineWidgetAdded", o, i, "number" == typeof e ? e : te(e)),
                i
            }
            ua.prototype.clear = function() {
                var t = this.doc.cm
                  , e = this.line.widgets
                  , n = this.line
                  , r = te(n);
                if (null != r && e) {
                    for (var i = 0; i < e.length; ++i)
                        e[i] == this && e.splice(i--, 1);
                    e.length || (n.widgets = null);
                    var o = Wn(this);
                    Qt(n, Math.max(0, n.height - o)),
                    t && (Mi(t, (function() {
                        ha(t, n, -o),
                        Br(t, r, "widget")
                    }
                    )),
                    An(t, "lineWidgetCleared", t, this, r))
                }
            }
            ,
            ua.prototype.changed = function() {
                var t = this
                  , e = this.height
                  , n = this.doc.cm
                  , r = this.line;
                this.height = null;
                var i = Wn(this) - e;
                i && (nn(this.doc, r) || Qt(r, r.height + i),
                n && Mi(n, (function() {
                    n.curOp.forceUpdate = !0,
                    ha(n, r, i),
                    An(n, "lineWidgetChanged", n, t, te(r))
                }
                )))
            }
            ,
            xt(ua);
            var da = 0
              , pa = function(t, e) {
                this.lines = [],
                this.type = e,
                this.doc = t,
                this.id = ++da
            };
            function ga(t, e, n, r, i) {
                if (r && r.shared)
                    return ma(t, e, n, r, i);
                if (t.cm && !t.cm.curOp)
                    return Ei(t.cm, ga)(t, e, n, r, i);
                var o = new pa(t,i)
                  , a = oe(e, n);
                if (r && B(r, o, !1),
                a > 0 || 0 == a && !1 !== o.clearWhenEmpty)
                    return o;
                if (o.replacedWith && (o.collapsed = !0,
                o.widgetNode = M("span", [o.replacedWith], "CodeMirror-widget"),
                r.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"),
                r.insertLeft && (o.widgetNode.insertLeft = !0)),
                o.collapsed) {
                    if (Je(t, e.line, e, n, o) || e.line != n.line && Je(t, n.line, e, n, o))
                        throw new Error("Inserting collapsed marker partially overlapping an existing one");
                    Ee()
                }
                o.addToHistory && So(t, {
                    from: e,
                    to: n,
                    origin: "markText"
                }, t.sel, NaN);
                var s, l = e.line, c = t.cm;
                if (t.iter(l, n.line + 1, (function(r) {
                    c && o.collapsed && !c.options.lineWrapping && Ye(r) == c.display.maxLine && (s = !0),
                    o.collapsed && l != e.line && Qt(r, 0),
                    je(r, new De(o,l == e.line ? e.ch : null,l == n.line ? n.ch : null), t.cm && t.cm.curOp),
                    ++l
                }
                )),
                o.collapsed && t.iter(e.line, n.line + 1, (function(e) {
                    nn(t, e) && Qt(e, 0)
                }
                )),
                o.clearOnEnter && pt(o, "beforeCursorEnter", (function() {
                    return o.clear()
                }
                )),
                o.readOnly && (Me(),
                (t.history.done.length || t.history.undone.length) && t.clearHistory()),
                o.collapsed && (o.id = ++da,
                o.atomic = !0),
                c) {
                    if (s && (c.curOp.updateMaxLine = !0),
                    o.collapsed)
                        Hr(c, e.line, n.line + 1);
                    else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title)
                        for (var u = e.line; u <= n.line; u++)
                            Br(c, u, "text");
                    o.atomic && Uo(c.doc),
                    An(c, "markerAdded", c, o)
                }
                return o
            }
            pa.prototype.clear = function() {
                if (!this.explicitlyCleared) {
                    var t = this.doc.cm
                      , e = t && !t.curOp;
                    if (e && _i(t),
                    wt(this, "clear")) {
                        var n = this.find();
                        n && An(this, "clear", n.from, n.to)
                    }
                    for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
                        var a = this.lines[o]
                          , s = Ne(a.markedSpans, this);
                        t && !this.collapsed ? Br(t, te(a), "text") : t && (null != s.to && (i = te(a)),
                        null != s.from && (r = te(a))),
                        a.markedSpans = Re(a.markedSpans, s),
                        null == s.from && this.collapsed && !nn(this.doc, a) && t && Qt(a, Ar(t.display))
                    }
                    if (t && this.collapsed && !t.options.lineWrapping)
                        for (var l = 0; l < this.lines.length; ++l) {
                            var c = Ye(this.lines[l])
                              , u = an(c);
                            u > t.display.maxLineLength && (t.display.maxLine = c,
                            t.display.maxLineLength = u,
                            t.display.maxLineChanged = !0)
                        }
                    null != r && t && this.collapsed && Hr(t, r, i + 1),
                    this.lines.length = 0,
                    this.explicitlyCleared = !0,
                    this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1,
                    t && Uo(t.doc)),
                    t && An(t, "markerCleared", t, this, r, i),
                    e && ki(t),
                    this.parent && this.parent.clear()
                }
            }
            ,
            pa.prototype.find = function(t, e) {
                var n, r;
                null == t && "bookmark" == this.type && (t = 1);
                for (var i = 0; i < this.lines.length; ++i) {
                    var o = this.lines[i]
                      , a = Ne(o.markedSpans, this);
                    if (null != a.from && (n = ie(e ? o : te(o), a.from),
                    -1 == t))
                        return n;
                    if (null != a.to && (r = ie(e ? o : te(o), a.to),
                    1 == t))
                        return r
                }
                return n && {
                    from: n,
                    to: r
                }
            }
            ,
            pa.prototype.changed = function() {
                var t = this
                  , e = this.find(-1, !0)
                  , n = this
                  , r = this.doc.cm;
                e && r && Mi(r, (function() {
                    var i = e.line
                      , o = te(e.line)
                      , a = tr(r, o);
                    if (a && (cr(a),
                    r.curOp.selectionChanged = r.curOp.forceUpdate = !0),
                    r.curOp.updateMaxLine = !0,
                    !nn(n.doc, i) && null != n.height) {
                        var s = n.height;
                        n.height = null;
                        var l = Wn(n) - s;
                        l && Qt(i, i.height + l)
                    }
                    An(r, "markerChanged", r, t)
                }
                ))
            }
            ,
            pa.prototype.attachLine = function(t) {
                if (!this.lines.length && this.doc.cm) {
                    var e = this.doc.cm.curOp;
                    e.maybeHiddenMarkers && -1 != F(e.maybeHiddenMarkers, this) || (e.maybeUnhiddenMarkers || (e.maybeUnhiddenMarkers = [])).push(this)
                }
                this.lines.push(t)
            }
            ,
            pa.prototype.detachLine = function(t) {
                if (this.lines.splice(F(this.lines, t), 1),
                !this.lines.length && this.doc.cm) {
                    var e = this.doc.cm.curOp;
                    (e.maybeHiddenMarkers || (e.maybeHiddenMarkers = [])).push(this)
                }
            }
            ,
            xt(pa);
            var va = function(t, e) {
                this.markers = t,
                this.primary = e;
                for (var n = 0; n < t.length; ++n)
                    t[n].parent = this
            };
            function ma(t, e, n, r, i) {
                r = B(r),
                r.shared = !1;
                var o = [ga(t, e, n, r, i)]
                  , a = o[0]
                  , s = r.widgetNode;
                return mo(t, (function(t) {
                    s && (r.widgetNode = s.cloneNode(!0)),
                    o.push(ga(t, he(t, e), he(t, n), r, i));
                    for (var l = 0; l < t.linked.length; ++l)
                        if (t.linked[l].isParent)
                            return;
                    a = X(o)
                }
                )),
                new va(o,a)
            }
            function ya(t) {
                return t.findMarks(ie(t.first, 0), t.clipPos(ie(t.lastLine())), (function(t) {
                    return t.parent
                }
                ))
            }
            function ba(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n]
                      , i = r.find()
                      , o = t.clipPos(i.from)
                      , a = t.clipPos(i.to);
                    if (oe(o, a)) {
                        var s = ga(t, o, a, r.primary, r.primary.type);
                        r.markers.push(s),
                        s.parent = r
                    }
                }
            }
            function wa(t) {
                for (var e = function(e) {
                    var n = t[e]
                      , r = [n.primary.doc];
                    mo(n.primary.doc, (function(t) {
                        return r.push(t)
                    }
                    ));
                    for (var i = 0; i < n.markers.length; i++) {
                        var o = n.markers[i];
                        -1 == F(r, o.doc) && (o.parent = null,
                        n.markers.splice(i--, 1))
                    }
                }, n = 0; n < t.length; n++)
                    e(n)
            }
            va.prototype.clear = function() {
                if (!this.explicitlyCleared) {
                    this.explicitlyCleared = !0;
                    for (var t = 0; t < this.markers.length; ++t)
                        this.markers[t].clear();
                    An(this, "clear")
                }
            }
            ,
            va.prototype.find = function(t, e) {
                return this.primary.find(t, e)
            }
            ,
            xt(va);
            var xa = 0
              , _a = function(t, e, n, r, i) {
                if (!(this instanceof _a))
                    return new _a(t,e,n,r,i);
                null == n && (n = 0),
                ca.call(this, [new la([new ln("",null)])]),
                this.first = n,
                this.scrollTop = this.scrollLeft = 0,
                this.cantEdit = !1,
                this.cleanGeneration = 1,
                this.modeFrontier = this.highlightFrontier = n;
                var o = ie(n, 0);
                this.sel = ao(o),
                this.history = new xo(null),
                this.id = ++xa,
                this.modeOption = e,
                this.lineSep = r,
                this.direction = "rtl" == i ? "rtl" : "ltr",
                this.extend = !1,
                "string" == typeof t && (t = this.splitLines(t)),
                vo(this, {
                    from: o,
                    to: o,
                    text: t
                }),
                zo(this, ao(o), K)
            };
            _a.prototype = Q(ca.prototype, {
                constructor: _a,
                iter: function(t, e, n) {
                    n ? this.iterN(t - this.first, e - t, n) : this.iterN(this.first, this.first + this.size, t)
                },
                insert: function(t, e) {
                    for (var n = 0, r = 0; r < e.length; ++r)
                        n += e[r].height;
                    this.insertInner(t - this.first, e, n)
                },
                remove: function(t, e) {
                    this.removeInner(t - this.first, e)
                },
                getValue: function(t) {
                    var e = Zt(this, this.first, this.first + this.size);
                    return !1 === t ? e : e.join(t || this.lineSeparator())
                },
                setValue: Ni((function(t) {
                    var e = ie(this.first, 0)
                      , n = this.first + this.size - 1;
                    Yo(this, {
                        from: e,
                        to: ie(n, Jt(this, n).text.length),
                        text: this.splitLines(t),
                        origin: "setValue",
                        full: !0
                    }, !0),
                    this.cm && si(this.cm, 0, 0),
                    zo(this, ao(e), K)
                }
                )),
                replaceRange: function(t, e, n, r) {
                    e = he(this, e),
                    n = n ? he(this, n) : e,
                    ra(this, t, e, n, r)
                },
                getRange: function(t, e, n) {
                    var r = Yt(this, he(this, t), he(this, e));
                    return !1 === n ? r : "" === n ? r.join("") : r.join(n || this.lineSeparator())
                },
                getLine: function(t) {
                    var e = this.getLineHandle(t);
                    return e && e.text
                },
                getLineHandle: function(t) {
                    if (ne(this, t))
                        return Jt(this, t)
                },
                getLineNumber: function(t) {
                    return te(t)
                },
                getLineHandleVisualStart: function(t) {
                    return "number" == typeof t && (t = Jt(this, t)),
                    Ye(t)
                },
                lineCount: function() {
                    return this.size
                },
                firstLine: function() {
                    return this.first
                },
                lastLine: function() {
                    return this.first + this.size - 1
                },
                clipPos: function(t) {
                    return he(this, t)
                },
                getCursor: function(t) {
                    var e, n = this.sel.primary();
                    return e = null == t || "head" == t ? n.head : "anchor" == t ? n.anchor : "end" == t || "to" == t || !1 === t ? n.to() : n.from(),
                    e
                },
                listSelections: function() {
                    return this.sel.ranges
                },
                somethingSelected: function() {
                    return this.sel.somethingSelected()
                },
                setCursor: Ni((function(t, e, n) {
                    Io(this, he(this, "number" == typeof t ? ie(t, e || 0) : t), null, n)
                }
                )),
                setSelection: Ni((function(t, e, n) {
                    Io(this, he(this, t), he(this, e || t), n)
                }
                )),
                extendSelection: Ni((function(t, e, n) {
                    jo(this, he(this, t), e && he(this, e), n)
                }
                )),
                extendSelections: Ni((function(t, e) {
                    Ho(this, de(this, t), e)
                }
                )),
                extendSelectionsBy: Ni((function(t, e) {
                    var n = J(this.sel.ranges, t);
                    Ho(this, de(this, n), e)
                }
                )),
                setSelections: Ni((function(t, e, n) {
                    if (t.length) {
                        for (var r = [], i = 0; i < t.length; i++)
                            r[i] = new io(he(this, t[i].anchor),he(this, t[i].head || t[i].anchor));
                        null == e && (e = Math.min(t.length - 1, this.sel.primIndex)),
                        zo(this, oo(this.cm, r, e), n)
                    }
                }
                )),
                addSelection: Ni((function(t, e, n) {
                    var r = this.sel.ranges.slice(0);
                    r.push(new io(he(this, t),he(this, e || t))),
                    zo(this, oo(this.cm, r, r.length - 1), n)
                }
                )),
                getSelection: function(t) {
                    for (var e, n = this.sel.ranges, r = 0; r < n.length; r++) {
                        var i = Yt(this, n[r].from(), n[r].to());
                        e = e ? e.concat(i) : i
                    }
                    return !1 === t ? e : e.join(t || this.lineSeparator())
                },
                getSelections: function(t) {
                    for (var e = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
                        var i = Yt(this, n[r].from(), n[r].to());
                        !1 !== t && (i = i.join(t || this.lineSeparator())),
                        e[r] = i
                    }
                    return e
                },
                replaceSelection: function(t, e, n) {
                    for (var r = [], i = 0; i < this.sel.ranges.length; i++)
                        r[i] = t;
                    this.replaceSelections(r, e, n || "+input")
                },
                replaceSelections: Ni((function(t, e, n) {
                    for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
                        var a = i.ranges[o];
                        r[o] = {
                            from: a.from(),
                            to: a.to(),
                            text: this.splitLines(t[o]),
                            origin: n
                        }
                    }
                    for (var s = e && "end" != e && ho(this, r, e), l = r.length - 1; l >= 0; l--)
                        Yo(this, r[l]);
                    s ? Fo(this, s) : this.cm && ai(this.cm)
                }
                )),
                undo: Ni((function() {
                    Qo(this, "undo")
                }
                )),
                redo: Ni((function() {
                    Qo(this, "redo")
                }
                )),
                undoSelection: Ni((function() {
                    Qo(this, "undo", !0)
                }
                )),
                redoSelection: Ni((function() {
                    Qo(this, "redo", !0)
                }
                )),
                setExtending: function(t) {
                    this.extend = t
                },
                getExtending: function() {
                    return this.extend
                },
                historySize: function() {
                    for (var t = this.history, e = 0, n = 0, r = 0; r < t.done.length; r++)
                        t.done[r].ranges || ++e;
                    for (var i = 0; i < t.undone.length; i++)
                        t.undone[i].ranges || ++n;
                    return {
                        undo: e,
                        redo: n
                    }
                },
                clearHistory: function() {
                    var t = this;
                    this.history = new xo(this.history),
                    mo(this, (function(e) {
                        return e.history = t.history
                    }
                    ), !0)
                },
                markClean: function() {
                    this.cleanGeneration = this.changeGeneration(!0)
                },
                changeGeneration: function(t) {
                    return t && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
                    this.history.generation
                },
                isClean: function(t) {
                    return this.history.generation == (t || this.cleanGeneration)
                },
                getHistory: function() {
                    return {
                        done: No(this.history.done),
                        undone: No(this.history.undone)
                    }
                },
                setHistory: function(t) {
                    var e = this.history = new xo(this.history);
                    e.done = No(t.done.slice(0), null, !0),
                    e.undone = No(t.undone.slice(0), null, !0)
                },
                setGutterMarker: Ni((function(t, e, n) {
                    return sa(this, t, "gutter", (function(t) {
                        var r = t.gutterMarkers || (t.gutterMarkers = {});
                        return r[e] = n,
                        !n && rt(r) && (t.gutterMarkers = null),
                        !0
                    }
                    ))
                }
                )),
                clearGutter: Ni((function(t) {
                    var e = this;
                    this.iter((function(n) {
                        n.gutterMarkers && n.gutterMarkers[t] && sa(e, n, "gutter", (function() {
                            return n.gutterMarkers[t] = null,
                            rt(n.gutterMarkers) && (n.gutterMarkers = null),
                            !0
                        }
                        ))
                    }
                    ))
                }
                )),
                lineInfo: function(t) {
                    var e;
                    if ("number" == typeof t) {
                        if (!ne(this, t))
                            return null;
                        if (e = t,
                        t = Jt(this, t),
                        !t)
                            return null
                    } else if (e = te(t),
                    null == e)
                        return null;
                    return {
                        line: e,
                        handle: t,
                        text: t.text,
                        gutterMarkers: t.gutterMarkers,
                        textClass: t.textClass,
                        bgClass: t.bgClass,
                        wrapClass: t.wrapClass,
                        widgets: t.widgets
                    }
                },
                addLineClass: Ni((function(t, e, n) {
                    return sa(this, t, "gutter" == e ? "gutter" : "class", (function(t) {
                        var r = "text" == e ? "textClass" : "background" == e ? "bgClass" : "gutter" == e ? "gutterClass" : "wrapClass";
                        if (t[r]) {
                            if (C(n).test(t[r]))
                                return !1;
                            t[r] += " " + n
                        } else
                            t[r] = n;
                        return !0
                    }
                    ))
                }
                )),
                removeLineClass: Ni((function(t, e, n) {
                    return sa(this, t, "gutter" == e ? "gutter" : "class", (function(t) {
                        var r = "text" == e ? "textClass" : "background" == e ? "bgClass" : "gutter" == e ? "gutterClass" : "wrapClass"
                          , i = t[r];
                        if (!i)
                            return !1;
                        if (null == n)
                            t[r] = null;
                        else {
                            var o = i.match(C(n));
                            if (!o)
                                return !1;
                            var a = o.index + o[0].length;
                            t[r] = i.slice(0, o.index) + (o.index && a != i.length ? " " : "") + i.slice(a) || null
                        }
                        return !0
                    }
                    ))
                }
                )),
                addLineWidget: Ni((function(t, e, n) {
                    return fa(this, t, e, n)
                }
                )),
                removeLineWidget: function(t) {
                    t.clear()
                },
                markText: function(t, e, n) {
                    return ga(this, he(this, t), he(this, e), n, n && n.type || "range")
                },
                setBookmark: function(t, e) {
                    var n = {
                        replacedWith: e && (null == e.nodeType ? e.widget : e),
                        insertLeft: e && e.insertLeft,
                        clearWhenEmpty: !1,
                        shared: e && e.shared,
                        handleMouseEvents: e && e.handleMouseEvents
                    };
                    return t = he(this, t),
                    ga(this, t, t, n, "bookmark")
                },
                findMarksAt: function(t) {
                    t = he(this, t);
                    var e = []
                      , n = Jt(this, t.line).markedSpans;
                    if (n)
                        for (var r = 0; r < n.length; ++r) {
                            var i = n[r];
                            (null == i.from || i.from <= t.ch) && (null == i.to || i.to >= t.ch) && e.push(i.marker.parent || i.marker)
                        }
                    return e
                },
                findMarks: function(t, e, n) {
                    t = he(this, t),
                    e = he(this, e);
                    var r = []
                      , i = t.line;
                    return this.iter(t.line, e.line + 1, (function(o) {
                        var a = o.markedSpans;
                        if (a)
                            for (var s = 0; s < a.length; s++) {
                                var l = a[s];
                                null != l.to && i == t.line && t.ch >= l.to || null == l.from && i != t.line || null != l.from && i == e.line && l.from >= e.ch || n && !n(l.marker) || r.push(l.marker.parent || l.marker)
                            }
                        ++i
                    }
                    )),
                    r
                },
                getAllMarks: function() {
                    var t = [];
                    return this.iter((function(e) {
                        var n = e.markedSpans;
                        if (n)
                            for (var r = 0; r < n.length; ++r)
                                null != n[r].from && t.push(n[r].marker)
                    }
                    )),
                    t
                },
                posFromIndex: function(t) {
                    var e, n = this.first, r = this.lineSeparator().length;
                    return this.iter((function(i) {
                        var o = i.text.length + r;
                        if (o > t)
                            return e = t,
                            !0;
                        t -= o,
                        ++n
                    }
                    )),
                    he(this, ie(n, e))
                },
                indexFromPos: function(t) {
                    t = he(this, t);
                    var e = t.ch;
                    if (t.line < this.first || t.ch < 0)
                        return 0;
                    var n = this.lineSeparator().length;
                    return this.iter(this.first, t.line, (function(t) {
                        e += t.text.length + n
                    }
                    )),
                    e
                },
                copy: function(t) {
                    var e = new _a(Zt(this, this.first, this.first + this.size),this.modeOption,this.first,this.lineSep,this.direction);
                    return e.scrollTop = this.scrollTop,
                    e.scrollLeft = this.scrollLeft,
                    e.sel = this.sel,
                    e.extend = !1,
                    t && (e.history.undoDepth = this.history.undoDepth,
                    e.setHistory(this.getHistory())),
                    e
                },
                linkedDoc: function(t) {
                    t || (t = {});
                    var e = this.first
                      , n = this.first + this.size;
                    null != t.from && t.from > e && (e = t.from),
                    null != t.to && t.to < n && (n = t.to);
                    var r = new _a(Zt(this, e, n),t.mode || this.modeOption,e,this.lineSep,this.direction);
                    return t.sharedHist && (r.history = this.history),
                    (this.linked || (this.linked = [])).push({
                        doc: r,
                        sharedHist: t.sharedHist
                    }),
                    r.linked = [{
                        doc: this,
                        isParent: !0,
                        sharedHist: t.sharedHist
                    }],
                    ba(r, ya(this)),
                    r
                },
                unlinkDoc: function(t) {
                    if (t instanceof Hs && (t = t.doc),
                    this.linked)
                        for (var e = 0; e < this.linked.length; ++e) {
                            var n = this.linked[e];
                            if (n.doc == t) {
                                this.linked.splice(e, 1),
                                t.unlinkDoc(this),
                                wa(ya(this));
                                break
                            }
                        }
                    if (t.history == this.history) {
                        var r = [t.id];
                        mo(t, (function(t) {
                            return r.push(t.id)
                        }
                        ), !0),
                        t.history = new xo(null),
                        t.history.done = No(this.history.done, r),
                        t.history.undone = No(this.history.undone, r)
                    }
                },
                iterLinkedDocs: function(t) {
                    mo(this, t)
                },
                getMode: function() {
                    return this.mode
                },
                getEditor: function() {
                    return this.cm
                },
                splitLines: function(t) {
                    return this.lineSep ? t.split(this.lineSep) : Nt(t)
                },
                lineSeparator: function() {
                    return this.lineSep || "\n"
                },
                setDirection: Ni((function(t) {
                    "rtl" != t && (t = "ltr"),
                    t != this.direction && (this.direction = t,
                    this.iter((function(t) {
                        return t.order = null
                    }
                    )),
                    this.cm && wo(this.cm))
                }
                ))
            }),
            _a.prototype.eachLine = _a.prototype.iter;
            var ka = 0;
            function Ca(t) {
                var e = this;
                if (Oa(e),
                !yt(e, t) && !Kn(e.display, t)) {
                    _t(t),
                    a && (ka = +new Date);
                    var n = Rr(e, t, !0)
                      , r = t.dataTransfer.files;
                    if (n && !e.isReadOnly())
                        if (r && r.length && window.FileReader && window.File)
                            for (var i = r.length, o = Array(i), s = 0, l = function() {
                                ++s == i && Ei(e, (function() {
                                    n = he(e.doc, n);
                                    var t = {
                                        from: n,
                                        to: n,
                                        text: e.doc.splitLines(o.filter((function(t) {
                                            return null != t
                                        }
                                        )).join(e.doc.lineSeparator())),
                                        origin: "paste"
                                    };
                                    Yo(e.doc, t),
                                    Fo(e.doc, ao(he(e.doc, n), he(e.doc, so(t))))
                                }
                                ))()
                            }, c = function(t, n) {
                                if (e.options.allowDropFileTypes && -1 == F(e.options.allowDropFileTypes, t.type))
                                    l();
                                else {
                                    var r = new FileReader;
                                    r.onerror = function() {
                                        return l()
                                    }
                                    ,
                                    r.onload = function() {
                                        var t = r.result;
                                        /[\x00-\x08\x0e-\x1f]{2}/.test(t) || (o[n] = t),
                                        l()
                                    }
                                    ,
                                    r.readAsText(t)
                                }
                            }, u = 0; u < r.length; u++)
                                c(r[u], u);
                        else {
                            if (e.state.draggingText && e.doc.sel.contains(n) > -1)
                                return e.state.draggingText(t),
                                void setTimeout((function() {
                                    return e.display.input.focus()
                                }
                                ), 20);
                            try {
                                var h = t.dataTransfer.getData("Text");
                                if (h) {
                                    var f;
                                    if (e.state.draggingText && !e.state.draggingText.copy && (f = e.listSelections()),
                                    Wo(e.doc, ao(n, n)),
                                    f)
                                        for (var d = 0; d < f.length; ++d)
                                            ra(e.doc, "", f[d].anchor, f[d].head, "drag");
                                    e.replaceSelection(h, "around", "paste"),
                                    e.display.input.focus()
                                }
                            } catch (p) {}
                        }
                }
            }
            function Sa(t, e) {
                if (a && (!t.state.draggingText || +new Date - ka < 100))
                    St(e);
                else if (!yt(t, e) && !Kn(t.display, e) && (e.dataTransfer.setData("Text", t.getSelection()),
                e.dataTransfer.effectAllowed = "copyMove",
                e.dataTransfer.setDragImage && !f)) {
                    var n = L("img", null, null, "position: fixed; left: 0; top: 0;");
                    n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                    h && (n.width = n.height = 1,
                    t.display.wrapper.appendChild(n),
                    n._top = n.offsetTop),
                    e.dataTransfer.setDragImage(n, 0, 0),
                    h && n.parentNode.removeChild(n)
                }
            }
            function Ta(t, e) {
                var n = Rr(t, e);
                if (n) {
                    var r = document.createDocumentFragment();
                    Ur(t, n, r),
                    t.display.dragCursor || (t.display.dragCursor = L("div", null, "CodeMirror-cursors CodeMirror-dragcursors"),
                    t.display.lineSpace.insertBefore(t.display.dragCursor, t.display.cursorDiv)),
                    A(t.display.dragCursor, r)
                }
            }
            function Oa(t) {
                t.display.dragCursor && (t.display.lineSpace.removeChild(t.display.dragCursor),
                t.display.dragCursor = null)
            }
            function Aa(t) {
                if (document.getElementsByClassName) {
                    for (var e = document.getElementsByClassName("CodeMirror"), n = [], r = 0; r < e.length; r++) {
                        var i = e[r].CodeMirror;
                        i && n.push(i)
                    }
                    n.length && n[0].operation((function() {
                        for (var e = 0; e < n.length; e++)
                            t(n[e])
                    }
                    ))
                }
            }
            var La = !1;
            function Ma() {
                La || (Ea(),
                La = !0)
            }
            function Ea() {
                var t;
                pt(window, "resize", (function() {
                    null == t && (t = setTimeout((function() {
                        t = null,
                        Aa(Da)
                    }
                    ), 100))
                }
                )),
                pt(window, "blur", (function() {
                    return Aa(Yr)
                }
                ))
            }
            function Da(t) {
                var e = t.display;
                e.cachedCharWidth = e.cachedTextHeight = e.cachedPaddingH = null,
                e.scrollbarsClipped = !1,
                t.setSize()
            }
            for (var Na = {
                3: "Pause",
                8: "Backspace",
                9: "Tab",
                13: "Enter",
                16: "Shift",
                17: "Ctrl",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Esc",
                32: "Space",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "Left",
                38: "Up",
                39: "Right",
                40: "Down",
                44: "PrintScrn",
                45: "Insert",
                46: "Delete",
                59: ";",
                61: "=",
                91: "Mod",
                92: "Mod",
                93: "Mod",
                106: "*",
                107: "=",
                109: "-",
                110: ".",
                111: "/",
                145: "ScrollLock",
                173: "-",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'",
                224: "Mod",
                63232: "Up",
                63233: "Down",
                63234: "Left",
                63235: "Right",
                63272: "Delete",
                63273: "Home",
                63275: "End",
                63276: "PageUp",
                63277: "PageDown",
                63302: "Insert"
            }, Ra = 0; Ra < 10; Ra++)
                Na[Ra + 48] = Na[Ra + 96] = String(Ra);
            for (var ja = 65; ja <= 90; ja++)
                Na[ja] = String.fromCharCode(ja);
            for (var Ha = 1; Ha <= 12; Ha++)
                Na[Ha + 111] = Na[Ha + 63235] = "F" + Ha;
            var Ba = {};
            function Ia(t) {
                var e, n, r, i, o = t.split(/-(?!$)/);
                t = o[o.length - 1];
                for (var a = 0; a < o.length - 1; a++) {
                    var s = o[a];
                    if (/^(cmd|meta|m)$/i.test(s))
                        i = !0;
                    else if (/^a(lt)?$/i.test(s))
                        e = !0;
                    else if (/^(c|ctrl|control)$/i.test(s))
                        n = !0;
                    else {
                        if (!/^s(hift)?$/i.test(s))
                            throw new Error("Unrecognized modifier name: " + s);
                        r = !0
                    }
                }
                return e && (t = "Alt-" + t),
                n && (t = "Ctrl-" + t),
                i && (t = "Cmd-" + t),
                r && (t = "Shift-" + t),
                t
            }
            function Pa(t) {
                var e = {};
                for (var n in t)
                    if (t.hasOwnProperty(n)) {
                        var r = t[n];
                        if (/^(name|fallthrough|(de|at)tach)$/.test(n))
                            continue;
                        if ("..." == r) {
                            delete t[n];
                            continue
                        }
                        for (var i = J(n.split(" "), Ia), o = 0; o < i.length; o++) {
                            var a = void 0
                              , s = void 0;
                            o == i.length - 1 ? (s = i.join(" "),
                            a = r) : (s = i.slice(0, o + 1).join(" "),
                            a = "...");
                            var l = e[s];
                            if (l) {
                                if (l != a)
                                    throw new Error("Inconsistent bindings for " + s)
                            } else
                                e[s] = a
                        }
                        delete t[n]
                    }
                for (var c in e)
                    t[c] = e[c];
                return t
            }
            function Fa(t, e, n, r) {
                e = Ua(e);
                var i = e.call ? e.call(t, r) : e[t];
                if (!1 === i)
                    return "nothing";
                if ("..." === i)
                    return "multi";
                if (null != i && n(i))
                    return "handled";
                if (e.fallthrough) {
                    if ("[object Array]" != Object.prototype.toString.call(e.fallthrough))
                        return Fa(t, e.fallthrough, n, r);
                    for (var o = 0; o < e.fallthrough.length; o++) {
                        var a = Fa(t, e.fallthrough[o], n, r);
                        if (a)
                            return a
                    }
                }
            }
            function za(t) {
                var e = "string" == typeof t ? t : Na[t.keyCode];
                return "Ctrl" == e || "Alt" == e || "Shift" == e || "Mod" == e
            }
            function Wa(t, e, n) {
                var r = t;
                return e.altKey && "Alt" != r && (t = "Alt-" + t),
                (_ ? e.metaKey : e.ctrlKey) && "Ctrl" != r && (t = "Ctrl-" + t),
                (_ ? e.ctrlKey : e.metaKey) && "Mod" != r && (t = "Cmd-" + t),
                !n && e.shiftKey && "Shift" != r && (t = "Shift-" + t),
                t
            }
            function Ka(t, e) {
                if (h && 34 == t.keyCode && t["char"])
                    return !1;
                var n = Na[t.keyCode];
                return null != n && !t.altGraphKey && (3 == t.keyCode && t.code && (n = t.code),
                Wa(n, t, e))
            }
            function Ua(t) {
                return "string" == typeof t ? Ba[t] : t
            }
            function Va(t, e) {
                for (var n = t.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
                    var o = e(n[i]);
                    while (r.length && oe(o.from, X(r).to) <= 0) {
                        var a = r.pop();
                        if (oe(a.from, o.from) < 0) {
                            o.from = a.from;
                            break
                        }
                    }
                    r.push(o)
                }
                Mi(t, (function() {
                    for (var e = r.length - 1; e >= 0; e--)
                        ra(t.doc, "", r[e].from, r[e].to, "+delete");
                    ai(t)
                }
                ))
            }
            function $a(t, e, n) {
                var r = at(t.text, e + n, n);
                return r < 0 || r > t.text.length ? null : r
            }
            function qa(t, e, n) {
                var r = $a(t, e.ch, n);
                return null == r ? null : new ie(e.line,r,n < 0 ? "after" : "before")
            }
            function Ga(t, e, n, r, i) {
                if (t) {
                    "rtl" == e.doc.direction && (i = -i);
                    var o = ft(n, e.doc.direction);
                    if (o) {
                        var a, s = i < 0 ? X(o) : o[0], l = i < 0 == (1 == s.level), c = l ? "after" : "before";
                        if (s.level > 0 || "rtl" == e.doc.direction) {
                            var u = er(e, n);
                            a = i < 0 ? n.text.length - 1 : 0;
                            var h = nr(e, u, a).top;
                            a = st((function(t) {
                                return nr(e, u, t).top == h
                            }
                            ), i < 0 == (1 == s.level) ? s.from : s.to - 1, a),
                            "before" == c && (a = $a(n, a, 1))
                        } else
                            a = i < 0 ? s.to : s.from;
                        return new ie(r,a,c)
                    }
                }
                return new ie(r,i < 0 ? n.text.length : 0,i < 0 ? "before" : "after")
            }
            function Xa(t, e, n, r) {
                var i = ft(e, t.doc.direction);
                if (!i)
                    return qa(e, n, r);
                n.ch >= e.text.length ? (n.ch = e.text.length,
                n.sticky = "before") : n.ch <= 0 && (n.ch = 0,
                n.sticky = "after");
                var o = ut(i, n.ch, n.sticky)
                  , a = i[o];
                if ("ltr" == t.doc.direction && a.level % 2 == 0 && (r > 0 ? a.to > n.ch : a.from < n.ch))
                    return qa(e, n, r);
                var s, l = function(t, n) {
                    return $a(e, t instanceof ie ? t.ch : t, n)
                }, c = function(n) {
                    return t.options.lineWrapping ? (s = s || er(t, e),
                    kr(t, e, s, n)) : {
                        begin: 0,
                        end: e.text.length
                    }
                }, u = c("before" == n.sticky ? l(n, -1) : n.ch);
                if ("rtl" == t.doc.direction || 1 == a.level) {
                    var h = 1 == a.level == r < 0
                      , f = l(n, h ? 1 : -1);
                    if (null != f && (h ? f <= a.to && f <= u.end : f >= a.from && f >= u.begin)) {
                        var d = h ? "before" : "after";
                        return new ie(n.line,f,d)
                    }
                }
                var p = function(t, e, r) {
                    for (var o = function(t, e) {
                        return e ? new ie(n.line,l(t, 1),"before") : new ie(n.line,t,"after")
                    }; t >= 0 && t < i.length; t += e) {
                        var a = i[t]
                          , s = e > 0 == (1 != a.level)
                          , c = s ? r.begin : l(r.end, -1);
                        if (a.from <= c && c < a.to)
                            return o(c, s);
                        if (c = s ? a.from : l(a.to, -1),
                        r.begin <= c && c < r.end)
                            return o(c, s)
                    }
                }
                  , g = p(o + r, r, u);
                if (g)
                    return g;
                var v = r > 0 ? u.end : l(u.begin, -1);
                return null == v || r > 0 && v == e.text.length || (g = p(r > 0 ? 0 : i.length - 1, r, c(v)),
                !g) ? null : g
            }
            Ba.basic = {
                Left: "goCharLeft",
                Right: "goCharRight",
                Up: "goLineUp",
                Down: "goLineDown",
                End: "goLineEnd",
                Home: "goLineStartSmart",
                PageUp: "goPageUp",
                PageDown: "goPageDown",
                Delete: "delCharAfter",
                Backspace: "delCharBefore",
                "Shift-Backspace": "delCharBefore",
                Tab: "defaultTab",
                "Shift-Tab": "indentAuto",
                Enter: "newlineAndIndent",
                Insert: "toggleOverwrite",
                Esc: "singleSelection"
            },
            Ba.pcDefault = {
                "Ctrl-A": "selectAll",
                "Ctrl-D": "deleteLine",
                "Ctrl-Z": "undo",
                "Shift-Ctrl-Z": "redo",
                "Ctrl-Y": "redo",
                "Ctrl-Home": "goDocStart",
                "Ctrl-End": "goDocEnd",
                "Ctrl-Up": "goLineUp",
                "Ctrl-Down": "goLineDown",
                "Ctrl-Left": "goGroupLeft",
                "Ctrl-Right": "goGroupRight",
                "Alt-Left": "goLineStart",
                "Alt-Right": "goLineEnd",
                "Ctrl-Backspace": "delGroupBefore",
                "Ctrl-Delete": "delGroupAfter",
                "Ctrl-S": "save",
                "Ctrl-F": "find",
                "Ctrl-G": "findNext",
                "Shift-Ctrl-G": "findPrev",
                "Shift-Ctrl-F": "replace",
                "Shift-Ctrl-R": "replaceAll",
                "Ctrl-[": "indentLess",
                "Ctrl-]": "indentMore",
                "Ctrl-U": "undoSelection",
                "Shift-Ctrl-U": "redoSelection",
                "Alt-U": "redoSelection",
                fallthrough: "basic"
            },
            Ba.emacsy = {
                "Ctrl-F": "goCharRight",
                "Ctrl-B": "goCharLeft",
                "Ctrl-P": "goLineUp",
                "Ctrl-N": "goLineDown",
                "Ctrl-A": "goLineStart",
                "Ctrl-E": "goLineEnd",
                "Ctrl-V": "goPageDown",
                "Shift-Ctrl-V": "goPageUp",
                "Ctrl-D": "delCharAfter",
                "Ctrl-H": "delCharBefore",
                "Alt-Backspace": "delWordBefore",
                "Ctrl-K": "killLine",
                "Ctrl-T": "transposeChars",
                "Ctrl-O": "openLine"
            },
            Ba.macDefault = {
                "Cmd-A": "selectAll",
                "Cmd-D": "deleteLine",
                "Cmd-Z": "undo",
                "Shift-Cmd-Z": "redo",
                "Cmd-Y": "redo",
                "Cmd-Home": "goDocStart",
                "Cmd-Up": "goDocStart",
                "Cmd-End": "goDocEnd",
                "Cmd-Down": "goDocEnd",
                "Alt-Left": "goGroupLeft",
                "Alt-Right": "goGroupRight",
                "Cmd-Left": "goLineLeft",
                "Cmd-Right": "goLineRight",
                "Alt-Backspace": "delGroupBefore",
                "Ctrl-Alt-Backspace": "delGroupAfter",
                "Alt-Delete": "delGroupAfter",
                "Cmd-S": "save",
                "Cmd-F": "find",
                "Cmd-G": "findNext",
                "Shift-Cmd-G": "findPrev",
                "Cmd-Alt-F": "replace",
                "Shift-Cmd-Alt-F": "replaceAll",
                "Cmd-[": "indentLess",
                "Cmd-]": "indentMore",
                "Cmd-Backspace": "delWrappedLineLeft",
                "Cmd-Delete": "delWrappedLineRight",
                "Cmd-U": "undoSelection",
                "Shift-Cmd-U": "redoSelection",
                "Ctrl-Up": "goDocStart",
                "Ctrl-Down": "goDocEnd",
                fallthrough: ["basic", "emacsy"]
            },
            Ba["default"] = y ? Ba.macDefault : Ba.pcDefault;
            var Ja = {
                selectAll: Xo,
                singleSelection: function(t) {
                    return t.setSelection(t.getCursor("anchor"), t.getCursor("head"), K)
                },
                killLine: function(t) {
                    return Va(t, (function(e) {
                        if (e.empty()) {
                            var n = Jt(t.doc, e.head.line).text.length;
                            return e.head.ch == n && e.head.line < t.lastLine() ? {
                                from: e.head,
                                to: ie(e.head.line + 1, 0)
                            } : {
                                from: e.head,
                                to: ie(e.head.line, n)
                            }
                        }
                        return {
                            from: e.from(),
                            to: e.to()
                        }
                    }
                    ))
                },
                deleteLine: function(t) {
                    return Va(t, (function(e) {
                        return {
                            from: ie(e.from().line, 0),
                            to: he(t.doc, ie(e.to().line + 1, 0))
                        }
                    }
                    ))
                },
                delLineLeft: function(t) {
                    return Va(t, (function(t) {
                        return {
                            from: ie(t.from().line, 0),
                            to: t.from()
                        }
                    }
                    ))
                },
                delWrappedLineLeft: function(t) {
                    return Va(t, (function(e) {
                        var n = t.charCoords(e.head, "div").top + 5
                          , r = t.coordsChar({
                            left: 0,
                            top: n
                        }, "div");
                        return {
                            from: r,
                            to: e.from()
                        }
                    }
                    ))
                },
                delWrappedLineRight: function(t) {
                    return Va(t, (function(e) {
                        var n = t.charCoords(e.head, "div").top + 5
                          , r = t.coordsChar({
                            left: t.display.lineDiv.offsetWidth + 100,
                            top: n
                        }, "div");
                        return {
                            from: e.from(),
                            to: r
                        }
                    }
                    ))
                },
                undo: function(t) {
                    return t.undo()
                },
                redo: function(t) {
                    return t.redo()
                },
                undoSelection: function(t) {
                    return t.undoSelection()
                },
                redoSelection: function(t) {
                    return t.redoSelection()
                },
                goDocStart: function(t) {
                    return t.extendSelection(ie(t.firstLine(), 0))
                },
                goDocEnd: function(t) {
                    return t.extendSelection(ie(t.lastLine()))
                },
                goLineStart: function(t) {
                    return t.extendSelectionsBy((function(e) {
                        return Ya(t, e.head.line)
                    }
                    ), {
                        origin: "+move",
                        bias: 1
                    })
                },
                goLineStartSmart: function(t) {
                    return t.extendSelectionsBy((function(e) {
                        return Qa(t, e.head)
                    }
                    ), {
                        origin: "+move",
                        bias: 1
                    })
                },
                goLineEnd: function(t) {
                    return t.extendSelectionsBy((function(e) {
                        return Za(t, e.head.line)
                    }
                    ), {
                        origin: "+move",
                        bias: -1
                    })
                },
                goLineRight: function(t) {
                    return t.extendSelectionsBy((function(e) {
                        var n = t.cursorCoords(e.head, "div").top + 5;
                        return t.coordsChar({
                            left: t.display.lineDiv.offsetWidth + 100,
                            top: n
                        }, "div")
                    }
                    ), V)
                },
                goLineLeft: function(t) {
                    return t.extendSelectionsBy((function(e) {
                        var n = t.cursorCoords(e.head, "div").top + 5;
                        return t.coordsChar({
                            left: 0,
                            top: n
                        }, "div")
                    }
                    ), V)
                },
                goLineLeftSmart: function(t) {
                    return t.extendSelectionsBy((function(e) {
                        var n = t.cursorCoords(e.head, "div").top + 5
                          , r = t.coordsChar({
                            left: 0,
                            top: n
                        }, "div");
                        return r.ch < t.getLine(r.line).search(/\S/) ? Qa(t, e.head) : r
                    }
                    ), V)
                },
                goLineUp: function(t) {
                    return t.moveV(-1, "line")
                },
                goLineDown: function(t) {
                    return t.moveV(1, "line")
                },
                goPageUp: function(t) {
                    return t.moveV(-1, "page")
                },
                goPageDown: function(t) {
                    return t.moveV(1, "page")
                },
                goCharLeft: function(t) {
                    return t.moveH(-1, "char")
                },
                goCharRight: function(t) {
                    return t.moveH(1, "char")
                },
                goColumnLeft: function(t) {
                    return t.moveH(-1, "column")
                },
                goColumnRight: function(t) {
                    return t.moveH(1, "column")
                },
                goWordLeft: function(t) {
                    return t.moveH(-1, "word")
                },
                goGroupRight: function(t) {
                    return t.moveH(1, "group")
                },
                goGroupLeft: function(t) {
                    return t.moveH(-1, "group")
                },
                goWordRight: function(t) {
                    return t.moveH(1, "word")
                },
                delCharBefore: function(t) {
                    return t.deleteH(-1, "codepoint")
                },
                delCharAfter: function(t) {
                    return t.deleteH(1, "char")
                },
                delWordBefore: function(t) {
                    return t.deleteH(-1, "word")
                },
                delWordAfter: function(t) {
                    return t.deleteH(1, "word")
                },
                delGroupBefore: function(t) {
                    return t.deleteH(-1, "group")
                },
                delGroupAfter: function(t) {
                    return t.deleteH(1, "group")
                },
                indentAuto: function(t) {
                    return t.indentSelection("smart")
                },
                indentMore: function(t) {
                    return t.indentSelection("add")
                },
                indentLess: function(t) {
                    return t.indentSelection("subtract")
                },
                insertTab: function(t) {
                    return t.replaceSelection("\t")
                },
                insertSoftTab: function(t) {
                    for (var e = [], n = t.listSelections(), r = t.options.tabSize, i = 0; i < n.length; i++) {
                        var o = n[i].from()
                          , a = I(t.getLine(o.line), o.ch, r);
                        e.push(G(r - a % r))
                    }
                    t.replaceSelections(e)
                },
                defaultTab: function(t) {
                    t.somethingSelected() ? t.indentSelection("add") : t.execCommand("insertTab")
                },
                transposeChars: function(t) {
                    return Mi(t, (function() {
                        for (var e = t.listSelections(), n = [], r = 0; r < e.length; r++)
                            if (e[r].empty()) {
                                var i = e[r].head
                                  , o = Jt(t.doc, i.line).text;
                                if (o)
                                    if (i.ch == o.length && (i = new ie(i.line,i.ch - 1)),
                                    i.ch > 0)
                                        i = new ie(i.line,i.ch + 1),
                                        t.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), ie(i.line, i.ch - 2), i, "+transpose");
                                    else if (i.line > t.doc.first) {
                                        var a = Jt(t.doc, i.line - 1).text;
                                        a && (i = new ie(i.line,1),
                                        t.replaceRange(o.charAt(0) + t.doc.lineSeparator() + a.charAt(a.length - 1), ie(i.line - 1, a.length - 1), i, "+transpose"))
                                    }
                                n.push(new io(i,i))
                            }
                        t.setSelections(n)
                    }
                    ))
                },
                newlineAndIndent: function(t) {
                    return Mi(t, (function() {
                        for (var e = t.listSelections(), n = e.length - 1; n >= 0; n--)
                            t.replaceRange(t.doc.lineSeparator(), e[n].anchor, e[n].head, "+input");
                        e = t.listSelections();
                        for (var r = 0; r < e.length; r++)
                            t.indentLine(e[r].from().line, null, !0);
                        ai(t)
                    }
                    ))
                },
                openLine: function(t) {
                    return t.replaceSelection("\n", "start")
                },
                toggleOverwrite: function(t) {
                    return t.toggleOverwrite()
                }
            };
            function Ya(t, e) {
                var n = Jt(t.doc, e)
                  , r = Ye(n);
                return r != n && (e = te(r)),
                Ga(!0, t, r, e, 1)
            }
            function Za(t, e) {
                var n = Jt(t.doc, e)
                  , r = Ze(n);
                return r != n && (e = te(r)),
                Ga(!0, t, n, e, -1)
            }
            function Qa(t, e) {
                var n = Ya(t, e.line)
                  , r = Jt(t.doc, n.line)
                  , i = ft(r, t.doc.direction);
                if (!i || 0 == i[0].level) {
                    var o = Math.max(n.ch, r.text.search(/\S/))
                      , a = e.line == n.line && e.ch <= o && e.ch;
                    return ie(n.line, a ? 0 : o, n.sticky)
                }
                return n
            }
            function ts(t, e, n) {
                if ("string" == typeof e && (e = Ja[e],
                !e))
                    return !1;
                t.display.input.ensurePolled();
                var r = t.display.shift
                  , i = !1;
                try {
                    t.isReadOnly() && (t.state.suppressEdits = !0),
                    n && (t.display.shift = !1),
                    i = e(t) != W
                } finally {
                    t.display.shift = r,
                    t.state.suppressEdits = !1
                }
                return i
            }
            function es(t, e, n) {
                for (var r = 0; r < t.state.keyMaps.length; r++) {
                    var i = Fa(e, t.state.keyMaps[r], n, t);
                    if (i)
                        return i
                }
                return t.options.extraKeys && Fa(e, t.options.extraKeys, n, t) || Fa(e, t.options.keyMap, n, t)
            }
            var ns = new P;
            function rs(t, e, n, r) {
                var i = t.state.keySeq;
                if (i) {
                    if (za(e))
                        return "handled";
                    if (/\'$/.test(e) ? t.state.keySeq = null : ns.set(50, (function() {
                        t.state.keySeq == i && (t.state.keySeq = null,
                        t.display.input.reset())
                    }
                    )),
                    is(t, i + " " + e, n, r))
                        return !0
                }
                return is(t, e, n, r)
            }
            function is(t, e, n, r) {
                var i = es(t, e, r);
                return "multi" == i && (t.state.keySeq = e),
                "handled" == i && An(t, "keyHandled", t, e, n),
                "handled" != i && "multi" != i || (_t(n),
                qr(t)),
                !!i
            }
            function os(t, e) {
                var n = Ka(e, !0);
                return !!n && (e.shiftKey && !t.state.keySeq ? rs(t, "Shift-" + n, e, (function(e) {
                    return ts(t, e, !0)
                }
                )) || rs(t, n, e, (function(e) {
                    if ("string" == typeof e ? /^go[A-Z]/.test(e) : e.motion)
                        return ts(t, e)
                }
                )) : rs(t, n, e, (function(e) {
                    return ts(t, e)
                }
                )))
            }
            function as(t, e, n) {
                return rs(t, "'" + n + "'", e, (function(e) {
                    return ts(t, e, !0)
                }
                ))
            }
            var ss = null;
            function ls(t) {
                var e = this;
                if ((!t.target || t.target == e.display.input.getField()) && (e.curOp.focus = D(),
                !yt(e, t))) {
                    a && s < 11 && 27 == t.keyCode && (t.returnValue = !1);
                    var r = t.keyCode;
                    e.display.shift = 16 == r || t.shiftKey;
                    var i = os(e, t);
                    h && (ss = i ? r : null,
                    i || 88 != r || jt || !(y ? t.metaKey : t.ctrlKey) || e.replaceSelection("", null, "cut")),
                    n && !y && !i && 46 == r && t.shiftKey && !t.ctrlKey && document.execCommand && document.execCommand("cut"),
                    18 != r || /\bCodeMirror-crosshair\b/.test(e.display.lineDiv.className) || cs(e)
                }
            }
            function cs(t) {
                var e = t.display.lineDiv;
                function n(t) {
                    18 != t.keyCode && t.altKey || (T(e, "CodeMirror-crosshair"),
                    vt(document, "keyup", n),
                    vt(document, "mouseover", n))
                }
                N(e, "CodeMirror-crosshair"),
                pt(document, "keyup", n),
                pt(document, "mouseover", n)
            }
            function us(t) {
                16 == t.keyCode && (this.doc.sel.shift = !1),
                yt(this, t)
            }
            function hs(t) {
                var e = this;
                if ((!t.target || t.target == e.display.input.getField()) && !(Kn(e.display, t) || yt(e, t) || t.ctrlKey && !t.altKey || y && t.metaKey)) {
                    var n = t.keyCode
                      , r = t.charCode;
                    if (h && n == ss)
                        return ss = null,
                        void _t(t);
                    if (!h || t.which && !(t.which < 10) || !os(e, t)) {
                        var i = String.fromCharCode(null == r ? n : r);
                        "\b" != i && (as(e, t, i) || e.display.input.onKeyPress(t))
                    }
                }
            }
            var fs, ds, ps = 400, gs = function(t, e, n) {
                this.time = t,
                this.pos = e,
                this.button = n
            };
            function vs(t, e) {
                var n = +new Date;
                return ds && ds.compare(n, t, e) ? (fs = ds = null,
                "triple") : fs && fs.compare(n, t, e) ? (ds = new gs(n,t,e),
                fs = null,
                "double") : (fs = new gs(n,t,e),
                ds = null,
                "single")
            }
            function ms(t) {
                var e = this
                  , n = e.display;
                if (!(yt(e, t) || n.activeTouch && n.input.supportsTouch()))
                    if (n.input.ensurePolled(),
                    n.shift = t.shiftKey,
                    Kn(n, t))
                        l || (n.scroller.draggable = !1,
                        setTimeout((function() {
                            return n.scroller.draggable = !0
                        }
                        ), 100));
                    else if (!Ts(e, t)) {
                        var r = Rr(e, t)
                          , i = Ot(t)
                          , o = r ? vs(r, i) : "single";
                        window.focus(),
                        1 == i && e.state.selectingText && e.state.selectingText(t),
                        r && ys(e, i, r, o, t) || (1 == i ? r ? ws(e, r, o, t) : Tt(t) == n.scroller && _t(t) : 2 == i ? (r && jo(e.doc, r),
                        setTimeout((function() {
                            return n.input.focus()
                        }
                        ), 20)) : 3 == i && (k ? e.display.input.onContextMenu(t) : Xr(e)))
                    }
            }
            function ys(t, e, n, r, i) {
                var o = "Click";
                return "double" == r ? o = "Double" + o : "triple" == r && (o = "Triple" + o),
                o = (1 == e ? "Left" : 2 == e ? "Middle" : "Right") + o,
                rs(t, Wa(o, i), i, (function(e) {
                    if ("string" == typeof e && (e = Ja[e]),
                    !e)
                        return !1;
                    var r = !1;
                    try {
                        t.isReadOnly() && (t.state.suppressEdits = !0),
                        r = e(t, n) != W
                    } finally {
                        t.state.suppressEdits = !1
                    }
                    return r
                }
                ))
            }
            function bs(t, e, n) {
                var r = t.getOption("configureMouse")
                  , i = r ? r(t, e, n) : {};
                if (null == i.unit) {
                    var o = b ? n.shiftKey && n.metaKey : n.altKey;
                    i.unit = o ? "rectangle" : "single" == e ? "char" : "double" == e ? "word" : "line"
                }
                return (null == i.extend || t.doc.extend) && (i.extend = t.doc.extend || n.shiftKey),
                null == i.addNew && (i.addNew = y ? n.metaKey : n.ctrlKey),
                null == i.moveOnDrag && (i.moveOnDrag = !(y ? n.altKey : n.ctrlKey)),
                i
            }
            function ws(t, e, n, r) {
                a ? setTimeout(H(Gr, t), 0) : t.curOp.focus = D();
                var i, o = bs(t, n, r), s = t.doc.sel;
                t.options.dragDrop && Mt && !t.isReadOnly() && "single" == n && (i = s.contains(e)) > -1 && (oe((i = s.ranges[i]).from(), e) < 0 || e.xRel > 0) && (oe(i.to(), e) > 0 || e.xRel < 0) ? xs(t, r, e, o) : ks(t, r, e, o)
            }
            function xs(t, e, n, r) {
                var i = t.display
                  , o = !1
                  , c = Ei(t, (function(e) {
                    l && (i.scroller.draggable = !1),
                    t.state.draggingText = !1,
                    t.state.delayingBlurEvent && (t.hasFocus() ? t.state.delayingBlurEvent = !1 : Xr(t)),
                    vt(i.wrapper.ownerDocument, "mouseup", c),
                    vt(i.wrapper.ownerDocument, "mousemove", u),
                    vt(i.scroller, "dragstart", h),
                    vt(i.scroller, "drop", c),
                    o || (_t(e),
                    r.addNew || jo(t.doc, n, null, null, r.extend),
                    l && !f || a && 9 == s ? setTimeout((function() {
                        i.wrapper.ownerDocument.body.focus({
                            preventScroll: !0
                        }),
                        i.input.focus()
                    }
                    ), 20) : i.input.focus())
                }
                ))
                  , u = function(t) {
                    o = o || Math.abs(e.clientX - t.clientX) + Math.abs(e.clientY - t.clientY) >= 10
                }
                  , h = function() {
                    return o = !0
                };
                l && (i.scroller.draggable = !0),
                t.state.draggingText = c,
                c.copy = !r.moveOnDrag,
                pt(i.wrapper.ownerDocument, "mouseup", c),
                pt(i.wrapper.ownerDocument, "mousemove", u),
                pt(i.scroller, "dragstart", h),
                pt(i.scroller, "drop", c),
                t.state.delayingBlurEvent = !0,
                setTimeout((function() {
                    return i.input.focus()
                }
                ), 20),
                i.scroller.dragDrop && i.scroller.dragDrop()
            }
            function _s(t, e, n) {
                if ("char" == n)
                    return new io(e,e);
                if ("word" == n)
                    return t.findWordAt(e);
                if ("line" == n)
                    return new io(ie(e.line, 0),he(t.doc, ie(e.line + 1, 0)));
                var r = n(t, e);
                return new io(r.from,r.to)
            }
            function ks(t, e, n, r) {
                a && Xr(t);
                var i = t.display
                  , o = t.doc;
                _t(e);
                var s, l, c = o.sel, u = c.ranges;
                if (r.addNew && !r.extend ? (l = o.sel.contains(n),
                s = l > -1 ? u[l] : new io(n,n)) : (s = o.sel.primary(),
                l = o.sel.primIndex),
                "rectangle" == r.unit)
                    r.addNew || (s = new io(n,n)),
                    n = Rr(t, e, !0, !0),
                    l = -1;
                else {
                    var h = _s(t, n, r.unit);
                    s = r.extend ? Ro(s, h.anchor, h.head, r.extend) : h
                }
                r.addNew ? -1 == l ? (l = u.length,
                zo(o, oo(t, u.concat([s]), l), {
                    scroll: !1,
                    origin: "*mouse"
                })) : u.length > 1 && u[l].empty() && "char" == r.unit && !r.extend ? (zo(o, oo(t, u.slice(0, l).concat(u.slice(l + 1)), 0), {
                    scroll: !1,
                    origin: "*mouse"
                }),
                c = o.sel) : Bo(o, l, s, U) : (l = 0,
                zo(o, new ro([s],0), U),
                c = o.sel);
                var f = n;
                function d(e) {
                    if (0 != oe(f, e))
                        if (f = e,
                        "rectangle" == r.unit) {
                            for (var i = [], a = t.options.tabSize, u = I(Jt(o, n.line).text, n.ch, a), h = I(Jt(o, e.line).text, e.ch, a), d = Math.min(u, h), p = Math.max(u, h), g = Math.min(n.line, e.line), v = Math.min(t.lastLine(), Math.max(n.line, e.line)); g <= v; g++) {
                                var m = Jt(o, g).text
                                  , y = $(m, d, a);
                                d == p ? i.push(new io(ie(g, y),ie(g, y))) : m.length > y && i.push(new io(ie(g, y),ie(g, $(m, p, a))))
                            }
                            i.length || i.push(new io(n,n)),
                            zo(o, oo(t, c.ranges.slice(0, l).concat(i), l), {
                                origin: "*mouse",
                                scroll: !1
                            }),
                            t.scrollIntoView(e)
                        } else {
                            var b, w = s, x = _s(t, e, r.unit), _ = w.anchor;
                            oe(x.anchor, _) > 0 ? (b = x.head,
                            _ = ce(w.from(), x.anchor)) : (b = x.anchor,
                            _ = le(w.to(), x.head));
                            var k = c.ranges.slice(0);
                            k[l] = Cs(t, new io(he(o, _),b)),
                            zo(o, oo(t, k, l), U)
                        }
                }
                var p = i.wrapper.getBoundingClientRect()
                  , g = 0;
                function v(e) {
                    var n = ++g
                      , a = Rr(t, e, !0, "rectangle" == r.unit);
                    if (a)
                        if (0 != oe(a, f)) {
                            t.curOp.focus = D(),
                            d(a);
                            var s = ti(i, o);
                            (a.line >= s.to || a.line < s.from) && setTimeout(Ei(t, (function() {
                                g == n && v(e)
                            }
                            )), 150)
                        } else {
                            var l = e.clientY < p.top ? -20 : e.clientY > p.bottom ? 20 : 0;
                            l && setTimeout(Ei(t, (function() {
                                g == n && (i.scroller.scrollTop += l,
                                v(e))
                            }
                            )), 50)
                        }
                }
                function m(e) {
                    t.state.selectingText = !1,
                    g = 1 / 0,
                    e && (_t(e),
                    i.input.focus()),
                    vt(i.wrapper.ownerDocument, "mousemove", y),
                    vt(i.wrapper.ownerDocument, "mouseup", b),
                    o.history.lastSelOrigin = null
                }
                var y = Ei(t, (function(t) {
                    0 !== t.buttons && Ot(t) ? v(t) : m(t)
                }
                ))
                  , b = Ei(t, m);
                t.state.selectingText = b,
                pt(i.wrapper.ownerDocument, "mousemove", y),
                pt(i.wrapper.ownerDocument, "mouseup", b)
            }
            function Cs(t, e) {
                var n = e.anchor
                  , r = e.head
                  , i = Jt(t.doc, n.line);
                if (0 == oe(n, r) && n.sticky == r.sticky)
                    return e;
                var o = ft(i);
                if (!o)
                    return e;
                var a = ut(o, n.ch, n.sticky)
                  , s = o[a];
                if (s.from != n.ch && s.to != n.ch)
                    return e;
                var l, c = a + (s.from == n.ch == (1 != s.level) ? 0 : 1);
                if (0 == c || c == o.length)
                    return e;
                if (r.line != n.line)
                    l = (r.line - n.line) * ("ltr" == t.doc.direction ? 1 : -1) > 0;
                else {
                    var u = ut(o, r.ch, r.sticky)
                      , h = u - a || (r.ch - n.ch) * (1 == s.level ? -1 : 1);
                    l = u == c - 1 || u == c ? h < 0 : h > 0
                }
                var f = o[c + (l ? -1 : 0)]
                  , d = l == (1 == f.level)
                  , p = d ? f.from : f.to
                  , g = d ? "after" : "before";
                return n.ch == p && n.sticky == g ? e : new io(new ie(n.line,p,g),r)
            }
            function Ss(t, e, n, r) {
                var i, o;
                if (e.touches)
                    i = e.touches[0].clientX,
                    o = e.touches[0].clientY;
                else
                    try {
                        i = e.clientX,
                        o = e.clientY
                    } catch (f) {
                        return !1
                    }
                if (i >= Math.floor(t.display.gutters.getBoundingClientRect().right))
                    return !1;
                r && _t(e);
                var a = t.display
                  , s = a.lineDiv.getBoundingClientRect();
                if (o > s.bottom || !wt(t, n))
                    return Ct(e);
                o -= s.top - a.viewOffset;
                for (var l = 0; l < t.display.gutterSpecs.length; ++l) {
                    var c = a.gutters.childNodes[l];
                    if (c && c.getBoundingClientRect().right >= i) {
                        var u = ee(t.doc, o)
                          , h = t.display.gutterSpecs[l];
                        return mt(t, n, t, u, h.className, e),
                        Ct(e)
                    }
                }
            }
            function Ts(t, e) {
                return Ss(t, e, "gutterClick", !0)
            }
            function Os(t, e) {
                Kn(t.display, e) || As(t, e) || yt(t, e, "contextmenu") || k || t.display.input.onContextMenu(e)
            }
            function As(t, e) {
                return !!wt(t, "gutterContextMenu") && Ss(t, e, "gutterContextMenu", !1)
            }
            function Ls(t) {
                t.display.wrapper.className = t.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + t.options.theme.replace(/(^|\s)\s*/g, " cm-s-"),
                hr(t)
            }
            gs.prototype.compare = function(t, e, n) {
                return this.time + ps > t && 0 == oe(e, this.pos) && n == this.button
            }
            ;
            var Ms = {
                toString: function() {
                    return "CodeMirror.Init"
                }
            }
              , Es = {}
              , Ds = {};
            function Ns(t) {
                var e = t.optionHandlers;
                function n(n, r, i, o) {
                    t.defaults[n] = r,
                    i && (e[n] = o ? function(t, e, n) {
                        n != Ms && i(t, e, n)
                    }
                    : i)
                }
                t.defineOption = n,
                t.Init = Ms,
                n("value", "", (function(t, e) {
                    return t.setValue(e)
                }
                ), !0),
                n("mode", null, (function(t, e) {
                    t.doc.modeOption = e,
                    fo(t)
                }
                ), !0),
                n("indentUnit", 2, fo, !0),
                n("indentWithTabs", !1),
                n("smartIndent", !0),
                n("tabSize", 4, (function(t) {
                    po(t),
                    hr(t),
                    Hr(t)
                }
                ), !0),
                n("lineSeparator", null, (function(t, e) {
                    if (t.doc.lineSep = e,
                    e) {
                        var n = []
                          , r = t.doc.first;
                        t.doc.iter((function(t) {
                            for (var i = 0; ; ) {
                                var o = t.text.indexOf(e, i);
                                if (-1 == o)
                                    break;
                                i = o + e.length,
                                n.push(ie(r, o))
                            }
                            r++
                        }
                        ));
                        for (var i = n.length - 1; i >= 0; i--)
                            ra(t.doc, e, n[i], ie(n[i].line, n[i].ch + e.length))
                    }
                }
                )),
                n("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, (function(t, e, n) {
                    t.state.specialChars = new RegExp(e.source + (e.test("\t") ? "" : "|\t"),"g"),
                    n != Ms && t.refresh()
                }
                )),
                n("specialCharPlaceholder", gn, (function(t) {
                    return t.refresh()
                }
                ), !0),
                n("electricChars", !0),
                n("inputStyle", m ? "contenteditable" : "textarea", (function() {
                    throw new Error("inputStyle can not (yet) be changed in a running editor")
                }
                ), !0),
                n("spellcheck", !1, (function(t, e) {
                    return t.getInputField().spellcheck = e
                }
                ), !0),
                n("autocorrect", !1, (function(t, e) {
                    return t.getInputField().autocorrect = e
                }
                ), !0),
                n("autocapitalize", !1, (function(t, e) {
                    return t.getInputField().autocapitalize = e
                }
                ), !0),
                n("rtlMoveVisually", !w),
                n("wholeLineUpdateBefore", !0),
                n("theme", "default", (function(t) {
                    Ls(t),
                    Ji(t)
                }
                ), !0),
                n("keyMap", "default", (function(t, e, n) {
                    var r = Ua(e)
                      , i = n != Ms && Ua(n);
                    i && i.detach && i.detach(t, r),
                    r.attach && r.attach(t, i || null)
                }
                )),
                n("extraKeys", null),
                n("configureMouse", null),
                n("lineWrapping", !1, js, !0),
                n("gutters", [], (function(t, e) {
                    t.display.gutterSpecs = Gi(e, t.options.lineNumbers),
                    Ji(t)
                }
                ), !0),
                n("fixedGutter", !0, (function(t, e) {
                    t.display.gutters.style.left = e ? Er(t.display) + "px" : "0",
                    t.refresh()
                }
                ), !0),
                n("coverGutterNextToScrollbar", !1, (function(t) {
                    return mi(t)
                }
                ), !0),
                n("scrollbarStyle", "native", (function(t) {
                    wi(t),
                    mi(t),
                    t.display.scrollbars.setScrollTop(t.doc.scrollTop),
                    t.display.scrollbars.setScrollLeft(t.doc.scrollLeft)
                }
                ), !0),
                n("lineNumbers", !1, (function(t, e) {
                    t.display.gutterSpecs = Gi(t.options.gutters, e),
                    Ji(t)
                }
                ), !0),
                n("firstLineNumber", 1, Ji, !0),
                n("lineNumberFormatter", (function(t) {
                    return t
                }
                ), Ji, !0),
                n("showCursorWhenSelecting", !1, Wr, !0),
                n("resetSelectionOnContextMenu", !0),
                n("lineWiseCopyCut", !0),
                n("pasteLinesPerSelection", !0),
                n("selectionsMayTouch", !1),
                n("readOnly", !1, (function(t, e) {
                    "nocursor" == e && (Yr(t),
                    t.display.input.blur()),
                    t.display.input.readOnlyChanged(e)
                }
                )),
                n("screenReaderLabel", null, (function(t, e) {
                    e = "" === e ? null : e,
                    t.display.input.screenReaderLabelChanged(e)
                }
                )),
                n("disableInput", !1, (function(t, e) {
                    e || t.display.input.reset()
                }
                ), !0),
                n("dragDrop", !0, Rs),
                n("allowDropFileTypes", null),
                n("cursorBlinkRate", 530),
                n("cursorScrollMargin", 0),
                n("cursorHeight", 1, Wr, !0),
                n("singleCursorHeightPerLine", !0, Wr, !0),
                n("workTime", 100),
                n("workDelay", 100),
                n("flattenSpans", !0, po, !0),
                n("addModeClass", !1, po, !0),
                n("pollInterval", 100),
                n("undoDepth", 200, (function(t, e) {
                    return t.doc.history.undoDepth = e
                }
                )),
                n("historyEventDelay", 1250),
                n("viewportMargin", 10, (function(t) {
                    return t.refresh()
                }
                ), !0),
                n("maxHighlightLength", 1e4, po, !0),
                n("moveInputWithCursor", !0, (function(t, e) {
                    e || t.display.input.resetPosition()
                }
                )),
                n("tabindex", null, (function(t, e) {
                    return t.display.input.getField().tabIndex = e || ""
                }
                )),
                n("autofocus", null),
                n("direction", "ltr", (function(t, e) {
                    return t.doc.setDirection(e)
                }
                ), !0),
                n("phrases", null)
            }
            function Rs(t, e, n) {
                var r = n && n != Ms;
                if (!e != !r) {
                    var i = t.display.dragFunctions
                      , o = e ? pt : vt;
                    o(t.display.scroller, "dragstart", i.start),
                    o(t.display.scroller, "dragenter", i.enter),
                    o(t.display.scroller, "dragover", i.over),
                    o(t.display.scroller, "dragleave", i.leave),
                    o(t.display.scroller, "drop", i.drop)
                }
            }
            function js(t) {
                t.options.lineWrapping ? (N(t.display.wrapper, "CodeMirror-wrap"),
                t.display.sizer.style.minWidth = "",
                t.display.sizerWidth = null) : (T(t.display.wrapper, "CodeMirror-wrap"),
                sn(t)),
                Nr(t),
                Hr(t),
                hr(t),
                setTimeout((function() {
                    return mi(t)
                }
                ), 100)
            }
            function Hs(t, e) {
                var n = this;
                if (!(this instanceof Hs))
                    return new Hs(t,e);
                this.options = e = e ? B(e) : {},
                B(Es, e, !1);
                var r = e.value;
                "string" == typeof r ? r = new _a(r,e.mode,null,e.lineSeparator,e.direction) : e.mode && (r.modeOption = e.mode),
                this.doc = r;
                var i = new Hs.inputStyles[e.inputStyle](this)
                  , o = this.display = new Yi(t,r,i,e);
                for (var c in o.wrapper.CodeMirror = this,
                Ls(this),
                e.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"),
                wi(this),
                this.state = {
                    keyMaps: [],
                    overlays: [],
                    modeGen: 0,
                    overwrite: !1,
                    delayingBlurEvent: !1,
                    focused: !1,
                    suppressEdits: !1,
                    pasteIncoming: -1,
                    cutIncoming: -1,
                    selectingText: !1,
                    draggingText: !1,
                    highlight: new P,
                    keySeq: null,
                    specialChars: null
                },
                e.autofocus && !m && o.input.focus(),
                a && s < 11 && setTimeout((function() {
                    return n.display.input.reset(!0)
                }
                ), 20),
                Bs(this),
                Ma(),
                _i(this),
                this.curOp.forceUpdate = !0,
                yo(this, r),
                e.autofocus && !m || this.hasFocus() ? setTimeout((function() {
                    n.hasFocus() && !n.state.focused && Jr(n)
                }
                ), 20) : Yr(this),
                Ds)
                    Ds.hasOwnProperty(c) && Ds[c](this, e[c], Ms);
                qi(this),
                e.finishInit && e.finishInit(this);
                for (var u = 0; u < Is.length; ++u)
                    Is[u](this);
                ki(this),
                l && e.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto")
            }
            function Bs(t) {
                var e = t.display;
                pt(e.scroller, "mousedown", Ei(t, ms)),
                pt(e.scroller, "dblclick", a && s < 11 ? Ei(t, (function(e) {
                    if (!yt(t, e)) {
                        var n = Rr(t, e);
                        if (n && !Ts(t, e) && !Kn(t.display, e)) {
                            _t(e);
                            var r = t.findWordAt(n);
                            jo(t.doc, r.anchor, r.head)
                        }
                    }
                }
                )) : function(e) {
                    return yt(t, e) || _t(e)
                }
                ),
                pt(e.scroller, "contextmenu", (function(e) {
                    return Os(t, e)
                }
                )),
                pt(e.input.getField(), "contextmenu", (function(n) {
                    e.scroller.contains(n.target) || Os(t, n)
                }
                ));
                var n, r = {
                    end: 0
                };
                function i() {
                    e.activeTouch && (n = setTimeout((function() {
                        return e.activeTouch = null
                    }
                    ), 1e3),
                    r = e.activeTouch,
                    r.end = +new Date)
                }
                function o(t) {
                    if (1 != t.touches.length)
                        return !1;
                    var e = t.touches[0];
                    return e.radiusX <= 1 && e.radiusY <= 1
                }
                function l(t, e) {
                    if (null == e.left)
                        return !0;
                    var n = e.left - t.left
                      , r = e.top - t.top;
                    return n * n + r * r > 400
                }
                pt(e.scroller, "touchstart", (function(i) {
                    if (!yt(t, i) && !o(i) && !Ts(t, i)) {
                        e.input.ensurePolled(),
                        clearTimeout(n);
                        var a = +new Date;
                        e.activeTouch = {
                            start: a,
                            moved: !1,
                            prev: a - r.end <= 300 ? r : null
                        },
                        1 == i.touches.length && (e.activeTouch.left = i.touches[0].pageX,
                        e.activeTouch.top = i.touches[0].pageY)
                    }
                }
                )),
                pt(e.scroller, "touchmove", (function() {
                    e.activeTouch && (e.activeTouch.moved = !0)
                }
                )),
                pt(e.scroller, "touchend", (function(n) {
                    var r = e.activeTouch;
                    if (r && !Kn(e, n) && null != r.left && !r.moved && new Date - r.start < 300) {
                        var o, a = t.coordsChar(e.activeTouch, "page");
                        o = !r.prev || l(r, r.prev) ? new io(a,a) : !r.prev.prev || l(r, r.prev.prev) ? t.findWordAt(a) : new io(ie(a.line, 0),he(t.doc, ie(a.line + 1, 0))),
                        t.setSelection(o.anchor, o.head),
                        t.focus(),
                        _t(n)
                    }
                    i()
                }
                )),
                pt(e.scroller, "touchcancel", i),
                pt(e.scroller, "scroll", (function() {
                    e.scroller.clientHeight && (hi(t, e.scroller.scrollTop),
                    di(t, e.scroller.scrollLeft, !0),
                    mt(t, "scroll", t))
                }
                )),
                pt(e.scroller, "mousewheel", (function(e) {
                    return no(t, e)
                }
                )),
                pt(e.scroller, "DOMMouseScroll", (function(e) {
                    return no(t, e)
                }
                )),
                pt(e.wrapper, "scroll", (function() {
                    return e.wrapper.scrollTop = e.wrapper.scrollLeft = 0
                }
                )),
                e.dragFunctions = {
                    enter: function(e) {
                        yt(t, e) || St(e)
                    },
                    over: function(e) {
                        yt(t, e) || (Ta(t, e),
                        St(e))
                    },
                    start: function(e) {
                        return Sa(t, e)
                    },
                    drop: Ei(t, Ca),
                    leave: function(e) {
                        yt(t, e) || Oa(t)
                    }
                };
                var c = e.input.getField();
                pt(c, "keyup", (function(e) {
                    return us.call(t, e)
                }
                )),
                pt(c, "keydown", Ei(t, ls)),
                pt(c, "keypress", Ei(t, hs)),
                pt(c, "focus", (function(e) {
                    return Jr(t, e)
                }
                )),
                pt(c, "blur", (function(e) {
                    return Yr(t, e)
                }
                ))
            }
            Hs.defaults = Es,
            Hs.optionHandlers = Ds;
            var Is = [];
            function Ps(t, e, n, r) {
                var i, o = t.doc;
                null == n && (n = "add"),
                "smart" == n && (o.mode.indent ? i = ye(t, e).state : n = "prev");
                var a = t.options.tabSize
                  , s = Jt(o, e)
                  , l = I(s.text, null, a);
                s.stateAfter && (s.stateAfter = null);
                var c, u = s.text.match(/^\s*/)[0];
                if (r || /\S/.test(s.text)) {
                    if ("smart" == n && (c = o.mode.indent(i, s.text.slice(u.length), s.text),
                    c == W || c > 150)) {
                        if (!r)
                            return;
                        n = "prev"
                    }
                } else
                    c = 0,
                    n = "not";
                "prev" == n ? c = e > o.first ? I(Jt(o, e - 1).text, null, a) : 0 : "add" == n ? c = l + t.options.indentUnit : "subtract" == n ? c = l - t.options.indentUnit : "number" == typeof n && (c = l + n),
                c = Math.max(0, c);
                var h = ""
                  , f = 0;
                if (t.options.indentWithTabs)
                    for (var d = Math.floor(c / a); d; --d)
                        f += a,
                        h += "\t";
                if (f < c && (h += G(c - f)),
                h != u)
                    return ra(o, h, ie(e, 0), ie(e, u.length), "+input"),
                    s.stateAfter = null,
                    !0;
                for (var p = 0; p < o.sel.ranges.length; p++) {
                    var g = o.sel.ranges[p];
                    if (g.head.line == e && g.head.ch < u.length) {
                        var v = ie(e, u.length);
                        Bo(o, p, new io(v,v));
                        break
                    }
                }
            }
            Hs.defineInitHook = function(t) {
                return Is.push(t)
            }
            ;
            var Fs = null;
            function zs(t) {
                Fs = t
            }
            function Ws(t, e, n, r, i) {
                var o = t.doc;
                t.display.shift = !1,
                r || (r = o.sel);
                var a = +new Date - 200
                  , s = "paste" == i || t.state.pasteIncoming > a
                  , l = Nt(e)
                  , c = null;
                if (s && r.ranges.length > 1)
                    if (Fs && Fs.text.join("\n") == e) {
                        if (r.ranges.length % Fs.text.length == 0) {
                            c = [];
                            for (var u = 0; u < Fs.text.length; u++)
                                c.push(o.splitLines(Fs.text[u]))
                        }
                    } else
                        l.length == r.ranges.length && t.options.pasteLinesPerSelection && (c = J(l, (function(t) {
                            return [t]
                        }
                        )));
                for (var h = t.curOp.updateInput, f = r.ranges.length - 1; f >= 0; f--) {
                    var d = r.ranges[f]
                      , p = d.from()
                      , g = d.to();
                    d.empty() && (n && n > 0 ? p = ie(p.line, p.ch - n) : t.state.overwrite && !s ? g = ie(g.line, Math.min(Jt(o, g.line).text.length, g.ch + X(l).length)) : s && Fs && Fs.lineWise && Fs.text.join("\n") == l.join("\n") && (p = g = ie(p.line, 0)));
                    var v = {
                        from: p,
                        to: g,
                        text: c ? c[f % c.length] : l,
                        origin: i || (s ? "paste" : t.state.cutIncoming > a ? "cut" : "+input")
                    };
                    Yo(t.doc, v),
                    An(t, "inputRead", t, v)
                }
                e && !s && Us(t, e),
                ai(t),
                t.curOp.updateInput < 2 && (t.curOp.updateInput = h),
                t.curOp.typing = !0,
                t.state.pasteIncoming = t.state.cutIncoming = -1
            }
            function Ks(t, e) {
                var n = t.clipboardData && t.clipboardData.getData("Text");
                if (n)
                    return t.preventDefault(),
                    e.isReadOnly() || e.options.disableInput || Mi(e, (function() {
                        return Ws(e, n, 0, null, "paste")
                    }
                    )),
                    !0
            }
            function Us(t, e) {
                if (t.options.electricChars && t.options.smartIndent)
                    for (var n = t.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
                        var i = n.ranges[r];
                        if (!(i.head.ch > 100 || r && n.ranges[r - 1].head.line == i.head.line)) {
                            var o = t.getModeAt(i.head)
                              , a = !1;
                            if (o.electricChars) {
                                for (var s = 0; s < o.electricChars.length; s++)
                                    if (e.indexOf(o.electricChars.charAt(s)) > -1) {
                                        a = Ps(t, i.head.line, "smart");
                                        break
                                    }
                            } else
                                o.electricInput && o.electricInput.test(Jt(t.doc, i.head.line).text.slice(0, i.head.ch)) && (a = Ps(t, i.head.line, "smart"));
                            a && An(t, "electricInput", t, i.head.line)
                        }
                    }
            }
            function Vs(t) {
                for (var e = [], n = [], r = 0; r < t.doc.sel.ranges.length; r++) {
                    var i = t.doc.sel.ranges[r].head.line
                      , o = {
                        anchor: ie(i, 0),
                        head: ie(i + 1, 0)
                    };
                    n.push(o),
                    e.push(t.getRange(o.anchor, o.head))
                }
                return {
                    text: e,
                    ranges: n
                }
            }
            function $s(t, e, n, r) {
                t.setAttribute("autocorrect", n ? "" : "off"),
                t.setAttribute("autocapitalize", r ? "" : "off"),
                t.setAttribute("spellcheck", !!e)
            }
            function qs() {
                var t = L("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none")
                  , e = L("div", [t], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
                return l ? t.style.width = "1000px" : t.setAttribute("wrap", "off"),
                g && (t.style.border = "1px solid black"),
                $s(t),
                e
            }
            function Gs(t) {
                var e = t.optionHandlers
                  , n = t.helpers = {};
                t.prototype = {
                    constructor: t,
                    focus: function() {
                        window.focus(),
                        this.display.input.focus()
                    },
                    setOption: function(t, n) {
                        var r = this.options
                          , i = r[t];
                        r[t] == n && "mode" != t || (r[t] = n,
                        e.hasOwnProperty(t) && Ei(this, e[t])(this, n, i),
                        mt(this, "optionChange", this, t))
                    },
                    getOption: function(t) {
                        return this.options[t]
                    },
                    getDoc: function() {
                        return this.doc
                    },
                    addKeyMap: function(t, e) {
                        this.state.keyMaps[e ? "push" : "unshift"](Ua(t))
                    },
                    removeKeyMap: function(t) {
                        for (var e = this.state.keyMaps, n = 0; n < e.length; ++n)
                            if (e[n] == t || e[n].name == t)
                                return e.splice(n, 1),
                                !0
                    },
                    addOverlay: Di((function(e, n) {
                        var r = e.token ? e : t.getMode(this.options, e);
                        if (r.startState)
                            throw new Error("Overlays may not be stateful.");
                        Y(this.state.overlays, {
                            mode: r,
                            modeSpec: e,
                            opaque: n && n.opaque,
                            priority: n && n.priority || 0
                        }, (function(t) {
                            return t.priority
                        }
                        )),
                        this.state.modeGen++,
                        Hr(this)
                    }
                    )),
                    removeOverlay: Di((function(t) {
                        for (var e = this.state.overlays, n = 0; n < e.length; ++n) {
                            var r = e[n].modeSpec;
                            if (r == t || "string" == typeof t && r.name == t)
                                return e.splice(n, 1),
                                this.state.modeGen++,
                                void Hr(this)
                        }
                    }
                    )),
                    indentLine: Di((function(t, e, n) {
                        "string" != typeof e && "number" != typeof e && (e = null == e ? this.options.smartIndent ? "smart" : "prev" : e ? "add" : "subtract"),
                        ne(this.doc, t) && Ps(this, t, e, n)
                    }
                    )),
                    indentSelection: Di((function(t) {
                        for (var e = this.doc.sel.ranges, n = -1, r = 0; r < e.length; r++) {
                            var i = e[r];
                            if (i.empty())
                                i.head.line > n && (Ps(this, i.head.line, t, !0),
                                n = i.head.line,
                                r == this.doc.sel.primIndex && ai(this));
                            else {
                                var o = i.from()
                                  , a = i.to()
                                  , s = Math.max(n, o.line);
                                n = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
                                for (var l = s; l < n; ++l)
                                    Ps(this, l, t);
                                var c = this.doc.sel.ranges;
                                0 == o.ch && e.length == c.length && c[r].from().ch > 0 && Bo(this.doc, r, new io(o,c[r].to()), K)
                            }
                        }
                    }
                    )),
                    getTokenAt: function(t, e) {
                        return ke(this, t, e)
                    },
                    getLineTokens: function(t, e) {
                        return ke(this, ie(t), e, !0)
                    },
                    getTokenTypeAt: function(t) {
                        t = he(this.doc, t);
                        var e, n = me(this, Jt(this.doc, t.line)), r = 0, i = (n.length - 1) / 2, o = t.ch;
                        if (0 == o)
                            e = n[2];
                        else
                            for (; ; ) {
                                var a = r + i >> 1;
                                if ((a ? n[2 * a - 1] : 0) >= o)
                                    i = a;
                                else {
                                    if (!(n[2 * a + 1] < o)) {
                                        e = n[2 * a + 2];
                                        break
                                    }
                                    r = a + 1
                                }
                            }
                        var s = e ? e.indexOf("overlay ") : -1;
                        return s < 0 ? e : 0 == s ? null : e.slice(0, s - 1)
                    },
                    getModeAt: function(e) {
                        var n = this.doc.mode;
                        return n.innerMode ? t.innerMode(n, this.getTokenAt(e).state).mode : n
                    },
                    getHelper: function(t, e) {
                        return this.getHelpers(t, e)[0]
                    },
                    getHelpers: function(t, e) {
                        var r = [];
                        if (!n.hasOwnProperty(e))
                            return r;
                        var i = n[e]
                          , o = this.getModeAt(t);
                        if ("string" == typeof o[e])
                            i[o[e]] && r.push(i[o[e]]);
                        else if (o[e])
                            for (var a = 0; a < o[e].length; a++) {
                                var s = i[o[e][a]];
                                s && r.push(s)
                            }
                        else
                            o.helperType && i[o.helperType] ? r.push(i[o.helperType]) : i[o.name] && r.push(i[o.name]);
                        for (var l = 0; l < i._global.length; l++) {
                            var c = i._global[l];
                            c.pred(o, this) && -1 == F(r, c.val) && r.push(c.val)
                        }
                        return r
                    },
                    getStateAfter: function(t, e) {
                        var n = this.doc;
                        return t = ue(n, null == t ? n.first + n.size - 1 : t),
                        ye(this, t + 1, e).state
                    },
                    cursorCoords: function(t, e) {
                        var n, r = this.doc.sel.primary();
                        return n = null == t ? r.head : "object" == typeof t ? he(this.doc, t) : t ? r.from() : r.to(),
                        yr(this, n, e || "page")
                    },
                    charCoords: function(t, e) {
                        return mr(this, he(this.doc, t), e || "page")
                    },
                    coordsChar: function(t, e) {
                        return t = vr(this, t, e || "page"),
                        xr(this, t.left, t.top)
                    },
                    lineAtHeight: function(t, e) {
                        return t = vr(this, {
                            top: t,
                            left: 0
                        }, e || "page").top,
                        ee(this.doc, t + this.display.viewOffset)
                    },
                    heightAtLine: function(t, e, n) {
                        var r, i = !1;
                        if ("number" == typeof t) {
                            var o = this.doc.first + this.doc.size - 1;
                            t < this.doc.first ? t = this.doc.first : t > o && (t = o,
                            i = !0),
                            r = Jt(this.doc, t)
                        } else
                            r = t;
                        return gr(this, r, {
                            top: 0,
                            left: 0
                        }, e || "page", n || i).top + (i ? this.doc.height - on(r) : 0)
                    },
                    defaultTextHeight: function() {
                        return Ar(this.display)
                    },
                    defaultCharWidth: function() {
                        return Lr(this.display)
                    },
                    getViewport: function() {
                        return {
                            from: this.display.viewFrom,
                            to: this.display.viewTo
                        }
                    },
                    addWidget: function(t, e, n, r, i) {
                        var o = this.display;
                        t = yr(this, he(this.doc, t));
                        var a = t.bottom
                          , s = t.left;
                        if (e.style.position = "absolute",
                        e.setAttribute("cm-ignore-events", "true"),
                        this.display.input.setUneditable(e),
                        o.sizer.appendChild(e),
                        "over" == r)
                            a = t.top;
                        else if ("above" == r || "near" == r) {
                            var l = Math.max(o.wrapper.clientHeight, this.doc.height)
                              , c = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                            ("above" == r || t.bottom + e.offsetHeight > l) && t.top > e.offsetHeight ? a = t.top - e.offsetHeight : t.bottom + e.offsetHeight <= l && (a = t.bottom),
                            s + e.offsetWidth > c && (s = c - e.offsetWidth)
                        }
                        e.style.top = a + "px",
                        e.style.left = e.style.right = "",
                        "right" == i ? (s = o.sizer.clientWidth - e.offsetWidth,
                        e.style.right = "0px") : ("left" == i ? s = 0 : "middle" == i && (s = (o.sizer.clientWidth - e.offsetWidth) / 2),
                        e.style.left = s + "px"),
                        n && ri(this, {
                            left: s,
                            top: a,
                            right: s + e.offsetWidth,
                            bottom: a + e.offsetHeight
                        })
                    },
                    triggerOnKeyDown: Di(ls),
                    triggerOnKeyPress: Di(hs),
                    triggerOnKeyUp: us,
                    triggerOnMouseDown: Di(ms),
                    execCommand: function(t) {
                        if (Ja.hasOwnProperty(t))
                            return Ja[t].call(null, this)
                    },
                    triggerElectric: Di((function(t) {
                        Us(this, t)
                    }
                    )),
                    findPosH: function(t, e, n, r) {
                        var i = 1;
                        e < 0 && (i = -1,
                        e = -e);
                        for (var o = he(this.doc, t), a = 0; a < e; ++a)
                            if (o = Xs(this.doc, o, i, n, r),
                            o.hitSide)
                                break;
                        return o
                    },
                    moveH: Di((function(t, e) {
                        var n = this;
                        this.extendSelectionsBy((function(r) {
                            return n.display.shift || n.doc.extend || r.empty() ? Xs(n.doc, r.head, t, e, n.options.rtlMoveVisually) : t < 0 ? r.from() : r.to()
                        }
                        ), V)
                    }
                    )),
                    deleteH: Di((function(t, e) {
                        var n = this.doc.sel
                          , r = this.doc;
                        n.somethingSelected() ? r.replaceSelection("", null, "+delete") : Va(this, (function(n) {
                            var i = Xs(r, n.head, t, e, !1);
                            return t < 0 ? {
                                from: i,
                                to: n.head
                            } : {
                                from: n.head,
                                to: i
                            }
                        }
                        ))
                    }
                    )),
                    findPosV: function(t, e, n, r) {
                        var i = 1
                          , o = r;
                        e < 0 && (i = -1,
                        e = -e);
                        for (var a = he(this.doc, t), s = 0; s < e; ++s) {
                            var l = yr(this, a, "div");
                            if (null == o ? o = l.left : l.left = o,
                            a = Js(this, l, i, n),
                            a.hitSide)
                                break
                        }
                        return a
                    },
                    moveV: Di((function(t, e) {
                        var n = this
                          , r = this.doc
                          , i = []
                          , o = !this.display.shift && !r.extend && r.sel.somethingSelected();
                        if (r.extendSelectionsBy((function(a) {
                            if (o)
                                return t < 0 ? a.from() : a.to();
                            var s = yr(n, a.head, "div");
                            null != a.goalColumn && (s.left = a.goalColumn),
                            i.push(s.left);
                            var l = Js(n, s, t, e);
                            return "page" == e && a == r.sel.primary() && oi(n, mr(n, l, "div").top - s.top),
                            l
                        }
                        ), V),
                        i.length)
                            for (var a = 0; a < r.sel.ranges.length; a++)
                                r.sel.ranges[a].goalColumn = i[a]
                    }
                    )),
                    findWordAt: function(t) {
                        var e = this.doc
                          , n = Jt(e, t.line).text
                          , r = t.ch
                          , i = t.ch;
                        if (n) {
                            var o = this.getHelper(t, "wordChars");
                            "before" != t.sticky && i != n.length || !r ? ++i : --r;
                            var a = n.charAt(r)
                              , s = nt(a, o) ? function(t) {
                                return nt(t, o)
                            }
                            : /\s/.test(a) ? function(t) {
                                return /\s/.test(t)
                            }
                            : function(t) {
                                return !/\s/.test(t) && !nt(t)
                            }
                            ;
                            while (r > 0 && s(n.charAt(r - 1)))
                                --r;
                            while (i < n.length && s(n.charAt(i)))
                                ++i
                        }
                        return new io(ie(t.line, r),ie(t.line, i))
                    },
                    toggleOverwrite: function(t) {
                        null != t && t == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? N(this.display.cursorDiv, "CodeMirror-overwrite") : T(this.display.cursorDiv, "CodeMirror-overwrite"),
                        mt(this, "overwriteToggle", this, this.state.overwrite))
                    },
                    hasFocus: function() {
                        return this.display.input.getField() == D()
                    },
                    isReadOnly: function() {
                        return !(!this.options.readOnly && !this.doc.cantEdit)
                    },
                    scrollTo: Di((function(t, e) {
                        si(this, t, e)
                    }
                    )),
                    getScrollInfo: function() {
                        var t = this.display.scroller;
                        return {
                            left: t.scrollLeft,
                            top: t.scrollTop,
                            height: t.scrollHeight - qn(this) - this.display.barHeight,
                            width: t.scrollWidth - qn(this) - this.display.barWidth,
                            clientHeight: Xn(this),
                            clientWidth: Gn(this)
                        }
                    },
                    scrollIntoView: Di((function(t, e) {
                        null == t ? (t = {
                            from: this.doc.sel.primary().head,
                            to: null
                        },
                        null == e && (e = this.options.cursorScrollMargin)) : "number" == typeof t ? t = {
                            from: ie(t, 0),
                            to: null
                        } : null == t.from && (t = {
                            from: t,
                            to: null
                        }),
                        t.to || (t.to = t.from),
                        t.margin = e || 0,
                        null != t.from.line ? li(this, t) : ui(this, t.from, t.to, t.margin)
                    }
                    )),
                    setSize: Di((function(t, e) {
                        var n = this
                          , r = function(t) {
                            return "number" == typeof t || /^\d+$/.test(String(t)) ? t + "px" : t
                        };
                        null != t && (this.display.wrapper.style.width = r(t)),
                        null != e && (this.display.wrapper.style.height = r(e)),
                        this.options.lineWrapping && ur(this);
                        var i = this.display.viewFrom;
                        this.doc.iter(i, this.display.viewTo, (function(t) {
                            if (t.widgets)
                                for (var e = 0; e < t.widgets.length; e++)
                                    if (t.widgets[e].noHScroll) {
                                        Br(n, i, "widget");
                                        break
                                    }
                            ++i
                        }
                        )),
                        this.curOp.forceUpdate = !0,
                        mt(this, "refresh", this)
                    }
                    )),
                    operation: function(t) {
                        return Mi(this, t)
                    },
                    startOperation: function() {
                        return _i(this)
                    },
                    endOperation: function() {
                        return ki(this)
                    },
                    refresh: Di((function() {
                        var t = this.display.cachedTextHeight;
                        Hr(this),
                        this.curOp.forceUpdate = !0,
                        hr(this),
                        si(this, this.doc.scrollLeft, this.doc.scrollTop),
                        Ui(this.display),
                        (null == t || Math.abs(t - Ar(this.display)) > .5 || this.options.lineWrapping) && Nr(this),
                        mt(this, "refresh", this)
                    }
                    )),
                    swapDoc: Di((function(t) {
                        var e = this.doc;
                        return e.cm = null,
                        this.state.selectingText && this.state.selectingText(),
                        yo(this, t),
                        hr(this),
                        this.display.input.reset(),
                        si(this, t.scrollLeft, t.scrollTop),
                        this.curOp.forceScroll = !0,
                        An(this, "swapDoc", this, e),
                        e
                    }
                    )),
                    phrase: function(t) {
                        var e = this.options.phrases;
                        return e && Object.prototype.hasOwnProperty.call(e, t) ? e[t] : t
                    },
                    getInputField: function() {
                        return this.display.input.getField()
                    },
                    getWrapperElement: function() {
                        return this.display.wrapper
                    },
                    getScrollerElement: function() {
                        return this.display.scroller
                    },
                    getGutterElement: function() {
                        return this.display.gutters
                    }
                },
                xt(t),
                t.registerHelper = function(e, r, i) {
                    n.hasOwnProperty(e) || (n[e] = t[e] = {
                        _global: []
                    }),
                    n[e][r] = i
                }
                ,
                t.registerGlobalHelper = function(e, r, i, o) {
                    t.registerHelper(e, r, o),
                    n[e]._global.push({
                        pred: i,
                        val: o
                    })
                }
            }
            function Xs(t, e, n, r, i) {
                var o = e
                  , a = n
                  , s = Jt(t, e.line)
                  , l = i && "rtl" == t.direction ? -n : n;
                function c() {
                    var n = e.line + l;
                    return !(n < t.first || n >= t.first + t.size) && (e = new ie(n,e.ch,e.sticky),
                    s = Jt(t, n))
                }
                function u(o) {
                    var a;
                    if ("codepoint" == r) {
                        var u = s.text.charCodeAt(e.ch + (n > 0 ? 0 : -1));
                        if (isNaN(u))
                            a = null;
                        else {
                            var h = n > 0 ? u >= 55296 && u < 56320 : u >= 56320 && u < 57343;
                            a = new ie(e.line,Math.max(0, Math.min(s.text.length, e.ch + n * (h ? 2 : 1))),-n)
                        }
                    } else
                        a = i ? Xa(t.cm, s, e, n) : qa(s, e, n);
                    if (null == a) {
                        if (o || !c())
                            return !1;
                        e = Ga(i, t.cm, s, e.line, l)
                    } else
                        e = a;
                    return !0
                }
                if ("char" == r || "codepoint" == r)
                    u();
                else if ("column" == r)
                    u(!0);
                else if ("word" == r || "group" == r)
                    for (var h = null, f = "group" == r, d = t.cm && t.cm.getHelper(e, "wordChars"), p = !0; ; p = !1) {
                        if (n < 0 && !u(!p))
                            break;
                        var g = s.text.charAt(e.ch) || "\n"
                          , v = nt(g, d) ? "w" : f && "\n" == g ? "n" : !f || /\s/.test(g) ? null : "p";
                        if (!f || p || v || (v = "s"),
                        h && h != v) {
                            n < 0 && (n = 1,
                            u(),
                            e.sticky = "after");
                            break
                        }
                        if (v && (h = v),
                        n > 0 && !u(!p))
                            break
                    }
                var m = qo(t, e, o, a, !0);
                return ae(o, m) && (m.hitSide = !0),
                m
            }
            function Js(t, e, n, r) {
                var i, o, a = t.doc, s = e.left;
                if ("page" == r) {
                    var l = Math.min(t.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight)
                      , c = Math.max(l - .5 * Ar(t.display), 3);
                    i = (n > 0 ? e.bottom : e.top) + n * c
                } else
                    "line" == r && (i = n > 0 ? e.bottom + 3 : e.top - 3);
                for (; ; ) {
                    if (o = xr(t, s, i),
                    !o.outside)
                        break;
                    if (n < 0 ? i <= 0 : i >= a.height) {
                        o.hitSide = !0;
                        break
                    }
                    i += 5 * n
                }
                return o
            }
            var Ys = function(t) {
                this.cm = t,
                this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null,
                this.polling = new P,
                this.composing = null,
                this.gracePeriod = !1,
                this.readDOMTimeout = null
            };
            function Zs(t, e) {
                var n = tr(t, e.line);
                if (!n || n.hidden)
                    return null;
                var r = Jt(t.doc, e.line)
                  , i = Yn(n, r, e.line)
                  , o = ft(r, t.doc.direction)
                  , a = "left";
                if (o) {
                    var s = ut(o, e.ch);
                    a = s % 2 ? "right" : "left"
                }
                var l = or(i.map, e.ch, a);
                return l.offset = "right" == l.collapse ? l.end : l.start,
                l
            }
            function Qs(t) {
                for (var e = t; e; e = e.parentNode)
                    if (/CodeMirror-gutter-wrapper/.test(e.className))
                        return !0;
                return !1
            }
            function tl(t, e) {
                return e && (t.bad = !0),
                t
            }
            function el(t, e, n, r, i) {
                var o = ""
                  , a = !1
                  , s = t.doc.lineSeparator()
                  , l = !1;
                function c(t) {
                    return function(e) {
                        return e.id == t
                    }
                }
                function u() {
                    a && (o += s,
                    l && (o += s),
                    a = l = !1)
                }
                function h(t) {
                    t && (u(),
                    o += t)
                }
                function f(e) {
                    if (1 == e.nodeType) {
                        var n = e.getAttribute("cm-text");
                        if (n)
                            return void h(n);
                        var o, d = e.getAttribute("cm-marker");
                        if (d) {
                            var p = t.findMarks(ie(r, 0), ie(i + 1, 0), c(+d));
                            return void (p.length && (o = p[0].find(0)) && h(Yt(t.doc, o.from, o.to).join(s)))
                        }
                        if ("false" == e.getAttribute("contenteditable"))
                            return;
                        var g = /^(pre|div|p|li|table|br)$/i.test(e.nodeName);
                        if (!/^br$/i.test(e.nodeName) && 0 == e.textContent.length)
                            return;
                        g && u();
                        for (var v = 0; v < e.childNodes.length; v++)
                            f(e.childNodes[v]);
                        /^(pre|p)$/i.test(e.nodeName) && (l = !0),
                        g && (a = !0)
                    } else
                        3 == e.nodeType && h(e.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "))
                }
                for (; ; ) {
                    if (f(e),
                    e == n)
                        break;
                    e = e.nextSibling,
                    l = !1
                }
                return o
            }
            function nl(t, e, n) {
                var r;
                if (e == t.display.lineDiv) {
                    if (r = t.display.lineDiv.childNodes[n],
                    !r)
                        return tl(t.clipPos(ie(t.display.viewTo - 1)), !0);
                    e = null,
                    n = 0
                } else
                    for (r = e; ; r = r.parentNode) {
                        if (!r || r == t.display.lineDiv)
                            return null;
                        if (r.parentNode && r.parentNode == t.display.lineDiv)
                            break
                    }
                for (var i = 0; i < t.display.view.length; i++) {
                    var o = t.display.view[i];
                    if (o.node == r)
                        return rl(o, e, n)
                }
            }
            function rl(t, e, n) {
                var r = t.text.firstChild
                  , i = !1;
                if (!e || !E(r, e))
                    return tl(ie(te(t.line), 0), !0);
                if (e == r && (i = !0,
                e = r.childNodes[n],
                n = 0,
                !e)) {
                    var o = t.rest ? X(t.rest) : t.line;
                    return tl(ie(te(o), o.text.length), i)
                }
                var a = 3 == e.nodeType ? e : null
                  , s = e;
                a || 1 != e.childNodes.length || 3 != e.firstChild.nodeType || (a = e.firstChild,
                n && (n = a.nodeValue.length));
                while (s.parentNode != r)
                    s = s.parentNode;
                var l = t.measure
                  , c = l.maps;
                function u(e, n, r) {
                    for (var i = -1; i < (c ? c.length : 0); i++)
                        for (var o = i < 0 ? l.map : c[i], a = 0; a < o.length; a += 3) {
                            var s = o[a + 2];
                            if (s == e || s == n) {
                                var u = te(i < 0 ? t.line : t.rest[i])
                                  , h = o[a] + r;
                                return (r < 0 || s != e) && (h = o[a + (r ? 1 : 0)]),
                                ie(u, h)
                            }
                        }
                }
                var h = u(a, s, n);
                if (h)
                    return tl(h, i);
                for (var f = s.nextSibling, d = a ? a.nodeValue.length - n : 0; f; f = f.nextSibling) {
                    if (h = u(f, f.firstChild, 0),
                    h)
                        return tl(ie(h.line, h.ch - d), i);
                    d += f.textContent.length
                }
                for (var p = s.previousSibling, g = n; p; p = p.previousSibling) {
                    if (h = u(p, p.firstChild, -1),
                    h)
                        return tl(ie(h.line, h.ch + g), i);
                    g += p.textContent.length
                }
            }
            Ys.prototype.init = function(t) {
                var e = this
                  , n = this
                  , r = n.cm
                  , i = n.div = t.lineDiv;
                function o(t) {
                    for (var e = t.target; e; e = e.parentNode) {
                        if (e == i)
                            return !0;
                        if (/\bCodeMirror-(?:line)?widget\b/.test(e.className))
                            break
                    }
                    return !1
                }
                function a(t) {
                    if (o(t) && !yt(r, t)) {
                        if (r.somethingSelected())
                            zs({
                                lineWise: !1,
                                text: r.getSelections()
                            }),
                            "cut" == t.type && r.replaceSelection("", null, "cut");
                        else {
                            if (!r.options.lineWiseCopyCut)
                                return;
                            var e = Vs(r);
                            zs({
                                lineWise: !0,
                                text: e.text
                            }),
                            "cut" == t.type && r.operation((function() {
                                r.setSelections(e.ranges, 0, K),
                                r.replaceSelection("", null, "cut")
                            }
                            ))
                        }
                        if (t.clipboardData) {
                            t.clipboardData.clearData();
                            var a = Fs.text.join("\n");
                            if (t.clipboardData.setData("Text", a),
                            t.clipboardData.getData("Text") == a)
                                return void t.preventDefault()
                        }
                        var s = qs()
                          , l = s.firstChild;
                        r.display.lineSpace.insertBefore(s, r.display.lineSpace.firstChild),
                        l.value = Fs.text.join("\n");
                        var c = D();
                        j(l),
                        setTimeout((function() {
                            r.display.lineSpace.removeChild(s),
                            c.focus(),
                            c == i && n.showPrimarySelection()
                        }
                        ), 50)
                    }
                }
                i.contentEditable = !0,
                $s(i, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize),
                pt(i, "paste", (function(t) {
                    !o(t) || yt(r, t) || Ks(t, r) || s <= 11 && setTimeout(Ei(r, (function() {
                        return e.updateFromDOM()
                    }
                    )), 20)
                }
                )),
                pt(i, "compositionstart", (function(t) {
                    e.composing = {
                        data: t.data,
                        done: !1
                    }
                }
                )),
                pt(i, "compositionupdate", (function(t) {
                    e.composing || (e.composing = {
                        data: t.data,
                        done: !1
                    })
                }
                )),
                pt(i, "compositionend", (function(t) {
                    e.composing && (t.data != e.composing.data && e.readFromDOMSoon(),
                    e.composing.done = !0)
                }
                )),
                pt(i, "touchstart", (function() {
                    return n.forceCompositionEnd()
                }
                )),
                pt(i, "input", (function() {
                    e.composing || e.readFromDOMSoon()
                }
                )),
                pt(i, "copy", a),
                pt(i, "cut", a)
            }
            ,
            Ys.prototype.screenReaderLabelChanged = function(t) {
                t ? this.div.setAttribute("aria-label", t) : this.div.removeAttribute("aria-label")
            }
            ,
            Ys.prototype.prepareSelection = function() {
                var t = Kr(this.cm, !1);
                return t.focus = D() == this.div,
                t
            }
            ,
            Ys.prototype.showSelection = function(t, e) {
                t && this.cm.display.view.length && ((t.focus || e) && this.showPrimarySelection(),
                this.showMultipleSelections(t))
            }
            ,
            Ys.prototype.getSelection = function() {
                return this.cm.display.wrapper.ownerDocument.getSelection()
            }
            ,
            Ys.prototype.showPrimarySelection = function() {
                var t = this.getSelection()
                  , e = this.cm
                  , r = e.doc.sel.primary()
                  , i = r.from()
                  , o = r.to();
                if (e.display.viewTo == e.display.viewFrom || i.line >= e.display.viewTo || o.line < e.display.viewFrom)
                    t.removeAllRanges();
                else {
                    var a = nl(e, t.anchorNode, t.anchorOffset)
                      , s = nl(e, t.focusNode, t.focusOffset);
                    if (!a || a.bad || !s || s.bad || 0 != oe(ce(a, s), i) || 0 != oe(le(a, s), o)) {
                        var l = e.display.view
                          , c = i.line >= e.display.viewFrom && Zs(e, i) || {
                            node: l[0].measure.map[2],
                            offset: 0
                        }
                          , u = o.line < e.display.viewTo && Zs(e, o);
                        if (!u) {
                            var h = l[l.length - 1].measure
                              , f = h.maps ? h.maps[h.maps.length - 1] : h.map;
                            u = {
                                node: f[f.length - 1],
                                offset: f[f.length - 2] - f[f.length - 3]
                            }
                        }
                        if (c && u) {
                            var d, p = t.rangeCount && t.getRangeAt(0);
                            try {
                                d = S(c.node, c.offset, u.offset, u.node)
                            } catch (g) {}
                            d && (!n && e.state.focused ? (t.collapse(c.node, c.offset),
                            d.collapsed || (t.removeAllRanges(),
                            t.addRange(d))) : (t.removeAllRanges(),
                            t.addRange(d)),
                            p && null == t.anchorNode ? t.addRange(p) : n && this.startGracePeriod()),
                            this.rememberSelection()
                        } else
                            t.removeAllRanges()
                    }
                }
            }
            ,
            Ys.prototype.startGracePeriod = function() {
                var t = this;
                clearTimeout(this.gracePeriod),
                this.gracePeriod = setTimeout((function() {
                    t.gracePeriod = !1,
                    t.selectionChanged() && t.cm.operation((function() {
                        return t.cm.curOp.selectionChanged = !0
                    }
                    ))
                }
                ), 20)
            }
            ,
            Ys.prototype.showMultipleSelections = function(t) {
                A(this.cm.display.cursorDiv, t.cursors),
                A(this.cm.display.selectionDiv, t.selection)
            }
            ,
            Ys.prototype.rememberSelection = function() {
                var t = this.getSelection();
                this.lastAnchorNode = t.anchorNode,
                this.lastAnchorOffset = t.anchorOffset,
                this.lastFocusNode = t.focusNode,
                this.lastFocusOffset = t.focusOffset
            }
            ,
            Ys.prototype.selectionInEditor = function() {
                var t = this.getSelection();
                if (!t.rangeCount)
                    return !1;
                var e = t.getRangeAt(0).commonAncestorContainer;
                return E(this.div, e)
            }
            ,
            Ys.prototype.focus = function() {
                "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() && D() == this.div || this.showSelection(this.prepareSelection(), !0),
                this.div.focus())
            }
            ,
            Ys.prototype.blur = function() {
                this.div.blur()
            }
            ,
            Ys.prototype.getField = function() {
                return this.div
            }
            ,
            Ys.prototype.supportsTouch = function() {
                return !0
            }
            ,
            Ys.prototype.receivedFocus = function() {
                var t = this
                  , e = this;
                function n() {
                    e.cm.state.focused && (e.pollSelection(),
                    e.polling.set(e.cm.options.pollInterval, n))
                }
                this.selectionInEditor() ? setTimeout((function() {
                    return t.pollSelection()
                }
                ), 20) : Mi(this.cm, (function() {
                    return e.cm.curOp.selectionChanged = !0
                }
                )),
                this.polling.set(this.cm.options.pollInterval, n)
            }
            ,
            Ys.prototype.selectionChanged = function() {
                var t = this.getSelection();
                return t.anchorNode != this.lastAnchorNode || t.anchorOffset != this.lastAnchorOffset || t.focusNode != this.lastFocusNode || t.focusOffset != this.lastFocusOffset
            }
            ,
            Ys.prototype.pollSelection = function() {
                if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
                    var t = this.getSelection()
                      , e = this.cm;
                    if (v && u && this.cm.display.gutterSpecs.length && Qs(t.anchorNode))
                        return this.cm.triggerOnKeyDown({
                            type: "keydown",
                            keyCode: 8,
                            preventDefault: Math.abs
                        }),
                        this.blur(),
                        void this.focus();
                    if (!this.composing) {
                        this.rememberSelection();
                        var n = nl(e, t.anchorNode, t.anchorOffset)
                          , r = nl(e, t.focusNode, t.focusOffset);
                        n && r && Mi(e, (function() {
                            zo(e.doc, ao(n, r), K),
                            (n.bad || r.bad) && (e.curOp.selectionChanged = !0)
                        }
                        ))
                    }
                }
            }
            ,
            Ys.prototype.pollContent = function() {
                null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout),
                this.readDOMTimeout = null);
                var t, e, n, r = this.cm, i = r.display, o = r.doc.sel.primary(), a = o.from(), s = o.to();
                if (0 == a.ch && a.line > r.firstLine() && (a = ie(a.line - 1, Jt(r.doc, a.line - 1).length)),
                s.ch == Jt(r.doc, s.line).text.length && s.line < r.lastLine() && (s = ie(s.line + 1, 0)),
                a.line < i.viewFrom || s.line > i.viewTo - 1)
                    return !1;
                a.line == i.viewFrom || 0 == (t = jr(r, a.line)) ? (e = te(i.view[0].line),
                n = i.view[0].node) : (e = te(i.view[t].line),
                n = i.view[t - 1].node.nextSibling);
                var l, c, u = jr(r, s.line);
                if (u == i.view.length - 1 ? (l = i.viewTo - 1,
                c = i.lineDiv.lastChild) : (l = te(i.view[u + 1].line) - 1,
                c = i.view[u + 1].node.previousSibling),
                !n)
                    return !1;
                var h = r.doc.splitLines(el(r, n, c, e, l))
                  , f = Yt(r.doc, ie(e, 0), ie(l, Jt(r.doc, l).text.length));
                while (h.length > 1 && f.length > 1)
                    if (X(h) == X(f))
                        h.pop(),
                        f.pop(),
                        l--;
                    else {
                        if (h[0] != f[0])
                            break;
                        h.shift(),
                        f.shift(),
                        e++
                    }
                var d = 0
                  , p = 0
                  , g = h[0]
                  , v = f[0]
                  , m = Math.min(g.length, v.length);
                while (d < m && g.charCodeAt(d) == v.charCodeAt(d))
                    ++d;
                var y = X(h)
                  , b = X(f)
                  , w = Math.min(y.length - (1 == h.length ? d : 0), b.length - (1 == f.length ? d : 0));
                while (p < w && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1))
                    ++p;
                if (1 == h.length && 1 == f.length && e == a.line)
                    while (d && d > a.ch && y.charCodeAt(y.length - p - 1) == b.charCodeAt(b.length - p - 1))
                        d--,
                        p++;
                h[h.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, ""),
                h[0] = h[0].slice(d).replace(/\u200b+$/, "");
                var x = ie(e, d)
                  , _ = ie(l, f.length ? X(f).length - p : 0);
                return h.length > 1 || h[0] || oe(x, _) ? (ra(r.doc, h, x, _, "+input"),
                !0) : void 0
            }
            ,
            Ys.prototype.ensurePolled = function() {
                this.forceCompositionEnd()
            }
            ,
            Ys.prototype.reset = function() {
                this.forceCompositionEnd()
            }
            ,
            Ys.prototype.forceCompositionEnd = function() {
                this.composing && (clearTimeout(this.readDOMTimeout),
                this.composing = null,
                this.updateFromDOM(),
                this.div.blur(),
                this.div.focus())
            }
            ,
            Ys.prototype.readFromDOMSoon = function() {
                var t = this;
                null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout((function() {
                    if (t.readDOMTimeout = null,
                    t.composing) {
                        if (!t.composing.done)
                            return;
                        t.composing = null
                    }
                    t.updateFromDOM()
                }
                ), 80))
            }
            ,
            Ys.prototype.updateFromDOM = function() {
                var t = this;
                !this.cm.isReadOnly() && this.pollContent() || Mi(this.cm, (function() {
                    return Hr(t.cm)
                }
                ))
            }
            ,
            Ys.prototype.setUneditable = function(t) {
                t.contentEditable = "false"
            }
            ,
            Ys.prototype.onKeyPress = function(t) {
                0 == t.charCode || this.composing || (t.preventDefault(),
                this.cm.isReadOnly() || Ei(this.cm, Ws)(this.cm, String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), 0))
            }
            ,
            Ys.prototype.readOnlyChanged = function(t) {
                this.div.contentEditable = String("nocursor" != t)
            }
            ,
            Ys.prototype.onContextMenu = function() {}
            ,
            Ys.prototype.resetPosition = function() {}
            ,
            Ys.prototype.needsContentAttribute = !0;
            var il = function(t) {
                this.cm = t,
                this.prevInput = "",
                this.pollingFast = !1,
                this.polling = new P,
                this.hasSelection = !1,
                this.composing = null
            };
            function ol(t, e) {
                if (e = e ? B(e) : {},
                e.value = t.value,
                !e.tabindex && t.tabIndex && (e.tabindex = t.tabIndex),
                !e.placeholder && t.placeholder && (e.placeholder = t.placeholder),
                null == e.autofocus) {
                    var n = D();
                    e.autofocus = n == t || null != t.getAttribute("autofocus") && n == document.body
                }
                function r() {
                    t.value = s.getValue()
                }
                var i;
                if (t.form && (pt(t.form, "submit", r),
                !e.leaveSubmitMethodAlone)) {
                    var o = t.form;
                    i = o.submit;
                    try {
                        var a = o.submit = function() {
                            r(),
                            o.submit = i,
                            o.submit(),
                            o.submit = a
                        }
                    } catch (l) {}
                }
                e.finishInit = function(n) {
                    n.save = r,
                    n.getTextArea = function() {
                        return t
                    }
                    ,
                    n.toTextArea = function() {
                        n.toTextArea = isNaN,
                        r(),
                        t.parentNode.removeChild(n.getWrapperElement()),
                        t.style.display = "",
                        t.form && (vt(t.form, "submit", r),
                        e.leaveSubmitMethodAlone || "function" != typeof t.form.submit || (t.form.submit = i))
                    }
                }
                ,
                t.style.display = "none";
                var s = Hs((function(e) {
                    return t.parentNode.insertBefore(e, t.nextSibling)
                }
                ), e);
                return s
            }
            function al(t) {
                t.off = vt,
                t.on = pt,
                t.wheelEventPixels = eo,
                t.Doc = _a,
                t.splitLines = Nt,
                t.countColumn = I,
                t.findColumn = $,
                t.isWordChar = et,
                t.Pass = W,
                t.signal = mt,
                t.Line = ln,
                t.changeEnd = so,
                t.scrollbarModel = bi,
                t.Pos = ie,
                t.cmpPos = oe,
                t.modes = It,
                t.mimeModes = Pt,
                t.resolveMode = Wt,
                t.getMode = Kt,
                t.modeExtensions = Ut,
                t.extendMode = Vt,
                t.copyState = $t,
                t.startState = Gt,
                t.innerMode = qt,
                t.commands = Ja,
                t.keyMap = Ba,
                t.keyName = Ka,
                t.isModifierKey = za,
                t.lookupKey = Fa,
                t.normalizeKeyMap = Pa,
                t.StringStream = Xt,
                t.SharedTextMarker = va,
                t.TextMarker = pa,
                t.LineWidget = ua,
                t.e_preventDefault = _t,
                t.e_stopPropagation = kt,
                t.e_stop = St,
                t.addClass = N,
                t.contains = E,
                t.rmClass = T,
                t.keyNames = Na
            }
            il.prototype.init = function(t) {
                var e = this
                  , n = this
                  , r = this.cm;
                this.createField(t);
                var i = this.textarea;
                function o(t) {
                    if (!yt(r, t)) {
                        if (r.somethingSelected())
                            zs({
                                lineWise: !1,
                                text: r.getSelections()
                            });
                        else {
                            if (!r.options.lineWiseCopyCut)
                                return;
                            var e = Vs(r);
                            zs({
                                lineWise: !0,
                                text: e.text
                            }),
                            "cut" == t.type ? r.setSelections(e.ranges, null, K) : (n.prevInput = "",
                            i.value = e.text.join("\n"),
                            j(i))
                        }
                        "cut" == t.type && (r.state.cutIncoming = +new Date)
                    }
                }
                t.wrapper.insertBefore(this.wrapper, t.wrapper.firstChild),
                g && (i.style.width = "0px"),
                pt(i, "input", (function() {
                    a && s >= 9 && e.hasSelection && (e.hasSelection = null),
                    n.poll()
                }
                )),
                pt(i, "paste", (function(t) {
                    yt(r, t) || Ks(t, r) || (r.state.pasteIncoming = +new Date,
                    n.fastPoll())
                }
                )),
                pt(i, "cut", o),
                pt(i, "copy", o),
                pt(t.scroller, "paste", (function(e) {
                    if (!Kn(t, e) && !yt(r, e)) {
                        if (!i.dispatchEvent)
                            return r.state.pasteIncoming = +new Date,
                            void n.focus();
                        var o = new Event("paste");
                        o.clipboardData = e.clipboardData,
                        i.dispatchEvent(o)
                    }
                }
                )),
                pt(t.lineSpace, "selectstart", (function(e) {
                    Kn(t, e) || _t(e)
                }
                )),
                pt(i, "compositionstart", (function() {
                    var t = r.getCursor("from");
                    n.composing && n.composing.range.clear(),
                    n.composing = {
                        start: t,
                        range: r.markText(t, r.getCursor("to"), {
                            className: "CodeMirror-composing"
                        })
                    }
                }
                )),
                pt(i, "compositionend", (function() {
                    n.composing && (n.poll(),
                    n.composing.range.clear(),
                    n.composing = null)
                }
                ))
            }
            ,
            il.prototype.createField = function(t) {
                this.wrapper = qs(),
                this.textarea = this.wrapper.firstChild
            }
            ,
            il.prototype.screenReaderLabelChanged = function(t) {
                t ? this.textarea.setAttribute("aria-label", t) : this.textarea.removeAttribute("aria-label")
            }
            ,
            il.prototype.prepareSelection = function() {
                var t = this.cm
                  , e = t.display
                  , n = t.doc
                  , r = Kr(t);
                if (t.options.moveInputWithCursor) {
                    var i = yr(t, n.sel.primary().head, "div")
                      , o = e.wrapper.getBoundingClientRect()
                      , a = e.lineDiv.getBoundingClientRect();
                    r.teTop = Math.max(0, Math.min(e.wrapper.clientHeight - 10, i.top + a.top - o.top)),
                    r.teLeft = Math.max(0, Math.min(e.wrapper.clientWidth - 10, i.left + a.left - o.left))
                }
                return r
            }
            ,
            il.prototype.showSelection = function(t) {
                var e = this.cm
                  , n = e.display;
                A(n.cursorDiv, t.cursors),
                A(n.selectionDiv, t.selection),
                null != t.teTop && (this.wrapper.style.top = t.teTop + "px",
                this.wrapper.style.left = t.teLeft + "px")
            }
            ,
            il.prototype.reset = function(t) {
                if (!this.contextMenuPending && !this.composing) {
                    var e = this.cm;
                    if (e.somethingSelected()) {
                        this.prevInput = "";
                        var n = e.getSelection();
                        this.textarea.value = n,
                        e.state.focused && j(this.textarea),
                        a && s >= 9 && (this.hasSelection = n)
                    } else
                        t || (this.prevInput = this.textarea.value = "",
                        a && s >= 9 && (this.hasSelection = null))
                }
            }
            ,
            il.prototype.getField = function() {
                return this.textarea
            }
            ,
            il.prototype.supportsTouch = function() {
                return !1
            }
            ,
            il.prototype.focus = function() {
                if ("nocursor" != this.cm.options.readOnly && (!m || D() != this.textarea))
                    try {
                        this.textarea.focus()
                    } catch (t) {}
            }
            ,
            il.prototype.blur = function() {
                this.textarea.blur()
            }
            ,
            il.prototype.resetPosition = function() {
                this.wrapper.style.top = this.wrapper.style.left = 0
            }
            ,
            il.prototype.receivedFocus = function() {
                this.slowPoll()
            }
            ,
            il.prototype.slowPoll = function() {
                var t = this;
                this.pollingFast || this.polling.set(this.cm.options.pollInterval, (function() {
                    t.poll(),
                    t.cm.state.focused && t.slowPoll()
                }
                ))
            }
            ,
            il.prototype.fastPoll = function() {
                var t = !1
                  , e = this;
                function n() {
                    var r = e.poll();
                    r || t ? (e.pollingFast = !1,
                    e.slowPoll()) : (t = !0,
                    e.polling.set(60, n))
                }
                e.pollingFast = !0,
                e.polling.set(20, n)
            }
            ,
            il.prototype.poll = function() {
                var t = this
                  , e = this.cm
                  , n = this.textarea
                  , r = this.prevInput;
                if (this.contextMenuPending || !e.state.focused || Rt(n) && !r && !this.composing || e.isReadOnly() || e.options.disableInput || e.state.keySeq)
                    return !1;
                var i = n.value;
                if (i == r && !e.somethingSelected())
                    return !1;
                if (a && s >= 9 && this.hasSelection === i || y && /[\uf700-\uf7ff]/.test(i))
                    return e.display.input.reset(),
                    !1;
                if (e.doc.sel == e.display.selForContextMenu) {
                    var o = i.charCodeAt(0);
                    if (8203 != o || r || (r = "​"),
                    8666 == o)
                        return this.reset(),
                        this.cm.execCommand("undo")
                }
                var l = 0
                  , c = Math.min(r.length, i.length);
                while (l < c && r.charCodeAt(l) == i.charCodeAt(l))
                    ++l;
                return Mi(e, (function() {
                    Ws(e, i.slice(l), r.length - l, null, t.composing ? "*compose" : null),
                    i.length > 1e3 || i.indexOf("\n") > -1 ? n.value = t.prevInput = "" : t.prevInput = i,
                    t.composing && (t.composing.range.clear(),
                    t.composing.range = e.markText(t.composing.start, e.getCursor("to"), {
                        className: "CodeMirror-composing"
                    }))
                }
                )),
                !0
            }
            ,
            il.prototype.ensurePolled = function() {
                this.pollingFast && this.poll() && (this.pollingFast = !1)
            }
            ,
            il.prototype.onKeyPress = function() {
                a && s >= 9 && (this.hasSelection = null),
                this.fastPoll()
            }
            ,
            il.prototype.onContextMenu = function(t) {
                var e = this
                  , n = e.cm
                  , r = n.display
                  , i = e.textarea;
                e.contextMenuPending && e.contextMenuPending();
                var o = Rr(n, t)
                  , c = r.scroller.scrollTop;
                if (o && !h) {
                    var u = n.options.resetSelectionOnContextMenu;
                    u && -1 == n.doc.sel.contains(o) && Ei(n, zo)(n.doc, ao(o), K);
                    var f, d = i.style.cssText, p = e.wrapper.style.cssText, g = e.wrapper.offsetParent.getBoundingClientRect();
                    if (e.wrapper.style.cssText = "position: static",
                    i.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (t.clientY - g.top - 5) + "px; left: " + (t.clientX - g.left - 5) + "px;\n      z-index: 1000; background: " + (a ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",
                    l && (f = window.scrollY),
                    r.input.focus(),
                    l && window.scrollTo(null, f),
                    r.input.reset(),
                    n.somethingSelected() || (i.value = e.prevInput = " "),
                    e.contextMenuPending = y,
                    r.selForContextMenu = n.doc.sel,
                    clearTimeout(r.detectingSelectAll),
                    a && s >= 9 && m(),
                    k) {
                        St(t);
                        var v = function() {
                            vt(window, "mouseup", v),
                            setTimeout(y, 20)
                        };
                        pt(window, "mouseup", v)
                    } else
                        setTimeout(y, 50)
                }
                function m() {
                    if (null != i.selectionStart) {
                        var t = n.somethingSelected()
                          , o = "​" + (t ? i.value : "");
                        i.value = "⇚",
                        i.value = o,
                        e.prevInput = t ? "" : "​",
                        i.selectionStart = 1,
                        i.selectionEnd = o.length,
                        r.selForContextMenu = n.doc.sel
                    }
                }
                function y() {
                    if (e.contextMenuPending == y && (e.contextMenuPending = !1,
                    e.wrapper.style.cssText = p,
                    i.style.cssText = d,
                    a && s < 9 && r.scrollbars.setScrollTop(r.scroller.scrollTop = c),
                    null != i.selectionStart)) {
                        (!a || a && s < 9) && m();
                        var t = 0
                          , o = function() {
                            r.selForContextMenu == n.doc.sel && 0 == i.selectionStart && i.selectionEnd > 0 && "​" == e.prevInput ? Ei(n, Xo)(n) : t++ < 10 ? r.detectingSelectAll = setTimeout(o, 500) : (r.selForContextMenu = null,
                            r.input.reset())
                        };
                        r.detectingSelectAll = setTimeout(o, 200)
                    }
                }
            }
            ,
            il.prototype.readOnlyChanged = function(t) {
                t || this.reset(),
                this.textarea.disabled = "nocursor" == t,
                this.textarea.readOnly = !!t
            }
            ,
            il.prototype.setUneditable = function() {}
            ,
            il.prototype.needsContentAttribute = !1,
            Ns(Hs),
            Gs(Hs);
            var sl = "iter insert remove copy getEditor constructor".split(" ");
            for (var ll in _a.prototype)
                _a.prototype.hasOwnProperty(ll) && F(sl, ll) < 0 && (Hs.prototype[ll] = function(t) {
                    return function() {
                        return t.apply(this.doc, arguments)
                    }
                }(_a.prototype[ll]));
            return xt(_a),
            Hs.inputStyles = {
                textarea: il,
                contenteditable: Ys
            },
            Hs.defineMode = function(t) {
                Hs.defaults.mode || "null" == t || (Hs.defaults.mode = t),
                Ft.apply(this, arguments)
            }
            ,
            Hs.defineMIME = zt,
            Hs.defineMode("null", (function() {
                return {
                    token: function(t) {
                        return t.skipToEnd()
                    }
                }
            }
            )),
            Hs.defineMIME("text/plain", "null"),
            Hs.defineExtension = function(t, e) {
                Hs.prototype[t] = e
            }
            ,
            Hs.defineDocExtension = function(t, e) {
                _a.prototype[t] = e
            }
            ,
            Hs.fromTextArea = ol,
            al(Hs),
            Hs.version = "5.63.3",
            Hs
        }
        ))
    },
    5899: function(t, e) {
        t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
    },
    "58a8": function(t, e, n) {
        var r = n("1d80")
          , i = n("577e")
          , o = n("5899")
          , a = "[" + o + "]"
          , s = RegExp("^" + a + a + "*")
          , l = RegExp(a + a + "*$")
          , c = function(t) {
            return function(e) {
                var n = i(r(e));
                return 1 & t && (n = n.replace(s, "")),
                2 & t && (n = n.replace(l, "")),
                n
            }
        };
        t.exports = {
            start: c(1),
            end: c(2),
            trim: c(3)
        }
    },
    5902: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("c642")
          , i = n("d8a8");
        for (var o in i)
            ["default"].indexOf(o) < 0 && function(t) {
                n.d(e, t, (function() {
                    return i[t]
                }
                ))
            }(o);
        var a = n("2877")
          , s = Object(a["a"])(i["default"], r["a"], r["b"], !1, null, null, null);
        e["default"] = s.exports
    },
    5980: function(t, e, n) {
        (function(e, r) {
            t.exports = r(n("21bf"))
        }
        )(0, (function(t) {
            (function() {
                var e = t
                  , n = e.lib
                  , r = n.Base
                  , i = e.enc
                  , o = i.Utf8
                  , a = e.algo;
                a.HMAC = r.extend({
                    init: function(t, e) {
                        t = this._hasher = new t.init,
                        "string" == typeof e && (e = o.parse(e));
                        var n = t.blockSize
                          , r = 4 * n;
                        e.sigBytes > r && (e = t.finalize(e)),
                        e.clamp();
                        for (var i = this._oKey = e.clone(), a = this._iKey = e.clone(), s = i.words, l = a.words, c = 0; c < n; c++)
                            s[c] ^= 1549556828,
                            l[c] ^= 909522486;
                        i.sigBytes = a.sigBytes = r,
                        this.reset()
                    },
                    reset: function() {
                        var t = this._hasher;
                        t.reset(),
                        t.update(this._iKey)
                    },
                    update: function(t) {
                        return this._hasher.update(t),
                        this
                    },
                    finalize: function(t) {
                        var e = this._hasher
                          , n = e.finalize(t);
                        e.reset();
                        var r = e.finalize(this._oKey.clone().concat(n));
                        return r
                    }
                })
            }
            )()
        }
        ))
    },
    "5a34": function(t, e, n) {
        var r = n("44e7");
        t.exports = function(t) {
            if (r(t))
                throw TypeError("The method doesn't accept regular expressions");
            return t
        }
    },
    "5b81": function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , i = n("1d80")
          , o = n("1626")
          , a = n("44e7")
          , s = n("577e")
          , l = n("dc4a")
          , c = n("ad6d")
          , u = n("0cb2")
          , h = n("b622")
          , f = n("c430")
          , d = h("replace")
          , p = RegExp.prototype
          , g = Math.max
          , v = function(t, e, n) {
            return n > t.length ? -1 : "" === e ? n : t.indexOf(e, n)
        };
        r({
            target: "String",
            proto: !0
        }, {
            replaceAll: function(t, e) {
                var n, r, h, m, y, b, w, x, _, k = i(this), C = 0, S = 0, T = "";
                if (null != t) {
                    if (n = a(t),
                    n && (r = s(i("flags"in p ? t.flags : c.call(t))),
                    !~r.indexOf("g")))
                        throw TypeError("`.replaceAll` does not allow non-global regexes");
                    if (h = l(t, d),
                    h)
                        return h.call(t, k, e);
                    if (f && n)
                        return s(k).replace(t, e)
                }
                m = s(k),
                y = s(t),
                b = o(e),
                b || (e = s(e)),
                w = y.length,
                x = g(1, w),
                C = v(m, y, 0);
                while (-1 !== C)
                    _ = b ? s(e(y, C, m)) : u(y, m, C, [], void 0, e),
                    T += m.slice(S, C) + _,
                    S = C + w,
                    C = v(m, y, C + x);
                return S < m.length && (T += m.slice(S)),
                T
            }
        })
    },
    6062: function(t, e, n) {
        "use strict";
        var r = n("6d61")
          , i = n("6566");
        t.exports = r("Set", (function(t) {
            return function() {
                return t(this, arguments.length ? arguments[0] : void 0)
            }
        }
        ), i)
    },
    6395: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "container"
            }, [n("el-row", {
                attrs: {
                    gutter: 0
                }
            }, [n("el-col", {
                attrs: {
                    span: 11
                }
            }, [n("div", {
                staticClass: "code_content"
            }, [n("span", {
                staticClass: "operation"
            }, [n("span", {
                staticClass: "operation_btn"
            }, [t._v("类型： "), n("el-select", {
                attrs: {
                    filterable: "",
                    placeholder: t.enType,
                    size: "mini"
                },
                model: {
                    value: t.enType,
                    callback: function(e) {
                        t.enType = e
                    },
                    expression: "enType"
                }
            }, t._l(t.enTypes, (function(t) {
                return n("el-option", {
                    key: t.label,
                    attrs: {
                        label: t.label,
                        value: t.value
                    }
                })
            }
            )), 1)], 1), n("el-button", {
                staticClass: "operation_btn",
                attrs: {
                    type: "text",
                    icon: "el-icon-s-operation"
                },
                on: {
                    click: t.changeOperationType
                }
            }, [t._v(" " + t._s(1 === t.operationType ? "加密" : "解密") + " ")]), t.showPasswordInput ? n("el-input", {
                staticClass: "password",
                attrs: {
                    placeholder: "请输入秘钥"
                },
                model: {
                    value: t.password,
                    callback: function(e) {
                        t.password = e
                    },
                    expression: "password"
                }
            }) : t._e()], 1), n("div", {
                staticClass: "editor"
            }, [n("MonacoEditor", {
                attrs: {
                    code: t.inputStr,
                    editorOptions: t.options,
                    theme: "vs",
                    language: "text"
                },
                on: {
                    mounted: t.onMounted,
                    codeChange: t.inputCodeChange
                }
            })], 1)])]), n("el-col", {
                attrs: {
                    span: 13
                }
            }, [n("div", {
                staticClass: "code_content"
            }, [n("MonacoEditor", {
                key: t.randomkey,
                attrs: {
                    code: t.outputStr,
                    editorOptions: t.options,
                    theme: "vs",
                    language: "text"
                },
                on: {
                    mounted: t.onMounted
                }
            })], 1)])], 1)], 1)
        }
          , i = []
          , o = n("d4ec")
          , a = n("bee2")
          , s = n("262e")
          , l = n("2caf")
          , c = (n("d3b7"),
        n("6062"),
        n("3ca3"),
        n("ddb0"),
        n("9ab4"))
          , u = n("1b40")
          , h = n("dba0")
          , f = n.n(h)
          , d = (n("25f0"),
        n("3452"))
          , p = n.n(d);
        function g(t, e, n) {
            var r;
            try {
                switch (t) {
                case "MD5":
                    r = p.a.MD5(e).toString();
                    break;
                case "SHA1":
                    r = p.a.SHA1(e).toString();
                    break;
                case "SHA256":
                    r = p.a.SHA256(e).toString();
                    break;
                case "SHA512":
                    r = p.a.SHA512(e).toString();
                    break;
                case "SHA3-512":
                    r = p.a.SHA3(e, {
                        outputLength: 512
                    }).toString();
                    break;
                case "SHA3-384":
                    r = p.a.SHA3(e, {
                        outputLength: 384
                    }).toString();
                    break;
                case "SHA3-256":
                    r = p.a.SHA3(e, {
                        outputLength: 256
                    }).toString();
                    break;
                case "SHA3-224":
                    r = p.a.SHA3(e, {
                        outputLength: 224
                    }).toString();
                    break;
                case "RIPEMD160":
                    r = p.a.RIPEMD160(e, {
                        outputLength: 224
                    }).toString();
                    break;
                case "HmacMD5":
                    r = p.a.HmacMD5(e, n).toString();
                    break;
                case "HmacSHA1":
                    r = p.a.HmacSHA1(e, n).toString();
                    break;
                case "HmacSHA256":
                    r = p.a.HmacSHA256(e, n).toString();
                    break;
                case "HmacSHA512":
                    r = p.a.HmacSHA512(e, n).toString();
                    break;
                case "AES":
                    r = p.a.AES.encrypt(e, n).toString();
                    break;
                case "DES":
                    r = p.a.DES.encrypt(e, n).toString();
                    break;
                case "TripleDES":
                    r = p.a.TripleDES.encrypt(e, n).toString();
                    break;
                case "Rabbit":
                    r = p.a.Rabbit.encrypt(e, n).toString();
                    break;
                case "RC4":
                    r = p.a.RC4.encrypt(e, n).toString();
                    break;
                case "RC4Drop":
                    r = p.a.RC4Drop.encrypt(e, n).toString();
                    break;
                case "Base64":
                    r = p.a.enc.Base64.stringify(p.a.enc.Utf8.parse(e));
                    break;
                case "Latin1":
                    r = p.a.enc.Latin1.stringify(p.a.enc.Utf8.parse(e));
                    break;
                case "Hex":
                    r = p.a.enc.Hex.stringify(p.a.enc.Utf8.parse(e));
                    break;
                case "Utf8":
                    r = p.a.enc.Utf8.stringify(p.a.enc.Utf8.parse(e));
                    break;
                case "Utf16":
                    r = p.a.enc.Utf16.stringify(p.a.enc.Utf8.parse(e));
                    break;
                case "Utf16LE":
                    r = p.a.enc.Utf16LE.stringify(p.a.enc.Utf8.parse(e));
                    break;
                case "ALL":
                    var i = ["MD5", "AES", "DES", "Base64", "Latin1", "Hex", "Utf8", "SHA1", "SHA256", "SHA512", "SHA3-512", "SHA3-384", "SHA3-256", "SHA3-224", "RIPEMD160", "HmacMD5", "HmacSHA1", "HmacSHA256", "HmacSHA512", "TripleDES", "Rabbit", "RC4", "RC4Drop", "Utf16", "Utf16LE"];
                    r = {};
                    for (var o = 0; o < i.length; o++) {
                        var a = i[o];
                        r[a] = g(a, e, n)
                    }
                    r = JSON.stringify(r, null, 4);
                    break;
                default:
                    r = "加密类型不支持"
                }
            } catch (s) {
                r = ""
            }
            return r
        }
        function v(t, e, n) {
            var r;
            try {
                switch (t) {
                case "AES":
                    r = p.a.AES.decrypt(e, n).toString(p.a.enc.Utf8);
                    break;
                case "DES":
                    r = p.a.DES.decrypt(e, n).toString(p.a.enc.Utf8);
                    break;
                case "TripleDES":
                    r = p.a.TripleDES.decrypt(e, n).toString(p.a.enc.Utf8);
                    break;
                case "Rabbit":
                    r = p.a.Rabbit.decrypt(e, n).toString(p.a.enc.Utf8);
                    break;
                case "RC4":
                    r = p.a.RC4.decrypt(e, n).toString(p.a.enc.Utf8);
                    break;
                case "RC4Drop":
                    r = p.a.RC4Drop.decrypt(e, n).toString(p.a.enc.Utf8);
                    break;
                case "Base64":
                    r = p.a.enc.Base64.parse(e).toString(p.a.enc.Utf8);
                    break;
                case "Latin1":
                    r = p.a.enc.Latin1.parse(e).toString(p.a.enc.Utf8);
                    break;
                case "Hex":
                    r = p.a.enc.Hex.parse(e).toString(p.a.enc.Utf8);
                    break;
                case "Utf8":
                    r = p.a.enc.Utf8.parse(e).toString(p.a.enc.Utf8);
                    break;
                case "Utf16":
                    r = p.a.enc.Utf16.parse(e).toString(p.a.enc.Utf8);
                    break;
                case "Utf16LE":
                    r = p.a.enc.Utf16LE.parse(e).toString(p.a.enc.Utf8);
                    break;
                case "ALL":
                    var i = ["AES", "DES", "TripleDES", "Rabbit", "RC4", "RC4Drop", "Base64", "Latin1", "Hex", "Utf8", "Utf16", "Utf16LE", "MD5", "SHA3-512", "HmacSHA512", "SHA3-224", "HmacMD5", "SHA256", "SHA512", "SHA3-256", "HmacSHA1", "HmacSHA256", "SHA3-384", "SHA1", "RIPEMD160"];
                    r = {};
                    for (var o = 0; o < i.length; o++) {
                        var a = i[o];
                        r[a] = v(a, e, n)
                    }
                    r = JSON.stringify(r, null, 4);
                    break;
                default:
                    r = t + "类型不支持解密"
                }
            } catch (s) {
                r = ""
            }
            return r
        }
        var m = function(t) {
            Object(s["a"])(n, t);
            var e = Object(l["a"])(n);
            function n() {
                var t;
                return Object(o["a"])(this, n),
                t = e.apply(this, arguments),
                t.randomkey = 1231231,
                t.inputStr = "",
                t.outputStr = "",
                t.password = "",
                t.showPasswordInput = !1,
                t.options = {
                    selectOnLineNumbers: !0,
                    roundedSelection: !0,
                    readOnly: !1,
                    cursorStyle: "line",
                    automaticLayout: !1,
                    glyphMargin: !0,
                    renderLineHighlight: null,
                    hideCursorInOverviewRuler: !0,
                    scrollbar: {
                        vertical: "hidden"
                    }
                },
                t.enType = "ALL",
                t.enTypes = [{
                    value: "ALL",
                    lable: "ALL"
                }, {
                    value: "MD5",
                    lable: "MD5"
                }, {
                    value: "AES",
                    lable: "AES"
                }, {
                    value: "DES",
                    lable: "DES"
                }, {
                    value: "Base64",
                    lable: "Base64"
                }, {
                    value: "Latin1",
                    lable: "Latin1"
                }, {
                    value: "Hex",
                    lable: "Hex"
                }, {
                    value: "Utf8",
                    lable: "Utf8"
                }, {
                    value: "SHA1",
                    lable: "SHA1"
                }, {
                    value: "SHA256",
                    lable: "SHA256"
                }, {
                    value: "SHA512",
                    lable: "SHA512"
                }, {
                    value: "SHA3-512",
                    lable: "SHA3-512"
                }, {
                    value: "SHA3-384",
                    lable: "SHA3-384"
                }, {
                    value: "SHA3-256",
                    lable: "SHA3-256"
                }, {
                    value: "SHA3-224",
                    lable: "SHA3-224"
                }, {
                    value: "RIPEMD160",
                    lable: "RIPEMD160"
                }, {
                    value: "HmacMD5",
                    lable: "HmacMD5"
                }, {
                    value: "HmacSHA1",
                    lable: "HmacSHA1"
                }, {
                    value: "HmacSHA256",
                    lable: "HmacSHA256"
                }, {
                    value: "HmacSHA512",
                    lable: "HmacSHA512"
                }, {
                    value: "TripleDES",
                    lable: "TripleDES"
                }, {
                    value: "Rabbit",
                    lable: "Rabbit"
                }, {
                    value: "RC4",
                    lable: "RC4"
                }, {
                    value: "RC4Drop",
                    lable: "RC4Drop"
                }, {
                    value: "Utf16",
                    lable: "Utf16"
                }, {
                    value: "Utf16LE",
                    lable: "Utf16LE"
                }],
                t.needPassword = new Set(["AES", "DES", "TripleDES", "Rabbit", "RC4", "RC4Drop", "HmacMD5", "HmacSHA1", "HmacSHA256", "HmacSHA512"]),
                t.operationType = 1,
                t
            }
            return Object(a["a"])(n, [{
                key: "changeOperationType",
                value: function() {
                    this.operationType = 1 ^ this.operationType
                }
            }, {
                key: "createRamdomKey",
                value: function() {
                    return Math.floor(0xe8d4a54019 * Math.random())
                }
            }, {
                key: "created",
                value: function() {
                    var t = this;
                    window.onresize = function() {
                        t.randomkey = t.createRamdomKey()
                    }
                }
            }, {
                key: "onMounted",
                value: function(t) {
                    t.updateOptions(this.options)
                }
            }, {
                key: "inputCodeChange",
                value: function(t) {
                    this.inputStr = t.getValue(),
                    this.run()
                }
            }, {
                key: "run",
                value: function() {
                    this.needPassword.has(this.enType) ? this.showPasswordInput = !0 : this.showPasswordInput = !1,
                    this.inputStr.length > 0 && (1 == this.operationType ? this.outputStr = g(this.enType, this.inputStr, this.password) : this.outputStr = v(this.enType, this.inputStr, this.password),
                    this.randomkey = this.createRamdomKey())
                }
            }]),
            n
        }(u["c"]);
        Object(c["a"])([Object(u["d"])("operationType", {
            deep: !1
        }), Object(u["d"])("password", {
            deep: !1
        }), Object(u["d"])("enType", {
            deep: !1
        })], m.prototype, "run", null),
        m = Object(c["a"])([Object(u["a"])({
            components: {
                MonacoEditor: f.a
            }
        })], m);
        var y = m
          , b = y
          , w = (n("9cab"),
        n("2877"))
          , x = Object(w["a"])(b, r, i, !1, null, "e9f8c662", null);
        e["default"] = x.exports
    },
    "641c": function(t, e) {
        var n = function() {
            this.Diff_Timeout = 1,
            this.Diff_EditCost = 4,
            this.Match_Threshold = .5,
            this.Match_Distance = 1e3,
            this.Patch_DeleteThreshold = .5,
            this.Patch_Margin = 4,
            this.Match_MaxBits = 32
        }
          , r = -1
          , i = 1
          , o = 0;
        n.Diff = function(t, e) {
            return [t, e]
        }
        ,
        n.prototype.diff_main = function(t, e, r, i) {
            "undefined" == typeof i && (i = this.Diff_Timeout <= 0 ? Number.MAX_VALUE : (new Date).getTime() + 1e3 * this.Diff_Timeout);
            var a = i;
            if (null == t || null == e)
                throw new Error("Null input. (diff_main)");
            if (t == e)
                return t ? [new n.Diff(o,t)] : [];
            "undefined" == typeof r && (r = !0);
            var s = r
              , l = this.diff_commonPrefix(t, e)
              , c = t.substring(0, l);
            t = t.substring(l),
            e = e.substring(l),
            l = this.diff_commonSuffix(t, e);
            var u = t.substring(t.length - l);
            t = t.substring(0, t.length - l),
            e = e.substring(0, e.length - l);
            var h = this.diff_compute_(t, e, s, a);
            return c && h.unshift(new n.Diff(o,c)),
            u && h.push(new n.Diff(o,u)),
            this.diff_cleanupMerge(h),
            h
        }
        ,
        n.prototype.diff_compute_ = function(t, e, a, s) {
            var l;
            if (!t)
                return [new n.Diff(i,e)];
            if (!e)
                return [new n.Diff(r,t)];
            var c = t.length > e.length ? t : e
              , u = t.length > e.length ? e : t
              , h = c.indexOf(u);
            if (-1 != h)
                return l = [new n.Diff(i,c.substring(0, h)), new n.Diff(o,u), new n.Diff(i,c.substring(h + u.length))],
                t.length > e.length && (l[0][0] = l[2][0] = r),
                l;
            if (1 == u.length)
                return [new n.Diff(r,t), new n.Diff(i,e)];
            var f = this.diff_halfMatch_(t, e);
            if (f) {
                var d = f[0]
                  , p = f[1]
                  , g = f[2]
                  , v = f[3]
                  , m = f[4]
                  , y = this.diff_main(d, g, a, s)
                  , b = this.diff_main(p, v, a, s);
                return y.concat([new n.Diff(o,m)], b)
            }
            return a && t.length > 100 && e.length > 100 ? this.diff_lineMode_(t, e, s) : this.diff_bisect_(t, e, s)
        }
        ,
        n.prototype.diff_lineMode_ = function(t, e, a) {
            var s = this.diff_linesToChars_(t, e);
            t = s.chars1,
            e = s.chars2;
            var l = s.lineArray
              , c = this.diff_main(t, e, !1, a);
            this.diff_charsToLines_(c, l),
            this.diff_cleanupSemantic(c),
            c.push(new n.Diff(o,""));
            var u = 0
              , h = 0
              , f = 0
              , d = ""
              , p = "";
            while (u < c.length) {
                switch (c[u][0]) {
                case i:
                    f++,
                    p += c[u][1];
                    break;
                case r:
                    h++,
                    d += c[u][1];
                    break;
                case o:
                    if (h >= 1 && f >= 1) {
                        c.splice(u - h - f, h + f),
                        u = u - h - f;
                        for (var g = this.diff_main(d, p, !1, a), v = g.length - 1; v >= 0; v--)
                            c.splice(u, 0, g[v]);
                        u += g.length
                    }
                    f = 0,
                    h = 0,
                    d = "",
                    p = "";
                    break
                }
                u++
            }
            return c.pop(),
            c
        }
        ,
        n.prototype.diff_bisect_ = function(t, e, o) {
            for (var a = t.length, s = e.length, l = Math.ceil((a + s) / 2), c = l, u = 2 * l, h = new Array(u), f = new Array(u), d = 0; d < u; d++)
                h[d] = -1,
                f[d] = -1;
            h[c + 1] = 0,
            f[c + 1] = 0;
            for (var p = a - s, g = p % 2 != 0, v = 0, m = 0, y = 0, b = 0, w = 0; w < l; w++) {
                if ((new Date).getTime() > o)
                    break;
                for (var x = -w + v; x <= w - m; x += 2) {
                    var _ = c + x;
                    A = x == -w || x != w && h[_ - 1] < h[_ + 1] ? h[_ + 1] : h[_ - 1] + 1;
                    var k = A - x;
                    while (A < a && k < s && t.charAt(A) == e.charAt(k))
                        A++,
                        k++;
                    if (h[_] = A,
                    A > a)
                        m += 2;
                    else if (k > s)
                        v += 2;
                    else if (g) {
                        var C = c + p - x;
                        if (C >= 0 && C < u && -1 != f[C]) {
                            var S = a - f[C];
                            if (A >= S)
                                return this.diff_bisectSplit_(t, e, A, k, o)
                        }
                    }
                }
                for (var T = -w + y; T <= w - b; T += 2) {
                    C = c + T;
                    S = T == -w || T != w && f[C - 1] < f[C + 1] ? f[C + 1] : f[C - 1] + 1;
                    var O = S - T;
                    while (S < a && O < s && t.charAt(a - S - 1) == e.charAt(s - O - 1))
                        S++,
                        O++;
                    if (f[C] = S,
                    S > a)
                        b += 2;
                    else if (O > s)
                        y += 2;
                    else if (!g) {
                        _ = c + p - T;
                        if (_ >= 0 && _ < u && -1 != h[_]) {
                            var A = h[_];
                            k = c + A - _;
                            if (S = a - S,
                            A >= S)
                                return this.diff_bisectSplit_(t, e, A, k, o)
                        }
                    }
                }
            }
            return [new n.Diff(r,t), new n.Diff(i,e)]
        }
        ,
        n.prototype.diff_bisectSplit_ = function(t, e, n, r, i) {
            var o = t.substring(0, n)
              , a = e.substring(0, r)
              , s = t.substring(n)
              , l = e.substring(r)
              , c = this.diff_main(o, a, !1, i)
              , u = this.diff_main(s, l, !1, i);
            return c.concat(u)
        }
        ,
        n.prototype.diff_linesToChars_ = function(t, e) {
            var n = []
              , r = {};
            function i(t) {
                var e = ""
                  , i = 0
                  , a = -1
                  , s = n.length;
                while (a < t.length - 1) {
                    a = t.indexOf("\n", i),
                    -1 == a && (a = t.length - 1);
                    var l = t.substring(i, a + 1);
                    (r.hasOwnProperty ? r.hasOwnProperty(l) : void 0 !== r[l]) ? e += String.fromCharCode(r[l]) : (s == o && (l = t.substring(i),
                    a = t.length),
                    e += String.fromCharCode(s),
                    r[l] = s,
                    n[s++] = l),
                    i = a + 1
                }
                return e
            }
            n[0] = "";
            var o = 4e4
              , a = i(t);
            o = 65535;
            var s = i(e);
            return {
                chars1: a,
                chars2: s,
                lineArray: n
            }
        }
        ,
        n.prototype.diff_charsToLines_ = function(t, e) {
            for (var n = 0; n < t.length; n++) {
                for (var r = t[n][1], i = [], o = 0; o < r.length; o++)
                    i[o] = e[r.charCodeAt(o)];
                t[n][1] = i.join("")
            }
        }
        ,
        n.prototype.diff_commonPrefix = function(t, e) {
            if (!t || !e || t.charAt(0) != e.charAt(0))
                return 0;
            var n = 0
              , r = Math.min(t.length, e.length)
              , i = r
              , o = 0;
            while (n < i)
                t.substring(o, i) == e.substring(o, i) ? (n = i,
                o = n) : r = i,
                i = Math.floor((r - n) / 2 + n);
            return i
        }
        ,
        n.prototype.diff_commonSuffix = function(t, e) {
            if (!t || !e || t.charAt(t.length - 1) != e.charAt(e.length - 1))
                return 0;
            var n = 0
              , r = Math.min(t.length, e.length)
              , i = r
              , o = 0;
            while (n < i)
                t.substring(t.length - i, t.length - o) == e.substring(e.length - i, e.length - o) ? (n = i,
                o = n) : r = i,
                i = Math.floor((r - n) / 2 + n);
            return i
        }
        ,
        n.prototype.diff_commonOverlap_ = function(t, e) {
            var n = t.length
              , r = e.length;
            if (0 == n || 0 == r)
                return 0;
            n > r ? t = t.substring(n - r) : n < r && (e = e.substring(0, n));
            var i = Math.min(n, r);
            if (t == e)
                return i;
            var o = 0
              , a = 1;
            while (1) {
                var s = t.substring(i - a)
                  , l = e.indexOf(s);
                if (-1 == l)
                    return o;
                a += l,
                0 != l && t.substring(i - a) != e.substring(0, a) || (o = a,
                a++)
            }
        }
        ,
        n.prototype.diff_halfMatch_ = function(t, e) {
            if (this.Diff_Timeout <= 0)
                return null;
            var n = t.length > e.length ? t : e
              , r = t.length > e.length ? e : t;
            if (n.length < 4 || 2 * r.length < n.length)
                return null;
            var i = this;
            function o(t, e, n) {
                var r, o, a, s, l = t.substring(n, n + Math.floor(t.length / 4)), c = -1, u = "";
                while (-1 != (c = e.indexOf(l, c + 1))) {
                    var h = i.diff_commonPrefix(t.substring(n), e.substring(c))
                      , f = i.diff_commonSuffix(t.substring(0, n), e.substring(0, c));
                    u.length < f + h && (u = e.substring(c - f, c) + e.substring(c, c + h),
                    r = t.substring(0, n - f),
                    o = t.substring(n + h),
                    a = e.substring(0, c - f),
                    s = e.substring(c + h))
                }
                return 2 * u.length >= t.length ? [r, o, a, s, u] : null
            }
            var a, s, l, c, u, h = o(n, r, Math.ceil(n.length / 4)), f = o(n, r, Math.ceil(n.length / 2));
            if (!h && !f)
                return null;
            a = f ? h && h[4].length > f[4].length ? h : f : h,
            t.length > e.length ? (s = a[0],
            l = a[1],
            c = a[2],
            u = a[3]) : (c = a[0],
            u = a[1],
            s = a[2],
            l = a[3]);
            var d = a[4];
            return [s, l, c, u, d]
        }
        ,
        n.prototype.diff_cleanupSemantic = function(t) {
            var e = !1
              , a = []
              , s = 0
              , l = null
              , c = 0
              , u = 0
              , h = 0
              , f = 0
              , d = 0;
            while (c < t.length)
                t[c][0] == o ? (a[s++] = c,
                u = f,
                h = d,
                f = 0,
                d = 0,
                l = t[c][1]) : (t[c][0] == i ? f += t[c][1].length : d += t[c][1].length,
                l && l.length <= Math.max(u, h) && l.length <= Math.max(f, d) && (t.splice(a[s - 1], 0, new n.Diff(r,l)),
                t[a[s - 1] + 1][0] = i,
                s--,
                s--,
                c = s > 0 ? a[s - 1] : -1,
                u = 0,
                h = 0,
                f = 0,
                d = 0,
                l = null,
                e = !0)),
                c++;
            e && this.diff_cleanupMerge(t),
            this.diff_cleanupSemanticLossless(t),
            c = 1;
            while (c < t.length) {
                if (t[c - 1][0] == r && t[c][0] == i) {
                    var p = t[c - 1][1]
                      , g = t[c][1]
                      , v = this.diff_commonOverlap_(p, g)
                      , m = this.diff_commonOverlap_(g, p);
                    v >= m ? (v >= p.length / 2 || v >= g.length / 2) && (t.splice(c, 0, new n.Diff(o,g.substring(0, v))),
                    t[c - 1][1] = p.substring(0, p.length - v),
                    t[c + 1][1] = g.substring(v),
                    c++) : (m >= p.length / 2 || m >= g.length / 2) && (t.splice(c, 0, new n.Diff(o,p.substring(0, m))),
                    t[c - 1][0] = i,
                    t[c - 1][1] = g.substring(0, g.length - m),
                    t[c + 1][0] = r,
                    t[c + 1][1] = p.substring(m),
                    c++),
                    c++
                }
                c++
            }
        }
        ,
        n.prototype.diff_cleanupSemanticLossless = function(t) {
            function e(t, e) {
                if (!t || !e)
                    return 6;
                var r = t.charAt(t.length - 1)
                  , i = e.charAt(0)
                  , o = r.match(n.nonAlphaNumericRegex_)
                  , a = i.match(n.nonAlphaNumericRegex_)
                  , s = o && r.match(n.whitespaceRegex_)
                  , l = a && i.match(n.whitespaceRegex_)
                  , c = s && r.match(n.linebreakRegex_)
                  , u = l && i.match(n.linebreakRegex_)
                  , h = c && t.match(n.blanklineEndRegex_)
                  , f = u && e.match(n.blanklineStartRegex_);
                return h || f ? 5 : c || u ? 4 : o && !s && l ? 3 : s || l ? 2 : o || a ? 1 : 0
            }
            var r = 1;
            while (r < t.length - 1) {
                if (t[r - 1][0] == o && t[r + 1][0] == o) {
                    var i = t[r - 1][1]
                      , a = t[r][1]
                      , s = t[r + 1][1]
                      , l = this.diff_commonSuffix(i, a);
                    if (l) {
                        var c = a.substring(a.length - l);
                        i = i.substring(0, i.length - l),
                        a = c + a.substring(0, a.length - l),
                        s = c + s
                    }
                    var u = i
                      , h = a
                      , f = s
                      , d = e(i, a) + e(a, s);
                    while (a.charAt(0) === s.charAt(0)) {
                        i += a.charAt(0),
                        a = a.substring(1) + s.charAt(0),
                        s = s.substring(1);
                        var p = e(i, a) + e(a, s);
                        p >= d && (d = p,
                        u = i,
                        h = a,
                        f = s)
                    }
                    t[r - 1][1] != u && (u ? t[r - 1][1] = u : (t.splice(r - 1, 1),
                    r--),
                    t[r][1] = h,
                    f ? t[r + 1][1] = f : (t.splice(r + 1, 1),
                    r--))
                }
                r++
            }
        }
        ,
        n.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/,
        n.whitespaceRegex_ = /\s/,
        n.linebreakRegex_ = /[\r\n]/,
        n.blanklineEndRegex_ = /\n\r?\n$/,
        n.blanklineStartRegex_ = /^\r?\n\r?\n/,
        n.prototype.diff_cleanupEfficiency = function(t) {
            var e = !1
              , a = []
              , s = 0
              , l = null
              , c = 0
              , u = !1
              , h = !1
              , f = !1
              , d = !1;
            while (c < t.length)
                t[c][0] == o ? (t[c][1].length < this.Diff_EditCost && (f || d) ? (a[s++] = c,
                u = f,
                h = d,
                l = t[c][1]) : (s = 0,
                l = null),
                f = d = !1) : (t[c][0] == r ? d = !0 : f = !0,
                l && (u && h && f && d || l.length < this.Diff_EditCost / 2 && u + h + f + d == 3) && (t.splice(a[s - 1], 0, new n.Diff(r,l)),
                t[a[s - 1] + 1][0] = i,
                s--,
                l = null,
                u && h ? (f = d = !0,
                s = 0) : (s--,
                c = s > 0 ? a[s - 1] : -1,
                f = d = !1),
                e = !0)),
                c++;
            e && this.diff_cleanupMerge(t)
        }
        ,
        n.prototype.diff_cleanupMerge = function(t) {
            t.push(new n.Diff(o,""));
            var e, a = 0, s = 0, l = 0, c = "", u = "";
            while (a < t.length)
                switch (t[a][0]) {
                case i:
                    l++,
                    u += t[a][1],
                    a++;
                    break;
                case r:
                    s++,
                    c += t[a][1],
                    a++;
                    break;
                case o:
                    s + l > 1 ? (0 !== s && 0 !== l && (e = this.diff_commonPrefix(u, c),
                    0 !== e && (a - s - l > 0 && t[a - s - l - 1][0] == o ? t[a - s - l - 1][1] += u.substring(0, e) : (t.splice(0, 0, new n.Diff(o,u.substring(0, e))),
                    a++),
                    u = u.substring(e),
                    c = c.substring(e)),
                    e = this.diff_commonSuffix(u, c),
                    0 !== e && (t[a][1] = u.substring(u.length - e) + t[a][1],
                    u = u.substring(0, u.length - e),
                    c = c.substring(0, c.length - e))),
                    a -= s + l,
                    t.splice(a, s + l),
                    c.length && (t.splice(a, 0, new n.Diff(r,c)),
                    a++),
                    u.length && (t.splice(a, 0, new n.Diff(i,u)),
                    a++),
                    a++) : 0 !== a && t[a - 1][0] == o ? (t[a - 1][1] += t[a][1],
                    t.splice(a, 1)) : a++,
                    l = 0,
                    s = 0,
                    c = "",
                    u = "";
                    break
                }
            "" === t[t.length - 1][1] && t.pop();
            var h = !1;
            a = 1;
            while (a < t.length - 1)
                t[a - 1][0] == o && t[a + 1][0] == o && (t[a][1].substring(t[a][1].length - t[a - 1][1].length) == t[a - 1][1] ? (t[a][1] = t[a - 1][1] + t[a][1].substring(0, t[a][1].length - t[a - 1][1].length),
                t[a + 1][1] = t[a - 1][1] + t[a + 1][1],
                t.splice(a - 1, 1),
                h = !0) : t[a][1].substring(0, t[a + 1][1].length) == t[a + 1][1] && (t[a - 1][1] += t[a + 1][1],
                t[a][1] = t[a][1].substring(t[a + 1][1].length) + t[a + 1][1],
                t.splice(a + 1, 1),
                h = !0)),
                a++;
            h && this.diff_cleanupMerge(t)
        }
        ,
        n.prototype.diff_xIndex = function(t, e) {
            var n, o = 0, a = 0, s = 0, l = 0;
            for (n = 0; n < t.length; n++) {
                if (t[n][0] !== i && (o += t[n][1].length),
                t[n][0] !== r && (a += t[n][1].length),
                o > e)
                    break;
                s = o,
                l = a
            }
            return t.length != n && t[n][0] === r ? l : l + (e - s)
        }
        ,
        n.prototype.diff_prettyHtml = function(t) {
            for (var e = [], n = /&/g, a = /</g, s = />/g, l = /\n/g, c = 0; c < t.length; c++) {
                var u = t[c][0]
                  , h = t[c][1]
                  , f = h.replace(n, "&amp;").replace(a, "&lt;").replace(s, "&gt;").replace(l, "&para;<br>");
                switch (u) {
                case i:
                    e[c] = '<ins style="background:#e6ffe6;">' + f + "</ins>";
                    break;
                case r:
                    e[c] = '<del style="background:#ffe6e6;">' + f + "</del>";
                    break;
                case o:
                    e[c] = "<span>" + f + "</span>";
                    break
                }
            }
            return e.join("")
        }
        ,
        n.prototype.diff_text1 = function(t) {
            for (var e = [], n = 0; n < t.length; n++)
                t[n][0] !== i && (e[n] = t[n][1]);
            return e.join("")
        }
        ,
        n.prototype.diff_text2 = function(t) {
            for (var e = [], n = 0; n < t.length; n++)
                t[n][0] !== r && (e[n] = t[n][1]);
            return e.join("")
        }
        ,
        n.prototype.diff_levenshtein = function(t) {
            for (var e = 0, n = 0, a = 0, s = 0; s < t.length; s++) {
                var l = t[s][0]
                  , c = t[s][1];
                switch (l) {
                case i:
                    n += c.length;
                    break;
                case r:
                    a += c.length;
                    break;
                case o:
                    e += Math.max(n, a),
                    n = 0,
                    a = 0;
                    break
                }
            }
            return e += Math.max(n, a),
            e
        }
        ,
        n.prototype.diff_toDelta = function(t) {
            for (var e = [], n = 0; n < t.length; n++)
                switch (t[n][0]) {
                case i:
                    e[n] = "+" + encodeURI(t[n][1]);
                    break;
                case r:
                    e[n] = "-" + t[n][1].length;
                    break;
                case o:
                    e[n] = "=" + t[n][1].length;
                    break
                }
            return e.join("\t").replace(/%20/g, " ")
        }
        ,
        n.prototype.diff_fromDelta = function(t, e) {
            for (var a = [], s = 0, l = 0, c = e.split(/\t/g), u = 0; u < c.length; u++) {
                var h = c[u].substring(1);
                switch (c[u].charAt(0)) {
                case "+":
                    try {
                        a[s++] = new n.Diff(i,decodeURI(h))
                    } catch (p) {
                        throw new Error("Illegal escape in diff_fromDelta: " + h)
                    }
                    break;
                case "-":
                case "=":
                    var f = parseInt(h, 10);
                    if (isNaN(f) || f < 0)
                        throw new Error("Invalid number in diff_fromDelta: " + h);
                    var d = t.substring(l, l += f);
                    "=" == c[u].charAt(0) ? a[s++] = new n.Diff(o,d) : a[s++] = new n.Diff(r,d);
                    break;
                default:
                    if (c[u])
                        throw new Error("Invalid diff operation in diff_fromDelta: " + c[u])
                }
            }
            if (l != t.length)
                throw new Error("Delta length (" + l + ") does not equal source text length (" + t.length + ").");
            return a
        }
        ,
        n.prototype.match_main = function(t, e, n) {
            if (null == t || null == e || null == n)
                throw new Error("Null input. (match_main)");
            return n = Math.max(0, Math.min(n, t.length)),
            t == e ? 0 : t.length ? t.substring(n, n + e.length) == e ? n : this.match_bitap_(t, e, n) : -1
        }
        ,
        n.prototype.match_bitap_ = function(t, e, n) {
            if (e.length > this.Match_MaxBits)
                throw new Error("Pattern too long for this browser.");
            var r = this.match_alphabet_(e)
              , i = this;
            function o(t, r) {
                var o = t / e.length
                  , a = Math.abs(n - r);
                return i.Match_Distance ? o + a / i.Match_Distance : a ? 1 : o
            }
            var a = this.Match_Threshold
              , s = t.indexOf(e, n);
            -1 != s && (a = Math.min(o(0, s), a),
            s = t.lastIndexOf(e, n + e.length),
            -1 != s && (a = Math.min(o(0, s), a)));
            var l, c, u = 1 << e.length - 1;
            s = -1;
            for (var h, f = e.length + t.length, d = 0; d < e.length; d++) {
                l = 0,
                c = f;
                while (l < c)
                    o(d, n + c) <= a ? l = c : f = c,
                    c = Math.floor((f - l) / 2 + l);
                f = c;
                var p = Math.max(1, n - c + 1)
                  , g = Math.min(n + c, t.length) + e.length
                  , v = Array(g + 2);
                v[g + 1] = (1 << d) - 1;
                for (var m = g; m >= p; m--) {
                    var y = r[t.charAt(m - 1)];
                    if (v[m] = 0 === d ? (v[m + 1] << 1 | 1) & y : (v[m + 1] << 1 | 1) & y | (h[m + 1] | h[m]) << 1 | 1 | h[m + 1],
                    v[m] & u) {
                        var b = o(d, m - 1);
                        if (b <= a) {
                            if (a = b,
                            s = m - 1,
                            !(s > n))
                                break;
                            p = Math.max(1, 2 * n - s)
                        }
                    }
                }
                if (o(d + 1, n) > a)
                    break;
                h = v
            }
            return s
        }
        ,
        n.prototype.match_alphabet_ = function(t) {
            for (var e = {}, n = 0; n < t.length; n++)
                e[t.charAt(n)] = 0;
            for (n = 0; n < t.length; n++)
                e[t.charAt(n)] |= 1 << t.length - n - 1;
            return e
        }
        ,
        n.prototype.patch_addContext_ = function(t, e) {
            if (0 != e.length) {
                if (null === t.start2)
                    throw Error("patch not initialized");
                var r = e.substring(t.start2, t.start2 + t.length1)
                  , i = 0;
                while (e.indexOf(r) != e.lastIndexOf(r) && r.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin)
                    i += this.Patch_Margin,
                    r = e.substring(t.start2 - i, t.start2 + t.length1 + i);
                i += this.Patch_Margin;
                var a = e.substring(t.start2 - i, t.start2);
                a && t.diffs.unshift(new n.Diff(o,a));
                var s = e.substring(t.start2 + t.length1, t.start2 + t.length1 + i);
                s && t.diffs.push(new n.Diff(o,s)),
                t.start1 -= a.length,
                t.start2 -= a.length,
                t.length1 += a.length + s.length,
                t.length2 += a.length + s.length
            }
        }
        ,
        n.prototype.patch_make = function(t, e, a) {
            var s, l;
            if ("string" == typeof t && "string" == typeof e && "undefined" == typeof a)
                s = t,
                l = this.diff_main(s, e, !0),
                l.length > 2 && (this.diff_cleanupSemantic(l),
                this.diff_cleanupEfficiency(l));
            else if (t && "object" == typeof t && "undefined" == typeof e && "undefined" == typeof a)
                l = t,
                s = this.diff_text1(l);
            else if ("string" == typeof t && e && "object" == typeof e && "undefined" == typeof a)
                s = t,
                l = e;
            else {
                if ("string" != typeof t || "string" != typeof e || !a || "object" != typeof a)
                    throw new Error("Unknown call format to patch_make.");
                s = t,
                l = a
            }
            if (0 === l.length)
                return [];
            for (var c = [], u = new n.patch_obj, h = 0, f = 0, d = 0, p = s, g = s, v = 0; v < l.length; v++) {
                var m = l[v][0]
                  , y = l[v][1];
                switch (h || m === o || (u.start1 = f,
                u.start2 = d),
                m) {
                case i:
                    u.diffs[h++] = l[v],
                    u.length2 += y.length,
                    g = g.substring(0, d) + y + g.substring(d);
                    break;
                case r:
                    u.length1 += y.length,
                    u.diffs[h++] = l[v],
                    g = g.substring(0, d) + g.substring(d + y.length);
                    break;
                case o:
                    y.length <= 2 * this.Patch_Margin && h && l.length != v + 1 ? (u.diffs[h++] = l[v],
                    u.length1 += y.length,
                    u.length2 += y.length) : y.length >= 2 * this.Patch_Margin && h && (this.patch_addContext_(u, p),
                    c.push(u),
                    u = new n.patch_obj,
                    h = 0,
                    p = g,
                    f = d);
                    break
                }
                m !== i && (f += y.length),
                m !== r && (d += y.length)
            }
            return h && (this.patch_addContext_(u, p),
            c.push(u)),
            c
        }
        ,
        n.prototype.patch_deepCopy = function(t) {
            for (var e = [], r = 0; r < t.length; r++) {
                var i = t[r]
                  , o = new n.patch_obj;
                o.diffs = [];
                for (var a = 0; a < i.diffs.length; a++)
                    o.diffs[a] = new n.Diff(i.diffs[a][0],i.diffs[a][1]);
                o.start1 = i.start1,
                o.start2 = i.start2,
                o.length1 = i.length1,
                o.length2 = i.length2,
                e[r] = o
            }
            return e
        }
        ,
        n.prototype.patch_apply = function(t, e) {
            if (0 == t.length)
                return [e, []];
            t = this.patch_deepCopy(t);
            var n = this.patch_addPadding(t);
            e = n + e + n,
            this.patch_splitMax(t);
            for (var a = 0, s = [], l = 0; l < t.length; l++) {
                var c, u, h = t[l].start2 + a, f = this.diff_text1(t[l].diffs), d = -1;
                if (f.length > this.Match_MaxBits ? (c = this.match_main(e, f.substring(0, this.Match_MaxBits), h),
                -1 != c && (d = this.match_main(e, f.substring(f.length - this.Match_MaxBits), h + f.length - this.Match_MaxBits),
                (-1 == d || c >= d) && (c = -1))) : c = this.match_main(e, f, h),
                -1 == c)
                    s[l] = !1,
                    a -= t[l].length2 - t[l].length1;
                else if (s[l] = !0,
                a = c - h,
                u = -1 == d ? e.substring(c, c + f.length) : e.substring(c, d + this.Match_MaxBits),
                f == u)
                    e = e.substring(0, c) + this.diff_text2(t[l].diffs) + e.substring(c + f.length);
                else {
                    var p = this.diff_main(f, u, !1);
                    if (f.length > this.Match_MaxBits && this.diff_levenshtein(p) / f.length > this.Patch_DeleteThreshold)
                        s[l] = !1;
                    else {
                        this.diff_cleanupSemanticLossless(p);
                        for (var g, v = 0, m = 0; m < t[l].diffs.length; m++) {
                            var y = t[l].diffs[m];
                            y[0] !== o && (g = this.diff_xIndex(p, v)),
                            y[0] === i ? e = e.substring(0, c + g) + y[1] + e.substring(c + g) : y[0] === r && (e = e.substring(0, c + g) + e.substring(c + this.diff_xIndex(p, v + y[1].length))),
                            y[0] !== r && (v += y[1].length)
                        }
                    }
                }
            }
            return e = e.substring(n.length, e.length - n.length),
            [e, s]
        }
        ,
        n.prototype.patch_addPadding = function(t) {
            for (var e = this.Patch_Margin, r = "", i = 1; i <= e; i++)
                r += String.fromCharCode(i);
            for (i = 0; i < t.length; i++)
                t[i].start1 += e,
                t[i].start2 += e;
            var a = t[0]
              , s = a.diffs;
            if (0 == s.length || s[0][0] != o)
                s.unshift(new n.Diff(o,r)),
                a.start1 -= e,
                a.start2 -= e,
                a.length1 += e,
                a.length2 += e;
            else if (e > s[0][1].length) {
                var l = e - s[0][1].length;
                s[0][1] = r.substring(s[0][1].length) + s[0][1],
                a.start1 -= l,
                a.start2 -= l,
                a.length1 += l,
                a.length2 += l
            }
            if (a = t[t.length - 1],
            s = a.diffs,
            0 == s.length || s[s.length - 1][0] != o)
                s.push(new n.Diff(o,r)),
                a.length1 += e,
                a.length2 += e;
            else if (e > s[s.length - 1][1].length) {
                l = e - s[s.length - 1][1].length;
                s[s.length - 1][1] += r.substring(0, l),
                a.length1 += l,
                a.length2 += l
            }
            return r
        }
        ,
        n.prototype.patch_splitMax = function(t) {
            for (var e = this.Match_MaxBits, a = 0; a < t.length; a++)
                if (!(t[a].length1 <= e)) {
                    var s = t[a];
                    t.splice(a--, 1);
                    var l = s.start1
                      , c = s.start2
                      , u = "";
                    while (0 !== s.diffs.length) {
                        var h = new n.patch_obj
                          , f = !0;
                        h.start1 = l - u.length,
                        h.start2 = c - u.length,
                        "" !== u && (h.length1 = h.length2 = u.length,
                        h.diffs.push(new n.Diff(o,u)));
                        while (0 !== s.diffs.length && h.length1 < e - this.Patch_Margin) {
                            var d = s.diffs[0][0]
                              , p = s.diffs[0][1];
                            d === i ? (h.length2 += p.length,
                            c += p.length,
                            h.diffs.push(s.diffs.shift()),
                            f = !1) : d === r && 1 == h.diffs.length && h.diffs[0][0] == o && p.length > 2 * e ? (h.length1 += p.length,
                            l += p.length,
                            f = !1,
                            h.diffs.push(new n.Diff(d,p)),
                            s.diffs.shift()) : (p = p.substring(0, e - h.length1 - this.Patch_Margin),
                            h.length1 += p.length,
                            l += p.length,
                            d === o ? (h.length2 += p.length,
                            c += p.length) : f = !1,
                            h.diffs.push(new n.Diff(d,p)),
                            p == s.diffs[0][1] ? s.diffs.shift() : s.diffs[0][1] = s.diffs[0][1].substring(p.length))
                        }
                        u = this.diff_text2(h.diffs),
                        u = u.substring(u.length - this.Patch_Margin);
                        var g = this.diff_text1(s.diffs).substring(0, this.Patch_Margin);
                        "" !== g && (h.length1 += g.length,
                        h.length2 += g.length,
                        0 !== h.diffs.length && h.diffs[h.diffs.length - 1][0] === o ? h.diffs[h.diffs.length - 1][1] += g : h.diffs.push(new n.Diff(o,g))),
                        f || t.splice(++a, 0, h)
                    }
                }
        }
        ,
        n.prototype.patch_toText = function(t) {
            for (var e = [], n = 0; n < t.length; n++)
                e[n] = t[n];
            return e.join("")
        }
        ,
        n.prototype.patch_fromText = function(t) {
            var e = [];
            if (!t)
                return e;
            var a = t.split("\n")
              , s = 0
              , l = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;
            while (s < a.length) {
                var c = a[s].match(l);
                if (!c)
                    throw new Error("Invalid patch string: " + a[s]);
                var u = new n.patch_obj;
                e.push(u),
                u.start1 = parseInt(c[1], 10),
                "" === c[2] ? (u.start1--,
                u.length1 = 1) : "0" == c[2] ? u.length1 = 0 : (u.start1--,
                u.length1 = parseInt(c[2], 10)),
                u.start2 = parseInt(c[3], 10),
                "" === c[4] ? (u.start2--,
                u.length2 = 1) : "0" == c[4] ? u.length2 = 0 : (u.start2--,
                u.length2 = parseInt(c[4], 10)),
                s++;
                while (s < a.length) {
                    var h = a[s].charAt(0);
                    try {
                        var f = decodeURI(a[s].substring(1))
                    } catch (d) {
                        throw new Error("Illegal escape in patch_fromText: " + f)
                    }
                    if ("-" == h)
                        u.diffs.push(new n.Diff(r,f));
                    else if ("+" == h)
                        u.diffs.push(new n.Diff(i,f));
                    else if (" " == h)
                        u.diffs.push(new n.Diff(o,f));
                    else {
                        if ("@" == h)
                            break;
                        if ("" !== h)
                            throw new Error('Invalid patch mode "' + h + '" in: ' + f)
                    }
                    s++
                }
            }
            return e
        }
        ,
        n.patch_obj = function() {
            this.diffs = [],
            this.start1 = null,
            this.start2 = null,
            this.length1 = 0,
            this.length2 = 0
        }
        ,
        n.patch_obj.prototype.toString = function() {
            var t, e;
            t = 0 === this.length1 ? this.start1 + ",0" : 1 == this.length1 ? this.start1 + 1 : this.start1 + 1 + "," + this.length1,
            e = 0 === this.length2 ? this.start2 + ",0" : 1 == this.length2 ? this.start2 + 1 : this.start2 + 1 + "," + this.length2;
            for (var n, a = ["@@ -" + t + " +" + e + " @@\n"], s = 0; s < this.diffs.length; s++) {
                switch (this.diffs[s][0]) {
                case i:
                    n = "+";
                    break;
                case r:
                    n = "-";
                    break;
                case o:
                    n = " ";
                    break
                }
                a[s + 1] = n + encodeURI(this.diffs[s][1]) + "\n"
            }
            return a.join("").replace(/%20/g, " ")
        }
        ,
        t.exports = n,
        t.exports["diff_match_patch"] = n,
        t.exports["DIFF_DELETE"] = r,
        t.exports["DIFF_INSERT"] = i,
        t.exports["DIFF_EQUAL"] = o
    },
    6566: function(t, e, n) {
        "use strict";
        var r = n("9bf2").f
          , i = n("7c73")
          , o = n("e2cc")
          , a = n("0366")
          , s = n("19aa")
          , l = n("2266")
          , c = n("7dd0")
          , u = n("2626")
          , h = n("83ab")
          , f = n("f183").fastKey
          , d = n("69f3")
          , p = d.set
          , g = d.getterFor;
        t.exports = {
            getConstructor: function(t, e, n, c) {
                var u = t((function(t, r) {
                    s(t, u, e),
                    p(t, {
                        type: e,
                        index: i(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }),
                    h || (t.size = 0),
                    void 0 != r && l(r, t[c], {
                        that: t,
                        AS_ENTRIES: n
                    })
                }
                ))
                  , d = g(e)
                  , v = function(t, e, n) {
                    var r, i, o = d(t), a = m(t, e);
                    return a ? a.value = n : (o.last = a = {
                        index: i = f(e, !0),
                        key: e,
                        value: n,
                        previous: r = o.last,
                        next: void 0,
                        removed: !1
                    },
                    o.first || (o.first = a),
                    r && (r.next = a),
                    h ? o.size++ : t.size++,
                    "F" !== i && (o.index[i] = a)),
                    t
                }
                  , m = function(t, e) {
                    var n, r = d(t), i = f(e);
                    if ("F" !== i)
                        return r.index[i];
                    for (n = r.first; n; n = n.next)
                        if (n.key == e)
                            return n
                };
                return o(u.prototype, {
                    clear: function() {
                        var t = this
                          , e = d(t)
                          , n = e.index
                          , r = e.first;
                        while (r)
                            r.removed = !0,
                            r.previous && (r.previous = r.previous.next = void 0),
                            delete n[r.index],
                            r = r.next;
                        e.first = e.last = void 0,
                        h ? e.size = 0 : t.size = 0
                    },
                    delete: function(t) {
                        var e = this
                          , n = d(e)
                          , r = m(e, t);
                        if (r) {
                            var i = r.next
                              , o = r.previous;
                            delete n.index[r.index],
                            r.removed = !0,
                            o && (o.next = i),
                            i && (i.previous = o),
                            n.first == r && (n.first = i),
                            n.last == r && (n.last = o),
                            h ? n.size-- : e.size--
                        }
                        return !!r
                    },
                    forEach: function(t) {
                        var e, n = d(this), r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                        while (e = e ? e.next : n.first) {
                            r(e.value, e.key, this);
                            while (e && e.removed)
                                e = e.previous
                        }
                    },
                    has: function(t) {
                        return !!m(this, t)
                    }
                }),
                o(u.prototype, n ? {
                    get: function(t) {
                        var e = m(this, t);
                        return e && e.value
                    },
                    set: function(t, e) {
                        return v(this, 0 === t ? 0 : t, e)
                    }
                } : {
                    add: function(t) {
                        return v(this, t = 0 === t ? 0 : t, t)
                    }
                }),
                h && r(u.prototype, "size", {
                    get: function() {
                        return d(this).size
                    }
                }),
                u
            },
            setStrong: function(t, e, n) {
                var r = e + " Iterator"
                  , i = g(e)
                  , o = g(r);
                c(t, e, (function(t, e) {
                    p(this, {
                        type: r,
                        target: t,
                        state: i(t),
                        kind: e,
                        last: void 0
                    })
                }
                ), (function() {
                    var t = o(this)
                      , e = t.kind
                      , n = t.last;
                    while (n && n.removed)
                        n = n.previous;
                    return t.target && (t.last = n = n ? n.next : t.state.first) ? "keys" == e ? {
                        value: n.key,
                        done: !1
                    } : "values" == e ? {
                        value: n.value,
                        done: !1
                    } : {
                        value: [n.key, n.value],
                        done: !1
                    } : (t.target = void 0,
                    {
                        value: void 0,
                        done: !0
                    })
                }
                ), n ? "entries" : "values", !n, !0),
                u(e)
            }
        }
    },
    "6bc6": function(t, e, n) {
        "use strict";
        n("27f9")
    },
    "6d08": function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("38ba"))
        }
        )(0, (function(t) {
            return function(e) {
                var n = t
                  , r = n.lib
                  , i = r.CipherParams
                  , o = n.enc
                  , a = o.Hex
                  , s = n.format;
                s.Hex = {
                    stringify: function(t) {
                        return t.ciphertext.toString(a)
                    },
                    parse: function(t) {
                        var e = a.parse(t);
                        return i.create({
                            ciphertext: e
                        })
                    }
                }
            }(),
            t.format.Hex
        }
        ))
    },
    "6d61": function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , i = n("da84")
          , o = n("94ca")
          , a = n("6eeb")
          , s = n("f183")
          , l = n("2266")
          , c = n("19aa")
          , u = n("1626")
          , h = n("861d")
          , f = n("d039")
          , d = n("1c7e")
          , p = n("d44e")
          , g = n("7156");
        t.exports = function(t, e, n) {
            var v = -1 !== t.indexOf("Map")
              , m = -1 !== t.indexOf("Weak")
              , y = v ? "set" : "add"
              , b = i[t]
              , w = b && b.prototype
              , x = b
              , _ = {}
              , k = function(t) {
                var e = w[t];
                a(w, t, "add" == t ? function(t) {
                    return e.call(this, 0 === t ? 0 : t),
                    this
                }
                : "delete" == t ? function(t) {
                    return !(m && !h(t)) && e.call(this, 0 === t ? 0 : t)
                }
                : "get" == t ? function(t) {
                    return m && !h(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                }
                : "has" == t ? function(t) {
                    return !(m && !h(t)) && e.call(this, 0 === t ? 0 : t)
                }
                : function(t, n) {
                    return e.call(this, 0 === t ? 0 : t, n),
                    this
                }
                )
            }
              , C = o(t, !u(b) || !(m || w.forEach && !f((function() {
                (new b).entries().next()
            }
            ))));
            if (C)
                x = n.getConstructor(e, t, v, y),
                s.enable();
            else if (o(t, !0)) {
                var S = new x
                  , T = S[y](m ? {} : -0, 1) != S
                  , O = f((function() {
                    S.has(1)
                }
                ))
                  , A = d((function(t) {
                    new b(t)
                }
                ))
                  , L = !m && f((function() {
                    var t = new b
                      , e = 5;
                    while (e--)
                        t[y](e, e);
                    return !t.has(-0)
                }
                ));
                A || (x = e((function(e, n) {
                    c(e, x, t);
                    var r = g(new b, e, x);
                    return void 0 != n && l(n, r[y], {
                        that: r,
                        AS_ENTRIES: v
                    }),
                    r
                }
                )),
                x.prototype = w,
                w.constructor = x),
                (O || L) && (k("delete"),
                k("has"),
                v && k("get")),
                (L || T) && k(y),
                m && w.clear && delete w.clear
            }
            return _[t] = x,
            r({
                global: !0,
                forced: x != b
            }, _),
            p(x, t),
            m || n.setStrong(x, t, v),
            x
        }
    },
    7156: function(t, e, n) {
        var r = n("1626")
          , i = n("861d")
          , o = n("d2bb");
        t.exports = function(t, e, n) {
            var a, s;
            return o && r(a = e.constructor) && a !== n && i(s = a.prototype) && s !== n.prototype && o(t, s),
            t
        }
    },
    "72fe": function(t, e, n) {
        (function(e, r) {
            t.exports = r(n("21bf"))
        }
        )(0, (function(t) {
            return function(e) {
                var n = t
                  , r = n.lib
                  , i = r.WordArray
                  , o = r.Hasher
                  , a = n.algo
                  , s = [];
                (function() {
                    for (var t = 0; t < 64; t++)
                        s[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0
                }
                )();
                var l = a.MD5 = o.extend({
                    _doReset: function() {
                        this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878])
                    },
                    _doProcessBlock: function(t, e) {
                        for (var n = 0; n < 16; n++) {
                            var r = e + n
                              , i = t[r];
                            t[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8)
                        }
                        var o = this._hash.words
                          , a = t[e + 0]
                          , l = t[e + 1]
                          , d = t[e + 2]
                          , p = t[e + 3]
                          , g = t[e + 4]
                          , v = t[e + 5]
                          , m = t[e + 6]
                          , y = t[e + 7]
                          , b = t[e + 8]
                          , w = t[e + 9]
                          , x = t[e + 10]
                          , _ = t[e + 11]
                          , k = t[e + 12]
                          , C = t[e + 13]
                          , S = t[e + 14]
                          , T = t[e + 15]
                          , O = o[0]
                          , A = o[1]
                          , L = o[2]
                          , M = o[3];
                        O = c(O, A, L, M, a, 7, s[0]),
                        M = c(M, O, A, L, l, 12, s[1]),
                        L = c(L, M, O, A, d, 17, s[2]),
                        A = c(A, L, M, O, p, 22, s[3]),
                        O = c(O, A, L, M, g, 7, s[4]),
                        M = c(M, O, A, L, v, 12, s[5]),
                        L = c(L, M, O, A, m, 17, s[6]),
                        A = c(A, L, M, O, y, 22, s[7]),
                        O = c(O, A, L, M, b, 7, s[8]),
                        M = c(M, O, A, L, w, 12, s[9]),
                        L = c(L, M, O, A, x, 17, s[10]),
                        A = c(A, L, M, O, _, 22, s[11]),
                        O = c(O, A, L, M, k, 7, s[12]),
                        M = c(M, O, A, L, C, 12, s[13]),
                        L = c(L, M, O, A, S, 17, s[14]),
                        A = c(A, L, M, O, T, 22, s[15]),
                        O = u(O, A, L, M, l, 5, s[16]),
                        M = u(M, O, A, L, m, 9, s[17]),
                        L = u(L, M, O, A, _, 14, s[18]),
                        A = u(A, L, M, O, a, 20, s[19]),
                        O = u(O, A, L, M, v, 5, s[20]),
                        M = u(M, O, A, L, x, 9, s[21]),
                        L = u(L, M, O, A, T, 14, s[22]),
                        A = u(A, L, M, O, g, 20, s[23]),
                        O = u(O, A, L, M, w, 5, s[24]),
                        M = u(M, O, A, L, S, 9, s[25]),
                        L = u(L, M, O, A, p, 14, s[26]),
                        A = u(A, L, M, O, b, 20, s[27]),
                        O = u(O, A, L, M, C, 5, s[28]),
                        M = u(M, O, A, L, d, 9, s[29]),
                        L = u(L, M, O, A, y, 14, s[30]),
                        A = u(A, L, M, O, k, 20, s[31]),
                        O = h(O, A, L, M, v, 4, s[32]),
                        M = h(M, O, A, L, b, 11, s[33]),
                        L = h(L, M, O, A, _, 16, s[34]),
                        A = h(A, L, M, O, S, 23, s[35]),
                        O = h(O, A, L, M, l, 4, s[36]),
                        M = h(M, O, A, L, g, 11, s[37]),
                        L = h(L, M, O, A, y, 16, s[38]),
                        A = h(A, L, M, O, x, 23, s[39]),
                        O = h(O, A, L, M, C, 4, s[40]),
                        M = h(M, O, A, L, a, 11, s[41]),
                        L = h(L, M, O, A, p, 16, s[42]),
                        A = h(A, L, M, O, m, 23, s[43]),
                        O = h(O, A, L, M, w, 4, s[44]),
                        M = h(M, O, A, L, k, 11, s[45]),
                        L = h(L, M, O, A, T, 16, s[46]),
                        A = h(A, L, M, O, d, 23, s[47]),
                        O = f(O, A, L, M, a, 6, s[48]),
                        M = f(M, O, A, L, y, 10, s[49]),
                        L = f(L, M, O, A, S, 15, s[50]),
                        A = f(A, L, M, O, v, 21, s[51]),
                        O = f(O, A, L, M, k, 6, s[52]),
                        M = f(M, O, A, L, p, 10, s[53]),
                        L = f(L, M, O, A, x, 15, s[54]),
                        A = f(A, L, M, O, l, 21, s[55]),
                        O = f(O, A, L, M, b, 6, s[56]),
                        M = f(M, O, A, L, T, 10, s[57]),
                        L = f(L, M, O, A, m, 15, s[58]),
                        A = f(A, L, M, O, C, 21, s[59]),
                        O = f(O, A, L, M, g, 6, s[60]),
                        M = f(M, O, A, L, _, 10, s[61]),
                        L = f(L, M, O, A, d, 15, s[62]),
                        A = f(A, L, M, O, w, 21, s[63]),
                        o[0] = o[0] + O | 0,
                        o[1] = o[1] + A | 0,
                        o[2] = o[2] + L | 0,
                        o[3] = o[3] + M | 0
                    },
                    _doFinalize: function() {
                        var t = this._data
                          , n = t.words
                          , r = 8 * this._nDataBytes
                          , i = 8 * t.sigBytes;
                        n[i >>> 5] |= 128 << 24 - i % 32;
                        var o = e.floor(r / 4294967296)
                          , a = r;
                        n[15 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                        n[14 + (i + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
                        t.sigBytes = 4 * (n.length + 1),
                        this._process();
                        for (var s = this._hash, l = s.words, c = 0; c < 4; c++) {
                            var u = l[c];
                            l[c] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8)
                        }
                        return s
                    },
                    clone: function() {
                        var t = o.clone.call(this);
                        return t._hash = this._hash.clone(),
                        t
                    }
                });
                function c(t, e, n, r, i, o, a) {
                    var s = t + (e & n | ~e & r) + i + a;
                    return (s << o | s >>> 32 - o) + e
                }
                function u(t, e, n, r, i, o, a) {
                    var s = t + (e & r | n & ~r) + i + a;
                    return (s << o | s >>> 32 - o) + e
                }
                function h(t, e, n, r, i, o, a) {
                    var s = t + (e ^ n ^ r) + i + a;
                    return (s << o | s >>> 32 - o) + e
                }
                function f(t, e, n, r, i, o, a) {
                    var s = t + (n ^ (e | ~r)) + i + a;
                    return (s << o | s >>> 32 - o) + e
                }
                n.MD5 = o._createHelper(l),
                n.HmacMD5 = o._createHmacHelper(l)
            }(Math),
            t.MD5
        }
        ))
    },
    7559: function(t, e, n) {},
    "7bbc": function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("df2f"), n("5980"))
        }
        )(0, (function(t) {
            return function() {
                var e = t
                  , n = e.lib
                  , r = n.Base
                  , i = n.WordArray
                  , o = e.algo
                  , a = o.SHA1
                  , s = o.HMAC
                  , l = o.PBKDF2 = r.extend({
                    cfg: r.extend({
                        keySize: 4,
                        hasher: a,
                        iterations: 1
                    }),
                    init: function(t) {
                        this.cfg = this.cfg.extend(t)
                    },
                    compute: function(t, e) {
                        var n = this.cfg
                          , r = s.create(n.hasher, t)
                          , o = i.create()
                          , a = i.create([1])
                          , l = o.words
                          , c = a.words
                          , u = n.keySize
                          , h = n.iterations;
                        while (l.length < u) {
                            var f = r.update(e).finalize(a);
                            r.reset();
                            for (var d = f.words, p = d.length, g = f, v = 1; v < h; v++) {
                                g = r.finalize(g),
                                r.reset();
                                for (var m = g.words, y = 0; y < p; y++)
                                    d[y] ^= m[y]
                            }
                            o.concat(f),
                            c[0]++
                        }
                        return o.sigBytes = 4 * u,
                        o
                    }
                });
                e.PBKDF2 = function(t, e, n) {
                    return l.create(n).compute(t, e)
                }
            }(),
            t.PBKDF2
        }
        ))
    },
    "81bf": function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("38ba"))
        }
        )(0, (function(t) {
            return t.mode.ECB = function() {
                var e = t.lib.BlockCipherMode.extend();
                return e.Encryptor = e.extend({
                    processBlock: function(t, e) {
                        this._cipher.encryptBlock(t, e)
                    }
                }),
                e.Decryptor = e.extend({
                    processBlock: function(t, e) {
                        this._cipher.decryptBlock(t, e)
                    }
                }),
                e
            }(),
            t.mode.ECB
        }
        ))
    },
    "82cd": function(t, e, n) {
        "use strict";
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "container"
            }, [n("el-row", {
                attrs: {
                    gutter: 0
                }
            }, [n("el-col", {
                attrs: {
                    span: 11
                }
            }, [n("div", [n("el-input", {
                staticClass: "content",
                attrs: {
                    spellcheck: "false",
                    type: "textarea",
                    autofocus: "true",
                    placeholder: t.tip,
                    size: "medium",
                    rows: "40"
                },
                on: {
                    input: t.run
                },
                model: {
                    value: t.inputStr,
                    callback: function(e) {
                        t.inputStr = e
                    },
                    expression: "inputStr"
                }
            })], 1)]), n("el-col", {
                attrs: {
                    span: 13
                }
            }, [n("div", {
                staticClass: "code_content"
            }, [n("MonacoEditor", {
                key: t.randomkey,
                attrs: {
                    code: t.outputStr ? t.outputStr : t.outputTip,
                    editorOptions: t.options,
                    language: t.language,
                    theme: "vs"
                },
                on: {
                    mounted: t.onMounted
                }
            })], 1)])], 1)], 1)
        }
          , i = []
          , o = n("1da1")
          , a = n("d4ec")
          , s = n("bee2")
          , l = n("262e")
          , c = n("2caf")
          , u = (n("96cf"),
        n("ac1f"),
        n("5319"),
        n("9ab4"))
          , h = n("1b40")
          , f = n("9e12")
          , d = n("dba0")
          , p = n.n(d)
          , g = function(t) {
            Object(l["a"])(n, t);
            var e = Object(c["a"])(n);
            function n() {
                var t;
                return Object(a["a"])(this, n),
                t = e.apply(this, arguments),
                t.inputStr = "",
                t.outputStr = "",
                t.options = {
                    selectOnLineNumbers: !0,
                    roundedSelection: !0,
                    readOnly: !1,
                    cursorStyle: "line",
                    automaticLayout: !1,
                    glyphMargin: !0,
                    renderLineHighlight: null,
                    hideCursorInOverviewRuler: !0,
                    scrollbar: {
                        vertical: "hidden"
                    }
                },
                t.randomkey = 1231231,
                t
            }
            return Object(s["a"])(n, [{
                key: "trimStr",
                value: function(t) {
                    return t.replace(/(^\s*)|(\s*$)/g, "")
                }
            }, {
                key: "created",
                value: function() {
                    var t = this;
                    window.onresize = function() {
                        t.randomkey = t.createRamdomKey()
                    }
                }
            }, {
                key: "run",
                value: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                        var e, n, r;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e = this.trimStr(this.inputStr),
                                    !(e.length > 0)) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.next = 4,
                                    Object(f["a"])({
                                        format_type: this.formatType,
                                        input_str: e
                                    });
                                case 4:
                                    n = t.sent,
                                    r = n.data,
                                    this.outputStr = r,
                                    this.randomkey = this.createRamdomKey();
                                case 8:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "createRamdomKey",
                value: function() {
                    return Math.floor(0xe8d4a54019 * Math.random())
                }
            }, {
                key: "onMounted",
                value: function(t) {
                    t.updateOptions(this.options)
                }
            }]),
            n
        }(h["c"]);
        Object(u["a"])([Object(h["b"])({
            default: ""
        })], g.prototype, "tip", void 0),
        Object(u["a"])([Object(h["b"])({
            default: ""
        })], g.prototype, "outputTip", void 0),
        Object(u["a"])([Object(h["b"])({
            default: ""
        })], g.prototype, "formatType", void 0),
        Object(u["a"])([Object(h["b"])({
            default: "python"
        })], g.prototype, "language", void 0),
        g = Object(u["a"])([Object(h["a"])({
            components: {
                MonacoEditor: p.a
            }
        })], g);
        var v = g
          , m = v
          , y = (n("d937"),
        n("2877"))
          , b = Object(y["a"])(m, r, i, !1, null, "623eb8ec", null);
        e["a"] = b.exports
    },
    8418: function(t, e, n) {
        "use strict";
        var r = n("a04b")
          , i = n("9bf2")
          , o = n("5c6c");
        t.exports = function(t, e, n) {
            var a = r(e);
            a in t ? i.f(t, a, o(0, n)) : t[a] = n
        }
    },
    "8c60": function(t, e, n) {},
    "8cef": function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("38ba"))
        }
        )(0, (function(t) {
            return t.pad.Iso97971 = {
                pad: function(e, n) {
                    e.concat(t.lib.WordArray.create([2147483648], 1)),
                    t.pad.ZeroPadding.pad(e, n)
                },
                unpad: function(e) {
                    t.pad.ZeroPadding.unpad(e),
                    e.sigBytes--
                }
            },
            t.pad.Iso97971
        }
        ))
    },
    "8d8f": function(t, e, n) {
        "use strict";
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "container"
            }, [n("el-row", {
                attrs: {
                    gutter: 0
                }
            }, [n("el-col", {
                attrs: {
                    span: 11
                }
            }, [n("div", [n("el-input", {
                staticClass: "content",
                attrs: {
                    spellcheck: "false",
                    type: "textarea",
                    autofocus: "true",
                    placeholder: t.tip,
                    size: "medium",
                    rows: "40"
                },
                on: {
                    input: t.run
                },
                model: {
                    value: t.inputStr,
                    callback: function(e) {
                        t.inputStr = e
                    },
                    expression: "inputStr"
                }
            })], 1)]), n("el-col", {
                attrs: {
                    span: 13
                }
            }, [n("div", [n("el-input", {
                staticClass: "content",
                attrs: {
                    spellcheck: "false",
                    type: "textarea",
                    size: "medium",
                    rows: "40",
                    placeholder: t.outputTip
                },
                model: {
                    value: t.outputStr,
                    callback: function(e) {
                        t.outputStr = e
                    },
                    expression: "outputStr"
                }
            })], 1)])], 1)], 1)
        }
          , i = []
          , o = n("1da1")
          , a = n("d4ec")
          , s = n("bee2")
          , l = n("262e")
          , c = n("2caf")
          , u = (n("96cf"),
        n("ac1f"),
        n("5319"),
        n("9ab4"))
          , h = n("1b40")
          , f = n("9e12")
          , d = function(t) {
            Object(l["a"])(n, t);
            var e = Object(c["a"])(n);
            function n() {
                var t;
                return Object(a["a"])(this, n),
                t = e.apply(this, arguments),
                t.inputStr = "",
                t.outputStr = "",
                t
            }
            return Object(s["a"])(n, [{
                key: "trimStr",
                value: function(t) {
                    return t.replace(/(^\s*)|(\s*$)/g, "")
                }
            }, {
                key: "run",
                value: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                        var e, n, r;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e = this.trimStr(this.inputStr),
                                    !(e.length > 0)) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.next = 4,
                                    Object(f["a"])({
                                        format_type: this.formatType,
                                        input_str: e
                                    });
                                case 4:
                                    n = t.sent,
                                    r = n.data,
                                    this.outputStr = r;
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }]),
            n
        }(h["c"]);
        Object(u["a"])([Object(h["b"])({
            default: ""
        })], d.prototype, "tip", void 0),
        Object(u["a"])([Object(h["b"])({
            default: ""
        })], d.prototype, "outputTip", void 0),
        Object(u["a"])([Object(h["b"])({
            default: ""
        })], d.prototype, "formatType", void 0),
        d = Object(u["a"])([h["a"]], d);
        var p = d
          , g = p
          , v = (n("5275"),
        n("2877"))
          , m = Object(v["a"])(g, r, i, !1, null, "c2d35838", null);
        e["a"] = m.exports
    },
    "91dd": function(t, e, n) {
        "use strict";
        function r(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        t.exports = function(t, e, n, o) {
            e = e || "&",
            n = n || "=";
            var a = {};
            if ("string" !== typeof t || 0 === t.length)
                return a;
            var s = /\+/g;
            t = t.split(e);
            var l = 1e3;
            o && "number" === typeof o.maxKeys && (l = o.maxKeys);
            var c = t.length;
            l > 0 && c > l && (c = l);
            for (var u = 0; u < c; ++u) {
                var h, f, d, p, g = t[u].replace(s, "%20"), v = g.indexOf(n);
                v >= 0 ? (h = g.substr(0, v),
                f = g.substr(v + 1)) : (h = g,
                f = ""),
                d = decodeURIComponent(h),
                p = decodeURIComponent(f),
                r(a, d) ? i(a[d]) ? a[d].push(p) : a[d] = [a[d], p] : a[d] = p
            }
            return a
        }
        ;
        var i = Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
    },
    "94f8": function(t, e, n) {
        (function(e, r) {
            t.exports = r(n("21bf"))
        }
        )(0, (function(t) {
            return function(e) {
                var n = t
                  , r = n.lib
                  , i = r.WordArray
                  , o = r.Hasher
                  , a = n.algo
                  , s = []
                  , l = [];
                (function() {
                    function t(t) {
                        for (var n = e.sqrt(t), r = 2; r <= n; r++)
                            if (!(t % r))
                                return !1;
                        return !0
                    }
                    function n(t) {
                        return 4294967296 * (t - (0 | t)) | 0
                    }
                    var r = 2
                      , i = 0;
                    while (i < 64)
                        t(r) && (i < 8 && (s[i] = n(e.pow(r, .5))),
                        l[i] = n(e.pow(r, 1 / 3)),
                        i++),
                        r++
                }
                )();
                var c = []
                  , u = a.SHA256 = o.extend({
                    _doReset: function() {
                        this._hash = new i.init(s.slice(0))
                    },
                    _doProcessBlock: function(t, e) {
                        for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], a = n[3], s = n[4], u = n[5], h = n[6], f = n[7], d = 0; d < 64; d++) {
                            if (d < 16)
                                c[d] = 0 | t[e + d];
                            else {
                                var p = c[d - 15]
                                  , g = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3
                                  , v = c[d - 2]
                                  , m = (v << 15 | v >>> 17) ^ (v << 13 | v >>> 19) ^ v >>> 10;
                                c[d] = g + c[d - 7] + m + c[d - 16]
                            }
                            var y = s & u ^ ~s & h
                              , b = r & i ^ r & o ^ i & o
                              , w = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22)
                              , x = (s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)
                              , _ = f + x + y + l[d] + c[d]
                              , k = w + b;
                            f = h,
                            h = u,
                            u = s,
                            s = a + _ | 0,
                            a = o,
                            o = i,
                            i = r,
                            r = _ + k | 0
                        }
                        n[0] = n[0] + r | 0,
                        n[1] = n[1] + i | 0,
                        n[2] = n[2] + o | 0,
                        n[3] = n[3] + a | 0,
                        n[4] = n[4] + s | 0,
                        n[5] = n[5] + u | 0,
                        n[6] = n[6] + h | 0,
                        n[7] = n[7] + f | 0
                    },
                    _doFinalize: function() {
                        var t = this._data
                          , n = t.words
                          , r = 8 * this._nDataBytes
                          , i = 8 * t.sigBytes;
                        return n[i >>> 5] |= 128 << 24 - i % 32,
                        n[14 + (i + 64 >>> 9 << 4)] = e.floor(r / 4294967296),
                        n[15 + (i + 64 >>> 9 << 4)] = r,
                        t.sigBytes = 4 * n.length,
                        this._process(),
                        this._hash
                    },
                    clone: function() {
                        var t = o.clone.call(this);
                        return t._hash = this._hash.clone(),
                        t
                    }
                });
                n.SHA256 = o._createHelper(u),
                n.HmacSHA256 = o._createHmacHelper(u)
            }(Math),
            t.SHA256
        }
        ))
    },
    "99af": function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , i = n("d039")
          , o = n("e8b5")
          , a = n("861d")
          , s = n("7b0b")
          , l = n("07fa")
          , c = n("8418")
          , u = n("65f0")
          , h = n("1dde")
          , f = n("b622")
          , d = n("2d00")
          , p = f("isConcatSpreadable")
          , g = 9007199254740991
          , v = "Maximum allowed index exceeded"
          , m = d >= 51 || !i((function() {
            var t = [];
            return t[p] = !1,
            t.concat()[0] !== t
        }
        ))
          , y = h("concat")
          , b = function(t) {
            if (!a(t))
                return !1;
            var e = t[p];
            return void 0 !== e ? !!e : o(t)
        }
          , w = !m || !y;
        r({
            target: "Array",
            proto: !0,
            forced: w
        }, {
            concat: function(t) {
                var e, n, r, i, o, a = s(this), h = u(a, 0), f = 0;
                for (e = -1,
                r = arguments.length; e < r; e++)
                    if (o = -1 === e ? a : arguments[e],
                    b(o)) {
                        if (i = l(o),
                        f + i > g)
                            throw TypeError(v);
                        for (n = 0; n < i; n++,
                        f++)
                            n in o && c(h, f, o[n])
                    } else {
                        if (f >= g)
                            throw TypeError(v);
                        c(h, f++, o)
                    }
                return h.length = f,
                h
            }
        })
    },
    "9be3": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("FormatContent", {
                attrs: {
                    tip: t.tip,
                    formatType: t.formatType,
                    outputTip: t.outputTip
                }
            })], 1)
        }
          , i = []
          , o = n("d4ec")
          , a = n("262e")
          , s = n("2caf")
          , l = n("9ab4")
          , c = n("8d8f")
          , u = n("1b40")
          , h = function(t) {
            Object(a["a"])(n, t);
            var e = Object(s["a"])(n);
            function n() {
                var t;
                return Object(o["a"])(this, n),
                t = e.apply(this, arguments),
                t.formatType = "format_time",
                t.tip = "输入日期或时间戳，如\n2021-08-08\n或\n2021-08-08 00:00:00\n或\n2021/08/08\n或\n2021年08月08日\n或\n1628352000\n或\n1628352000000\n  ",
                t.outputTip = "输出：\n日期: 2021-08-08 00:00:00\n\n时间戳: 1628352000\n  ",
                t
            }
            return n
        }(u["c"]);
        h = Object(l["a"])([Object(u["a"])({
            components: {
                FormatContent: c["a"]
            }
        })], h);
        var f = h
          , d = f
          , p = n("2877")
          , g = Object(p["a"])(d, r, i, !1, null, "797019b2", null);
        e["default"] = g.exports
    },
    "9cab": function(t, e, n) {
        "use strict";
        n("e014")
    },
    "9f6b": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("CodeContent", {
                attrs: {
                    tip: t.tip,
                    formatType: t.formatType,
                    outputTip: t.outputTip
                }
            })], 1)
        }
          , i = []
          , o = n("d4ec")
          , a = n("262e")
          , s = n("2caf")
          , l = n("9ab4")
          , c = n("82cd")
          , u = n("1b40")
          , h = function(t) {
            Object(a["a"])(n, t);
            var e = Object(s["a"])(n);
            function n() {
                var t;
                return Object(o["a"])(this, n),
                t = e.apply(this, arguments),
                t.formatType = "header",
                t.tip = "输入待格式化的请求头，如：\nConnection: keep-alive\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36\n  ",
                t.outputTip = '# 输出：\n{\n    "Connection": "keep-alive",\n    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36"\n}',
                t
            }
            return n
        }(u["c"]);
        h = Object(l["a"])([Object(u["a"])({
            components: {
                CodeContent: c["a"]
            }
        })], h);
        var f = h
          , d = f
          , p = n("2877")
          , g = Object(p["a"])(d, r, i, !1, null, "433cd4ad", null);
        e["default"] = g.exports
    },
    a11b: function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("38ba"))
        }
        )(0, (function(t) {
            return t.pad.Iso10126 = {
                pad: function(e, n) {
                    var r = 4 * n
                      , i = r - e.sigBytes % r;
                    e.concat(t.lib.WordArray.random(i - 1)).concat(t.lib.WordArray.create([i << 24], 1))
                },
                unpad: function(t) {
                    var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                    t.sigBytes -= e
                }
            },
            t.pad.Iso10126
        }
        ))
    },
    a15b: function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , i = n("44ad")
          , o = n("fc6a")
          , a = n("a640")
          , s = [].join
          , l = i != Object
          , c = a("join", ",");
        r({
            target: "Array",
            proto: !0,
            forced: l || !c
        }, {
            join: function(t) {
                return s.call(o(this), void 0 === t ? "," : t)
            }
        })
    },
    a40e: function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("1132"), n("72fe"), n("2b79"), n("38ba"))
        }
        )(0, (function(t) {
            return function() {
                var e = t
                  , n = e.lib
                  , r = n.WordArray
                  , i = n.BlockCipher
                  , o = e.algo
                  , a = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4]
                  , s = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32]
                  , l = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28]
                  , c = [{
                    0: 8421888,
                    268435456: 32768,
                    536870912: 8421378,
                    805306368: 2,
                    1073741824: 512,
                    1342177280: 8421890,
                    1610612736: 8389122,
                    1879048192: 8388608,
                    2147483648: 514,
                    2415919104: 8389120,
                    2684354560: 33280,
                    2952790016: 8421376,
                    3221225472: 32770,
                    3489660928: 8388610,
                    3758096384: 0,
                    4026531840: 33282,
                    134217728: 0,
                    402653184: 8421890,
                    671088640: 33282,
                    939524096: 32768,
                    1207959552: 8421888,
                    1476395008: 512,
                    1744830464: 8421378,
                    2013265920: 2,
                    2281701376: 8389120,
                    2550136832: 33280,
                    2818572288: 8421376,
                    3087007744: 8389122,
                    3355443200: 8388610,
                    3623878656: 32770,
                    3892314112: 514,
                    4160749568: 8388608,
                    1: 32768,
                    268435457: 2,
                    536870913: 8421888,
                    805306369: 8388608,
                    1073741825: 8421378,
                    1342177281: 33280,
                    1610612737: 512,
                    1879048193: 8389122,
                    2147483649: 8421890,
                    2415919105: 8421376,
                    2684354561: 8388610,
                    2952790017: 33282,
                    3221225473: 514,
                    3489660929: 8389120,
                    3758096385: 32770,
                    4026531841: 0,
                    134217729: 8421890,
                    402653185: 8421376,
                    671088641: 8388608,
                    939524097: 512,
                    1207959553: 32768,
                    1476395009: 8388610,
                    1744830465: 2,
                    2013265921: 33282,
                    2281701377: 32770,
                    2550136833: 8389122,
                    2818572289: 514,
                    3087007745: 8421888,
                    3355443201: 8389120,
                    3623878657: 0,
                    3892314113: 33280,
                    4160749569: 8421378
                }, {
                    0: 1074282512,
                    16777216: 16384,
                    33554432: 524288,
                    50331648: 1074266128,
                    67108864: 1073741840,
                    83886080: 1074282496,
                    100663296: 1073758208,
                    117440512: 16,
                    134217728: 540672,
                    150994944: 1073758224,
                    167772160: 1073741824,
                    184549376: 540688,
                    201326592: 524304,
                    218103808: 0,
                    234881024: 16400,
                    251658240: 1074266112,
                    8388608: 1073758208,
                    25165824: 540688,
                    41943040: 16,
                    58720256: 1073758224,
                    75497472: 1074282512,
                    92274688: 1073741824,
                    109051904: 524288,
                    125829120: 1074266128,
                    142606336: 524304,
                    159383552: 0,
                    176160768: 16384,
                    192937984: 1074266112,
                    209715200: 1073741840,
                    226492416: 540672,
                    243269632: 1074282496,
                    260046848: 16400,
                    268435456: 0,
                    285212672: 1074266128,
                    301989888: 1073758224,
                    318767104: 1074282496,
                    335544320: 1074266112,
                    352321536: 16,
                    369098752: 540688,
                    385875968: 16384,
                    402653184: 16400,
                    419430400: 524288,
                    436207616: 524304,
                    452984832: 1073741840,
                    469762048: 540672,
                    486539264: 1073758208,
                    503316480: 1073741824,
                    520093696: 1074282512,
                    276824064: 540688,
                    293601280: 524288,
                    310378496: 1074266112,
                    327155712: 16384,
                    343932928: 1073758208,
                    360710144: 1074282512,
                    377487360: 16,
                    394264576: 1073741824,
                    411041792: 1074282496,
                    427819008: 1073741840,
                    444596224: 1073758224,
                    461373440: 524304,
                    478150656: 0,
                    494927872: 16400,
                    511705088: 1074266128,
                    528482304: 540672
                }, {
                    0: 260,
                    1048576: 0,
                    2097152: 67109120,
                    3145728: 65796,
                    4194304: 65540,
                    5242880: 67108868,
                    6291456: 67174660,
                    7340032: 67174400,
                    8388608: 67108864,
                    9437184: 67174656,
                    10485760: 65792,
                    11534336: 67174404,
                    12582912: 67109124,
                    13631488: 65536,
                    14680064: 4,
                    15728640: 256,
                    524288: 67174656,
                    1572864: 67174404,
                    2621440: 0,
                    3670016: 67109120,
                    4718592: 67108868,
                    5767168: 65536,
                    6815744: 65540,
                    7864320: 260,
                    8912896: 4,
                    9961472: 256,
                    11010048: 67174400,
                    12058624: 65796,
                    13107200: 65792,
                    14155776: 67109124,
                    15204352: 67174660,
                    16252928: 67108864,
                    16777216: 67174656,
                    17825792: 65540,
                    18874368: 65536,
                    19922944: 67109120,
                    20971520: 256,
                    22020096: 67174660,
                    23068672: 67108868,
                    24117248: 0,
                    25165824: 67109124,
                    26214400: 67108864,
                    27262976: 4,
                    28311552: 65792,
                    29360128: 67174400,
                    30408704: 260,
                    31457280: 65796,
                    32505856: 67174404,
                    17301504: 67108864,
                    18350080: 260,
                    19398656: 67174656,
                    20447232: 0,
                    21495808: 65540,
                    22544384: 67109120,
                    23592960: 256,
                    24641536: 67174404,
                    25690112: 65536,
                    26738688: 67174660,
                    27787264: 65796,
                    28835840: 67108868,
                    29884416: 67109124,
                    30932992: 67174400,
                    31981568: 4,
                    33030144: 65792
                }, {
                    0: 2151682048,
                    65536: 2147487808,
                    131072: 4198464,
                    196608: 2151677952,
                    262144: 0,
                    327680: 4198400,
                    393216: 2147483712,
                    458752: 4194368,
                    524288: 2147483648,
                    589824: 4194304,
                    655360: 64,
                    720896: 2147487744,
                    786432: 2151678016,
                    851968: 4160,
                    917504: 4096,
                    983040: 2151682112,
                    32768: 2147487808,
                    98304: 64,
                    163840: 2151678016,
                    229376: 2147487744,
                    294912: 4198400,
                    360448: 2151682112,
                    425984: 0,
                    491520: 2151677952,
                    557056: 4096,
                    622592: 2151682048,
                    688128: 4194304,
                    753664: 4160,
                    819200: 2147483648,
                    884736: 4194368,
                    950272: 4198464,
                    1015808: 2147483712,
                    1048576: 4194368,
                    1114112: 4198400,
                    1179648: 2147483712,
                    1245184: 0,
                    1310720: 4160,
                    1376256: 2151678016,
                    1441792: 2151682048,
                    1507328: 2147487808,
                    1572864: 2151682112,
                    1638400: 2147483648,
                    1703936: 2151677952,
                    1769472: 4198464,
                    1835008: 2147487744,
                    1900544: 4194304,
                    1966080: 64,
                    2031616: 4096,
                    1081344: 2151677952,
                    1146880: 2151682112,
                    1212416: 0,
                    1277952: 4198400,
                    1343488: 4194368,
                    1409024: 2147483648,
                    1474560: 2147487808,
                    1540096: 64,
                    1605632: 2147483712,
                    1671168: 4096,
                    1736704: 2147487744,
                    1802240: 2151678016,
                    1867776: 4160,
                    1933312: 2151682048,
                    1998848: 4194304,
                    2064384: 4198464
                }, {
                    0: 128,
                    4096: 17039360,
                    8192: 262144,
                    12288: 536870912,
                    16384: 537133184,
                    20480: 16777344,
                    24576: 553648256,
                    28672: 262272,
                    32768: 16777216,
                    36864: 537133056,
                    40960: 536871040,
                    45056: 553910400,
                    49152: 553910272,
                    53248: 0,
                    57344: 17039488,
                    61440: 553648128,
                    2048: 17039488,
                    6144: 553648256,
                    10240: 128,
                    14336: 17039360,
                    18432: 262144,
                    22528: 537133184,
                    26624: 553910272,
                    30720: 536870912,
                    34816: 537133056,
                    38912: 0,
                    43008: 553910400,
                    47104: 16777344,
                    51200: 536871040,
                    55296: 553648128,
                    59392: 16777216,
                    63488: 262272,
                    65536: 262144,
                    69632: 128,
                    73728: 536870912,
                    77824: 553648256,
                    81920: 16777344,
                    86016: 553910272,
                    90112: 537133184,
                    94208: 16777216,
                    98304: 553910400,
                    102400: 553648128,
                    106496: 17039360,
                    110592: 537133056,
                    114688: 262272,
                    118784: 536871040,
                    122880: 0,
                    126976: 17039488,
                    67584: 553648256,
                    71680: 16777216,
                    75776: 17039360,
                    79872: 537133184,
                    83968: 536870912,
                    88064: 17039488,
                    92160: 128,
                    96256: 553910272,
                    100352: 262272,
                    104448: 553910400,
                    108544: 0,
                    112640: 553648128,
                    116736: 16777344,
                    120832: 262144,
                    124928: 537133056,
                    129024: 536871040
                }, {
                    0: 268435464,
                    256: 8192,
                    512: 270532608,
                    768: 270540808,
                    1024: 268443648,
                    1280: 2097152,
                    1536: 2097160,
                    1792: 268435456,
                    2048: 0,
                    2304: 268443656,
                    2560: 2105344,
                    2816: 8,
                    3072: 270532616,
                    3328: 2105352,
                    3584: 8200,
                    3840: 270540800,
                    128: 270532608,
                    384: 270540808,
                    640: 8,
                    896: 2097152,
                    1152: 2105352,
                    1408: 268435464,
                    1664: 268443648,
                    1920: 8200,
                    2176: 2097160,
                    2432: 8192,
                    2688: 268443656,
                    2944: 270532616,
                    3200: 0,
                    3456: 270540800,
                    3712: 2105344,
                    3968: 268435456,
                    4096: 268443648,
                    4352: 270532616,
                    4608: 270540808,
                    4864: 8200,
                    5120: 2097152,
                    5376: 268435456,
                    5632: 268435464,
                    5888: 2105344,
                    6144: 2105352,
                    6400: 0,
                    6656: 8,
                    6912: 270532608,
                    7168: 8192,
                    7424: 268443656,
                    7680: 270540800,
                    7936: 2097160,
                    4224: 8,
                    4480: 2105344,
                    4736: 2097152,
                    4992: 268435464,
                    5248: 268443648,
                    5504: 8200,
                    5760: 270540808,
                    6016: 270532608,
                    6272: 270540800,
                    6528: 270532616,
                    6784: 8192,
                    7040: 2105352,
                    7296: 2097160,
                    7552: 0,
                    7808: 268435456,
                    8064: 268443656
                }, {
                    0: 1048576,
                    16: 33555457,
                    32: 1024,
                    48: 1049601,
                    64: 34604033,
                    80: 0,
                    96: 1,
                    112: 34603009,
                    128: 33555456,
                    144: 1048577,
                    160: 33554433,
                    176: 34604032,
                    192: 34603008,
                    208: 1025,
                    224: 1049600,
                    240: 33554432,
                    8: 34603009,
                    24: 0,
                    40: 33555457,
                    56: 34604032,
                    72: 1048576,
                    88: 33554433,
                    104: 33554432,
                    120: 1025,
                    136: 1049601,
                    152: 33555456,
                    168: 34603008,
                    184: 1048577,
                    200: 1024,
                    216: 34604033,
                    232: 1,
                    248: 1049600,
                    256: 33554432,
                    272: 1048576,
                    288: 33555457,
                    304: 34603009,
                    320: 1048577,
                    336: 33555456,
                    352: 34604032,
                    368: 1049601,
                    384: 1025,
                    400: 34604033,
                    416: 1049600,
                    432: 1,
                    448: 0,
                    464: 34603008,
                    480: 33554433,
                    496: 1024,
                    264: 1049600,
                    280: 33555457,
                    296: 34603009,
                    312: 1,
                    328: 33554432,
                    344: 1048576,
                    360: 1025,
                    376: 34604032,
                    392: 33554433,
                    408: 34603008,
                    424: 0,
                    440: 34604033,
                    456: 1049601,
                    472: 1024,
                    488: 33555456,
                    504: 1048577
                }, {
                    0: 134219808,
                    1: 131072,
                    2: 134217728,
                    3: 32,
                    4: 131104,
                    5: 134350880,
                    6: 134350848,
                    7: 2048,
                    8: 134348800,
                    9: 134219776,
                    10: 133120,
                    11: 134348832,
                    12: 2080,
                    13: 0,
                    14: 134217760,
                    15: 133152,
                    2147483648: 2048,
                    2147483649: 134350880,
                    2147483650: 134219808,
                    2147483651: 134217728,
                    2147483652: 134348800,
                    2147483653: 133120,
                    2147483654: 133152,
                    2147483655: 32,
                    2147483656: 134217760,
                    2147483657: 2080,
                    2147483658: 131104,
                    2147483659: 134350848,
                    2147483660: 0,
                    2147483661: 134348832,
                    2147483662: 134219776,
                    2147483663: 131072,
                    16: 133152,
                    17: 134350848,
                    18: 32,
                    19: 2048,
                    20: 134219776,
                    21: 134217760,
                    22: 134348832,
                    23: 131072,
                    24: 0,
                    25: 131104,
                    26: 134348800,
                    27: 134219808,
                    28: 134350880,
                    29: 133120,
                    30: 2080,
                    31: 134217728,
                    2147483664: 131072,
                    2147483665: 2048,
                    2147483666: 134348832,
                    2147483667: 133152,
                    2147483668: 32,
                    2147483669: 134348800,
                    2147483670: 134217728,
                    2147483671: 134219808,
                    2147483672: 134350880,
                    2147483673: 134217760,
                    2147483674: 134219776,
                    2147483675: 0,
                    2147483676: 133120,
                    2147483677: 2080,
                    2147483678: 131104,
                    2147483679: 134350848
                }]
                  , u = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679]
                  , h = o.DES = i.extend({
                    _doReset: function() {
                        for (var t = this._key, e = t.words, n = [], r = 0; r < 56; r++) {
                            var i = a[r] - 1;
                            n[r] = e[i >>> 5] >>> 31 - i % 32 & 1
                        }
                        for (var o = this._subKeys = [], c = 0; c < 16; c++) {
                            var u = o[c] = []
                              , h = l[c];
                            for (r = 0; r < 24; r++)
                                u[r / 6 | 0] |= n[(s[r] - 1 + h) % 28] << 31 - r % 6,
                                u[4 + (r / 6 | 0)] |= n[28 + (s[r + 24] - 1 + h) % 28] << 31 - r % 6;
                            u[0] = u[0] << 1 | u[0] >>> 31;
                            for (r = 1; r < 7; r++)
                                u[r] = u[r] >>> 4 * (r - 1) + 3;
                            u[7] = u[7] << 5 | u[7] >>> 27
                        }
                        var f = this._invSubKeys = [];
                        for (r = 0; r < 16; r++)
                            f[r] = o[15 - r]
                    },
                    encryptBlock: function(t, e) {
                        this._doCryptBlock(t, e, this._subKeys)
                    },
                    decryptBlock: function(t, e) {
                        this._doCryptBlock(t, e, this._invSubKeys)
                    },
                    _doCryptBlock: function(t, e, n) {
                        this._lBlock = t[e],
                        this._rBlock = t[e + 1],
                        f.call(this, 4, 252645135),
                        f.call(this, 16, 65535),
                        d.call(this, 2, 858993459),
                        d.call(this, 8, 16711935),
                        f.call(this, 1, 1431655765);
                        for (var r = 0; r < 16; r++) {
                            for (var i = n[r], o = this._lBlock, a = this._rBlock, s = 0, l = 0; l < 8; l++)
                                s |= c[l][((a ^ i[l]) & u[l]) >>> 0];
                            this._lBlock = a,
                            this._rBlock = o ^ s
                        }
                        var h = this._lBlock;
                        this._lBlock = this._rBlock,
                        this._rBlock = h,
                        f.call(this, 1, 1431655765),
                        d.call(this, 8, 16711935),
                        d.call(this, 2, 858993459),
                        f.call(this, 16, 65535),
                        f.call(this, 4, 252645135),
                        t[e] = this._lBlock,
                        t[e + 1] = this._rBlock
                    },
                    keySize: 2,
                    ivSize: 2,
                    blockSize: 2
                });
                function f(t, e) {
                    var n = (this._lBlock >>> t ^ this._rBlock) & e;
                    this._rBlock ^= n,
                    this._lBlock ^= n << t
                }
                function d(t, e) {
                    var n = (this._rBlock >>> t ^ this._lBlock) & e;
                    this._lBlock ^= n,
                    this._rBlock ^= n << t
                }
                e.DES = i._createHelper(h);
                var p = o.TripleDES = i.extend({
                    _doReset: function() {
                        var t = this._key
                          , e = t.words;
                        if (2 !== e.length && 4 !== e.length && e.length < 6)
                            throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
                        var n = e.slice(0, 2)
                          , i = e.length < 4 ? e.slice(0, 2) : e.slice(2, 4)
                          , o = e.length < 6 ? e.slice(0, 2) : e.slice(4, 6);
                        this._des1 = h.createEncryptor(r.create(n)),
                        this._des2 = h.createEncryptor(r.create(i)),
                        this._des3 = h.createEncryptor(r.create(o))
                    },
                    encryptBlock: function(t, e) {
                        this._des1.encryptBlock(t, e),
                        this._des2.decryptBlock(t, e),
                        this._des3.encryptBlock(t, e)
                    },
                    decryptBlock: function(t, e) {
                        this._des3.decryptBlock(t, e),
                        this._des2.encryptBlock(t, e),
                        this._des1.decryptBlock(t, e)
                    },
                    keySize: 6,
                    ivSize: 2,
                    blockSize: 2
                });
                e.TripleDES = i._createHelper(p)
            }(),
            t.TripleDES
        }
        ))
    },
    a640: function(t, e, n) {
        "use strict";
        var r = n("d039");
        t.exports = function(t, e) {
            var n = [][t];
            return !!n && r((function() {
                n.call(null, e || function() {
                    throw 1
                }
                , 1)
            }
            ))
        }
    },
    a7be: function(t, e, n) {},
    a817: function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("38ba"))
        }
        )(0, (function(t) {
            return t.pad.AnsiX923 = {
                pad: function(t, e) {
                    var n = t.sigBytes
                      , r = 4 * e
                      , i = r - n % r
                      , o = n + i - 1;
                    t.clamp(),
                    t.words[o >>> 2] |= i << 24 - o % 4 * 8,
                    t.sigBytes += i
                },
                unpad: function(t) {
                    var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                    t.sigBytes -= e
                }
            },
            t.pad.Ansix923
        }
        ))
    },
    a8ce: function(t, e, n) {
        (function(e, r) {
            t.exports = r(n("21bf"))
        }
        )(0, (function(t) {
            return function() {
                var e = t
                  , n = e.lib
                  , r = n.WordArray
                  , i = e.enc;
                i.Utf16 = i.Utf16BE = {
                    stringify: function(t) {
                        for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i += 2) {
                            var o = e[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
                            r.push(String.fromCharCode(o))
                        }
                        return r.join("")
                    },
                    parse: function(t) {
                        for (var e = t.length, n = [], i = 0; i < e; i++)
                            n[i >>> 1] |= t.charCodeAt(i) << 16 - i % 2 * 16;
                        return r.create(n, 2 * e)
                    }
                };
                function o(t) {
                    return t << 8 & 4278255360 | t >>> 8 & 16711935
                }
                i.Utf16LE = {
                    stringify: function(t) {
                        for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i += 2) {
                            var a = o(e[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
                            r.push(String.fromCharCode(a))
                        }
                        return r.join("")
                    },
                    parse: function(t) {
                        for (var e = t.length, n = [], i = 0; i < e; i++)
                            n[i >>> 1] |= o(t.charCodeAt(i) << 16 - i % 2 * 16);
                        return r.create(n, 2 * e)
                    }
                }
            }(),
            t.enc.Utf16
        }
        ))
    },
    a9e3: function(t, e, n) {
        "use strict";
        var r = n("83ab")
          , i = n("da84")
          , o = n("94ca")
          , a = n("6eeb")
          , s = n("1a2d")
          , l = n("7156")
          , c = n("d9b5")
          , u = n("c04e")
          , h = n("d039")
          , f = n("241c").f
          , d = n("06cf").f
          , p = n("9bf2").f
          , g = n("408a")
          , v = n("58a8").trim
          , m = "Number"
          , y = i[m]
          , b = y.prototype
          , w = function(t) {
            var e = u(t, "number");
            return "bigint" === typeof e ? e : x(e)
        }
          , x = function(t) {
            var e, n, r, i, o, a, s, l, h = u(t, "number");
            if (c(h))
                throw TypeError("Cannot convert a Symbol value to a number");
            if ("string" == typeof h && h.length > 2)
                if (h = v(h),
                e = h.charCodeAt(0),
                43 === e || 45 === e) {
                    if (n = h.charCodeAt(2),
                    88 === n || 120 === n)
                        return NaN
                } else if (48 === e) {
                    switch (h.charCodeAt(1)) {
                    case 66:
                    case 98:
                        r = 2,
                        i = 49;
                        break;
                    case 79:
                    case 111:
                        r = 8,
                        i = 55;
                        break;
                    default:
                        return +h
                    }
                    for (o = h.slice(2),
                    a = o.length,
                    s = 0; s < a; s++)
                        if (l = o.charCodeAt(s),
                        l < 48 || l > i)
                            return NaN;
                    return parseInt(o, r)
                }
            return +h
        };
        if (o(m, !y(" 0o1") || !y("0b1") || y("+0x1"))) {
            for (var _, k = function(t) {
                var e = arguments.length < 1 ? 0 : y(w(t))
                  , n = this;
                return n instanceof k && h((function() {
                    g(n)
                }
                )) ? l(Object(e), n, k) : e
            }, C = r ? f(y) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), S = 0; C.length > S; S++)
                s(y, _ = C[S]) && !s(k, _) && p(k, _, d(y, _));
            k.prototype = b,
            b.constructor = k,
            a(i, m, k)
        }
    },
    aaef: function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("38ba"))
        }
        )(0, (function(t) {
            /** @preserve
	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
	 * derived from CryptoJS.mode.CTR
	 * Jan Hruby jhruby.web@gmail.com
	 */
            return t.mode.CTRGladman = function() {
                var e = t.lib.BlockCipherMode.extend();
                function n(t) {
                    if (255 === (t >> 24 & 255)) {
                        var e = t >> 16 & 255
                          , n = t >> 8 & 255
                          , r = 255 & t;
                        255 === e ? (e = 0,
                        255 === n ? (n = 0,
                        255 === r ? r = 0 : ++r) : ++n) : ++e,
                        t = 0,
                        t += e << 16,
                        t += n << 8,
                        t += r
                    } else
                        t += 1 << 24;
                    return t
                }
                function r(t) {
                    return 0 === (t[0] = n(t[0])) && (t[1] = n(t[1])),
                    t
                }
                var i = e.Encryptor = e.extend({
                    processBlock: function(t, e) {
                        var n = this._cipher
                          , i = n.blockSize
                          , o = this._iv
                          , a = this._counter;
                        o && (a = this._counter = o.slice(0),
                        this._iv = void 0),
                        r(a);
                        var s = a.slice(0);
                        n.encryptBlock(s, 0);
                        for (var l = 0; l < i; l++)
                            t[e + l] ^= s[l]
                    }
                });
                return e.Decryptor = i,
                e
            }(),
            t.mode.CTRGladman
        }
        ))
    },
    ab13: function(t, e, n) {
        var r = n("b622")
          , i = r("match");
        t.exports = function(t) {
            var e = /./;
            try {
                "/./"[t](e)
            } catch (n) {
                try {
                    return e[i] = !1,
                    "/./"[t](e)
                } catch (r) {}
            }
            return !1
        }
    },
    b244: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("FormatContent", {
                attrs: {
                    tip: t.tip,
                    formatType: t.formatType,
                    outputTip: t.outputTip
                }
            })], 1)
        }
          , i = []
          , o = n("d4ec")
          , a = n("262e")
          , s = n("2caf")
          , l = n("9ab4")
          , c = n("8d8f")
          , u = n("1b40")
          , h = function(t) {
            Object(a["a"])(n, t);
            var e = Object(s["a"])(n);
            function n() {
                var t;
                return Object(o["a"])(this, n),
                t = e.apply(this, arguments),
                t.formatType = "unquote_url",
                t.tip = "输入待反转义的url，如\nhttps://www.baidu.com/s?wd=%E4%BD%A0%E5%A5%BD\n  ",
                t.outputTip = "输出：\nhttps://www.baidu.com/s?wd=你好\n  ",
                t
            }
            return n
        }(u["c"]);
        h = Object(l["a"])([Object(u["a"])({
            components: {
                FormatContent: c["a"]
            }
        })], h);
        var f = h
          , d = f
          , p = n("2877")
          , g = Object(p["a"])(d, r, i, !1, null, "a3faa794", null);
        e["default"] = g.exports
    },
    b383: function(t, e, n) {
        "use strict";
        e.decode = e.parse = n("91dd"),
        e.encode = e.stringify = n("e099")
    },
    b64b: function(t, e, n) {
        var r = n("23e7")
          , i = n("7b0b")
          , o = n("df75")
          , a = n("d039")
          , s = a((function() {
            o(1)
        }
        ));
        r({
            target: "Object",
            stat: !0,
            forced: s
        }, {
            keys: function(t) {
                return o(i(t))
            }
        })
    },
    b6b9: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "container"
            }, [n("span", {
                staticClass: "operation"
            }, [n("span", {
                staticClass: "operation_btn"
            }, [t._v("语言： "), n("el-select", {
                attrs: {
                    filterable: "",
                    placeholder: "python",
                    size: "mini"
                },
                model: {
                    value: t.language,
                    callback: function(e) {
                        t.language = e
                    },
                    expression: "language"
                }
            }, t._l(t.languages, (function(t) {
                return n("el-option", {
                    key: t.value,
                    attrs: {
                        label: t.label,
                        value: t.value
                    }
                })
            }
            )), 1)], 1), n("el-button", {
                staticClass: "operation_btn",
                attrs: {
                    type: "text",
                    icon: "el-icon-share"
                },
                on: {
                    click: t.run
                }
            }, [t._v(" 分享 ")])], 1), n("div", {
                staticClass: "code_content"
            }, [n("MonacoEditor", {
                key: t.randomkey,
                attrs: {
                    code: t.code,
                    editorOptions: t.options,
                    language: t.language,
                    theme: "vs"
                },
                on: {
                    mounted: t.onMounted,
                    codeChange: t.onCodeChange
                }
            })], 1)])
        }
          , i = []
          , o = n("1da1")
          , a = n("d4ec")
          , s = n("bee2")
          , l = n("262e")
          , c = n("2caf")
          , u = (n("ac1f"),
        n("5319"),
        n("99af"),
        n("96cf"),
        n("9ab4"))
          , h = n("1b40")
          , f = n("9e12")
          , d = n("dba0")
          , p = n.n(d)
          , g = n("5c96")
          , v = function(t) {
            Object(l["a"])(n, t);
            var e = Object(c["a"])(n);
            function n() {
                var t;
                return Object(a["a"])(this, n),
                t = e.apply(this, arguments),
                t.code = '# 贴入您的代码，点击右上角分享按钮获取分享连接。\n# 您的代码依然私有，3天后自动过期，只有获得分享连接的人才可阅读。\n# 此功能常用于问题求助，直接发送代码格式错乱，发送文件不方便接收，可用过此功能描述问题及展示相关代码，向大佬求助！！！\n\n# 例如feapder爬虫代码：\n# 安装 pip3 install feapder\n# 文档地址：http://feapder.com\nimport json\nimport time\n\nimport feapder\nfrom feapder import Item\nfrom feapder.pipelines import BasePipeline\n\n\nclass FeapderAirSpider(feapder.AirSpider):\n    """\n    必应爬虫\n    """\n\n    __custom_setting__ = dict(\n        # 指定数据存储pipeline，框架内置mysql，mongo。这里存txt，因此指向自定义pipeline\n        ITEM_PIPELINES=[\n            # "feapder.pipelines.mysql_pipeline.MysqlPipeline",\n            # "feapder.pipelines.mongo_pipeline.MongoPipeline",\n            "feapder_air_spider.Pipeline"\n        ],\n        # 框架日志等级\n        LOG_LEVEL = "DEBUG"\n    )\n\n    def start_requests(self):\n        """\n        下发任务\n        :return:\n        """\n        keyword = "feapder"\n        # 翻5页\n        for i in range(1, 50, 10):\n            yield feapder.Request(\n                f"https://cn.bing.com/search?q={keyword}&pq={keyword}&first={i}",\n                keyword=keyword,\n            )\n\n    def download_midware(self, request):\n        """\n        下载中间件\n        :param request:\n        :return:\n        """\n        # 自定义请求头，否则会自动随机\n        request.headers = {\n            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36"\n        }\n        # request.cookies = {}\n        # request.proxies = {}\n        return request\n\n    def validate(self, request, response):\n        """\n        校验函数, 可用于校验response是否正确\n            若函数内抛出异常，则重试请求\n            若返回True 或 None，则进入解析函数\n            若返回False，则抛弃当前请求\n            可通过request.callback_name 区分不同的回调函数，编写不同的校验逻辑\n        :param request:\n        :param response:\n        :result: True / None / False\n        """\n        if response.status_code == 404:\n            return False  # 忽略当前请求\n\n        elif response.status_code != 200:\n            raise Exception(response)  # 返回状态码 不为200，抛异常，触发自动重试\n\n    def parse(self, request, response):\n        """\n        默认的解析函数\n        :param request:\n        :param response:\n        :return:\n        """\n        keyword = request.keyword\n\n        results = response.css(".b_title > h2")\n        for result in results:\n            title = result.xpath("string(.)").extract_first(default="").strip()\n            url = result.xpath(".//a/@href").extract_first()\n\n            # 创建item 并入库\n            item = Item()\n            item.table_name = "biying"\n            item.title = title\n            item.url = url\n            item.search_keyword = keyword\n            yield item\n\n            # 下发详情任务\n            # yield feapder.Request(url, callback=self.parse_detail)\n\n    def parse_detail(self, request, response):\n        """\n        解析详情\n        :param request:\n        :param response:\n        :return:\n        """\n        print("解析详情 " + response.url)\n\n    def start_callback(self):\n        """\n        @summary: 程序开始的回调\n        ---------\n        ---------\n        @result: None\n        """\n        self.start_time = time.time()\n\n    def end_callback(self):\n        """\n        @summary: 程序结束的回调\n        ---------\n        ---------\n        @result: None\n        """\n\n        self.end_time = time.time()\n        print("耗时 {}".format(self.end_time - self.start_time))\n\n\nclass Pipeline(BasePipeline):\n    def save_items(self, table, items) -> bool:\n        """\n        保存数据\n        Args:\n            table: 表名\n            items: 数据，[{},{},...]\n\n        Returns: 是否保存成功 True / False\n                 若False，不会将本批数据入到去重库，以便再次入库\n\n        """\n        for item in items:\n            print(item)\n            with open(f"{table}.txt", "a") as file:\n                file.write(json.dumps(item, ensure_ascii=False) + "\\n")\n\n        return True\n\n\nif __name__ == "__main__":\n    # 启动5个线程\n    FeapderAirSpider(thread_count=5).start()',
                t.editor = null,
                t.options = {
                    selectOnLineNumbers: !0,
                    roundedSelection: !0,
                    readOnly: !1,
                    cursorStyle: "line",
                    automaticLayout: !1,
                    glyphMargin: !0,
                    renderLineHighlight: null,
                    hideCursorInOverviewRuler: !0,
                    scrollbar: {
                        vertical: "hidden"
                    }
                },
                t.randomkey = 1231231,
                t.language = "python",
                t.languages = [{
                    value: "python",
                    label: "python"
                }, {
                    value: "java",
                    label: "java"
                }, {
                    value: "go",
                    label: "go"
                }, {
                    value: "javascript",
                    label: "javascript"
                }, {
                    value: "html",
                    label: "html"
                }, {
                    value: "css",
                    label: "css"
                }, {
                    value: "cpp",
                    label: "c++"
                }, {
                    value: "c",
                    label: "c"
                }, {
                    value: "json",
                    label: "json"
                }, {
                    value: "markdown",
                    label: "markdown"
                }, {
                    value: "sql",
                    label: "sql"
                }, {
                    value: "php",
                    label: "php"
                }, {
                    value: "shell",
                    label: "shell"
                }, {
                    value: "bat",
                    label: "bat"
                }, {
                    value: "typescript",
                    label: "typescript"
                }, {
                    value: "yaml",
                    label: "yaml"
                }, {
                    value: "objective-c",
                    label: "objective-c"
                }, {
                    value: "dockerfile",
                    label: "dockerfile"
                }],
                t
            }
            return Object(s["a"])(n, [{
                key: "created",
                value: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                        var e, n, r, i, o;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e = this.$route.query.code,
                                    n = this.$route.query.language,
                                    !e) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.next = 5,
                                    Object(f["d"])(e);
                                case 5:
                                    r = t.sent,
                                    i = r.data,
                                    i ? (this.code = i,
                                    n && (this.language = n + ""),
                                    this.randomkey = this.createRamdomKey()) : Object(g["Notification"])({
                                        title: "提示",
                                        message: "分享连接已失效，当前展示的为示例",
                                        type: "error",
                                        duration: 5e3
                                    });
                                case 8:
                                    o = this,
                                    window.onresize = function() {
                                        o.randomkey = o.createRamdomKey()
                                    }
                                    ;
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "trimStr",
                value: function(t) {
                    return t.replace(/(^\s*)|(\s*$)/g, "")
                }
            }, {
                key: "run",
                value: function() {
                    var t = Object(o["a"])(regeneratorRuntime.mark((function t() {
                        var e, n, r, i, o, a = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (e = this.trimStr(this.code),
                                    !(e.length > 0)) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.next = 4,
                                    Object(f["a"])({
                                        format_type: "share_code",
                                        input_str: e
                                    });
                                case 4:
                                    n = t.sent,
                                    r = n.data,
                                    i = r,
                                    o = "".concat(window.location.protocol, "//").concat(window.location.host, "/#/codeShare?code=").concat(i, "&language=").concat(this.language),
                                    this.$confirm("分享连接已生成，3天后自动失效", "提示", {
                                        confirmButtonText: "复制",
                                        cancelButtonText: "取消",
                                        type: "success"
                                    }).then((function() {
                                        a.$copyText(o).then((function(t) {
                                            Object(g["Notification"])({
                                                title: "成功",
                                                message: "成功复制到剪切板",
                                                type: "success",
                                                duration: 2e3
                                            })
                                        }
                                        ), (function(t) {
                                            Object(g["Notification"])({
                                                title: "失败",
                                                message: "复制失败",
                                                type: "error",
                                                duration: 2e3
                                            })
                                        }
                                        ))
                                    }
                                    ));
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "createRamdomKey",
                value: function() {
                    return Math.floor(0xe8d4a54019 * Math.random())
                }
            }, {
                key: "onMounted",
                value: function(t) {
                    t.updateOptions(this.options),
                    this.editor = t
                }
            }, {
                key: "changeLanguage",
                value: function() {
                    this.randomkey = this.createRamdomKey()
                }
            }, {
                key: "onCodeChange",
                value: function(t) {
                    this.code = t.getValue()
                }
            }]),
            n
        }(h["c"]);
        Object(u["a"])([Object(h["d"])("language", {
            deep: !1
        })], v.prototype, "changeLanguage", null),
        v = Object(u["a"])([Object(h["a"])({
            components: {
                MonacoEditor: p.a
            }
        })], v);
        var m = v
          , y = m
          , b = (n("6bc6"),
        n("2877"))
          , w = Object(b["a"])(y, r, i, !1, null, "0c101688", null);
        e["default"] = w.exports
    },
    b7c4: function(t, e, n) {},
    b86b: function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("3252"), n("d6e6"))
        }
        )(0, (function(t) {
            return function() {
                var e = t
                  , n = e.x64
                  , r = n.Word
                  , i = n.WordArray
                  , o = e.algo
                  , a = o.SHA512
                  , s = o.SHA384 = a.extend({
                    _doReset: function() {
                        this._hash = new i.init([new r.init(3418070365,3238371032), new r.init(1654270250,914150663), new r.init(2438529370,812702999), new r.init(355462360,4144912697), new r.init(1731405415,4290775857), new r.init(2394180231,1750603025), new r.init(3675008525,1694076839), new r.init(1203062813,3204075428)])
                    },
                    _doFinalize: function() {
                        var t = a._doFinalize.call(this);
                        return t.sigBytes -= 16,
                        t
                    }
                });
                e.SHA384 = a._createHelper(s),
                e.HmacSHA384 = a._createHmacHelper(s)
            }(),
            t.SHA384
        }
        ))
    },
    b86c: function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("38ba"))
        }
        )(0, (function(t) {
            return t.pad.NoPadding = {
                pad: function() {},
                unpad: function() {}
            },
            t.pad.NoPadding
        }
        ))
    },
    bb2f: function(t, e, n) {
        var r = n("d039");
        t.exports = !r((function() {
            return Object.isExtensible(Object.preventExtensions({}))
        }
        ))
    },
    bb47: function(t, e, n) {},
    bf1e: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("CodeContent", {
                attrs: {
                    tip: t.tip,
                    formatType: t.formatType,
                    outputTip: t.outputTip
                }
            })], 1)
        }
          , i = []
          , o = n("d4ec")
          , a = n("262e")
          , s = n("2caf")
          , l = n("9ab4")
          , c = n("82cd")
          , u = n("1b40")
          , h = function(t) {
            Object(a["a"])(n, t);
            var e = Object(s["a"])(n);
            function n() {
                var t;
                return Object(o["a"])(this, n),
                t = e.apply(this, arguments),
                t.formatType = "format_dict",
                t.tip = '输入待格式化的字典或JSON，如\n{"a":None, "b":True, "c":False, "d":true, "e":false, "f":1, "g":"hi"}\n  ',
                t.outputTip = '# 输出python的字典：\n{\n    "a": None,\n    "b": True,\n    "c": False,\n    "d": True,\n    "e": False,\n    "f": 1,\n    "g": "hi"\n}',
                t
            }
            return n
        }(u["c"]);
        h = Object(l["a"])([Object(u["a"])({
            components: {
                CodeContent: c["a"]
            }
        })], h);
        var f = h
          , d = f
          , p = n("2877")
          , g = Object(p["a"])(d, r, i, !1, null, "14b53f9a", null);
        e["default"] = g.exports
    },
    bf29: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = function() {
            var t = this
              , e = t.$createElement;
            t._self._c;
            return t._m(0)
        }
          , i = [function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "content"
            }, [n("div", {
                attrs: {
                    id: "view"
                }
            })])
        }
        ]
          , o = n("56b3")
          , a = n.n(o)
          , s = (n("a7be"),
        n("db91"),
        n("c885"),
        n("bb47"),
        n("641c"))
          , l = n.n(s);
        window.diff_match_patch = l.a,
        window.DIFF_DELETE = -1,
        window.DIFF_INSERT = 1,
        window.DIFF_EQUAL = 0;
        var c = {
            name: "CodeCompare",
            data: function() {
                return {}
            },
            mounted: function() {
                var t = this;
                this.$nextTick((function() {
                    t.initUI()
                }
                ))
            },
            methods: {
                initUI: function() {
                    var t = document.getElementById("view");
                    t.innerHTML = "",
                    a.a.MergeView(t, {
                        value: "提示：支持拖拽文件到编辑区\n\n1\n2\n3",
                        origLeft: null,
                        orig: "提示：支持拖拽文件到编辑区\n\n2\n3\n4",
                        lineNumbers: !0,
                        smartIndent: !0,
                        indentUnit: 4,
                        mode: {
                            name: "python",
                            json: !0
                        },
                        highlightDifferences: !0,
                        styleActiveLine: !0,
                        matchBrackets: !0,
                        revertButtons: !0,
                        readOnly: !1,
                        allowEditingOriginals: !0,
                        lineWrapping: !0
                    })
                }
            }
        }
          , u = c
          , h = (n("2ddf"),
        n("dbf9"),
        n("2877"))
          , f = Object(h["a"])(u, r, i, !1, null, "af2d0506", null);
        e["default"] = f.exports
    },
    c198: function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("1132"), n("72fe"), n("2b79"), n("38ba"))
        }
        )(0, (function(t) {
            return function() {
                var e = t
                  , n = e.lib
                  , r = n.BlockCipher
                  , i = e.algo
                  , o = []
                  , a = []
                  , s = []
                  , l = []
                  , c = []
                  , u = []
                  , h = []
                  , f = []
                  , d = []
                  , p = [];
                (function() {
                    for (var t = [], e = 0; e < 256; e++)
                        t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
                    var n = 0
                      , r = 0;
                    for (e = 0; e < 256; e++) {
                        var i = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
                        i = i >>> 8 ^ 255 & i ^ 99,
                        o[n] = i,
                        a[i] = n;
                        var g = t[n]
                          , v = t[g]
                          , m = t[v]
                          , y = 257 * t[i] ^ 16843008 * i;
                        s[n] = y << 24 | y >>> 8,
                        l[n] = y << 16 | y >>> 16,
                        c[n] = y << 8 | y >>> 24,
                        u[n] = y;
                        y = 16843009 * m ^ 65537 * v ^ 257 * g ^ 16843008 * n;
                        h[i] = y << 24 | y >>> 8,
                        f[i] = y << 16 | y >>> 16,
                        d[i] = y << 8 | y >>> 24,
                        p[i] = y,
                        n ? (n = g ^ t[t[t[m ^ g]]],
                        r ^= t[t[r]]) : n = r = 1
                    }
                }
                )();
                var g = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
                  , v = i.AES = r.extend({
                    _doReset: function() {
                        if (!this._nRounds || this._keyPriorReset !== this._key) {
                            for (var t = this._keyPriorReset = this._key, e = t.words, n = t.sigBytes / 4, r = this._nRounds = n + 6, i = 4 * (r + 1), a = this._keySchedule = [], s = 0; s < i; s++)
                                s < n ? a[s] = e[s] : (u = a[s - 1],
                                s % n ? n > 6 && s % n == 4 && (u = o[u >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & u]) : (u = u << 8 | u >>> 24,
                                u = o[u >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & u],
                                u ^= g[s / n | 0] << 24),
                                a[s] = a[s - n] ^ u);
                            for (var l = this._invKeySchedule = [], c = 0; c < i; c++) {
                                s = i - c;
                                if (c % 4)
                                    var u = a[s];
                                else
                                    u = a[s - 4];
                                l[c] = c < 4 || s <= 4 ? u : h[o[u >>> 24]] ^ f[o[u >>> 16 & 255]] ^ d[o[u >>> 8 & 255]] ^ p[o[255 & u]]
                            }
                        }
                    },
                    encryptBlock: function(t, e) {
                        this._doCryptBlock(t, e, this._keySchedule, s, l, c, u, o)
                    },
                    decryptBlock: function(t, e) {
                        var n = t[e + 1];
                        t[e + 1] = t[e + 3],
                        t[e + 3] = n,
                        this._doCryptBlock(t, e, this._invKeySchedule, h, f, d, p, a);
                        n = t[e + 1];
                        t[e + 1] = t[e + 3],
                        t[e + 3] = n
                    },
                    _doCryptBlock: function(t, e, n, r, i, o, a, s) {
                        for (var l = this._nRounds, c = t[e] ^ n[0], u = t[e + 1] ^ n[1], h = t[e + 2] ^ n[2], f = t[e + 3] ^ n[3], d = 4, p = 1; p < l; p++) {
                            var g = r[c >>> 24] ^ i[u >>> 16 & 255] ^ o[h >>> 8 & 255] ^ a[255 & f] ^ n[d++]
                              , v = r[u >>> 24] ^ i[h >>> 16 & 255] ^ o[f >>> 8 & 255] ^ a[255 & c] ^ n[d++]
                              , m = r[h >>> 24] ^ i[f >>> 16 & 255] ^ o[c >>> 8 & 255] ^ a[255 & u] ^ n[d++]
                              , y = r[f >>> 24] ^ i[c >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[255 & h] ^ n[d++];
                            c = g,
                            u = v,
                            h = m,
                            f = y
                        }
                        g = (s[c >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[h >>> 8 & 255] << 8 | s[255 & f]) ^ n[d++],
                        v = (s[u >>> 24] << 24 | s[h >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & c]) ^ n[d++],
                        m = (s[h >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & u]) ^ n[d++],
                        y = (s[f >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & h]) ^ n[d++];
                        t[e] = g,
                        t[e + 1] = v,
                        t[e + 2] = m,
                        t[e + 3] = y
                    },
                    keySize: 8
                });
                e.AES = r._createHelper(v)
            }(),
            t.AES
        }
        ))
    },
    c19e: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("FormatContent", {
                attrs: {
                    tip: t.tip,
                    formatType: t.formatType,
                    outputTip: t.outputTip
                }
            })], 1)
        }
          , i = []
          , o = n("d4ec")
          , a = n("262e")
          , s = n("2caf")
          , l = n("9ab4")
          , c = n("8d8f")
          , u = n("1b40")
          , h = function(t) {
            Object(a["a"])(n, t);
            var e = Object(s["a"])(n);
            function n() {
                var t;
                return Object(o["a"])(this, n),
                t = e.apply(this, arguments),
                t.formatType = "quote_url",
                t.tip = "输入待转义的url，如\nhttps://www.baidu.com/s?wd=你好\n  ",
                t.outputTip = "输出：\n安全转义：\nhttps://www.baidu.com/s?wd=%E4%BD%A0%E5%A5%BD\n\n完全转义：\nhttps%3A%2F%2Fwww.baidu.com%2Fs%3Fwd%3D%E4%BD%A0%E5%A5%BD\n  ",
                t
            }
            return n
        }(u["c"]);
        h = Object(l["a"])([Object(u["a"])({
            components: {
                FormatContent: c["a"]
            }
        })], h);
        var f = h
          , d = f
          , p = n("2877")
          , g = Object(p["a"])(d, r, i, !1, null, "2f3d056d", null);
        e["default"] = g.exports
    },
    c1bc: function(t, e, n) {
        (function(e, r) {
            t.exports = r(n("21bf"))
        }
        )(0, (function(t) {
            return function() {
                var e = t
                  , n = e.lib
                  , r = n.WordArray
                  , i = e.enc;
                i.Base64url = {
                    stringify: function(t, e=!0) {
                        var n = t.words
                          , r = t.sigBytes
                          , i = e ? this._safe_map : this._map;
                        t.clamp();
                        for (var o = [], a = 0; a < r; a += 3)
                            for (var s = n[a >>> 2] >>> 24 - a % 4 * 8 & 255, l = n[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255, c = n[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, u = s << 16 | l << 8 | c, h = 0; h < 4 && a + .75 * h < r; h++)
                                o.push(i.charAt(u >>> 6 * (3 - h) & 63));
                        var f = i.charAt(64);
                        if (f)
                            while (o.length % 4)
                                o.push(f);
                        return o.join("")
                    },
                    parse: function(t, e=!0) {
                        var n = t.length
                          , r = e ? this._safe_map : this._map
                          , i = this._reverseMap;
                        if (!i) {
                            i = this._reverseMap = [];
                            for (var a = 0; a < r.length; a++)
                                i[r.charCodeAt(a)] = a
                        }
                        var s = r.charAt(64);
                        if (s) {
                            var l = t.indexOf(s);
                            -1 !== l && (n = l)
                        }
                        return o(t, n, i)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
                };
                function o(t, e, n) {
                    for (var i = [], o = 0, a = 0; a < e; a++)
                        if (a % 4) {
                            var s = n[t.charCodeAt(a - 1)] << a % 4 * 2
                              , l = n[t.charCodeAt(a)] >>> 6 - a % 4 * 2
                              , c = s | l;
                            i[o >>> 2] |= c << 24 - o % 4 * 8,
                            o++
                        }
                    return r.create(i, o)
                }
            }(),
            t.enc.Base64url
        }
        ))
    },
    c23f: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("CodeContent", {
                attrs: {
                    tip: t.tip,
                    formatType: t.formatType,
                    outputTip: t.outputTip
                }
            })], 1)
        }
          , i = []
          , o = n("d4ec")
          , a = n("262e")
          , s = n("2caf")
          , l = n("9ab4")
          , c = n("82cd")
          , u = n("1b40")
          , h = function(t) {
            Object(a["a"])(n, t);
            var e = Object(s["a"])(n);
            function n() {
                var t;
                return Object(o["a"])(this, n),
                t = e.apply(this, arguments),
                t.formatType = "cookie",
                t.tip = '输入待格式化的Cookie，支持字符串和列表格式，如：\n1. 字符串格式：\nHm_lvt_f45b875b62fd14ec127215dd2057b3cd=1631504515,1632622540; _ga_KS7S55K3YN=GS1.1.1632626830.8.0.1632626830.0\n2. 列表格式：\n[\n  {\n      "domain": "localhost",\n      "name": "Hm_lvt_f45b875b62fd14ec127215dd2057b3cd",\n      "path": "/",\n      "value": "1631504515,1632622540"\n  },\n  {\n      "domain": "localhost",\n      "name": "_ga_KS7S55K3YN",\n      "path": "/",\n      "value": "GS1.1.1632626830.8.0.1632626830.0"\n  }\n]\n  ',
                t.outputTip = '# 输出：\n{\n    "Hm_lvt_f45b875b62fd14ec127215dd2057b3cd": "1631504515,1632622540",\n    "_ga_KS7S55K3YN": "GS1.1.1632626830.8.0.1632626830.0"\n}',
                t
            }
            return n
        }(u["c"]);
        h = Object(l["a"])([Object(u["a"])({
            components: {
                CodeContent: c["a"]
            }
        })], h);
        var f = h
          , d = f
          , p = n("2877")
          , g = Object(p["a"])(d, r, i, !1, null, "b163878c", null);
        e["default"] = g.exports
    },
    c3b6: function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("1132"), n("72fe"), n("2b79"), n("38ba"))
        }
        )(0, (function(t) {
            return function() {
                var e = t
                  , n = e.lib
                  , r = n.StreamCipher
                  , i = e.algo
                  , o = i.RC4 = r.extend({
                    _doReset: function() {
                        for (var t = this._key, e = t.words, n = t.sigBytes, r = this._S = [], i = 0; i < 256; i++)
                            r[i] = i;
                        i = 0;
                        for (var o = 0; i < 256; i++) {
                            var a = i % n
                              , s = e[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                            o = (o + r[i] + s) % 256;
                            var l = r[i];
                            r[i] = r[o],
                            r[o] = l
                        }
                        this._i = this._j = 0
                    },
                    _doProcessBlock: function(t, e) {
                        t[e] ^= a.call(this)
                    },
                    keySize: 8,
                    ivSize: 0
                });
                function a() {
                    for (var t = this._S, e = this._i, n = this._j, r = 0, i = 0; i < 4; i++) {
                        e = (e + 1) % 256,
                        n = (n + t[e]) % 256;
                        var o = t[e];
                        t[e] = t[n],
                        t[n] = o,
                        r |= t[(t[e] + t[n]) % 256] << 24 - 8 * i
                    }
                    return this._i = e,
                    this._j = n,
                    r
                }
                e.RC4 = r._createHelper(o);
                var s = i.RC4Drop = o.extend({
                    cfg: o.cfg.extend({
                        drop: 192
                    }),
                    _doReset: function() {
                        o._doReset.call(this);
                        for (var t = this.cfg.drop; t > 0; t--)
                            a.call(this)
                    }
                });
                e.RC4Drop = r._createHelper(s)
            }(),
            t.RC4
        }
        ))
    },
    c642: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        }
        )),
        n.d(e, "b", (function() {
            return i
        }
        ));
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                style: t.style
            })
        }
          , i = []
    },
    c885: function(t, e, n) {
        (function(t) {
            t(n("56b3"))
        }
        )((function(t) {
            "use strict";
            var e = t.Pos
              , n = "http://www.w3.org/2000/svg";
            function r(t, e) {
                this.mv = t,
                this.type = e,
                this.classes = "left" == e ? {
                    chunk: "CodeMirror-merge-l-chunk",
                    start: "CodeMirror-merge-l-chunk-start",
                    end: "CodeMirror-merge-l-chunk-end",
                    insert: "CodeMirror-merge-l-inserted",
                    del: "CodeMirror-merge-l-deleted",
                    connect: "CodeMirror-merge-l-connect"
                } : {
                    chunk: "CodeMirror-merge-r-chunk",
                    start: "CodeMirror-merge-r-chunk-start",
                    end: "CodeMirror-merge-r-chunk-end",
                    insert: "CodeMirror-merge-r-inserted",
                    del: "CodeMirror-merge-r-deleted",
                    connect: "CodeMirror-merge-r-connect"
                }
            }
            function i(e) {
                e.diffOutOfDate && (e.diff = M(e.orig.getValue(), e.edit.getValue(), e.mv.options.ignoreWhitespace),
                e.chunks = E(e.diff),
                e.diffOutOfDate = !1,
                t.signal(e.edit, "updateDiff", e.diff))
            }
            r.prototype = {
                constructor: r,
                init: function(e, n, r) {
                    this.edit = this.mv.edit,
                    (this.edit.state.diffViews || (this.edit.state.diffViews = [])).push(this),
                    this.orig = t(e, W({
                        value: n,
                        readOnly: !this.mv.options.allowEditingOriginals
                    }, W(r))),
                    "align" == this.mv.options.connect && (this.edit.state.trackAlignable || (this.edit.state.trackAlignable = new q(this.edit)),
                    this.orig.state.trackAlignable = new q(this.orig)),
                    this.lockButton.title = this.edit.phrase("Toggle locked scrolling"),
                    this.orig.state.diffViews = [this];
                    var i = r.chunkClassLocation || "background";
                    "[object Array]" != Object.prototype.toString.call(i) && (i = [i]),
                    this.classes.classLocation = i,
                    this.diff = M(L(n), L(r.value), this.mv.options.ignoreWhitespace),
                    this.chunks = E(this.diff),
                    this.diffOutOfDate = this.dealigned = !1,
                    this.needsScrollSync = null,
                    this.showDifferences = !1 !== r.showDifferences
                },
                registerEvents: function(t) {
                    this.forceUpdate = a(this),
                    u(this, !0, !1),
                    s(this, t)
                },
                setShowDifferences: function(t) {
                    t = !1 !== t,
                    t != this.showDifferences && (this.showDifferences = t,
                    this.forceUpdate("full"))
                }
            };
            var o = !1;
            function a(e) {
                var n, r = {
                    from: 0,
                    to: 0,
                    marked: []
                }, a = {
                    from: 0,
                    to: 0,
                    marked: []
                }, s = !1;
                function c(t) {
                    o = !0,
                    s = !1,
                    "full" == t && (e.svg && F(e.svg),
                    e.copyButtons && F(e.copyButtons),
                    f(e.edit, r.marked, e.classes),
                    f(e.orig, a.marked, e.classes),
                    r.from = r.to = a.from = a.to = 0),
                    i(e),
                    e.showDifferences && (d(e.edit, e.diff, r, DIFF_INSERT, e.classes),
                    d(e.orig, e.diff, a, DIFF_DELETE, e.classes)),
                    "align" == e.mv.options.connect && x(e),
                    v(e),
                    null != e.needsScrollSync && l(e, e.needsScrollSync),
                    o = !1
                }
                function u(t) {
                    o || (e.dealigned = !0,
                    h(t))
                }
                function h(t) {
                    o || s || (clearTimeout(n),
                    !0 === t && (s = !0),
                    n = setTimeout(c, !0 === t ? 20 : 250))
                }
                function p(t, n) {
                    e.diffOutOfDate || (e.diffOutOfDate = !0,
                    r.from = r.to = a.from = a.to = 0),
                    u(n.text.length - 1 != n.to.line - n.from.line)
                }
                function g() {
                    e.diffOutOfDate = !0,
                    e.dealigned = !0,
                    c("full")
                }
                return e.edit.on("change", p),
                e.orig.on("change", p),
                e.edit.on("swapDoc", g),
                e.orig.on("swapDoc", g),
                "align" == e.mv.options.connect && (t.on(e.edit.state.trackAlignable, "realign", u),
                t.on(e.orig.state.trackAlignable, "realign", u)),
                e.edit.on("viewportChange", (function() {
                    h(!1)
                }
                )),
                e.orig.on("viewportChange", (function() {
                    h(!1)
                }
                )),
                c(),
                c
            }
            function s(t, e) {
                t.edit.on("scroll", (function() {
                    l(t, !0) && v(t)
                }
                )),
                t.orig.on("scroll", (function() {
                    l(t, !1) && v(t),
                    e && l(e, !0) && v(e)
                }
                ))
            }
            function l(t, e) {
                if (t.diffOutOfDate)
                    return t.lockScroll && null == t.needsScrollSync && (t.needsScrollSync = e),
                    !1;
                if (t.needsScrollSync = null,
                !t.lockScroll)
                    return !0;
                var n, r, i = +new Date;
                if (e ? (n = t.edit,
                r = t.orig) : (n = t.orig,
                r = t.edit),
                n.state.scrollSetBy == t && (n.state.scrollSetAt || 0) + 250 > i)
                    return !1;
                var o = n.getScrollInfo();
                if ("align" == t.mv.options.connect)
                    v = o.top;
                else {
                    var a, s, l = .5 * o.clientHeight, u = o.top + l, h = n.lineAtHeight(u, "local"), f = R(t.chunks, h, e), d = c(n, e ? f.edit : f.orig), p = c(r, e ? f.orig : f.edit), g = (u - d.top) / (d.bot - d.top), v = p.top - l + g * (p.bot - p.top);
                    if (v > o.top && (s = o.top / l) < 1)
                        v = v * s + o.top * (1 - s);
                    else if ((a = o.height - o.clientHeight - o.top) < l) {
                        var m = r.getScrollInfo()
                          , y = m.height - m.clientHeight - v;
                        y > a && (s = a / l) < 1 && (v = v * s + (m.height - m.clientHeight - a) * (1 - s))
                    }
                }
                return r.scrollTo(o.left, v),
                r.state.scrollSetAt = i,
                r.state.scrollSetBy = t,
                !0
            }
            function c(t, e) {
                var n = e.after;
                return null == n && (n = t.lastLine() + 1),
                {
                    top: t.heightAtLine(e.before || 0, "local"),
                    bot: t.heightAtLine(n, "local")
                }
            }
            function u(e, n, r) {
                e.lockScroll = n,
                n && 0 != r && l(e, DIFF_INSERT) && v(e),
                (n ? t.addClass : t.rmClass)(e.lockButton, "CodeMirror-merge-scrolllock-enabled")
            }
            function h(t, e, n) {
                for (var r = n.classLocation, i = 0; i < r.length; i++)
                    t.removeLineClass(e, r[i], n.chunk),
                    t.removeLineClass(e, r[i], n.start),
                    t.removeLineClass(e, r[i], n.end)
            }
            function f(e, n, r) {
                for (var i = 0; i < n.length; ++i) {
                    var o = n[i];
                    o instanceof t.TextMarker ? o.clear() : o.parent && h(e, o, r)
                }
                n.length = 0
            }
            function d(t, e, n, r, i) {
                var o = t.getViewport();
                t.operation((function() {
                    n.from == n.to || o.from - n.to > 20 || n.from - o.to > 20 ? (f(t, n.marked, i),
                    g(t, e, r, n.marked, o.from, o.to, i),
                    n.from = o.from,
                    n.to = o.to) : (o.from < n.from && (g(t, e, r, n.marked, o.from, n.from, i),
                    n.from = o.from),
                    o.to > n.to && (g(t, e, r, n.marked, n.to, o.to, i),
                    n.to = o.to))
                }
                ))
            }
            function p(t, e, n, r, i, o) {
                for (var a = n.classLocation, s = t.getLineHandle(e), l = 0; l < a.length; l++)
                    r && t.addLineClass(s, a[l], n.chunk),
                    i && t.addLineClass(s, a[l], n.start),
                    o && t.addLineClass(s, a[l], n.end);
                return s
            }
            function g(t, n, r, i, o, a, s) {
                var l = e(0, 0)
                  , c = e(o, 0)
                  , u = t.clipPos(e(a - 1))
                  , h = r == DIFF_DELETE ? s.del : s.insert;
                function f(e, n) {
                    for (var r = Math.max(o, e), l = Math.min(a, n), c = r; c < l; ++c)
                        i.push(p(t, c, s, !0, c == e, c == n - 1));
                    e == n && r == n && l == n && (r ? i.push(p(t, r - 1, s, !1, !1, !0)) : i.push(p(t, r, s, !1, !0, !1)))
                }
                for (var d = 0, g = !1, v = 0; v < n.length; ++v) {
                    var m = n[v]
                      , y = m[0]
                      , b = m[1];
                    if (y == DIFF_EQUAL) {
                        var w = l.line + (N(n, v) ? 0 : 1);
                        K(l, b);
                        var x = l.line + (D(n, v) ? 1 : 0);
                        x > w && (g && (f(d, w),
                        g = !1),
                        d = x)
                    } else if (g = !0,
                    y == r) {
                        var _ = K(l, b, !0)
                          , k = X(c, l)
                          , C = G(u, _);
                        J(k, C) || i.push(t.markText(k, C, {
                            className: h
                        })),
                        l = _
                    }
                }
                g && f(d, l.line + 1)
            }
            function v(t) {
                if (t.showDifferences) {
                    if (t.svg) {
                        F(t.svg);
                        var e = t.gap.offsetWidth;
                        z(t.svg, "width", e, "height", t.gap.offsetHeight)
                    }
                    t.copyButtons && F(t.copyButtons);
                    for (var n = t.edit.getViewport(), r = t.orig.getViewport(), i = t.mv.wrap.getBoundingClientRect().top, o = i - t.edit.getScrollerElement().getBoundingClientRect().top + t.edit.getScrollInfo().top, a = i - t.orig.getScrollerElement().getBoundingClientRect().top + t.orig.getScrollInfo().top, s = 0; s < t.chunks.length; s++) {
                        var l = t.chunks[s];
                        l.editFrom <= n.to && l.editTo >= n.from && l.origFrom <= r.to && l.origTo >= r.from && C(t, l, a, o, e)
                    }
                }
            }
            function m(t, e) {
                for (var n = 0, r = 0, i = 0; i < e.length; i++) {
                    var o = e[i];
                    if (o.editTo > t && o.editFrom <= t)
                        return null;
                    if (o.editFrom > t)
                        break;
                    n = o.editTo,
                    r = o.origTo
                }
                return r + (t - n)
            }
            function y(t, e, n) {
                for (var r = t.state.trackAlignable, i = t.firstLine(), o = 0, a = [], s = 0; ; s++) {
                    for (var l = e[s], c = l ? n ? l.origFrom : l.editFrom : 1e9; o < r.alignable.length; o += 2) {
                        var u = r.alignable[o] + 1;
                        if (!(u <= i)) {
                            if (!(u <= c))
                                break;
                            a.push(u)
                        }
                    }
                    if (!l)
                        break;
                    a.push(i = n ? l.origTo : l.editTo)
                }
                return a
            }
            function b(t, e, n, r) {
                var i = 0
                  , o = 0
                  , a = 0
                  , s = 0;
                t: for (; ; i++) {
                    var l = t[i]
                      , c = e[o];
                    if (!l && null == c)
                        break;
                    var u = l ? l[0] : 1e9
                      , h = null == c ? 1e9 : c;
                    while (a < n.length) {
                        var f = n[a];
                        if (f.origFrom <= h && f.origTo > h) {
                            o++,
                            i--;
                            continue t
                        }
                        if (f.editTo > u) {
                            if (f.editFrom <= u)
                                continue t;
                            break
                        }
                        s += f.origTo - f.origFrom - (f.editTo - f.editFrom),
                        a++
                    }
                    if (u == h - s)
                        l[r] = h,
                        o++;
                    else if (u < h - s)
                        l[r] = u + s;
                    else {
                        var d = [h - s, null, null];
                        d[r] = h,
                        t.splice(i, 0, d),
                        o++
                    }
                }
            }
            function w(t, e) {
                var n = y(t.edit, t.chunks, !1)
                  , r = [];
                if (e)
                    for (var i = 0, o = 0; i < e.chunks.length; i++) {
                        var a = e.chunks[i].editTo;
                        while (o < n.length && n[o] < a)
                            o++;
                        o != n.length && n[o] == a || n.splice(o++, 0, a)
                    }
                for (i = 0; i < n.length; i++)
                    r.push([n[i], null, null]);
                return b(r, y(t.orig, t.chunks, !0), t.chunks, 1),
                e && b(r, y(e.orig, e.chunks, !0), e.chunks, 2),
                r
            }
            function x(t, e) {
                if (t.dealigned || e) {
                    if (!t.orig.curOp)
                        return t.orig.operation((function() {
                            x(t, e)
                        }
                        ));
                    t.dealigned = !1;
                    var n = t.mv.left == t ? t.mv.right : t.mv.left;
                    n && (i(n),
                    n.dealigned = !1);
                    for (var r = w(t, n), o = t.mv.aligners, a = 0; a < o.length; a++)
                        o[a].clear();
                    o.length = 0;
                    var s = [t.edit, t.orig]
                      , l = []
                      , c = [];
                    n && s.push(n.orig);
                    for (a = 0; a < s.length; a++)
                        l.push(s[a].getScrollInfo().top),
                        c.push(-s[a].getScrollerElement().getBoundingClientRect().top);
                    (c[0] != c[1] || 3 == s.length && c[1] != c[2]) && _(s, c, [0, 0, 0], o);
                    for (var u = 0; u < r.length; u++)
                        _(s, c, r[u], o);
                    for (a = 0; a < s.length; a++)
                        s[a].scrollTo(null, l[a])
                }
            }
            function _(t, e, n, r) {
                for (var i = -1e8, o = [], a = 0; a < t.length; a++)
                    if (null != n[a]) {
                        var s = t[a].heightAtLine(n[a], "local") - e[a];
                        o[a] = s,
                        i = Math.max(i, s)
                    }
                for (a = 0; a < t.length; a++)
                    if (null != n[a]) {
                        var l = i - o[a];
                        l > 1 && r.push(k(t[a], n[a], l))
                    }
            }
            function k(t, e, n) {
                var r = !0;
                e > t.lastLine() && (e--,
                r = !1);
                var i = document.createElement("div");
                return i.className = "CodeMirror-merge-spacer",
                i.style.height = n + "px",
                i.style.minWidth = "1px",
                t.addLineWidget(e, i, {
                    height: n,
                    above: r,
                    mergeSpacer: !0,
                    handleMouseEvents: !0
                })
            }
            function C(t, e, r, i, o) {
                var a = "left" == t.type
                  , s = t.orig.heightAtLine(e.origFrom, "local", !0) - r;
                if (t.svg) {
                    var l = s
                      , c = t.edit.heightAtLine(e.editFrom, "local", !0) - i;
                    if (a) {
                        var u = l;
                        l = c,
                        c = u
                    }
                    var h = t.orig.heightAtLine(e.origTo, "local", !0) - r
                      , f = t.edit.heightAtLine(e.editTo, "local", !0) - i;
                    if (a) {
                        u = h;
                        h = f,
                        f = u
                    }
                    var d = " C " + o / 2 + " " + c + " " + o / 2 + " " + l + " " + (o + 2) + " " + l
                      , p = " C " + o / 2 + " " + h + " " + o / 2 + " " + f + " -1 " + f;
                    z(t.svg.appendChild(document.createElementNS(n, "path")), "d", "M -1 " + c + d + " L " + (o + 2) + " " + h + p + " z", "class", t.classes.connect)
                }
                if (t.copyButtons) {
                    var g = t.copyButtons.appendChild(P("div", "left" == t.type ? "⇝" : "⇜", "CodeMirror-merge-copy"))
                      , v = t.mv.options.allowEditingOriginals;
                    if (g.title = t.edit.phrase(v ? "Push to left" : "Revert chunk"),
                    g.chunk = e,
                    g.style.top = (e.origTo > e.origFrom ? s : t.edit.heightAtLine(e.editFrom, "local") - i) + "px",
                    g.setAttribute("role", "button"),
                    v) {
                        var m = t.edit.heightAtLine(e.editFrom, "local") - i
                          , y = t.copyButtons.appendChild(P("div", "right" == t.type ? "⇝" : "⇜", "CodeMirror-merge-copy-reverse"));
                        y.title = "Push to right",
                        y.chunk = {
                            editFrom: e.origFrom,
                            editTo: e.origTo,
                            origFrom: e.editFrom,
                            origTo: e.editTo
                        },
                        y.style.top = m + "px",
                        "right" == t.type ? y.style.left = "2px" : y.style.right = "2px",
                        y.setAttribute("role", "button")
                    }
                }
            }
            function S(t, n, r, i) {
                if (!t.diffOutOfDate) {
                    var o = i.origTo > r.lastLine() ? e(i.origFrom - 1) : e(i.origFrom, 0)
                      , a = e(i.origTo, 0)
                      , s = i.editTo > n.lastLine() ? e(i.editFrom - 1) : e(i.editFrom, 0)
                      , l = e(i.editTo, 0)
                      , c = t.mv.options.revertChunk;
                    c ? c(t.mv, r, o, a, n, s, l) : n.replaceRange(r.getRange(o, a), s, l)
                }
            }
            var T, O = t.MergeView = function(e, n) {
                if (!(this instanceof O))
                    return new O(e,n);
                this.options = n;
                var i = n.origLeft
                  , o = null == n.origRight ? n.orig : n.origRight
                  , a = null != i
                  , s = null != o
                  , l = 1 + (a ? 1 : 0) + (s ? 1 : 0)
                  , c = []
                  , u = this.left = null
                  , h = this.right = null
                  , f = this;
                if (a) {
                    u = this.left = new r(this,"left");
                    var d = P("div", null, "CodeMirror-merge-pane CodeMirror-merge-left");
                    c.push(d),
                    c.push(A(u))
                }
                var p = P("div", null, "CodeMirror-merge-pane CodeMirror-merge-editor");
                if (c.push(p),
                s) {
                    h = this.right = new r(this,"right"),
                    c.push(A(h));
                    var g = P("div", null, "CodeMirror-merge-pane CodeMirror-merge-right");
                    c.push(g)
                }
                (s ? g : p).className += " CodeMirror-merge-pane-rightmost",
                c.push(P("div", null, null, "height: 0; clear: both;"));
                var m = this.wrap = e.appendChild(P("div", c, "CodeMirror-merge CodeMirror-merge-" + l + "pane"));
                this.edit = t(p, W(n)),
                u && u.init(d, i, n),
                h && h.init(g, o, n),
                n.collapseIdentical && this.editor().operation((function() {
                    I(f, n.collapseIdentical)
                }
                )),
                "align" == n.connect && (this.aligners = [],
                x(this.left || this.right, !0)),
                u && u.registerEvents(h),
                h && h.registerEvents(u);
                var y = function() {
                    u && v(u),
                    h && v(h)
                };
                t.on(window, "resize", y);
                var b = setInterval((function() {
                    for (var e = m.parentNode; e && e != document.body; e = e.parentNode)
                        ;
                    e || (clearInterval(b),
                    t.off(window, "resize", y))
                }
                ), 5e3)
            }
            ;
            function A(e) {
                var r = e.lockButton = P("div", null, "CodeMirror-merge-scrolllock");
                r.setAttribute("role", "button");
                var i = P("div", [r], "CodeMirror-merge-scrolllock-wrap");
                t.on(r, "click", (function() {
                    u(e, !e.lockScroll)
                }
                ));
                var o = [i];
                if (!1 !== e.mv.options.revertButtons && (e.copyButtons = P("div", null, "CodeMirror-merge-copybuttons-" + e.type),
                t.on(e.copyButtons, "click", (function(t) {
                    var n = t.target || t.srcElement;
                    n.chunk && ("CodeMirror-merge-copy-reverse" != n.className ? S(e, e.edit, e.orig, n.chunk) : S(e, e.orig, e.edit, n.chunk))
                }
                )),
                o.unshift(e.copyButtons)),
                "align" != e.mv.options.connect) {
                    var a = document.createElementNS && document.createElementNS(n, "svg");
                    a && !a.createSVGRect && (a = null),
                    e.svg = a,
                    a && o.push(a)
                }
                return e.gap = P("div", o, "CodeMirror-merge-gap")
            }
            function L(t) {
                return "string" == typeof t ? t : t.getValue()
            }
            function M(t, e, n) {
                T || (T = new diff_match_patch);
                for (var r = T.diff_main(t, e), i = 0; i < r.length; ++i) {
                    var o = r[i];
                    (n ? /[^ \t]/.test(o[1]) : o[1]) ? i && r[i - 1][0] == o[0] && (r.splice(i--, 1),
                    r[i][1] += o[1]) : r.splice(i--, 1)
                }
                return r
            }
            function E(t) {
                var n = [];
                if (!t.length)
                    return n;
                for (var r = 0, i = 0, o = e(0, 0), a = e(0, 0), s = 0; s < t.length; ++s) {
                    var l = t[s]
                      , c = l[0];
                    if (c == DIFF_EQUAL) {
                        var u = !N(t, s) || o.line < r || a.line < i ? 1 : 0
                          , h = o.line + u
                          , f = a.line + u;
                        K(o, l[1], null, a);
                        var d = D(t, s) ? 1 : 0
                          , p = o.line + d
                          , g = a.line + d;
                        p > h && (s && n.push({
                            origFrom: i,
                            origTo: f,
                            editFrom: r,
                            editTo: h
                        }),
                        r = p,
                        i = g)
                    } else
                        K(c == DIFF_INSERT ? o : a, l[1])
                }
                return (r <= o.line || i <= a.line) && n.push({
                    origFrom: i,
                    origTo: a.line + 1,
                    editFrom: r,
                    editTo: o.line + 1
                }),
                n
            }
            function D(t, e) {
                if (e == t.length - 1)
                    return !0;
                var n = t[e + 1][1];
                return !(1 == n.length && e < t.length - 2 || 10 != n.charCodeAt(0)) && (e == t.length - 2 || (n = t[e + 2][1],
                (n.length > 1 || e == t.length - 3) && 10 == n.charCodeAt(0)))
            }
            function N(t, e) {
                if (0 == e)
                    return !0;
                var n = t[e - 1][1];
                return 10 == n.charCodeAt(n.length - 1) && (1 == e || (n = t[e - 2][1],
                10 == n.charCodeAt(n.length - 1)))
            }
            function R(t, e, n) {
                for (var r, i, o, a, s = 0; s < t.length; s++) {
                    var l = t[s]
                      , c = n ? l.editFrom : l.origFrom
                      , u = n ? l.editTo : l.origTo;
                    null == i && (c > e ? (i = l.editFrom,
                    a = l.origFrom) : u > e && (i = l.editTo,
                    a = l.origTo)),
                    u <= e ? (r = l.editTo,
                    o = l.origTo) : c <= e && (r = l.editFrom,
                    o = l.origFrom)
                }
                return {
                    edit: {
                        before: r,
                        after: i
                    },
                    orig: {
                        before: o,
                        after: a
                    }
                }
            }
            function j(n, r, i) {
                n.addLineClass(r, "wrap", "CodeMirror-merge-collapsed-line");
                var o = document.createElement("span");
                o.className = "CodeMirror-merge-collapsed-widget",
                o.title = n.phrase("Identical text collapsed. Click to expand.");
                var a = n.markText(e(r, 0), e(i - 1), {
                    inclusiveLeft: !0,
                    inclusiveRight: !0,
                    replacedWith: o,
                    clearOnEnter: !0
                });
                function s() {
                    a.clear(),
                    n.removeLineClass(r, "wrap", "CodeMirror-merge-collapsed-line")
                }
                return a.explicitlyCleared && s(),
                t.on(o, "click", s),
                a.on("clear", s),
                t.on(o, "click", s),
                {
                    mark: a,
                    clear: s
                }
            }
            function H(t, e) {
                var n = [];
                function r() {
                    for (var t = 0; t < n.length; t++)
                        n[t].clear()
                }
                for (var i = 0; i < e.length; i++) {
                    var o = e[i]
                      , a = j(o.cm, o.line, o.line + t);
                    n.push(a),
                    a.mark.on("clear", r)
                }
                return n[0].mark
            }
            function B(t, e, n, r) {
                for (var i = 0; i < t.chunks.length; i++)
                    for (var o = t.chunks[i], a = o.editFrom - e; a < o.editTo + e; a++) {
                        var s = a + n;
                        s >= 0 && s < r.length && (r[s] = !1)
                    }
            }
            function I(t, e) {
                "number" != typeof e && (e = 2);
                for (var n = [], r = t.editor(), i = r.firstLine(), o = i, a = r.lastLine(); o <= a; o++)
                    n.push(!0);
                t.left && B(t.left, e, i, n),
                t.right && B(t.right, e, i, n);
                for (var s = 0; s < n.length; s++)
                    if (n[s]) {
                        for (var l = s + i, c = 1; s < n.length - 1 && n[s + 1]; s++,
                        c++)
                            ;
                        if (c > e) {
                            var u = [{
                                line: l,
                                cm: r
                            }];
                            t.left && u.push({
                                line: m(l, t.left.chunks),
                                cm: t.left.orig
                            }),
                            t.right && u.push({
                                line: m(l, t.right.chunks),
                                cm: t.right.orig
                            });
                            var h = H(c, u);
                            t.options.onCollapse && t.options.onCollapse(t, l, c, h)
                        }
                    }
            }
            function P(t, e, n, r) {
                var i = document.createElement(t);
                if (n && (i.className = n),
                r && (i.style.cssText = r),
                "string" == typeof e)
                    i.appendChild(document.createTextNode(e));
                else if (e)
                    for (var o = 0; o < e.length; ++o)
                        i.appendChild(e[o]);
                return i
            }
            function F(t) {
                for (var e = t.childNodes.length; e > 0; --e)
                    t.removeChild(t.firstChild)
            }
            function z(t) {
                for (var e = 1; e < arguments.length; e += 2)
                    t.setAttribute(arguments[e], arguments[e + 1])
            }
            function W(t, e) {
                for (var n in e || (e = {}),
                t)
                    t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }
            function K(t, n, r, i) {
                for (var o = r ? e(t.line, t.ch) : t, a = 0; ; ) {
                    var s = n.indexOf("\n", a);
                    if (-1 == s)
                        break;
                    ++o.line,
                    i && ++i.line,
                    a = s + 1
                }
                return o.ch = (a ? 0 : o.ch) + (n.length - a),
                i && (i.ch = (a ? 0 : i.ch) + (n.length - a)),
                o
            }
            O.prototype = {
                constructor: O,
                editor: function() {
                    return this.edit
                },
                rightOriginal: function() {
                    return this.right && this.right.orig
                },
                leftOriginal: function() {
                    return this.left && this.left.orig
                },
                setShowDifferences: function(t) {
                    this.right && this.right.setShowDifferences(t),
                    this.left && this.left.setShowDifferences(t)
                },
                rightChunks: function() {
                    if (this.right)
                        return i(this.right),
                        this.right.chunks
                },
                leftChunks: function() {
                    if (this.left)
                        return i(this.left),
                        this.left.chunks
                }
            };
            var U = 1
              , V = 2
              , $ = 4;
            function q(t) {
                this.cm = t,
                this.alignable = [],
                this.height = t.doc.height;
                var e = this;
                t.on("markerAdded", (function(t, n) {
                    if (n.collapsed) {
                        var r = n.find(1);
                        null != r && e.set(r.line, $)
                    }
                }
                )),
                t.on("markerCleared", (function(t, n, r, i) {
                    null != i && n.collapsed && e.check(i, $, e.hasMarker)
                }
                )),
                t.on("markerChanged", this.signal.bind(this)),
                t.on("lineWidgetAdded", (function(t, n, r) {
                    n.mergeSpacer || (n.above ? e.set(r - 1, V) : e.set(r, U))
                }
                )),
                t.on("lineWidgetCleared", (function(t, n, r) {
                    n.mergeSpacer || (n.above ? e.check(r - 1, V, e.hasWidgetBelow) : e.check(r, U, e.hasWidget))
                }
                )),
                t.on("lineWidgetChanged", this.signal.bind(this)),
                t.on("change", (function(t, n) {
                    var r = n.from.line
                      , i = n.to.line - n.from.line
                      , o = n.text.length - 1
                      , a = r + o;
                    (i || o) && e.map(r, i, o),
                    e.check(a, $, e.hasMarker),
                    (i || o) && e.check(n.from.line, $, e.hasMarker)
                }
                )),
                t.on("viewportChange", (function() {
                    e.cm.doc.height != e.height && e.signal()
                }
                ))
            }
            function G(t, e) {
                return (t.line - e.line || t.ch - e.ch) < 0 ? t : e
            }
            function X(t, e) {
                return (t.line - e.line || t.ch - e.ch) > 0 ? t : e
            }
            function J(t, e) {
                return t.line == e.line && t.ch == e.ch
            }
            function Y(t, e, n) {
                for (var r = t.length - 1; r >= 0; r--) {
                    var i = t[r]
                      , o = (n ? i.origTo : i.editTo) - 1;
                    if (o < e)
                        return o
                }
            }
            function Z(t, e, n) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r]
                      , o = n ? i.origFrom : i.editFrom;
                    if (o > e)
                        return o
                }
            }
            function Q(e, n) {
                var r = null
                  , o = e.state.diffViews
                  , a = e.getCursor().line;
                if (o)
                    for (var s = 0; s < o.length; s++) {
                        var l = o[s]
                          , c = e == l.orig;
                        i(l);
                        var u = n < 0 ? Y(l.chunks, a, c) : Z(l.chunks, a, c);
                        null == u || null != r && !(n < 0 ? u > r : u < r) || (r = u)
                    }
                if (null == r)
                    return t.Pass;
                e.setCursor(r, 0)
            }
            q.prototype = {
                signal: function() {
                    t.signal(this, "realign"),
                    this.height = this.cm.doc.height
                },
                set: function(t, e) {
                    for (var n = -1; n < this.alignable.length; n += 2) {
                        var r = this.alignable[n] - t;
                        if (0 == r) {
                            if ((this.alignable[n + 1] & e) == e)
                                return;
                            return this.alignable[n + 1] |= e,
                            void this.signal()
                        }
                        if (r > 0)
                            break
                    }
                    this.signal(),
                    this.alignable.splice(n, 0, t, e)
                },
                find: function(t) {
                    for (var e = 0; e < this.alignable.length; e += 2)
                        if (this.alignable[e] == t)
                            return e;
                    return -1
                },
                check: function(t, e, n) {
                    var r = this.find(t);
                    if (-1 != r && this.alignable[r + 1] & e && !n.call(this, t)) {
                        this.signal();
                        var i = this.alignable[r + 1] & ~e;
                        i ? this.alignable[r + 1] = i : this.alignable.splice(r, 2)
                    }
                },
                hasMarker: function(t) {
                    var e = this.cm.getLineHandle(t);
                    if (e.markedSpans)
                        for (var n = 0; n < e.markedSpans.length; n++)
                            if (e.markedSpans[n].marker.collapsed && null != e.markedSpans[n].to)
                                return !0;
                    return !1
                },
                hasWidget: function(t) {
                    var e = this.cm.getLineHandle(t);
                    if (e.widgets)
                        for (var n = 0; n < e.widgets.length; n++)
                            if (!e.widgets[n].above && !e.widgets[n].mergeSpacer)
                                return !0;
                    return !1
                },
                hasWidgetBelow: function(t) {
                    if (t == this.cm.lastLine())
                        return !1;
                    var e = this.cm.getLineHandle(t + 1);
                    if (e.widgets)
                        for (var n = 0; n < e.widgets.length; n++)
                            if (e.widgets[n].above && !e.widgets[n].mergeSpacer)
                                return !0;
                    return !1
                },
                map: function(t, e, n) {
                    for (var r = n - e, i = t + e, o = -1, a = -1, s = 0; s < this.alignable.length; s += 2) {
                        var l = this.alignable[s];
                        l == t && this.alignable[s + 1] & V && (o = s),
                        l == i && this.alignable[s + 1] & V && (a = s),
                        l <= t || (l < i ? this.alignable.splice(s--, 2) : this.alignable[s] += r)
                    }
                    if (o > -1) {
                        var c = this.alignable[o + 1];
                        c == V ? this.alignable.splice(o, 2) : this.alignable[o + 1] = c & ~V
                    }
                    a > -1 && n && this.set(t + n, V)
                }
            },
            t.commands.goNextDiff = function(t) {
                return Q(t, 1)
            }
            ,
            t.commands.goPrevDiff = function(t) {
                return Q(t, -1)
            }
        }
        ))
    },
    c8d2: function(t, e, n) {
        var r = n("5e77").PROPER
          , i = n("d039")
          , o = n("5899")
          , a = "​᠎";
        t.exports = function(t) {
            return i((function() {
                return !!o[t]() || a[t]() !== a || r && o[t].name !== t
            }
            ))
        }
    },
    c8f8: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("1da1")
          , i = n("d4ec")
          , o = n("bee2")
          , a = n("262e")
          , s = n("2caf")
          , l = (n("96cf"),
        n("9ab4"))
          , c = n("82cd")
          , u = n("1b40")
          , h = n("d142")
          , f = function(t) {
            Object(a["a"])(n, t);
            var e = Object(s["a"])(n);
            function n() {
                return Object(i["a"])(this, n),
                e.apply(this, arguments)
            }
            return Object(o["a"])(n, [{
                key: "run",
                value: function() {
                    var t = Object(r["a"])(regeneratorRuntime.mark((function t() {
                        var e;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    e = this.trimStr(this.inputStr),
                                    e.length > 0 && (this.outputStr = Object(h["a"])(e),
                                    this.randomkey = this.createRamdomKey());
                                case 2:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }]),
            n
        }(c["a"]);
        f = Object(l["a"])([Object(u["a"])({
            components: {
                CodeContent: c["a"]
            },
            props: {
                tip: {
                    type: String,
                    default: '输入待格式化JS\n(function test(){console.log("hello word")})()'
                },
                outputTip: {
                    type: String,
                    default: '//输出\n(function test() {\n    console.log("hello word")\n})()'
                },
                language: {
                    type: String,
                    default: "javascript"
                }
            }
        })], f);
        var d, p, g = f, v = g, m = n("2877"), y = Object(m["a"])(v, d, p, !1, null, null, null);
        e["default"] = y.exports
    },
    caad: function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , i = n("4d64").includes
          , o = n("44d2");
        r({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        o("includes")
    },
    cf94: function(t, e, n) {},
    d142: function(t, e, n) {
        "use strict";
        n("ac1f"),
        n("466d"),
        n("1276"),
        n("a15b");
        function r(t, e, n, r) {
            var i, o, a, s, l, c, u, h, f, d, p, g, v, m, y, b, w, x, _, k;
            function C() {
                while (o.length && (" " === o[o.length - 1] || o[o.length - 1] === f))
                    o.pop()
            }
            function S(t) {
                if (t = "undefined" === typeof t || t,
                C(),
                o.length) {
                    "\n" === o[o.length - 1] && t || o.push("\n");
                    for (var e = 0; e < r; e++)
                        o.push(f)
                }
            }
            function T() {
                var t = o.length ? o[o.length - 1] : " ";
                " " !== t && "\n" !== t && t !== f && o.push(" ")
            }
            function O() {
                o.push(a)
            }
            function A() {
                r++
            }
            function L() {
                r && r--
            }
            function M() {
                o.length && o[o.length - 1] === f && o.pop()
            }
            function E(t) {
                h.push(u),
                u = t
            }
            function D() {
                x = "DO_BLOCK" === u,
                u = h.pop()
            }
            function N(t, e) {
                for (var n = 0; n < e.length; n++)
                    if (e[n] === t)
                        return !0;
                return !1
            }
            function R() {
                var t = 0
                  , e = "";
                do {
                    if (v >= i.length)
                        return ["", "TK_EOF"];
                    e = i.charAt(v),
                    v += 1,
                    "\n" === e && (t += 1)
                } while (N(e, d));
                if (t > 1)
                    for (var n = 0; n < 2; n++)
                        S(0 === n);
                var r = 1 === t;
                if (N(e, p)) {
                    if (v < i.length)
                        while (N(i.charAt(v), p))
                            if (e += i.charAt(v),
                            v += 1,
                            v === i.length)
                                break;
                    if (v !== i.length && e.match(/^[0-9]+[Ee]$/) && "-" === i.charAt(v)) {
                        v += 1;
                        var o = R(v);
                        return e += "-" + o[0],
                        [e, "TK_WORD"]
                    }
                    return "in" === e ? [e, "TK_OPERATOR"] : [e, "TK_WORD"]
                }
                if ("(" === e || "[" === e)
                    return [e, "TK_START_EXPR"];
                if (")" === e || "]" === e)
                    return [e, "TK_END_EXPR"];
                if ("{" === e)
                    return [e, "TK_START_BLOCK"];
                if ("}" === e)
                    return [e, "TK_END_BLOCK"];
                if (";" === e)
                    return [e, "TK_END_COMMAND"];
                if ("/" === e) {
                    var a = "";
                    if ("*" === i.charAt(v)) {
                        if (v += 1,
                        v < i.length)
                            while (("*" !== i.charAt(v) || !i.charAt(v + 1) || "/" !== i.charAt(v + 1)) && v < i.length)
                                if (a += i.charAt(v),
                                v += 1,
                                v >= i.length)
                                    break;
                        return v += 2,
                        ["/*" + a + "*/", "TK_BLOCK_COMMENT"]
                    }
                    if ("/" === i.charAt(v)) {
                        a = e;
                        while ("\r" !== i.charAt(v) && "\n" !== i.charAt(v))
                            if (a += i.charAt(v),
                            v += 1,
                            v >= i.length)
                                break;
                        return v += 1,
                        r && S(),
                        [a, "TK_COMMENT"]
                    }
                }
                if ("'" === e || '"' === e || "/" === e && ("TK_WORD" === s && "return" === l || "TK_START_EXPR" === s || "TK_END_BLOCK" === s || "TK_OPERATOR" === s || "TK_EOF" === s || "TK_END_COMMAND" === s)) {
                    var c = e
                      , u = !1;
                    if (e = "",
                    v < i.length)
                        while (u || i.charAt(v) !== c)
                            if (e += i.charAt(v),
                            u = !u && "\\" === i.charAt(v),
                            v += 1,
                            v >= i.length)
                                break;
                    return v += 1,
                    "TK_END_COMMAND" === s && S(),
                    [c + e + c, "TK_STRING"]
                }
                if (N(e, g)) {
                    while (v < i.length && N(e + i.charAt(v), g))
                        if (e += i.charAt(v),
                        v += 1,
                        v >= i.length)
                            break;
                    return [e, "TK_OPERATOR"]
                }
                return [e, "TK_UNKNOWN"]
            }
            n = n || " ",
            e = e || 4,
            f = "";
            while (e--)
                f += n;
            i = t,
            c = "",
            s = "TK_START_EXPR",
            l = "",
            o = [],
            x = !1,
            _ = !1,
            k = !1,
            d = "\n\r\t ".split(""),
            p = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_$".split(""),
            g = "+ - * / % & ++ -- = += -= *= /= %= == === != !== > < >= <= >> << >>> >>>= >>= <<= && &= | || ! !! , : ? ^ ^= |= =>".split(" "),
            m = "continue,try,throw,return,var,if,switch,case,default,for,while,break,function".split(","),
            u = "BLOCK",
            h = [u],
            r = r || 0,
            v = 0,
            y = !1;
            while ("TK_EOF" !== w) {
                var j = R(v);
                if (a = j[0],
                w = j[1],
                "TK_EOF" === w)
                    break;
                switch (w) {
                case "TK_START_EXPR":
                    _ = !1,
                    E("EXPRESSION"),
                    "TK_END_EXPR" === s || "TK_START_EXPR" === s || ("TK_WORD" !== s && "TK_OPERATOR" !== s || N(c, m) && "function" !== c) && T(),
                    O();
                    break;
                case "TK_END_EXPR":
                    O(),
                    D();
                    break;
                case "TK_START_BLOCK":
                    E("do" === c ? "DO_BLOCK" : "BLOCK"),
                    "TK_OPERATOR" !== s && "TK_START_EXPR" !== s && ("TK_START_BLOCK" === s ? S() : T()),
                    O(),
                    A();
                    break;
                case "TK_END_BLOCK":
                    "TK_START_BLOCK" === s ? (C(),
                    L()) : (L(),
                    S()),
                    O(),
                    D();
                    break;
                case "TK_WORD":
                    if (x) {
                        T(),
                        O(),
                        T();
                        break
                    }
                    if ("case" === a || "default" === a) {
                        ":" === l ? M() : (L(),
                        S(),
                        A()),
                        O(),
                        y = !0;
                        break
                    }
                    b = "NONE",
                    "TK_END_BLOCK" === s ? N(a.toLowerCase(), ["else", "catch", "finally"]) ? (b = "SPACE",
                    T()) : b = "NEWLINE" : "TK_END_COMMAND" !== s || "BLOCK" !== u && "DO_BLOCK" !== u ? "TK_END_COMMAND" === s && "EXPRESSION" === u || "TK_WORD" === s ? b = "SPACE" : "TK_START_BLOCK" === s ? b = "NEWLINE" : "TK_END_EXPR" === s && (T(),
                    b = "NEWLINE") : b = "NEWLINE",
                    "TK_END_BLOCK" !== s && N(a.toLowerCase(), ["else", "catch", "finally"]) ? S() : N(a, m) || "NEWLINE" === b ? "else" === l ? T() : ("TK_START_EXPR" !== s && "=" !== l || "function" !== a) && ("TK_WORD" !== s || "return" !== l && "throw" !== l ? "TK_END_EXPR" !== s ? "TK_START_EXPR" === s && "var" === a || ":" === l || ("if" === a && "TK_WORD" === s && "else" === c ? T() : S()) : N(a, m) && ")" !== l && S() : T()) : "SPACE" === b && T(),
                    O(),
                    c = a,
                    "var" === a && (_ = !0,
                    k = !1);
                    break;
                case "TK_END_COMMAND":
                    O(),
                    _ = !1;
                    break;
                case "TK_STRING":
                    "TK_START_BLOCK" === s || "TK_END_BLOCK" === s ? S() : "TK_WORD" === s && T(),
                    O();
                    break;
                case "TK_OPERATOR":
                    var H = !0
                      , B = !0;
                    if (_ && "," !== a && (k = !0,
                    ":" === a && (_ = !1)),
                    ":" === a && y) {
                        O(),
                        S();
                        break
                    }
                    if (y = !1,
                    "," === a) {
                        _ ? k ? (O(),
                        S(),
                        k = !1) : (O(),
                        T()) : "TK_END_BLOCK" === s || "BLOCK" === u ? (O(),
                        S()) : (O(),
                        T());
                        break
                    }
                    "--" === a || "++" === a ? ";" === l ? (H = !0,
                    B = !1) : (H = !1,
                    B = !1) : "!" === a && "TK_START_EXPR" === s || "TK_OPERATOR" === s ? (H = !1,
                    B = !1) : "TK_END_EXPR" === s ? (H = !0,
                    B = !0) : "." === a ? (H = !1,
                    B = !1) : ":" === a && (H = !!l.match(/^\d+$/)),
                    H && T(),
                    O(),
                    B && T();
                    break;
                case "TK_BLOCK_COMMENT":
                    S(),
                    O(),
                    S();
                    break;
                case "TK_COMMENT":
                    T(),
                    O(),
                    S();
                    break;
                case "TK_UNKNOWN":
                    O();
                    break
                }
                s = w,
                l = a
            }
            return o.join("")
        }
        e["a"] = r
    },
    d428: function(t, e, n) {
        "use strict";
        n("38f8")
    },
    d6e6: function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("3252"))
        }
        )(0, (function(t) {
            return function() {
                var e = t
                  , n = e.lib
                  , r = n.Hasher
                  , i = e.x64
                  , o = i.Word
                  , a = i.WordArray
                  , s = e.algo;
                function l() {
                    return o.create.apply(o, arguments)
                }
                var c = [l(1116352408, 3609767458), l(1899447441, 602891725), l(3049323471, 3964484399), l(3921009573, 2173295548), l(961987163, 4081628472), l(1508970993, 3053834265), l(2453635748, 2937671579), l(2870763221, 3664609560), l(3624381080, 2734883394), l(310598401, 1164996542), l(607225278, 1323610764), l(1426881987, 3590304994), l(1925078388, 4068182383), l(2162078206, 991336113), l(2614888103, 633803317), l(3248222580, 3479774868), l(3835390401, 2666613458), l(4022224774, 944711139), l(264347078, 2341262773), l(604807628, 2007800933), l(770255983, 1495990901), l(1249150122, 1856431235), l(1555081692, 3175218132), l(1996064986, 2198950837), l(2554220882, 3999719339), l(2821834349, 766784016), l(2952996808, 2566594879), l(3210313671, 3203337956), l(3336571891, 1034457026), l(3584528711, 2466948901), l(113926993, 3758326383), l(338241895, 168717936), l(666307205, 1188179964), l(773529912, 1546045734), l(1294757372, 1522805485), l(1396182291, 2643833823), l(1695183700, 2343527390), l(1986661051, 1014477480), l(2177026350, 1206759142), l(2456956037, 344077627), l(2730485921, 1290863460), l(2820302411, 3158454273), l(3259730800, 3505952657), l(3345764771, 106217008), l(3516065817, 3606008344), l(3600352804, 1432725776), l(4094571909, 1467031594), l(275423344, 851169720), l(430227734, 3100823752), l(506948616, 1363258195), l(659060556, 3750685593), l(883997877, 3785050280), l(958139571, 3318307427), l(1322822218, 3812723403), l(1537002063, 2003034995), l(1747873779, 3602036899), l(1955562222, 1575990012), l(2024104815, 1125592928), l(2227730452, 2716904306), l(2361852424, 442776044), l(2428436474, 593698344), l(2756734187, 3733110249), l(3204031479, 2999351573), l(3329325298, 3815920427), l(3391569614, 3928383900), l(3515267271, 566280711), l(3940187606, 3454069534), l(4118630271, 4000239992), l(116418474, 1914138554), l(174292421, 2731055270), l(289380356, 3203993006), l(460393269, 320620315), l(685471733, 587496836), l(852142971, 1086792851), l(1017036298, 365543100), l(1126000580, 2618297676), l(1288033470, 3409855158), l(1501505948, 4234509866), l(1607167915, 987167468), l(1816402316, 1246189591)]
                  , u = [];
                (function() {
                    for (var t = 0; t < 80; t++)
                        u[t] = l()
                }
                )();
                var h = s.SHA512 = r.extend({
                    _doReset: function() {
                        this._hash = new a.init([new o.init(1779033703,4089235720), new o.init(3144134277,2227873595), new o.init(1013904242,4271175723), new o.init(2773480762,1595750129), new o.init(1359893119,2917565137), new o.init(2600822924,725511199), new o.init(528734635,4215389547), new o.init(1541459225,327033209)])
                    },
                    _doProcessBlock: function(t, e) {
                        for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], a = n[3], s = n[4], l = n[5], h = n[6], f = n[7], d = r.high, p = r.low, g = i.high, v = i.low, m = o.high, y = o.low, b = a.high, w = a.low, x = s.high, _ = s.low, k = l.high, C = l.low, S = h.high, T = h.low, O = f.high, A = f.low, L = d, M = p, E = g, D = v, N = m, R = y, j = b, H = w, B = x, I = _, P = k, F = C, z = S, W = T, K = O, U = A, V = 0; V < 80; V++) {
                            var $, q, G = u[V];
                            if (V < 16)
                                q = G.high = 0 | t[e + 2 * V],
                                $ = G.low = 0 | t[e + 2 * V + 1];
                            else {
                                var X = u[V - 15]
                                  , J = X.high
                                  , Y = X.low
                                  , Z = (J >>> 1 | Y << 31) ^ (J >>> 8 | Y << 24) ^ J >>> 7
                                  , Q = (Y >>> 1 | J << 31) ^ (Y >>> 8 | J << 24) ^ (Y >>> 7 | J << 25)
                                  , tt = u[V - 2]
                                  , et = tt.high
                                  , nt = tt.low
                                  , rt = (et >>> 19 | nt << 13) ^ (et << 3 | nt >>> 29) ^ et >>> 6
                                  , it = (nt >>> 19 | et << 13) ^ (nt << 3 | et >>> 29) ^ (nt >>> 6 | et << 26)
                                  , ot = u[V - 7]
                                  , at = ot.high
                                  , st = ot.low
                                  , lt = u[V - 16]
                                  , ct = lt.high
                                  , ut = lt.low;
                                $ = Q + st,
                                q = Z + at + ($ >>> 0 < Q >>> 0 ? 1 : 0),
                                $ += it,
                                q = q + rt + ($ >>> 0 < it >>> 0 ? 1 : 0),
                                $ += ut,
                                q = q + ct + ($ >>> 0 < ut >>> 0 ? 1 : 0),
                                G.high = q,
                                G.low = $
                            }
                            var ht = B & P ^ ~B & z
                              , ft = I & F ^ ~I & W
                              , dt = L & E ^ L & N ^ E & N
                              , pt = M & D ^ M & R ^ D & R
                              , gt = (L >>> 28 | M << 4) ^ (L << 30 | M >>> 2) ^ (L << 25 | M >>> 7)
                              , vt = (M >>> 28 | L << 4) ^ (M << 30 | L >>> 2) ^ (M << 25 | L >>> 7)
                              , mt = (B >>> 14 | I << 18) ^ (B >>> 18 | I << 14) ^ (B << 23 | I >>> 9)
                              , yt = (I >>> 14 | B << 18) ^ (I >>> 18 | B << 14) ^ (I << 23 | B >>> 9)
                              , bt = c[V]
                              , wt = bt.high
                              , xt = bt.low
                              , _t = U + yt
                              , kt = K + mt + (_t >>> 0 < U >>> 0 ? 1 : 0)
                              , Ct = (_t = _t + ft,
                            kt = kt + ht + (_t >>> 0 < ft >>> 0 ? 1 : 0),
                            _t = _t + xt,
                            kt = kt + wt + (_t >>> 0 < xt >>> 0 ? 1 : 0),
                            _t = _t + $,
                            kt = kt + q + (_t >>> 0 < $ >>> 0 ? 1 : 0),
                            vt + pt)
                              , St = gt + dt + (Ct >>> 0 < vt >>> 0 ? 1 : 0);
                            K = z,
                            U = W,
                            z = P,
                            W = F,
                            P = B,
                            F = I,
                            I = H + _t | 0,
                            B = j + kt + (I >>> 0 < H >>> 0 ? 1 : 0) | 0,
                            j = N,
                            H = R,
                            N = E,
                            R = D,
                            E = L,
                            D = M,
                            M = _t + Ct | 0,
                            L = kt + St + (M >>> 0 < _t >>> 0 ? 1 : 0) | 0
                        }
                        p = r.low = p + M,
                        r.high = d + L + (p >>> 0 < M >>> 0 ? 1 : 0),
                        v = i.low = v + D,
                        i.high = g + E + (v >>> 0 < D >>> 0 ? 1 : 0),
                        y = o.low = y + R,
                        o.high = m + N + (y >>> 0 < R >>> 0 ? 1 : 0),
                        w = a.low = w + H,
                        a.high = b + j + (w >>> 0 < H >>> 0 ? 1 : 0),
                        _ = s.low = _ + I,
                        s.high = x + B + (_ >>> 0 < I >>> 0 ? 1 : 0),
                        C = l.low = C + F,
                        l.high = k + P + (C >>> 0 < F >>> 0 ? 1 : 0),
                        T = h.low = T + W,
                        h.high = S + z + (T >>> 0 < W >>> 0 ? 1 : 0),
                        A = f.low = A + U,
                        f.high = O + K + (A >>> 0 < U >>> 0 ? 1 : 0)
                    },
                    _doFinalize: function() {
                        var t = this._data
                          , e = t.words
                          , n = 8 * this._nDataBytes
                          , r = 8 * t.sigBytes;
                        e[r >>> 5] |= 128 << 24 - r % 32,
                        e[30 + (r + 128 >>> 10 << 5)] = Math.floor(n / 4294967296),
                        e[31 + (r + 128 >>> 10 << 5)] = n,
                        t.sigBytes = 4 * e.length,
                        this._process();
                        var i = this._hash.toX32();
                        return i
                    },
                    clone: function() {
                        var t = r.clone.call(this);
                        return t._hash = this._hash.clone(),
                        t
                    },
                    blockSize: 32
                });
                e.SHA512 = r._createHelper(h),
                e.HmacSHA512 = r._createHmacHelper(h)
            }(),
            t.SHA512
        }
        ))
    },
    d81d: function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , i = n("b727").map
          , o = n("1dde")
          , a = o("map");
        r({
            target: "Array",
            proto: !0,
            forced: !a
        }, {
            map: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    },
    d8a8: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("e860")
          , i = n.n(r);
        for (var o in r)
            ["default"].indexOf(o) < 0 && function(t) {
                n.d(e, t, (function() {
                    return r[t]
                }
                ))
            }(o);
        e["default"] = i.a
    },
    d937: function(t, e, n) {
        "use strict";
        n("8c60")
    },
    d9e3: function(t, e, n) {
        "use strict";
        n("b7c4")
    },
    db07: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("CodeContent", {
                attrs: {
                    tip: t.tip,
                    formatType: t.formatType,
                    outputTip: t.outputTip
                }
            })], 1)
        }
          , i = []
          , o = n("d4ec")
          , a = n("262e")
          , s = n("2caf")
          , l = n("9ab4")
          , c = n("82cd")
          , u = n("1b40")
          , h = function(t) {
            Object(a["a"])(n, t);
            var e = Object(s["a"])(n);
            function n() {
                var t;
                return Object(o["a"])(this, n),
                t = e.apply(this, arguments),
                t.formatType = "url_params_parse",
                t.tip = "输入待解析参数的url，如\nhttps://www.baidu.com/s?wd=feapder&pn=10\n  ",
                t.outputTip = '# 输出：\nurl = "https://www.baidu.com/s"\nparams = {\n    "wd": "feapder",\n    "pn": "10"\n}',
                t
            }
            return n
        }(u["c"]);
        h = Object(l["a"])([Object(u["a"])({
            components: {
                CodeContent: c["a"]
            }
        })], h);
        var f = h
          , d = f
          , p = n("2877")
          , g = Object(p["a"])(d, r, i, !1, null, "24e7dff8", null);
        e["default"] = g.exports
    },
    db91: function(t, e, n) {
        (function(t) {
            t(n("56b3"))
        }
        )((function(t) {
            "use strict";
            function e(t) {
                return new RegExp("^((" + t.join(")|(") + "))\\b")
            }
            var n = e(["and", "or", "not", "is"])
              , r = ["as", "assert", "break", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "lambda", "pass", "raise", "return", "try", "while", "with", "yield", "in"]
              , i = ["abs", "all", "any", "bin", "bool", "bytearray", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip", "__import__", "NotImplemented", "Ellipsis", "__debug__"];
            function o(t) {
                return t.scopes[t.scopes.length - 1]
            }
            t.registerHelper("hintWords", "python", r.concat(i)),
            t.defineMode("python", (function(a, s) {
                for (var l = "error", c = s.delimiters || s.singleDelimiters || /^[\(\)\[\]\{\}@,:`=;\.\\]/, u = [s.singleOperators, s.doubleOperators, s.doubleDelimiters, s.tripleDelimiters, s.operators || /^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/], h = 0; h < u.length; h++)
                    u[h] || u.splice(h--, 1);
                var f = s.hangingIndent || a.indentUnit
                  , d = r
                  , p = i;
                void 0 != s.extra_keywords && (d = d.concat(s.extra_keywords)),
                void 0 != s.extra_builtins && (p = p.concat(s.extra_builtins));
                var g = !(s.version && Number(s.version) < 3);
                if (g) {
                    var v = s.identifiers || /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
                    d = d.concat(["nonlocal", "False", "True", "None", "async", "await"]),
                    p = p.concat(["ascii", "bytes", "exec", "print"]);
                    var m = new RegExp("^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|\"{3}|['\"]))","i")
                } else {
                    v = s.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/;
                    d = d.concat(["exec", "print"]),
                    p = p.concat(["apply", "basestring", "buffer", "cmp", "coerce", "execfile", "file", "intern", "long", "raw_input", "reduce", "reload", "unichr", "unicode", "xrange", "False", "True", "None"]);
                    m = new RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))","i")
                }
                var y = e(d)
                  , b = e(p);
                function w(t, e) {
                    var n = t.sol() && "\\" != e.lastToken;
                    if (n && (e.indent = t.indentation()),
                    n && "py" == o(e).type) {
                        var r = o(e).offset;
                        if (t.eatSpace()) {
                            var i = t.indentation();
                            return i > r ? C(e) : i < r && T(t, e) && "#" != t.peek() && (e.errorToken = !0),
                            null
                        }
                        var a = x(t, e);
                        return r > 0 && T(t, e) && (a += " " + l),
                        a
                    }
                    return x(t, e)
                }
                function x(t, e, r) {
                    if (t.eatSpace())
                        return null;
                    if (!r && t.match(/^#.*/))
                        return "comment";
                    if (t.match(/^[0-9\.]/, !1)) {
                        var i = !1;
                        if (t.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i) && (i = !0),
                        t.match(/^[\d_]+\.\d*/) && (i = !0),
                        t.match(/^\.\d+/) && (i = !0),
                        i)
                            return t.eat(/J/i),
                            "number";
                        var o = !1;
                        if (t.match(/^0x[0-9a-f_]+/i) && (o = !0),
                        t.match(/^0b[01_]+/i) && (o = !0),
                        t.match(/^0o[0-7_]+/i) && (o = !0),
                        t.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/) && (t.eat(/J/i),
                        o = !0),
                        t.match(/^0(?![\dx])/i) && (o = !0),
                        o)
                            return t.eat(/L/i),
                            "number"
                    }
                    if (t.match(m)) {
                        var a = -1 !== t.current().toLowerCase().indexOf("f");
                        return a ? (e.tokenize = _(t.current(), e.tokenize),
                        e.tokenize(t, e)) : (e.tokenize = k(t.current(), e.tokenize),
                        e.tokenize(t, e))
                    }
                    for (var s = 0; s < u.length; s++)
                        if (t.match(u[s]))
                            return "operator";
                    return t.match(c) ? "punctuation" : "." == e.lastToken && t.match(v) ? "property" : t.match(y) || t.match(n) ? "keyword" : t.match(b) ? "builtin" : t.match(/^(self|cls)\b/) ? "variable-2" : t.match(v) ? "def" == e.lastToken || "class" == e.lastToken ? "def" : "variable" : (t.next(),
                    r ? null : l)
                }
                function _(t, e) {
                    while ("rubf".indexOf(t.charAt(0).toLowerCase()) >= 0)
                        t = t.substr(1);
                    var n = 1 == t.length
                      , r = "string";
                    function i(t) {
                        return function(e, n) {
                            var r = x(e, n, !0);
                            return "punctuation" == r && ("{" == e.current() ? n.tokenize = i(t + 1) : "}" == e.current() && (n.tokenize = t > 1 ? i(t - 1) : o)),
                            r
                        }
                    }
                    function o(o, a) {
                        while (!o.eol())
                            if (o.eatWhile(/[^'"\{\}\\]/),
                            o.eat("\\")) {
                                if (o.next(),
                                n && o.eol())
                                    return r
                            } else {
                                if (o.match(t))
                                    return a.tokenize = e,
                                    r;
                                if (o.match("{{"))
                                    return r;
                                if (o.match("{", !1))
                                    return a.tokenize = i(0),
                                    o.current() ? r : a.tokenize(o, a);
                                if (o.match("}}"))
                                    return r;
                                if (o.match("}"))
                                    return l;
                                o.eat(/['"]/)
                            }
                        if (n) {
                            if (s.singleLineStringErrors)
                                return l;
                            a.tokenize = e
                        }
                        return r
                    }
                    return o.isString = !0,
                    o
                }
                function k(t, e) {
                    while ("rubf".indexOf(t.charAt(0).toLowerCase()) >= 0)
                        t = t.substr(1);
                    var n = 1 == t.length
                      , r = "string";
                    function i(i, o) {
                        while (!i.eol())
                            if (i.eatWhile(/[^'"\\]/),
                            i.eat("\\")) {
                                if (i.next(),
                                n && i.eol())
                                    return r
                            } else {
                                if (i.match(t))
                                    return o.tokenize = e,
                                    r;
                                i.eat(/['"]/)
                            }
                        if (n) {
                            if (s.singleLineStringErrors)
                                return l;
                            o.tokenize = e
                        }
                        return r
                    }
                    return i.isString = !0,
                    i
                }
                function C(t) {
                    while ("py" != o(t).type)
                        t.scopes.pop();
                    t.scopes.push({
                        offset: o(t).offset + a.indentUnit,
                        type: "py",
                        align: null
                    })
                }
                function S(t, e, n) {
                    var r = t.match(/^[\s\[\{\(]*(?:#|$)/, !1) ? null : t.column() + 1;
                    e.scopes.push({
                        offset: e.indent + f,
                        type: n,
                        align: r
                    })
                }
                function T(t, e) {
                    var n = t.indentation();
                    while (e.scopes.length > 1 && o(e).offset > n) {
                        if ("py" != o(e).type)
                            return !0;
                        e.scopes.pop()
                    }
                    return o(e).offset != n
                }
                function O(t, e) {
                    t.sol() && (e.beginningOfLine = !0,
                    e.dedent = !1);
                    var n = e.tokenize(t, e)
                      , r = t.current();
                    if (e.beginningOfLine && "@" == r)
                        return t.match(v, !1) ? "meta" : g ? "operator" : l;
                    if (/\S/.test(r) && (e.beginningOfLine = !1),
                    "variable" != n && "builtin" != n || "meta" != e.lastToken || (n = "meta"),
                    "pass" != r && "return" != r || (e.dedent = !0),
                    "lambda" == r && (e.lambda = !0),
                    ":" == r && !e.lambda && "py" == o(e).type && t.match(/^\s*(?:#|$)/, !1) && C(e),
                    1 == r.length && !/string|comment/.test(n)) {
                        var i = "[({".indexOf(r);
                        if (-1 != i && S(t, e, "])}".slice(i, i + 1)),
                        i = "])}".indexOf(r),
                        -1 != i) {
                            if (o(e).type != r)
                                return l;
                            e.indent = e.scopes.pop().offset - f
                        }
                    }
                    return e.dedent && t.eol() && "py" == o(e).type && e.scopes.length > 1 && e.scopes.pop(),
                    n
                }
                var A = {
                    startState: function(t) {
                        return {
                            tokenize: w,
                            scopes: [{
                                offset: t || 0,
                                type: "py",
                                align: null
                            }],
                            indent: t || 0,
                            lastToken: null,
                            lambda: !1,
                            dedent: 0
                        }
                    },
                    token: function(t, e) {
                        var n = e.errorToken;
                        n && (e.errorToken = !1);
                        var r = O(t, e);
                        return r && "comment" != r && (e.lastToken = "keyword" == r || "punctuation" == r ? t.current() : r),
                        "punctuation" == r && (r = null),
                        t.eol() && e.lambda && (e.lambda = !1),
                        n ? r + " " + l : r
                    },
                    indent: function(e, n) {
                        if (e.tokenize != w)
                            return e.tokenize.isString ? t.Pass : 0;
                        var r = o(e)
                          , i = r.type == n.charAt(0) || "py" == r.type && !e.dedent && /^(else:|elif |except |finally:)/.test(n);
                        return null != r.align ? r.align - (i ? 1 : 0) : r.offset - (i ? f : 0)
                    },
                    electricInput: /^\s*([\}\]\)]|else:|elif |except |finally:)$/,
                    closeBrackets: {
                        triples: "'\""
                    },
                    lineComment: "#",
                    fold: "indent"
                };
                return A
            }
            )),
            t.defineMIME("text/x-python", "python");
            var a = function(t) {
                return t.split(" ")
            };
            t.defineMIME("text/x-cython", {
                name: "python",
                extra_keywords: a("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")
            })
        }
        ))
    },
    dba0: function(t, e, n) {
        var r = n("5902");
        t.exports = r
    },
    dbf9: function(t, e, n) {
        "use strict";
        n("3058")
    },
    df2f: function(t, e, n) {
        (function(e, r) {
            t.exports = r(n("21bf"))
        }
        )(0, (function(t) {
            return function() {
                var e = t
                  , n = e.lib
                  , r = n.WordArray
                  , i = n.Hasher
                  , o = e.algo
                  , a = []
                  , s = o.SHA1 = i.extend({
                    _doReset: function() {
                        this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                    },
                    _doProcessBlock: function(t, e) {
                        for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], s = n[3], l = n[4], c = 0; c < 80; c++) {
                            if (c < 16)
                                a[c] = 0 | t[e + c];
                            else {
                                var u = a[c - 3] ^ a[c - 8] ^ a[c - 14] ^ a[c - 16];
                                a[c] = u << 1 | u >>> 31
                            }
                            var h = (r << 5 | r >>> 27) + l + a[c];
                            h += c < 20 ? 1518500249 + (i & o | ~i & s) : c < 40 ? 1859775393 + (i ^ o ^ s) : c < 60 ? (i & o | i & s | o & s) - 1894007588 : (i ^ o ^ s) - 899497514,
                            l = s,
                            s = o,
                            o = i << 30 | i >>> 2,
                            i = r,
                            r = h
                        }
                        n[0] = n[0] + r | 0,
                        n[1] = n[1] + i | 0,
                        n[2] = n[2] + o | 0,
                        n[3] = n[3] + s | 0,
                        n[4] = n[4] + l | 0
                    },
                    _doFinalize: function() {
                        var t = this._data
                          , e = t.words
                          , n = 8 * this._nDataBytes
                          , r = 8 * t.sigBytes;
                        return e[r >>> 5] |= 128 << 24 - r % 32,
                        e[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296),
                        e[15 + (r + 64 >>> 9 << 4)] = n,
                        t.sigBytes = 4 * e.length,
                        this._process(),
                        this._hash
                    },
                    clone: function() {
                        var t = i.clone.call(this);
                        return t._hash = this._hash.clone(),
                        t
                    }
                });
                e.SHA1 = i._createHelper(s),
                e.HmacSHA1 = i._createHmacHelper(s)
            }(),
            t.SHA1
        }
        ))
    },
    e014: function(t, e, n) {},
    e099: function(t, e, n) {
        "use strict";
        var r = function(t) {
            switch (typeof t) {
            case "string":
                return t;
            case "boolean":
                return t ? "true" : "false";
            case "number":
                return isFinite(t) ? t : "";
            default:
                return ""
            }
        };
        t.exports = function(t, e, n, s) {
            return e = e || "&",
            n = n || "=",
            null === t && (t = void 0),
            "object" === typeof t ? o(a(t), (function(a) {
                var s = encodeURIComponent(r(a)) + n;
                return i(t[a]) ? o(t[a], (function(t) {
                    return s + encodeURIComponent(r(t))
                }
                )).join(e) : s + encodeURIComponent(r(t[a]))
            }
            )).join(e) : s ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(t)) : ""
        }
        ;
        var i = Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
        ;
        function o(t, e) {
            if (t.map)
                return t.map(e);
            for (var n = [], r = 0; r < t.length; r++)
                n.push(e(t[r], r));
            return n
        }
        var a = Object.keys || function(t) {
            var e = [];
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
            return e
        }
    },
    e4ea: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("FormatContent", {
                attrs: {
                    tip: t.tip,
                    formatType: t.formatType,
                    outputTip: t.outputTip
                }
            })], 1)
        }
          , i = []
          , o = n("d4ec")
          , a = n("262e")
          , s = n("2caf")
          , l = n("9ab4")
          , c = n("8d8f")
          , u = n("1b40")
          , h = function(t) {
            Object(a["a"])(n, t);
            var e = Object(s["a"])(n);
            function n() {
                var t;
                return Object(o["a"])(this, n),
                t = e.apply(this, arguments),
                t.formatType = "fix_encode",
                t.tip = "输入待解码文本，如\n这是\\u4e00\\u6bb5\\u6587\\u672c\n",
                t.outputTip = "输出：\n这是一段文本\n  ",
                t
            }
            return n
        }(u["c"]);
        h = Object(l["a"])([Object(u["a"])({
            components: {
                FormatContent: c["a"]
            }
        })], h);
        var f = h
          , d = f
          , p = n("2877")
          , g = Object(p["a"])(d, r, i, !1, null, "12720160", null);
        e["default"] = g.exports
    },
    e61b: function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("3252"))
        }
        )(0, (function(t) {
            return function(e) {
                var n = t
                  , r = n.lib
                  , i = r.WordArray
                  , o = r.Hasher
                  , a = n.x64
                  , s = a.Word
                  , l = n.algo
                  , c = []
                  , u = []
                  , h = [];
                (function() {
                    for (var t = 1, e = 0, n = 0; n < 24; n++) {
                        c[t + 5 * e] = (n + 1) * (n + 2) / 2 % 64;
                        var r = e % 5
                          , i = (2 * t + 3 * e) % 5;
                        t = r,
                        e = i
                    }
                    for (t = 0; t < 5; t++)
                        for (e = 0; e < 5; e++)
                            u[t + 5 * e] = e + (2 * t + 3 * e) % 5 * 5;
                    for (var o = 1, a = 0; a < 24; a++) {
                        for (var l = 0, f = 0, d = 0; d < 7; d++) {
                            if (1 & o) {
                                var p = (1 << d) - 1;
                                p < 32 ? f ^= 1 << p : l ^= 1 << p - 32
                            }
                            128 & o ? o = o << 1 ^ 113 : o <<= 1
                        }
                        h[a] = s.create(l, f)
                    }
                }
                )();
                var f = [];
                (function() {
                    for (var t = 0; t < 25; t++)
                        f[t] = s.create()
                }
                )();
                var d = l.SHA3 = o.extend({
                    cfg: o.cfg.extend({
                        outputLength: 512
                    }),
                    _doReset: function() {
                        for (var t = this._state = [], e = 0; e < 25; e++)
                            t[e] = new s.init;
                        this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32
                    },
                    _doProcessBlock: function(t, e) {
                        for (var n = this._state, r = this.blockSize / 2, i = 0; i < r; i++) {
                            var o = t[e + 2 * i]
                              , a = t[e + 2 * i + 1];
                            o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                            a = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
                            var s = n[i];
                            s.high ^= a,
                            s.low ^= o
                        }
                        for (var l = 0; l < 24; l++) {
                            for (var d = 0; d < 5; d++) {
                                for (var p = 0, g = 0, v = 0; v < 5; v++) {
                                    s = n[d + 5 * v];
                                    p ^= s.high,
                                    g ^= s.low
                                }
                                var m = f[d];
                                m.high = p,
                                m.low = g
                            }
                            for (d = 0; d < 5; d++) {
                                var y = f[(d + 4) % 5]
                                  , b = f[(d + 1) % 5]
                                  , w = b.high
                                  , x = b.low;
                                for (p = y.high ^ (w << 1 | x >>> 31),
                                g = y.low ^ (x << 1 | w >>> 31),
                                v = 0; v < 5; v++) {
                                    s = n[d + 5 * v];
                                    s.high ^= p,
                                    s.low ^= g
                                }
                            }
                            for (var _ = 1; _ < 25; _++) {
                                s = n[_];
                                var k = s.high
                                  , C = s.low
                                  , S = c[_];
                                S < 32 ? (p = k << S | C >>> 32 - S,
                                g = C << S | k >>> 32 - S) : (p = C << S - 32 | k >>> 64 - S,
                                g = k << S - 32 | C >>> 64 - S);
                                var T = f[u[_]];
                                T.high = p,
                                T.low = g
                            }
                            var O = f[0]
                              , A = n[0];
                            O.high = A.high,
                            O.low = A.low;
                            for (d = 0; d < 5; d++)
                                for (v = 0; v < 5; v++) {
                                    _ = d + 5 * v,
                                    s = n[_];
                                    var L = f[_]
                                      , M = f[(d + 1) % 5 + 5 * v]
                                      , E = f[(d + 2) % 5 + 5 * v];
                                    s.high = L.high ^ ~M.high & E.high,
                                    s.low = L.low ^ ~M.low & E.low
                                }
                            s = n[0];
                            var D = h[l];
                            s.high ^= D.high,
                            s.low ^= D.low
                        }
                    },
                    _doFinalize: function() {
                        var t = this._data
                          , n = t.words
                          , r = (this._nDataBytes,
                        8 * t.sigBytes)
                          , o = 32 * this.blockSize;
                        n[r >>> 5] |= 1 << 24 - r % 32,
                        n[(e.ceil((r + 1) / o) * o >>> 5) - 1] |= 128,
                        t.sigBytes = 4 * n.length,
                        this._process();
                        for (var a = this._state, s = this.cfg.outputLength / 8, l = s / 8, c = [], u = 0; u < l; u++) {
                            var h = a[u]
                              , f = h.high
                              , d = h.low;
                            f = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8),
                            d = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8),
                            c.push(d),
                            c.push(f)
                        }
                        return new i.init(c,s)
                    },
                    clone: function() {
                        for (var t = o.clone.call(this), e = t._state = this._state.slice(0), n = 0; n < 25; n++)
                            e[n] = e[n].clone();
                        return t
                    }
                });
                n.SHA3 = o._createHelper(d),
                n.HmacSHA3 = o._createHmacHelper(d)
            }(Math),
            t.SHA3
        }
        ))
    },
    e860: function(t, e, n) {
        n("a9e3"),
        n("d3b7"),
        n("25f0"),
        n("159b");
        var r = n("f7fe")
          , i = n("3e05");
        t.exports = {
            props: {
                width: {
                    type: [String, Number],
                    default: "100%"
                },
                height: {
                    type: [String, Number],
                    default: "100%"
                },
                code: {
                    type: String,
                    default: "// code \n"
                },
                srcPath: {
                    type: String
                },
                language: {
                    type: String,
                    default: "javascript"
                },
                theme: {
                    type: String,
                    default: "vs-dark"
                },
                options: {
                    type: Object,
                    default: function() {}
                },
                highlighted: {
                    type: Array,
                    default: function() {
                        return [{
                            number: 0,
                            class: ""
                        }]
                    }
                },
                changeThrottle: {
                    type: Number,
                    default: 0
                }
            },
            mounted: function() {
                this.fetchEditor()
            },
            destroyed: function() {
                this.destroyMonaco()
            },
            computed: {
                style: function() {
                    var t = this.width
                      , e = this.height
                      , n = -1 !== t.toString().indexOf("%") ? t : "".concat(t, "px")
                      , r = -1 !== e.toString().indexOf("%") ? e : "".concat(e, "px");
                    return {
                        width: n,
                        height: r
                    }
                },
                editorOptions: function() {
                    return Object.assign({}, this.defaults, this.options, {
                        value: this.code,
                        language: this.language,
                        theme: this.theme
                    })
                }
            },
            data: function() {
                return {
                    defaults: {
                        selectOnLineNumbers: !0,
                        roundedSelection: !1,
                        readOnly: !1,
                        cursorStyle: "line",
                        automaticLayout: !1,
                        glyphMargin: !0
                    }
                }
            },
            watch: {
                highlighted: {
                    handler: function(t) {
                        this.highlightLines(t)
                    },
                    deep: !0
                }
            },
            methods: {
                highlightLines: function(t) {
                    var e = this;
                    this.editor && t.forEach((function(t) {
                        var n = t.class
                          , r = e.$el.querySelector(".".concat(n));
                        r && r.classList.remove(n);
                        var i = parseInt(t.number);
                        if (!(!e.editor && i < 1 || isNaN(i))) {
                            var o = e.$el.querySelector('.view-lines [linenumber="'.concat(i, '"]'));
                            o && o.classList.add(n)
                        }
                    }
                    ))
                },
                editorHasLoaded: function(t, e) {
                    var n = this;
                    this.editor = t,
                    this.monaco = e,
                    this.editor.onDidChangeModelContent((function(e) {
                        return n.codeChangeHandler(t, e)
                    }
                    )),
                    this.$emit("mounted", t)
                },
                codeChangeHandler: function(t) {
                    this.codeChangeEmitter || (this.codeChangeEmitter = r((function(t) {
                        this.$emit("codeChange", t)
                    }
                    ), this.changeThrottle)),
                    this.codeChangeEmitter(t)
                },
                fetchEditor: function() {
                    i.load(this.srcPath, this.createMonaco)
                },
                createMonaco: function() {
                    this.editor = window.monaco.editor.create(this.$el, this.editorOptions),
                    this.editorHasLoaded(this.editor, window.monaco)
                },
                destroyMonaco: function() {
                    "undefined" !== typeof this.editor && this.editor.dispose()
                }
            }
        }
    },
    f183: function(t, e, n) {
        var r = n("23e7")
          , i = n("d012")
          , o = n("861d")
          , a = n("1a2d")
          , s = n("9bf2").f
          , l = n("241c")
          , c = n("057f")
          , u = n("90e3")
          , h = n("bb2f")
          , f = !1
          , d = u("meta")
          , p = 0
          , g = Object.isExtensible || function() {
            return !0
        }
          , v = function(t) {
            s(t, d, {
                value: {
                    objectID: "O" + p++,
                    weakData: {}
                }
            })
        }
          , m = function(t, e) {
            if (!o(t))
                return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!a(t, d)) {
                if (!g(t))
                    return "F";
                if (!e)
                    return "E";
                v(t)
            }
            return t[d].objectID
        }
          , y = function(t, e) {
            if (!a(t, d)) {
                if (!g(t))
                    return !0;
                if (!e)
                    return !1;
                v(t)
            }
            return t[d].weakData
        }
          , b = function(t) {
            return h && f && g(t) && !a(t, d) && v(t),
            t
        }
          , w = function() {
            x.enable = function() {}
            ,
            f = !0;
            var t = l.f
              , e = [].splice
              , n = {};
            n[d] = 1,
            t(n).length && (l.f = function(n) {
                for (var r = t(n), i = 0, o = r.length; i < o; i++)
                    if (r[i] === d) {
                        e.call(r, i, 1);
                        break
                    }
                return r
            }
            ,
            r({
                target: "Object",
                stat: !0,
                forced: !0
            }, {
                getOwnPropertyNames: c.f
            }))
        }
          , x = t.exports = {
            enable: w,
            fastKey: m,
            getWeakData: y,
            onFreeze: b
        };
        i[d] = !0
    },
    f4ea: function(t, e, n) {
        (function(e, r, i) {
            t.exports = r(n("21bf"), n("38ba"))
        }
        )(0, (function(t) {
            return t.mode.CTR = function() {
                var e = t.lib.BlockCipherMode.extend()
                  , n = e.Encryptor = e.extend({
                    processBlock: function(t, e) {
                        var n = this._cipher
                          , r = n.blockSize
                          , i = this._iv
                          , o = this._counter;
                        i && (o = this._counter = i.slice(0),
                        this._iv = void 0);
                        var a = o.slice(0);
                        n.encryptBlock(a, 0),
                        o[r - 1] = o[r - 1] + 1 | 0;
                        for (var s = 0; s < r; s++)
                            t[e + s] ^= a[s]
                    }
                });
                return e.Decryptor = n,
                e
            }(),
            t.mode.CTR
        }
        ))
    },
    f7fe: function(t, e, n) {
        (function(e) {
            var n = "Expected a function"
              , r = NaN
              , i = "[object Symbol]"
              , o = /^\s+|\s+$/g
              , a = /^[-+]0x[0-9a-f]+$/i
              , s = /^0b[01]+$/i
              , l = /^0o[0-7]+$/i
              , c = parseInt
              , u = "object" == typeof e && e && e.Object === Object && e
              , h = "object" == typeof self && self && self.Object === Object && self
              , f = u || h || Function("return this")()
              , d = Object.prototype
              , p = d.toString
              , g = Math.max
              , v = Math.min
              , m = function() {
                return f.Date.now()
            };
            function y(t, e, r) {
                var i, o, a, s, l, c, u = 0, h = !1, f = !1, d = !0;
                if ("function" != typeof t)
                    throw new TypeError(n);
                function p(e) {
                    var n = i
                      , r = o;
                    return i = o = void 0,
                    u = e,
                    s = t.apply(r, n),
                    s
                }
                function y(t) {
                    return u = t,
                    l = setTimeout(k, e),
                    h ? p(t) : s
                }
                function w(t) {
                    var n = t - c
                      , r = t - u
                      , i = e - n;
                    return f ? v(i, a - r) : i
                }
                function x(t) {
                    var n = t - c
                      , r = t - u;
                    return void 0 === c || n >= e || n < 0 || f && r >= a
                }
                function k() {
                    var t = m();
                    if (x(t))
                        return C(t);
                    l = setTimeout(k, w(t))
                }
                function C(t) {
                    return l = void 0,
                    d && i ? p(t) : (i = o = void 0,
                    s)
                }
                function S() {
                    void 0 !== l && clearTimeout(l),
                    u = 0,
                    i = c = o = l = void 0
                }
                function T() {
                    return void 0 === l ? s : C(m())
                }
                function O() {
                    var t = m()
                      , n = x(t);
                    if (i = arguments,
                    o = this,
                    c = t,
                    n) {
                        if (void 0 === l)
                            return y(c);
                        if (f)
                            return l = setTimeout(k, e),
                            p(c)
                    }
                    return void 0 === l && (l = setTimeout(k, e)),
                    s
                }
                return e = _(e) || 0,
                b(r) && (h = !!r.leading,
                f = "maxWait"in r,
                a = f ? g(_(r.maxWait) || 0, e) : a,
                d = "trailing"in r ? !!r.trailing : d),
                O.cancel = S,
                O.flush = T,
                O
            }
            function b(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }
            function w(t) {
                return !!t && "object" == typeof t
            }
            function x(t) {
                return "symbol" == typeof t || w(t) && p.call(t) == i
            }
            function _(t) {
                if ("number" == typeof t)
                    return t;
                if (x(t))
                    return r;
                if (b(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = b(e) ? e + "" : e
                }
                if ("string" != typeof t)
                    return 0 === t ? t : +t;
                t = t.replace(o, "");
                var n = s.test(t);
                return n || l.test(t) ? c(t.slice(2), n ? 2 : 8) : a.test(t) ? r : +t
            }
            t.exports = y
        }
        ).call(this, n("c8ba"))
    },
    fb6a: function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , i = n("e8b5")
          , o = n("68ee")
          , a = n("861d")
          , s = n("23cb")
          , l = n("07fa")
          , c = n("fc6a")
          , u = n("8418")
          , h = n("b622")
          , f = n("1dde")
          , d = f("slice")
          , p = h("species")
          , g = [].slice
          , v = Math.max;
        r({
            target: "Array",
            proto: !0,
            forced: !d
        }, {
            slice: function(t, e) {
                var n, r, h, f = c(this), d = l(f), m = s(t, d), y = s(void 0 === e ? d : e, d);
                if (i(f) && (n = f.constructor,
                o(n) && (n === Array || i(n.prototype)) ? n = void 0 : a(n) && (n = n[p],
                null === n && (n = void 0)),
                n === Array || void 0 === n))
                    return g.call(f, m, y);
                for (r = new (void 0 === n ? Array : n)(v(y - m, 0)),
                h = 0; m < y; m++,
                h++)
                    m in f && u(r, h, f[m]);
                return r.length = h,
                r
            }
        })
    },
    fc18: function(t, e, n) {
        "use strict";
        n("09c0")
    }
}]);
