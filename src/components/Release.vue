<template>
    <div class="big-div">
        <home></home>
        <div class="Blog-ar">
            <span class="title">写下你的心得</span>
            <div class="richText">
                <div class="neinei">
                    <span class="title-t">请输入标题：</span>
                    <el-input v-model="title" placeholder="请输入内容" class="biaoti"></el-input>
                    <el-button type="primary" class="tijiao" @click="fabu()">发布</el-button>                
                </div>
                <quill-editor   
                    ref="myTextEditor" 
                    v-model="content" 
                    :options="editorOption" 
                    @change="onEditorChange($event)"
                    class= "xxx">
                </quill-editor>
            </div>
        </div>
    </div>
</template>
<script>
import home from './home'
import qs from "qs"

export default {
    name: 'Release',
    data() {
        return {
                title:'',
                tableData: [],
                content: '<h2>I am Example</h2>',
                editorOption: {
                }
            }
        },
        components:{
              home
          },
        created(){
                console.log("取出vuex中的数据");
                this.tableData = this.$store.state.category;
                console.log(this.tableData);
                var cookie = JSON.parse(this.$Cookies.get('cookie'));
                console.log(cookie);
                this.role = cookie['role'];
                if (this.role == '游客') {
                    this.$router.push('/saidto')
                }
          },
        methods: {
            fabu(){
                var x = new Date();
                var mont = x.getMonth()+1
                var time = x.getFullYear()+"-"+mont+"-"+x.getDate()
                console.log(time)
                this.$ajax.post(this.host+"/fabu",qs.stringify({
                    title:this.title,
                    content:this.content,
                    create_time:time
                }))
                .then((res) =>{
              // console.log(res['data']['code']);
                  if (res.data.code==1) {
                          console.log("新增成功"); 
                          this.$message({
                              showClose:true,
                              message:'新增成功',
                              type:'success',
                              duration:2000,
                              customClass:'message-type'
                          });
                     }else{
                          console.log("新增失败"); 
                          this.$message.error("发生错误")
                     }
                })
            },
            onEditorChange({ editor, html, text }) {
                // console.log('editor change!', editor, html, text)
                this.content = html
                console.log(this.content)
            }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tijiao{
        margin-left: 50px;
    }
    .neinei{
        padding: 20px;
    }
    .title-t{
        font-size: 150%;
    }
    .biaoti{
        border: black solid 1px;
        border-radius: 5px;
        width: 50%
    }
    .xxx{
        min-height:400px
    }
    .title{
        display: inline-block;
        width:100%;
        text-align: center;
        font-size: 200%;
        margin-top: 70px;
    }
    .big-div{
        width: 100%;
        height: 100%;
        background-image: url("../../static/img/7.jpg");
        background-size: 100%;
    }
    .richText{
        position: relative;
        margin-left: 10%;
        margin-top: 60px;
        background-color: rgb(255, 255, 255);
        width: 80%;
    }
    .Blog-ar{
        width: 100%;
        min-height: 100vh;
    }
</style>
