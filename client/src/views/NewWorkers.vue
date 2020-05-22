<template>
  <div class="workers row mt">
    <FilterStaff />
    <NewWorkerCard />
  </div>
</template>

<script>
import NewWorkerCard from "@/components/NewStaff/NewWorkerCard";
import FilterStaff from "../components/StaffList/FilterStaff";

export default {
  name: "NewWorkers",
  components: {
    NewWorkerCard,
    FilterStaff,
  },
};
</script>

<style scoped>
.mt {
  margin-top: 2rem;
}
</style>
