<script setup>
import { ref, computed } from 'vue'

const min = ref(0)
const max = ref(10000)
const firstValue = ref(2500)

const secondValue = ref(7500)

const updateFirstValue = (value) => {
  if (value < secondValue.value) {
    firstValue.value = value
  }
  // else {
  // firstValue.value = secondValue.value / 2;
  // }
}
const updateSecondValue = (value) => {
  if (value > firstValue.value) {
    secondValue.value = value
  }
  //   else {
  //     secondValue.value = firstValue.value / 2;
  //   }
}

const progressColor = computed(() => {
  const percent =
    ((secondValue.value - firstValue.value) / (max.value - min.value)) * 100
  console.log(percent)
  return `linear-gradient(to right, #8a33fd 0%,  #8a33fd ${percent}%, rgb(128, 125, 126) 100%)`
})
</script>

<template>
  <div class="wrapper__ranges">
    <div class="ranges__inputs">
      <div class="ranges__inputs__slider">
        <div
          class="ranges__inputs__slider__progress"
          :style="{ background: progressColor }"
        ></div>
      </div>

      <div class="ranges__inputs__range-input">
        <input
          type="range"
          min="0"
          max="10000"
          :value="firstValue"
          :min="min"
          :max="max"
          @input="updateFirstValue($event.target.value)"
        />
        <input
          type="range"
          min="0"
          max="10000"
          :value="secondValue"
          :min="min"
          :max="max"
          @input="updateSecondValue($event.target.value)"
        />
      </div>
    </div>

    <div class="ranges__price__text">
      <div>${{ firstValue }}</div>
      <div>${{ secondValue }}</div>
    </div>
  </div>
</template>

<style lang="scss">
.wrapper__ranges {
  padding: 40px 34px;
  & .ranges__inputs {
    padding-bottom: 20px;
    &__slider {
      background: rgb(128, 125, 126, 0.6);
      border-radius: 4px;
      width: 100%;
      height: 3px;
      position: relative;
      &__progress {
        // background: #8a33fd;
        height: 3px;
        border-radius: 4px;
        position: absolute;
        left: 25%;
        right: 25%;
      }
    }
    &__range-input {
      position: relative;
      & input {
        position: absolute;
        top: -5px;
        height: 5px;
        width: 100%;
        background: none;
        pointer-events: none;
        &[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #8a33fd;
          pointer-events: auto;
        }
        &[type='range']::-moz-slider-thumb {
          -moz-appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #8a33fd;
          pointer-events: auto;
        }
        //         &:nth-child(even)::-webkit-slider-thumb {
        //   background: green;
        // }

        // &:nth-child(odd)::-webkit-slider-thumb {
        //   background: orange;
        // }
      }
    }
  }

  & .ranges__price__text {
    display: flex;
    gap: 20px;
    & div {
      font-weight: 500;
      font-size: 16px;
      color: #3c4242;
      border: 1px solid rgba(190, 188, 189, 0.8);
      border-radius: 8px;
      opacity: 0.8;
      padding: 7px 30px;
      &:hover {
        background: rgba(190, 188, 189, 0.1);
        cursor: pointer;
      }
    }
  }
}
</style>
