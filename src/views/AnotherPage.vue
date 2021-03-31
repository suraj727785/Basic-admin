<template>
  <div class="admin">
    <header class="navbar fixed-top p-0 shadow">
      <a href="/dashboard">
        <img class="logo" src="../assets/logo.png" alt="" />
      </a>
      <div class="logout">
        <button class="btn btn-indigo" type="submit" @click="handleLogout">
          Logout
        </button>
      </div>
    </header>
    <!-- Short Sidebar -->
    <nav id="popup3" class="admin__nav_short">
      <div class="nav_select">
        <a href="#popup2" class="menu_link">
          <font-awesome-icon size="lg" color="#eebfbf" :icon="['fas', 'bars']"
        /></a>
      </div>
      <ul class="menu">
        <li class="menu__item">
          <router-link class="menu_link" to="/dashboard">
            <font-awesome-icon
              size="lg"
              color="#eee1e1"
              :icon="['fas', 'bars']"
          /></router-link>
        </li>
        <li class="menu__item">
          <router-link class="menu_link" to="/dashboard">
            <font-awesome-icon
              size="lg"
              color="#eee1e1"
              :icon="['fas', 'chart-pie']"
          /></router-link>
        </li>
        <li class="menu__item">
          <router-link class="menu_link" to="/dashboard">
            <font-awesome-icon
              size="lg"
              color="#eee1e1"
              :icon="['fas', 'chart-bar']"
          /></router-link>
        </li>
        <li class="menu__item">
          <router-link class="menu_link" to="/dashboard">
            <font-awesome-icon size="lg" color="#eee1e1" :icon="['fas', 'cog']"
          /></router-link>
        </li>
      </ul>
    </nav>
    <!-- Long sidebar -->
    <nav id="popup2" class="admin__nav">
      <div class="nav_select">
        <a href="#popup3">
          <font-awesome-icon
            class="nav_icon"
            size="2x"
            color="#eebfbf"
            :icon="['fas', 'chevron-left']"
        /></a>
      </div>
      <ul class="menu">
        <li class="menu__item">
          <router-link class="menu_link" to="/dashboard">
            <font-awesome-icon
              size="lg"
              color="#eee1e1"
              :icon="['fas', 'bars']"
            />
            Dashboard</router-link
          >
        </li>
        <li class="menu__item">
          <router-link class="menu_link" to="/another">
            <font-awesome-icon
              size="lg"
              color="#eee1e1"
              :icon="['fas', 'chart-pie']"
            />
            Financial Planing</router-link
          >
        </li>
        <li class="menu__item">
          <router-link class="menu_link" to="/dashboard">
            <font-awesome-icon
              size="lg"
              color="#eee1e1"
              :icon="['fas', 'chart-bar']"
            />
            Reports</router-link
          >
        </li>
        <li class="menu__item">
          <a class="menu_link" href="#popup">
            <font-awesome-icon
              size="lg"
              color="#eee1e1"
              :icon="['fas', 'cog']"
            />
            Setting</a
          >
        </li>
      </ul>
    </nav>
    <main class="admin__main">
      <div id="popup" class="overlay">
        <div class="popup">
          <h2>This is the setting Pop Up</h2>
          <a class="close" href="#">&times;</a>
          <div class="content">
            You can put here any things you want. eg: adding login form, taking
            input from user, updating profile etc
          </div>
        </div>
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
      localStorage.setItem("setAuthentication", "no");
      this.$router.push("/");
    },
  },
};
</script>
