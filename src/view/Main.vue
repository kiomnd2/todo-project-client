<template>
    <div style="text-align: center;">
        <el-card shadow="true" style="width: 900px;" class="alien_center">
            <el-form>
                <el-row>
                    <el-col :span="22">
                        <el-form-item>
                            <el-input icon="el-icon-edit" v-model="regContent"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2">
                        <el-form-item>
                            <el-button type="primary" native-type="submit">등록</el-button>
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
                        width="100"
                        label="작성자"
                        prop="userNm"
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
  export default {
    name: 'Main',
    data() {
        return {
            tableData : [
                {
                    regDate: '2099-12-31',
                    content: '안녕하세요',
                    userNm: '김형익',
                },
                {
                    regDate: '2099-12-31',
                    content: '안녕하세요22',
                    userNm: '김개똥',
                },

            ],
            search: '',
            regContent: '',
        }
    },
    methods :{
        handleEdit(index, row) {
            console.log(index);
            console.log(row);
        },
        handleDelete(index, row) {
            console.log(index);
            console.log(row);
        }
    }
  };
</script>

<style scoped>
.main  {
    width: 780px;
}

</style>