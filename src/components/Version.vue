<script setup lang="ts">
import Image from "./Image.vue";

defineProps<{
  os_name: string;
  version_name: string;
  images: any;
  btn_class: string;
}>();

function getBtnClass(os_name: string, flavor_name: string) {
  console.log(
    `os_name: ${os_name}, flavor_name: ${flavor_name} ${["ZFS", "Hammer2"].includes(flavor_name)}`,
  );
  if (["ZFS", "Hammer2"].includes(flavor_name)) {
    return "btn btn-primary";
  }
  if (os_name === "netbsd" && flavor_name === "UFS") {
    return "btn btn-primary";
  }
  return "btn btn-secondary";
}
</script>

<template>
  <button
    type="button"
    :class="btn_class"
    data-bs-toggle="modal"
    :data-bs-target="'#' + os_name + version_name"
  >
    {{ version_name }}
  </button>

  <div
    class="modal fade"
    :id="os_name + version_name"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ os_name }} {{ version_name }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <img
          class="bd-placeholder-img card-img-top img-fluid"
          width="100%"
          height="225"
          :src="'/' + os_name + '.svg'"
          :alt="os_name"
          role="img"
        />

        <div class="modal-body">
          Please select the filesystem of the root partition.
        </div>
        <div class="modal-footer">
          <Image
            v-for="image in images"
            :flavor_name="image.flavor"
            :url="image.url"
            :btn_class="getBtnClass(os_name, image.flavor)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
