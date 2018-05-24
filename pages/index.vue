<template>
  <v-conrainer>
    <v-layout column>
        <v-flex>
             <h1>Register</h1>
        </v-flex>
        <v-flex>
            <v-text-field v-model="user" label="ชื่อผู้ใช้"/>
        </v-flex>
   
        <v-flex>
            <v-text-field v-model="pass" type="password" label="รหัสผ่าน"/>   
        </v-flex>
    
        <v-flex>
            <v-text-field v-model="pass2" type="password" label="รหัสผ่านอีกครั้ง"/>
        </v-flex>
    
        <v-flex>
            <v-btn @click="register"><v-icon>favorite</v-icon> "ลงทะเบียน" </v-btn> 
        </v-flex>
    
    </v-layout>
  </v-conrainer>
</template>
<script>
export default {
  data() {
    return {
      user: '',
      pass: '',
      pass2: '',
    }
  },
  methods: {
    register() {

    },
  },
}
</script>