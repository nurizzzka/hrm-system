<template>
  <div class="mt">
    <FilterDepartments />
  </div>
</template>

<script>
import axios from "axios";

import FilterDepartments from "@/components/DepartmentsCard/FilterDepartments";
export default {
  name: "Departments",
  data() {
    return {
      departments: [],
    };
  },
  components: {
    FilterDepartments,
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/departments")
      .then((response) => {
        this.departments = response.data;
        console.log(departments);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.mt {
  margin-top: 2rem;
}
</style>
