<template>
  <q-page padding>
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <q-btn-toggle
          v-model="model"
          spread
          flat
          toggle-color="primary"
          text-color="black"
          size="lg"
          :options="[
            { label: '登录', value: 'one' },
            { label: '注册', value: 'two' }
          ]"
        />
      </div>
    </div>
    <component :is="componentId"></component>
  </q-page>
</template>

<script>
import signup from "../user/Signup.vue";
import signin from "../user/Signin.vue";
export default {
  data() {
    return {
      model: "one",
      secondModel: "one",
      componentId: "signup"
    };
  },
  watch: {
    model(val) {
      if (val === "two") {
        this.componentId = "signin";
      } else {
        this.componentId = "signup";
      }
    }
  },
  methods: {},
  components: {
    signup,
    signin
  }
};
</script>

<style lang="scss" scoped></style>
