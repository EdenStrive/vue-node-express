<template>
    <div>
        <home></home>
        <div class="Blog-ar">
                <el-table :data="tableData" class="table-ui">
                    <el-table-column label="日期" width="180">
                        <template slot-scope="scope">
                            <i class="el-icon-time"></i>
                            <span style="margin-left: 10px">{{ scope.row.create_time }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="姓名" width="180">
                        <template slot-scope="scope">
                            <el-popover trigger="hover" placement="top">
                            <p>主题: {{ scope.row.title }}</p>
                            <p>日期: {{ scope.row.create_time }}</p>
                            <div slot="reference" class="name-wrapper">
                                <el-tag size="medium">{{ scope.row.title }}</el-tag>
                            </div>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <!-- <quill-editor ref="myTextEditor" :options="editorOption">
                </quill-editor> -->
        </div>
    </div>
</template>
<script>
import home from './home'
export default {
    name: 'admin',
    data() {
        return {
                tableData: []
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
            handleEdit(index, row) {
              console.log(row);
            },
            handleDelete(index, row) {
              console.log(index, row);
            }
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .table-ui{
        position: absolute;
        width: 40%;
        margin-top: 10%;
        margin-left: 30%;
        box-shadow: 0px 0px 50px #ffffff;
    }
    .Blog-ar{
        width: 100%;
        height: 95vh;
        background-image: url("../../static/img/7.jpg");
        background-size: 100%;
    }
</style>
