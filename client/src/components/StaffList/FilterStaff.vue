<template>
  <div class="row">
    <div class="col s12">
      <div class="row">
        <div class="input-field col s5">
          <i class="material-icons prefix">textsms</i>
          <input type="text" id="autocomplete-input" class="autocomplete" />
          <label for="autocomplete-input">Введите ФИО или Должность</label>
        </div>
        <div class="input-field col s5">
          <select multiple>
            <option value="" disabled>Фильтр:</option>
            <option value="1">Болезнь</option>
            <option value="1">Отсутствие</option>
            <option value="2">Опоздание</option>
            <option value="3">Отпуск</option>
            <option value="3">Декрет.отпуск</option>
          </select>
          <label>Фильтр сотрудников:</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterStaff",
  mounted() {
    M.AutoInit();
  },
};
</script>
