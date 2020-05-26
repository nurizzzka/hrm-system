<template>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate" />
          <label for="first_name">First Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate" />
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="password" type="password" class="validate" />
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="email" type="email" class="validate" />
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s5">
          <select>
            <option value disabled>Выберите отдел</option>
            <option value="1">Управление ИТ</option>
            <option value="1">Управление безопасности и контроля</option>
            <option value="2">Бухгалтерия</option>
            <option value="3">Юридическое управление</option>
          </select>
          <label>Выбор отдела:</label>
        </div>
      </div>
      <div class="col s2">
        <router-link tag="button" to="/new-workers" class="btn auth-submit red accent-3">Отмена</router-link>
      </div>
      <div class="col s2">
        <router-link tag="button" to="/new-workers" class="btn auth-submit" type="submit">Добавить</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  mounted() {
    M.AutoInit();
  }
};
</script>

<style>
</style>