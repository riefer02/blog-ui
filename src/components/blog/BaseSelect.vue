<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <select
      :value="modelValue"
      class="field"
      v-bind="{
        ...$attrs,
        onChange: $event => {
          $emit('update:modelValue', $event.target.value);
        }
      }"
    >
      <option value="" disabled selected>{{ placeholder }}</option>
      <option
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option === modelValue"
        >{{ option }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      required: true
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
optgroup,
select {
  display: inline-flex;
  font-family: 'Open sans', sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

label,
input {
  float: left;
  clear: both;
}

input,
select {
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
}
</style>
