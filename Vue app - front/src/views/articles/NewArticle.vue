<template>
  <div>
    <h1>New Article</h1>
  </div>
  <p>
    <input type="text" placeholder="Title" v-model="state.text" />
    <span v-if="v$.text.$error">
      {{ v$.text.$errors[0].$message }}
    </span>
  </p>

  <p>
    <textarea
      type="text"
      placeholder="Body"
      cols="22"
      rows="6"
      v-model="state.body"
    ></textarea>
     <span v-if="v$.body.$error">
      {{ v$.body.$errors[0].$message }}
    </span>
  </p>
  <button @click="submitForm">Submit</button>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      text: '',
      body: '',
    });

    const rules = computed(() => {
      return {
        text: { required },
        body: { required, minLength: minLength(10)},
      };
    });
    const v$ = useValidate(rules, state)

    return {
      state, 
      v$,
    }
  },

  methods: {
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("Form successfuly submitted.");
      } else {
        alert("Form failed validation.");
      }
    },
  },
};
</script>
