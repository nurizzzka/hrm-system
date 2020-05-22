<template>
  <div class="home">
    <WorkingStaff />
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import WorkingStaff from "@/components/Dashboard/WorkingStaff.vue";

export default {
  name: "Home",
  components: {
    WorkingStaff,
  },
};
</script>
