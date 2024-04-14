!function() {
    "use strict";
    var e, t = {
        4254: function(e, t, n) {
            var r = n(2541)
              , o = (n(3233),
            n(4458),
            n(5101),
            n(2004),
            n(8407),
            n(6394),
            n(4669),
            n(2322),
            n(9268),
            n(3080),
            n(8288),
            n(5677),
            n(2129),
            n(4655),
            n(5466))
              , i = n(3074)
              , a = n.n(i)
              , u = n(137)
              , l = n.n(u)
              , c = n(3613)
              , s = n(473)
              , f = n(541)
              , p = n(8578)
              , m = n(8556)
              , d = n(6970)
              , h = n(7180)
              , y = n(4982)
              , b = n(1283);
            function v(e) {
                return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function g(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function S(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function k(e, t, n) {
                return t && S(e.prototype, t),
                n && S(e, n),
                e
            }
            function w(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && E(e, t)
            }
            function E(e, t) {
                return (E = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function P(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = A(e);
                    if (t) {
                        var o = A(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else
                        n = r.apply(this, arguments);
                    return O(this, n)
                }
            }
            function O(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? _(e) : t
            }
            function _(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function A(e) {
                return (A = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            var j = function(e) {
                w(n, e);
                var t = P(n);
                function n(e) {
                    var r;
                    return g(this, n),
                    (r = t.call(this, e)).state = {
                        subject: "",
                        body: "",
                        isSending: !1
                    },
                    r.onUpdateSubject = r.onUpdateSubject.bind(_(r)),
                    r.onUpdateBody = r.onUpdateBody.bind(_(r)),
                    r.onSubmit = r.onSubmit.bind(_(r)),
                    r.onSubmitSuccess = r.onSubmitSuccess.bind(_(r)),
                    r.onSubmitFail = r.onSubmitFail.bind(_(r)),
                    r
                }
                return k(n, [{
                    key: "onUpdateSubject",
                    value: function() {
                        this.setState({
                            subject: this.refs.msgSubject.value.trim()
                        })
                    }
                }, {
                    key: "onUpdateBody",
                    value: function() {
                        this.setState({
                            body: this.refs.msgBody.value.trim()
                        })
                    }
                }, {
                    key: "onSubmitSuccess",
                    value: function(e) {
                        this.setState({
                            subject: "",
                            body: "",
                            isSending: !1
                        }, (function() {
                            setTimeout(function() {
                                f.PageActions.addNotification("Your message was successfully submitted to " + this.props.author.name, "messageSubmitSucceed")
                            }
                            .bind(this), 100)
                        }
                        ))
                    }
                }, {
                    key: "onSubmitFail",
                    value: function(e) {
                        this.setState({
                            isSending: !1
                        }, (function() {
                            b.log(e),
                            setTimeout(function() {
                                f.PageActions.addNotification("Your message failed to submit. Please try again", "messageSubmitFailed")
                            }
                            .bind(this), 100)
                        }
                        ))
                    }
                }, {
                    key: "onSubmit",
                    value: function(e) {
                        this.state.isSending || "" === this.state.subject || "" === this.state.body || (e.preventDefault(),
                        e.stopPropagation(),
                        this.setState({
                            isSending: !0
                        }, (function() {
                            var e = c.ApiUrlContext._currentValue.users + "/" + this.props.author.username + "/contact";
                            (0,
                            s.postRequest)(e, {
                                subject: this.state.subject,
                                body: this.state.body
                            }, {
                                headers: {
                                    "X-CSRFToken": (0,
                                    s.csrfToken)()
                                }
                            }, !1, this.onSubmitSuccess, this.onSubmitFail)
                        }
                        )))
                    }
                }, {
                    key: "render",
                    value: function() {
                        return o.createElement("div", {
                            className: "media-list-row profile-contact"
                        }, o.createElement("div", {
                            className: "media-list-header"
                        }, o.createElement("h2", null, "Contact")), o.createElement("form", {
                            method: "post",
                            className: "user-contact-form" + (this.state.isSending ? " pending-response" : "")
                        }, o.createElement("span", null, o.createElement("label", null, "Subject"), o.createElement("input", {
                            ref: "msgSubject",
                            type: "text",
                            required: !0,
                            onChange: this.onUpdateSubject,
                            value: this.state.subject
                        })), o.createElement("span", null, o.createElement("label", null, "Message"), o.createElement("textarea", {
                            ref: "msgBody",
                            required: !0,
                            cols: "40",
                            rows: "10",
                            onChange: this.onUpdateBody,
                            value: this.state.body
                        })), o.createElement("button", {
                            onClick: this.onSubmit
                        }, "SUBMIT")))
                    }
                }]),
                n
            }(o.PureComponent)
              , C = function(e) {
                w(n, e);
                var t = P(n);
                function n(e) {
                    var r;
                    return g(this, n),
                    (r = t.call(this, e, "author-about")).userIsAuthor = null,
                    r.enabledContactForm = !1,
                    r
                }
                return k(n, [{
                    key: "pageContent",
                    value: function() {
                        var e = null
                          , t = []
                          , n = [];
                        if (this.state.author) {
                            var r, i;
                            if (null === this.userIsAuthor && (c.MemberContext._currentValue.is.anonymous ? (this.userIsAuthor = !1,
                            this.enabledContactForm = !1) : (this.userIsAuthor = p.ProfilePageStore.get("author-data").username === c.MemberContext._currentValue.username,
                            this.enabledContactForm = !this.userIsAuthor && c.MemberContext._currentValue.can.contactUser)),
                            void 0 !== this.state.author.description && this.state.author.description && "" !== this.state.author.description && (e = this.state.author.description),
                            void 0 !== this.state.author.location_info && this.state.author.location_info.length) {
                                var a = [];
                                for (r = 0; r < this.state.author.location_info.length; )
                                    void 0 !== this.state.author.location_info[r].title && void 0 !== this.state.author.location_info[r].url && a.push(o.createElement("a", {
                                        key: r,
                                        href: (0,
                                        s.formatInnerLink)(this.state.author.location_info[r].url, c.SiteContext._currentValue.url),
                                        title: this.state.author.location_info[r].title
                                    }, this.state.author.location_info[r].title)),
                                    r += 1;
                                t.push(o.createElement("li", {
                                    key: "location"
                                }, o.createElement("span", null, "Location:"), o.createElement("span", null, a)))
                            } else
                                void 0 !== this.state.author.location && this.state.author.location && "" !== this.state.author.location && t.push(o.createElement("li", {
                                    key: "location"
                                }, o.createElement("span", null, "Location:"), o.createElement("span", null, this.state.author.location)));
                            if (void 0 !== this.state.author.home_page && this.state.author.home_page && "" !== this.state.author.home_page && "" !== (i = l()(this.state.author.home_page.trim()).toString()) && t.push(o.createElement("li", {
                                key: "website"
                            }, o.createElement("span", null, "Website:"), o.createElement("span", null, i))),
                            void 0 !== this.state.author.social_media_links && this.state.author.social_media_links && "" !== this.state.author.social_media_links) {
                                var u = this.state.author.social_media_links.split(",");
                                if (u.length) {
                                    for (r = 0; r < u.length; )
                                        "" !== (i = u[r].trim()) && n.push(o.createElement("span", {
                                            key: r
                                        }, i)),
                                        r += 1;
                                    t.push(o.createElement("li", {
                                        key: "social_media"
                                    }, o.createElement("span", null, "Social media:"), o.createElement("span", {
                                        className: "author-social-media"
                                    }, n)))
                                }
                            }
                        }
                        return [this.state.author ? o.createElement(m.Z, {
                            key: "ProfilePagesHeader",
                            author: this.state.author,
                            type: "about"
                        }) : null, this.state.author ? o.createElement(d.Z, {
                            key: "ProfilePagesContent",
                            enabledContactForm: this.enabledContactForm
                        }, o.createElement("div", {
                            className: "media-list-wrapper items-list-ver  profile-about-content "
                        }, null === e && 0 < t.length ? null : p.PageStore.get("config-options").pages.profile.htmlInDescription ? o.createElement(h.MediaListRow, {
                            title: this.props.title
                        }, o.createElement("span", {
                            dangerouslySetInnerHTML: {
                                __html: e || null
                            }
                        })) : o.createElement(h.MediaListRow, {
                            title: this.props.title
                        }, e), t.length ? o.createElement(h.MediaListRow, {
                            title: "Details"
                        }, o.createElement("ul", {
                            className: "profile-details"
                        }, t)) : null, this.enabledContactForm ? o.createElement(j, {
                            author: this.state.author
                        }) : null)) : null]
                    }
                }]),
                n
            }(y.a);
            C.propTypes = {
                title: a().string.isRequired
            },
            C.defaultProps = {
                title: "About"
            },
            (0,
            r.X)("page-profile-about", C)
        },
        7714: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return u
                }
            }),
            n(4517);
            var r = n(5466)
              , o = n(3074)
              , i = n.n(o);
            function a() {
                return (a = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ).apply(this, arguments)
            }
            function u(e) {
                var t = r.createElement("span", null, r.createElement("span", null, e.children))
                  , n = {
                    tabIndex: e.tabIndex || null,
                    title: e.title || null,
                    className: "circle-icon-button" + (void 0 !== e.className ? " " + e.className : "") + (e.buttonShadow ? " button-shadow" : "")
                };
                return void 0 !== e["data-page-id"] && (n["data-page-id"] = e["data-page-id"]),
                void 0 !== e["aria-label"] && (n["aria-label"] = e["aria-label"]),
                "link" === e.type ? r.createElement("a", a({}, n, {
                    href: e.href || null,
                    rel: e.rel || null
                }), t) : "span" === e.type ? r.createElement("span", a({}, n, {
                    onClick: e.onClick || null
                }), t) : r.createElement("button", a({}, n, {
                    onClick: e.onClick || null
                }), t)
            }
            u.propTypes = {
                type: i().oneOf(["button", "link", "span"]),
                buttonShadow: i().bool,
                className: i().string
            },
            u.defaultProps = {
                type: "button",
                buttonShadow: !1
            }
        },
        7446: function(e, t, n) {
            n(2070),
            n(5466);
            var r = n(3074)
              , o = n.n(r);
            n(2299),
            o().string.isRequired,
            o().string.isRequired,
            o().func.isRequired
        },
        2915: function(e, t, n) {
            n(2004),
            n(8407),
            n(6394),
            n(8288),
            n(5677),
            n(2129),
            n(4655),
            n(288),
            n(4458),
            n(3675);
            var r = n(5466)
              , o = n(3074)
              , i = n.n(o)
              , a = n(2299);
            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function l(e) {
                var t, n, o = (t = (0,
                r.useState)(e.active),
                n = 2,
                function(e) {
                    if (Array.isArray(e))
                        return e
                }(t) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [], a = !0, u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value),
                            !t || i.length !== t); a = !0)
                                ;
                        } catch (e) {
                            u = !0,
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u)
                                    throw o
                            }
                        }
                        return i
                    }
                }(t, n) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return u(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0
                    }
                }(t, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()), i = o[0], l = o[1];
                return r.createElement("div", {
                    className: "mi-filters-toggle"
                }, r.createElement("button", {
                    className: i ? "active" : "",
                    "aria-label": "Filter",
                    onClick: function() {
                        l(!i),
                        void 0 !== e.onClick && e.onClick()
                    }
                }, r.createElement(a.O, {
                    type: "filter_list"
                }), r.createElement("span", {
                    className: "filter-button-label"
                }, r.createElement("span", {
                    className: "filter-button-label-text"
                }, "FILTERS"))))
            }
            l.propTypes = {
                onClick: i().func,
                active: i().bool
            },
            l.defaultProps = {
                active: !1
            }
        },
        4234: function(e, t, n) {
            n.d(t, {
                CircleIconButton: function() {
                    return r.M
                },
                MaterialIcon: function() {
                    return o.O
                },
                NavigationContentApp: function() {
                    return i.o
                },
                NavigationMenuList: function() {
                    return a.S
                },
                Notifications: function() {
                    return u.T
                },
                PopupMain: function() {
                    return l.W8
                },
                PopupTop: function() {
                    return l.HF
                },
                SpinnerLoader: function() {
                    return c.i
                },
                UserThumbnail: function() {
                    return s.q
                }
            });
            var r = n(7714)
              , o = (n(7446),
            n(2915),
            n(2299))
              , i = n(2917)
              , a = n(5671)
              , u = n(2436)
              , l = (n(5517),
            n(940))
              , c = n(6309)
              , s = n(6142)
        },
        2299: function(e, t, n) {
            n.d(t, {
                O: function() {
                    return o
                }
            });
            var r = n(5466)
              , o = function(e) {
                var t = e.type;
                return t ? r.createElement("i", {
                    className: "material-icons",
                    "data-icon": t
                }) : null
            }
        },
        2917: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return l
                }
            }),
            n(3233),
            n(9751),
            n(2004),
            n(8407),
            n(6394),
            n(8288),
            n(5677),
            n(2129),
            n(4655),
            n(288),
            n(4458),
            n(3675);
            var r = n(5466)
              , o = n(6116)
              , i = n(3074)
              , a = n.n(i);
            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function l(e) {
                var t, n, i = (0,
                r.useRef)(null), a = (t = (0,
                r.useState)(null),
                n = 2,
                function(e) {
                    if (Array.isArray(e))
                        return e
                }(t) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [], a = !0, u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value),
                            !t || i.length !== t); a = !0)
                                ;
                        } catch (e) {
                            u = !0,
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u)
                                    throw o
                            }
                        }
                        return i
                    }
                }(t, n) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return u(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0
                    }
                }(t, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()), l = a[0], c = a[1], s = [];
                function f(t, n) {
                    var r;
                    n.preventDefault(),
                    n.stopPropagation(),
                    r = s[t].id,
                    void 0 !== e.pages[r] && c(r)
                }
                return (0,
                r.useEffect)((function() {
                    void 0 !== e.pages[e.initPage] ? c(e.initPage) : Object.keys(e.pages).length ? c(Object.keys(e.pages)[0]) : c(null)
                }
                ), [e.initPage]),
                (0,
                r.useEffect)((function() {
                    !function() {
                        for (var e = 0; e < s.length; )
                            s[e].elem.removeEventListener("click", s[e].listener),
                            e += 1;
                        s = []
                    }(),
                    l && (function() {
                        var t, n, r = (0,
                        o.findDOMNode)(i.current), a = r.querySelectorAll(e.pageChangeSelector);
                        if (a.length)
                            for (t = 0; t < a.length; )
                                (n = (n = a[t].getAttribute(e.pageIdSelectorAttr)) ? n.trim() : n) && (s[t] = {
                                    id: n,
                                    elem: a[t]
                                },
                                s[t].listener = function(e) {
                                    return function(t) {
                                        return f(e, t)
                                    }
                                }(t),
                                s[t].elem.addEventListener("click", s[t].listener)),
                                t += 1;
                        e.focusFirstItemOnPageChange && r.focus()
                    }(),
                    "function" == typeof e.pageChangeCallback && e.pageChangeCallback(l))
                }
                ), [l]),
                l ? r.createElement("div", {
                    ref: i
                }, r.cloneElement(e.pages[l])) : null
            }
            l.propTypes = {
                initPage: a().string,
                pages: a().object.isRequired,
                pageChangeSelector: a().string.isRequired,
                pageIdSelectorAttr: a().string.isRequired,
                focusFirstItemOnPageChange: a().bool,
                pageChangeCallback: a().func
            },
            l.defaultProps = {
                focusFirstItemOnPageChange: !0
            }
        },
        5671: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return c
                }
            }),
            n(9808),
            n(3233),
            n(2070),
            n(4517);
            var r = n(5466)
              , o = n(3074)
              , i = n.n(o)
              , a = n(2299);
            function u() {
                return (u = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ).apply(this, arguments)
            }
            function l(e) {
                var t = []
                  , n = e.itemAttr || {};
                void 0 === n.className ? n.className = "" : n.className && (n.className += " ");
                var o = e.text ? e.icon && "right" !== e.iconPos ? 1 : 0 : -1
                  , i = e.icon ? e.text && "right" === e.iconPos ? 1 : 0 : -1;
                switch (-1 < o && (t[o] = r.createElement("span", {
                    key: "Text"
                }, e.text)),
                -1 < i && (t[i] = r.createElement("span", {
                    key: "Icon",
                    className: "right" === e.iconPos ? "menu-item-icon-right" : "menu-item-icon"
                }, r.createElement(a.O, {
                    type: e.icon
                }))),
                e.itemType) {
                case "link":
                    t = r.createElement("a", u({}, e.linkAttr || {}, {
                        href: e.link,
                        title: e.text || null
                    }), t),
                    n.className += "link-item" + (e.active ? " active" : "");
                    break;
                case "button":
                case "open-subpage":
                    t = r.createElement("button", u({}, e.buttonAttr || {}, {
                        key: "button"
                    }), t);
                    break;
                case "label":
                    t = r.createElement("button", u({}, e.buttonAttr || {}, {
                        key: "button"
                    }), r.createElement("span", null, e.text || null)),
                    n.className = "label-item";
                    break;
                case "div":
                    t = r.createElement("div", u({}, e.divAttr || {}, {
                        key: "div"
                    }), e.text || null)
                }
                return "" !== n.className && (n.className = " " + n.className),
                n.className = n.className.trim(),
                r.createElement("li", n, t)
            }
            function c(e) {
                var t = e.items.map((function(e, t) {
                    return r.createElement(l, u({
                        key: t
                    }, e))
                }
                ));
                return t.length ? r.createElement("div", {
                    className: "nav-menu" + (e.removeVerticalPadding ? " pv0" : "")
                }, r.createElement("nav", null, r.createElement("ul", null, t))) : null
            }
            l.propTypes = {
                itemType: i().oneOf(["link", "open-subpage", "button", "label", "div"]),
                link: i().string,
                icon: i().string,
                iconPos: i().oneOf(["left", "right"]),
                text: i().string,
                active: i().bool,
                divAttr: i().object,
                buttonAttr: i().object,
                itemAttr: i().object,
                linkAttr: i().object
            },
            l.defaultProps = {
                itemType: "link",
                iconPos: "left",
                active: !1
            },
            c.propTypes = {
                removeVerticalPadding: i().bool,
                items: i().arrayOf(i().shape(l.propTypes)).isRequired
            },
            c.defaultProps = {
                removeVerticalPadding: !1
            }
        },
        2436: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return f
                }
            }),
            n(2070),
            n(1646),
            n(2004),
            n(8407),
            n(6394),
            n(8288),
            n(5677),
            n(2129),
            n(4655),
            n(288),
            n(4458),
            n(3675);
            var r = n(5466)
              , o = n(7959);
            function i(e) {
                return function(e) {
                    if (Array.isArray(e))
                        return l(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(e) || u(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function a(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [], a = !0, u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value),
                            !t || i.length !== t); a = !0)
                                ;
                        } catch (e) {
                            u = !0,
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u)
                                    throw o
                            }
                        }
                        return i
                    }
                }(e, t) || u(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function u(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0
                }
            }
            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            var c = [];
            function s(e) {
                var t = a((0,
                r.useState)(!1), 2)
                  , n = t[0]
                  , o = t[1]
                  , i = a((0,
                r.useState)(!0), 2)
                  , u = i[0]
                  , l = i[1]
                  , c = null
                  , s = null;
                return (0,
                r.useEffect)((function() {
                    return c = setTimeout((function() {
                        s = setTimeout((function() {
                            l(!1),
                            s = null
                        }
                        ), 1e3),
                        c = null,
                        o(!0),
                        e.onHide(e.id)
                    }
                    ), 5e3),
                    function() {
                        c && clearTimeout(c),
                        s && clearTimeout(s)
                    }
                }
                ), []),
                u ? r.createElement("div", {
                    className: "notification-item" + (n ? " hidden" : "")
                }, r.createElement("div", null, e.children || null)) : null
            }
            function f() {
                var e, t, n, u = a((0,
                r.useState)(c.length), 2), l = u[0], f = u[1];
                function p() {
                    f(o.default.get("notifications-size") + c.length)
                }
                function m(e) {
                    var t = [];
                    c.map((function(n) {
                        n[0] !== e && t.push(n)
                    }
                    )),
                    c = t
                }
                return (0,
                r.useEffect)((function() {
                    return p(),
                    o.default.on("added_notification", p),
                    function() {
                        return o.default.removeListener("added_notification", p)
                    }
                }
                ), []),
                l ? r.createElement("div", {
                    className: "notifications"
                }, r.createElement("div", null, (e = o.default.get("notifications"),
                t = c.map((function(e) {
                    return r.createElement(s, {
                        key: e[0],
                        id: e[0],
                        onHide: m
                    }, e[1])
                }
                )),
                n = e.map((function(e) {
                    return c.push(e),
                    r.createElement(s, {
                        key: e[0],
                        id: e[0],
                        onHide: m
                    }, e[1])
                }
                )),
                [].concat(i(t), i(n)))), " ") : null
            }
        },
        940: function(e, t, n) {
            n.d(t, {
                HF: function() {
                    return i
                },
                W8: function() {
                    return a
                }
            });
            var r = n(5466)
              , o = r.forwardRef((function(e, t) {
                return void 0 !== e.children ? r.createElement("div", {
                    ref: t,
                    className: "popup" + (void 0 !== e.className ? " " + e.className : ""),
                    style: e.style
                }, e.children) : null
            }
            ));
            function i(e) {
                return void 0 !== e.children ? r.createElement("div", {
                    className: "popup-top" + (void 0 !== e.className ? " " + e.className : ""),
                    style: e.style
                }, e.children) : null
            }
            function a(e) {
                return void 0 !== e.children ? r.createElement("div", {
                    className: "popup-main" + (void 0 !== e.className ? " " + e.className : ""),
                    style: e.style
                }, e.children) : null
            }
            t.ZP = o
        },
        6309: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return a
                }
            });
            var r = n(5466)
              , o = n(3074)
              , i = n.n(o);
            function a(e) {
                var t = "spinner-loader";
                switch (e.size) {
                case "tiny":
                case "x-small":
                case "small":
                case "large":
                case "x-large":
                    t += " " + e.size
                }
                return r.createElement("div", {
                    className: t
                }, r.createElement("svg", {
                    className: "circular",
                    viewBox: "25 25 50 50"
                }, r.createElement("circle", {
                    className: "path",
                    cx: "50",
                    cy: "50",
                    r: "20",
                    fill: "none",
                    strokeWidth: "1.5",
                    strokeMiterlimit: "10"
                })))
            }
            a.propTypes = {
                size: i().oneOf(["tiny", "x-small", "small", "medium", "large", "x-large"])
            },
            a.defaultProps = {
                size: "medium"
            }
        },
        6142: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return c
                }
            });
            var r = n(5466)
              , o = n(3074)
              , i = n.n(o)
              , a = n(9747)
              , u = n(7714)
              , l = n(2299);
            function c(e) {
                var t = (0,
                a.useUser)().thumbnail
                  , n = {
                    "aria-label": "Account profile photo that opens list of options and settings pages links",
                    className: "thumbnail"
                };
                switch (e.isButton ? void 0 !== e.onClick && (n.onClick = e.onClick) : n.type = "span",
                e.size) {
                case "small":
                case "large":
                    n.className += " " + e.size + "-thumb"
                }
                return r.createElement(u.M, n, t ? r.createElement("img", {
                    src: t,
                    alt: ""
                }) : r.createElement(l.O, {
                    type: "person"
                }))
            }
            c.propTypes = {
                isButton: i().bool,
                size: i().oneOf(["small", "medium", "large"]),
                onClick: i().func
            },
            c.defaultProps = {
                isButton: !1,
                size: "medium"
            }
        },
        6191: function(e, t, n) {
            n.d(t, {
                PageHeader: function() {
                    return r.m
                },
                PageMain: function() {
                    return o.r
                },
                PageSidebar: function() {
                    return i.$
                }
            });
            var r = n(6006)
              , o = n(9198)
              , i = n(2947);
            n(1542)
        },
        1450: function(e, t, n) {
            function r() {
                var e, t, n, r = null;
                if (document.cookie && "" !== document.cookie)
                    for (t = document.cookie.split(";"),
                    e = 0; e < t.length; ) {
                        if ("csrftoken=" === (n = t[e].trim()).substring(0, 10)) {
                            r = decodeURIComponent(n.substring(10));
                            break
                        }
                        e += 1
                    }
                return r
            }
            n.d(t, {
                o: function() {
                    return r
                }
            }),
            n(2322),
            n(9268),
            n(3233)
        },
        1397: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return i
                }
            }),
            n(2322),
            n(3296),
            n(6394),
            n(4669);
            var r = n(137)
              , o = n.n(r);
            function i(e, t) {
                var n = o()(e, {});
                return "" !== n.origin && "null" !== n.origin && n.origin || (n = o()(t + "/" + e.replace(/^\//g, ""), {})),
                n.toString()
            }
        },
        447: function(e, t, n) {
            n.d(t, {
                A_: function() {
                    return u
                },
                j0: function() {
                    return c
                },
                GH: function() {
                    return f
                },
                Jl: function() {
                    return m
                }
            }),
            n(7588),
            n(6394),
            n(5334);
            var r = n(4559)
              , o = n.n(r);
            function i(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a)
                      , l = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }
            function a(e) {
                return function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);
                        function u(e) {
                            i(a, r, o, u, l, "next", e)
                        }
                        function l(e) {
                            i(a, r, o, u, l, "throw", e)
                        }
                        u(void 0)
                    }
                    ))
                }
            }
            function u(e, t, n, r) {
                return l.apply(this, arguments)
            }
            function l() {
                return (l = a(regeneratorRuntime.mark((function e(t, n, o, i) {
                    var a, u, l;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (l = function(e) {
                                    if (i instanceof Function) {
                                        var t = e;
                                        if (void 0 === e.response)
                                            t = {
                                                type: "network",
                                                error: e
                                            };
                                        else if (void 0 !== e.response.status)
                                            switch (e.response.status) {
                                            case 401:
                                                t = {
                                                    type: "private",
                                                    error: e,
                                                    message: "Media is private"
                                                };
                                                break;
                                            case 400:
                                                t = {
                                                    type: "unavailable",
                                                    error: e,
                                                    message: "Media is unavailable"
                                                }
                                            }
                                        i(t)
                                    }
                                }
                                ,
                                u = function(e) {
                                    o instanceof Function && o(e)
                                }
                                ,
                                a = {
                                    timeout: null,
                                    maxContentLength: null
                                },
                                !n) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 6,
                                (0,
                                r.get)(t, a).then(u).catch(l || null);
                            case 6:
                                e.next = 9;
                                break;
                            case 8:
                                (0,
                                r.get)(t, a).then(u).catch(l || null);
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function c(e, t, n, r, o, i) {
                return s.apply(this, arguments)
            }
            function s() {
                return (s = a(regeneratorRuntime.mark((function e(t, n, o, i, a, u) {
                    var l, c;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (c = function(e) {
                                    u instanceof Function && u(e)
                                }
                                ,
                                l = function(e) {
                                    a instanceof Function && a(e)
                                }
                                ,
                                n = n || {},
                                !i) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 6,
                                (0,
                                r.post)(t, n, o || null).then(l).catch(c || null);
                            case 6:
                                e.next = 9;
                                break;
                            case 8:
                                (0,
                                r.post)(t, n, o || null).then(l).catch(c || null);
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function f(e, t, n, r, o, i) {
                return p.apply(this, arguments)
            }
            function p() {
                return (p = a(regeneratorRuntime.mark((function e(t, n, o, i, a, u) {
                    var l, c;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (c = function(e) {
                                    u instanceof Function && u(e)
                                }
                                ,
                                l = function(e) {
                                    a instanceof Function && a(e)
                                }
                                ,
                                n = n || {},
                                !i) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 6,
                                (0,
                                r.put)(t, n, o || null).then(l).catch(c || null);
                            case 6:
                                e.next = 9;
                                break;
                            case 8:
                                (0,
                                r.put)(t, n, o || null).then(l).catch(c || null);
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function m(e, t, n, r, o) {
                return d.apply(this, arguments)
            }
            function d() {
                return (d = a(regeneratorRuntime.mark((function e(t, n, r, i, a) {
                    var u, l;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (l = function(e) {
                                    a instanceof Function && a(e)
                                }
                                ,
                                u = function(e) {
                                    i instanceof Function && i(e)
                                }
                                ,
                                n = n || {},
                                !r) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 6,
                                o().delete(t, n || null).then(u).catch(l || null);
                            case 6:
                                e.next = 9;
                                break;
                            case 8:
                                o().delete(t, n || null).then(u).catch(l || null);
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
        },
        7959: function(e, t, n) {
            n.r(t),
            n(5677),
            n(6394),
            n(506),
            n(3224),
            n(597),
            n(3543),
            n(5210),
            n(5785),
            n(91),
            n(9595),
            n(3357),
            n(1816),
            n(5292),
            n(7445),
            n(4875),
            n(1608),
            n(2994),
            n(284),
            n(601),
            n(9494),
            n(6229),
            n(9149),
            n(9503),
            n(9617),
            n(1962),
            n(8097),
            n(2322),
            n(3296),
            n(4669),
            n(7441),
            n(2070),
            n(3675),
            n(2129),
            n(9268),
            n(2004),
            n(8407),
            n(8288),
            n(4655),
            n(288),
            n(4458),
            n(5101),
            n(3080);
            var r, o = n(1590), i = n.n(o), a = n(9722), u = n(473), l = n(9479);
            function c(e) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function f(e, t) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function p(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? m(e) : t
            }
            function m(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function d(e) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            var y = null
              , b = null
              , v = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && f(e, t)
                }(v, e);
                var t, n, o, i, c = (o = v,
                i = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                function() {
                    var e, t = d(o);
                    if (i) {
                        var n = d(this).constructor;
                        e = Reflect.construct(t, arguments, n)
                    } else
                        e = t.apply(this, arguments);
                    return p(this, e)
                }
                );
                function v(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, v),
                    t = c.call(this),
                    b = (0,
                    l.v)(window.MediaCMS),
                    r = new a.BrowserCache(b.site.id,86400),
                    (y = {
                        mediaAutoPlay: r.get("media-auto-play")
                    }).mediaAutoPlay = null === y.mediaAutoPlay || y.mediaAutoPlay,
                    t.browserEvents = (0,
                    u.BrowserEvents)(),
                    t.browserEvents.doc(t.onDocumentVisibilityChange.bind(m(t))),
                    t.browserEvents.win(t.onWindowResize.bind(m(t)), t.onWindowScroll.bind(m(t))),
                    t.notifications = function(e) {
                        var t = [];
                        function n(e) {
                            var n;
                            "string" == typeof e && t.push([(n = new Uint32Array(3),
                            window.crypto.getRandomValues(n),
                            (performance.now().toString(36) + Array.from(n).map((function(e) {
                                return e.toString(36)
                            }
                            )).join("")).replace(/./g, "" + Math.random() + Intl.DateTimeFormat().resolvedOptions().timeZone + Date.now())), e])
                        }
                        return e.map(n),
                        {
                            size: function() {
                                return t.length
                            },
                            push: n,
                            clear: function() {
                                t = []
                            },
                            messages: function() {
                                return function(e) {
                                    if (Array.isArray(e))
                                        return h(e)
                                }(e = t) || function(e) {
                                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                        return Array.from(e)
                                }(e) || function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e)
                                            return h(e, t);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        return "Object" === n && e.constructor && (n = e.constructor.name),
                                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(e, t) : void 0
                                    }
                                }(e) || function() {
                                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }();
                                var e
                            }
                        }
                    }(void 0 !== window.MediaCMS && void 0 !== window.MediaCMS.notifications ? window.MediaCMS.notifications : []),
                    t
                }
                return t = v,
                (n = [{
                    key: "onDocumentVisibilityChange",
                    value: function() {
                        this.emit("document_visibility_change")
                    }
                }, {
                    key: "onWindowScroll",
                    value: function() {
                        this.emit("window_scroll")
                    }
                }, {
                    key: "onWindowResize",
                    value: function() {
                        this.emit("window_resize")
                    }
                }, {
                    key: "initPage",
                    value: function(e) {
                        y.currentPage = e
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        var t, n;
                        switch (e) {
                        case "browser-cache":
                            t = r;
                            break;
                        case "media-auto-play":
                            t = y.mediaAutoPlay;
                            break;
                        case "config-contents":
                            t = b.contents;
                            break;
                        case "config-enabled":
                            t = b.enabled;
                            break;
                        case "config-media-item":
                            t = b.media.item;
                            break;
                        case "config-options":
                            t = b.options;
                            break;
                        case "config-site":
                            t = b.site;
                            break;
                        case "api-playlists":
                            n = e.split("-")[1],
                            t = b.api[n] || null;
                            break;
                        case "notifications-size":
                            t = this.notifications.size();
                            break;
                        case "notifications":
                            t = this.notifications.messages(),
                            this.notifications.clear();
                            break;
                        case "current-page":
                            t = y.currentPage
                        }
                        return t
                    }
                }, {
                    key: "actions_handler",
                    value: function(e) {
                        switch (e.type) {
                        case "INIT_PAGE":
                            this.initPage(e.page),
                            this.emit("page_init");
                            break;
                        case "TOGGLE_AUTO_PLAY":
                            y.mediaAutoPlay = !y.mediaAutoPlay,
                            r.set("media-auto-play", y.mediaAutoPlay),
                            this.emit("switched_media_auto_play");
                            break;
                        case "ADD_NOTIFICATION":
                            this.notifications.push(e.notification),
                            this.emit("added_notification")
                        }
                    }
                }]) && s(t.prototype, n),
                v
            }(i());
            t.default = (0,
            u.exportStore)(new v, "actions_handler")
        }
    }, n = {};
    function r(e) {
        var o = n[e];
        if (void 0 !== o)
            return o.exports;
        var i = n[e] = {
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, r),
        i.exports
    }
    r.m = t,
    e = [],
    r.O = function(t, n, o, i) {
        if (!n) {
            var a = 1 / 0;
            for (c = 0; c < e.length; c++) {
                n = e[c][0],
                o = e[c][1],
                i = e[c][2];
                for (var u = !0, l = 0; l < n.length; l++)
                    (!1 & i || a >= i) && Object.keys(r.O).every((function(e) {
                        return r.O[e](n[l])
                    }
                    )) ? n.splice(l--, 1) : (u = !1,
                    i < a && (a = i));
                u && (e.splice(c--, 1),
                t = o())
            }
            return t
        }
        i = i || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > i; c--)
            e[c] = e[c - 1];
        e[c] = [n, o, i]
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return r.d(t, {
            a: t
        }),
        t
    }
    ,
    r.d = function(e, t) {
        for (var n in t)
            r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    r.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.j = 797,
    function() {
        var e = {
            797: 0
        };
        r.O.j = function(t) {
            return 0 === e[t]
        }
        ;
        var t = function(t, n) {
            var o, i, a = n[0], u = n[1], l = n[2], c = 0;
            for (o in u)
                r.o(u, o) && (r.m[o] = u[o]);
            if (l)
                var s = l(r);
            for (t && t(n); c < a.length; c++)
                i = a[c],
                r.o(e, i) && e[i] && e[i][0](),
                e[a[c]] = 0;
            return r.O(s)
        }
          , n = self.webpackChunkmediacms_frontend = self.webpackChunkmediacms_frontend || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }();
    var o = r.O(void 0, [431], (function() {
        return r(4254)
    }
    ));
    o = r.O(o)
}();
