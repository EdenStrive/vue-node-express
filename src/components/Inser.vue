<template>
    <div>
        <home></home>
        <div class="Blog-ar">
            <div class="form-a">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="用户名">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item label="特殊资源">
                        <el-radio-group v-model="form.resource">
                        <el-radio label="管理员"></el-radio>
                        <el-radio label="游客"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即添加</el-button>
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
    name: 'admin',
    data() {
        return {
            form: {
            name: '',
            password:'',
            resource: ''
            }
        }
    },
    components:{
        home
    },
    methods: {
      onSubmit() {
        console.log('submit!');
        this.$ajax.post(this.host+"/inser",qs.stringify({
            username:this.form.name,
            password:this.form.password,
            role:this.form.resource
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
                            this.$router.push("/Guanli")
                        },2000);
                   }else{
                        console.log("新增失败"); 
                        this.$message.error("请按照正确的格式来输入用户名密码。")
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
