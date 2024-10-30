<script setup lang="ts">
import { OSDefType } from "./interfaces.ts";
import OperatingSystem from "./components/OperatingSystem.vue";
import raw_images_data from "./images_data.json";

const images_data: OSDefType[] = raw_images_data;
</script>

<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>

  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h5 class="text-white h4">About</h5>
      <p class="text-white">
        All the images come with a single root partition, and use UFS/FFS
        filesystem.
      </p>
      <p class="text-white">
        NetBSD will resize the root partition during the first boot.
      </p>
      <p class="text-white">
        OpenBSD is provided with a script
        (<code>/root/bin/create_partitions.sh</code>) to adapt the partition
        layout after the first boot. The games and X server sets are not
        installed to keep the image minimal.
      </p>
      <p class="text-white">
        In order to be consistent with Cloud-Init, sudo is enabled by default.
        On OpenBSD, doas is still available and just need to be configured.
      </p>
      <p class="text-white">
        Finally, the serial console is enabled by default.
      </p>
      <p class="text-white">
        This images use Cloud-Init master, which supports NetBSD and OpenBSD,
        see:
        <a href="https://github.com/canonical/cloud-init/pull/62">#62</a>,
        <a href="https://github.com/canonical/cloud-init/pull/147">#147</a>.
      </p>
      <p class="text-white">
        The scripts used to build the images are listed below:
      </p>
      <ul class="text-muted">
        <li>
          <a href="https://github.com/virt-lightning/freebsd-cloud-images"
            >FreeBSD</a
          >
        </li>
        <li>
          <a href="https://github.com/virt-lightning/netbsd-cloud-images"
            >NetBSD</a
          >
        </li>
        <li>
          <a href="https://github.com/hcartiaux/openbsd-cloud-image">OpenBSD</a>
        </li>
      </ul>
    </div>
    <div class="col-sm-4 offset-md-1 py-4">
      <h4 class="text-white">Contact</h4>
      <ul class="list-unstyled">
        <li>
          <a
            href="https://github.com/goneri/bsd-cloud-image.org"
            class="text-white"
            >Github</a
          >
        </li>
        <li>
          <a href="https://goneri.lebouder.net" class="text-white">Blog</a>
        </li>
        <li>
          <a
            href="https://matrix.to/#/!gYnpTfoEbtxPJvFlgC:matrix.org?via=matrix.org&via=bsd.cafe"
            class="text-white"
            >Matrix</a
          >
        </li>
        <li>
          <a href="mailto:goneri@lebouder.net" class="text-white">Email</a>
        </li>
      </ul>
    </div>
  </div>
  <main role="main">
    <section class="jumbotron text-center">
      <div class="container">
        <h1>A collection of prebuilt BSD cloud images</h1>
        <p class="lead text-muted">
          These unofficial images are tested on OpenStack and NoCloud (<a
            href="https://virt-lightning.org"
            >with Virt-Lightning</a
          >). They come with
          <a href="https://cloudinit.readthedocs.io/en/latest/">Cloud-init</a>,
          and so they should support all the main Cloud providers.
        </p>
      </div>
    </section>

    <div class="album py-5 bg-light">
      <div class="container">
        <OperatingSystem
          v-for="os_definition in images_data as OSDefType[]"
          :os_name="os_definition.name"
          :versions="os_definition.versions"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
