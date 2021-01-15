<template>
  <v-container grid-list-xs>
    <h1>Test Submit Form</h1>
    <v-form v-model="validate" ref="form" class="mb-12" @submit.prevent="submit_form">
      <v-container>
        <v-row class="mb-4">
          <v-col cols="6" md="4">
            <v-text-field
              v-model="input.username"
              :rules="input.usernameRules"
              :counter="30"
              label="username"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="6" md="4">
            <v-text-field
              v-model="input.email"
              :rules="input.emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn
          type="submit"
          :disabled="!validate"
          color="success"
          elevation="2"
          outlined
          class="mr-2"
          style="color: white"
        >
          Submit
        </v-btn>
        <v-btn
          @click="form_reset"
          type="button"
          color="primary"
          elevation="2"
          outlined
          class="mr-2"
          style="color: white"
        >
          Reset Form
        </v-btn>
      </v-container>
    </v-form>

    <img src="data:image/jpeg;base64,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">

    <a href="scbeasysim://purchase/5687587c-d3df-4c1c-8dc7-329b3ef5b869">Deep Link</a>

    <v-divider class="mb-4"></v-divider>

  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Test1",
  data() {
    return {
      validate: true,
      input: {
        username: "",
      usernameRules: [
        (rule) => !!rule || "กรุณากรอก username",
        (rule) => rule.length <= 30 || "ตัวอักษรไม่เกิน 30 ตัวอักษร",
      ],
      email: "",
      emailRules: [
        (rule) => !!rule || "กรุณากรอก email",
        (rule) => /.+@.+/.test(rule) || "กรอก email ไม่ถูกต้อง",
      ],
      },
      
    };
  },
  methods: {
    form_reset() {
      this.$refs.form.reset();
    },
    submit_form() {
      console.log("btn submit click")
      axios
        .post("http://localhost:8080/api/v1/createUser", this.input)
        .then((response) => console.log(response.data))
        .catch(console.error())
      this.form_reset()
    },
  },
};
</script>

<style>
</style>