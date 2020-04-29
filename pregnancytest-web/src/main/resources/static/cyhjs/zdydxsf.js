layui.use(['jquery','table','form'], function(){
    var table = layui.table;
    var $ = layui.jquery;
    var form=layui.form;
  var arr =new Array();
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
        ,url:'getMinfoAndTherestAndInformation'
        ,toolbar: '#toolbarDemo' //开启头部工具栏，并为其绑定左侧模板
        ,defaultToolbar: ['filter', 'exports', 'print']
        ,cols: [[
            {type:'checkbox', fixed: 'left'}
            ,{field:'mid', title:'档案编号'}
            ,{field:'fname', title:'姓名'}
            ,{field:'fidcard', title:'身份证号'}
            ,{field:'fage', title:'年龄'}
            ,{field:'fbirthdate', title:'妻子出生日期'}
            ,{field:'address', title:'住址'}
            ,{field:'fcellphonenum', title:'手机号'}

        ]]
        ,limit:4
        ,id:'userTable'
        ,page: true
    })

    $("#sendduanxin").on("click",function(){
var t;
        var message=$("#tbUnit").val();

        for (var i = 0; i < arr.length; i++) {

            $.ajax({
                type:"post",
                data:{"mid":arr[i].mid,"fcellphonenum":arr[i].fcellphonenum,message:message,"whether":1}, //只有这一个参数，json格式，后台解析为实体，后台可以直接用
                url:"addNote",
                dataType:"text",
                success:function(result){
                    if(result=='true'){
                        layer.msg("发送成功");
                    }else{
                        layer.msg("发送失败");
                    }
                }
            })




        }


    })


    $("#bth").on("click",function(){

       var fx = parseInt($("#check").val());
       var sex=0;
       var check=0;
       var ty=0;
       switch (fx) {
           case 1:
               ty=2;
               check=2;
               sex=2;
               break;
           case 2:
               ty=2;
               sex=1;
               check=2;
               break;
           case 3:
               ty=1;
               check=2;
               break;
           case 4:
               ty=1;
               check=1;
               break;
       }
        table.reload('userTable', {
            where: { //设定异步数据接口的额外参数，任意设
                endServiceTime: $("#endServiceTime").val(),
                beginServiceTime: $("#beginServiceTime").val(),
                check: check,
                ty:ty,
                sex:sex,
                fname: $("#fname").val(),
                fidcard: $("#fidcard").val()
            }
            ,page: {
                curr: 1 //重新从第 1 页开始
            }

        });



    })




    table.on('checkbox(test)', function(obj){
        var a=0;

        if(obj.checked==true) {


            if(arr.length<=0){
                arr.push(obj.data);

            }else {
                for (var i = 0; i < arr.length; i++) {

                    if (arr[i].mid == obj.data.mid) {
                        a++;
                    }
                }

                if(a==0){
                    arr.push(obj.data);
                }
            }
        }else{
            for (var i = 0; i < arr.length; i++) {

                if (arr[i].mid == obj.data.mid) {
                   arr.splice(i,1);
                }
            }
        }

      console.log(arr);
    });


    //头工具栏事件
    table.on('toolbar(test)', function(obj){
        var checkStatus = table.checkStatus(obj.config.id);
        switch(obj.event){
            case 'getCheckData':
                var data = checkStatus.data;
                layer.alert(JSON.stringify(data));
                break;
            case 'getCheckLength':
                var data = checkStatus.data;
                layer.msg('选中了：'+ data.length + ' 个');
                break;
            case 'isAll':
                layer.msg(checkStatus.isAll ? '全选': '未全选');
                break;
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




})