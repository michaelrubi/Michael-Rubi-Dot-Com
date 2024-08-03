<script lang="ts">
import Logo from "$lib/components/Logo.svelte";
import DarkToggle from "./DarkToggle.svelte";

let menuOpen = $state(false);

function toggleMenu() {
  menuOpen = !menuOpen;
}
</script>

<header>
  <div class="wrapper">
    <Logo fill='solid'/>
    <button class="menu-toggle" class:open={menuOpen} onclick={toggleMenu} aria-label="Toggle menu">
      <span></span>
    </button>
    <nav class:open={menuOpen}>
      <ul>
        <li><a href="#projects" onclick={toggleMenu}>Projects</a></li>
        <li><DarkToggle/></li>
      </ul>
    </nav>
  </div>
</header>

<style>
  header .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }

  :global(header svg .letter) {
    fill: var(--txt-clr);
  }

  :global(header svg .mark) {
    fill: var(--primary);
  }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    height: 40px;
    width: 40px;
    position: relative;
    transition: all 0.3s ease;
  }

  .menu-toggle span, 
  .menu-toggle span::before, 
  .menu-toggle span::after {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    background-color: var(--txt-clr);
    transition: all 0.8s ease;
  }

  .menu-toggle span {
    top: 50%;
    transform: translateY(-50%);
  }

  .menu-toggle span::before {
    transform: translateY(-10px);
  }

  .menu-toggle span::after {
    transform: translateY(10px);
  }

  .menu-toggle.open {
    width: 48px;
  }

  .menu-toggle.open span {
    animation: middleBar 0.8s ease forwards;
  }

  .menu-toggle.open span::before {
    animation: menuToggle 0.8s ease forwards;
    --rotation: 45deg;
    --y-mid: -18px;
    --mid-Width: 100%;
  }

  .menu-toggle.open span::after {
    animation: menuToggle 0.8s ease forwards;
    --rotation: -45deg;
    --y-mid: 18px;
    --mid-Width: 40px;
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

  nav ul {
    list-style: none;
    display: flex;
    gap: 3rem;
    margin: 0;
    padding: 0;
  }

  nav ul li {
    display: flex;
    align-items: center;
  }

  nav ul li a {
    color: var(--txt-clr);
    text-decoration: none;
    font: var(--txt-nav);
    letter-spacing: -0.06rem;
    text-transform: uppercase;
  }

  @media (max-width: 510px) {

    .wrapper {
      flex-wrap: wrap; 
      overflow: visible;
    }
    .menu-toggle {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    nav {
      min-width: 100dvw;
      transform: translateX(-2rem);
      max-height: 0;
      margin-top: .75rem;
      overflow: hidden;
      transition: max-height 0.8s ease;
    }
    
    nav.open {
      max-height: calc(100vh - 80px);
    }

    nav ul {
      padding-top: 1rem;
      flex-direction: column;
      align-items: center;
    }

    nav ul li {
      margin-bottom: 1rem;
    }
  }
</style>