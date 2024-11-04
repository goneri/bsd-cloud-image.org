<script setup lang="ts">
import { VersionDefType } from "../interfaces.ts";
import Version from "./Version.vue";

function prettifyName(os_name: string) {
  switch (os_name) {
    case "freebsd":
      return "FreeBSD";
    case "netbsd":
      return "NetBSD";
    case "openbsd":
      return "OpenBSD";
    case "dragonflybsd":
      return "DragonFlyBSD";
  }
}

defineProps<{ os_name: string; versions: VersionDefType[] }>();

function getBtnClass(index: number, len: number) {
  console.log(`index: ${index}, len: ${len}`);
  return index + 1 === len ? "btn btn-primary" : "btn btn-secondary";
}
</script>

<template>
  <div class="card mb-4 shadow-sm w-75">
    <div class="card-body">
      <h5 class="card-title">{{ prettifyName(os_name) }}</h5>
      <img
        class="bd-placeholder-img card-img-top img-fluid"
        width="100px"
        height="225"
        :src="'/' + os_name + '.svg'"
        :alt="os_name"
        role="img"
        aria-label="Placeholder: Thumbnail"
      />

      <Version
        v-for="(version, index) in versions"
        :os_name
        :version_name="version.name"
        :images="version.images"
        :btn_class="getBtnClass(index, versions.length)"
      />
    </div>
  </div>
</template>

<style scoped></style>
