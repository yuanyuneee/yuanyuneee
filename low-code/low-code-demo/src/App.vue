<template>
  <div id="app">
    <Editor v-model="state"></Editor>
  </div>
</template>

<script>
import { ref, provide } from "vue";
import data from "./data"; // 描述渲染的内容
import Editor from "./packages/editor";
import { registerConfig as config } from "@/utils/editor-config";

export default {
  components: { Editor },
  setup() {
    provide('config', config);
    const state = ref(data);
    return {
      state,
    };
  },
};
</script>

<style lang="scss">
#app {
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
}
</style>
