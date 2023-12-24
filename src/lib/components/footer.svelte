<script lang="ts">
  import Icon from "@iconify/svelte";
  let currentYear = new Date().getFullYear();
  let linkStyle = "underline text-tertiary-500";
</script>

<footer class="mt-8 mb-1 bg-surface-800">
  <div class="text-center pt-3 pb-1 flex flex-col items-center justify-center">
    <div>
      <a href="https://github.com/mukt-srot/cforchad.github.io/blob/main/LICENSE.md" class={linkStyle}>MIT License</a>
      &nbsp; | &nbsp;
      <a href="https://github.com/ashirbadsahu" class={linkStyle}>Ashirbad Sahu</a>&nbsp; | &nbsp;
      <a href="https://github.com/mukt-srot" class={linkStyle}>Muktsrot</a>
    </div>

    <div class="my-2 flex space-x-4">
      <a href="https://twitter.com/ashirbadsahu_" target="_blank" class="mt-1">
         <Icon icon="pajamas:twitter" style="font-size: 18" />
      </a>
      <a href="https://github.com/mukt-srot" target="_blank">
         <Icon icon="mdi:github" style="font-size: 24" />
      </a>
      <a href="http://t.me/ashirbadtele" target="_blank">
         <Icon icon="mdi:telegram" style="font-size: 24" />
      </a>

    </div>
    <p class="">© {currentYear} <a href="https://github.com/mukt-srot" target="_blank" class="underline text-primary-500">Muktsrot</a></p>
  </div>
</footer>
