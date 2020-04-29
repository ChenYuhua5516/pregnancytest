layui.use(['jquery','table','form'], function(){
    var table = layui.table;
    var $ = layui.jquery;
    var form=layui.form;


    table.render({
        elem: '#test'
        ,url:'queryBasicInformationFileService'
        ,toolbar: '#toolbarDemo' //开启头部工具栏，并为其绑定左侧模板
        ,defaultToolbar: ['filter', 'exports', 'print']
        ,cols: [[
            {field:'mid', title:'编号', fixed: 'left',width: 130, totalRowText: '合计行'}
            ,{field:'fname', title:'姓名', width: 70}
            ,{field:'fidcard', title:'证件号码', width: 180}
            ,{field:'fcellphonenum', title:'电话号码', width: 180}
            ,{field:'message', title:'发送内容', width: 120}
            ,{field:'whether', title:'是否成功', width: 90,template:function(d){
                    return d.whether==1?"是":"否"
                }}

        ]]
        ,limit:4
        ,id:'userTable'
        ,page: true
    })
    $("#bth").on("click",function(){
        table.reload('userTable', {
            where: { //设定异步数据接口的额外参数，任意设
                endServiceTime: $("#endServiceTime").val(),
                beginServiceTime: $("#beginServiceTime").val(),
                whether: $("#whether").val()
            }
            ,page: {
                curr: 1 //重新从第 1 页开始
            }

        });



    })






})