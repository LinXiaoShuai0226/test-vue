<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">練習區</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #dbe368;
}

nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>
