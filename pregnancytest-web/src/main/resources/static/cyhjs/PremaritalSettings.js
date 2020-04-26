layui.use(['jquery','table','form'], function(){
    var table = layui.table;
    var $ = layui.jquery;
    var form=layui.form;
    table.render({
        elem: '#test'
        ,url:'findLabWorkBymidAndSex'
        ,toolbar: '#toolbarDemo' //开启头部工具栏，并为其绑定左侧模板
        ,defaultToolbar: ['filter', 'exports', 'print']
        ,cols: [[
           {field:'autoid', title:'ID', fixed: 'left', unresize: true, sort: true, totalRowText: '合计行'}
            ,{field:'mid', title:'受检人编号', edit: 'text'}
            ,{field:'sex', title:'性别', edit: 'text',
                templet:function(d){
                    return d.sex==1?"男":"女"
                }}
            ,{field:'work', title:'项目',  sort: true, totalRow: true}
            ,{field:'unit', title:'单位',  edit: 'text', sort: true}
            ,{field:'scope', title:'参考范围',  sort: true, totalRow: true}
            ,{fixed: 'right', title:'操作', toolbar: '#barDemo', width:150}
        ]]
        ,limit:4
        ,id:'userTable'
        ,page: true
    })
    $("#bth").on("click",function(){
        table.reload('userTable', {
            where: { //设定异步数据接口的额外参数，任意设
                userName: $("#userName").val()
            }
            ,page: {
                curr: 1 //重新从第 1 页开始
            }

        });



    })





    //头工具栏事件
    table.on('toolbar(test)', function(obj){
        var checkStatus = table.checkStatus(obj.config.id);
        switch(obj.event){
            case 'beachDelete':
                var data = checkStatus.data;
                if(data.length==0){
                    layer.alert("请先选择数据在删除！");
                    return ;
                }
                layer.confirm("是否删除选择的"+data.length+"条数据",{title:"提示",icon:3},function(index){
                    var ids = new Array();
                    $.each(data,function(index,item){
                        ids.push(item.id);
                    })
                    console.log(ids);
                    $.ajax({
                        type:"post",
                        url:"beachDeleteUser",
                        contentType:"application/json",
                        data:JSON.stringify(ids),
                        dataType:"json",
                        success:function(result){
                            var count =result.code;
                            layer.msg("你删除了"+count+"条数据",{time:1000,icon:6});
                            table.reload('userTable');
                        }
                    })

                    layer.close(index);
                })
                break;
            case 'add':
                layer.open({
                    type: 2
                    ,title: '新增检查'
                    ,content: "addPremaritalSettings"
                    ,area: ['800px', '600px']
                    ,offset: 'auto'
                    ,end: function(layero, index){
                        table.reload('userTable');
                    }
                });

                break;
        }
    })

    table.on('tool(test)',function(obj){
        var data=obj.data;
        if(obj.event=='del'){
            layer.confirm("确定要删除该行数据吗？",function(index){
                $.ajax({
                    type:"post",
                    url:"deleteLabWorkById",
                    data:{"autoid":data.autoid},
                    dataType:"text",
                    success:function(result){
                        if(result=='true'){
                            layer.msg("删除成功");
                        }else{
                            layer.msg("删除失败");
                        }
                    }
                })
                obj.del();
                layer.close(index);
            })
        }
        else if(obj.event=='edit'){
            shuju = obj.data;
            layer.open({
                type: 2
                ,title: '修改检查'
                ,content: "updatePremaritalSettings"
                ,area: ['800px', '600px']
                ,offset: 'auto'
                ,success:function(layero, index){
                    var iframe=window['layui-layer-iframe'+index];
                    iframe.getId(data.autoid);
                }
                ,end: function(layero, index){
                    table.reload('userTable');
                }
            });
        }
    })

    table.on('row(test)', function(obj){
        console.log(obj.tr) //得到当前行元素对象
        console.log(obj.data) //得到当前行数据
          $("#result").val(obj.data.result);
        $("#workname").val(obj.data.workname);
    });



})