<template>
    <div style="text-align: center;">
        <el-card shadow="true" style="width: 900px;" class="alien_center" v-loading="loading">
            <el-tag style="text-align: right; display: block;">{{userId}}님이 로그인 하셨습니다</el-tag>
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
            <el-table :data="tableData" :key="tableData.id">
                <el-table-column
                    label="체크"
                    width="60">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.complete" @change="handleEdit(scope.$index, scope.row)">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column
                        label="날짜"
                        prop="regDate"
                        width="230"
                ></el-table-column>
                <el-table-column
                        label="내용"
                        prop="contents">
                </el-table-column>

                <el-table-column align="right">
                    <template slot-scope="scope">
                        <el-button v-if="!modeE"
                                size="mini"
                                @click="modeE = true">Edit</el-button>
                        <el-button v-else
                                   size="mini"
                                   @click="handleEdit(scope.$index, scope.row)">확인</el-button>

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
            loading: false,
            modeE: false,
            userId: '',
            tableData : [
                {
                    id: '1',
                    regDate: '2099-12-31',
                    contents: '안녕하세요',
                },
                {
                    id: '2',
                    regDate: '2099-12-31',
                    contents: '안녕하세요22',
                },

            ],
            search: '',
            contents: '',
            cntSize: 0,
        }
    },
    methods :{
        async regContent() {
            const data = {
                memberDto: {
                    userId: this.userId,
                },
                contents : this.contents,
                complete: false,
            };
            try {
                this.loading = true;
               const item = await ListService.RegisterList(data);
               this.tableData.push(item.data);
               this.contents= "";
            } catch (e) {
                console.log(e);
                this.$message.error("등록에 실패했습니다.");
            } finally {
                this.loading = false;
            }


        },
        handleEdit(index, row) {
            row = {
                ...row,
                memberDto: {
                    userId: this.userId
                }
            }
            console.log(row);
            ListService.updateList(row);
        },
        handleDelete(index, row) {
            this.$confirm('제거하시겠습니까>', {
                confirmButtonText: '네',
                cancelButtonText: '아니요',
                type: 'warning'
            }).then(() => {
                // this.tableData.
                const item = this.tableData[index];
                // const item = this.tableData.get(index);
                // console.log(this.tableData.get(index))
                this.loading = true;
                ListService.deleteList(item).then(()=>{
                    this.tableData.splice(index, 1);
                    this.$message({
                        type: 'success',
                        message: 'Delete completed'
                    });
                }).catch(()=>{
                    this.$message.error("삭제 실패")
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: 'Delete canceled'
                });
            }).finally(()=>{
                this.loading = false;
            })
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