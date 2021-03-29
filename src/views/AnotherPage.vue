<template>
  <div class="admin">
    <header class="admin__header">
      <a href="/viewAllJobs">
        <img class="logo" src="../assets/logo.png" alt="" />
      </a>
    </header>
    <nav class="admin__nav">
      <ul class="menu">
        <li class="menu__item">
          <router-link class="menu_link" to="/">Dashboard</router-link> |
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
