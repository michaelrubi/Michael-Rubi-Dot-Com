<script lang="ts">
import Logo from "$lib/components/Logo.svelte";
import DarkToggle from "./DarkToggle.svelte";
// biome-ignore lint/style/useConst: <explanation>
let open = $state(false);
</script>

<header>
    <div class="wrapper">
      <Logo fill='solid'/>
    <input type="checkbox" name="nav-toggle" id="nav-toggle" bind:checked={open}>
    <label for="nav-toggle"><span></span></label>
    <ul>
        <li><a href="#projects">Projects</a></li>
        <li><DarkToggle/></li>
    </ul>
    </div>
</header>

<style>
  
    header .wrapper{
        display: flex;
        justify-content: space-between;
        padding: 1rem 2rem;
    }

    :global(header svg .letter) {
    /* header svg .letter { */
        fill: var(--txt-clr);
    }

    :global(header svg .mark) {
    /* header svg .mark { */
        fill: var(--primary);
    }

    header input[type="checkbox"] {
  display: none;
}

header label {
  display: none;
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 40px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}

header label span, 
header label span::before, 
header label span::after {
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  height: 4px;
  background-color: var(--txt-clr);
  transition: all 0.8s ease;
}

header label span {
  top: 50%;
  transform: translateY(-50%);
}

header label span::before {
  transform: translateY(-10px);
  --rotation: 45deg;
  --y-mid: -18px;
  --mid-Width: 100%;
}

header label span::after {
  transform: translateY(10px);
  --rotation: -45deg;
  --y-mid: 18px;
  --mid-Width: 40px;
}

header input:checked ~ label {
    width: 48px;
}

header input:checked ~ label span {
  animation: middleBar 0.8s ease forwards;
}

header input:checked ~ label span::before {
  animation: menuToggle 0.8s ease forwards;
}

header input:checked ~ label span::after {
  animation: menuToggle 0.8s ease forwards;
}
@keyframes middleBar {
  66% {
    background: var(--txt-clr);
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
    background: transparent;
  }
}

@keyframes menuToggle {
  66% {
    transform: translateY(var(--y-mid));
    width: var(--mid-Width);
  }
  100% {
    transform: rotate(var(--rotation));
    width: 100%;
  }
}

header ul {
  list-style: none;
  display: flex;
  gap: 3rem;
  margin: 0;
}

header ul li {
  display: flex;
  align-items: center;
  list-style: none;
}

header ul li a {
  color: var(--txt-clr);
  text-decoration: none;
  font: var(--txt-nav);
  letter-spacing: -0.06rem;
  text-transform: uppercase;
}


@media (max-width: 768px) {
    label {
        display: block;
    }
        
}
</style>