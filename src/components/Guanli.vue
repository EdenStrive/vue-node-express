<template>
    <div>
        <home></home>
        <div class="Blog-ar">
            <el-table :data="tableData" border class="form-a">
                <el-table-column prop="user_id" label="用户名" width="100">
                </el-table-column>
                <el-table-column prop="password" label="密码" width="120">
                </el-table-column>
                <el-table-column prop="role" label="权限" width="120">
                </el-table-column>
                <el-table-column  label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small">移除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import home from './home'
export default {
    name: 'Guanli',
    data() {
        return {
        tableData: []
      }
    },
    components:{
        home
    },
    methods: {
        handleClick(row) {
        console.log(row);
      }
    },
    created(){
        this.$ajax.get(this.host+"/users")
        .then(res =>{
            console.log(res['data']);
            this.tableData = res['data'];
        })
        .catch(error =>{
            console.log(error);
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .form-a{
        position: absolute;
        width: 30%;
        margin-top: 10%;
        margin-left: 35%;
        box-shadow: 0px 0px 50px #ffffff;
    }
    .Blog-ar{
        width: 100%;
        height: 95vh;
        background-image: url("../../static/img/7.jpg");
        background-size: 100%;
    }
</style>
