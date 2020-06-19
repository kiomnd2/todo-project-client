<template>
    <div style="text-align: center;">
        <el-card shadow="true" style="width: 900px;" class="alien_center">
            <el-form>
                <el-row>
                    <el-col :span="22">
                        <el-form-item>
                            <el-input icon="el-icon-edit" v-model="contents"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2">
                        <el-form-item>
                            <el-button @click="regContent" type="primary" native-type="button">등록</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <el-table :data="tableData">
                <el-table-column
                        label="날짜"
                        prop="regDate"
                        width="120"
                ></el-table-column>
                <el-table-column
                        width="200"
                        label="내용"
                        prop="content"
                ></el-table-column>
                <el-table-column align="right">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
import ListService from '../api/list.api'
export default {
  name: 'Main',
    data() {
        return {
            userId: '',
            tableData : [
                {
                    id: '1',
                    regDate: '2099-12-31',
                    content: '안녕하세요',
                },
                {
                    id: '2',
                    regDate: '2099-12-31',
                    content: '안녕하세요22',
                },

            ],
            search: '',
            contents: '',
        }
    },
    methods :{
        async regContent() {
            const data = {
                memberDto: {
                    userId: this.userId,
                },
                contents : this.contents,
                isComplete: false,
            };
            console.log(data);
            try {
               const list = await ListService.RegisterList(data);
               console.log(list);

            } catch (e) {
                console.log(e);
                this.$message.error("등록에 실패했습니다.");
            }


        },
        handleEdit(index, row) {
            console.log(index);
            console.log(row);
        },
        handleDelete(index, row) {
            console.log(index);
            console.log(row);
        }
    },
    async created() {
        this.userId = this.$store.getters.getUser.userId;
        const list = await ListService.getAllList(this.userId);
        console.log(list.data);
        this.tableData = list.data;
    }
  };
</script>

<style scoped>
.main  {
    width: 780px;
}

</style>