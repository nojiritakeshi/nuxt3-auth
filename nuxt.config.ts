// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@sidebase/nuxt-auth"],
  build: {
    transpile: ["jsonwebtoken"],
  },
  auth: {
    // baseURL: "/",
    provider: {
      type: "local",
      endpoints: {
        getSession: { path: "/user" },
      },
      pages: {
        login: "/",
      },
      token: {
        signInResponseTokenPointer: "/token/accessToken",
      },
      sessionDataType: {
        id: "string",
        email: "string",
        name: "string",
        role: "admin | guest | account",
        subscriptions: "{ id: number, status: 'ACTIVE' | 'INACTIVE' }[]",
      },
    },
    session: {
      // Whether to refresh the session every time the browser window is refocused.
      enableRefreshOnWindowFocus: true,

      // Whether to refresh the session every `X` milliseconds. Set this to `false` to turn it off. The session will only be refreshed if a session already exists.
      // 上記を日本語訳すると、
      // ブラウザのウィンドウがフォーカスされるたびにセッションを更新するかどうか。 これをオフにするには、falseに設定します。 セッションが既に存在する場合のみ、セッションが更新されます。
      enableRefreshPeriodically: 5000,
    },
    globalAppMiddleware: {
      isEnabled: true,
      // addDefaultCallbackUrl: true,
    },
  },
});
