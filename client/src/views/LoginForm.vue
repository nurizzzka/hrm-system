<template>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="email" type="email" class="validate" />
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="password" type="password" class="validate" />
          <label for="password">Password</label>
        </div>
      </div>
      <div class="card-action">
        <div>
          <button class="btn auth-submit" type="submit">
            Войти
            <i class="material-icons right">send</i>
          </button>
        </div>

        <p>
          Нет аккаунта?
          <router-link to="/registration">Зарегистрироваться</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>