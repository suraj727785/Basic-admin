<template>
  <div class="admin">
    <header class="admin__header">
      <a href="/">
        <img class="logo" src="../assets/logo.png" alt="" />
      </a>
      <div class="logout">
        <button class="btn btn-indigo" type="submit" @click="handleLogout">
          Logout
        </button>
      </div>
    </header>
    <nav class="admin__nav">
      <ul class="menu">
        <li class="menu__item">
          <router-link class="menu_link" to="/dashboard">Dashboard</router-link>
          |
        </li>
        <li class="menu__item">
          <router-link class="menu_link" to="/another"
            >Another Page</router-link
          >
        </li>
      </ul>
    </nav>
    <main class="admin__main">
      <h2>Another page</h2>
      <div class="dashboard">
        <h3>This is Second page</h3>
      </div>
    </main>
    <footer class="admin__footer">
      <span> &copy; 2021 Company Inc </span>
    </footer>
  </div>
</template>
<script>
export default {
  methods: {
    handleLogout(e) {
      e.preventDefault();
      this.$store.commit("setAuthentication", false);
      this.$router.push("/");
    },
  },
};
</script>
