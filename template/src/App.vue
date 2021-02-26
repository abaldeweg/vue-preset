<template>
  <b-app id="app">
    <heading />
    <navigation />
    <b-content>
      <router-view v-if="isAuthenticated" />
      <b-container size="s" v-if="!isAuthenticated">
        <h1>{{ $t('login') }}</h1>
        <profile-login />
      </b-container>
    </b-content>

    <b-notification-bar>
      <b-notification
        v-for="notification in notifications"
        :key="notification.id"
        :type="notification.state"
        :undo="notification.undo"
        hidable
      >
        {{ $t(notification.msg) }}
      </b-notification>
    </b-notification-bar>
  </b-app>
</template>

<script>
import Heading from './components/Heading'
import Navigation from './components/Navigation'
import ProfileLogin from './components/profile/Login'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    Heading,
    Navigation,
    ProfileLogin,
  },
  head: {
    title: 'Home',
    titleTemplate: '%s - <%= name %>',
  },
  data() {
    return {
      notifications: this.$notify.list(),
    }
  },
  computed: {
    ...mapState('user', ['isAuthenticated']),
  },
  mounted: function () {
    this.$store.dispatch('user/check')
    this.$i18n.locale =
      window.localStorage.getItem('locale') || process.env.VUE_APP_I18N_LOCALE
  },
}
</script>

<style>
html {
  --color-primary-10: #d7621d;
  --color-primary-05: #e9915d;
  --color-primary-00: #f3c2a5;
}
</style>
