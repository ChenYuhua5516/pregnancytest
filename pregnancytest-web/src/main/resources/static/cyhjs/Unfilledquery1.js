
layui.use(['jquery','table','form'], function(){
    var table = layui.table;
    var $ = layui.jquery;
    var form=layui.form;

    $.post('findChecktypeinfo',function(result){
        var str="<option value='0'>--请选择--</option>";
        $(result).each(function() {
            str+="<option value="+this.cid+">"+this.checktype+"</option>";
        })
        $("#cid").append(str);
        form.render('select');

    })

    table.render({
        elem: '#test'
        ,url:'getMinfoAndInformation'
        ,toolbar: '#toolbarDemo' //开启头部工具栏，并为其绑定左侧模板
        ,defaultToolbar: ['filter', 'exports', 'print']
        ,cols: [[
            {field:'mid', title:'档案编号', fixed: 'left',width: 130, totalRowText: '合计行'}
            ,{field:'fname', title:'妻子姓名', width: 70}
            ,{field:'fidcard', title:'妻子证件号码', width: 180}
            ,{field:'fbirthdate', title:'妻子出生日期', width: 120}
            ,{field:'mname', title:'丈夫姓名', width: 90}
            ,{field:'mbirthdate', title:'丈夫出生日期', width: 120}
            ,{field:'mcellPhoneNum', title:'丈夫手机号', width: 90}
            ,{field:'servicetime', title:'建档日期', width: 120}

        ]]
        ,limit:4
        ,id:'userTable'
        ,page: true
    })
    $("#bth").on("click",function(){



     var zz=0;

 var sex=$("#sex").val();
        var typeid=$("#typeid").val();
if(sex=="nan"){
    zz=1;
}else{
    zz=2;
}

     var endServiceTime =   $("#endServiceTime").val();

        var beginServiceTime =   $("#beginServiceTime").val();



        table.reload('userTable', {
            where: { //设定异步数据接口的额外参数，任意设
                typeid: typeid,
                sex: zz,
                endServiceTime:endServiceTime,
                beginServiceTime:beginServiceTime
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

    //监听行单击事件（双击事件为：rowDouble）
    table.on('row(test)', function(obj){
        $(".layui-table-body tr ").attr({"style":"background:#FFFFFF"});//其他tr恢复原样

        var data = obj.data;
        layer.open({
            type: 1
            ,offset: 'auto' //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
            ,id: 'layerDemo'+1 //防止重复弹出
            ,content: "<div style='padding: 20px 100px;'>根据"+data.mid+"该编号查看</div>"
            ,btn: '确定'
            ,btnAlign: 'c' //按钮居中
            ,shade: 0 //不显示遮罩
            ,yes: function(){
                layer.closeAll();
            }
        });

        $.ajax({
            type:"post",
            url:"setSessionIN",
            data:data,
            dataType:"text",
            success:function(result){

            }
        })

        //标注选中样式
        obj.tr.addClass('layui-table-click').siblings().removeClass('layui-table-click');
        obj.tr.css("color","red");
    });


})