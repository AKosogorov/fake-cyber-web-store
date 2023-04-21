import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import { useIsBoolean } from '@/shared/lib/use/base/useIsBoolean'

interface ITheBurgerMenuStore {
  isActive: Ref<boolean>
  openBurgerMenu: () => void
  closeBurgerMenu: () => void
  toggleBurgerMenu: () => void
}

const NAMESPACE = 'the-burger-menu'

export const useTheBurgerMenuStore = defineStore(NAMESPACE, (): ITheBurgerMenuStore => {
  const {
    isBoolean: isActive,
    setTrue: openBurgerMenu,
    toggle: toggleBurgerMenu,
    setFalse: closeBurgerMenu
  } = useIsBoolean()

  return {
    isActive,
    openBurgerMenu,
    toggleBurgerMenu,
    closeBurgerMenu
  }
})
