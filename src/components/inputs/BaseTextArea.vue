<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <textarea
      v-bind="$attrs"
      :placeholder="placeholder"
      class="field"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'BaseTextArea',
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  margin-bottom: 1rem;
}
label {
  margin-right: 1rem;
  font-size: 14px;

  cursor: pointer;
}

label,
textarea {
  display: inline-flex;
  font-family: 'Open sans', sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

label {
  float: left;
  clear: both;
}

textarea {
  margin: 15px 0;
  padding: 15px 10px;
  width: 100%;
  outline: none;
  border: 1px solid #bbb;
  border-radius: 20px;
  display: inline-block;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -ms-transition: 0.2s ease all;
  -o-transition: 0.2s ease all;
  transition: 0.2s ease all;
  max-width: 100%;
  min-width: 100%;
  height: 15rem;
  min-height: fit-content;
}
@media screen and (min-width: 900px) {
  textarea {
    height: 8rem;
  }
}
@media screen and (max-width: 600px) {
  textarea {
    height: 13.5rem;
  }
}
</style>
