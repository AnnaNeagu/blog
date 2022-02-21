<template>
  <body style="background-color: #f3ead8">
    <div class="root container">
      <span class="text-black fw-bold"><h1>Create an Account</h1></span>
      <div class="mw-3xl mx-auto">
        <p>
          <input type="text" placeholder="Email" v-model="state.email" />
          <span v-if="v$.email.$error">
            {{ v$.email.$errors[0].$message }}
          </span>
        </p>
        <p>
          <input
            type="password"
            placeholder="Password"
            v-model="state.password.password"
          />
          <span v-if="v$.password.password.$error">
            {{ v$.password.password.$errors[0].$message }}
          </span>
        </p>
        <p>
          <input
            type="password"
            placeholder=" Confirm Password"
            v-model="state.password.confirm"
          />
          <span v-if="v$.password.confirm.$error">
            {{ v$.password.confirm.$errors[0].$message }}
          </span>
        </p>
        <button @click="submitForm">Submit</button>
      </div>
    </div>
  </body>
</template>
<script>
import useValidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      email: "",
      password: {
        password: "",
        confirm: "",
      },
    });

    const mustBeLearnVue = (value) => value.includes("gmail");

    const rules = computed(() => {
      return {
        email: {
          required,
          email,
          mustBeLearnVue: helpers.withMessage(
            "Must be learnvue",
            mustBeLearnVue
          ),
        },
        password: {
          password: { required, minLength: minLength(6) },
          confirm: { required, sameAs: sameAs(state.password.password) },
        },
      };
    });
    const v$ = useValidate(rules, state);

    return {
      state,
      v$,
    };
  },

  methods: {
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("Form successfully submitted!");
      } else {
        alert("Form failed validation!");
      }
    },
  },
};
</script>
