<template>
  <div class="top">
    <el-row>
      <el-col class="alien_center">
        <el-card class="login_main" shadow="false">
          <el-image :src="img_src" />
          <el-form
            :label-position="labelPosition"
            label-width="100px"
            :model="loginForm"
            :rules="rules"
            ref="loginForm"
          >
            <el-form-item prop="id" label="ID">
              <el-input
                placeholder="아이디를 입력해주세요."
                v-model="loginForm.userId"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password" label="Password">
              <el-input
                type="password"
                placeholder="패스워드를 입력해주세요."
                v-model="loginForm.password"
                autofocus
              ></el-input>
            </el-form-item>
            <el-button type="primary" @click="btn_login('loginForm')"
              >로그인</el-button
            >
            <el-button v-on:click="btn_join" type="">회원가입</el-button>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { executeLogin } from '../api/user.api';

export default {
  name: 'Login',
  data() {
    const validPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('패스워드를 입력해 주세요'));
      }
      callback();
    };
    const validId = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('아이디를 입력해 주세요'));
      }
      callback();
    };
    return {
      labelPosition: 'left',
      img_src: 'logo.jpg',
      loginForm: {
        userId: '',
        password: '',
      },
      rules: {
        userId: [{ validator: validId, trigger: 'blur' }],
        password: [{ validator: validPassword, trigger: 'blur' }],
      },
    };
  },
  methods: {
    btn_login(formname) {
      //검증
      this.$refs[formname].validate((valid) => {
        if (valid) {
          this.$router.push('/main')
          /*executeLogin({
            id: this.loginForm.userId,
            password: this.loginForm.password,
          }).then((res)=> {
            this.$store.commit('setUserState', {
              userId: this.joinForm.userId,
              userNm: this.joinForm.userNm,

            }); // 유저 정보 업데이트
            //res userNm, userId, email
            console.log(res);
          }).catch( ()=>{
            // this.$refs[formname].password.focus(); 포커스 어떡하냐
          });*/
        }
      });
    },
    btn_join() {
      this.$router.push('join');
    },
  },
};
</script>

<style scoped>

.login_main {
  display: inline-block;
  height: 100%;
  width: 500px;
}
</style>
