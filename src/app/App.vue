<template>
  <div class="app-bg" />
  <EmptyLayout v-if="isEmptyLayout" />

  <MainLayout v-else>
    <template v-slot:header>
      <TheHeader />
    </template>

    <template v-slot:footer>
      <TheFooter />
    </template>

    <TheBurgerMenu>
      <ProductCategories />
    </TheBurgerMenu>
  </MainLayout>

  <TheAlerts />
</template>

<script setup lang="ts">
import './styles/index.scss'

import { TheHeader } from '@/widgets/TheHeader'
import { TheFooter } from '@/widgets/TheFooter'
import { MainLayout, EmptyLayout } from '@/shared/ui/layouts'
import { TheBurgerMenu } from '@/shared/ui/TheBurgerMenu'
import { TheAlerts, useAlertsStore } from '@/shared/ui/TheAlerts'

import { computed, onBeforeMount, provide } from 'vue'
import { useRoute } from 'vue-router'
import { EAppProviders, AppRoutes, useAppStore } from './providers'
import { SessionModel, SessionApi } from '@/entities/Session'
import { ProductCategories } from '@/entities/Product'
import { AuthModel } from '@/features/auth'

provide(EAppProviders.AppRoutes, AppRoutes)

useAppStore()

const route = useRoute()
const isEmptyLayout = computed(() => route.meta.layout === 'empty')

const session = SessionModel.useSessionStore()
const auth = AuthModel.useAuth()

const { showError } = useAlertsStore()

onBeforeMount(() => {
  if (!session.refreshToken) return
  login()
})

async function login() {
  try {
    const { data } = await SessionApi.getToken(session.refreshToken)

    session.setTokens({
      idToken: data.id_token,
      refreshToken: data.refresh_token
    })

    await auth.loadSessionUser(data.user_id)
  } catch (e: any) {
    showError(e.message)
  }
}
</script>
