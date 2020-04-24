layui.use(['element', 'form', 'laytpl', 'layer'], function () {
    var element = layui.element,
        laytpl = layui.laytpl,
        layer = layui.layer,
        $ = layui.$;

    /*初始化加载左侧导航*/
    $.getJSON('statics/json/fileInfo.json', function (data) {
        var view = document.getElementById('site-tree');
        var gettpl = document.getElementById("layuiNav").innerHTML;
        laytpl(gettpl).render(data, function (html) {
            view.innerHTML = html;
            $('#site-tree li:first-child').addClass('layui-nav-itemed');
            element.render('nav', 'leftNav');
        });
        //绑定手风琴和左侧导航事件
        navChoice();
        leftNavClick();
    });

    /*主导航加载子导航*/
    $(".site-main-active").on('click', function () {
        var index = layer.load(2); //加载动画
        var id = this.id;
        $.getJSON('statics/json/' + id + '.json', function (data) {
            var view = document.getElementById('site-tree');
            var gettpl = document.getElementById("layuiNav").innerHTML;
            laytpl(gettpl).render(data, function (html) {
                view.innerHTML = html;
                $('#site-tree li:first-child').addClass('layui-nav-itemed');
                element.render('nav', 'leftNav');
            });
            //绑定手风琴和左侧导航事件
            navChoice();
            leftNavClick();
        });
        layer.close(index);
    });

    /*左侧菜单手风琴效果*/
    function navChoice() {
        $('#site-tree .layui-nav-item').on('click', function () {
            if ($(this).hasClass('layui-nav-itemed')) {
                $('#site-tree li').removeClass('layui-nav-itemed');
                $(this).addClass('layui-nav-itemed');
            } else {
                $(this).removeClass('layui-nav-itemed');
            }
        });
    }

    /*左侧导航添加内容到tab*/
    function leftNavClick() {
        $(".site-demo-active").on('click', function () {
            var title = this.text,
                id = this.id;
            if ($(".layui-tab-title li[lay-id='" + id + "']").length > 0) {
                //已经存在
                layer.msg("当前页面已开启", {
                    icon: 2,
                    time: 1000
                });
            } else {
                //console.log($(".layui-tab-title li").length);
                if ($(".layui-tab-title li").length >= 7) {
                    layer.msg("当前开启窗口过多，请先关闭部分窗口", {
                        icon: 2,
                        time: 1000
                    });
                    return;
                }
                element.tabAdd('bodyTab', {
                    title: title
                    , content: '<iframe src="' + id + '.action" id="' + id + '"></iframe>'
                    , id: id
                });
            }
            element.tabChange('bodyTab', id);

        });

    }

    //刷新当前
    $(".refresh").on("click", function () {  //此处添加禁止连续点击刷新一是为了降低服务器压力，另外一个就是为了防止超快点击造成chrome本身的一些js文件的报错(不过貌似这个问题还是存在，不过概率小了很多)
        if ($(this).hasClass("refreshThis")) {
            $(this).removeClass("refreshThis");
            $(".clildFrame .layui-tab-item.layui-show").find("iframe")[0].contentWindow.location.reload(true);
            setTimeout(function () {
                $(".refresh").addClass("refreshThis");
            }, 2000)
        } else {
            layer.msg("您点击的速度超过了服务器的响应速度，还是等两秒再刷新吧！");
        }
    });

    //关闭其他
    $(".closePageOther").on("click", function () {
        if ($("#top_tabs li").length > 2 && $("#top_tabs li.layui-this cite").text() != "后台首页") {
            var menu = JSON.parse(window.sessionStorage.getItem("menu"));
            $("#top_tabs li").each(function () {
                if ($(this).attr("lay-id") != '' && !$(this).hasClass("layui-this")) {
                    element.tabDelete("bodyTab", $(this).attr("lay-id")).init();
                    //此处将当前窗口重新获取放入session，避免一个个删除来回循环造成的不必要工作量
                    for (var i = 0; i < menu.length; i++) {
                        if ($("#top_tabs li.layui-this cite").text() == menu[i].title) {
                            menu.splice(0, menu.length, menu[i]);
                            window.sessionStorage.setItem("menu", JSON.stringify(menu));
                        }
                    }
                }
                bodyTab})
        } else if ($("#top_tabs li.layui-this cite").text() == "后台首页" && $("#top_tabs li").length > 1) {
            $("#top_tabs li").each(function () {
                if ($(this).attr("lay-id") != '' && !$(this).hasClass("layui-this")) {
                    element.tabDelete("", $(this).attr("lay-id")).init();
                    window.sessionStorage.removeItem("menu");
                    menu = [];
                    window.sessionStorage.removeItem("curmenu");
                }
            })
        } else {
            layer.msg("没有可以关闭的窗口了@_@");
        }
    });

    //关闭全部
    $(".closePageAll").on("click", function () {
        if ($("#top_tabs li").length > 1) {
            $("#top_tabs li").each(function () {
                if ($(this).attr("lay-id") != '') {
                    element.tabDelete("bodyTab", $(this).attr("lay-id")).init();
                    window.sessionStorage.removeItem("menu");
                    menu = [];
                    window.sessionStorage.removeItem("curmenu");
                }
            })
        } else {
            layer.msg("没有可以关闭的窗口了@_@");
        }
    });


});

