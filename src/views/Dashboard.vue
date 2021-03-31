<template>
  <div class="admin">
    <header class="admin__header">
      <a href="/dashboard">
        <img class="logo" src="../assets/logo.png" alt="" />
      </a>
      <div class="logout">
        <a class="btn btn-indigo" href="https://www.google.com/"> Menu1 </a>
        <a class="btn btn-indigo" href="https://www.instagram.com/"> Menu2 </a>
        <button class="btn btn-indigo" type="submit" @click="handleLogout">
          Logout
        </button>
      </div>
    </header>
    <nav class="nav_select">
      <div class="nav_icon">
        <a href="#popup2">
          <font-awesome-icon
            size="2x"
            color="black"
            :icon="['fas', 'arrow-right']"
          />
        </a>
      </div>
    </nav>
    <nav id="popup2" class="admin__nav">
      <div class="nav_close">
        <a href="#">
          <font-awesome-icon
            size="2x"
            color="black"
            :icon="['fas', 'times-circle']"
          />
        </a>
      </div>
      <ul class="menu">
        <li class="menu__item">
          <router-link class="menu_link" to="/dashboard">Dashboard</router-link>
        </li>
        <li class="menu__item">
          <a href="#popup1" class="menu_link">Setting</a>
        </li>
        <li class="menu__item">
          <router-link class="menu_link" to="/another"
            >Another Page</router-link
          >
        </li>
      </ul>
    </nav>
    <main class="admin__main">
      <h2>Dashboard</h2>
      <div class="dashboard">
        <h3>This is Dashboard</h3>
        <div id="popup1" class="overlay">
          <div class="popup">
            <h2>This is the setting Pop Up</h2>
            <a class="close" href="#">&times;</a>
            <div class="content">
              You can put here any things you want. eg: adding login form,
              taking input from user, updating profile etc
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="admin__footer">
      <span> &copy; 2021 Company Inc. </span>
    </footer>
  </div>
</template>
<script>
export default {
  methods: {
    handleLogout(e) {
      e.preventDefault();
      this.$store.commit("setAuthentication", false);
      localStorage.setItem("setAuthentication", "no");
      this.$router.push("/");
    },
  },
};
</script>
