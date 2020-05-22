<template>
  <div class="row">
    <div class="col s12">
      <div class="row">
        <div class="input-field col s5">
          <select multiple>
            <option value="" disabled>Фильтр:</option>
            <option value="1">Управление ИТ</option>
            <option value="1">Управление безопасности и контроля</option>
            <option value="2">Бухгалтерия</option>
            <option value="3">Юридическое управление</option>
          </select>
          <label>Фильтр отделов:</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterDepartments",
  mounted() {
    M.AutoInit();
  },
};
</script>
