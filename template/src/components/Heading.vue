<template>
  <b-masthead>
    <b-masthead-item type="start" v-if="isAuthenticated">
      <span @click="showOffCanvas(true)">
        <b-icon type="menu" />
      </span>
    </b-masthead-item>

    <b-masthead-item type="center">
      <router-link :to="{ name: 'index' }">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 200 200"
          class="logo"
        >
          <path
            d="M 200,100 A 100,100 0 0 1 100,200 100,100 0 0 1 0,100 100,100 0 0 1 100,0 100,100 0 0 1 200,100 Z"
          />
        </svg>
      </router-link>
    </b-masthead-item>

    <b-masthead-item type="end" v-if="isAuthenticated">
      <b-dropdown position="bottom">
        <template #selector>
          <span @click.prevent>
            <b-icon type="profile" />
          </span>
        </template>
        <b-dropdown-item no-hover v-if="state.me">
          {{ $t('hello') }}, {{ state.me.username }}!
        </b-dropdown-item>
        <b-dropdown-divider />
        <b-dropdown-item @click.prevent="profile">
          {{ $t('settings') }}
        </b-dropdown-item>
        <b-dropdown-item @click.prevent="logout">
          {{ $t('logout') }}
        </b-dropdown-item>
      </b-dropdown>
    </b-masthead-item>
  </b-masthead>
</template>

<script>
import useAuth from '@/composables/useAuth'
import { toRefs, watch } from '@vue/composition-api'
import { mapMutations } from 'vuex'

export default {
  name: 'heading',
  props: {
    isAuthenticated: Boolean,
  },
  setup(props, { emit }) {
    const { getUser, state, logout } = useAuth(emit)
    const { isAuthenticated } = toRefs(props)

    if (props.isAuthenticated) {
      getUser()
    }

    watch(isAuthenticated, () => {
      getUser()
    })

    return { state, logout }
  },
  methods: {
    ...mapMutations(['showOffCanvas']),
    profile() {
      this.$router.push({ name: 'profile' })
    },
  },
}
</script>

<style scoped>
.logo {
  fill: var(--color-primary-10);
}
</style>
