<template>
  <div class="mt">
    <FilterDepartments />
  </div>
</template>

<script>
import FilterDepartments from "@/components/DepartmentsCard/FilterDepartments";
export default {
  name: "Departments",
  components: {
    FilterDepartments,
  },
};
</script>

<style scoped>
.mt {
  margin-top: 2rem;
}
</style>
