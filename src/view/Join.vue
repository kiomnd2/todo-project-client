<template>
  <div class="top">
    <el-row>
      <el-col class="alien_center">
        <el-card class="join_main" shadow="false" v-loading="loading">
          <span>가입화면</span>
          <el-form
            :label-position="labelPosition"
            label-width="100px"
            :model="joinForm"
            :rules="rules"
            ref="joinForm"
          >
            <el-form-item prop="userId" label="ID">
              <el-input
                placeholder="아이디를 입력해주세요"
                v-model="joinForm.userId"
              ></el-input>
            </el-form-item>
            <el-form-item prop="userNm" label="Name">
              <el-input
                placeholder="이름을 입력해주세요"
                v-model="joinForm.userNm"
              ></el-input>
            </el-form-item>
            <el-form-item prop="email" label="Email">
              <el-input
                placeholder="이메일을 입력해 주세요"
                v-model="joinForm.email"
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="password" label="Password">
              <el-input
                type="password"
                placeholder="패스워드를 입력해주세요"
                v-model="joinForm.password"
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="checkPassword" label="Confirm">
              <el-input
                type="password"
                placeholder="패스워드를 재입력 해주세요"
                v-model="joinForm.checkPassword"
              >
              </el-input>
            </el-form-item>
            <el-button type="primary" v-on:click="btn_submit('joinForm')"
              >가입하기</el-button
            >
            <el-button @click="btn_reset('joinForm')">RESET</el-button>
            <el-button @click="btn_back">뒤로가기</el-button>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { executeRegister } from '../api/user.api';

export default {
  name: 'Join',
  data() {
    const validId = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('아이디를 입력해주세요.'));
      } else {
        callback();
      }
    };
    const validNm = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('이름을 입력해주세요.'));
      } else {
        callback();
      }
    };

    const validPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('패스워드를 입력해 주세요.'));
      } else {
        callback();
      }
    };
    const validCheckPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('패스워드를 확인해 주세요.'));
      } else if (value !== this.joinForm.password) {
        callback(new Error('패스워드가 일치하지 않습니다.'));
      }
      callback();
    };
    const validEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('이메일을 입력해주세요.'));
      }
      callback();
    };

    return {
      labelPosition: 'left',
      joinForm: {
        userId: '',
        userNm: '',
        password: '',
        checkPassword: '',
        email: '',
      },
      loading: false,
      rules: {
        userId: [
          {
            validator: validId,
            trigger: 'blur',
          },
        ],
        userNm: [
          {
            validator: validNm,
            trigger: 'blur',
          },
        ],
        password: [
          {
            validator: validPassword,
            trigger: 'blur',
          },
        ],
        checkPassword: [
          {
            validator: validCheckPassword,
            trigger: 'blur',
          },
        ],
        email: [
          {
            validator: validEmail,
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    btn_submit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.loading = true;
          executeRegister(this.joinForm)
            .then(() => {
              this.loading = false;
              this.$router.push('/');
            })
            .catch((e) => {
              this.$message('로그인이 실패 했습니다.');
              this.loading = false;
              console.log(e);
            });
        }
      });
    },
    btn_reset(form) {
      this.$refs[form].resetFields();
    },
    btn_back() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>

.join_top {
  text-align: center;
  display: inline-block;
}

.join_main {
  display: inline-block;
  height: 100%;
  width: 500px;
}
</style>
