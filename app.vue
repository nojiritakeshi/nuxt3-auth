<script lang="ts" setup>
import { ref } from "vue";

const { signIn, token, data, status, lastRefreshedAt, signOut, getSession } =
  useAuth();
// const { token } = useAuthState();

const username = ref("");
const password = ref("");

const signInPro = () => {
  signIn({ username: username.value, password: password.value });
};
</script>

<template>
  <div>
    <pre>Status: {{ status }}</pre>
    <pre>Data: {{ data || "no session data present, are you logged in?" }}</pre>
    <pre>Last refreshed at: {{ lastRefreshedAt || "no refresh happened" }}</pre>
    <pre>JWT token: {{ token || "no token present, are you logged in?" }}</pre>
    <form @submit.prevent="signInPro()">
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">sign in</button>
    </form>
    <br />
    <button
      @click="
        signIn(
          { username, password },
          { callbackUrl: `/protected/globally?callbackUrl=${username}` },
        )
      "
    >
      sign in (with redirect to protected page)
    </button>
    <br />
    <button @click="signOut()">sign out</button>
    <br />
    <button @click="getSession({ required: false })">
      refresh session (required: false)
    </button>
    <br />
    <button @click="getSession({ required: true, callbackUrl: '/' })">
      refresh session (required: true)
    </button>
    <br />
    <NuxtLink to="/login"> navigate to Login Page </NuxtLink>
    <br />
    <NuxtLink to="/sample"> go sample </NuxtLink>
    <br />
    <NuxtLink to="/"> go Home </NuxtLink>
    <NuxtPage />
  </div>
</template>
