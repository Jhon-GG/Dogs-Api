<template>
    <div class="main-box">
        <nav class="navbar">
          <div class="logo">
            <img src="/src/assets/logo.svg" alt="logo" />
            <h1 class="logoTitle"><span>DOG</span> API</h1>
          </div>
          <ul class="ul">
            <a class="home" href="#">HOME</a>
            <li class="list">
                <select class="first" name="first" id="first">
                    <option value="breeds">BREEDS</option>
                </select>
            </li>
            <li class="list">
                <select class="first" name="first" id="first">
                    <option value="breeds">ORIGIN</option>
                </select>
            </li>
            <li class="list">
                <select class="first" name="first" id="first">
                    <option value="breeds">TEMPERAMENT</option>
                </select>
            </li>
            <li class="list">
                <select class="first" name="first" id="first">
                    <option value="breeds">BRED FOR</option>
                </select>
            </li>
          </ul>
        </nav>
    </div>
</template>


<style scoped>

    .main-box{
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100vw;
    height: 10vh;
    }

    .navbar{
        display: flex;
        align-items: center;
        border: 1px solid green;
        flex-direction: row;
        width: 90vw;
        height: 10vh;
        font-family: 'Quicksand';
    }

    .logo{
        display: flex; 
        align-items: center;
        flex-direction: row;
        width: 10vw;
        height: 10vh;
        gap: 1rem;
    }

    .logo img{
        width: 2.5rem;
        height: 2.5rem;
    }

    .logoTitle{
        display: flex;
        color: #000;
        font-weight: bold;
        font-size: 1em; 
        height: auto;
        width: auto;
        font-family: 'Quicksand';
        gap: 0.2rem;
    }

    .logoTitle span{
        color: #FD9B10;
        height: auto;
        width: auto;
    }

    .ul{
        display: flex;
        justify-content: start;
        align-items: center;
        list-style:none;
        width: 50vw;
        height: 10vh;
        gap: 2rem;
        margin-left: 10rem;  
    }

    .home{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #000;
        font-size: 1rem;
        width: auto;
        height: 10vh;  
        text-decoration: none;
        font-weight: bold;
    }

    .list{
        display: flex;
        align-items: center;
        height: 10vh;
        width: auto;
    }

    .first{
        display: flex;
        width: auto;
        height: 3vh;
        color: #000;
        font-weight: bold;
        font-family: 'Quicksand';
        font-size: 1rem;
        border: none;
    }
</style>
  