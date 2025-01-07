<script lang="ts">
  const zoomLink =
    "https://us05web.zoom.us/j/86838452203?pwd=PhMiOsC1H9tMoNCXAdy89CxF6e7fCr.1";
  $effect.pre(() => {
    window.location.href = zoomLink;
  });
</script>

<section>
  <div class="wrapper">
    <h3>Redirecting to zoom call...</h3>
    <p>
      Click <a href={zoomLink}>here</a> if you are not redirected.
    </p>
  </div>
</section>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;
    gap: 1rem;
    padding-bottom: 20vh;
  }
</style>
