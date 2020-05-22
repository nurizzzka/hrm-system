<template>
  <div class="workers row mt">
    <FilterStaff />
    <StaffList />
  </div>
</template>

<script>
import StaffList from "@/components/StaffList/StaffList";
import FilterStaff from "../components/StaffList/FilterStaff";

export default {
  name: "NewWorkers",
  components: {
    StaffList,
    FilterStaff,
  },
};
</script>

<style scoped>
.mt {
  margin-top: 2rem;
}
</style>
