<template>
    <div>
        <home></home>
        <div class="Blog-ar">
            <div class="form-a">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="留言">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">确定</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
import qs from "qs"
import home from './home'
export default {
    name: 'said',
    data() {
        return {
        form: {
            desc: ''
        }
      }
    },
    components:{
        home
    },
    methods: {
        onSubmit() {
          var userid =JSON.parse(this.$Cookies.get('cookie'))['user_id'];
          console.log('submit!');
          this.$ajax.post("http://localhost:3030/said",qs.stringify({
              content:this.form.desc,
              user_id:userid
          }))
          .then(res =>{
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
                          setTimeout(() => {
                              this.$router.push("/saidto")
                          },2000);
                     }else{
                          console.log("新增失败"); 
                          this.$message.error("请按照正确的格式留言。")
                     }
          })
          .catch(error =>{
              console.log(error);
          })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .form-a{
        position: absolute;
        width: 30%;
        margin-top: 15%;
        margin-left: 35%;
    }
    .Blog-ar{
        width: 100%;
        height: 95vh;
        background-image: url("../../static/img/7.jpg");
        background-size: 100%;
    }

</style>
