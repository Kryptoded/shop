<template>
  <div style="position: relative">
    <div class="btn-wrapper next-btn">
      <q-btn
        icon="chevron_right"
        dense
        rounded
        class="bg-white"
        @click="goTo('right')"
      />
    </div>
    <div class="btn-wrapper prev-btn">
      <q-btn
        icon="chevron_left"
        dense
        rounded
        class="bg-white"
        :disable="positionX >= 0"
        @click="goTo('left')"
      />
    </div>
    <div class="slider" ref="slider">
      <div class="wrapper" ref="wrapper">
        <slot> </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const wrapper = ref(null);
const positionX = ref(0);
const slider = ref(null);
const activeChildren = 0;

function goTo(place) {
  const childrens = wrapper.value.children;
  if (
    slider.value.offsetWidth + Math.abs(positionX.value) >=
      wrapper.value.offsetWidth &&
    place === "right"
  ) {
    return;
  }
  if (place === "right") {
    positionX.value -= 200;
  } else {
    positionX.value += 200;
  }
  wrapper.value.style.transform = `translateX(${positionX.value}px)`;
}
</script>

<style scoped>
.slider {
  position: relative;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid #ccc;
  max-width: 100%;
  overflow: hidden;
}

.btn-wrapper {
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
}

.next-btn {
  right: -16px;
}

.prev-btn {
  left: -16px;
}

.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: fit-content;
  transition: transform 0.5s ease;
}
</style>
