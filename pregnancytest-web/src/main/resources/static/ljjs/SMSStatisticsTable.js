layui.use(['jquery','table','form'], function(){
    var table = layui.table;
    var $ = layui.jquery;
    var form=layui.form;

//执行一个laydate实例
    laydate.render({
        elem: '#endServiceTime' //指定元素
    });
    laydate.render({
        elem: '#beginServiceTime' //指定元素
    });

    table.render({
        elem: '#test'
        ,url:'SMSStatisticsTablecx'
         ,cols: [[
            {field:'mid', title:'编号', fixed: 'left'}
            ,{field:'fname', title:'姓名',}
            ,{field:'fidcard', title:'证件号码',}
            ,{field:'fcellphonenum', title:'电话号码'}
            ,{field:'message', title:'发送内容',}
            ,{field:'isor', title:'是否成功'}
            ,{field:'sendtime', title:'发送时间',}

        ]]
        ,limit:4
        ,id:'userTable'
        ,page: true
    })
    $("#bth").on("click",function(){
        table.reload('userTable', {
            where: { //设定异步数据接口的额外参数，任意设
                jieshu: $("#endServiceTime").val(),
                kaishi: $("#beginServiceTime").val(),
                whether: $("#whether").val()
            }
            ,page: {
                curr: 1 //重新从第 1 页开始
            }

        });



    })






})