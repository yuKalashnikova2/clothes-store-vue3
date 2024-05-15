<script setup>
    const props = defineProps({
      color: {
        type: String,
        default: 'Black',
      },
    })

    const emit = defineEmits(['chooseColor'])
    const nameColor = (color) => {
      let firstChar = color.charAt(0).toUpperCase()
      let wholeWord = firstChar + color.slice(1) 
      return wholeWord
    }
    const getColorClass = (color) => {
  if (color === 'Red') {
    return 'sidebar__colors__item__decor_bg-red'
  }
  if (color === 'Blue') {
    return 'sidebar__colors__item__decor_bg-blue'
  }
  if (color === 'Brown') {
    return 'sidebar__colors__item__decor_bg-brown'
  }
  if (color === 'Black') {
    return 'sidebar__colors__item__decor_bg-black'
  }
  if (color === 'White') {
    return 'sidebar__colors__item__decor_bg-white'
  }
  if (color === 'Green') {
    return 'sidebar__colors__item__decor_bg-green'
  }
  if (color === 'Yellow') {
    return 'sidebar__colors__item__decor_bg-yellow'
  }
  if (color === 'Navy') {
    return 'sidebar__colors__item__decor_bg-navy'
  }
  if (color === 'Purple') {
    return 'sidebar__colors__item__decor_bg-purple'
  }
  if (color === 'Orange') {
    return 'sidebar__colors__item__decor_bg-orange'
  }
  if (color === 'Gray') {
    return 'sidebar__colors__item__decor_bg-gray'
  }
  if (color === 'Pink') {
    return 'sidebar__colors__item__decor_bg-pink'
  }
}
</script>

<template>
    <div class="sidebar__colors__item" 
    @click="emit('chooseColor')">
        <div
          :class="['sidebar__colors__item__decor', getColorClass(nameColor(color))]"
        ></div>
        <span>{{ nameColor(color) }}</span>
      </div>
</template>

<style lang="scss" scoped>
    .sidebar__colors__item {
      display: flex;
      flex-direction: column;
      gap: 18px;
      align-items: center;
      & span {
        font-weight: 600;
        font-size: 14px;
        color: #8a8989;
      }
      &__decor {
        border-radius: 12px;
        width: 36px;
        height: 36px;

        &_bg-purple {
          background: #8434e1;
        }
        &_bg-black {
          background: #252525;
        }
        &_bg-red {
          background: #f35528;
        }
        &_bg-orange {
          background: #f16f2b;
        }
        &_bg-navy {
          background: #345eff;
        }
        &_bg-white {
          background: #fff;
          border: 0.97px solid #f4f1f1;
          box-sizing: border-box;
        }
        &_bg-brown {
          background: #d67e3b;
        }
        &_bg-green {
          background: #48bc4e;
        }
        &_bg-yellow {
          background: #fdc761;
        }
        &_bg-gray {
          background: #e4e5e8;
        }
        &_bg-pink {
          background: #e08d9d;
        }

        &_bg-blue {
          background: #3fdeff;
        }
      }
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
</style>