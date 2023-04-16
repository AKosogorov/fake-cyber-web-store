import type { RouteLocationRaw } from 'vue-router'
import type { Component, ComputedRef } from 'vue'

export interface INavItem {
  to: RouteLocationRaw
  label: string
  icon?: Component
  isActive?: ComputedRef<boolean>
}
