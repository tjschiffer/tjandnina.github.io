import Vue from 'vue'

export default () => {
  document.querySelectorAll('[data-tj-login]').forEach(async (login) => {
    const loginApp = await import('./login.vue')
    new Vue({ // eslint-disable-line no-new
      el: login,
      render: h => h(loginApp.default)
    })
  })
}
