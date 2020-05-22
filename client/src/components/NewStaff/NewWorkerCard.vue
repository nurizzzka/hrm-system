<template>
  <div class="row">
    <router-link tag="div" to="/new-worker" class="col s12 m6">
      <div class="card">
        <div class="card-content">
          <div class="space-between">
            <span class=" material-icons mr">person</span>
            <span class=" material-icons">
              clear
            </span>
          </div>
          <span class="card-title">Card Title</span>
          <p><b>job title</b></p>
          <p>departnet</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NewWorkerCard",
};
</script>

<style scoped>
#add {
  margin-top: 0.35rem;
}
.space-between {
  justify-content: space-between;
  display: flex;
}
</style>
